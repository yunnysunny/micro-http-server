const http = require('http');
const zlib = require('zlib');



module.exports = function _initReqClass({bodyLimit} = {}) {
    Object.defineProperty(http.IncomingMessage.prototype, 'ip', {// 兼容express部分api------------start
        configurable: true,
        enumerable: true,
        get() {
            const req = this;
            const proxyAddrs = req.headers['x-forwarded-for'] || '';
            const socketAddr = req.connection.remoteAddress;
            return proxyAddrs ? `${socketAddr},${proxyAddrs}` : socketAddr;
        }
    });
    http.IncomingMessage.prototype.get = function get(key) {
        if (typeof key !== 'string') {
            return;
        }
        return this.headers[key.toLowerCase()];
    };
    
    // 兼容express部分api------------end
    http.IncomingMessage.prototype.readBody = async function readBody() {
        const req = this;
        const content_encoding = (req.headers['content-encoding'] || '').toLowerCase() || '';
        let complete = false;
        let body_str = '';
        let received = 0;
        const _readLimit = bodyLimit;
    
        let stream = req;
        switch (content_encoding) {
        case 'deflate':
            stream = zlib.createInflate();
            req.pipe(stream);
            break;
        case 'gzip':
            stream = zlib.createGunzip();
            req.pipe(stream);
            break;
        }
        return new Promise((reslove) => {
            // 读取监听
            stream.on('aborted', onAborted);
            stream.on('close', cleanup);
            stream.on('data', onData);
            stream.on('error', onEnd);
            stream.on('end', onEnd);
            // 移除读取监听
            function cleanup() {
                stream.off('aborted', onAborted);
                stream.off('data', onData);
                stream.off('end', onEnd);
                stream.off('error', onEnd);
                stream.off('close', cleanup);
            }
            // 接收数据
            function onData(chunck) {
                if (complete) return;
                body_str += chunck.toString('utf8');
                received += chunck.length;
                // body数据超过限制
                if (received > _readLimit) {
                    done({ code: 413 });
                }
            }
            // 接收结束
            function onEnd(err) {
                if (complete) return;
                if (err) {
                    return done({ code: 400, msg: err.message || '' });
                }
                done({ code: 200, body_str });
            }
            // 接收终止
            function onAborted() {
                if (complete) return;
                done({ code: 400, msg: 'Request Aborted' });
            }
            // 读取完成
            function done(result) {
                // 标记完成读取
                complete = true;
                // 移除监听
                cleanup();
                // 返回结果
                reslove(result);
            }
        });
    };

    http.IncomingMessage.prototype.query = null;
    http.IncomingMessage.prototype.body = null;
    http.IncomingMessage.prototype.path = null;
};

