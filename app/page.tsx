import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Cookie Store</h1>
      <p> This is the main page of the cookie store. </p>
      <p> We started making cookies since yesterday, and we have a lot of cookies to sell. </p>
      <p> We have chocolate chip cookies, oatmeal cookies, and peanut butter cookies. </p>
      <p> We also have some special cookies that we made with love. </p>
      <p>Check out our <Link href="/menu">menu</Link>.</p>
    </main>
  );
}