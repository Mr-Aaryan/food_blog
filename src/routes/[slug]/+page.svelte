<script>
    import { page } from '$app/stores';

    import Facebook from '$lib/icons/Facebook.svelte';
    import Twitter from '$lib/icons/Twitter.svelte';
    import Whatsapp from '$lib/icons/Whatsapp.svelte';
   

    import { Rating } from 'flowbite-svelte';
    let ratingCount = 4.5;
    import { pb } from "$lib/pocketbase"
    import * as config from '$lib/site/config.js'
    import Review from '$lib/components/Review.svelte';

    export let data;
    let videoId = '';

    export let count = 1;
    let stars = [1,2,3,4,5];
    let fillColor = ['gold', 'gray', 'gray', 'gray', 'gray'];
  
    function toggleFill(index) {
        count = index + 1;
        for (let i = 0; i < stars.length; i++) {
            fillColor[i] = i <= index ? 'gold' : 'gray';
        }
    }
    const timestamp = data.post.updated;
    const post_date = new Date(timestamp);

    const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(post_date);

    let showReviews = false;
    let reviews = [];
    let review_list = [];
    async function getReviews() { 
        showReviews = !showReviews;
        reviews = await pb.collection('reviews').getList(1, 50, {
        filter: `postId = '${data.post.id}' && Published = True`,
        expand: "userId"
        });
        review_list = [...review_list, reviews];
    }
    
    if (data.post.youtube_url != '') {
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
	<meta property="og:description" content="{data.post.description}" />
	<meta content={config.siteName} property="og:site_name" />

	<meta content="{data.post.title}" name="twitter:title" />
	<meta content="{data.post.description}" name="twitter:description" />
</svelte:head>

<div class="max-w-3xl w-full mx-auto py-10 border-b">
    <article class="px-5">
        <div>
            <h1 class="text-4xl font-medium capitalize">{data.post.title}</h1>
            <div class="py-4">
                <p class="text-sm">Updated on {formattedDate}</p>
                <div class="flex items-center">
                    <Rating id="example-3" total={5} size={30} rating={ratingCount} />
                    <span class="ms-2 text-sm font-medium text-gray-500">{ratingCount} from <a href="#review">reviews</a></span>
                </div>
                <div class="flex py-3">
                    <i> <a 
                        title="Share on Whatsapp"
                        href="https://api.whatsapp.com/send?text={$page.url}"
                        class="px-2"> <Whatsapp /> </a>
                    </i>
                    <i> <a 
                        title="Share on Facebook"
                        href="https://www.facebook.com/sharer/sharer.php?u={$page.url}"
                        class="px-2"> <Facebook /> </a>
                    </i>
                    <i> <a 
                        title="Share on Twitter"
                        href="https://twitter.com/share?url={$page.url}"
                        class="px-2"> <Twitter /> </a>
                    </i>
                    

                </div>
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
        <div class="p-5 w-full" id="review">
            {#if showReviews == true}
                {#if reviews.totalItems > 0}
                    <h3>Reviews</h3>
                    {#each reviews.items as review}
                        <Review ratingCount={review.rating} review_text={review.review_text} review_date={review.created} user_name={review.expand.userId.full_name}  />
                    {/each}
                {:else}
                <p class="text-center p-5 text-sm">Be the first one to review.</p>
                {/if}
            {:else}
                <button class="block w-56 px-3 py-2 border bg-neutral-300 hover:bg-neutral-200 rounded-lg mx-auto" on:click={getReviews}>Show Reviews</button>
            {/if}
       </div>
</div>
{/if}