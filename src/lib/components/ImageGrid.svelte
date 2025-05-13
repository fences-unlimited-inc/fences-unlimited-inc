<script lang="ts">
	export let images: Array<{
		src: string;
		alt: string;
		caption: string;
	}>;
	export let columns: number = 3;
</script>

<div class="image-grid" style="--columns: {columns}">
	{#each images as image (image.alt)}
		<div class="image-card">
			<div class="placeholder-image">
				<img src={image.src} alt={image.alt} />
			</div>
			<p class="image-caption">{image.caption}</p>
		</div>
	{/each}
</div>

<style>
	.image-grid {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}

	.image-card {
		text-align: center;
	}

	.placeholder-image {
		background-color: var(--color-background-light, #f5f5f5);
		border-radius: 8px;
		height: 250px;
		margin-bottom: 1rem;
		overflow: hidden;
	}

	.placeholder-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.image-caption {
		font-size: 1.2rem;
		color: var(--color-text-dark);
		margin: 0;
		font-weight: 500;
	}

	@media (max-width: 860px) {
		.image-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
