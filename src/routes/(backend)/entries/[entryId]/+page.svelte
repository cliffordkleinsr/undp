<script lang="ts">
	import PreviewComp from '$lib/frontend/PreviewComp.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<PreviewComp tabledata={data.tableAnswers} inputanswers={data.answers} />
