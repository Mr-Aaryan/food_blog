<script>
    import CateforyCard from "./cards/CategoryCard.svelte" 
</script>

<main class="border-b border-gray-400 pb-12">
    <h2 class="text-3xl pb-1 mt-4 border-b border-black w-fit">Categories</h2>
    <div class="flex justify-around lg:justify-between flex-row flex-wrap overflow-hidden w-full">
        <div class="basis-3 my-5">
            <CateforyCard />
        </div>
        <div class="basis-3 my-5">
            <CateforyCard />
        </div>
        <div class="basis-3 my-5">
            <CateforyCard />
        </div>
        <div class="basis-3 my-5">
            <CateforyCard />
        </div>
        <div class="basis-3 my-5">
            <CateforyCard />
        </div>
        <div class="basis-3 my-5">
            <CateforyCard />
        </div>

    </div>
</main>