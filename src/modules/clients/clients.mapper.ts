import type { Client } from "./clients.entity";
import type { ClientResponseDto } from "./clients.response.dto";

export function toClientResponse(client: Client): ClientResponseDto {
	return {
		id: client.id,
		fullName: client.fullName,
		phone: client.phone,
		email: client.email,
		notes: client.notes,
		createdAt: client.createdAt.toISOString(),
	};
}
