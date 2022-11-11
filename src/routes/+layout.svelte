<script>
	import Footer from 'components/Footer.svelte';
	import Nav from 'components/Nav.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>A blog on Web technologies</title>
	<meta
		name="keywords"
		content="css,javascript,typesvript,html,tailwinccss,react,svelte,vue,golang,next,nuxt"
	/>
	<meta name="refresh" content="60" />
	<meta name="yandex-verification" content="fcfe7437dbe09115" />
</svelte:head>

<div class="bg-base-100">
	<!-- <Banner/> -->
	 <Nav/>
	<div class="bg-base-100 text-white items-center overflow-auto">
		<main><slot /></main>
	</div>
 <Footer/>
</div>
