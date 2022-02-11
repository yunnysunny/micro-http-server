const Koa = require('koa');
const http = require('http');
const setup = require('../util/server_setup');
const app = new Koa();
const port = Number(process.env.LISTEN_PORT) || 3000;

app.use(async ctx => {
    ctx.body = 'Hello World';
});
const server = http.createServer(app.callback()).listen(port);
setup.setTimeout(server);

exports.stop = function _stop(callback) {
    server.close(callback);
};
