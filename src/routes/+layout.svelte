<script lang="ts">
	import 'normalize.css';
	import '$lib/style_variables.css';
	import TopNav from './TopNav.svelte';

	import { page } from '$app/state';
	const base = 'https://www.fencesunlimitedinc.com';
	let { children } = $props();

	function buildBreadcrumb(pathname: string) {
		const segments = pathname
			.replace(/^\/|\/$/g, '')
			.split('/')
			.filter(Boolean);
		const items = [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: base + '/'
			}
		];

		let accumulated = '';
		for (let i = 0; i < segments.length; i++) {
			accumulated += '/' + segments[i];
			items.push({
				'@type': 'ListItem',
				position: i + 2,
				name: segments[i].replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()),
				item: base + accumulated
			});
		}

		return {
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: items
		};
	}

	const seo = $derived({
		canonical: `${base}${page.url.pathname}`,
		breadcrumbLD: JSON.stringify(buildBreadcrumb(page.url.pathname), null, 2)
	});
</script>

<svelte:head>
	<link rel="canonical" href={seo.canonical} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags no-useless-escape -->
	{@html `<script type="application/ld+json">${seo.breadcrumbLD}<\/script>`}
</svelte:head>

<TopNav />

{@render children()}
