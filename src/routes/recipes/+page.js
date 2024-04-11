import { pb } from '$lib/pocketbase';

export async function load(){
    // fetch a paginated records list
const recipes = await pb.collection('posts').getList();

console.log(recipes);

return {
    recipes : recipes.items,
}

}