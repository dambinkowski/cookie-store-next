import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function Menu() {

  const { data: cookies, error } = await supabase.from("cookies")
    .select("*");

  if (error) {
    console.error("Error fetching cookies:", error);
    return <p>Error loading menu.</p>;
  }

  return (
    <main>
      <h1>Menu</h1>
      <ul>
        {cookies?.map((cookie) => (
          <Link key={cookie.id} href={`/cookies/${cookie.id}`}>
            <li>
              {cookie.name} — ${cookie.price.toFixed(2)}
            </li>
          </Link>
        ))}
      </ul>

    </main>
  );
}