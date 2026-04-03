<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import CompanyStory from '$lib/components/about/CompanyStory.svelte';
	import Timeline from '$lib/components/about/Timeline.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.about_page_title()} | {m.company_name()}</title>
	<meta name="description" content={m.story_content().substring(0, 160)} />
	<meta property="og:title" content={`${m.about_page_title()} | ${m.company_name()}`} />
	<meta property="og:description" content={m.story_content().substring(0, 160)} />
</svelte:head>

<PageHeader
	breadcrumb={m.breadcrumb_about()}
	title={m.about_page_title()}
/>

<CompanyStory />
<Timeline />
