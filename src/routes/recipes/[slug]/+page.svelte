<script>
    import Arrow from '$lib/icons/arrow.svelte';
    export let data;
</script>

<section class="bg-white">
    <div class="max-w-5xl px-5 py-10 mx-auto">
        <div class="text-center">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">{data.categoryInfo.category}</h1>
            <p class="max-w-lg mx-auto mt-4 text-gray-500">
                {data.categoryInfo.description}
            </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {#each data.posts as post}
                <a href="/{post.title.toLowerCase().replace(/\s+/g, "-")}-{post.id}" class="">
                    <img class="bg-neutral-200 object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="http://127.0.0.1:8090/api/files/{post.collectionId}/{post.id}/{post.featured_image}" alt="{post.title}">
                    <div class="py-2 hover:none">
                        <div class="">
                            <h2 class="text-xl text-yellow-500 hover:underline">{post.title}</h2>
                        </div>
                    </div>
                </a>
            {/each}
        </div>

        {#each data.sub_posts as sub_post}
        <div class="mt-10">
            <a href="/recipes/{sub_post.slug}"><h2 class="text-xl font-semibold text-gray-800 capitalize lg:text-2xl hover:text-yellow-500">{sub_post.category} <Arrow/></h2></a>
            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                {#each sub_post.new_posts.items as post}
                    <a href="/{post.title.toLowerCase().replace(/\s+/g, "-")}-{post.id}" class="">
                        <img class="bg-neutral-200 object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="http://127.0.0.1:8090/api/files/{post.collectionId}/{post.id}/{post.featured_image}" alt="{post.title}">
                        <div class="py-2 hover:none">
                            <div class="">
                                <h2 class="text-xl text-yellow-500 hover:underline">{post.title}</h2>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        {/each}
    </div>
</section>