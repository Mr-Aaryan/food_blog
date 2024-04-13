<script>
    import "$lib/styles/global.css"
	import Navbar from "$lib/components/Navbar.svelte";    
	import Footer from "$lib/components/Footer.svelte";
	import PageTransition from '$lib/components/Transition.svelte';
	
	export let data;
</script>

<Navbar />
<PageTransition url={data.url}>
	<slot />
</PageTransition>
<Footer />