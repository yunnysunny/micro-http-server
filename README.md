# micro-http-server

[![build status][action-image]][action-url]
[![GitHub license](https://img.shields.io/github/license/yunnysunny/micro-http-server)](https://github.com/yunnysunny/micro-http-server)
[![node version][node-image]][node-url]

[npm-url]: https://npmjs.org/package/@yunnysunny/micro-http-server
[action-image]: https://github.com/yunnysunny/micro-http-server/workflows/CI/badge.svg
[action-url]: https://github.com/yunnysunny/micro-http-server/actions/workflows/ci.yml

[node-image]: https://img.shields.io/badge/node.js-%3E=_12-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

[![NPM](https://nodei.co/npm/micro-http-server.png?downloads=true)](https://nodei.co/npm/micro-http-server/) 

在使用 Node 来构建微服务程序时，发现性能比较差。当时我们的程序是基于 Express 框架开发的，为了做对比测试，我们使用纯 Node 开发了一个 Hello World 程序，然后跟 Express 的 Hello World 做对比，发现 Express 对于性能的损耗确实比较大。但是脱离 Express 来构建我们的服务代码，还是比较不方便的，为此我们开发了这个项目，力求在实现简单的 GET / POST 请求处理能力的基础上保持程序的高性能。

## 适合什么

本项目适合基于 HTTP 的微服务程序开发，项目中的请求包体简单，请求者只需要传递普通 query string 或者 表单数据 来完成和服务器端的通信。

## 不适合什么

本项目的 POST 数据仅仅支持表单，不支持 JSON 格式，其他除表单外 POST 类型，比如说上传文件也不支持；本项目支持 GET / POST 两种 HTTP Method，如果你需要使用 RESTFull 类型的请求方式，比如说 DELETE PUT 之类的 Method，则本项目不支持。

## 安装

```
yarn add micro-http-server
```

## 使用

```javascript
const http = require('http');
const Server = require('micro-http-server');

const server = new Server({routers: {
    '/': function(req, res) {
        res.send(req.query);
    },
}});
http.createServer(function(req, res) {
    server.handleRequest(req, res);
}).listen(3333);

```

## 性能测试

本项目使用 jmeter 对原生js、micro-http-server 、koa、express 进行打压，压测报告分别如下：

[原生js](https://yunnysunny.github.io/micro-http-server/native)
[micro-http-server](https://yunnysunny.github.io/micro-http-server/mhs)
[koa](https://yunnysunny.github.io/micro-http-server/koa)
[express](https://yunnysunny.github.io/micro-http-server/express)
[nestjs](https://yunnysunny.github.io/micro-http-server/nestjs)

## 协议

MIT

