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
> 由于 github 自带的免费的 github action 的 runner 机器配置过低，只有 2C2G，所以我只能采用自建自己的模式来运行性能测试。目前我自己购买了一台北美的虚拟机，配置为 4C8G，CPU 型号为 `Intel/CascadeLakeR`。CPU 详细配置如下：
```
processor	: 3
vendor_id	: GenuineIntel
cpu family	: 6
model		: 85
model name	: Intel Xeon Processor (Cascadelake)
stepping	: 6
microcode	: 0x1
cpu MHz		: 2992.968
cache size	: 16384 KB
physical id	: 0
siblings	: 4
core id		: 1
cpu cores	: 2
apicid		: 3
initial apicid	: 3
fpu		: yes
fpu_exception	: yes
cpuid level	: 13
wp		: yes
flags		: fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl xtopology cpuid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch cpuid_fault invpcid_single ssbd ibrs ibpb fsgsbase bmi1 hle avx2 smep bmi2 erms invpcid rtm avx512f avx512dq rdseed adx smap clflushopt clwb avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 arat pku ospke avx512_vnni
bugs		: cpu_meltdown spectre_v1 spectre_v2 spec_store_bypass l1tf mds swapgs taa itlb_multihit
bogomips	: 5985.93
clflush size	: 64
cache_alignment	: 64
address sizes	: 46 bits physical, 48 bits virtual
power management:
```
> 出于基准测试的目的，当前所有的应用启动的时候，都只分配一个核的 CPU。

本项目使用 jmeter 对原生js、micro-http-server 、koa、express 进行打压，压测报告分别如下：

- [原生js](https://yunnysunny.github.io/micro-http-server/native)
- [micro-http-server](https://yunnysunny.github.io/micro-http-server/mhs)
- [koa](https://yunnysunny.github.io/micro-http-server/koa)
- [koa-with-router](https://yunnysunny.github.io/micro-http-server/koa-router)
- [express](https://yunnysunny.github.io/micro-http-server/express)
- [nestjs](https://yunnysunny.github.io/micro-http-server/nestjs)
- [fastify](https://yunnysunny.github.io/micro-http-server/fastify)
- [beego](https://yunnysunny.github.io/micro-http-server/beego)
- [echo](https://yunnysunny.github.io/micro-http-server/echo)
- [fasthttp](https://yunnysunny.github.io/micro-http-server/fasthttp)
- [fiber](https://yunnysunny.github.io/micro-http-server/fiber)
- [gin](https://yunnysunny.github.io/micro-http-server/gin)
- [golang-koa](https://yunnysunny.github.io/micro-http-server/golang-koa)

## 协议

MIT

