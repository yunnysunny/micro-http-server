package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func main() {
	fmt.Println("begin fiber") 

	httpPort, _ := strconv.ParseUint(os.Getenv("LISTEN_PORT"), 10, 32)
	if (httpPort == 0) {
		httpPort = 3001
	}
	address := ":" + strconv.Itoa(int(httpPort))
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Listen(address)
}