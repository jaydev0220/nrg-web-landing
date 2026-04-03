<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import * as m from '$lib/paraglide/messages';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Check if current path matches nav item
	function isActive(path: string): boolean {
		if (path === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(path);
	}

	const navLinks = [
		{ id: 'home', href: '/', label: () => m.nav_home() },
		{ id: 'about', href: '/about', label: () => m.nav_about() },
		{ id: 'contact', href: '/contact', label: () => m.nav_contact() }
	] as const;
</script>

<nav class="sticky top-0 z-40 h-18 w-full border-b border-border bg-bg-page/95 backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-18 items-center justify-between">
			<!-- Logo -->
			<div class="shrink-0">
				<a href={resolve('/', {})} class="flex items-center" onclick={closeMobileMenu}>
					<div class="flex h-10 w-27 items-center justify-center rounded-md bg-border">
						<span class="text-sm font-bold text-brand">
							{m.company_name()}
						</span>
					</div>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-8 lg:flex">
				{#each navLinks as link (link.id)}
					<a
						href={resolve(link.href, {})}
						class="
							text-sm font-medium transition-colors duration-200 hover:-translate-y-0.5
							focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
							{isActive(link.href) ? 'text-brand' : 'text-text-body hover:text-brand'}
						"
					>
						{link.label()}
					</a>
				{/each}
			</div>

			<!-- Desktop Right Side -->
			<div class="hidden items-center space-x-4 lg:flex">
				<LanguageSwitcher />
				<a
					href="https://example.com"
					target="_blank"
					rel="noopener noreferrer"
					class="
						inline-flex h-10 w-37 items-center justify-center rounded-md bg-brand px-6 py-2
						text-sm font-medium text-text-on-accent transition-colors duration-200 hover:-translate-y-0.5 hover:bg-brand-hover
						focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
					"
				>
					{m.cta_visit_shop()}
				</a>
			</div>

			<!-- Mobile Right Side -->
			<div class="flex items-center space-x-3 lg:hidden">
				<LanguageSwitcher />
				<button
					onclick={toggleMobileMenu}
					class="
						rounded-md p-2 text-text-body transition-colors duration-200 hover:bg-bg-accent hover:text-brand focus-visible:ring-2
						focus-visible:ring-brand focus-visible:outline-none
					"
					aria-expanded={mobileMenuOpen}
					aria-label="Toggle mobile menu"
				>
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-border lg:hidden">
			<div class="bg-bg-surface px-4 py-2">
				<div class="space-y-1">
					{#each navLinks as link (link.id)}
						<a
							href={resolve(link.href, {})}
							onclick={closeMobileMenu}
							class="
								block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200
								focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
								{isActive(link.href)
								? 'bg-bg-accent text-brand'
								: 'text-text-body hover:bg-bg-accent hover:text-brand'}
							"
						>
							{link.label()}
						</a>
					{/each}
				</div>

				<!-- Mobile CTA Button -->
				<div class="mt-4 mb-2 border-t border-border pt-4">
					<a
						href="https://example.com"
						target="_blank"
						rel="noopener noreferrer"
						onclick={closeMobileMenu}
						class="
							block w-full rounded-md bg-brand px-4 py-3 text-center text-sm font-medium text-text-on-accent
							transition-colors duration-200 hover:-translate-y-0.5 hover:bg-brand-hover
							focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
						"
					>
						{m.cta_visit_shop()}
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	nav {
		--ease-ui: cubic-bezier(0.4, 0, 0.2, 1);
		--duration-base: 180ms;
	}
</style>
