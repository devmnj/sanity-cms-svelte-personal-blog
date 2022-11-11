<script>
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import tokyoNightDark from 'svelte-highlight/styles/tokyo-night-dark';
	import { onMount } from 'svelte'; 

	export let portableText;

	$: ({ value } = portableText);

	onMount(() => {
		// console.log('Code:portableText');
	});
</script>

<svelte:head>
	{@html tokyoNightDark}
</svelte:head>
<Highlight language={typescript} code={value.code} />
<!-- <HighlightAuto code={value.code} /> -->

