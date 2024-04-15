import { c as create_ssr_component, e as escape, b as add_attribute, d as each, v as validate_component } from "../../chunks/ssr.js";
import { p as pocketbase, s as siteTitle } from "../../chunks/config.js";
const CategoryCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src, itemName, category_slug } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.itemName === void 0 && $$bindings.itemName && itemName !== void 0)
    $$bindings.itemName(itemName);
  if ($$props.category_slug === void 0 && $$bindings.category_slug && category_slug !== void 0)
    $$bindings.category_slug(category_slug);
  return `<div class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl"><a href="${"/recipes/" + escape(category_slug, true)}"><img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 ease-in duration-100 hover:scale-105 text-center"${add_attribute("src", src, 0)}${add_attribute("alt", itemName, 0)}> <h2 class="mt-4 text-center text-lg font-semibold text-gray-700 capitalize">${escape(itemName)}</h2></a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1hhj126_START -->${$$result.title = `<title>${escape(siteTitle)}</title>`, ""}<!-- HEAD_svelte-1hhj126_END -->`, ""} <section class="max-w-5xl mx-auto px-5 mt-8"><div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">${each(data.posts, (post) => {
    return `<a href="${"/" + escape(post.title.toLowerCase().replace(/\s+/g, "-"), true) + "-" + escape(post.id, true)}" class=""><img class="bg-neutral-200 object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="${escape(pocketbase, true) + "/api/files/" + escape(post.collectionId, true) + "/" + escape(post.id, true) + "/" + escape(post.featured_image, true)}"${add_attribute("alt", post.title, 0)}> <div class="py-2 hover:none"><span class="uppercase text-sm font-semibold text-gray-700"></span> <h2 class="text-xl text-yellow-500 hover:underline">${escape(post.title)}</h2></div> </a>`;
  })}</div></section> <section class="max-w-5xl mx-auto px-5 mt-12"><h2 class="text-center py-5" data-svelte-h="svelte-me3qcd">Categories</h2> <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-4">${each(data.categories, (cat) => {
    return `${validate_component(CategoryCard, "CategoryCard").$$render(
      $$result,
      {
        category_slug: cat.slug,
        itemName: cat.category,
        src: pocketbase + "/api/files/" + cat.collectionId + "/" + cat.id + "/" + cat.featured_image
      },
      {},
      {}
    )}`;
  })}</div></section>`;
});
export {
  Page as default
};
