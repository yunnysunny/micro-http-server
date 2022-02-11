const slogger = require('node-slogger');
const qs = require('qs');
const requestClass = require('./request');
const responseClass = require('./response');
const ALLOW_METHODS = ['POST', 'GET', 'OPTIONS'];
const QUERY_KEYS_LIMIT = 1000; // 限制query的key数量为1000
const BODY_LIMIT = 1048576; // 限制body大小为1mb

/**
 * @function RouterFunction
 * @param {requestClass} req
 * @param {responseClass} res
 */
/**
 * 路由对象，里面包含路由函数和是否打印日志字段
 * @typedef {{fun: RouterFunction, isLogDisabled: Boolean}} RouterObject
 */

/**
 * 路由实例
 * @typedef {RouterFunction | RouterObject | String | Number} RouterItem
 */

class Server {
    /**
     * @param {Object} options
     * @param {Number} [options.bodyLimit=1048576] 正文最大上限
     * @param {Array.<String>} [crossDomainHeaders=[]] 允许跨域头信息
     * @param {Number} [options.queryKeysLimit=1000] querystring key 最大上限
     * @param {Object.<string, RouterItem>} [routers={}] 路由字典，key 为 http path，
     * value 为 RouterItem
     */
    constructor({
        bodyLimit = BODY_LIMIT, 
        crossDomainHeaders = [],
        queryKeysLimit = QUERY_KEYS_LIMIT,
        routers = {}
    } = {}) {
        requestClass({bodyLimit});
        responseClass();
        this._crossDomainHeaders = '';
        if (crossDomainHeaders && crossDomainHeaders.length && Array.isArray(crossDomainHeaders)) {
            this._crossDomainHeaders = crossDomainHeaders.join(',');
        }
        this._routers = {};
        this._logPaths = {};
        this._initRoute(routers);
        
        this._queryKeysLimit = queryKeysLimit;
    }
    _initRoute(routers) {
        for (const path in routers) {
            const item = routers[path];
            if (item && !item.isLogDisabled) {
                this._logPaths[path] = true;
            }
            if (!item) {
                throw new Error(`路由 ${path} 的配置项为空`);
            }
            if (typeof (item) === 'function') {
                this._routers[path] = item;
                continue;
            }
            if (typeof (item) === 'object') {
                if (typeof (item.fun) !== 'function') {
                    throw new Error(`路由 ${path} 的 fun 属性不是函数`);
                }
                this._routers[path] = item.fun;
                continue;
            }
            if (typeof (item) === 'number') {
                this._routers[path] = function(req, res) {
                    res.sendStatus(item);
                };
                continue;
            }
            if (typeof (item) === 'string') {
                this._routers[path] = function(req, res) {
                    res.sendStatus(200, item);
                };
                continue;
            }
            throw new Error(`不支持的路由数据:${item}`);
        }
    }
    _parsePath(req) {
        let url = req.url;
        try {
            url = decodeURIComponent(url);
        } catch (error) {
            slogger.error('decodeURIComponent error:', error?.message);
        }
        let split_index = url.indexOf('?');
        split_index = split_index === -1 ? url.length : split_index;
    
        // 解析path和search
        req.path = url.substring(0, split_index);
        req.search = url.substring(split_index);
    }
    _filterRequest(req, res) {
        const method = req.method.toUpperCase();
        // 请求方法过滤
        if (!ALLOW_METHODS.includes(method)) {
            res.sendStatus(405);
            return false;
        }
    
        // 跨域支持
        const origin = req.headers['origin'] || '';
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Headers',
            `X-Requested-With,${this._crossDomainHeaders}`);
        res.setHeader('Access-Control-Allow-Methods', ALLOW_METHODS.join(','));
        if (method === 'OPTIONS') {
            res.sendStatus(200);
            return false;
        }
        
    
        // 只支持解析普通form表单(application/x-www-form-urlencoded)
        if (method === 'POST') {
            const content_type = req.headers['content-type'] || '';
            const is_include = content_type.startsWith('application/x-www-form-urlencoded');
            if (!is_include) {
                res.sendStatus(406, `Nonsupport Content-Type: ${content_type}`);
                return false;
            }
        }
        return true;
    }
    async _parserRequest(req, res) {
        // 默认值

        const path =  req.path;

        // 不支持的route, 响应404
        if (!this._routers[path]) {
            res.sendStatus(404);
            return false;
        }
        req.query = {};
        req.body = {};
        // 解析query, 只解析 _queryKeysLimit 个key
        const query_str = req.search.substring(1);
        if (query_str.length > 0) {
            req.query = qs.parse(query_str, null, null, { maxKeys: this._queryKeysLimit });
        }
    
        // post请求,解析body(普通form表单形式:application/x-www-form-urlencoded)
        const content_length = Number(req.headers['content-length']) || 0;
        if (content_length > 0 && req.method.toUpperCase() === 'POST') {
            const { code, msg, body_str } = await req.readBody();
            if (code !== 200) {
                // 读取body数据失败，响应错误
                res.sendStatus(code, msg);
                return false;
            }
            req.body = qs.parse(body_str);
        }
        return true;
    }

    _initRequest(req, res) {
        // 配置请求级别日志打印
        if (!this._logPaths[req.path]) {
            return;
        }
        let hasLoged = false;
        res.on('finish', doLog);
        req.on('aborted', doLog);
        req.on('error', doLog);
        const start = Date.now();
        function doLog() {
            if (hasLoged) return;
            const referer = req.headers.referrer || req.headers.referer || '';
            const user_agent = req.headers['User-Agent'] || '';
            const content_length = req.headers['content-length'] || -1;
            // eslint-disable-next-line max-len
            slogger.info(`pid(${process.pid}) duration(${Date.now() - start}ms) content-length(${content_length}) "HTTP/${req.httpVersion} ${res.statusCode} ${req.ip} ${req.method} ${req.url} ${referer} ${user_agent}"`);
            hasLoged = true;
        }
    }
    async handleRequest(req ,res) {
        this._parsePath(req);
        this._initRequest(req, res);
        if (!this._filterRequest(req, res)) {
            return;
        }
        await this._parserRequest(req, res);
        this._routers[req.path](req, res);
    }
}

module.exports = Server;