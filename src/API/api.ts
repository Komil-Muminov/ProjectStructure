import { z } from "zod";

const API_URL = "http://localhost:3000";

export const RestaurantScheme = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	raiting: z.number(),
	url: z.string(),
});

export type RestaurantType = z.infer<typeof RestaurantScheme>;
export const getRestaurants = (): Promise<RestaurantType[]> =>
	fetch(`${API_URL}/restaurants`).then((res) =>
		res.json().then((data) => RestaurantScheme.array().parse(data)),
	);

export interface UpdateRestaurantRaitingArgs {
	id: RestaurantType["id"];
	raiting: RestaurantType["raiting"];
}

export const updateRestaurantRating = ({
	id,
	raiting,
}: UpdateRestaurantRaitingArgs): Promise<RestaurantType> =>
	fetch(`${API_URL}/restaurants/${id}`, {
		method: "PATCH",
		body: JSON.stringify({ raiting }),
	}).then((res) => res.json());
