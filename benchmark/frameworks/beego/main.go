package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/beego/beego/v2/server/web"
)

type MainController struct {
	web.Controller
}

func (this *MainController) Get() {
	this.Ctx.WriteString("hello world")
}


func main() {
	fmt.Println("begin beego") 

	httpPort, _ := strconv.ParseUint(os.Getenv("LISTEN_PORT"), 10, 32)
	if (httpPort == 0) {
		httpPort = 3001
	}
	address := ":" + strconv.Itoa(int(httpPort))
	web.Router("/", &MainController{})
    web.Run(address)
}