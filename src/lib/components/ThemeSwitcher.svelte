<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';
	import { onMount } from 'svelte';

	type Theme = 'light' | 'dark';

	let theme = $state<Theme>('light');

	onMount(() => {
		applyTheme(theme);
	});

	function applyTheme(value: Theme) {
		const root = document.documentElement;

		if (value === 'dark') {
			root.classList.add('dark');
			root.classList.remove('light');
		} else {
			root.classList.add('light');
			root.classList.remove('dark');
		}
	}

	function toggleTheme() {
		const next: Theme = theme === 'light' ? 'dark' : 'light';
		theme = next;
		applyTheme(next);
	}
</script>

<button
	class="
		flex h-8 w-8 items-center justify-center rounded border border-border bg-bg-sunken
		text-text-body transition-[color,background-color,border-color,transform]
		duration-200 hover:-translate-y-0.5 hover:border-border-accent hover:bg-bg-accent
		focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none
	"
	onclick={toggleTheme}
	aria-label="Toggle theme"
	title={theme === 'light' ? 'Light theme' : 'Dark theme'}
>
	{#if theme === 'dark'}
		<Moon class="h-4 w-4" aria-hidden="true" />
	{:else}
		<Sun class="h-4 w-4" aria-hidden="true" />
	{/if}
</button>
