<script>
	import Button from '$lib/components/Button.svelte';
	import { PHONE_NUMBER, PHONE_NUMBER_HREF } from '$lib/constants';
	import Tagline from '$lib/components/Tagline.svelte';
</script>

<svelte:head>
	<title>Fences Unlimited Inc. | Fence Contractor in Middle Tennessee</title>
	<og:title>Fences Unlimited Inc. | Fence Contractor in Middle Tennessee</og:title>
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
					<Button href="/residential" variant="residential" fullWidth={false}
						>Residential Services</Button
					>
					<Button href="/commercial" variant="commercial" fullWidth={false}
						>Commercial Services</Button
					>
				</div>
			</div>
		</div>
	</section>

	<section class="quick-contact">
		<div class="contact-content">
			<h2>Ready to Start Your Fencing Project?</h2>
			<p>
				Get a free consultation and no-obligation quote for your residential or commercial fencing
				needs
			</p>
			<div class="contact-actions">
				<Button href={PHONE_NUMBER_HREF} variant="call" iconName="phone">
					Call {PHONE_NUMBER}
				</Button>
				<Button href="/contact" variant="quote">Request Free Quote</Button>
			</div>
			<p class="contact-tagline">Serving Nashville and Middle Tennessee since 1983</p>
		</div>
	</section>

	<section class="service-highlights">
		<div class="highlight-card residential">
			<div class="highlight-image">
				<!-- Replace with actual residential image -->
				<img src="/residential-fencing.jpg" alt="Residential fencing" />
			</div>
			<div class="highlight-content">
				<h3>Residential Fencing</h3>
				<p>
					Transform your property with custom fencing solutions that combine security with curb
					appeal.
				</p>
				<Button href="/residential" variant="primary">Explore Residential Options</Button>
			</div>
		</div>

		<div class="highlight-card commercial">
			<div class="highlight-image">
				<!-- Replace with actual commercial image -->
				<img src="/commercial-fencing.jpg" alt="Commercial fencing" />
			</div>
			<div class="highlight-content">
				<h3>Commercial Fencing</h3>
				<p>
					Industrial-grade security solutions for businesses, institutions, and commercial
					properties.
				</p>
				<Button href="/commercial" variant="primary">Explore Commercial Options</Button>
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
		justify-content: center;
	}

	/* Button styles now handled by Button component */

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

	/* Contact button styles now handled by Button component */

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
		text-align: center;
	}

	/* Learn more button styles now handled by Button component */

	@media (max-width: 860px) {
		.cta-buttons {
			flex-direction: column;
		}

		.contact-actions {
			flex-direction: column;
			gap: 1rem;
		}

		/* Button responsive styles now handled by Button component */

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
