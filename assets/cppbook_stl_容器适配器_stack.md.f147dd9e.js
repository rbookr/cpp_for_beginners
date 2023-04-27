import{_ as s,b as n,a,J as l}from"./chunks/framework.218694e7.js";const b=JSON.parse('{"title":"stack","description":"","frontmatter":{"_id":"df528bc2a0","title":"stack","date":"2019-11-20 22:36","update":"2019-11-20 22:36","author":"Rainboy"},"headers":[{"level":2,"title":"\u521B\u5EFA","slug":"\u521B\u5EFA"},{"level":2,"title":"\u64CD\u4F5C","slug":"\u64CD\u4F5C"}],"relativePath":"cppbook/stl/\u5BB9\u5668\u9002\u914D\u5668/stack.md","lastUpdated":1659197332000}'),p={name:"cppbook/stl/\u5BB9\u5668\u9002\u914D\u5668/stack.md"},o=l(`<h1 id="\u9002\u914D\u5668-stack" tabindex="-1">\u9002\u914D\u5668 stack <a class="header-anchor" href="#\u9002\u914D\u5668-stack" aria-hidden="true">#</a></h1><p>C++ STL \u7684\u5806\u6808\u6CDB\u5316\u662F\u76F4\u63A5\u901A\u8FC7\u73B0\u6709\u7684\u5E8F\u5217\u5BB9\u5668\u6765\u5B9E\u73B0\u7684\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u53CC\u7AEF\u961F\u5217deque\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5F53\u7136\uFF0C\u53EF\u4EE5\u91C7\u7528\u5176\u4ED6\u7EBF\u6027\u7ED3\u6784\uFF08vector \u6216 list\u7B49\uFF09\uFF0C\u53EA\u8981\u63D0\u4F9B\u5806\u6808\u7684\u5165\u6808\u3001\u51FA\u6808\u3001\u6808\u9876\u5143\u7D20\u8BBF\u95EE\u548C\u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u7684\u64CD\u4F5C\u5373\u53EF\u3002\u7531\u4E8E\u5806\u6808\u7684\u5E95\u5C42\u4F7F\u7528\u7684\u662F\u5176\u4ED6\u5BB9\u5668\uFF0C\u56E0\u6B64\uFF0C\u5806\u6808\u53EF\u770B\u505A\u662F\u4E00\u79CD\u9002\u914D\u5668\uFF0C\u5C06\u4E00\u79CD\u5BB9\u5668\u8F6C\u6362\u4E3A\u53E6\u4E00\u79CD\u5BB9\u5668(\u5806\u6808\u5BB9\u5668)\u3002</p><p>\u4E3A\u4E86\u4E25\u683C\u9075\u5FAA\u5806\u6808\u7684\u6570\u636E\u540E\u8FDB\u5148\u51FA\u539F\u5219\uFF0Cstack \u4E0D\u63D0\u4F9B\u5143\u7D20\u7684\u4EFB\u4F55\u8FED\u4EE3\u5668\u64CD\u4F5C\uFF0C\u56E0\u6B64\uFF0Cstack \u5BB9\u5668\u4E5F\u5C31\u4E0D\u4F1A\u5411\u5916\u90E8\u63D0\u4F9B\u53EF\u7528\u7684\u524D\u5411\u6216\u53CD\u5411\u8FED\u4EE3\u5668\u7C7B\u578B\u3002 stack\u5806\u6808\u5BB9\u5668\u7684C++\u6807\u51C6\u5934\u6587\u4EF6\u4E3A stack \uFF0C\u5FC5\u987B\u7528\u5B8F\u8BED\u53E5 <code>&quot;#include &lt;stack&gt;&quot;</code> \u5305\u542B\u8FDB\u6765\uFF0C\u624D\u53EF\u5BF9 stack \u5806\u6808\u7684\u7A0B\u5E8F\u8FDB\u884C\u7F16\u8BD1\u3002</p><p>\u539F\u578B\uFF1A</p><div class="language-c line-numbers-mode"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#A6ACCD;">template </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">class T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> class Container </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> deque</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> class stack</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><table><thead><tr><th>\u64CD\u4F5C</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>empty()</td><td>stack\u662F\u5426\u4E3A\u7A7A</td></tr><tr><td>size()</td><td>stack\u5143\u7D20\u4E2A\u6570</td></tr><tr><td>top()</td><td>\u6808\u9876\u5143\u7D20\u7684\u5F15\u7528</td></tr><tr><td>push(val)</td><td>\u538B\u5165\u5143\u7D20 val</td></tr><tr><td>pop()</td><td>\u5F39\u51FA\u5143\u7D20</td></tr></tbody></table><h2 id="\u521B\u5EFA" tabindex="-1">\u521B\u5EFA <a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a></h2><div class="language-c line-numbers-mode"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u5BB9\u5668 \u9002\u914D\u5668</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//stack \u9002\u914D\u5668 \u53EF\u4EE5\u4F7F\u7528\u4EFB</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stack</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">vector</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">deque</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#C792EA;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u9ED8\u8BA4\u7684stack</span></span>
<span class="line"><span style="color:#F07178;">	stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> stk</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">stk3</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">stk</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">	</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//\u4F7F\u7528\u5176\u4ED6\u5BB9\u5668</span></span>
<span class="line"><span style="color:#F07178;">	stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> stk_vec</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">deque</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> stk_deq</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> stk_lis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u64CD\u4F5C" tabindex="-1">\u64CD\u4F5C <a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-c line-numbers-mode"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stack</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">vector</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">deque</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#C792EA;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u9ED8\u8BA4\u7684stack</span></span>
<span class="line"><span style="color:#F07178;">    stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> stk</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">++)</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">stk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">stk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">()){</span></span>
<span class="line"><span style="color:#F07178;">		cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">stk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,10),t=[o];function e(c,r,F,D,y,i){return a(),n("div",null,t)}var d=s(p,[["render",e]]);export{b as __pageData,d as default};
