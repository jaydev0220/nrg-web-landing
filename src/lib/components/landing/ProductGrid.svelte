<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { CDN_ASSETS, cdnUrl } from '$lib/utils/cdn';

	const categories = [
		{
			id: 'beakers',
			name: () => m.category_beakers_flasks(),
			gridArea: 'beakers',
			image: CDN_ASSETS.productBeakers
		},
		{
			id: 'pipettes',
			name: () => m.category_pipettes(),
			gridArea: 'pipettes',
			image: CDN_ASSETS.productPipettes
		},
		{
			id: 'tubes',
			name: () => m.category_test_tubes(),
			gridArea: 'tubes',
			image: CDN_ASSETS.productTubes
		},
		{
			id: 'funnels',
			name: () => m.category_funnels(),
			gridArea: 'funnels',
			image: CDN_ASSETS.productFunnels
		},
		{
			id: 'custom',
			name: () => m.category_custom(),
			gridArea: 'custom',
			image: CDN_ASSETS.productCustom
		}
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
				class="relative flex items-end overflow-hidden rounded-2xl bg-border transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: beakers;"
			>
				<img
					src={cdnUrl(categories[0].image)}
					alt={categories[0].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-6">
					<h3 class="text-sm font-bold text-white">
						{categories[0].name()}
					</h3>
				</div>
			</div>

			<!-- Small cells -->
			<div
				class="relative flex items-end overflow-hidden rounded-2xl bg-border transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: pipettes;"
			>
				<img
					src={cdnUrl(categories[1].image)}
					alt={categories[1].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
					<h3 class="text-xs font-bold text-white">
						{categories[1].name()}
					</h3>
				</div>
			</div>

			<div
				class="relative flex items-end overflow-hidden rounded-2xl bg-border transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: tubes;"
			>
				<img
					src={cdnUrl(categories[2].image)}
					alt={categories[2].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
					<h3 class="text-xs font-bold text-white">
						{categories[2].name()}
					</h3>
				</div>
			</div>

			<div
				class="relative flex items-end overflow-hidden rounded-2xl bg-border transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: funnels;"
			>
				<img
					src={cdnUrl(categories[3].image)}
					alt={categories[3].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
					<h3 class="text-xs font-bold text-white">
						{categories[3].name()}
					</h3>
				</div>
			</div>

			<div
				class="relative flex items-end overflow-hidden rounded-2xl bg-border transition-colors duration-200 hover:bg-border-strong"
				style="grid-area: custom;"
			>
				<img
					src={cdnUrl(categories[4].image)}
					alt={categories[4].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
					<h3 class="text-xs font-bold text-white">
						{categories[4].name()}
					</h3>
				</div>
			</div>
		</div>

		<!-- Tablet Grid -->
		<div class="hidden h-auto grid-cols-2 gap-4 md:grid lg:hidden">
			<!-- Row 1: Beakers & Flasks | Pipettes -->
			<div
				class="relative flex h-45 items-end overflow-hidden rounded-xl bg-border transition-colors duration-200 hover:bg-border-strong"
			>
				<img
					src={cdnUrl(categories[0].image)}
					alt={categories[0].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-6">
					<h3 class="text-sm font-bold text-white">
						{categories[0].name()}
					</h3>
				</div>
			</div>
			<div
				class="relative flex h-45 items-end overflow-hidden rounded-xl bg-border transition-colors duration-200 hover:bg-border-strong"
			>
				<img
					src={cdnUrl(categories[1].image)}
					alt={categories[1].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
					<h3 class="text-xs font-bold text-white">
						{categories[1].name()}
					</h3>
				</div>
			</div>

			<!-- Row 2: Test Tubes | Funnels -->
			<div
				class="relative flex h-45 items-end overflow-hidden rounded-xl bg-border transition-colors duration-200 hover:bg-border-strong"
			>
				<img
					src={cdnUrl(categories[2].image)}
					alt={categories[2].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
					<h3 class="text-xs font-bold text-white">
						{categories[2].name()}
					</h3>
				</div>
			</div>
			<div
				class="relative flex h-45 items-end overflow-hidden rounded-xl bg-border transition-colors duration-200 hover:bg-border-strong"
			>
				<img
					src={cdnUrl(categories[3].image)}
					alt={categories[3].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
					<h3 class="text-xs font-bold text-white">
						{categories[3].name()}
					</h3>
				</div>
			</div>

			<!-- Row 3: Custom (full width) -->
			<div
				class="relative col-span-2 flex h-45 items-end overflow-hidden rounded-xl bg-border transition-colors duration-200 hover:bg-border-strong"
			>
				<img
					src={cdnUrl(categories[4].image)}
					alt={categories[4].name()}
					class="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
				<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
					<h3 class="text-xs font-bold text-white">
						{categories[4].name()}
					</h3>
				</div>
			</div>
		</div>

		<!-- Mobile Stack -->
		<div class="space-y-3 md:hidden">
			{#each categories as category, index (category.id)}
				<div
					class="
						relative flex items-end overflow-hidden rounded-xl bg-border transition-colors duration-200 hover:bg-border-strong
						{index === 0 ? 'h-32' : 'h-29'}
					"
				>
					<img
						src={cdnUrl(category.image)}
						alt={category.name()}
						class="absolute inset-0 h-full w-full object-cover"
						loading="lazy"
					/>
					<div class="relative z-10 w-full bg-gradient-to-t from-neutral-900/70 to-transparent p-4">
						<h3 class="text-xs font-bold text-white">
							{category.name()}
						</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
