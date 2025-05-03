<script>
	import Tagline from './Tagline.svelte';
</script>

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
			<h2>Ready to Start Your Project?</h2>
			<p>Get a free consultation and quote for your fencing needs</p>
			<a href="/contact" class="contact-button">Request Quote</a>
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
				<a href="/residential" class="learn-more">Explore Residential Options →</a>
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
				<a href="/commercial" class="learn-more">Explore Commercial Options →</a>
			</div>
		</div>
	</section>
</main>

<style>
	.landing-page {
		width: 100%;
	}

	.hero {
		position: relative;
		height: 85vh;
		min-height: 600px;
		display: flex;
		align-items: center;
		z-index: 1;
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
	}

	.content-panel {
		max-width: 600px;
		background-color: rgba(255, 255, 255, 0.9);
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	.hero-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
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
		max-width: 600px;
		margin: 0 auto;
	}

	.contact-button {
		display: inline-block;
		padding: 1rem 2.5rem;
		background-color: #ff5722;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 600;
		margin-top: 1.5rem;
		transition: background-color 0.2s;
	}

	.contact-button:hover {
		background-color: #f44336;
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

	.learn-more {
		display: inline-block;
		margin-top: 1rem;
		color: #2196f3;
		text-decoration: none;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.cta-buttons {
			flex-direction: column;
		}

		.service-highlights {
			grid-template-columns: 1fr;
		}

		.hero {
			min-height: 500px;
		}

		.content-panel {
			margin: 0 1rem;
		}
	}
</style>
