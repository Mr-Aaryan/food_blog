import { pb } from "$lib/pocketbase"

export async function load({params}) {

    const post_id = params.slug;
    
    const post = await pb.collection('posts').getOne(post_id);

    console.log(post)

    return post;

}