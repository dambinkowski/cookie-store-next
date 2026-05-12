import Link from "next/link";
import { cookies } from "@/lib/cookies"


export default async function CookiePage(props: PageProps<"/cookies/[id]">) {
  const { id } = await props.params;
  const cookie = cookies.find((c) => c.id === Number(id));

  if (!cookie) {
    return <main><p>Cookie not found.</p></main>;
  }

  return (
    <main>
      <h1>Cookie detail page </h1>
      <h1>{cookie.name}</h1>
      <p>${cookie.price.toFixed(2)}</p>
      <Link href="/menu">Back to menu</Link>
    </main>
  );
}
