<script>
	import Footer from 'components/Footer.svelte';
	import Nav from 'components/Nav.svelte';
	import '../app.postcss';
	import Analytics from  '$lib/Analytics.svelte'
</script>

<svelte:head>
	<title>A blog on Web technologies</title>
	<meta
		name="keywords"
		content="css,javascript,typesvript,html,tailwinccss,react,svelte,vue,golang,next,nuxt,c#,xml,.net"
	/>
	<meta name="refresh" content="60" />

	<meta name="yandex-verification" content="88928c1e8d3115e9" />
	
</svelte:head>
<Analytics/>
<div class="bg-base-100">
	<!-- <Banner/> -->
	 <Nav/>
	<div class="bg-base-200 text-white items-center overflow-auto">
		<main><slot /></main>
	</div>
 <Footer/>
</div>
