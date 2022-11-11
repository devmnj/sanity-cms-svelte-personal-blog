<script>
	import { Badge } from 'flowbite-svelte';
	import client from '$lib/sanity';
	import { onMount } from 'svelte';
	import { PortableText } from '@portabletext/svelte';
	import Heading from '$lib/blocks/Heading.svelte';
	import Paragraph from '$lib/blocks/Paragraph.svelte';
	import SImage from '$lib/SImage.svelte';
	import Code from '$lib/blocks/Code.svelte';
	import { urlFor } from '$lib/ImageBuilder';
	import RpCard from '$lib/RPCard.svelte';
	import CommentBox from '$lib/CommentBox.svelte';
	import { onDestroy } from 'svelte';
	import AniLink from 'components/AniLink.svelte';
	import Image from '$lib/blocks/Image.svelte';

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

	onDestroy(() => {
		if (data?.post[0]?._id && data?.post[0]?.view) {
			client
				.patch(data?.post[0]?._id)
				.inc({ view: 1 })
				.commit()
				.then((updatedPost) => {
					console.log('Hurray, the Post is updated! New document:');
					// console.log(updatedPost);
				});
		}
	});
	let colors = ['green', 'yellow', 'indigo', 'purple', 'pink'];
</script>

<svelte:head>
	<title>{data?.post[0]?.title}</title>
	<meta name="description" content={data?.post?.summary} />
	<meta name="yandex-verification" content="fcfe7437dbe09115" />
</svelte:head>

<div>
	<!-- <span class="text-white"> {JSON.stringify(data)}</span>  -->
	<div class=" max-w-7xl text-base-content py-16 mx-auto space-y-8">
		<!-- <article class="  flex-col   dark:bg-gray-800 dark:text-gray-50"></article> -->
		<article class="flex ">
			<!-- <div class="py-2/3 w-2/3">
				<div>	Link 1</div>
				<div>	Link 2</div>
				</div> -->
			<div>
				<div class="">
					<h1 class="text-4xl text-neutral-content font-bold md:tracking-tight pb-3 md:text-5xl">
						{data?.post[0]?.title}
					</h1>
					<div />
					<div
						class="flex flex-col items-start text-base-content justify-between w-full md:flex-row md:items-center "
					>
						<div class="flex my-2 items-center md:space-x-2">
							<img
								src="https://avatars.githubusercontent.com/u/28762625?v=4/?face&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
								class="f w-12 h-12  border rounded-md "
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
					<img
						class="rounded w-9/12 h-1/4"
						src={`${urlFor(data?.post[0]?.featured_image)}`}
						alt=" "
					/>
				</div>
				
				<div class="" id="article">
					<!-- svelte-ignore missing-declaration -->
					<PortableText
						value={data.post[0].content}
						onMissingComponent={(message, options) => {
							console.log(message, options);
						}}
						components={{
							types: {
								code: Code,
								image:Image
							},

							block: {
								h1: Heading,
								h2: Heading,
								normal: Paragraph,								 
							}
						}}
					/>
				</div>
			</div>
			<!-- <div>asdas</div> -->
			
		</article>
		<!-- Tags -->
		<div class="flex mr-2 ">
			{#if data?.post[0]?.tags}
				{#each data?.post[0]?.tags as tag}
					<Badge class="mx-1 uppercase " color={colors[Math.floor(Math.random() * 4)]}>{tag}</Badge>
				{/each}
			{/if}
		</div>
		<div class="text-base-content">
			<div class="flex text-base-content flex-wrap py-6 space-x-2 border-t border-dashed  " />

			{#if data.post[0].recommended}
				<div class="space-y-2 mt-3 ">
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
 
			<!-- References -->
			<div>
				{#if data?.post[0]?.references}
					<li>
						{#each data?.post[0]?.references as reference}
							<ul><AniLink caption={reference} link={reference} /></ul>
						{/each}
					</li>
				{/if}
			</div>

			
			<div class="space-y-2">
				<CommentBox post={data?.post[0]._id} />

				{#if data.post[0]?.comments.length > 0}
					<div class="antialiased mx-auto max-w-screen-sm">
						<h3 class="mb-4 text-lg font-semibold ">Comments</h3>
						{#each data.post[0]?.comments as comment}
							<!-- {JSON.stringify(comment)} -->
							<div class="space-y-4 mb-2">
								<div class="flex">
									<div class="flex-shrink-0 mr-3">
										<img
											class="hover:ring ring-accent mt-2 rounded-full w-10 h-10 sm:w-10 sm:h-10"
											src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=276&h=280&q=90"
											alt=""
										/>
									</div>
									<div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
										<strong>{comment?.name}</strong>
										<span class="text-xs  text-base-content"
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
