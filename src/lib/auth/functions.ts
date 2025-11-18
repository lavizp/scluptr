import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { auth } from "~/lib/auth/auth";
import { db } from "../db";

export const $getUser = createServerFn({ method: "GET" }).handler(async () => {
  const session = await auth.api.getSession({ headers: getRequest().headers });
  if (!session?.user) return null;

  const user = await db.query.user.findFirst({
    where: (t, { eq }) => eq(t.id, session.user.id),
  });
  return user;
});
