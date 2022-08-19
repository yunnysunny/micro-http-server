package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/valyala/fasthttp"
)
func FastHTTPHandler() fasthttp.RequestHandler {
	return func(ctx *fasthttp.RequestCtx) {
		ctx.Response.SetBody([]byte("hello world"))
	}
}
func main() {
	fmt.Println("begin fasthttp") 

	httpPort, _ := strconv.ParseUint(os.Getenv("LISTEN_PORT"), 10, 32)
	if (httpPort == 0) {
		httpPort = 3001
	}
	address := ":" + strconv.Itoa(int(httpPort))
	fasthttp.ListenAndServe(address, FastHTTPHandler())
}