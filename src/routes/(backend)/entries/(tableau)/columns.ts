import { renderComponent } from '$lib/components/ui/data-table';
import DataTableActions from './data-table-actions.svelte';
import type { ColumnDef } from '@tanstack/table-core';

export type Survey = {
	id: string;
	createdAt: Date;
};

export const columns: ColumnDef<Survey>[] = [
	{
		accessorKey: 'id',
		header: 'id'
	},
	{
		accessorKey: 'createdAt',
		header: 'Created'
	},
	{
		accessorKey: 'actions',
		cell: ({ row }) => {
			return renderComponent(DataTableActions, { id: row.original.id });
		}
	}
];
