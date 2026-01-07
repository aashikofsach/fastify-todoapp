const fastify = require("fastify")({ logger: true });

const PORT = 3000;
async function start() {
  try {
    await fastify.listen({ port: PORT }, () => {
      console.log(`server is running on : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
