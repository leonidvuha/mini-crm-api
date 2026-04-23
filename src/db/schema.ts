import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const clients = pgTable("clients", {
	id: uuid("id").defaultRandom().primaryKey(),
	fullName: varchar("full_name", { length: 255 }).notNull(),
	phone: varchar("phone", { length: 32 }),
	email: varchar("email", { length: 255 }),
	notes: text("notes"),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
});
