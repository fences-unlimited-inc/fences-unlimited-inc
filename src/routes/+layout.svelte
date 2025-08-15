<script lang="ts">
	import TopNav from '$lib/components/TopNav.svelte';

	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { HOST } from '$lib/constants';
	const base = `https://${HOST}`;
	let { children } = $props();

	const GA_ID = 'G-MT56XRBK8T';

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

	function sendPageView(url: URL) {
		if (typeof window === 'undefined') return;
		const g = (window as any).gtag as undefined | ((...args: any[]) => void);
		if (!g) return;
		g('event', 'page_view', {
			page_location: url.toString(),
			page_path: url.pathname + url.search,
			page_title: document.title
		});
	}

	onMount(() => {
		// initial page view after hydration to ensure SPA navigations are comparable
		try {
			sendPageView(new URL(location.href));
		} catch {}

		afterNavigate((nav) => {
			try {
				const u = nav.to?.url ?? new URL(location.href);
				sendPageView(u);
			} catch {}
		});

		const clickHandler = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;
			const el =
				(target.closest('[data-gtag-event],button,a[role="button"]') as HTMLElement) || null;
			if (!el) return;

			// If a custom data-gtag-event is provided, respect it. Otherwise, only track real buttons.
			const custom = el.dataset.gtagEvent;
			if (!custom && el.tagName.toLowerCase() !== 'button' && el.getAttribute('role') !== 'button')
				return;

			const g = (window as any).gtag as undefined | ((...args: any[]) => void);
			if (!g) return;

			const eventName = custom || 'button_click';
			const label =
				el.dataset.gtagLabel ||
				el.getAttribute('aria-label') ||
				(el as HTMLElement).innerText?.trim() ||
				'';
			const category = el.dataset.gtagCategory || 'ui_interaction';
			let extra: Record<string, any> = {};
			const raw = el.getAttribute('data-gtag-params');
			if (raw) {
				try {
					extra = JSON.parse(raw);
				} catch {}
			}

			g('event', eventName, {
				event_category: category,
				event_label: label,
				element_id: el.id || '',
				element_classes: (el as HTMLElement).className || '',
				page_path: location.pathname + location.search,
				...extra
			});
		};

		document.addEventListener('click', clickHandler, { capture: true });

		return () => {
			document.removeEventListener('click', clickHandler, { capture: true } as any);
		};
	});
</script>

<svelte:head>
	<link rel="canonical" href={seo.canonical} />
	<meta property="og:url" content={seo.canonical} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags no-useless-escape -->
	{@html `<script type="application/ld+json">${seo.breadcrumbLD}<\/script>`}
</svelte:head>

<TopNav />

{@render children()}
