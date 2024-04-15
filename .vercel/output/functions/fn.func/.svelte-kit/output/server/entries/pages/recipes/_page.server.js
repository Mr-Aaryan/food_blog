import { p as pb } from "../../../chunks/pocketbase.js";
async function load() {
  const posts = await pb.collection("posts").getList(1, 50, {
    filter: "Published = True",
    expand: "category"
  });
  return {
    posts: posts.items
  };
}
export {
  load
};
