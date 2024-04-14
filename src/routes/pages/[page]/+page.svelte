<script>
    import * as config from '$lib/site/config'
    export let data;
</script>

<svelte:head>
    <title>{config.siteTitle} - {data.page.title}</title>
</svelte:head>

<section class="max-w-5xl mx-auto px-5 py-10">
    <h1 class="font-bold text-3xl capitalize">{data.page.title}</h1>
    <div class="prose">
        {@html data.page.content}
    </div>
</section>