import { createNewUser } from "../../functions/create-new-user";

// const userSchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   password: z.string(),
// });

// export const createUserRoute: FastifyPluginAsyncZod = async (app) => {
//   app.post(
//     "/new-user",
//     {
//       schema: {
//         body: userSchema,
//       },
//     },
//     async (request) => {
//       const { name, email, password } = request.body;

//       await createNewUser({
//         name,
//         email,
//         password,
//       });
//     }
//   );
// };

export const createUserRoute = async (app) => {
  app.post(
    "/user",
    {
      schema: {
        body: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
            password: { type: "string" },
          },
        },
      },
    },
    async (request) => {
      const { name, email, password } = request.body;

      await createNewUser({
        name,
        email,
        password,
      });
    }
  );
};
