import {pgTable, serial, text, numeric} from "drizzle-orm/pg-core";

export const cookies = pgTable("cookies", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    price: numeric("price").notNull(),
}); 

