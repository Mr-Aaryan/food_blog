import { pb } from '$lib/pocketbase';

export const actions = {
	submitReview: async ({ request }) => {
		const data = await request.formData();
        const rating = data.get('rating');
        const full_name = data.get('full_name');
		const email = data.get('email');
		const content = data.get('review');
        const postId = data.get('post_id');

        console.log(full_name, email)

        const userValues = {
            "full_name" : full_name,
            "email": email
        };

		const user = await pb.collection('users').create(userValues);

        console.log(user);

        const reviewValues = {
            "review_text": content,
            "rating": rating,
            "postId": postId,
            "userId": user.id
        }

        const review = await pb.collection('reviews').create(reviewValues);

        console.log(review)

		return { success: true };
	}
};