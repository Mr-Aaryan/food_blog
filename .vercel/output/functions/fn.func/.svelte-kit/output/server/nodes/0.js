import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DR7Slg7u.js","_app/immutable/chunks/scheduler.DJCNoK7G.js","_app/immutable/chunks/index.BR8bQEpW.js","_app/immutable/chunks/config.Cadhnj0M.js"];
export const stylesheets = ["_app/immutable/assets/0.Dit-JRpB.css"];
export const fonts = ["_app/immutable/assets/manrope-cyrillic-400-normal.DYJIFuzK.woff2","_app/immutable/assets/manrope-cyrillic-400-normal.BSokYSPU.woff","_app/immutable/assets/manrope-greek-400-normal.B7YXE4JD.woff2","_app/immutable/assets/manrope-greek-400-normal.BAy2wLnG.woff","_app/immutable/assets/manrope-vietnamese-400-normal.ooLdXFia.woff2","_app/immutable/assets/manrope-vietnamese-400-normal.DJunoU0M.woff","_app/immutable/assets/manrope-latin-ext-400-normal.CdEq0HKV.woff2","_app/immutable/assets/manrope-latin-ext-400-normal.hdRL3SMy.woff","_app/immutable/assets/manrope-latin-400-normal.BWi5-Pby.woff2","_app/immutable/assets/manrope-latin-400-normal.CVCPdBT6.woff"];
