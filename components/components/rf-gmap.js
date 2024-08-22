import { p as proxyCustomElement, H } from './p-a3a41363.js';

/*
 Stencil Client Platform v4.20.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  return vnode;
};

const gmapCss = ".container{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}h1{margin:20px}iframe{width:80%;height:500px}";
const RfGmapStyle0 = gmapCss;

const Gmap = /*@__PURE__*/ proxyCustomElement(class Gmap extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'a38457e0868c7694ae8ee79b0ba62cb48f464cb8', class: "container" }, h("h1", { key: 'f00bd2299e3d9ddeb9aa328bb2229bf5b07c223c' }, "Google map"), h("iframe", { key: '0927dcea1812c0c8c1c13cf42acbf1f68bd11f02', src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13190.998207961922!2d35.932669956261456!3d34.25493376929733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152202240f8146f5%3A0xdf44a5e8dd2d93e!2sWadi%20Qannoubine!5e0!3m2!1sen!2slb!4v1724326817599!5m2!1sen!2slb", width: "600", height: "450", ref: el => el === null || el === void 0 ? void 0 : el.setAttribute('allowfullscreen', ''), loading: "lazy" })));
    }
    static get style() { return RfGmapStyle0; }
}, [1, "rf-gmap"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-gmap"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-gmap":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Gmap);
            }
            break;
    } });
}
defineCustomElement$1();

const RfGmap = Gmap;
const defineCustomElement = defineCustomElement$1;

export { RfGmap, defineCustomElement };

//# sourceMappingURL=rf-gmap.js.map