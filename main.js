const fastify = require('fastify')({
    logger: true
})

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.listen({ port: 7000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})
