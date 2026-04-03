<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import './layout.css';

	let { children } = $props();
	/*
    Google Fonts URL constants.
    Shared fonts (Outfit + IBM Plex Mono) are on every page.
    Noto Sans TC is appended for TC locales only.

    Weights loaded:
      Outfit          300 400 500 600 700  — display, body, UI
      IBM Plex Mono   400 500 600          — specs, SKUs, measurements
      Noto Sans TC    300 400 500 600 700  — all TC text
  */
	const FONTS_SHARED =
		'https://fonts.googleapis.com/css2?' +
		'family=Outfit:wght@300;400;500;600;700&' +
		'family=IBM+Plex+Mono:wght@400;500;600&' +
		'display=swap';
	const FONTS_TC =
		'https://fonts.googleapis.com/css2?' +
		'family=Outfit:wght@300;400;500;600;700&' +
		'family=Noto+Sans+TC:wght@300;400;500;600;700&' +
		'family=IBM+Plex+Mono:wght@400;500;600&' +
		'display=swap';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f8f7f5" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#131110" />
	{#if getLocale() === 'zh-tw'}
		<link rel="stylesheet" href={FONTS_TC} />
	{:else}
		<link rel="stylesheet" href={FONTS_SHARED} />
	{/if}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<a
		href="#main-content"
		class="
			sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-bg-surface
			focus:px-3 focus:py-2 focus:text-sm focus:text-text-body focus:shadow-md
		"
	>
		{m.a11y_skip_to_main()}
	</a>
	<Navbar />
	<main id="main-content" tabindex="-1" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
