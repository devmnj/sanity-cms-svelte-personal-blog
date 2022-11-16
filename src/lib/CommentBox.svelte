<script>
 import client from '$lib/sanity';
	/**
	 * @type {string}
	 */
	let name;
	/**
	 * @type {string}
	 */
	let email;
	/**
	 * @type {string}
	 */
	let comment;
	/**
	 * @type {any}
	 */
	 export let post;

	const onSubmit = async (e) => {
		try {
			e.preventDefault();
			
			if (name && comment) {
        const doc ={
          _type: 'comment',
					post: {
						_type: 'reference',
						_ref: post,
					},
					approved:true,
					name:name,
					email:email,
					comment:comment,
        }
			 	client.create(doc).then((res)=>{
          console.log(`Bike was created, document ID is ${res._id}`)
        alert(`Comment Posted`);
				name = email = comment = '';
      });
				
			}
      else{
        alert("Provide human readable comment, lol")
      }
		} 
    catch (err) {
			console.error(err);
			// return res.status(500).json({ message: `Couldn't submit comment`, err });
		}
	};
</script>

<div class="">
	<div class="mx-auto max-w-screen-sm px-4">
		<h1 class="mt-6 text-xl font-bold sm:mb-6 sm:text-3xl">Write your comment</h1>

		<form on:submit|preventDefault={onSubmit} class="-ml-20 flex p-4 text-left text-gray-700">
			<img
				class="mr-5 h-12 w-12 rounded-full"
				src={`https://ui-avatars.com/api/?name=Dev+${name}`}
				alt=""
			/>

			<div class="w-full space-y-3 text-gray-700">
				<div class="">
					<input
						type="text"
						bind:value={name}
						placeholder="name"
						class="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring"
					/>
				</div>
				<div class="">
					<input
						type="text"
						bind:value={email}
						placeholder="Email"
						class="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring"
					/>
				</div>
				<div class="">
					<textarea
						name="comment"
						bind:value={comment}
						id=""
						placeholder="Write your comment here"
						cols="30"
						rows="6"
						class="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"
					/>
				</div>
				<div class="float-right">
					<input
						type="submit"
						value="Post Comment"
						class="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-blue-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring"
					/>
				</div>
			</div>
		</form>
	</div>
</div>
