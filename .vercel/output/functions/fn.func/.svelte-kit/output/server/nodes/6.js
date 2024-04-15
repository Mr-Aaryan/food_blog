import * as server from '../entries/pages/recipes/_slug_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/recipes/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.r9JC1Q0-.js","_app/immutable/chunks/scheduler.DJCNoK7G.js","_app/immutable/chunks/index.BR8bQEpW.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/arrow.Bcpwxzhm.js","_app/immutable/chunks/config.Cadhnj0M.js"];
export const stylesheets = [];
export const fonts = [];
