<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	const contactItems = [
		{
			id: 'address',
			label: () => m.contact_address(),
			value: () => m.contact_address_value(),
			icon: '📍'
		},
		{
			id: 'phone',
			label: () => m.contact_phone(),
			value: () => m.contact_phone_value(),
			icon: '📞'
		},
		{
			id: 'fax',
			label: () => m.contact_fax(),
			value: () => m.contact_fax_value(),
			icon: '📠'
		},
		{
			id: 'email',
			label: () => m.contact_email(),
			value: () => m.contact_email_value(),
			icon: '✉️'
		}
	];

	const socialLinks = [
		{
			id: 'facebook',
			label: () => m.footer_social_facebook(),
			href: 'https://www.facebook.com/profile.php?id=100057611824911'
		},
		{ id: 'line', label: () => m.footer_social_line(), href: 'https://example.com' }
	];
</script>

<!-- Desktop Layout -->
<div class="hidden lg:block">
	<div class="space-y-8">
		<!-- Contact Information -->
		<div>
			<h2 class="mb-4 text-2xl font-bold text-text-heading">
				{m.contact_info_heading()}
			</h2>
			<div class="mb-6 border-t border-border"></div>

			<div class="space-y-6">
				{#each contactItems as item (item.id)}
					<div class="flex items-start space-x-3">
						<span class="mt-0.5 text-lg">{item.icon}</span>
						<div class="space-y-1">
							<p class="text-xs tracking-wider text-text-muted uppercase">
								{item.label()}
							</p>
							<p class="text-sm text-text-body">
								{item.value()}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Divider -->
		<div class="border-t border-border"></div>

		<!-- QR Codes -->
		<div class="flex space-x-3">
			<!-- Facebook -->
			<div
				class="flex aspect-square w-22 items-center justify-center rounded-lg bg-bg-sunken text-xs text-text-muted"
			>
				[QR]
			</div>

			<!-- LINE -->
			<div
				class="flex aspect-square w-22 items-center justify-center rounded-lg bg-bg-sunken text-xs text-text-muted"
			>
				[QR]
			</div>
		</div>

		<!-- Social Buttons -->
		<div class="flex space-x-3">
			{#each socialLinks as social (social.id)}
				<a
					href={social.href}
					target="_blank"
					rel="external noopener noreferrer"
					class="
						inline-flex h-9 w-22 items-center justify-center rounded-md border
						border-border bg-bg-sunken px-3 py-2 text-xs font-medium text-text-body
						transition-colors duration-200 hover:-translate-y-0.5 hover:bg-bg-accent
						focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
					"
					aria-label={social.label()}
				>
					{social.label()}
				</a>
			{/each}
		</div>

		<!-- Google Map -->
		<div class="flex h-57 w-full items-center justify-center rounded-lg bg-border text-text-muted">
			[Google Map]
		</div>
	</div>
</div>

<!-- Tablet Layout -->
<div class="hidden md:block lg:hidden">
	<div class="mb-6 rounded-lg bg-bg-accent p-6">
		<h2 class="mb-4 text-xl font-bold text-text-heading">
			{m.contact_info_heading()}
		</h2>
		<div class="mb-4 border-t border-border"></div>

		<div class="grid grid-cols-2 gap-4">
			{#each contactItems as item (item.id)}
				<div class="space-y-1">
					<p class="text-xs tracking-wider text-text-muted uppercase">
						{item.icon}
						{item.label()}
					</p>
					<p class="text-xs text-text-body">
						{item.value()}
					</p>
				</div>
			{/each}
		</div>

		<!-- Social Buttons -->
		<div class="mt-6 flex space-x-3">
			{#each socialLinks as social (social.id)}
				<a
					href={social.href}
					target="_blank"
					rel="external noopener noreferrer"
					class="
						inline-flex h-8 w-22 items-center justify-center rounded border
						border-border bg-bg-surface px-3 py-1.5 text-xs font-medium text-text-body
						transition-colors duration-200 hover:-translate-y-0.5 hover:bg-bg-sunken
						focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
					"
					aria-label={social.label()}
				>
					{social.label()}
				</a>
			{/each}
		</div>
	</div>

	<!-- Google Map -->
	<div
		class="mb-6 flex h-64 w-full items-center justify-center rounded-lg bg-border text-text-muted"
	>
		[Google Map]
	</div>
</div>

<!-- Mobile Layout -->
<div class="md:hidden">
	<div class="space-y-6 bg-bg-page p-4">
		<div>
			<h2 class="mb-3 text-lg font-bold text-text-heading">
				{m.contact_info_heading()}
			</h2>
			<div class="mb-4 border-t border-border"></div>

			<div class="space-y-4">
				{#each contactItems as item (item.id)}
					<div class="space-y-1">
						<p class="text-xs tracking-wider text-text-muted uppercase">
							{item.icon}
							{item.label()}
						</p>
						<p class="text-xs text-text-body">
							{item.value()}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Social Buttons -->
		<div class="flex space-x-3">
			{#each socialLinks as social (social.id)}
				<a
					href={social.href}
					target="_blank"
					rel="external noopener noreferrer"
					class="
						inline-flex h-8 w-22 items-center justify-center rounded border
						border-border bg-bg-sunken px-3 py-1.5 text-xs font-medium text-text-body
						transition-colors duration-200 hover:-translate-y-0.5 hover:bg-bg-accent
						focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
					"
					aria-label={social.label()}
				>
					{social.label()}
				</a>
			{/each}
		</div>
	</div>

	<!-- Google Map -->
	<div
		class="mb-6 flex h-54 w-full items-center justify-center rounded-lg bg-border text-text-muted"
	>
		[Google Map]
	</div>
</div>
