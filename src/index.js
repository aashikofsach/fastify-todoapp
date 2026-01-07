const fastify = require("fastify")({ logger: true });

const PORT = 8000;

// fastify.addHook("onReady", function listener(done) {
//   console.log("Server is ready to take request");
//   done();
// });

// fastify.addHook("onClose", function listener() {
//   console.log("Server is stopping here ");
//   //   done();
// });

fastify.get("/ping",()=>{
    // fastify.log.info("ping png and ping png")
    return "pong"
})

// other ways is 
fastify.route({
        url : "/hello",
        method : "POST",
        handler : function(req, res){
            console.log(req.body)
            return "world"

        }
})

async function start() {
  try {
    await fastify.listen({ port: PORT });
    console.log(`server is running on port : ${PORT}`);
    // fastify.log.info(`server is running on port : ${PORT}`);
  } catch (error) {
    console.log(error);
  }
}

start();
