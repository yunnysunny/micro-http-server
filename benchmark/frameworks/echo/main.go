package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/labstack/echo/v4"
	//   "github.com/labstack/echo/v4/middleware"
	"net/http"
)

func main() {
  // Echo instance
  e := echo.New()

  // Middleware
//   e.Use(middleware.Logger())
//   e.Use(middleware.Recover())

  // Routes
  e.GET("/", hello)
  fmt.Println("begin echo") 

  httpPort, _ := strconv.ParseUint(os.Getenv("LISTEN_PORT"), 10, 32)
  if (httpPort == 0) {
	  httpPort = 3001
  }
  address := ":" + strconv.Itoa(int(httpPort))
  // Start server
  e.Start(address)
}

// Handler
func hello(c echo.Context) error {
  return c.String(http.StatusOK, "hello world")
}