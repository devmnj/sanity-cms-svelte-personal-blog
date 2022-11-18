<script>
	import SocialIcons from './SocialIcons.svelte';
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
						<a href="/" class="block mt-2 text-sm  hover:underline"
							>Company</a
						>
						<a href="/" class="block mt-2 text-sm  hover:underline"
							>community</a
						>
						<a href="/" class="block mt-2 text-sm   hover:underline"
							>Careers</a
						>
					</div>

					<div>
						<div class="text-primary-focus ">Contributions</div>
						<a href="/" class="block mt-2 text-sm   hover:underline"
							>Tec</a
						>
						<a href="/" class="block mt-2 text-sm  hover:underline"
							>Music</a
						>
						<a href="/" class="block mt-2 text-sm  hover:underline"
							>Videos</a
						>
					</div>

					<div>
						<div class="text-primary-focus uppercase ">Projects</div>
						<a href="/" class="block mt-2 text-sm  hover:underline"
							>Mega cloud</a
						>
						<a href="/" class="block mt-2 text-sm  hover:underline"
							>Aperion UI</a
						>
						<a href="/" class="block mt-2 text-sm  hover:underline"
							>Meraki UI</a
						>
					</div>

					<div>
						<div class="text-primary-focus">Contact</div>
						<span class="block mt-2 text-sm  hover:underline"
							>+1 526 654 8965</span
						>
						<span class="block mt-2 text-sm   hover:underline"
							>blissfullscode@email.com</span
						>
					</div>
				</div>
			</div>
		</div>

		<hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

		<div>
			<p class="text-center ">© DevTalk 2022 - All rights reserved</p>
		</div>
	</div>
</footer>
