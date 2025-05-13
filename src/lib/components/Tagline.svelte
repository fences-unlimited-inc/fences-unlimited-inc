<script lang="ts">
	export let title: string;
	export let mainTagline: string;
	export let subTagline: string | undefined = undefined;
</script>

<div class="page-header">
	<h1>{title}</h1>
	<div class="tagline">
		<p class="main-tagline">{mainTagline}</p>
		{#if subTagline}
			<p class="sub-tagline">{subTagline}</p>
		{/if}
	</div>
</div>

<style>
	.page-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	h1 {
		font-family: var(--font-heading);
		color: var(--color-text-dark);
		font-size: 2.8rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	.tagline {
		text-align: center;
		margin-bottom: 3rem;
	}

	.main-tagline {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-primary);
		margin: 0 0 0.5rem 0;
	}

	.sub-tagline {
		font-size: 1.2rem;
		color: var(--color-text-muted);
		margin: 0;
	}

	@media (max-width: 768px) {
		.main-tagline {
			font-size: 1.6rem;
		}

		.sub-tagline {
			font-size: 1rem;
		}
	}
</style>
