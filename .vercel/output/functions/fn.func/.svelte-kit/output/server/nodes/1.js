

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DjJFISrK.js","_app/immutable/chunks/scheduler.DJCNoK7G.js","_app/immutable/chunks/index.BR8bQEpW.js"];
export const stylesheets = [];
export const fonts = [];
