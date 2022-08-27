# 压测编写说明

## 创建文件夹
在 framework 中创建一个文件夹，以 web 框架的名字命名。
### Node.js

在新建的文件夹中添加 package.json 和依赖。入口文件命名为 index.js，然后在 package.json 中增加如下 script：
```json
"scripts": {
"start:back": "nohup node index.js > nohup.log &"
}
```
### Golang
在新建的文件夹中，通过 `go mod init 文件夹名-test` 来初始化项目，然后编写 golang 代码。

## 添加 CI 配置
### Node.js
在 .github/workflows/pages.yml 中的 `jobs.benchmark.strategy.matrix.include` 中增加如下配置

```yaml
- framework: 框架名字跟framework下新建的文件夹名保持一致
  install-deps-separated: 1
```

### Golang

在 .github/workflows/pages.yml 中的 `jobs.benchmark.strategy.matrix.include` 中增加如下配置

```yaml
- framework: 框架名字跟framework下新建的文件夹名保持一致
  golang: 1
```