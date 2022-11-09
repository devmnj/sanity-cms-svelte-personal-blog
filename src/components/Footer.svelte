<script>
	import SocialIcons from './SocialIcons.svelte';
</script>

<footer class="bg-white dark:bg-gray-900">
	<div class="container p-6 mx-auto">
		<div class="lg:flex">
			<div class="w-full -mx-6 lg:w-2/5">
				<div class="px-6">
					<div>
						<a
							href="/"
							class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
							>DevTalk</a
						>
					</div>

					<p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
						This is a developer community blog
					</p>
					<div class="mt-2"><SocialIcons /></div>
			 
				</div>
			</div>

			<div class="mt-6 lg:mt-0 lg:flex-1">
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					<div>
						<h3 class="text-gray-700 uppercase dark:text-white">About</h3>
						<a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>Company</a
						>
						<a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>community</a
						>
						<a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>Careers</a
						>
					</div>

					<div>
						<h3 class="text-gray-700 uppercase dark:text-white">Contributions</h3>
						<a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>Tec</a
						>
						<a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>Music</a
						>
						<a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>Videos</a
						>
					</div>

					<div>
						<h3 class="text-gray-700 uppercase dark:text-white">Projects</h3>
						<a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>Mega cloud</a
						>
						<a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>Aperion UI</a
						>
						<a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>Meraki UI</a
						>
					</div>

					<div>
						<h3 class="text-gray-700 uppercase dark:text-white">Contact</h3>
						<span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>+1 526 654 8965</span
						>
						<span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
							>example@email.com</span
						>
					</div>
				</div>
			</div>
		</div>

		<hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

		<div>
			<p class="text-center text-gray-500 dark:text-gray-400">© DevTalk 2022 - All rights reserved</p>
		</div>
	</div>
</footer>
