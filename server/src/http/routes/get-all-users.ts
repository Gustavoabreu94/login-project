import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getUsers } from "../../functions/get-users";

export const getAllUsers: FastifyPluginAsyncZod = async (app) => {
  app.get("/all-users", async () => {
    const { users } = await getUsers();
    return { users };
  });
};
