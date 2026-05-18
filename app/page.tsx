import Link from "next/link"

export default function Home() {
  return (
    <main className="px-6 py-4">
      <h1 className="font-freckle text-4xl mb-4 text-center">Home Page !</h1>
      <div className="max-w-2xl mx-auto text-center text-lg">
        <p> This is the main page of the cookie store. </p>
        <p> We started making cookies since yesterday, and we have a lot of cookies to sell. </p>
        <p> We have chocolate chip cookies, oatmeal cookies, and peanut butter cookies. </p>
        <p> We also have some special cookies that we made with love. </p>
        <p>Check out our Cookies: </p>
        <Link className="px-4 py-2 font-freckle" href="/menu">Menu</Link>
      </div>
      
    </main>
  );
}