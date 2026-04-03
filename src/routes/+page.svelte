<script lang="ts">
	import HeroSection from '$lib/components/landing/HeroSection.svelte';
	import USPStrip from '$lib/components/landing/USPStrip.svelte';
	import ProductGrid from '$lib/components/landing/ProductGrid.svelte';
	import StatsSection from '$lib/components/landing/StatsSection.svelte';
	import PartnershipSection from '$lib/components/landing/PartnershipSection.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.home_meta_title()}</title>
	<meta name="description" content={m.home_meta_description()} />
	<meta property="og:title" content={m.home_meta_title()} />
	<meta property="og:description" content={m.home_meta_description()} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<HeroSection />
<USPStrip />
<ProductGrid />
<StatsSection />
<PartnershipSection />
