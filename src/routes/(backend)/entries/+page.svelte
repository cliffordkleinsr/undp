<script lang="ts">
	import DataTable from '$lib/components/data-table.svelte';
	import type { PageData } from './$types';
	import { columns } from './(tableau)/columns';

	let { data }: { data: PageData } = $props();
	const { entries } = data;
</script>

<div class=" mx-auto h-[70vh] max-w-5xl">
	<DataTable data={entries} {columns} />
</div>
