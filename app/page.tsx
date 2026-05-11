const cookies = [
  { id: 1, name: "Chocolate Chip", price: 2.5 },
  { id: 2, name: "Oatmeal Raisin", price: 2.0 },
  { id: 3, name: "Peanut Butter", price: 2.5 },
  { id: 4, name: "Snickerdoodle", price: 2.0 },
];

export default function Home() {
  return (
    <main>
      <h1>Cookie Store</h1>
      <ul>
        {cookies.map((cookie) => (
          <li key={cookie.id}>
            {cookie.name} — ${cookie.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </main>
  );
}
