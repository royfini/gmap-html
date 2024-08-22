import type { Components, JSX } from "../types/components";

interface RfGmap extends Components.RfGmap, HTMLElement {}
export const RfGmap: {
    prototype: RfGmap;
    new (): RfGmap;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
