<script>
	import Tagline from '$lib/components/Tagline.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CTASection from '$lib/components/CTASection.svelte';

	const residentialImages = [
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Privacy+Fence',
			alt: 'Privacy Fencing',
			caption: 'Privacy Fencing'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Pool+Fence',
			alt: 'Pool Enclosures',
			caption: 'Pool Enclosures'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Chain+Link',
			alt: 'Chain Link Fencing',
			caption: 'Chain Link Fencing'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Wood+Fence',
			alt: 'Wood Fencing',
			caption: 'Wood Fencing'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Ornamental',
			alt: 'Ornamental Fencing',
			caption: 'Ornamental Fencing'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=PVC+Fence',
			alt: 'PVC Fencing',
			caption: 'PVC Fencing'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Custom+Gates',
			alt: 'Custom Gates',
			caption: 'Custom Gates'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Pet+Fence',
			alt: 'Pet Containment',
			caption: 'Pet Containment'
		}
	];
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

	<ImageGrid images={residentialImages} />

	<CTASection
		title="Ready to Enhance Your Home with a Quality Fence?"
		description="Our team of experts is ready to help you choose the perfect fencing solution for your home."
		quoteButtonText="Get a Free Quote"
	/>
</div>

<style>
	.residential-section {
		max-width: 1200px;
		margin: 3rem auto;
		padding: 0 2rem;
	}
</style>
