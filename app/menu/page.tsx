import Link from "next/link";
import { db } from "@/lib/db";
import { cookies } from "@/lib/db/schema";

export default async function Menu() {
  const cookieList = await db.select().from(cookies);

  return (
    <main>
      <h1>Menu</h1>
      <ul>
        {cookieList.map((cookie) => (
          <Link key={cookie.id} href={`/cookies/${cookie.id}`}>
            <li>
              {cookie.name} — ${Number(cookie.price).toFixed(2)}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}