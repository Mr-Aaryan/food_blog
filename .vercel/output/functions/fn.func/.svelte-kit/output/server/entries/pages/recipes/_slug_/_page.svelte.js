import { c as create_ssr_component, e as escape, d as each, b as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { A as Arrow } from "../../../../chunks/arrow.js";
import { p as pocketbase } from "../../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data.posts);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-w975vl_START -->${$$result.title = `<title>${escape(data.categoryInfo.category)}</title>`, ""}<!-- HEAD_svelte-w975vl_END -->`, ""} <section class="max-w-5xl px-5 py-10 mx-auto"><div class="text-center"><h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">${escape(data.categoryInfo.category)}</h1> ${data.categoryInfo.description != "" ? `<p class="max-w-lg mx-auto mt-4 text-gray-500">${escape(data.categoryInfo.description)}</p>` : ``}</div> ${data.posts != "" ? `<div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">${each(data.posts, (post) => {
    return `<a href="${"/" + escape(post.title.toLowerCase().replace(/\s+/g, "-"), true) + "-" + escape(post.id, true)}" class=""><img class="bg-neutral-200 object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="${escape(pocketbase, true) + "/api/files/" + escape(post.collectionId, true) + "/" + escape(post.id, true) + "/" + escape(post.featured_image, true)}"${add_attribute("alt", post.title, 0)}> <div class="py-2 hover:none"><div class=""><h2 class="text-xl text-yellow-500 hover:underline">${escape(post.title)}</h2> </div></div> </a>`;
  })}</div>` : ``} ${each(data.sub_posts, (sub_post) => {
    return `<div class="mt-10"><a href="${"/recipes/" + escape(sub_post.slug, true)}"><h2 class="text-xl font-semibold text-gray-800 capitalize lg:text-2xl hover:text-yellow-500">${escape(sub_post.category)} ${validate_component(Arrow, "Arrow").$$render($$result, {}, {}, {})}</h2></a> <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">${each(sub_post.new_posts.items, (post) => {
      return `<a href="${"/" + escape(post.title.toLowerCase().replace(/\s+/g, "-"), true) + "-" + escape(post.id, true)}" class=""><img class="bg-neutral-200 object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105" src="${escape(pocketbase, true) + "/api/files/" + escape(post.collectionId, true) + "/" + escape(post.id, true) + "/" + escape(post.featured_image, true)}"${add_attribute("alt", post.title, 0)}> <div class="py-2 hover:none"><div class=""><h2 class="text-xl text-yellow-500 hover:underline">${escape(post.title)}</h2> </div></div> </a>`;
    })}</div> </div>`;
  })}</section>`;
});
export {
  Page as default
};
