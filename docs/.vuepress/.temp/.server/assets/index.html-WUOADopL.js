import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Ds0T57Ln.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>This is the content of home page. Check <a href="https://vuejs.press/reference/default-theme/frontmatter.html#home-page" target="_blank" rel="noopener noreferrer">Home Page Docs</a> for more details.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/","title":"Home","lang":"en-US","frontmatter":{"home":true,"title":"Home","heroImage":"https://vuejs.press/images/hero.png","actions":[{"text":"Get Started","link":"/getting-started.html","type":"primary"},{"text":"Introduction","link":"https://vuejs.press/guide/introduction.html","type":"secondary"}],"features":[{"title":"Simplicity First","details":"Minimal setup with markdown-centered project structure helps you focus on writing."},{"title":"Vue-Powered","details":"Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue."},{"title":"Performant","details":"VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded."},{"title":"Themes","details":"Providing a default theme out of the box. You can also choose a community theme or create your own one."},{"title":"Plugins","details":"Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site."},{"title":"Bundlers","details":"Default bundler is Vite, while Webpack is also supported. Choose the one you like!"}],"footer":"MIT Licensed | Copyright © 2018-present VuePress Community"},"headers":[],"git":{},"filePathRelative":"README.md"}');
export {
  index_html as comp,
  data
};
