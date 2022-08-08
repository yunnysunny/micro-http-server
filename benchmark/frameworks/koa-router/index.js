const Koa = require('koa');
const Router = require('@koa/router');
const http = require('http');
const setup = require('../../util/server_setup');
const app = new Koa();
const router = new Router();
const port = Number(process.env.LISTEN_PORT) || 3001;

router.get('/', (ctx, next) => {
    ctx.body = 'Hello World';
});
app
    .use(router.routes())
    .use(router.allowedMethods());
const server = http.createServer(app.callback()).listen(port);
setup.setTimeout(server);

exports.stop = function _stop(callback) {
    server.close(callback);
};
