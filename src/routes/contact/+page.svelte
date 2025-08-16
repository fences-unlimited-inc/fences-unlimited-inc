<script lang="ts">
	import Tagline from '$lib/components/Tagline.svelte';
	import { PHONE_NUMBER, PHONE_NUMBER_HREF } from '$lib/constants';
	import Button from '$lib/components/Button.svelte';

	let formElement: HTMLFormElement;
	let formSubmitted = false;
	let submissionError = false;
	let isSubmitting = false;

	const fenceTypes = [
		'Wood',
		'Chain Link',
		'Aluminum',
		'PVC',
		'Farm Fence',
		'Steel',
		'Commercial Chain Link'
	];

	async function handleSubmit() {
		if (isSubmitting) return;

		isSubmitting = true;
		const formData = new FormData(formElement);

		// Process form data to handle multiple checkbox selections
		const formDataObj: { [id: string | 'fence-types']: string | string[] } = {
			'fence-types': <string[]>[]
		};
		for (const [key, value] of formData.entries()) {
			if (key === 'fence-types') {
				const types = formDataObj[key] as string[];
				types.push(value as string);
			} else {
				formDataObj[key] = value as string;
			}
		}
		const json = JSON.stringify(formDataObj);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: json
			});
			isSubmitting = false;
			const result = await response.json();
			if (result.success) {
				console.log(result);
				formSubmitted = true;
			} else {
				console.error('Form submission failed:', result);
				submissionError = true;
			}
		} catch (error) {
			console.error('Form submission error:', error);
			submissionError = true;
		}
	}
</script>

<svelte:head>
	<title>Fences Unlimited Inc. | Contact</title>
	<meta property="og:title" content="Contact Fences Unlimited Inc." />
	<meta
		name="description"
		content="Get in touch with Fences Unlimited Inc. for questions, quotes, or to schedule your fencing project. Serving greater Nashville and Middle Tennessee with friendly, expert service."
	/>
	<script src="https://web3forms.com/client/script.js" async defer></script>
</svelte:head>

<div class="contact-page">
	<Tagline title="Contact Us" mainTagline="Let's Build Your Perfect Fence Together" />

	<div class="contact-content">
		<section class="contact-info">
			<h2>Our Contact Information</h2>
			<div class="info-block">
				<h3>Address</h3>
				<address>
					Doug &amp Tracy Langston<br />
					P.O. Box 70634<br />
					Nashville, Tennessee 37207
				</address>
			</div>

			<div class="info-block">
				<h3>Get in Touch</h3>
				<p>
					<strong>Phone:</strong> <a href={PHONE_NUMBER_HREF}>{PHONE_NUMBER}</a><br />
					<strong>Fax:</strong> (615) 299-9719<br />
					<strong>Email:</strong>
					<a href="mailto:contact@fencesunlimitedinc.com">contact@fencesunlimitedinc.com</a>
				</p>
			</div>
		</section>

		<section class="contact-form">
			<h2>Request Information</h2>

			{#if formSubmitted}
				<div class="success-message">
					<h3>Thank You!</h3>
					<p>
						Your request has been submitted successfully. We'll get back to you as soon as possible.
					</p>
				</div>
			{:else}
				{#if submissionError}
					<div class="error-message">
						<p>There was an error submitting your form. Please try again or contact us directly.</p>
					</div>
				{/if}

				<form bind:this={formElement} on:submit|preventDefault={handleSubmit}>
					<input type="hidden" name="access_key" value="99226058-4277-4d38-95fa-4aa669cb9be8" />
					<input type="hidden" name="subject" value="Website form lead" />
					<input type="hidden" name="from_name" value="Web Form" />
					<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />

					<div class="form-group">
						<label for="name">Name *</label>
						<input
							type="text"
							id="name"
							name="name"
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
							name="phone"
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
							name="email"
							autocomplete="email"
							placeholder="your@email.com"
						/>
					</div>

					<div class="form-group">
						<label for="address">Address</label>
						<textarea
							id="address"
							name="address"
							autocomplete="street-address"
							placeholder="Jobsite address"
							rows="3"
						></textarea>
					</div>

					<div class="form-group fence-types">
						<label for="fence-types-selection" class="fence-types-label">
							Interested in: (Select all that apply)
						</label>
						<div class="checkbox-grid" id="fence-types-selection">
							{#each fenceTypes as type (type)}
								<label class="checkbox-label">
									<input type="checkbox" name="fence-types" value={type} />
									{type}
								</label>
							{/each}
						</div>
					</div>

					<div class="form-group">
						<label for="comments">Additional Comments or Questions</label>
						<textarea
							id="comments"
							name="comments"
							rows="4"
							placeholder="Tell us more about your project..."
						></textarea>
					</div>
					<div class="form-group">
						<label for="captcha">Are you a human?</label>
						<div class="h-captcha" data-captcha="true" id="captcha"></div>
					</div>

					<Button type="submit" disabled={isSubmitting} fullWidth={true}>Submit Request</Button>
				</form>
			{/if}
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

	.success-message {
		background-color: #f0fff4;
		border: 1px solid #68d391;
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
		animation: fadeIn 0.5s ease-in-out;
	}

	.success-message h3 {
		color: #2f855a;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.success-message p {
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.error-message {
		background-color: #fff5f5;
		border: 1px solid #fc8181;
		border-radius: 8px;
		padding: 1rem;
		margin-bottom: 1.5rem;
		color: #c53030;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 860px) {
		.contact-content {
			grid-template-columns: 1fr;
		}

		.contact-page {
			padding: 1rem;
		}

		.contact-form {
			order: 1;
		}

		.contact-info {
			order: 2;
		}
	}
</style>
