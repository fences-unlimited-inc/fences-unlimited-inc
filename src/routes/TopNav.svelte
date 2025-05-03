<script lang="ts">
	import '@fontsource/radley';
	import { page } from '$app/state';

	const navLinks = [
		{ href: '/', label: 'Free Estimates' },
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
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
		float: right;
	}

	.top-nav a {
		text-decoration: none;
		color: #333;
		font-weight: 500;
	}

	.top-nav a:hover {
		color: #0066cc;
	}

	.top-nav a[aria-current='true'] {
		color: #0066cc;
		font-weight: 600;
	}

	.social-link {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-radius: 50%;
	}

	.half-logo {
		position: sticky;
		top: 48px;
		left: 40px;
		z-index: 500;
		display: inline;
	}

	.half-logo img {
		padding-top: 8px;
		width: 150px;
	}

	.nav-wrapper {
		display: contents;
	}
</style>
