import Link from "next/link";
import { cookies } from "@/lib/cookies"

export default function Menu() {
  return (
    <main>
      <h1>Menu</h1>
      <ul>
        {cookies.map((cookie) => (
          <Link key={cookie.id} href={`/cookies/${cookie.id}`}>
            <li>
              {cookie.name} — ${cookie.price.toFixed(2)}
            </li>
          </Link>
        ))}
      </ul>
      <Link href="/">Back to home</Link>
    </main>
  );
}