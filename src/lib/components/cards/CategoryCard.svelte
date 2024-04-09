<script>
    export let src, itemName;
</script>

<main class="relative w-fit shadow-xl hover:cursor-pointer">
    <div class="h-auto max-w-sm overflow-hidden rounded">
        <img src={src} alt="burger img" class="h-[250px] max-w-xs hover:scale-125 ease-in duration-300"> 
    </div>
    <div class="absolute bottom-[-20px] left-0 right-0 mx-auto text-white font-bold bg-yellow-500 w-fit px-7 py-2 shadow-xl hover:text-gray-600 ">
        {itemName}
    </div>
</main>