import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Ds0T57Ln.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sticky-article-with-higher-priority" tabindex="-1"><a class="header-anchor" href="#sticky-article-with-higher-priority"><span>Sticky Article with Higher Priority</span></a></h1><p>Excerpt information which is added manually.</p><h2 id="heading-2" tabindex="-1"><a class="header-anchor" href="#heading-2"><span>Heading 2</span></a></h2><p>Here is the content.</p><h3 id="heading-3" tabindex="-1"><a class="header-anchor" href="#heading-3"><span>Heading 3</span></a></h3><p>Here is the content.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/sticky2.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sticky2_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "sticky2.html.vue"]]);
const data = JSON.parse('{"path":"/posts/sticky2.html","title":"Sticky Article with Higher Priority","lang":"en-US","frontmatter":{"date":"2020-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"sticky":10},"headers":[{"level":2,"title":"Heading 2","slug":"heading-2","link":"#heading-2","children":[{"level":3,"title":"Heading 3","slug":"heading-3","link":"#heading-3","children":[]}]}],"git":{},"filePathRelative":"posts/sticky2.md","excerpt":"\\n<p>Excerpt information which is added manually.</p>\\n"}');
export {
  sticky2_html as comp,
  data
};
