import { client, db } from ".";
import { users } from "./schema";

async function seed() {
  await db.delete(users);

  const result = await db
    .insert(users)
    .values([
      {
        name: "Gustavo Alves Abreu",
        email: "gustavo@teste.com",
        password: "gustavo",
      },
      {
        name: "Gustavo Alves Abreu",
        email: "gustavo@teste.com",
        password: "gustavo",
      },
    ])
    .returning();
}

seed().finally(() => {
  client.end();
});
