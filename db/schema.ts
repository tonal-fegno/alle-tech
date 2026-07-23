import type { AnyPgColumn } from "drizzle-orm/pg-core";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const menus = pgTable("menus", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  path: text("path"),
  icon: text("icon"),
  order: integer("order").notNull().default(0),
  parentId: integer("parent_id").references((): AnyPgColumn => menus.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
