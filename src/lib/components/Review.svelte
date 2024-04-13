<script>
    import { Rating } from 'flowbite-svelte';
    export let ratingCount, review_text, review_date, user_name;

    const timestamp = new Date(review_date);

    const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(timestamp);

</script>
<div class="mt-5 pt-5 border-t">
    <div class="flex items-center w-fit">
        <img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" alt="dummy_img" class="h-10 rounded-full">
        <span class="px-3">{user_name}</span>
    </div>
    <div class="py-1 flex">
        <Rating id="example-3" total={5} size={24} rating={ratingCount} />
        <span class="px-5 text-sm text-gray-500">{formattedDate}</span>
    </div>
    <p class="py-3 px-2">{review_text}</p>
</div>
