import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const cookieImages: Record<string, string> = {
  "Chocolate Chip": "/images/cookies/chocolatechip.svg",
  "Oatmeal Raisin": "/images/cookies/oatmeal.svg",
  "Peanut Butter": "/images/cookies/peanut.svg",
  "Snickerdoodle": "/images/cookies/snicker.svg",
};

export default async function CookiePage(props: PageProps<"/cookies/[id]">) {
  const { id } = await props.params;
  const { data: cookie, error } = await supabase
    .from("cookies")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !cookie) {
    return <main><p>Cookie not found.</p></main>;
  }

  return (
    <main className="px-6 py-8 max-w-sm mx-auto flex flex-col items-center gap-4">
      <Image
        src={cookieImages[cookie.name] ?? "/images/cookies/chocolatechip.svg"}
        alt={cookie.name}
        width={200}
        height={200}
      />
      <h1 className="font-freckle text-3xl">{cookie.name}</h1>
      <p className="text-xl">${cookie.price.toFixed(2)}</p>
      <Link href="/menu" className="border px-4 py-2 font-freckle">
        ← Back to Menu
      </Link>
    </main>
  );
}
