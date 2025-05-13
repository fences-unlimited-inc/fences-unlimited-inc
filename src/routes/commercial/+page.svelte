<script>
	import Tagline from '../Tagline.svelte';
	import { PHONE_NUMBER, PHONE_NUMBER_HREF } from '$lib/constants';
</script>

<svelte:head>
	<title>Commercial Fencing | Fences Unlimited Inc.</title>
	<meta
		name="description"
		content="Secure your commercial property with custom fencing, security gates, sports enclosures, and more. Fences Unlimited Inc. delivers solutions for businesses all across Nashville and Middle Tennessee."
	/>
</svelte:head>

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

	<div class="cta-section">
		<h2>Need Industrial-Grade Fencing Solutions?</h2>
		<p>Our experienced team specializes in commercial and industrial fencing projects of all sizes. Contact us today to discuss your specific requirements.</p>
		<div class="cta-buttons">
			<a href={PHONE_NUMBER_HREF} class="cta-button call">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
				Call Us Now: {PHONE_NUMBER}
			</a>
			<a href="/contact" class="cta-button quote">Request a Commercial Quote</a>
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

	.cta-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 2rem;
		border-radius: 4px;
		font-size: 1.1rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease-in-out;
	}

	.cta-button.call {
		background-color: #2c5282;
		color: white;
		gap: 0.5rem;
	}

	.cta-button.call:hover {
		background-color: #2a4365;
		transform: translateY(-2px);
	}

	.cta-button.quote {
		background-color: #ff5722;
		color: white;
	}

	.cta-button.quote:hover {
		background-color: #f44336;
		transform: translateY(-2px);
	}

	@media (max-width: 860px) {
		.image-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.cta-buttons {
			flex-direction: column;
			gap: 1rem;
		}

		.cta-button {
			width: 100%;
			padding: 1rem 0;
			box-sizing: border-box;
		}

		.cta-section {
			padding: 1.5rem;
		}
	}
</style>
