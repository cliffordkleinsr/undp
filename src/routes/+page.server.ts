import { db } from '$lib/server/db';
import { usersTable } from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    const data = await db.select().from(usersTable)
    console.log(data)
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		type O = {
			codedinfo: string;
		};
		const data = Object.fromEntries(await request.formData()) as O;

		
	}
};
