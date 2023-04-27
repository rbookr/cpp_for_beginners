import{_ as s,b as n,a,J as l}from"./chunks/framework.218694e7.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"rbook/merge_sort/index.md","lastUpdated":null}'),p={name:"rbook/merge_sort/index.md"},o=l(`<div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">6</span></span>
<span class="line"><span style="color:#A6ACCD;">5 4 2 6 3 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//2022-11-19 10:01 by rainboy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">algorithm</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">10000</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">10000</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> c_idx</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">push_c</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    c</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">c_idx</span><span style="color:#89DDFF;">]=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    c_idx</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//int x[] --&gt; int * x</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">merge</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">[],</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> len1</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">[],</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> len2</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> len1 </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> len2 </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">]){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">push_c</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#F07178;">            i</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">push_c</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#F07178;">            j</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> k </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">len1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">push_c</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> k </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">len2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">push_c</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">merge_sort</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> l</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> l </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> mid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">merge_sort</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mid</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">merge_sort</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //-----\u8FD9\u91CC \u4EE3\u8868</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // [l,mid] \u6709\u5E8F, [mid+1,r] \u6709\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">    c_idx</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">merge</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,&amp;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">mid</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    c_idx</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">c_idx</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">        c_idx</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">cin </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">cin </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">merge_sort</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div>`,2),e=[o];function c(r,t,D,F,y,C){return a(),n("div",null,e)}var b=s(p,[["render",c]]);export{i as __pageData,b as default};
