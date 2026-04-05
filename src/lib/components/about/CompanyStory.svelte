<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { storyImage } from '$lib/data';
	import { splitLineBreakTags } from '$lib/utils/line-breaks';

	const storySegments = () => splitLineBreakTags(m.story_content());
</script>

<section class="bg-bg-page py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Heading -->
		<div class="mb-8 lg:mb-12">
			<h2 class="mb-4 text-3xl font-bold text-text-heading md:text-3xl lg:text-4xl">
				{m.story_heading()}
			</h2>
			<div class="border-t border-border"></div>
		</div>

		<!-- Desktop Layout -->
		<div class="hidden grid-cols-2 items-start gap-16 lg:grid">
			<!-- Left: Photo -->
			<div>
				<div class="h-49 w-120 overflow-hidden rounded-xl bg-border">
					<img
						src={storyImage.src}
						alt={storyImage.alt}
						class="h-full w-full object-cover"
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>

			<!-- Right: Content -->
			<div class="space-y-6">
				<p class="text-sm leading-relaxed text-text-body">
					{#each storySegments() as segment, index (index)}
						{#if segment.type === 'text'}
							{segment.value}
						{:else}
							<br />
						{/if}
					{/each}
				</p>
			</div>
		</div>

		<!-- Tablet Layout -->
		<div class="hidden space-y-8 md:block lg:hidden">
			<div class="h-56 w-full overflow-hidden rounded-lg bg-border">
				<img
					src={storyImage.src}
					alt={storyImage.alt}
					class="h-full w-full object-cover"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="space-y-4">
				<p class="text-xs leading-relaxed text-text-body">
					{#each storySegments() as segment, index (index)}
						{#if segment.type === 'text'}
							{segment.value}
						{:else}
							<br />
						{/if}
					{/each}
				</p>
			</div>
		</div>

		<!-- Mobile Layout -->
		<div class="space-y-6 md:hidden">
			<div class="h-48 w-full overflow-hidden rounded-lg bg-border">
				<img
					src={storyImage.src}
					alt={storyImage.alt}
					class="h-full w-full object-cover"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="space-y-4">
				<p class="text-xs leading-relaxed text-text-body">
					{#each storySegments() as segment, index (index)}
						{#if segment.type === 'text'}
							{segment.value}
						{:else}
							<br />
						{/if}
					{/each}
				</p>
			</div>
		</div>
	</div>
</section>
