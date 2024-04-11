<script>
    import RecentCard from "$lib/components/cards/RecentCard.svelte"
    import CategoryCard from "$lib/components/cards/CategoryCard.svelte"
    import PopularCard from "$lib/components/cards/PopularCard.svelte";

    export let data;
</script>

<main class="max-w-5xl px-5 mx-auto my-10 light">

    <section class="border-b border-gray-400 pb-12">
        <div class="flex justify-around lg:justify-between flex-row flex-wrap overflow-hidden w-full">
            {#each data.categories as cat}
                <div class="basis-3 my-5">
                    <CategoryCard category_id={cat.id} itemName={cat.category} src="https://i.ndtvimg.com/i/2016-09/tofu-625_625x350_61474273627.jpg"/>
                </div>
            {/each}
        </div>
    </section>
    
    <section class="py-4 pb-8 border-b border-slate-400">
        <h2 class="text-3xl pb-1 my-3 text-center">Our Popular</h2>
        <div class="grid grid-cols-1 gap-1 lg:gap-8 mt-8 md:gap-3 md:grid-cols-3 xl:grid-cols-3">
            {#each data.posts as post}
                <PopularCard src="http://127.0.0.1:8090/api/files/{post.collectionId}/{post.id}/{post.featured_image}" href="/{post.title.toLowerCase().replace(/\s+/g, "-")}-{post.id}"/>
            {/each} 
        </div>
    </section>
    
    <section class="py-2">
        <h2 class="text-3xl pb-1 mt-3 text-center">Recents</h2>
        {#each data.posts as post}
        <div>
            <RecentCard
                post_id = {post.id}
                title={post.title}
                desc={post.content}
                src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
        </div>
        {/each}
    </section>

    
</main>
