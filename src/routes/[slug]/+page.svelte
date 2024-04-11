<script>
    import * as config from '$lib/site/config.js'
    import Breadcrumb from '$lib/components/Breadcrumb.svelte'
    export let data;
</script>

<svelte:head>
	<title>Chicken Tikki</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.title}" />
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
                <h1 class="text-4xl font-medium capitalize">{data.title}</h1>
                <div class="py-4">
                    <p class="text-sm">Created by Kapil Pokhrel | Updated on July 03, 2024</p>
                </div>
            </div>
            <hr>
            <div class="prose">
                {@html data.content}
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