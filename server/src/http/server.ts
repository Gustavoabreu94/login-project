import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { createUserRoute } from "./routes/create-user";
import { getAllUsers } from "./routes/get-all-users";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.get("/", async () => {
  return "Hello World";
});

app.register(getAllUsers);
app.register(createUserRoute);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("HTTP Server Runnig");
  });
