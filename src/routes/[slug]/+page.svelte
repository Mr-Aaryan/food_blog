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
    <div class="max-w-3xl w-full mx-auto pt-10">
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
    </div>
</main>