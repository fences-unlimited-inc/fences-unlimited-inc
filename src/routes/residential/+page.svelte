<script>
	import Tagline from '$lib/components/Tagline.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CTASection from '$lib/components/CTASection.svelte';

	const residentialImages = [
		{
			src: '/privacy-fence.jpg',
			alt: 'Privacy Fencing',
			caption: 'Privacy Fencing'
		},
		{
			src: '/pool-fence.jpg',
			alt: 'Pool Enclosures',
			caption: 'Pool Enclosures'
		},
		{
			src: '/chain-link.jpg',
			alt: 'Chain Link Fencing',
			caption: 'Chain Link Fencing'
		},
		{
			src: '/wood-fence.jpg',
			alt: 'Wood Fencing',
			caption: 'Wood Fencing'
		},
		{
			src: '/ornamental-fence.jpg',
			alt: 'Ornamental Fencing',
			caption: 'Ornamental Fencing'
		},
		{
			src: '/pvc-fence.jpg',
			alt: 'PVC Fencing',
			caption: 'PVC Fencing'
		},
		{
			src: '/custom-gate.jpg',
			alt: 'Custom Gates',
			caption: 'Custom Gates'
		},
		{
			src: '/pet-fence.jpg',
			alt: 'Pet Containment',
			caption: 'Pet Containment'
		},
		{
			src: '/split-rail-farm.jpg',
			alt: 'Split Rail Farm Fence',
			caption: 'Split Rail Farm Fence'
		},
		{
			src: '/framed-farm.jpg',
			alt: 'Framed Farm Fence with Wire',
			caption: 'Framed Farm Fence with Wire'
		}
	];
</script>

<svelte:head>
	<title>Fences Unlimited Inc. | Residential Fencing in Middle Tennessee</title>
	<meta property="og:title" content="Residential Fencing in Middle Tennessee" />
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
