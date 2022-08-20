package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/ryouaki/koa"
)

func main() {
	fmt.Println("begin golang-koa")

	httpPort, _ := strconv.ParseUint(os.Getenv("LISTEN_PORT"), 10, 32)
	if httpPort == 0 {
		httpPort = 3001
	}
	app := koa.New() // 初始化服务对象

	// 设置api路由，其中var为url传参
	app.Get("/", func(ctx *koa.Context, next koa.Next) {
		ctx.SetBody([]byte("hello world"))
	})

	err := app.Run(int(httpPort)) // 启动
	if err != nil {          // 是否发生错误
		fmt.Println(err)
	}
}
