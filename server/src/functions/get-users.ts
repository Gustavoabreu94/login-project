import { db } from "../db";
import { users } from "../db/schema";

export async function getUsers() {
  const allUsers = db.$with("all_users").as(
    db
      .select({
        id: users.id,
        name: users.name,
        password: users.password,
        createdAt: users.createdAt,
      })
      .from(users)
  );
  console.log(allUsers);
  const result = await db
    .with(allUsers)
    .select({
      id: allUsers.id,
      name: allUsers.name,
    })
    .from(allUsers);

  console.log(result);
  return { users: result };
}
