<script>
    export let src, itemName, category_slug;
</script>

<div class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl">
    <a href="/recipes/{category_slug}">
        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 ease-in duration-100 hover:scale-105" {src} alt="{itemName}">
        <h2 class="mt-4 text-center text-lg font-semibold text-gray-700 capitalize">{itemName}</h2>
    </a>
</div>