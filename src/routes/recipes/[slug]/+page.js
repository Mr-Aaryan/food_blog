import { pb } from '$lib/pocketbase';

export async function load(){

    const posts = await pb.collection('posts').getList(1, 50, {
        filter: 'Published = True',
        expand: "category"
    });

    console.log(posts);

    return {
        posts : posts.items
    }
}