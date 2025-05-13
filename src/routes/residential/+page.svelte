<script>
	import Tagline from '../Tagline.svelte';
	import { PHONE_NUMBER, PHONE_NUMBER_HREF } from '$lib/constants';
</script>

<svelte:head>
	<title>Residential Fencing | Fences Unlimited Inc.</title>
	<meta
		name="description"
		content="Enhance your home's security and curb appeal with high-quality residential fences from Fences Unlimited Inc. in Nashville and Middle Tennessee."
	/>
</svelte:head>

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

	<div class="cta-section">
		<h2>Ready to Enhance Your Home with a Quality Fence?</h2>
		<p>Our team of experts is ready to help you choose the perfect fencing solution for your home.</p>
		<div class="cta-buttons">
			<a href={PHONE_NUMBER_HREF} class="cta-button call">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
				Call Us Now: {PHONE_NUMBER}
			</a>
			<a href="/contact" class="cta-button quote">Get a Free Quote</a>
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
