import { pb } from "$lib/pocketbase"

export async function load({params}) {

    const post_url = params.slug;
    const lastIndex = post_url.lastIndexOf("-");
    const post_id = post_url.substring(lastIndex + 1);
    
    const post = await pb.collection('posts').getOne(post_id, {
        expand: "category.parent_category.parent_category.parent_category.parent_category"
    });

    const similar_posts = await pb.collection('posts').getList(1, 3, {
        filter: `Published = True`,
        expand: "category"
    });

    const reviews = await pb.collection('reviews').getList(1, 50, {
        filter: `postId = '${post_id}' && Published = True`,
        expand: "userId"
    });

    let categoriesArray = [];

    function getCategoryAndId(obj) {
        if (obj && typeof obj === 'object') {
            if (obj.category && obj.id) {
                categoriesArray.unshift({ category: obj.category, id: obj.id, slug: obj.slug });
            }
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    getCategoryAndId(obj[key]);
                }
            }
        }
    }
    
    getCategoryAndId(post.expand);    
    

    return {
        post,
        reviews: reviews,
        categories : categoriesArray,
        similar_posts: similar_posts.items
    }

}