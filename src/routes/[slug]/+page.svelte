<script>
    import * as config from '$lib/site/config.js'
    import Breadcrumb from '$lib/components/Breadcrumb.svelte'
</script>
<svelte:head>
	<title>Chicken Tikki</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="chicken tikki" />
	<meta content={config.siteUrl} property="og:url" />
	<meta property="og:description" content="chicken tikki" />
	<meta content={config.siteName} property="og:site_name" />

	<meta content="chicken tikki" name="twitter:title" />
	<meta content="chicken tikki" name="twitter:description" />
</svelte:head>

<main>
    <div class="max-w-3xl w-full mx-auto py-10 border-b">
        <article class="px-5">
            <div class="">
                <Breadcrumb />
                <h1 class="text-4xl font-medium capitalize">Chicken Tikki</h1>
                <div class="py-4">
                    <p class="text-sm">Created by Kapil Pokhrel | Updated on July 03, 2024</p>
                </div>
            </div>
            <hr>
            <div class="prose">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae corrupti atque earum optio veniam, fugiat a possimus magni perferendis doloremque tenetur sit, voluptatibus ratione ipsa veritatis ducimus suscipit fugit porro.</p>
                <h2>How to make Chicken Tikki?</h2>
                <p>You'll find a detailed ingredient list and step-by-step instructions in the recipe below, but let's go over the basics: </p>
                <h3>Chicken Tikki Ingredients</h3>
                <p> These are the ingredients you’ll need to make this macaroni salad recipe:</p>
                <ul>
                    <li>Macaroni: Of course, you’ll need macaroni noodles!</li>
                    <li>Condiments: A creamy blend of mayonnaise and yellow mustard adds tons of flavor.</li> 
                    <li>Sugar and vinegar: White sugar adds a dose of sweetness, which is pleasantly balanced by white vinegar.</li>
                    <li>Seasonings: This macaroni salad is simply seasoned with salt and ground black pepper.</li>
                    <li>Vegetables: You’ll need celery, an onion, and a bell pepper. Grated carrots and pimento peppers are optional, but they add welcome flavor and color.</li>
                </ul>
            </div>
        </article>
        <div class="w-full px-5 mt-8 rounded bg-neutral-100">
            <iframe width="315" height="560" class="mx-auto"
                src="https://www.youtube.com/embed/SjFOGBNyEqc?si=d6YD9p5QvYbDHy__"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        </div>
    </div>
    <div class="max-w-5xl mx-auto px-5 py-8">
        <h2 class="text-center">You May Also Like</h2>
        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <a href="/rec" class="">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600" alt="m">
                <div class="py-2 hover:none">
                    <span class="uppercase text-sm font-semibold text-gray-700">veg</span>
                    <h2 class="text-xl text-yellow-500 hover:underline">Tarkari Paneer</h2>
                </div>
            </a>
            <a href="/rec" class="">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600" alt="m">
                <div class="py-2 hover:none">
                    <span class="uppercase text-sm font-semibold text-gray-700">non-veg</span>
                    <h2 class="text-xl text-yellow-500 hover:underline">Nasta Me Pasta</h2>
                </div>
            </a>
            
            <a href="/rec" class="">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600" alt="m">
                <div class="py-2 hover:none">
                    <span class="uppercase text-sm font-semibold text-gray-700">non-veg</span>
                    <h2 class="text-xl text-yellow-500 hover:underline">Nasta Me Pasta</h2>
                </div>
            </a>
        </div>
    </div>
</main>