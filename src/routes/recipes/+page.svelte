<script>
    export let data;
</script>

<section class="bg-white">
    <div class="max-w-5xl px-5 py-10 mx-auto">
        <div class="text-center">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">All Recipes</h1>
            <p class="max-w-lg mx-auto mt-4 text-gray-500">
                Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
                pie.
            </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {#each data.posts as post}
                <a href="/{post.title.toLowerCase().replace(/\s+/g, "-")}-{post.id}" class="">
                    <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="http://127.0.0.1:8090/api/files/{post.collectionId}/{post.id}/{post.featured_image}" alt="m">
                    <div class="py-2 hover:none">
                        <span class="uppercase text-sm font-semibold text-gray-700">{post.expand.category.category}</span>
                        <h2 class="text-xl text-yellow-500 hover:underline">{post.title}</h2>
                    </div>
                </a>
            {/each}

        </div>
    </div>
</section>