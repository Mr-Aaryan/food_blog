<script>
    import * as config from '$lib/site/config.js'
    import Breadcrumb from '$lib/components/Breadcrumb.svelte'
    export let data;

    let videoId = '';

    console.log(data.similar_posts)

    const timestamp = data.post.updated;
    const date = new Date(timestamp);

    const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    
    if (data.post.youtube_url != null) {
        let url = data.post.youtube_url
        if (url.includes('/shorts/')){
            videoId = url.split("/shorts/")[1];
        } else {
            videoId = url.match(/[?&]v=([^&]+)/)[1];
        }
    }
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.post.title}" />
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
                <Breadcrumb categories = {data.categories} title = {data.post.title} />
                <h1 class="text-4xl font-medium capitalize">{data.post.title}</h1>
                <div class="py-4">
                    <p class="text-sm">Updated on {formattedDate}</p>
                </div>
            </div>
            <hr>
            <div class="prose">
                {@html data.post.content}
            </div>
        </article>
        {#if data.post.youtube_url}
        <div class="w-full px-5 mt-8 rounded bg-neutral-100">
            <iframe width="315" height="560" class="mx-auto"
                src="https://www.youtube.com/embed/{videoId}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        </div>
        {/if}
    </div>
    
    <div class="max-w-5xl mx-auto px-5 py-8">
        <h2 class="text-center">You May Also Like</h2>
        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {#each data.similar_posts as post}
            <a href="/{post.id}" class="">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600" alt="m">
                <div class="py-2 hover:none">
                    <span class="uppercase text-sm font-semibold text-gray-700">{post.expand.category.category}</span>
                    <h2 class="text-xl text-yellow-500 hover:underline">{post.title}</h2>
                </div>
            </a>
            {/each}
        </div>
    </div>
    
</main>