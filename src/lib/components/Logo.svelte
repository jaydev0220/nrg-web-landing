<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { CDN_ASSETS, cdnUrl } from '$lib/utils/cdn';
	import { theme } from '$lib/state/theme.svelte';

	type Props = {
		class?: string;
		width?: number;
		height?: number;
	};

	let { class: className = '', width = 108, height = 40 }: Props = $props();

	const logoSrc = $derived(
		theme.current === 'dark' ? cdnUrl(CDN_ASSETS.logoDark) : cdnUrl(CDN_ASSETS.logoLight)
	);
</script>

<img src={logoSrc} alt={m.company_name()} class={className} {width} {height} decoding="async" />
