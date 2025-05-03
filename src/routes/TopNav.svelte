<script lang="ts">
	import '@fontsource/radley';
	import { page } from '$app/state';

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/residential', label: 'Residential' },
		{ href: '/commercial', label: 'Commercial' },
		{ href: '/contact', label: 'Contact Us' }
	];
</script>

<div class="nav-wrapper">
	<div class="page-heading">
		<h1>Fences Unlimited Inc.</h1>
	</div>
	<a class="half-logo" href="/">
		<img src="logo.png" alt="fences unlimited inc logo" />
	</a>
	<nav class="main-top-nav">
		<div class="nav-links">
			{#each navLinks as link}
				<a href={link.href} aria-current={page.url.pathname === link.href}>
					{link.label}
				</a>
			{/each}

			<a
				href="https://www.facebook.com/people/Fences-Unlimited-Inc/100045542240902/"
				target="_blank"
				rel="noopener noreferrer"
				class="social-link"
			>
				<img src="/2023_Facebook_icon.svg" alt="Facebook Profile" width="24" height="24" />
			</a>
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
	}

	.page-heading h1 {
		font-size: 2.5rem;
	}

	.main-top-nav {
		position: sticky;
		top: 0;
		float: right;
		width: 100%;
		padding: 1rem 2rem;
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
		left: 40px;
		display: inline;
		z-index: 1100;
	}

	.half-logo img {
		padding-top: 8px;
		width: 150px;
	}

	.nav-wrapper {
		display: contents;
	}
</style>
