import { pb } from '$lib/pocketbase';

export async function load({ params }){
    
    const categoryId = params.slug;
    const posts = await pb.collection('posts').getList(1, 50, {
        filter: `Published = True && category = '${categoryId}'`,
        expand: "category"
    });
    
    console.log(posts);
    console.log(categoryId);
    
    return {
        posts : posts.items
    }
}