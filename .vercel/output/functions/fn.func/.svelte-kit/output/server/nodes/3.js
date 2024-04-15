import * as universal from '../entries/pages/_slug_/_page.js';
import * as server from '../entries/pages/_slug_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.js";
export { server };
export const server_id = "src/routes/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.Cb9Sa8pm.js","_app/immutable/chunks/config.Cadhnj0M.js","_app/immutable/chunks/scheduler.DJCNoK7G.js","_app/immutable/chunks/index.BR8bQEpW.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/arrow.Bcpwxzhm.js"];
export const stylesheets = [];
export const fonts = [];
