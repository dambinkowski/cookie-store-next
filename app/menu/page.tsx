import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const cookieImages: Record<string, string> = {
  "Chocolate Chip": "/images/cookies/chocolatechip.svg",
  "Oatmeal Raisin": "/images/cookies/oatmeal.svg",
  "Peanut Butter": "/images/cookies/peanut.svg",
  "Snickerdoodle": "/images/cookies/snicker.svg",
};

export default async function Menu() {
  const { data: cookies, error } = await supabase.from("cookies").select("*");

  if (error) {
    console.error("Error fetching cookies:", error);
    return <p>Error loading menu.</p>;
  }

  return (
    <main className="px-6 py-8">
      <h1 className="font-freckle text-4xl text-center mb-8">Our Cookies</h1>
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        {cookies?.map((cookie) => (
          <Link key={cookie.id} href={`/cookies/${cookie.id}`}>
            <div className="border rounded-lg p-6 flex flex-col items-center gap-3">
              <Image
                src={cookieImages[cookie.name] ?? "/images/cookies/chocolatechip.svg"}
                alt={cookie.name}
                width={120}
                height={120}
              />
              <h2 className="font-freckle text-xl">{cookie.name}</h2>
              <p>${cookie.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
