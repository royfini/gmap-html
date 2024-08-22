import { b as bootstrapLazy } from './index-704df61a.js';
export { s as setNonce } from './index-704df61a.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-gmap",[[1,"rf-gmap"]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map