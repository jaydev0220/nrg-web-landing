<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { splitLineBreakTags } from '$lib/utils/line-breaks';

	const milestones = [
		{ id: '1970', year: () => m.milestone_1970(), description: () => m.milestone_1970_desc() },
		{ id: '1990', year: () => m.milestone_1990(), description: () => m.milestone_1990_desc() },
		{ id: '2011', year: () => m.milestone_2011(), description: () => m.milestone_2011_desc() },
		{
			id: 'present',
			year: () => m.milestone_present(),
			description: () => m.milestone_present_desc()
		}
	];
</script>

<section class="bg-bg-accent py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Heading -->
		<div class="mb-12">
			<h2 class="text-3xl font-bold text-text-heading lg:text-4xl">
				{m.history_heading()}
			</h2>
		</div>

		<!-- Timeline -->
		<div class="relative">
			<!-- Vertical line -->
			<div class="absolute top-0 bottom-0 left-4 w-0.5 bg-border lg:left-6"></div>

			<!-- Milestones -->
			<div class="space-y-0">
				{#each milestones as milestone (milestone.id)}
					<div class="relative flex items-start pb-16">
						<!-- Dot -->
						<div
							class="relative z-10 mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-brand lg:mt-1.5 lg:h-4 lg:w-4"
						></div>

						<!-- Content -->
						<div class="ml-6 space-y-2 lg:ml-8">
							<h3 class="text-lg font-bold text-text-heading">
								{milestone.year()}
							</h3>
							<p class="leading-relaxed text-text-muted">
								{#each splitLineBreakTags(milestone.description()) as segment, index (index)}
									{#if segment.type === 'text'}
										{segment.value}
									{:else}
										<br />
									{/if}
								{/each}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
