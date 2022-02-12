const express = require('express');
const http = require('http');
const setup = require('../util/server_setup');
const app = express();
const port = Number(process.env.LISTEN_PORT) || 3001;

app.get('/', (req, res) => {
    res.send('Hello World');
});
const server = http.createServer(app).listen(port, () => {
    // eslint-disable-next-line no-console
    // console.log(`Example app listening on port ${port}`);
});
setup.setTimeout(server);

exports.stop = function _stop(callback) {
    server.close(callback);
};
