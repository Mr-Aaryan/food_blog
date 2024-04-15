import { c as create_ssr_component, e as escape, d as each, b as add_attribute } from "../../../chunks/ssr.js";
import { p as pocketbase, s as siteTitle } from "../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1dr1ko6_START -->${$$result.title = `<title>${escape(siteTitle)} - Recipes</title>`, ""}<!-- HEAD_svelte-1dr1ko6_END -->`, ""} <section class="max-w-5xl px-5 py-10 mx-auto"><h1 class="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl" data-svelte-h="svelte-1000bwn">All Recipes</h1> <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">${each(data.posts, (post) => {
    return `<a href="${"/" + escape(post.title.toLowerCase().replace(/\s+/g, "-"), true) + "-" + escape(post.id, true)}" class=""><img class="bg-neutral-200 object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="${escape(pocketbase, true) + "/api/files/" + escape(post.collectionId, true) + "/" + escape(post.id, true) + "/" + escape(post.featured_image, true)}"${add_attribute("alt", post.title, 0)}> <div class="py-2 hover:none"><span class="uppercase text-sm font-semibold text-gray-700">${escape(post.expand.category.category)}</span> <h2 class="text-xl text-yellow-500 hover:underline">${escape(post.title)}</h2></div> </a>`;
  })}</div></section>`;
});
export {
  Page as default
};
