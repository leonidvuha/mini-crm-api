import { z } from "zod";

export const createClientSchema = z.object({
	fullName: z.string().trim().min(1).max(255),
	phone: z.string().trim().max(32).nullable().optional(),
	email: z.email().max(255).nullable().optional(),
	notes: z.string().trim().nullable().optional(),
});

export const updateClientSchema = createClientSchema.partial();

export const clientIdParamSchema = z.object({
	id: z.uuid(),
});

export type CreateClientDto = z.infer<typeof createClientSchema>;
export type UpdateClientDto = z.infer<typeof updateClientSchema>;
export type ClientIdParam = z.infer<typeof clientIdParamSchema>;
