import { r as registerInstance, h } from './index-704df61a.js';

const gmapCss = ".container{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}h1{margin:20px}iframe{width:80%;height:500px}";
const RfGmapStyle0 = gmapCss;

const Gmap = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'a38457e0868c7694ae8ee79b0ba62cb48f464cb8', class: "container" }, h("h1", { key: 'f00bd2299e3d9ddeb9aa328bb2229bf5b07c223c' }, "Google map"), h("iframe", { key: '0927dcea1812c0c8c1c13cf42acbf1f68bd11f02', src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13190.998207961922!2d35.932669956261456!3d34.25493376929733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152202240f8146f5%3A0xdf44a5e8dd2d93e!2sWadi%20Qannoubine!5e0!3m2!1sen!2slb!4v1724326817599!5m2!1sen!2slb", width: "600", height: "450", ref: el => el === null || el === void 0 ? void 0 : el.setAttribute('allowfullscreen', ''), loading: "lazy" })));
    }
};
Gmap.style = RfGmapStyle0;

export { Gmap as rf_gmap };

//# sourceMappingURL=rf-gmap.entry.js.map