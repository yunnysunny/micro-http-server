package main

import (
	"fmt"
	"net/http"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("begin gin")

	httpPort, _ := strconv.ParseUint(os.Getenv("LISTEN_PORT"), 10, 32)
	if httpPort == 0 {
		httpPort = 3001
	}
	address := ":" + strconv.Itoa(int(httpPort))

	gin.SetMode(gin.ReleaseMode)
	r := gin.New()
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "hello world")
	})
	r.Run(address) // listen and serve on address
}
