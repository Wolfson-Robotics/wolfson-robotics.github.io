<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import { onMount } from 'svelte';

	let { children } = $props();

	// Force light mode by removing dark class and preventing it from being added
	onMount(() => {
		// Remove dark class if present
		document.documentElement.classList.remove('dark');
		
		// Override localStorage to prevent dark mode persistence
		if (typeof localStorage !== 'undefined') {
			localStorage.removeItem('darkMode');
			localStorage.setItem('theme', 'light');
		}
		
		// Prevent dark mode from being set via data attributes
		document.documentElement.removeAttribute('data-theme');
		document.documentElement.setAttribute('data-theme', 'light');
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}



