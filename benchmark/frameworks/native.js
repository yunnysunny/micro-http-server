const http = require('http');
const setup = require('../util/server_setup');
const port = Number(process.env.LISTEN_PORT) || 3000;
const server = http.createServer((req, res) => {
    res.end('Hello World');
}).listen(port);
setup.setTimeout(server);

exports.stop = function _stop(callback) {
    server.close(callback);
};