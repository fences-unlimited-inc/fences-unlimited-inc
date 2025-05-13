<script>
	import Tagline from '$lib/components/Tagline.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CTASection from '$lib/components/CTASection.svelte';

	const commercialImages = [
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Sports+Fence',
			alt: 'Tennis Courts, Sports Fields, and Netting',
			caption: 'Tennis Courts, Sports Fields, and Netting'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Security+Gate',
			alt: 'Industrial Security Gates and Fencing',
			caption: 'Industrial Security Gates and Fencing'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Warehouse+Fence',
			alt: 'Warehouse - Indoor',
			caption: 'Warehouse - Indoor'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Security+Fence',
			alt: 'Prisons',
			caption: 'Prisons'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Tower+Fence',
			alt: 'Communication Towers',
			caption: 'Communication Towers'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Parking+Fence',
			alt: 'Parking Lots',
			caption: 'Parking Lots'
		},
		{
			src: 'https://placehold.co/800x600/EAEAEA/A6A6A6?text=Commercial+Fence',
			alt: 'Other Commercial Fencing Applications',
			caption: 'Other Commercial Fencing Applications'
		}
	];
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

	<ImageGrid images={commercialImages} />

	<CTASection
		title="Need Industrial-Grade Fencing Solutions?"
		description="Our experienced team specializes in commercial and industrial fencing projects of all sizes. Contact us today to discuss your specific requirements."
		quoteButtonText="Request a Commercial Quote"
	/>
</div>

<style>
	.commercial-section {
		max-width: 1200px;
		margin: 3rem auto;
		padding: 0 2rem;
	}
</style>
