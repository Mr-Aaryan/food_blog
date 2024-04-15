import { p as pb } from "../../chunks/pocketbase.js";
async function load() {
  const categories = await pb.collection("categories").getList(1, 50, {
    filter: `parent_category = '' `
  });
  const posts = await pb.collection("posts").getList(1, 9, {
    filter: "Published = True",
    sort: "-created"
  });
  return {
    categories: categories.items,
    posts: posts.items
  };
}
export {
  load
};
