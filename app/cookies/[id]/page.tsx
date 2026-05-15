import { supabase } from "@/lib/supabase";


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
    <main>
      <h1>Cookie detail page </h1>
      <h1>{cookie.name}</h1>
      <p>${cookie.price.toFixed(2)}</p>

    </main>
  );
}
