const http = require('http');
const http_codes = require('./http_codes');
const mime = require('mime');
const JSON_MIME_TYPE = 'application/json; charset=utf-8';

module.exports = function _initResClass() {
    http.ServerResponse.prototype.set = function set(key, val) {
        if (typeof key !== 'string' || typeof val === 'undefined') {
            return;
        }
        if (key.toLowerCase() === 'content-type') {
            return this.type(val);
        }
        this.setHeader(key, val);
        return val;
    };
    http.ServerResponse.prototype.type = function type(val) {
        if (!val || typeof val !== 'string') {
            return;
        }

        let content_type = JSON_MIME_TYPE;
        if (!val.includes('/')) {
            val = mime.getType(val);
            content_type = val || content_type;
        }
        if (!content_type.includes('charset=')) {
            content_type = `${val}; charset=utf-8`;
        }
        this.setHeader('Content-Type', content_type);
        return content_type;
    };
    http.ServerResponse.prototype.send = function send(data) {
        switch(typeof data) {
        case 'string': 
            return this.end(data);
        case 'object': 
            this.setHeader('Content-Type', JSON_MIME_TYPE);
            return this.end(JSON.stringify(data));
        default: return this.end((data || '').toString());
        }
    };
    http.ServerResponse.prototype.sendStatus = function sendStatus(code, msg = '') {
        const res = this;
        res.statusCode = code;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        const msgRes = msg || http_codes[code];
        res.end(`${msgRes}`);
    };
};