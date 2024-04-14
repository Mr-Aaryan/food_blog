<script>
    import "$lib/styles/global.css";
	import Navbar from "$lib/components/Navbar.svelte";    
	import Footer from "$lib/components/Footer.svelte";
	import PageTransition from '$lib/components/Transition.svelte';
	
	export let data;
</script>


<div class="layout">
	<Navbar />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>