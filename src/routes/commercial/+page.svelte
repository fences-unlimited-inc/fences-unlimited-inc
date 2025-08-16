<script>
	import Tagline from '$lib/components/Tagline.svelte';
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import CTASection from '$lib/components/CTASection.svelte';

	const commercialImages = [
		{
			src: '/sports-field.jpg',
			alt: 'Sports Fields and Batting Cages',
			caption: 'Sports Fields and Batting Cages'
		},
		{
			src: '/basketball-court.jpg',
			alt: 'Basketball courts, Tennis Courts, and Netting',
			caption: 'Basketball courts, Tennis Courts, and Netting'
		},
		{
			src: '/industrial-gate.jpg',
			alt: 'Industrial Security Gates and Fencing',
			caption: 'Industrial Security Gates and Fencing'
		},
		{
			src: '/indoor-warehouse.jpg',
			alt: 'Warehouse - Indoor',
			caption: 'Warehouse - Indoor'
		},
		{
			src: '/prison-gate.jpg',
			alt: 'Prisons',
			caption: 'Prisons'
		},
		{
			src: '/playground.jpg',
			alt: 'Playgrounds',
			caption: 'Playgrounds'
		},
		{
			src: '/bollards.jpg',
			alt: 'Bollards',
			caption: 'Bollards'
		},
		{
			src: '/enclosures-and-doors.jpg',
			alt: 'Enclosures and Doors',
			caption: 'Enclosures and Doors'
		}
	];
</script>

<svelte:head>
	<title>Fences Unlimited Inc. | Commercial Fencing in Middle Tennessee</title>
    <meta property="og:title" content="Fences Unlimited Inc. | Commercial Fencing in Middle Tennessee" />
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
