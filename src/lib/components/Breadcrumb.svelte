<script>
	import Arrow from "$lib/icons/arrow.svelte";
    export let title;
    export let categories;
</script>
<div class="flex items-center py-4 overflow-x-auto whitespace-nowrap">
    <a href="/recipes" class="text-gray-500">
        Recipes
    </a>

    <span class="mx-2 text-gray-500 rtl:-scale-x-100">
        <Arrow />
    </span>

    {#each categories as cat}
        <a href="/recipes/{cat.slug}" class="text-gray-500 hover:underline">
            {cat.category}
        </a>

        <span class="mx-2 text-gray-500 rtl:-scale-x-100">
            <Arrow />
        </span>
    {/each}

    <span class="text-yellow-500">
        {title}
    <span>
</div>