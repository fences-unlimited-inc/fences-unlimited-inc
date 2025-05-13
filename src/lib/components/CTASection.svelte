<script lang="ts">
	import Button from './Button.svelte';
	import { PHONE_NUMBER, PHONE_NUMBER_HREF } from '$lib/constants';

	export let title: string;
	export let description: string;
	export let quoteButtonText: string = 'Get a Free Quote';
</script>

<div class="cta-section">
	<h2>{title}</h2>
	<p>{description}</p>
	<div class="cta-buttons">
		<Button href={PHONE_NUMBER_HREF} variant="call" iconName="phone">
			Call Us Now: {PHONE_NUMBER}
		</Button>
		<Button href="/contact" variant="quote">
			{quoteButtonText}
		</Button>
	</div>
</div>

<style>
	.cta-section {
		margin-top: 4rem;
		padding: 2rem;
		background-color: #f8f8f8;
		border-radius: 8px;
		text-align: center;
	}

	.cta-section h2 {
		margin-bottom: 1rem;
		color: var(--color-text-dark);
	}

	.cta-section p {
		margin-bottom: 2rem;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
	}

	@media (max-width: 860px) {
		.cta-buttons {
			flex-direction: column;
			gap: 1rem;
		}

		.cta-section {
			padding: 1.5rem;
		}
	}
</style>
