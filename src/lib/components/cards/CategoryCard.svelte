<script>
    export let src, itemName, category_id;
</script>

<a href="/recipes/{category_id}">
    <div class="relative w-fit shadow-md hover:cursor-pointer">
        <div class="h-auto max-w-sm overflow-hidden rounded">
            <img src={src} alt="burger img" class="h-[250px] max-w-xs hover:scale-125 ease-in duration-300"> 
        </div>
        <div class="absolute bottom-[-20px] left-0 right-0 mx-auto text-white font-bold bg-yellow-500 w-fit px-7 py-2 shadow-xl hover:text-gray-600 ">
            {itemName}
        </div>
    </div>
</a>