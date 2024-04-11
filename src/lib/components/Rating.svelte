<script>
    export let count = 0;
    let stars = [1,2,3,4,5];
    let fillColor = ['gray', 'gray', 'gray', 'gray', 'gray'];
  
    function toggleFill(index) {
        count = index + 1;
        for (let i = 0; i < stars.length; i++) {
            fillColor[i] = i <= index ? 'gold' : 'gray';
        }
    }
    function afterSubmit(){
        reviewContent = '';
    }
  </script>
  
  <form class=" w-fit">
    {#each stars as star, index}
        <button class="px-1" on:click={()=> toggleFill(index)} bind:this={index}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={fillColor[index]}
                stroke="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star hover:cursor-pointer"
            >
                <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
            </svg>
        </button>
    {/each}
    <div class="py-3 px-1 w-fit">
        <textarea name="review" id="" placeholder="Write a review (optional)"></textarea>
        <div class="mx-auto text-center">
            <button type="submit" class="border border-black px-3 py-1 my-2 w-full hover:bg-black hover:text-white">Submit</button>
        </div>
    </div>
  </form>
  