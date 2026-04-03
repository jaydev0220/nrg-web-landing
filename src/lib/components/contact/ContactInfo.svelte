<script lang="ts">
	import { siFacebook, siLine } from 'simple-icons';
	import { Mail, MapPin, Phone, Printer } from '@lucide/svelte';
	import * as m from '$lib/paraglide/messages';
	import { cdnUrl, CDN_ASSETS } from '$lib/utils/cdn';
	import SocialIcon from '$lib/components/SocialIcon.svelte';

	const contactItems = [
		{
			id: 'address',
			label: () => m.contact_address(),
			value: () => m.contact_address_value(),
			icon: MapPin
		},
		{
			id: 'phone',
			label: () => m.contact_phone(),
			value: () => m.contact_phone_value(),
			icon: Phone
		},
		{
			id: 'fax',
			label: () => m.contact_fax(),
			value: () => m.contact_fax_value(),
			icon: Printer
		},
		{
			id: 'email',
			label: () => m.contact_email(),
			value: () => m.contact_email_value(),
			icon: Mail
		}
	];

	const qrCodes = [
		{
			id: 'facebook',
			src: cdnUrl(CDN_ASSETS.contactFacebookQr),
			alt: 'Facebook QR code'
		},
		{
			id: 'line',
			src: cdnUrl(CDN_ASSETS.contactLineQr),
			alt: 'LINE QR code'
		}
	];

	const socialLinks = [
		{
			id: 'facebook',
			label: () => m.footer_social_facebook(),
			href: 'https://www.facebook.com/profile.php?id=100057611824911',
			icon: siFacebook
		},
		{ id: 'line', label: () => m.footer_social_line(), href: 'https://example.com', icon: siLine }
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
					{@const Icon = item.icon}
					<div class="flex items-start space-x-3">
						<Icon class="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
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
			{#each qrCodes as qrCode (qrCode.id)}
				<div class="h-22 w-22 overflow-hidden rounded-lg bg-bg-sunken p-2">
					<img
						src={qrCode.src}
						alt={qrCode.alt}
						class="h-full w-full object-contain"
						loading="lazy"
						decoding="async"
					/>
				</div>
			{/each}
		</div>

		<!-- Social Buttons -->
		<div class="flex space-x-3">
			{#each socialLinks as social (social.id)}
				<a
					href={social.href}
					target="_blank"
					rel="external noopener noreferrer"
					class="
						inline-flex h-9 min-w-22 items-center justify-center gap-1 rounded-md border
						border-border bg-bg-sunken px-3 py-2 text-xs font-medium text-text-body
						transition-colors duration-200 hover:-translate-y-0.5 hover:bg-bg-accent
						focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
					"
					aria-label={social.label()}
				>
					<SocialIcon icon={social.icon} classList="h-4 w-auto" />
					{social.label()}
				</a>
			{/each}
		</div>

		<!-- Google Map -->
		<div class="h-57 w-full overflow-hidden rounded-lg bg-border">
			<iframe
				title="Map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.510053963399!2d120.96259377610822!3d24.81222504718463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835c783360679%3A0x5ac4b4655a6c4e53!2z5ben5paw5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2stw!4v1775226280234!5m2!1sen!2stw"
				width="100%"
				height="100%"
				allowfullscreen={true}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
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
				{@const Icon = item.icon}
				<div class="space-y-1">
					<p class="text-xs tracking-wider text-text-muted uppercase">
						<Icon class="mr-1 inline-block h-4 w-4 align-middle text-brand" aria-hidden="true" />
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
						inline-flex h-8 min-w-22 items-center justify-center gap-1 rounded border
						border-border bg-bg-surface px-3 py-1.5 text-xs font-medium text-text-body
						transition-colors duration-200 hover:-translate-y-0.5 hover:bg-bg-sunken
						focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
					"
					aria-label={social.label()}
				>
					<SocialIcon icon={social.icon} classList="h-4 w-auto" />
					{social.label()}
				</a>
			{/each}
		</div>
	</div>

	<!-- Google Map -->
	<div class="mb-6 h-64 w-full overflow-hidden rounded-lg bg-border">
		<iframe
			title="Map"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.510053963399!2d120.96259377610822!3d24.81222504718463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835c783360679%3A0x5ac4b4655a6c4e53!2z5ben5paw5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2stw!4v1775226280234!5m2!1sen!2stw"
			width="100%"
			height="100%"
			allowfullscreen={true}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
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
					{@const Icon = item.icon}
					<div class="space-y-1">
						<p class="text-xs tracking-wider text-text-muted uppercase">
							<Icon class="mr-1 inline-block h-4 w-4 align-middle text-brand" aria-hidden="true" />
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
						inline-flex h-8 min-w-22 items-center justify-center gap-1 rounded border
						border-border bg-bg-sunken px-3 py-1.5 text-xs font-medium text-text-body
						transition-colors duration-200 hover:-translate-y-0.5 hover:bg-bg-accent
						focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
					"
					aria-label={social.label()}
				>
					<SocialIcon icon={social.icon} classList="h-4 w-auto" />
					{social.label()}
				</a>
			{/each}
		</div>
	</div>

	<!-- Google Map -->
	<div class="mb-6 h-54 w-full overflow-hidden rounded-lg bg-border">
		<iframe
			title="Map"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.510053963399!2d120.96259377610822!3d24.81222504718463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835c783360679%3A0x5ac4b4655a6c4e53!2z5ben5paw5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2stw!4v1775226280234!5m2!1sen!2stw"
			width="100%"
			height="100%"
			allowfullscreen={true}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</div>
