import { desc, eq } from "drizzle-orm";
import { v7 as uuid } from "uuid";
import { db } from "../../db";
import { clients } from "../../db/schema";
import type {
	Client,
	ClientRepository,
	CreateClientInput,
	UpdateClientInput,
} from "./clients.entity";

export class DrizzleClientRepository implements ClientRepository {
	async findAll(): Promise<Client[]> {
		return db.select().from(clients).orderBy(desc(clients.createdAt));
	}

	async findById(id: string): Promise<Client | null> {
		const [client] = await db
			.select()
			.from(clients)
			.where(eq(clients.id, id))
			.limit(1);
		return client ?? null;
	}

	async create(input: CreateClientInput): Promise<Client> {
		const [client] = await db
			.insert(clients)
			.values({
				id: uuid(),
				fullName: input.fullName,
				phone: input.phone ?? null,
				email: input.email ?? null,
				notes: input.notes ?? null,
			})
			.returning();
		return client;
	}

	async update(id: string, input: UpdateClientInput): Promise<Client | null> {
		const [client] = await db
			.update(clients)
			.set(input)
			.where(eq(clients.id, id))
			.returning();
		return client ?? null;
	}

	async delete(id: string): Promise<boolean> {
		const deleted = await db
			.delete(clients)
			.where(eq(clients.id, id))
			.returning({ id: clients.id });
		return deleted.length > 0;
	}
}
