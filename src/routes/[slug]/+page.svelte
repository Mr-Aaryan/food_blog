<script>
    import * as config from '$lib/site/config.js'
    import Breadcrumb from '$lib/components/Breadcrumb.svelte'
    import Review from '$lib/components/Review.svelte';
    export let data;

    let videoId = '';

    export let count = 1;
    let stars = [1,2,3,4,5];
    let fillColor = ['gray', 'gray', 'gray', 'gray', 'gray'];
  
    function toggleFill(index) {
        count = index + 1;
        for (let i = 0; i < stars.length; i++) {
            fillColor[i] = i <= index ? 'gold' : 'gray';
        }
    }

    console.log(data.similar_posts)

    const timestamp = data.post.updated;
    const post_date = new Date(timestamp);

    const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(post_date);
    
    if (data.post.youtube_url != '') {
        let url = data.post.youtube_url
        if (url.includes('/shorts/')){
            videoId = url.split("/shorts/")[1];
        } else {
            videoId = url.match(/[?&]v=([^&]+)/)[1];
        }
    }
    console.log(data.categories)
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.post.title}" />
	<meta content={config.siteUrl} property="og:url" />
	<meta property="og:description" content="{data.post.description}" />
	<meta content={config.siteName} property="og:site_name" />

	<meta content="{data.post.title}" name="twitter:title" />
	<meta content="{data.post.description}" name="twitter:description" />
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
        {#if videoId != ''}
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
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="http://127.0.0.1:8090/api/files/{post.collectionId}/{post.id}/{post.featured_image}" alt="{post.title}">
                <div class="py-2 hover:none">
                    <span class="uppercase text-sm font-semibold text-gray-700">{post.expand.category.category}</span>
                    <h2 class="text-xl text-yellow-500 hover:underline">{post.title}</h2>
                </div>
            </a>
            {/each}
        </div>
    </div>
    <!-- reviews and ratings -->
    {#if data.post.reviews_allowed == true}
    <div class="max-w-3xl mx-auto bg-neutral-100">
        <div class="p-5 rounded">
            <div class="w-fit">
                <h3>Your Rating</h3>
                <div class="mt-3">
                    {#each stars as star, index}
                        <button class="px-1" on:click={()=> toggleFill(index)} bind:this={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill={fillColor[index]} stroke="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        </button>
                    {/each}
                </div>
            </div>
            <div class="py-3 px-1 w-fit">
                <h3>Your Review</h3>
                <form class="mt-3" action="?/submitReview" method="post">
                    <input name="rating" type="number" value="{count}" hidden />
                    <input name="post_id" type="text" value="{data.post.id}" hidden />
                    <input name="full_name" type="text" placeholder="Full Name" class="w-full rounded" required>
                    <input name="email" type="email" placeholder="Email" class="mt-3 w-full rounded" required>
                    <textarea name="review" id="" placeholder="Write a review" class="mt-3 w-full rounded" required></textarea>
                    <div class="mx-auto text-center">
                        <button type="submit" form_action="?/submitReview"  class="rounded border border-black px-3 py-1 my-2 w-full hover:bg-black hover:text-white">Submit</button>
                    </div>
                </form>
            </div>
          </div>
          <hr>
          <div class="p-5">
            {#if data.reviews.totalItems > 0}
                <h3>Reviews</h3>
                {#each data.reviews.items as review}
                    <Review ratingCount={review.rating} review_text={review.review_text} review_date={review.created} user_name={review.expand.userId.full_name}  />
                {/each}
            {:else}
            <p class="text-center p-5 text-sm">Be the first one to review.</p>
            {/if}
           </div>
    </div>
    {/if}
    
</main>