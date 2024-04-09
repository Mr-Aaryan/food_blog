<script>
    import RecentCard from "$lib/components/cards/RecentCard.svelte"
    import CategoryCard from "$lib/components/cards/CategoryCard.svelte"
    import PopularCard from "$lib/components/cards/PopularCard.svelte";
</script>

<main class="max-w-5xl px-5 mx-auto my-10 light">

    <section class="border-b border-gray-400 pb-12">
        <div class="flex justify-around lg:justify-between flex-row flex-wrap overflow-hidden w-full">
            <div class="basis-3 my-5">
                <CategoryCard itemName="Veg Items" src="https://i.ndtvimg.com/i/2016-09/tofu-625_625x350_61474273627.jpg"/>
            </div>
            <div class="basis-3 my-5">
                <CategoryCard itemName="Non Veg Item" src="https://luv4foodntravel.com/wp-content/uploads/2022/01/Chicken-Leg-Fry.jpg"/>
            </div>
            <div class="basis-3 my-5">
                <CategoryCard itemName="Snacks" src="https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg?t=st=1712673822~exp=1712677422~hmac=9d43bd5f7718c8b6c486e922b5fe9bca4b1b626ea07da6388f45c46e2d2f8809&w=1380"/>
            </div>
            <div class="basis-3 my-5">
                <CategoryCard itemName="Healthy" src="https://www.tastingtable.com/img/gallery/30-healthy-snack-ideas-that-wont-ruin-your-diet/l-intro-1643925756.jpg"/>
            </div>
            <div class="basis-3 my-5">
                <CategoryCard itemName="Soups" src="https://images5.alphacoders.com/407/407550.jpg"/>
            </div>
            <div class="basis-3 my-5">
                <CategoryCard itemName="Dinner" src="https://c.pxhere.com/photos/6f/79/abendbrot_restaurant_salad_eat_italians_berlin_kurf_rstendamm-1066618.jpg!d"/>
            </div>
    
        </div>
    </section>
    
    <section class="py-4 pb-8 border-b border-slate-400">
        <h2 class="text-3xl pb-1 my-3 text-center">Our Popular</h2>
        <div class="flex  flex-row flex-wrap lg:flex-nowrap justify-around lg:justify-between overflow-hidden">
            <div class="basis-2 py-3">
                <PopularCard src="https://static.toiimg.com/photo/53251884.cms"/> 
            </div>
            <div class="basis-2 py-3">
                <PopularCard src="https://www.readyseteat.com/sites/g/files/qyyrlu501/files/images/article/hero/BARISTA-STYLE-COFFEE-HERO.jpg"/>
            </div>
            <div class="basis-2 py-3">
                <PopularCard src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLr2H9KXFOygP_n5GS99Eq6ArjZQoSoCRfBV1AKoVwQlH4gFIyRK4iNyp87uF4zkejoWpUjRtu_RyKSyAxjiwZCoDYUA_9xTRgYvJtZm3XvQ28XgQyOup_Ncfh3P2KOLo607Y7Qfr1h6FE/s1600/Chilli+Chiken.jpg"/>
            </div>
        </div>
    </section>
    
    <section class="py-2">
        <h2 class="text-3xl pb-1 mt-3 text-center">Recents</h2>
        <div>
            <RecentCard src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </div>
        <div>
            <RecentCard src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </div>
        <div>
            <RecentCard src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </div>
    </section>

    
</main>
