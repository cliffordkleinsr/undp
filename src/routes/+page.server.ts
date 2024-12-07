import { db } from '$lib/server/db';
import { entriesTable, relatedTables, responses } from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ request }) => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, getClientAddress }) => {
		type O = {
			codedinfo: string;
			table1: string;
			table2: string;
			table3: string;
			table4: string;
			table5: string;
			table6: string;
			table7: string;
			table8: string;
			table9: string;
			table10: string;
			table11: string;
			organization: string;
			answer1: string;
			answer2: string;
			answer3: string;
			answer4: string;
			answer5: string;
			answer6: string;
			answer7: string;
			answer8: string;
			answer9: string;
			answer10: string;
			answer11: string;
			answer12: string;
			answer13: string;
			answer14: string;
			answer15: string;
			answer16: string;
			answer17: string;
			answer18: string;
			answer19: string;
			answer20: string;
			answer21: string;
			answer22: string;
			answer23: string;
		};
		const entryId = crypto.randomUUID();
		const data = Object.fromEntries(await request.formData()) as O;

		// convert to array
		const responsesArray = Object.entries(data)
			.filter(([key, value]) => key.startsWith('answer') || key.startsWith('organization')) // Filter only answer keys (answer1, answer2, ...)
			.map(([key, value]) => ({
				entryId: entryId, // You would replace this with the actual `entryId`
				question: key,
				answer: value
			}));
		const tableArray = Object.entries(data)
			.filter(([key, value]) => key.startsWith('table') || key.startsWith('codedinfo')) // Filter only answer keys (answer1, answer2, ...)
			.map(([key, value]) => ({
				entryId: entryId, // You would replace this with the actual `entryId`
				tableName: key,
				tableData: value
			}));
		try {
			//  insert the entry
			await db.insert(entriesTable).values({
				id: entryId,
				locale: getClientAddress()
			});

			// insert responsesArraay
			await db.insert(responses).values(responsesArray);

			// insert intorelatedTable
			await db.insert(relatedTables).values(tableArray);
		} catch (err) {
			console.error();
		}
	}
};
