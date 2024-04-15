import { pb } from "$lib/pocketbase"

export async function load({params}) {
    const post_url = params.slug;
    const lastIndex = post_url.lastIndexOf("-");
    const post_id = post_url.substring(lastIndex + 1);
    const post = await pb.collection('posts').getOne(post_id);
    return { post }
}

export const actions = {
	submitReview: async ({ request }) => {
		const data = await request.formData();
        const rating = data.get('rating');
        const full_name = data.get('full_name');
		const email = data.get('email');
		const content = data.get('review');
        const postId = data.get('post_id');

        const userValues = {
            "full_name" : full_name,
            "email": email
        };

		const user = await pb.collection('users').create(userValues);

        const reviewValues = {
            "review_text": content,
            "rating": rating,
            "postId": postId,
            "userId": user.id,
            "Published": true
        }

        const review = await pb.collection('reviews').create(reviewValues);
        
		return { success: true };
	}
};