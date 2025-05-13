<script lang="ts">
	import Icon from './Icon.svelte';

	export let href: string | undefined = undefined;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let variant: 'primary' | 'secondary' | 'call' | 'quote' | 'residential' | 'commercial' =
		'primary';
	export let fullWidth: boolean = false;
	export let disabled: boolean = false;
	export let iconName: string | undefined = undefined;
	export let iconSize: number = 16;
	export let iconColor: string = 'currentColor';
</script>

{#if href}
	<a {href} class="button {variant}" class:full-width={fullWidth} on:click {...$$restProps}>
		{#if iconName}
			<span class="icon">
				<Icon name={iconName} size={iconSize} color={iconColor} />
			</span>
		{/if}
		<slot />
	</a>
{:else}
	<button
		{type}
		class="button {variant}"
		class:full-width={fullWidth}
		{disabled}
		on:click
		{...$$restProps}
	>
		{#if iconName}
			<span class="icon">
				<Icon name={iconName} size={iconSize} color={iconColor} />
			</span>
		{/if}
		<slot />
	</button>
{/if}

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 2rem;
		border-radius: 4px;
		font-size: 1.1rem;
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		border: none;
		transition: all 0.2s ease-in-out;
		gap: 0.5rem;
	}

	.button:hover:not(:disabled) {
		transform: translateY(-2px);
	}

	.full-width {
		width: 100%;
	}

	.primary {
		background-color: var(--color-primary, #2c5282);
		color: white;
	}

	.primary:hover:not(:disabled) {
		background-color: var(--color-primary-dark, #2a4365);
	}

	.secondary {
		background-color: #f8f8f8;
		color: var(--color-text-dark, #333);
		border: 1px solid #ddd;
	}

	.secondary:hover:not(:disabled) {
		background-color: #eaeaea;
	}

	.call {
		background-color: #2c5282;
		color: white;
	}

	.call:hover:not(:disabled) {
		background-color: #2a4365;
	}

	.quote {
		background-color: #ff5722;
		color: white;
	}

	.quote:hover:not(:disabled) {
		background-color: #f44336;
	}

	.residential {
		background-color: #4caf50;
		color: white;
	}

	.residential:hover:not(:disabled) {
		background-color: #3d8b40;
	}

	.commercial {
		background-color: #2196f3;
		color: white;
	}

	.commercial:hover:not(:disabled) {
		background-color: #1976d2;
	}

	.button:disabled {
		background-color: #cccccc;
		color: #666666;
		cursor: not-allowed;
	}

	.icon {
		display: flex;
		align-items: center;
	}

	@media (max-width: 860px) {
		.button.full-width {
			padding: 1rem 0;
			box-sizing: border-box;
		}
	}
</style>
