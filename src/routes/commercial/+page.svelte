<script>
	import Tagline from '../Tagline.svelte';
</script>

<div class="commercial-section">
	<Tagline
		title="Commercial Fencing"
		mainTagline="Secure. Professional. Dependable."
		subTagline="Industrial-grade fencing solutions for your business infrastructure"
	/>

	<div class="image-grid">
		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Sports+Fence"
					alt="Tennis Courts, Sports Fields, and Netting"
				/>
			</div>
			<p class="image-caption">Tennis Courts, Sports Fields, and Netting</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Security+Gate"
					alt="Industrial Security Gates and Fencing"
				/>
			</div>
			<p class="image-caption">Industrial Security Gates and Fencing</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Warehouse+Fence"
					alt="Warehouse - Indoor"
				/>
			</div>
			<p class="image-caption">Warehouse - Indoor</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Security+Fence" alt="Prisons" />
			</div>
			<p class="image-caption">Prisons</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Tower+Fence"
					alt="Communication Towers"
				/>
			</div>
			<p class="image-caption">Communication Towers</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Parking+Fence"
					alt="Parking Lots"
				/>
			</div>
			<p class="image-caption">Parking Lots</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<img
					src="https://placehold.co/800x600/EAEAEA/A6A6A6?text=Commercial+Fence"
					alt="Other Commercial Fencing Applications"
				/>
			</div>
			<p class="image-caption">Other Commercial Fencing Applications</p>
		</div>
	</div>
</div>

<style>
	.commercial-section {
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
		background-color: var(--color-background-light);
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
