const { expect } = require('chai');
const request = require('supertest');
const Server = require('../');
describe('基本测试', function() {
    it('启动服务', function(done) {
        
        const server = new Server({routers: {
            '/': 200,
        }});
        request(server.handleRequest.bind(server))
            .get('/')
            .expect(200)
            .end(function(err) {
                done(err);
            });

    });
    it('返回字符串', function(done) {
        const STR = 'SOME';
        const server = new Server({routers: {
            '/': STR,
        }});
        request(server.handleRequest.bind(server))
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.text).to.be.equal(STR);
                done();
            });

    });
    it('设置自定义头信息', function(done) {
        const data = {
            a: '1'
        };
        const server = new Server({routers: {
            '/': function(req, res) {
                res.type('json');
                res.send(data);
            },
        }});
        request(server.handleRequest.bind(server))
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body).to.have.property('a').and.equal('1');
                done();
            });

    });
    it('设置xml信息', function(done) {
        const XML = `
            <xml>
                <item>1</item>
            </xml>
        `;
        const server = new Server({routers: {
            '/': function(req, res) {
                res.type('xml');
                res.send(XML);
            },
        }});
        request(server.handleRequest.bind(server))
            .get('/')
            .expect(200)
            .expect('Content-Type', 'application/xml; charset=utf-8')
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.text).to.be.equal(XML);

                done();
            });

    });
    it('设置不支持的mime，默认返回json', function(done) {
        const JSON = '{}';
        const server = new Server({routers: {
            '/': function(req, res) {
                res.type('not_support');
                res.send(JSON);
            },
        }});
        request(server.handleRequest.bind(server))
            .get('/')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.text).to.be.equal(JSON);

                done();
            });

    });
    it('返回404', function(done) {
        const STR = 'SOME';
        const server = new Server({routers: {
            '/': STR,
        }});
        request(server.handleRequest.bind(server))
            .get('/xx')
            .expect(404)
            .end(function(err) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
    it('发送query', function(done) {
        const data = {
            a: '1'
        };
        const server = new Server({routers: {
            '/': function(req, res) {
                res.send(req.query);
            },
        }});
        request(server.handleRequest.bind(server))
            .get('/')
            .expect(200)
            .query(data)
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body).to.have.property('a').and.equal('1');
                done();
            });
    });
    it('发送post', function(done) {
        const data = {
            a: '1'
        };
        const server = new Server({routers: {
            '/': function(req, res) {
                res.send(req.body);
            },
        }});
        request(server.handleRequest.bind(server))
            .post('/')
            .expect(200)
            .type('form')
            .send(data)
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body).to.have.property('a').and.equal('1');
                done();
            });
    });

    it('不支持的数据返回406', function(done) {
        const data = {
            a: '1'
        };
        const server = new Server({routers: {
            '/': function(req, res) {
                res.send(req.body);
            },
        }});
        request(server.handleRequest.bind(server))
            .post('/')
            .expect(406)
            .send(data)
            .end(function(err) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});