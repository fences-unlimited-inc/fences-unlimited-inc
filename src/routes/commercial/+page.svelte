<div class="commercial-section">
	<h2>Commercial Fencing</h2>

	<div class="tagline">
		<p class="main-tagline">Secure. Professional. Dependable.</p>
		<p class="sub-tagline">Industrial-grade fencing solutions for your business infrastructure</p>
	</div>

	<div class="image-grid">
		<div class="image-card">
			<div class="placeholder-image">
				<!-- Replace src with actual image -->
				<img src="/path-to-sports-fence.jpg" />
			</div>
			<p class="image-caption">Tennis Courts, Sports Fields, and Netting</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<!-- Replace src with actual image -->
				<img src="/path-to-security-fence.jpg" />
			</div>
			<p class="image-caption">Industrial Security Gates and Fencing</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<!-- Replace src with actual image -->
				<img src="/path-to-warehouse-fence.jpg" />
			</div>
			<p class="image-caption">Warehouse - Indoor</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<!-- Replace src with actual image -->
				<img src="/path-to-prison-fence.jpg" />
			</div>
			<p class="image-caption">Prisons</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<!-- Replace src with actual image -->
				<img src="/path-to-tower-fence.jpg" />
			</div>
			<p class="image-caption">Communication Towers</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<!-- Replace src with actual image -->
				<img src="/path-to-parking-fence.jpg" />
			</div>
			<p class="image-caption">Parking Lots</p>
		</div>

		<div class="image-card">
			<div class="placeholder-image">
				<!-- Replace src with actual image -->
				<img src="/path-to-commercial-fence.jpg" />
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

	h2 {
		font-family: var(--font-heading);
		color: var(--color-text-dark);
		font-size: 2.8rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	.tagline {
		text-align: center;
		margin-bottom: 3rem;
	}

	.main-tagline {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-primary);
		margin: 0 0 0.5rem 0;
	}

	.sub-tagline {
		font-size: 1.2rem;
		color: var(--color-text-muted);
		margin: 0;
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
		color: #333;
		margin: 0;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.image-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.main-tagline {
			font-size: 1.6rem;
		}

		.sub-tagline {
			font-size: 1rem;
		}

		h2 {
			font-size: 2.2rem;
		}
	}
</style>
