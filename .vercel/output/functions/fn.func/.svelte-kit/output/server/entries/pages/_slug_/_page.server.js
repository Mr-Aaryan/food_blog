import { p as pb } from "../../../chunks/pocketbase.js";
const actions = {
  submitReview: async ({ request }) => {
    const data = await request.formData();
    const rating = data.get("rating");
    const full_name = data.get("full_name");
    const email = data.get("email");
    const content = data.get("review");
    const postId = data.get("post_id");
    const userValues = {
      "full_name": full_name,
      "email": email
    };
    const user = await pb.collection("users").create(userValues);
    const reviewValues = {
      "review_text": content,
      "rating": rating,
      "postId": postId,
      "userId": user.id,
      "Published": true
    };
    await pb.collection("reviews").create(reviewValues);
    return { success: true };
  }
};
export {
  actions
};
