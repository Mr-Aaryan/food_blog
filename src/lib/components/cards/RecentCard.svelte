<script>
    export let src = "https://img.freepik.com/free-photo/grilled-burger-with-fries-classic-american-fast-food-meal-generated-by-artificial-intelligence_188544-129384.jpg?w=996";
    export let title = '';
    export let desc = '';
    export let post_id = '';

    let slug = title.toLowerCase().replace(/\s+/g, "-");
</script>

<section>
    <div class="grid grid-cols-1 gap-8 mt-8 md:mt-3">
        <a href="/{slug}-{post_id}">
            <div class="flex flex-col md:flex-row bg-neutral-800 my-3 rounded overflow-hidden">
                <div class="w-full md:w-96">
                    <img class="md:basis-1/4 object-cover w-full h-[230px]" src={src} alt="burger img" > 
                </div>
                <div class="basis-3/4 px-5 py-3 text-white">
                    <h2 class="text-yellow-500 py-2 font-bold hover:underline">{title}</h2>
                    <div>{@html desc}...</div>
                </div>
            </div>
        </a>
    </div>
</section>  