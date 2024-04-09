<script>
    let items = [1,2,3];
</script>

<section >
    {#each items as x}
    <div class="flex bg-[#383838] my-3 rounded overflow-hidden">
        <div class="px-5 text-white">
            <p class="py-1">April 3, 2024</p>
            <h2 class="text-yellow-500 py-2 font-bold">From My Kitchen to Yours: Culinary Adventures and Timeless Recipes</h2>
            <p class="py-1">Explore the world of culinary delights with me as I share cherished  family recipes, innovative cooking techniques, and practical kitchen  tips. From classic comfort foods to ....</p>
            <h3 class="py-2 text-yellow-500 w-fit mx-auto px-2 font-bold">CONTINUE READING</h3>
        </div>
        <div class="max-w-sm">
            <img src="https://img.freepik.com/free-photo/grilled-burger-with-fries-classic-american-fast-food-meal-generated-by-artificial-intelligence_188544-129384.jpg?w=996" alt="burger img" class="h-auto max-w-xs"> 
        </div>
    </div>
    {/each}
</section>