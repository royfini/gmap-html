import { p as promiseResolve, b as bootstrapLazy } from './index-704df61a.js';
export { s as setNonce } from './index-704df61a.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.20.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["rf-gmap",[[1,"rf-gmap"]]]], options);
});

//# sourceMappingURL=gmap.js.map