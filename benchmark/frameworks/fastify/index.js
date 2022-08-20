/* eslint-disable no-console */
// Require the framework and instantiate it
const fastify = require('fastify')();
const port = Number(process.env.LISTEN_PORT) || 3001;

// Declare a route
// eslint-disable-next-line no-unused-vars
fastify.get('/', async(_request, _reply) => {
    return 'hello world';
});

// Run the server!
const start = async() => {
    try {
        await fastify.listen({ port });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
start();