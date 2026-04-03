<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	const usps = [
		{
			id: 'b2b',
			icon: '🏢',
			title: () => m.usp_b2b_title(),
			description: () => m.usp_b2b_description()
		},
		{
			id: 'b2c',
			icon: '🔬',
			title: () => m.usp_b2c_title(),
			description: () => m.usp_b2c_description()
		}
	];
</script>

<section class="border-y border-border bg-bg-page py-10">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="@container">
			<div class="grid grid-cols-1 gap-4 @md:grid-cols-2">
				{#each usps as usp (usp.id)}
					<article class="rounded-xl border border-border bg-bg-surface p-5 text-center">
						<div class="text-2xl" aria-hidden="true">{usp.icon}</div>
						<h3 class="mt-2 font-semibold text-text-heading">
							{usp.title()}
						</h3>
						<p class="mt-2 text-sm text-text-body">
							{usp.description()}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
