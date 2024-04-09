<script>
    import RecentCard from "$lib/components/cards/RecentCard.svelte"
    import CategoryCard from "$lib/components/cards/CategoryCard.svelte"
    import PopularCard from "$lib/components/cards/PopularCard.svelte";
</script>

<main class="max-w-5xl px-5 mx-auto my-10 light">

    <section class="border-b border-gray-400 pb-12">
        <div class="flex justify-around lg:justify-between flex-row flex-wrap overflow-hidden w-full">
            <div class="basis-3 my-5">
                <CategoryCard />
            </div>
            <div class="basis-3 my-5">
                <CategoryCard />
            </div>
            <div class="basis-3 my-5">
                <CategoryCard />
            </div>
            <div class="basis-3 my-5">
                <CategoryCard />
            </div>
            <div class="basis-3 my-5">
                <CategoryCard />
            </div>
            <div class="basis-3 my-5">
                <CategoryCard />
            </div>
    
        </div>
    </section>
    
    <section class="py-4 pb-8 border-b border-slate-400">
        <h2 class="text-3xl pb-1 my-3 text-center">Our Popular</h2>
        <div class="flex justify-around lg:justify-between ">
            <div>
                <PopularCard />
            </div>
            <div>
                <PopularCard />
            </div>
            <div>
                <PopularCard />
            </div>
        </div>
    </section>
    
    <section class="py-2">
        <h2 class="text-3xl pb-1 mt-3  text-center">Recents</h2>
        <div>
            <RecentCard />
        </div>
        <div>
            <RecentCard />
        </div>
        <div>
            <RecentCard />
        </div>
    </section>

    
</main>
