import{_ as s,b as n,a,J as l}from"./chunks/framework.218694e7.js";const b=JSON.parse('{"title":"\u5FAA\u73AF\u7ED3\u6784","description":"","frontmatter":{},"headers":[{"level":2,"title":"for\u5FAA\u73AF","slug":"for\u5FAA\u73AF"},{"level":2,"title":"continue \u8BED\u53E5","slug":"continue-\u8BED\u53E5"},{"level":2,"title":"break \u8BED\u53E5","slug":"break-\u8BED\u53E5"},{"level":2,"title":"\u5D4C\u5957\u5FAA\u73AF","slug":"\u5D4C\u5957\u5FAA\u73AF"}],"relativePath":"cppbook/cpp_quick_guide/8-\u5FAA\u73AF\u7ED3\u6784.md","lastUpdated":1659186929000}'),p={name:"cppbook/cpp_quick_guide/8-\u5FAA\u73AF\u7ED3\u6784.md"},o=l(`<h1 id="\u5FAA\u73AF\u7ED3\u6784" tabindex="-1">\u5FAA\u73AF\u7ED3\u6784 <a class="header-anchor" href="#\u5FAA\u73AF\u7ED3\u6784" aria-hidden="true">#</a></h1><p>\u5FAA\u73AF\u6709\u4E09\u79CD\u57FA\u672C\u7684\u5FAA\u73AF\uFF1A</p><ul><li>for\u5FAA\u73AF</li><li>while\u5FAA\u73AF</li><li>do while\u5FAA\u73AF</li></ul><p>\u8FD9\u4E09\u79CD\u5FAA\u73AF\u672C\u8D28\u4E0A\u4E00\u6837\u7684\uFF0C\u53EF\u4EE5\u4E92\u76F8\u8F6C\u6362\u3002</p><h2 id="for\u5FAA\u73AF" tabindex="-1">for\u5FAA\u73AF <a class="header-anchor" href="#for\u5FAA\u73AF" aria-hidden="true">#</a></h2><p>\u8BED\u6CD5\u5982\u4E0B</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> s1 </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> s2 </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> s3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>s1,s2,s3 \u5206\u522B\u8868\u793A \u8BED\u53E51\uFF0C\u8BED\u53E52\uFF0C\u8BED\u53E53</li><li>block \u8868\u793A\u591A\u6761\u8BED\u53E5</li></ul><p>\u5B83\u7684\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B</p><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">            +------+</span></span>
<span class="line"><span style="color:#A6ACCD;">            |  s1  | \u6267\u884C\u4E00\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">            +------+</span></span>
<span class="line"><span style="color:#A6ACCD;">               |</span></span>
<span class="line"><span style="color:#A6ACCD;">               v</span></span>
<span class="line"><span style="color:#A6ACCD;">            +------+         +------+  </span></span>
<span class="line"><span style="color:#A6ACCD;">      +---- |  s2  | &lt;-------|  s3  | &lt;---+</span></span>
<span class="line"><span style="color:#A6ACCD;">      |     +------+         +------+     |</span></span>
<span class="line"><span style="color:#A6ACCD;">      |        | YES                      |</span></span>
<span class="line"><span style="color:#A6ACCD;">      |        v                          |</span></span>
<span class="line"><span style="color:#A6ACCD;">      |    +--------+                     |</span></span>
<span class="line"><span style="color:#A6ACCD;">      |    |  block |---------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">      |    +--------+</span></span>
<span class="line"><span style="color:#A6ACCD;">      +-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">              |</span></span>
<span class="line"><span style="color:#A6ACCD;">              v</span></span>
<span class="line"><span style="color:#A6ACCD;">          +-------+</span></span>
<span class="line"><span style="color:#A6ACCD;">          |  End  |</span></span>
<span class="line"><span style="color:#A6ACCD;">          +-------+</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4F8B\u5B501 \uFF1A\u8F93\u51FA1\u523010\uFF0C\u7136\u540E\u8F93\u51FA10\u52301</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">bits/stdc++.h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u4E07\u80FD\u5934\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">){</span><span style="color:#676E95;font-style:italic;"> //\u8F93\u51FA1 \u5230 10</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;--</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#676E95;font-style:italic;"> //\u8FD9\u4E00\u884C\u6CA1\u6709\u5E26\u62EC\u53F7{}\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //for\u4E0Eif \u4E00\u6837\u9ED8\u8BA4\u63A7\u5236\u4E0B\u9762\u7684\u4E00\u53E5\u8BDD</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4F8B\u5B502 \uFF1A\u8BA1\u7B971\u5230100\u7684\u548C</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">bits/stdc++.h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u4E07\u80FD\u5934\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // sum \u662F\u82F1\u6587[\u6C42\u548C]\u7684\u610F\u601D</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">){</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        sum</span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>\u7279\u522B\u8BF4\u660E\uFF1A</strong> for\u5C0F\u62EC\u53F7\u5185\u7684\u4E09\u6761\u8BED\u53E5\u90FD\u53EF\u4EE5\u5199\u6210\u7A7A\u8BED\u53E5\uFF0C\u770B\u4E0B\u9762\u7684\u4EE3\u7801</p><p>\u4EE3\u78013</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">bits/stdc++.h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u4E07\u80FD\u5934\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        i </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#676E95;font-style:italic;"> // \u60F3\u4E00\u60F3\u8FD9\u4E2Afor\u7684\u8F93\u51FA\u7ED3\u679C\u662F\u4EC0\u4E48</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // \u8FD9\u4E2Afor\u7684 s1 \u662F\u7A7A\u8BED\u53E5 ; \u6267\u884C\u8FD9\u540D\u8BDD\u76F8\u5F53\u4E8E\u4EC0\u4E48\u4E5F\u4EC0\u4E48\u505A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // s2 \u662F\u4E00\u4E2A\u5224\u65AD\u6761\u4EF6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // s3 \u662F\u7A7A\u8BED\u53E5 ; \u6267\u884C\u8FD9\u540D\u8BDD\u76F8\u5F53\u4E8E\u4EC0\u4E48\u4E5F\u4EC0\u4E48\u505A</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\u662F\uFF1A<code>1 3 5 7 9 </code></p><p>\u4EE3\u78014</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">bits/stdc++.h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u4E07\u80FD\u5934\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#676E95;font-style:italic;"> // \u60F3\u4E00\u60F3\u8FD9\u4E2Afor\u7684\u8F93\u51FA\u7ED3\u679C\u662F\u4EC0\u4E48</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // \u8FD9\u4E2Afor\u7684 s1 \u662F\u7A7A\u8BED\u53E5 ; \u6267\u884C\u8FD9\u540D\u8BDD\u76F8\u5F53\u4E8E\u4EC0\u4E48\u4E5F\u4EC0\u4E48\u505A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // s2 \u662F\u4E00\u4E2A\u7A7A\u8BED\u53E5 ; c++ \u8BA4\u4E3A\u7A7A\u8BED\u53E5\u7684\u6761\u4EF6\u662F\u771F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // s3 \u662F\u7A7A\u8BED\u53E5 ; \u6267\u884C\u8FD9\u540D\u8BDD\u76F8\u5F53\u4E8E\u4EC0\u4E48\u4E5F\u4EC0\u4E48\u505A</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\u662F\uFF1A\u65E0\u9650\u8F93\u51FA<code>hello</code>,\u53EF\u4EE5\u6309<code>ctrl + c</code> \u5F3A\u5236\u7EC8\u6B62\u7A0B\u5E8F</p><h2 id="continue-\u8BED\u53E5" tabindex="-1">continue \u8BED\u53E5 <a class="header-anchor" href="#continue-\u8BED\u53E5" aria-hidden="true">#</a></h2><blockquote><p>continue \uFF1A \u7EE7\u7EED\uFF0C\u9047\u5230\u5B83\uFF0C\u8DF3\u8F6C\u5230s3\u53BB\u6267\u884C</p></blockquote><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">bits/stdc++.h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u4E07\u80FD\u5934\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">continue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\u662F\uFF1A<code>1 2 3 4 6 7 8 9 10 </code> \u6CA1\u67095</p><h2 id="break-\u8BED\u53E5" tabindex="-1">break \u8BED\u53E5 <a class="header-anchor" href="#break-\u8BED\u53E5" aria-hidden="true">#</a></h2><blockquote><p>break : \u6253\u65AD\uFF0C\u9047\u5230\u5B83\uFF0C\u7EC8\u6B62\u63A7\u5236break\u7684\u90A3\u4E2Afor\u8BED\u53E5</p></blockquote><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">bits/stdc++.h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u4E07\u80FD\u5934\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\u662F\uFF1A<code>1 2 3 4 </code> \u6CA1\u67095\u548C\u540E\u9762\u7684\u6570\u5B57</p><h2 id="\u5D4C\u5957\u5FAA\u73AF" tabindex="-1">\u5D4C\u5957\u5FAA\u73AF <a class="header-anchor" href="#\u5D4C\u5957\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">bits/stdc++.h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u4E07\u80FD\u5934\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">;++</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">            cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> j </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">1: 1 </span></span>
<span class="line"><span style="color:#A6ACCD;">2: 1 2 </span></span>
<span class="line"><span style="color:#A6ACCD;">3: 1 2 3 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F8B\u5B50\uFF1A\u8F93\u51FA9x9\u4E58\u6CD5\u8868</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">bits/stdc++.h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u4E07\u80FD\u5934\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">;++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">;++</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">            cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;">j </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">1x1=1 </span></span>
<span class="line"><span style="color:#A6ACCD;">2x1=2 2x2=4 </span></span>
<span class="line"><span style="color:#A6ACCD;">3x1=3 3x2=6 3x3=9 </span></span>
<span class="line"><span style="color:#A6ACCD;">4x1=4 4x2=8 4x3=12 4x4=16 </span></span>
<span class="line"><span style="color:#A6ACCD;">5x1=5 5x2=10 5x3=15 5x4=20 5x5=25 </span></span>
<span class="line"><span style="color:#A6ACCD;">6x1=6 6x2=12 6x3=18 6x4=24 6x5=30 6x6=36 </span></span>
<span class="line"><span style="color:#A6ACCD;">7x1=7 7x2=14 7x3=21 7x4=28 7x5=35 7x6=42 7x7=49 </span></span>
<span class="line"><span style="color:#A6ACCD;">8x1=8 8x2=16 8x3=24 8x4=32 8x5=40 8x6=48 8x7=56 8x8=64 </span></span>
<span class="line"><span style="color:#A6ACCD;">9x1=9 9x2=18 9x3=27 9x4=36 9x5=45 9x6=54 9x7=63 9x8=72 9x9=81 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,36),e=[o];function c(t,r,D,y,F,i){return a(),n("div",null,e)}var A=s(p,[["render",c]]);export{b as __pageData,A as default};
