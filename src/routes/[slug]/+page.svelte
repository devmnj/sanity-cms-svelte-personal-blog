<script>
	import { onMount } from 'svelte';
	import { PortableText } from '@portabletext/svelte';
	import Heading from '$lib/blocks/Heading.svelte';
	import Paragraph from '$lib/blocks/Paragraph.svelte';
	import SImage from '$lib/SImage.svelte';
	import Code from '$lib/blocks/Code.svelte';
	import { urlFor } from '$lib/ImageBuilder';
	import RpCard from '$lib/RPCard.svelte';
	import CommentBox from '$lib/CommentBox.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let rtime = 0;
	onMount(() => {
		const el = document.getElementById('article').innerText;
		rtime = GetReadingTime(String(el));
	});

	//reading time
	function GetReadingTime(text) {
		const wpm = 255;
		const words = String(text).trim().split(/\s+/).length;
		//  console.log(words);
		const time = Math.ceil(words / wpm);
		return time;
	}
</script>

<svelte:head>
	<title>{data?.post[0]?.title}</title>
	<meta name="description" content={data?.post?.summary} />
	<meta name="yandex-verification" content="fcfe7437dbe09115" />
</svelte:head>

<div>
	<!-- <span class="text-white"> {JSON.stringify(data)}</span>  -->
	<div class="   dark:bg-gray-800 max-w-6xl px-6 py-16 mx-auto space-y-12">
		<article class="  flex-col space-y-8 dark:bg-gray-800 dark:text-gray-50">
			<div class="space-y-6">
				<h1 class="text-4xl font-bold md:tracking-tight md:text-5xl">
					{data.post[0].title}
				</h1>
				<div />
				<div
					class="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400"
				>
					<div class="flex items-center md:space-x-2">
						<img
							src="https://avatars.githubusercontent.com/u/28762625?v=4/?face&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
							class="f w-12 h-12 border rounded-md dark:bg-gray-500 dark:border-gray-700"
						/>

						<p class="  flex justify-items-stretch">
							<span class="text-lg"> Manoj AP </span>
							<!-- <span class="text-lg"> {new Date (data?.post[0]?._createdAt).toDateString()}</span> -->
						</p>
					</div>
					<p class="flex-shrink-0 mt-3 text-sm md:mt-0" />
				</div>
			</div>
			<div class="place-content-center flex">
				<img class="rounded   w-250 h-150" src={`${urlFor(data.post[0].featured_image)}`} alt=" " />
			</div>
			<div class="dark:text-gray-100" id="article">
				<!-- svelte-ignore missing-declaration -->
				<PortableText
					value={data.post[0].content}
					onMissingComponent={(message, options) => {
						console.log(message, options);
					}}
					components={{
						types: {
							code: Code
						},

						block: {
							h1: Heading,
							h2: Heading,
							normal: Paragraph
						}
					}}
				/>
			</div>
		</article>
		<div>
			<div class="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400" />

			{#if data.post[0].recommended}
				<div class="space-y-2 mt-3 text-white">
					<h4 class="text-lg  font-semibold">Recommended Posts</h4>
					<!-- {JSON.stringify(data.post[0].recommended)} -->
					{#each data.post[0].recommended as post}
						<RpCard
							tags={post?.tags}
							cover={`${urlFor(post?.featured_image)}`}
							summary={post?.summary}
							title={post?.title}
							slug={post?.slug}
							date={post?._createdAt}
						/>
					{/each}
				</div>
			{/if}
			<div class="space-y-2 text-white">
				<CommentBox post={data?.post[0]._id} />

				{#if data.post[0]?.comments}
					<div class="antialiased mx-auto max-w-screen-sm">
						<h3 class="mb-4 text-lg font-semibold text-white">Comments</h3>
						{#each data.post[0]?.comments as comment}
							<!-- {JSON.stringify(comment)} -->
							<div class="space-y-4">
								<div class="flex">
									<div class="flex-shrink-0 mr-3">
										<img
											class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
											src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
											alt=""
										/>
									</div>
									<div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
										<strong>{comment?.name}</strong>
										<span class="text-xs text-gray-400"
											>{new Date(comment?._createdAt).toTimeString()}</span
										>
										<p class="text-sm">
											{comment?.comment}
										</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
