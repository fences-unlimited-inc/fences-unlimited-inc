<script lang="ts">
	import Tagline from '../Tagline.svelte';

	let formData = {
		name: '',
		phone: '',
		email: '',
		address: '',
		fenceTypes: {
			wood: false,
			chainLink: false,
			aluminum: false,
			pvc: false,
			farmFence: false,
			steel: false,
			commercialChainLink: false
		},
		comments: ''
	};

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		// Backend integration will be added later
		console.log('Form submitted:', formData);
	}
</script>

<svelte:head>
	<title>Contact Us - Fences Unlimited Inc.</title>
</svelte:head>

<div class="contact-page">
	<Tagline title="Contact Us" mainTagline="Let's Build Your Perfect Fence Together" />

	<div class="contact-content">
		<section class="contact-info">
			<h2>Our Contact Information</h2>
			<div class="info-block">
				<h3>Address</h3>
				<address>
					Doug & Tracy Langston<br />
					P.O. Box 70634<br />
					Nashville, Tennessee 37207x
				</address>
			</div>

			<div class="info-block">
				<h3>Get in Touch</h3>
				<p>
					<strong>Phone:</strong> <a href="tel:+16152999979">(615) 299-9979</a><br />
					<strong>Fax:</strong> (615) 299-9719<br />
					<strong>Email:</strong>
					<a href="mailto:Tracy@fencesunlimitedinc.com">Tracy@fencesunlimitedinc.com</a>
				</p>
			</div>
		</section>

		<section class="contact-form">
			<h2>Request Information</h2>
			<form on:submit={handleSubmit}>
				<div class="form-group">
					<label for="name">Name *</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						autocomplete="name"
						placeholder="Your full name"
					/>
				</div>

				<div class="form-group">
					<label for="phone">Phone Number *</label>
					<input
						type="tel"
						id="phone"
						bind:value={formData.phone}
						required
						autocomplete="tel"
						placeholder="(XXX) XXX-XXXX"
					/>
				</div>

				<div class="form-group">
					<label for="email">Email Address</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						autocomplete="email"
						placeholder="your@email.com"
					/>
				</div>

				<div class="form-group">
					<label for="address">Address</label>
					<textarea
						id="address"
						bind:value={formData.address}
						autocomplete="street-address"
						placeholder="Jobsite address"
						rows="3"
					></textarea>
				</div>

				<div class="form-group fence-types">
					<label for="fence-types-selection" class="fence-types-label"
						>Interested in: (Select all that apply)</label
					>
					<div class="checkbox-grid" id="fence-types-selection">
						<label class="checkbox-label">
							<input type="checkbox" bind:checked={formData.fenceTypes.wood} /> Wood
						</label>
						<label class="checkbox-label">
							<input type="checkbox" bind:checked={formData.fenceTypes.chainLink} /> Chain Link
						</label>
						<label class="checkbox-label">
							<input type="checkbox" bind:checked={formData.fenceTypes.aluminum} /> Aluminum
						</label>
						<label class="checkbox-label">
							<input type="checkbox" bind:checked={formData.fenceTypes.pvc} /> PVC
						</label>
						<label class="checkbox-label">
							<input type="checkbox" bind:checked={formData.fenceTypes.farmFence} /> Farm Fence
						</label>
						<label class="checkbox-label">
							<input type="checkbox" bind:checked={formData.fenceTypes.steel} /> Steel
						</label>
						<label class="checkbox-label">
							<input type="checkbox" bind:checked={formData.fenceTypes.commercialChainLink} /> Commercial
							Chain Link
						</label>
					</div>
				</div>

				<div class="form-group">
					<label for="comments">Additional Comments or Questions</label>
					<textarea
						id="comments"
						bind:value={formData.comments}
						rows="4"
						placeholder="Tell us more about your project..."
					></textarea>
				</div>

				<button type="submit" class="submit-button">Submit Request</button>
			</form>
		</section>
	</div>
</div>

<style>
	.contact-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.contact-content {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 3rem;
	}

	.contact-info {
		background-color: #f8f8f8;
		padding: 2rem;
		border-radius: 8px;
		height: fit-content;
	}

	.info-block {
		margin-bottom: 2rem;
	}

	.info-block:last-child {
		margin-bottom: 0;
	}

	.info-block h3 {
		margin-bottom: 0.5rem;
		color: var(--color-text-dark);
	}

	.contact-form {
		background-color: #fff;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	input[type='text'],
	input[type='tel'],
	input[type='email'],
	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
	}

	.fence-types {
		margin-top: 1.5rem;
	}

	.checkbox-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: normal;
	}

	.submit-button {
		background-color: #2c5282;
		color: white;
		padding: 1rem 2rem;
		border: none;
		border-radius: 4px;
		font-size: 1.1rem;
		cursor: pointer;
		width: 100%;
		transition: background-color 0.2s;
	}

	.submit-button:hover {
		background-color: #2a4365;
	}

	@media (max-width: 860px) {
		.contact-content {
			grid-template-columns: 1fr;
		}

		.contact-page {
			padding: 1rem;
		}
	}
</style>
