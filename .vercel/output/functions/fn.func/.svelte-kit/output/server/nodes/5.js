import * as server from '../entries/pages/recipes/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/recipes/+page.server.js";
export const imports = ["_app/immutable/nodes/5.D-3rU5wh.js","_app/immutable/chunks/scheduler.DJCNoK7G.js","_app/immutable/chunks/index.BR8bQEpW.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/config.Cadhnj0M.js"];
export const stylesheets = [];
export const fonts = [];
