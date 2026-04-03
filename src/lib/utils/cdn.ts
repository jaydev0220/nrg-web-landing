export const CDN_BASE_URL = 'https://cdn.example.com';

export const CDN_ASSETS = {
	// Branding
	logo: '/landing/logo.webp',
	logoLight: '/landing/logo-light.webp',

	// About page
	companyStoryPhoto: '/landing/company-story-photo.webp',

	// Contact page
	contactFacebookQr: '/landing/contact-facebook-qr.webp',
	contactLineQr: '/landing/contact-line-qr.webp',

	// Product categories
	productBeakers: '/landing/product-beakers.webp',
	productPipettes: '/landing/product-pipettes.webp',
	productTubes: '/landing/product-tubes.webp',
	productFunnels: '/landing/product-funnels.webp',
	productCustom: '/landing/product-custom.webp'
} as const;

export function cdnUrl(path: string): string {
	return new URL(path, CDN_BASE_URL).toString();
}
