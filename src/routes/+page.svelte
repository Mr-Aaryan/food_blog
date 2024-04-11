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
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">
            <PopularCard src="https://static.toiimg.com/photo/53251884.cms"/> 
            <PopularCard src="https://www.readyseteat.com/sites/g/files/qyyrlu501/files/images/article/hero/BARISTA-STYLE-COFFEE-HERO.jpg"/>
            <PopularCard src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLr2H9KXFOygP_n5GS99Eq6ArjZQoSoCRfBV1AKoVwQlH4gFIyRK4iNyp87uF4zkejoWpUjRtu_RyKSyAxjiwZCoDYUA_9xTRgYvJtZm3XvQ28XgQyOup_Ncfh3P2KOLo607Y7Qfr1h6FE/s1600/Chilli+Chiken.jpg"/>
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
