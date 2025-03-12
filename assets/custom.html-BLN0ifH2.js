import{_ as s,c as a,b as t,o as n}from"./app-DiMD2xtl.js";const i={};function l(r,e){return n(),a("div",null,e[0]||(e[0]=[t(`<h3 id="custom-filters" tabindex="-1"><a class="header-anchor" href="#custom-filters"><span>Custom Filters</span></a></h3><p>Create a custom filter class by this command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">php artisan make:filter EqualFilter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>this will generate a filter class in <code>Filters</code> directory. By default, all classes defined in <code>Filters</code> directory are loaded into the package. you can change scan folder location in purity config file.</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token comment">// configs/purity.php</span></span>
<span class="line"></span>
<span class="line"><span class="token string single-quoted-string">&#39;custom_filters_location&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">app_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Filters&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const o=s(i,[["render",l],["__file","custom.html.vue"]]),p=JSON.parse('{"path":"/advanced/filter/custom.html","title":"Custom Filters","lang":"en-US","frontmatter":{"title":"Custom Filters","prev":{"text":"Restrict Filter","link":"/advanced/filter/restrict"},"next":{"text":"Null sort","link":"/advanced/sort/null-sort"}},"headers":[{"level":3,"title":"Custom Filters","slug":"custom-filters","link":"#custom-filters","children":[]}],"git":{"updatedTime":1718394722000,"contributors":[{"name":"Abbas mkhzomi","email":"amkhzomi@gmail.com","commits":2}]},"filePathRelative":"advanced/filter/custom.md"}');export{o as comp,p as data};
