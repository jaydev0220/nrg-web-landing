import * as m from '$lib/paraglide/messages';
import { CDN_ASSETS } from '$lib/utils/cdn';

export const productCategories = [
	{
		id: 'beakers',
		name: () => m.category_beakers_flasks(),
		gridArea: 'beakers',
		image: CDN_ASSETS.productBeakers
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
		id: 'condensers',
		name: () => m.category_condensers(),
		gridArea: 'condensers',
		image: CDN_ASSETS.productCondensers
	},
	{
		id: 'hydrometers',
		name: () => m.category_hydrometers(),
		gridArea: 'hydrometers',
		image: CDN_ASSETS.productHydrometers
	}
] as const;
