<script lang="ts">
	import { page } from '$app/state';
	import { PHONE_NUMBER, PHONE_NUMBER_HREF } from '$lib/constants';
	import Icon from './Icon.svelte';

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/residential', label: 'Residential' },
		{ href: '/commercial', label: 'Commercial' },
		{ href: '/contact', label: 'Contact Us' }
	];

	let isMenuOpen = false;
	let navElement: HTMLElement;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		if (isMenuOpen && navElement && !navElement.contains(event.target as Node)) {
			isMenuOpen = false;
		}
	}
</script>

<svelte:window on:click={handleClickOutside} />

<nav class="main-top-nav" aria-label="Main navigation" bind:this={navElement}>
	<a class="nav-logo" href="/" tabindex="-1">
		<img src="logo.svg" alt="fences unlimited inc logo" />
	</a>

	<button
		class="hamburger"
		class:open={isMenuOpen}
		on:click={toggleMenu}
		aria-label="Toggle navigation menu"
		aria-controls="main-navigation-links"
		aria-expanded={isMenuOpen}
	>
		<span></span>
		<span></span>
		<span></span>
	</button>

	<div class="menu-container" class:open={isMenuOpen}>
		<div class="nav-links" id="main-navigation-links" class:open={isMenuOpen}>
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					aria-current={page.url.pathname === link.href}
					on:click={() => (isMenuOpen = false)}
				>
					{link.label}
				</a>
			{/each}

			<div class="cta-container">
				<a href={PHONE_NUMBER_HREF} class="phone-cta" on:click={() => (isMenuOpen = false)}>
					<Icon name="phone" />
					{PHONE_NUMBER}
				</a>
				<a href="/contact" class="quote-cta" on:click={() => (isMenuOpen = false)}>
					Get a Free Quote
				</a>
			</div>

			<a
				href="https://www.facebook.com/people/Fences-Unlimited-Inc/100045542240902/"
				target="_blank"
				rel="noopener noreferrer"
				class="social-link"
				aria-label="Visit Fences Unlimited Inc. on Facebook"
				on:click={() => (isMenuOpen = false)}
			>
				<img src="/2023_Facebook_icon.svg" alt="Facebook Profile" width="24" height="24" />
			</a>
		</div>
	</div>
</nav>

<style>
	.main-top-nav {
		position: sticky;
		top: 0;
		padding: 0.8rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-nav-background);
		box-shadow: 0 8px 8px -2px rgba(0, 0, 0, 0.2);
		z-index: 1000;
		height: 77px;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-links a {
		text-decoration: none;
		color: var(--color-text-dark);
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: all 0.2s ease-in-out;
		position: relative;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 2px;
		background-color: var(--color-primary);
		transition: all 0.2s ease-in-out;
		transform: translateX(-50%);
	}

	.nav-links a:hover {
		background-color: rgba(0, 0, 0, 0.05);
		color: var(--color-primary);
	}

	.nav-links a:hover::after {
		width: calc(100% - 2rem);
	}

	.nav-links a[aria-current='true'] {
		color: var(--color-primary);
		font-weight: 600;
	}

	.nav-links a[aria-current='true']::after {
		width: calc(100% - 2rem);
	}

	.social-link {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-radius: 50%;
		transition: transform 0.2s ease-in-out;
	}

	.social-link:hover {
		transform: translateY(-2px);
		background-color: rgba(0, 0, 0, 0.05);
	}

	.cta-container {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.phone-cta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		color: var(--color-text-dark);
		font-weight: 600;
		text-decoration: none;
		border-radius: 4px;
		transition: all 0.2s ease-in-out;
	}

	.phone-cta:hover {
		background-color: rgba(0, 0, 0, 0.05);
		transform: translateY(-2px);
	}

	.quote-cta {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: #ff5722;
		color: white;
		font-weight: 600;
		text-decoration: none;
		border-radius: 4px;
		transition: all 0.2s ease-in-out;
	}

	.quote-cta:hover {
		background-color: #f44336;
		transform: translateY(-2px);
	}

	.nav-logo {
		display: flex;
		align-items: center;
	}

	.nav-logo img {
		width: 115px;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: space-around;
		width: 30px;
		height: 25px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 1200;
	}

	.hamburger span {
		width: 30px;
		height: 3px;
		background-color: var(--color-text-dark);
		transition: all 0.3s ease-in-out;
		border-radius: 2px;
	}

	@media (max-width: 860px) {
		.menu-container {
			position: fixed;
			top: 80px;
			width: 100%;
			right: 0;
			z-index: 100;
			pointer-events: none;
		}

		.menu-container.open {
			pointer-events: auto;
		}

		.nav-logo {
			position: relative;
			left: 0;
		}

		.hamburger {
			position: absolute;
			right: 1em;
			display: flex;
			margin-right: 1rem;
		}

		.nav-links {
			position: fixed;
			top: 90px;
			right: 0;
			width: 250px;
			min-height: 425px;
			height: calc(100vh - 80px);
			flex-direction: column;
			background-color: var(--color-nav-background);
			padding: 1rem;
			clip-path: inset(0 0 0 100%);
			visibility: hidden;
			transition:
				clip-path 0.3s ease-in-out,
				visibility 0s linear 0.3s;
			z-index: 1100;
		}

		.nav-links.open {
			clip-path: inset(0 0 0 0);
			visibility: visible;
			transition:
				clip-path 0.3s ease-in-out,
				visibility 0s linear;
		}

		.nav-links a {
			width: 100%;
			text-align: left;
			padding: 1rem;
		}

		.cta-container {
			flex-direction: column;
			width: 100%;
			gap: 0.5rem;
			margin: 0.5rem 0;
		}

		.phone-cta,
		.quote-cta {
			width: 100%;
			text-align: center;
			justify-content: center;
		}

		/* Hamburger animation when menu is open */
		.hamburger span:first-child {
			transform: translateY(8px) rotate(45deg);
		}

		.hamburger span:nth-child(2) {
			opacity: 0;
		}

		.hamburger span:last-child {
			transform: translateY(-8px) rotate(-45deg);
		}

		/* Reset hamburger when menu is closed */
		.hamburger:not(.open) span {
			transform: none;
			opacity: 1;
		}
	}
</style>
