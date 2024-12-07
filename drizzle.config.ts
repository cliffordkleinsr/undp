import { defineConfig } from 'drizzle-kit';
// if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!process.env.DB_FILE_NAME) throw new Error('DATABASE_URL is not set');
export default defineConfig({
	schema: './src/lib/server/db/schema.ts',

	dbCredentials: {
		url: process.env.DB_FILE_NAME //process.env.DATABASE_URL
	},

	verbose: true,
	strict: true,
	dialect: 'sqlite', //'postgresql'
	casing: 'snake_case'
});
