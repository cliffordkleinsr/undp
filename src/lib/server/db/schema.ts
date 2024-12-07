import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

// export const usersTable = pgTable('user', {
// 	id: serial('id').primaryKey(),
// 	age: integer('age')
// });

export const entriesTable = pgTable('entries_table', {
	id: text().primaryKey().notNull(),
	locale: text().notNull(),
	createdAt: timestamp({ withTimezone: true }).defaultNow().notNull()
});

export const responses = pgTable('responses', {
	id: serial().primaryKey().notNull(),
	entryId: text()
		.references(() => entriesTable.id)
		.notNull(),
	question: text().notNull(),
	answer: text().notNull()
});

export const relatedTables = pgTable('related_tables', {
	id: serial().primaryKey().notNull(),
	entryId: text()
		.references(() => entriesTable.id)
		.notNull(),
	tableName: text().notNull(),
	tableData: text().notNull()
});

// export const responsTable = pgTable('response_table', {
// 	id: integer().references(() => entriesTable.id).primaryKey().notNull(),
// 	codedinfo: text().notNull(),
// 	table1: text().notNull(),
// 	table2: text().notNull(),
// 	table3: text().notNull(),
// 	table4: text().notNull(),
// 	table5: text().notNull(),
// 	table6: text().notNull(),
// 	table7: text().notNull(),
// 	table8: text().notNull(),
// 	table9: text().notNull(),
// 	table10: text().notNull(),
// 	table11: text().notNull(),
// 	answer1: text().notNull(),
// 	answer2: text().notNull(),
// 	answer3: text().notNull(),
// 	answer4: text(),
// 	answer5: text(),
// 	answer6: text().notNull(),
// 	answer7: text(),
// 	answer8: text(),
// 	answer9: text(),
// 	answer10: text(),
// 	answer11: text(),
// 	answer12: text(),
// 	answer13: text(),
// 	answer14: text(),
// 	answer15: text(),
// 	answer16: text(),
// 	answer17: text(),
// 	answer18: text(),
// 	answer19: text(),
// 	answer20: text(),
// 	answer21: text(),
// 	answer22: text().notNull(),
// 	answer23: text(),
// 	answer24: text().notNull(),

// })
