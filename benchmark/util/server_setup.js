const TIMEOUT_SERVER = Number(process.env.TIMEOUT_SERVER) || 1000 * 60;
/**
 * 
 * @param {import('http').Server} server 
 */
exports.setTimeout = function(server) {
    server.timeout = TIMEOUT_SERVER;
    server.keepAliveTimeout = TIMEOUT_SERVER;
};