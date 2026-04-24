export interface Client {
	id: string;
	fullName: string;
	phone: string | null;
	email: string | null;
	notes: string | null;
	createdAt: Date;
}

export interface CreateClientInput {
	fullName: string;
	phone?: string | null;
	email?: string | null;
	notes?: string | null;
}

export interface UpdateClientInput {
	fullName?: string;
	phone?: string | null;
	email?: string | null;
	notes?: string | null;
}

export interface ClientRepository {
	findAll(): Promise<Client[]>;
	findById(id: string): Promise<Client | null>;
	create(input: CreateClientInput): Promise<Client>;
	update(id: string, input: UpdateClientInput): Promise<Client | null>;
	delete(id: string): Promise<boolean>;
}
