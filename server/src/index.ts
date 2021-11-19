import { Server } from "@hapi/hapi";

const init = async () => {
  const server = new Server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Welcome to firebudget!";
    },
  });

  await server.start();
  server.log(["bootstrap"], `Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
