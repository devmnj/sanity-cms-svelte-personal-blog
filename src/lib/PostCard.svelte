<div class="lg:flex">
    <img
        class="object-fit w-full h-56 rounded-lg lg:w-64"
        src= {cover}
        alt=""
    />

    <div class="flex flex-col justify-between py-6 lg:mx-6">
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
    export let cover;
    export let slug='/';
    export let title;
    export let summary;
    export let date='1/2/2022'
</script>