<div class="lg:flex">
    <img
        class="object-cover min-w-2/6 max-w-2/3 w-3/12  rounded-lg "
        src= {cover}
        alt=""
    />

    <div class="flex flex-col justify-between py-6 lg:mx-6 ">
        <a
            href={`/${slug}`}
            class="text-xl font-semibold text-base-content  hover:underline "
        >
    {title}
    </a>
<p>{summary}</p>
        <span class="text-sm text-base-content">Published On  <strong>{date}</strong> </span>
    </div>
</div>

<script>
    /**
	 * @type {any}
	 */
     export let cover;
    export let slug='/';
    /**
	 * @type {any}
	 */
     export let title;
    /**
	 * @type {any}
	 */
     export let summary;
    export let date='1/2/2022'
</script>