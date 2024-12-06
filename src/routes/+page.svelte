<script lang="ts">
	import Hero from '$lib/frontend/Hero.svelte';
	import Question from '$lib/frontend/Question.svelte';
</script>

<div class="flex justify-center gap-2">
	<img
		class="w-14"
		src="https://www.undp.org/sites/g/files/zskgke326/files/2022-04/undp-logo-blue.svg"
		alt="undp"
	/>
	<img class="w-36" src="https://www.unhcr.org/themes/custom/project/logo.svg" alt="unhcr" />
	<img
		class="h-32 w-36"
		src="https://identity.uncdf.org/i/260922-uncdf-logo-transparent-blue.png"
		alt="uncdf"
	/>
</div>

<Hero />

<Question />
