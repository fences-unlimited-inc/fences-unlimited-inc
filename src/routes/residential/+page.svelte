<script>
	import Tagline from '../Tagline.svelte';
</script>

<div class="residential-section">
	<Tagline
		title="Residential Fencing"
		mainTagline="Beautiful. Durable. Affordable."
		subTagline="Quality fencing solutions for your home"
	/>

	<div class="image-grid">
		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Privacy+Fence"
					alt="Privacy Fencing"
				/>
			</div>
			<p class="image-caption">Privacy Fencing</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Pool+Fence"
					alt="Pool Enclosures"
				/>
			</div>
			<p class="image-caption">Pool Enclosures</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Chain+Link"
					alt="Chain Link Fencing"
				/>
			</div>
			<p class="image-caption">Chain Link Fencing</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Wood+Fence" alt="Wood Fencing" />
			</div>
			<p class="image-caption">Wood Fencing</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Ornamental"
					alt="Ornamental Fencing"
				/>
			</div>
			<p class="image-caption">Ornamental Fencing</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=PVC+Fence" alt="PVC Fencing" />
			</div>
			<p class="image-caption">PVC Fencing</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Custom+Gates"
					alt="Custom Gates"
				/>
			</div>
			<p class="image-caption">Custom Gates</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Pet+Fence"
					alt="Pet Containment"
				/>
			</div>
			<p class="image-caption">Pet Containment</p>
		</div>
	</div>
</div>

<style>
	.residential-section {
		max-width: 1200px;
		margin: 3rem auto;
		padding: 0 2rem;
	}

	.image-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}

	.image-card {
		text-align: center;
	}

	.placeholder-image {
		background-color: #f5f5f5;
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
		color: #333;
		margin: 0;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.image-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
