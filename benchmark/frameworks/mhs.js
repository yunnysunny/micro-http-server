const http = require('http');
const Server = require('../../');
const setup = require('../util/server_setup');
const port = Number(process.env.LISTEN_PORT) || 3000;

const serverMhs = new Server({routers: {
    '/': function(req, res) {
        res.send('Hello World');
    },
}});
const server = http.createServer(function(req, res) {
    serverMhs.handleRequest(req, res);
}).listen(port);
setup.setTimeout(server);

exports.stop = function _stop(callback) {
    server.close(callback);
};