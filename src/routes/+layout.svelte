<script lang="ts">
	import 'normalize.css';
	import TopNav from './TopNav.svelte';
	let { children } = $props();
</script>

<TopNav />

{@render children()}
