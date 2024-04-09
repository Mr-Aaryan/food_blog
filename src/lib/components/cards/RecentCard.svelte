<script>
    let items = [1,2,3];
</script>

<section >
    <div class="grid grid-cols-1 gap-8 mt-8 md:mt-12">
        {#each items as x}
        <a href="/rec">
            <div class="flex flex-col md:flex-row bg-neutral-800 my-3 rounded overflow-hidden">
                <div class="w-full md:w-96">
                    <img class="md:basis-1/4 object-cover w-full h-full" src="https://img.freepik.com/free-photo/grilled-burger-with-fries-classic-american-fast-food-meal-generated-by-artificial-intelligence_188544-129384.jpg?w=996" alt="burger img" > 
                </div>
                <div class="basis-3/4 px-5 py-3 text-white">
                    <h2 class="text-yellow-500 py-2 font-bold">Guide To Make Chicken Tikki</h2>
                    <span class="mt-3">April 3, 2024</span>
                </div>
            </div>
        </a>
        {/each}
    </div>
</section>  