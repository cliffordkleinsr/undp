<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/frontend/Navbar.svelte';
	import Footer from '$lib/frontend/Footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<ModeWatcher />
<Navbar />
{@render children()}
<Footer />
