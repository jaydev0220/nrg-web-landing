<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	const categories = [
		{ id: 'beakers', name: () => m.category_beakers_flasks(), gridArea: 'beakers' },
		{ id: 'pipettes', name: () => m.category_pipettes(), gridArea: 'pipettes' },
		{ id: 'tubes', name: () => m.category_test_tubes(), gridArea: 'tubes' },
		{ id: 'funnels', name: () => m.category_funnels(), gridArea: 'funnels' },
		{ id: 'custom', name: () => m.category_custom(), gridArea: 'custom' }
	];
</script>

<section class="bg-bg-page py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Heading -->
		<div class="mb-8 lg:mb-16">
			<h2 class="mb-2 text-3xl font-bold text-text-heading md:text-3xl lg:text-4xl">
				{m.product_series_heading()} / {m.product_categories_heading()}
			</h2>
		</div>

		<!-- Desktop Bento Grid -->
		<div
			class="hidden h-93 gap-4 lg:grid"
			style="grid-template-areas: 'beakers pipettes tubes' 'beakers funnels custom'; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr;"
		>
			<!-- Large cell: Beakers & Flasks -->
			<div
				class="flex items-end rounded-2xl bg-border p-6 transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: beakers;"
			>
				<h3 class="text-sm font-bold text-text-body">
					{categories[0].name()}
				</h3>
			</div>

			<!-- Small cells -->
			<div
				class="flex items-end rounded-2xl bg-border p-4 transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: pipettes;"
			>
				<h3 class="text-xs font-bold text-text-body">
					{categories[1].name()}
				</h3>
			</div>

			<div
				class="flex items-end rounded-2xl bg-border p-4 transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: tubes;"
			>
				<h3 class="text-xs font-bold text-text-body">
					{categories[2].name()}
				</h3>
			</div>

			<div
				class="flex items-end rounded-2xl bg-border p-4 transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: funnels;"
			>
				<h3 class="text-xs font-bold text-text-body">
					{categories[3].name()}
				</h3>
			</div>

			<div
				class="flex items-end rounded-2xl bg-border p-4 transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: custom;"
			>
				<h3 class="text-xs font-bold text-text-body">
					{categories[4].name()}
				</h3>
			</div>
		</div>

		<!-- Tablet Grid -->
		<div class="hidden h-auto grid-cols-2 gap-4 md:grid lg:hidden">
			<!-- Row 1: Beakers & Flasks | Pipettes -->
			<div
				class="flex h-45 items-end rounded-xl bg-border p-6 transition-colors duration-200 hover:bg-border-strong"
			>
				<h3 class="text-sm font-bold text-text-body">
					{categories[0].name()}
				</h3>
			</div>
			<div
				class="flex h-45 items-end rounded-xl bg-border p-4 transition-colors duration-200 hover:bg-border-strong"
			>
				<h3 class="text-xs font-bold text-text-body">
					{categories[1].name()}
				</h3>
			</div>

			<!-- Row 2: Test Tubes | Funnels -->
			<div
				class="flex h-45 items-end rounded-xl bg-border p-4 transition-colors duration-200 hover:bg-border-strong"
			>
				<h3 class="text-xs font-bold text-text-body">
					{categories[2].name()}
				</h3>
			</div>
			<div
				class="flex h-45 items-end rounded-xl bg-border p-4 transition-colors duration-200 hover:bg-border-strong"
			>
				<h3 class="text-xs font-bold text-text-body">
					{categories[3].name()}
				</h3>
			</div>

			<!-- Row 3: Custom (full width) -->
			<div
				class="col-span-2 flex h-45 items-end rounded-xl bg-border p-4 transition-colors duration-200 hover:bg-border-strong"
			>
				<h3 class="text-xs font-bold text-text-body">
					{categories[4].name()}
				</h3>
			</div>
		</div>

		<!-- Mobile Stack -->
		<div class="space-y-3 md:hidden">
			{#each categories as category, index (category.id)}
				<div
					class="
						flex items-end rounded-xl bg-border p-4 transition-colors duration-200 hover:bg-border-strong
						{index === 0 ? 'h-32' : 'h-29'}
					"
				>
					<h3 class="text-xs font-bold text-text-body">
						{category.name()}
					</h3>
				</div>
			{/each}
		</div>
	</div>
</section>
