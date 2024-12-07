import { db } from '$lib/server/db';
import { relatedTables, responses } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const entryId = params.entryId as string;
	const [answers, tableau] = await Promise.all([
		db
			.select({
				question: responses.question,
				answer: responses.answer
			})
			.from(responses)
			.where(eq(responses.entryId, entryId)),

		db
			.select({
				question: relatedTables.tableName,
				answer: relatedTables.tableData
			})
			.from(relatedTables)
			.where(eq(relatedTables.entryId, entryId))
	]);

	const tableAnswers = tableau.map((e) => ({ ...e, answer: JSON.parse(e.answer) }));
	// console.log(tableAnswers[0])
	return { answers, tableAnswers };
}) satisfies PageServerLoad;
