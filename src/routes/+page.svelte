<script>
	/** @type {import('./$types').PageData} */

	import MainContainer from 'components/MainContainer.svelte';
	import PostCard from '$lib/PostCard.svelte';
	import { urlFor } from '$lib/ImageBuilder';
	import { postsStore } from '$lib/store';
	import { get } from 'svelte/store';
	import { Skeleton } from 'flowbite-svelte';

	/**
	 * @type {any[]}
	 */
	let posts = [];
	$: {
		posts = get(postsStore);
	}
</script>

<svelte:head>
	<title>A blog on Web technologies</title>
	<meta name="description" content="A blog on WebFrameworks" />
	<meta name="yandex-verification" content="fcfe7437dbe09115" />
</svelte:head>

<!-- <MainContainer> -->
	<!-- Post Grid   -->

	<!-- <div class="grid justify-center grid-cols-1 gap-6 my-5 md:grid-col-3 sm:grid-cols-2 lg:grid-cols-1"> -->
		<!-- <div>{JSON.stringify(posts)}</div>  -->

		<section class="bg-base-200   rounded-lg mb-5 my-3">
			<div class="container space mx-auto">
				<h1 class="text-3xl font-semibold  capitalize lg:text-4xl ">From the blog</h1>

				<div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 sm:grid-col-2 md:grid-cols-2 lg:grid-col-3">
					{#if posts}
						{#each posts as post}
							<PostCard
								title={post?.title}
								slug={post?.slug?.current}
								summary={post?.summary}
								cover={urlFor(post?.featured_image)}
								date={new Date(post?._createdAt).toDateString()}
							/>
						{/each}
					{:else}
						<Skeleton />
					{/if}
				</div>
			</div>
		</section>
	<!-- </div> -->
<!-- </MainContainer> -->
