import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { s as siteTitle, i as instagram, f as facebook, y as youtube } from "../../chunks/config.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="bg-white border-b sticky top-0 z-10"><nav class=""><div class="max-w-5xl px-6 py-6 mx-auto lg:flex lg:justify-between lg:items-center"><div class="flex items-center justify-between"><a href="/" class="text-2xl font-semibold text-yellow-500">${escape(siteTitle)}</a>  <div class="flex lg:hidden"><button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">${`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"></path></svg>`}</button></div></div>  <div class="${escape(
    "opacity-0 -translate-x-full",
    true
  ) + " absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"}"><ul class="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8"><li><a class="${[
    "block font-medium lg:mx-3 hover:text-yellow-500",
    "underline"
  ].join(" ").trim()}" href="/" data-svelte-h="svelte-1x7yznx">Home</a></li> <li><a class="${[
    "block font-medium lg:mx-3 hover:text-yellow-500",
    ""
  ].join(" ").trim()}" href="/pages/about" data-svelte-h="svelte-7wqlmr">About</a></li> <li><a class="${[
    "block font-medium lg:mx-3 hover:text-yellow-500",
    ""
  ].join(" ").trim()}" href="/recipes" data-svelte-h="svelte-1rq1is4">Recipes</a></li></ul></div></div></nav></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const d = /* @__PURE__ */ new Date();
  return `<footer class="bg-white border-t relative"><div class="max-w-5xl px-6 py-8 mx-auto"><div class="flex flex-col items-center text-center"><a href="/"><h2 class="text-yellow-500">${escape(siteTitle)}</h2></a> <div class="flex flex-wrap justify-center mt-6 -mx-4" data-svelte-h="svelte-14d6883"><a href="/" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-yellow-500 ">Home</a> <a href="/pages/about" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-yellow-500 ">About</a> <a href="/pages/privacy" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-yellow-500 ">Privacy</a></div></div> <hr class="my-6 border-gray-200 md:my-10 "> <div class="flex flex-col items-center sm:flex-row sm:justify-between"><p class="text-sm text-gray-500 ">© Copyright ${escape(d.getFullYear())}. All Rights Reserved.</p> <div class="flex -mx-2" data-svelte-h="svelte-u4266a"><a${add_attribute("href", instagram, 0)} class="mx-2 text-gray-600 transition-colors duration-300 hover:text-yellow-500 " aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a> <a${add_attribute("href", facebook, 0)} class="mx-2 text-gray-600 transition-colors duration-300 hover:text-yellow-500 " aria-label="Facebook"><svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path></svg></a> <a${add_attribute("href", youtube, 0)} class="mx-2 text-gray-600 transition-colors duration-300 hover:text-yellow-500 " aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a></div></div></div></footer>`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div class="h-full">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="layout">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main>${validate_component(Transition, "PageTransition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
