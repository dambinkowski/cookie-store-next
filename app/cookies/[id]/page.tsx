import { db } from "@/lib/db";
import { cookies } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function CookiePage(props: PageProps<"/cookies/[id]">) {
  const { id } = await props.params;
  const [cookie] = await db.select().from(cookies).where(eq(cookies.id, Number(id)));

  if (!cookie) {
    return <main><p>Cookie not found.</p></main>;
  }

  return (
    <main>
      <h1>Cookie detail page</h1>
      <h1>{cookie.name}</h1>
      <p>${Number(cookie.price).toFixed(2)}</p>
    </main>
  );
}
