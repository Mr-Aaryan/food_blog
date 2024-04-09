<script>
    import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';
    let ratingCount = 4.5;

    export let src;
</script>

<div class="mx-3 ease-in duration-100 hover:scale-105 hover:border hover:border-gray-200 hover:shadow">
    <a href="/rec" class="">
        <img class="object-cover object-center max-w-xs h-64 rounded-lg lg:h-80" src={src} alt="m" >
        <div class="py-2 hover:none">
            <div class="px-2">
                <h2 class="text-xl text-yellow-500 hover:underline">Tarkari Paneer</h2>
                <span class="uppercase text-sm font-semibold text-gray-700">veg</span>
            </div>
            <Rating id="example-3" total={5} size={30} rating={ratingCount} />
                <!-- <p class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">{ratingCount} out of 5</p> -->
                <p class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"><a href="#review">359 reviews</a></p>
                
        </div>
    </a>
</div>