<script>
	import { sveltekit } from '@sveltejs/kit/vite';
	import SocialIcons from './SocialIcons.svelte';

	var date = new Date();
	let year = date.getFullYear();
</script>

<footer class="bg-base-300 ">
	<div class="container p-6 mx-auto">
		<div class="lg:flex">
			<div class="w-full -mx-6 lg:w-2/5">
				<div class="px-6">
					<div>
						<a
							href="/"
							class="text-xl font-bold  text-base-content  hover:text-gray-700 dark:hover:text-gray-300"
							>DevTalk</a
						>
					</div>

					<p class="max-w-sm mt-2 ">
						This is a developer community blog
					</p>
					<div class="mt-2"><SocialIcons /></div>
			 
				</div>
			</div>

			<div class="mt-6 lg:mt-0 lg:flex-1">
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					<div>
						<div class="text-primary-focus uppercase ">About</div>
						<a href="https://github.com/devmnj" class="block mt-2 text-sm  hover:underline"
							>Github Profile</a
						>
						 
					</div>

					<div>
						<div class="text-primary-focus uppercase">Contributions</div>
						<a href="https://javascriptsu.wordpress.com" class="block mt-2 text-sm   hover:underline"
							>WordPress Blog</a
						>
						<a href="https://javascriptsu.wordpress.com/portfolio/nuxt-prismic-headless-cms-blog/" class="block mt-2 text-sm  hover:underline"
							>Prismic Blog (Nuxt)</a
						>
						<a href="https://javascriptsu.wordpress.com/portfolio/covid-dashboard/" class="block mt-2 text-sm  hover:underline"
							>Covid Dashboard (Py)</a
						>
					</div>

					<div>
						<div class="text-primary-focus uppercase ">Projects</div>
						<a href="https://github.com/devmnj/remix-mdx-blog-app" class="block mt-2 text-sm  hover:underline"
							>Remix MD Blog</a
						>
						<a href="https://github.com/devmnj/sveltekit-prismic-headless-cms-blog" class="block mt-2 text-sm  hover:underline"
							>Sveltekit Primic Blog</a
						>
						<a href="https://github.com/devmnj/react-css-loaders" class="block mt-2 text-sm  hover:underline"
							>React loaders</a
						>
					</div>

					<div>
						<div class="text-primary-focus uppercase">Contact</div>
						<span class="block mt-2 text-sm  hover:underline"
							>+1 526 654 8965</span
						>
						<span class="block mt-2 text-sm   hover:underline"
							>codehat@outlook.com</span
						>
					</div>
				</div>
			</div>
		</div>

		<hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

		<div>
			<p class="text-center ">© DevTalk {year} - All rights reserved</p>
		</div>
	</div>
</footer>
