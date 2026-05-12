import Link from "next/link";

const cookies = [
  { id: 1, name: "Chocolate Chip", price: 2.5 },
  { id: 2, name: "Oatmeal Raisin", price: 2.0 },
  { id: 3, name: "Peanut Butter", price: 2.5 },
  { id: 4, name: "Snickerdoodle", price: 2.0 },
];

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