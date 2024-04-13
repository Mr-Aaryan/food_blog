<script>
    export let src, itemName, category_slug;
</script>

<a href="/recipes/{category_slug}">
    <div class="relative w-fit hover:cursor-pointer hover:scale-110 ease-in duration-300 px-5 py-5">
        <div class="h-auto max-w-sm rounded">
            <img src={src} alt="burger img" class="bg-neutral-200 h-[200px] w-[200px] max-w-xs  rounded-full overflow-hidden shadow-md hover:blur-sm duration-300"> 
        </div>
        <div class="absolute bottom-[90px] left-0 right-0 mx-auto text-white font-bold bg-yellow-500 w-fit px-7 py-2 shadow-xl" >
            {itemName}
        </div>
    </div>
</a>