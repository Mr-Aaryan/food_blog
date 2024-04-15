import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { s as siteTitle } from "../../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1vfjdsk_START -->${$$result.title = `<title>${escape(siteTitle)} - ${escape(data.page.title)}</title>`, ""}<!-- HEAD_svelte-1vfjdsk_END -->`, ""} <section class="max-w-5xl mx-auto px-5 py-10"><h1 class="font-bold text-3xl capitalize">${escape(data.page.title)}</h1> <div class="prose"><!-- HTML_TAG_START -->${data.page.content}<!-- HTML_TAG_END --></div></section>`;
});
export {
  Page as default
};
