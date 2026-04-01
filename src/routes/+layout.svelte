<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
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
	{#if getLocale() === 'zh-tw'}
		<link rel="stylesheet" href={FONTS_TC} />
	{:else}
		<link rel="stylesheet" href={FONTS_SHARED} />
	{/if}
</svelte:head>

{@render children()}
