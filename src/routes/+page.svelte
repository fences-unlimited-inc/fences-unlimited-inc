<script>
	import Tagline from './Tagline.svelte';
	import { PHONE_NUMBER, PHONE_NUMBER_HREF } from '$lib/constants';
</script>

<svelte:head>
	<title>Home | Fences Unlimited Inc.</title>
	<meta
		name="description"
		content="Nashville’s trusted team for fencing—serving homeowners and businesses throughout Middle Tennessee. Explore solutions crafted to last, with free estimates and expert installation from Fences Unlimited Inc."
	/>
</svelte:head>

<main class="landing-page">
	<section class="hero">
		<div class="hero-image">
			<img src="/aluminum-fence-feature.jpg" alt="Professional fence installation" />
		</div>
		<div class="hero-content">
			<div class="content-panel">
				<Tagline
					title="Professional Fencing Solutions"
					mainTagline="Building Security & Style Since 1983"
					subTagline="Expert fence installation for residential and commercial properties"
				/>
				<div class="cta-buttons">
					<a href="/residential" class="cta-button residential"> Residential Services </a>
					<a href="/commercial" class="cta-button commercial"> Commercial Services </a>
				</div>
			</div>
		</div>
	</section>

	<section class="quick-contact">
		<div class="contact-content">
			<h2>Ready to Start Your Fencing Project?</h2>
			<p>Get a free consultation and no-obligation quote for your residential or commercial fencing needs</p>
			<div class="contact-actions">
				<a href={PHONE_NUMBER_HREF} class="contact-button phone">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
					</svg>
					Call {PHONE_NUMBER}
				</a>
				<a href="/contact" class="contact-button quote">Request Free Quote</a>
			</div>
			<p class="contact-tagline">Serving Nashville and Middle Tennessee since 1983</p>
		</div>
	</section>

	<section class="service-highlights">
		<div class="highlight-card residential">
			<div class="highlight-image">
				<!-- Replace with actual residential image -->
				<img src="https://placehold.co/800x600" alt="Residential fencing" />
			</div>
			<div class="highlight-content">
				<h3>Residential Fencing</h3>
				<p>
					Transform your property with custom fencing solutions that combine security with curb
					appeal.
				</p>
				<a href="/residential" class="learn-more-button">Explore Residential Options</a>
			</div>
		</div>

		<div class="highlight-card commercial">
			<div class="highlight-image">
				<!-- Replace with actual commercial image -->
				<img src="https://placehold.co/800x600" alt="Commercial fencing" />
			</div>
			<div class="highlight-content">
				<h3>Commercial Fencing</h3>
				<p>
					Industrial-grade security solutions for businesses, institutions, and commercial
					properties.
				</p>
				<a href="/commercial" class="learn-more-button">Explore Commercial Options</a>
			</div>
		</div>
	</section>
</main>

<style>
	.landing-page {
		width: 100%;
		overflow-x: hidden;
	}

	.hero {
		position: relative;
		height: 85vh;
		min-height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		width: 100%;
		overflow: hidden;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		display: flex;
		justify-content: center;
		left: 0; /* Reset any potential offset */
		right: 0; /* Reset any potential offset */
	}

	.content-panel {
		max-width: 600px;
		background-color: rgba(255, 255, 255, 0.9);
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		margin: 0 auto;
	}

	.content-panel :global(h1),
	.content-panel :global(h2),
	.content-panel :global(p) {
		color: var(--color-text-dark);
		margin-bottom: 1rem;
	}

	.hero-image {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.cta-buttons {
		display: flex;
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.cta-button {
		padding: 1rem 2rem;
		border-radius: 4px;
		font-size: 1.2rem;
		font-weight: 600;
		text-decoration: none;
		transition: transform 0.2s;
	}

	.cta-button:hover {
		transform: translateY(-2px);
	}

	.cta-button.residential {
		background-color: #4caf50;
		color: white;
	}

	.cta-button.commercial {
		background-color: #2196f3;
		color: white;
	}

	.quick-contact {
		background-color: #f5f5f5;
		padding: 4rem 2rem;
		text-align: center;
	}

	.contact-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.contact-actions {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.contact-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 2.5rem;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 600;
		font-size: 1.1rem;
		transition: all 0.2s ease-in-out;
	}

	.contact-button.phone {
		background-color: #2c5282;
		gap: 0.5rem;
	}

	.contact-button.phone:hover {
		background-color: #2a4365;
		transform: translateY(-2px);
	}

	.contact-button.quote {
		background-color: #ff5722;
	}

	.contact-button.quote:hover {
		background-color: #f44336;
		transform: translateY(-2px);
	}

	.contact-tagline {
		margin-top: 1.5rem;
		font-style: italic;
		opacity: 0.8;
	}

	.service-highlights {
		max-width: 1200px;
		margin: 4rem auto;
		padding: 0 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.highlight-card {
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.highlight-image {
		height: 300px;
	}

	.highlight-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.highlight-content {
		padding: 2rem;
	}

	.learn-more-button {
		display: inline-block;
		margin-top: 1.5rem;
		padding: 0.75rem 1.5rem;
		background-color: #2196f3;
		color: white;
		text-decoration: none;
		font-weight: 600;
		border-radius: 4px;
		transition: all 0.2s ease-in-out;
	}

	.learn-more-button:hover {
		background-color: #1976d2;
		transform: translateY(-2px);
	}

	@media (max-width: 860px) {
		.cta-buttons {
			flex-direction: column;
		}

		.contact-actions {
			flex-direction: column;
			gap: 1rem;
		}

		.contact-button {
			width: 100%;
			padding: 1rem 0;
			box-sizing: border-box;
		}

		.cta-button {
			width: 100%;
			padding: 1rem 0;
			box-sizing: border-box;
		}

		.learn-more-button {
			width: 100%;
			padding: 0.75rem 0;
			box-sizing: border-box;
		}

		.service-highlights {
			grid-template-columns: 1fr;
		}

		.hero {
			min-height: 500px;
		}

		.content-panel {
			margin: 0 1rem;
			width: calc(100% - 2rem); /* Account for margins */
			max-width: 600px;
		}

		.hero-content {
			padding: 1rem;
		}

		.quick-contact {
			padding: 3rem 1rem;
		}

		.highlight-content {
			padding: 1.5rem;
		}
	}
</style>
