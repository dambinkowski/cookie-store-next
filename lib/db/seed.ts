import { config } from "dotenv";
config({ path: ".env.local" });

async function seed() {
  const { db } = await import("./index");
  const { cookies } = await import("./schema");

  await db.insert(cookies).values([
    { name: "Chocolate Chip", price: "3.50" },
    { name: "Oatmeal Raisin", price: "3.00" },
    { name: "Snickerdoodle", price: "2.75" },
  ]);

  console.log("Seeded!");
  process.exit(0);
}

seed();
