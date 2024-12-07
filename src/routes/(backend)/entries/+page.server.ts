import { db } from '$lib/server/db';
import { entriesTable } from '$lib/server/db/schema';
import { sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const entries = await db
		.select({
			id: entriesTable.id,
			createdAt: sql<Date>`${entriesTable.createdAt}::date`
		})
		.from(entriesTable);
	return { entries };
}) satisfies PageServerLoad;
