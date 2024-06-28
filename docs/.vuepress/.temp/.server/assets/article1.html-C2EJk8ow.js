import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Ds0T57Ln.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="article-1" tabindex="-1"><a class="header-anchor" href="#article-1"><span>Article 1</span></a></h1><h2 id="heading-2" tabindex="-1"><a class="header-anchor" href="#heading-2"><span>Heading 2</span></a></h2><p>Here is the content.</p><h3 id="heading-3" tabindex="-1"><a class="header-anchor" href="#heading-3"><span>Heading 3</span></a></h3><p>Here is the content.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/article1.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const article1_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "article1.html.vue"]]);
const data = JSON.parse('{"path":"/posts/article1.html","title":"Article 1","lang":"en-US","frontmatter":{"date":"2022-01-01T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"]},"headers":[{"level":2,"title":"Heading 2","slug":"heading-2","link":"#heading-2","children":[{"level":3,"title":"Heading 3","slug":"heading-3","link":"#heading-3","children":[]}]}],"git":{},"filePathRelative":"posts/article1.md","excerpt":"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n"}');
export {
  article1_html as comp,
  data
};
