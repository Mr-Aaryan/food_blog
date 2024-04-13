<script>
    import * as config from "$lib/site/config";
</script>
<footer class=" bg-white border-t relative">
    <div class="max-w-5xl px-6 py-8 mx-auto">
        <div class="flex flex-col items-center text-center">
            <a href="/">
                <h2 class="text-yellow-500">{config.siteTitle}</h2>
            </a>

            <div class="flex flex-wrap justify-center mt-6 -mx-4">
                <a href="/" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-yellow-500  "> Home </a>
                <a href="/pages/about" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-yellow-500  "> About </a>
                <a href="/pages/privacy" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-yellow-500  "> Privacy </a>
            </div>
        </div>

        <hr class="my-6 border-gray-200 md:my-10 " />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500 ">© Copyright 2021. All Rights Reserved.</p>

            <div class="flex -mx-2">
                <a href="{config.instagram}" class="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-500 " aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="config.facebook" class="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-500 " aria-label="Facebook">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                        </path>
                    </svg>
                </a>

                <a href="{config.social}" class="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-500 " aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
            </div>
        </div>
    </div>
</footer>