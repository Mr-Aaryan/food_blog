<script>
    import CategoryCard from "$lib/components/cards/CategoryCard.svelte"
    export let data;
</script>

<section class="max-w-5xl mx-auto px-5 mt-8">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {#each data.posts as post}
            <a href="/{post.title.toLowerCase().replace(/\s+/g, "-")}-{post.id}" class="">
                <img class="bg-neutral-200 object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="http://127.0.0.1:8090/api/files/{post.collectionId}/{post.id}/{post.featured_image}" alt="{post.title}">
                <div class="py-2 hover:none">
                    <span class="uppercase text-sm font-semibold text-gray-700"></span>
                    <h2 class="text-xl text-yellow-500 hover:underline">{post.title}</h2>
                </div>
            </a>
        {/each}
    </div>
</section>

<section class="max-w-5xl mx-auto px-5 mt-12">
    <h2 class="text-center py-5">Categories</h2>
    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
        {#each data.categories as cat}
            <CategoryCard category_slug={cat.slug} itemName={cat.category} src="http://127.0.0.1:8090/api/files/{cat.collectionId}/{cat.id}/{cat.featured_image}"/>
        {/each}
    </div>
</section>
