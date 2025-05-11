<script lang="ts">
	import '@fontsource/radley';
	import { page } from '$app/state';

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

<div class="nav-wrapper">
	<div class="page-heading">
		<h1>Fences Unlimited Inc.</h1>
	</div>
	<a class="half-logo" href="/" tabindex="-1">
		<img src="logo.png" alt="fences unlimited inc logo" />
	</a>
	<nav class="main-top-nav" aria-label="Main navigation" bind:this={navElement}>
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

		<div class="menu-container">
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
</div>

<style>
	.page-heading {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		width: fit-content;
		height: fit-content;
		font-family: 'Radley', serif;
		text-align: center;
	}

	.page-heading h1 {
		font-size: 2.5rem;
	}

	.main-top-nav {
		position: sticky;
		top: 0;
		float: right;
		width: 100%;
		padding: 1.2rem 2rem;
		text-align: right;
		margin-top: -65px;
		background-color: #add8e6ff;
		box-shadow: 0 8px 8px -2px rgba(0, 0, 0, 0.2);
		z-index: 1000;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
		float: right;
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

	.half-logo {
		position: sticky;
		top: 43px;
		display: inline;
		z-index: 1100;
	}

	.half-logo img {
		position: relative;
		padding-top: 8px;
		width: 150px;
		left: 40px;
	}

	.nav-wrapper {
		display: contents;
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
		margin-left: auto;
		margin-right: 1rem;
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
			position: sticky;
			top: 80px;
			height: 0;
			width: 100%;
			right: 0;
			z-index: 100;
		}

		.page-heading {
			visibility: hidden;
		}

		.half-logo img {
			left: 50%;
			transform: translateX(-50%);
		}

		.main-top-nav {
			padding-right: 0;
		}

		.hamburger {
			display: flex;
		}

		.nav-links {
			position: absolute;
			top: 0;
			right: 0;
			width: 250px;
			min-height: 425px;
			height: calc(100vh);
			flex-direction: column;
			background-color: #add8e6ff;
			padding: 1rem;
			clip-path: inset(0 0 0 100%);
			visibility: hidden;
			transition:
				clip-path 0.3s ease-in-out,
				visibility 0s linear 0.3s;
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
