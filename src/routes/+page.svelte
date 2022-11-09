<script>
	import ParticlesAnimation from '$lib/ParticlesAnimation.svelte';
	/** @type {import('./$types').PageData} */

	import MainContainer from 'components/MainContainer.svelte';
	import PostCard from '$lib/PostCard.svelte';
    import {urlFor} from '$lib/ImageBuilder' 
	export let data;
</script>

<svelte:head>
	<title>A blog on Web technologies</title>
	<meta name="description" content="A blog on WebFrameworks" />
	<meta name="yandex-verification" content="fcfe7437dbe09115" />
</svelte:head>

<MainContainer>
	<ParticlesAnimation/>
	<!-- Post Grid   -->
	<div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
		 
		<section class="bg-white dark:bg-gray-900">
			<div class="container px-6 py-10 mx-auto">
				<h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
					From the blog
				</h1>

				<div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
					<!-- List of [posts] -->
					<!-- <span class="text-red-700">	{JSON.stringify(data.posts)}</span> -->
					{#if data?.posts}
						{#each data?.posts as post}
							<!-- <span class="text-red-700"> {JSON.stringify(post)}</span> -->
							<PostCard title={post?.title} slug={post?.slug?.current} cover={urlFor(post?.featured_image)} date={post?._createdAt} />
						{/each}
					{/if}

				</div>
			</div>
		</section>
		 
	</div>
</MainContainer>
