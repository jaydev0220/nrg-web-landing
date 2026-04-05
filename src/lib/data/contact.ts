import { Mail, MapPin, Phone, Printer } from '@lucide/svelte';
import * as m from '$lib/paraglide/messages';
import { CDN_ASSETS, cdnUrl } from '$lib/utils/cdn';

export const contactItems = [
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
] as const;

export const qrCodes = [
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
] as const;
