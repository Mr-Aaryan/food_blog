import { p as pb } from "../../../../chunks/pocketbase.js";
async function load({ params }) {
  const page_slug = params.page;
  console.log(page_slug);
  const page = await pb.collection("pages").getFirstListItem(`slug = '${page_slug}'`);
  return {
    page
  };
}
export {
  load
};
