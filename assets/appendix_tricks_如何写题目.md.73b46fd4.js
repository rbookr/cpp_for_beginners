import{_ as l,b as i,a as e,J as t}from"./chunks/framework.218694e7.js";const b=JSON.parse('{"title":"\u5199\u9898\u76EE\u7684\u6B65\u9AA4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5199\u9898\u76EE\u7684\u6B65\u9AA4","slug":"\u5199\u9898\u76EE\u7684\u6B65\u9AA4"},{"level":2,"title":"\u5982\u679C\u4E00\u4E2A\u9898\u76EE\u4F60\u4E0D\u4F1A,\u6309\u4E0B\u9762\u505A","slug":"\u5982\u679C\u4E00\u4E2A\u9898\u76EE\u4F60\u4E0D\u4F1A-\u6309\u4E0B\u9762\u505A"},{"level":2,"title":"\u5982\u4F55\u5728ubuntu20.04 \u4E0B\u5199\u9898\u76EE","slug":"\u5982\u4F55\u5728ubuntu20-04-\u4E0B\u5199\u9898\u76EE"}],"relativePath":"appendix/tricks/\u5982\u4F55\u5199\u9898\u76EE.md","lastUpdated":1665884531000}'),a={name:"appendix/tricks/\u5982\u4F55\u5199\u9898\u76EE.md"},o=t('<h2 id="\u5199\u9898\u76EE\u7684\u6B65\u9AA4" tabindex="-1">\u5199\u9898\u76EE\u7684\u6B65\u9AA4 <a class="header-anchor" href="#\u5199\u9898\u76EE\u7684\u6B65\u9AA4" aria-hidden="true">#</a></h2><ol><li>\u4ED4\u7EC6\u770B\u9898\u76EE1\u904D,\u770B\u61C2\u9898\u76EE\u7684\u8868\u8FBE\u610F\u601D</li><li>\u770B\u9898\u76EE2\u904D,\u786E\u5B9A\u6CA1\u6709\u770B\u9519</li><li>\u770B\u4E00\u4E2A\u6570\u636E\u8303\u56F4</li><li>\u9700\u8981\u7EB8\u548C\u7B14,\u628A\u6837\u4F8B\u7B97\u51FA\u4E86 <ol><li>\u9A8C\u8BC1\u81EA\u5DF1\u7684\u60F3\u6CD5\u5BF9\u4E0D\u5BF9</li><li>\u5982\u679C\u6CA1\u6709\u601D\u8DEF,\u901A\u8FC7\u6837\u4F8B,\u8BF4\u4E0D\u5B9A\u80FD\u60F3\u51FA\u6765</li><li>\u518D\u6B21\u901A\u8FC7\u8BA1\u7B97,\u6765\u786E\u5B9A\u9898\u76EE\u6CA1\u6709\u770B\u9519</li></ol></li><li>\u5199\u521D\u6B65\u4EE3\u7801</li><li>\u4F7F\u7528\u6837\u4F8B\u6D4B\u8BD5,\u5982\u679C\u6CA1\u6709\u901A\u8FC7\u5C31\u6539\u4EE3\u7801,\u901A\u8FC7\u6837\u4F8B,\u5C31\u6267\u884C\u4E0B\u9762\u7684\u6B65\u9AA4</li><li>\u81EA\u5DF1\u627E\u51E0\u4E2A\u6570\u636E,\u6700\u597D\u6709\u7279\u70B9,\u518D\u6D4B\u8BD5</li><li>\u6700\u7EC8\u5175\u5668:\u5BF9\u62CD(\u8FD9\u8981\u5355\u72EC\u62FF\u51FA\u6765\u8BF4)</li></ol><h2 id="\u5982\u679C\u4E00\u4E2A\u9898\u76EE\u4F60\u4E0D\u4F1A-\u6309\u4E0B\u9762\u505A" tabindex="-1">\u5982\u679C\u4E00\u4E2A\u9898\u76EE\u4F60\u4E0D\u4F1A,\u6309\u4E0B\u9762\u505A <a class="header-anchor" href="#\u5982\u679C\u4E00\u4E2A\u9898\u76EE\u4F60\u4E0D\u4F1A-\u6309\u4E0B\u9762\u505A" aria-hidden="true">#</a></h2><p>\u600E\u4E48\u81EA\u5DF1\u628A\u9898\u76EE\u5F04\u4F1A:</p><p>\u9488\u5BF9\u8FD9\u4E2A\u9898\u76EE <a href="https://www.luogu.com.cn/problem/P7073" target="_blank" rel="noreferrer">https://www.luogu.com.cn/problem/P7073</a></p><ol><li>\u4E0D\u4F1A\u540E\u7F00\u8868\u8FBE\u5F0F <ul><li>\u767E\u5EA6\u4E4B,\u5F53\u7136google\u66F4\u597D <a href="https://www.ooopn.com/" target="_blank" rel="noreferrer">https://www.ooopn.com/</a></li><li>\u591A\u770B\u51E0\u7BC7,\u5C31\u4F1A\u4E86</li></ul></li><li>\u5C31\u53EF\u4EE5\u8FC730%\u7684\u6570\u636E\u4E86,\u89C1\u6211\u5199\u7684\u4EE3\u78011</li><li>\u6CE8\u610F(\u601D\u60F3\u95EE\u9898): <ul><li>\u4F60\u662F\u901A\u8FC7\u5199\u9898\u76EE\u6765\u5B66\u4E60\u7684,\u4F60\u662F\u901A\u8FC7\u9898\u76EE\u6765\u5B8C\u5584\u81EA\u5DF1\u7684</li><li>\u4F60\u4E0D\u8981\u6709\u4E86 \u6BD5\u5176\u529F\u4E8E\u4E00\u5F79 \u8FD9\u79CD\u601D\u60F3,\u5C31\u662F\u9898\u76EE\u4E00\u4E0B\u5B50\u5C31\u80FD\u5199\u51FA\u6765,\u5C31\u662F\u4E0D\u53EF\u80FD\u7684.</li><li>\u4E0D\u8981\u7126\u8E81,\u4E00\u4E2A\u9898\u76EE\u53EF\u4EE5\u5199\u5F88\u957F\u65F6\u95F4,\u6211\u66FE\u7ECF\u4E00\u4E2A\u9898\u76EE\u5199\u4E00\u4E2A\u6708(\u4E00\u4E2A\u661F\u671F),\u78E8\u5200\u4E0D\u8BEF\u780D\u67F4\u5DE5</li></ul></li><li>\u600E\u4E48\u770B\u9898\u76EE\u89E3\u6790 <ul><li>\u76F4\u63A5\u770Bluogu,\u6216 google\u641C\u7D22\u4E4B</li><li>\u770B\u61C2,\u4F46\u4E0D\u4E00\u5B9A</li><li>\u5982\u679C\u770B\u4E86\u4E4B\u540E,\u6709\u70B9\u7075\u611F\u4E86,\u627E\u4E2A\u7EB8,\u753B\u56FE,\u6F14\u7B97,\u8FD8\u53EF\u4EE5\u5199\u4EE3\u7801\u6F14\u7B97,\u76F4\u5230\u5F04\u61C2</li><li>\u53EF\u4EE5\u770B\u522B\u4EBA\u5199\u7684\u4EE3\u7801,\u8C03\u8BD5\u522B\u4EBA\u5199\u7684\u4EE3\u7801,\u6765\u5F04\u61C2\u5B83</li></ul></li><li>\u6700\u540E\u81EA\u5DF1\u5199\u4EE3\u7801</li></ol><p>!!!!!!! \u5982\u679C\u7ECF\u8FC7\u4E0A\u9762\u7684\u8FC7\u7A0B,\u4F60\u8FD8\u662F\u4E0D\u4F1A,\u90A3\u8BE5\u600E\u4E48\u529E?</p><p>\u4F60\u5E94\u8BE5\u628A\u4F60\u4E0D\u4F1A\u4E1C\u897F,\u8BE6\u7EC6\u7684\u5199\u4E0B\u6765(\u80FD\u8BA9\u6211\u6216\u81EA\u5DF1\u542C\u61C2),\u7136\u540E\u95EE\u6211</p><h2 id="\u5982\u4F55\u5728ubuntu20-04-\u4E0B\u5199\u9898\u76EE" tabindex="-1">\u5982\u4F55\u5728ubuntu20.04 \u4E0B\u5199\u9898\u76EE <a class="header-anchor" href="#\u5982\u4F55\u5728ubuntu20-04-\u4E0B\u5199\u9898\u76EE" aria-hidden="true">#</a></h2><p>\u51E0\u4E2A\u5E38\u7528\u7684\u5FEB\u6377\u952E</p><ol><li><kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>t</kbd> \u6253\u5F00\u7EC8\u7AEF</li><li><kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>\u2B06\uFE0F</kbd>,<kbd>\u2B07\uFE0F</kbd> \u5207\u6362\u684C\u9762</li><li><code>g++ -g -o 1 1.cpp &amp;&amp; ./1 &lt; in</code> \u7F16\u8BD1\u5E76\u8FD0\u884C</li><li>\u7ED3\u5408<a href="./../utils/scripts/">\u5E38\u7528\u811A\u672C</a>\u4F7F\u7528</li></ol><p>\u5F00\u4E09\u4E2A\u684C\u9762:</p><ol><li>\u7B2C\u4E00\u4E2A\u684C\u9762\u6253\u5F00\u6D4F\u89C8\u5668\u770B\u9898\u76EE</li><li>\u7B2C\u4E8C\u4E2A\u684C\u9762\u6253\u5F00vscode\u5199\u4EE3\u7801</li><li>\u7B2C\u4E09\u4E2A\u7F16\u8BD1\u4E0E\u8C03\u8BD5</li></ol>',13),r=[o];function d(n,p,s,u,c,_){return e(),i("div",null,r)}var k=l(a,[["render",d]]);export{b as __pageData,k as default};
