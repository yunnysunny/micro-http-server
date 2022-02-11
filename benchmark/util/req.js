const http = require('http');

exports.doGet = function _doGet(url, callback) {
    const req = http.request(url, function(res) {
        res.on('end', function() {
            callback();
        });
    });
    req.on('error', function(err) {
        callback(err);
    });
};