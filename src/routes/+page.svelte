<script>
    import RecentCard from "$lib/components/cards/RecentCard.svelte"
    import CategoryCard from "$lib/components/cards/CategoryCard.svelte"
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
    
    <section class="py-4">
        <h2 class="text-3xl pb-1 my-3 border-black text-center">Our Popular</h2>
        <div>
            <RecentCard />
        </div>
    </section>

    
</main>
