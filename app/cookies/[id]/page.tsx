import Link from "next/link";

const cookies = [
  { id: 1, name: "Chocolate Chip", price: 2.5 },
  { id: 2, name: "Oatmeal Raisin", price: 2.0 },
  { id: 3, name: "Peanut Butter", price: 2.5 },
  { id: 4, name: "Snickerdoodle", price: 2.0 },
];

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
