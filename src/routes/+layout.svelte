<script lang="ts">
	import 'normalize.css';
	import '$lib/style_variables.css';
	import TopNav from './TopNav.svelte';
	let { children } = $props();
</script>

<TopNav />

{@render children()}
