import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function load() {
    const categories = await pb.collection('categories').getList();
    const posts = await pb.collection('posts').getList(1, 50, {
        filter: 'Published = True',
        sort: '-created',
    });

    console.log(posts)

    return {
        categories: categories.items,
        posts: posts.items
    }
}