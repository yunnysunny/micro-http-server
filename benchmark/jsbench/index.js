/* eslint-disable no-console */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
const reqUtil = require('../util/req');
let server = null;
const port = Number(process.env.LISTEN_PORT) || 3000;
const url = 'http://localhost:' + port;
const config = {
    defer: true,
    minTime: 60,
};
['native','mhs', 'koa','express'].forEach(function _doBench(framework) {
    suite.add(framework,{
        ...config,
        fn: function _nativeBech(deferred) {
            server = require('../frameworks/' + framework);
            reqUtil.doGet(url, function(err) {
                if (err) {
                    console.error(err);
                    deferred.resolve(err);
                    return;
                }
                deferred.resolve();
            });        
        }
    });
});


suite.on('cycle', function(event) {
    console.info('\t' + String(event.target));
    server.stop();
}).on('complete', function() {
    console.info('Fastest is ' + this.filter('fastest').map('name'));
    console.log();
}).run({ 'async': false });