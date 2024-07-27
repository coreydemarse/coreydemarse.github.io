import{_ as s,o as e,c as n,g as a}from"./app.3cca0e50.js";const h='{"title":"tigerstyle! in bun / typescript","description":"","frontmatter":{"title":"tigerstyle! in bun / typescript","date":"2024-07-27T00:00:00.000Z","author":"Corey DeMarse","gravatar":"74e3ab7e361c4141736de00ad444f90a","twitter":"@coreydemarse"},"headers":[{"level":3,"title":"What the f* is TigerStyle?","slug":"what-the-f-is-tigerstyle"},{"level":3,"title":"The TypeScript flying tiger kick","slug":"the-typescript-flying-tiger-kick"},{"level":3,"title":"Using Zod","slug":"using-zod"},{"level":3,"title":"Congrats","slug":"congrats"}],"relativePath":"posts/tigerstyle-typescript.md","lastUpdated":null}',t={name:"posts/tigerstyle-typescript.md"},o=a(`<p>Exploring TigerStyle! programming in Bun/TypeScript</p><hr><p><a href="/blog.html">&lt;- return to blog</a></p><h1 id="tigerstyle-in-bun-typescript" tabindex="-1">tigerstyle! in bun / typescript <a class="header-anchor" href="#tigerstyle-in-bun-typescript" aria-hidden="true">#</a></h1><p>So, I have been recently getting <a href="https://ziglang.org/" target="_blank" rel="noopener noreferrer">Ziggy With It\u2122</a> and along the way while watching one of the <a href="https://www.youtube.com/watch?v=sC1B3d9C_sI" target="_blank" rel="noopener noreferrer">ThePrimeagen&#39;s videos</a> I discovered something called &quot;TigerStyle Programming&quot;.</p><img src="https://c.tenor.com/5wrqDK3d2hoAAAAC/tenor.gif" alt="drawing" width="200"><h3 id="what-the-f-is-tigerstyle" tabindex="-1">What the f*** is TigerStyle? <a class="header-anchor" href="#what-the-f-is-tigerstyle" aria-hidden="true">#</a></h3><p>This programming martial-art-style came from the creators of <a href="https://tigerbeetle.com/" target="_blank" rel="noopener noreferrer">TigerBeetle</a> - a high performance, fault-tolerant, mission critical database designed for debit / credit card transactions. Surely the creators of a highly fault-tolerant financial transactions database have some wisdom to impart on us.</p><p>This <a href="https://ratfactor.com/cards/tiger-style" target="_blank" rel="noopener noreferrer">handy little article</a> by Dave Gauer broadly describes what TigerStyle is. You can also watch Joran Greef&#39;s talk <a href="https://www.youtube.com/watch?v=w3WYdYyjek4" target="_blank" rel="noopener noreferrer">&quot;TigerStyle! (Or How To Design Safer Systems in Less Time)&quot;</a>.</p><p>tldr - TigerStyle is all about <strong>programming the negative space</strong>.</p><p>Programming the negative space is all about <strong>using assertions to ensure your world-view is correct</strong> while turning your coffee in to beautiful, beautiful code.</p><p>Normally - most programmers use assertions in their test functions. In addition to tests, TigerStyle is about putting assertions directly in your running code to ensure it fails, shuts down, or the error is handled properly so your application does not keep running with a faulty state.</p><p>NASA recommends using a minimum of two <a href="https://en.wikipedia.org/wiki/Assertion_(software_development)#Assertions_for_run-time_checking" target="_blank" rel="noopener noreferrer">runtime assertions</a> per function, as defined in <a href="https://en.wikipedia.org/wiki/The_Power_of_10:_Rules_for_Developing_Safety-Critical_Code" target="_blank" rel="noopener noreferrer">The Power of 10: Rules for Developing Safety-Critical Code </a>.</p><p>You should <strong>always run your assertions in production.</strong></p><h3 id="the-typescript-flying-tiger-kick" tabindex="-1">The TypeScript flying tiger kick <a class="header-anchor" href="#the-typescript-flying-tiger-kick" aria-hidden="true">#</a></h3><br><img src="https://c.tenor.com/WyyK4PrlDvgAAAAd/tenor.gif" width="300"><p>Bringing TigerStyle to TypeScript is extremely simple with <code>bun:test</code>. Since it is built-in to <a href="https://bun.sh" target="_blank" rel="noopener noreferrer">Bun</a>, we don&#39;t need to worry about downloading any packages.</p><p>A simple <code>import { expect } from &#39;bun:test&#39;</code> will do.</p><p>Consider the following code:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const doMoreStuff = async (fruit: string): Promise&lt;boolean&gt; =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;This is a fruit, I swear!&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const doStuff = async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const isFruit: boolean = await doMoreStuff(&#39;apple&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(isFruit)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">doStuff()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>This code is extremly loose and fruit could be anything. Perhaps we want to ensure that when we <code>doMoreStuff()</code> with fruit, it is a specific fruit.</p><p>We could use switch cases or if statements to handle potential edge cases and control flow, but here instead we going to make some simple assertions with a <code>try..catch</code>. This creates a worldview, and throws an error when that worldview is challenged. I find this is much neater and requires much less code.</p><p>Let&#39;s make some simple assertions:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { expect } from &#39;bun:test&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const doMoreStuff = async (fruit: string): Promise&lt;boolean&gt; =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        expect(fruit).toBeOneOf([&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;])</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;This is a fruit, I swear!&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;I don&#39;t like this fruit so it isn&#39;t one.&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const doStuff = async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const isFruit: boolean = await doMoreStuff(&#39;apple&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(isFruit).toBe(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(isFruit)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">doStuff()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Now, we are asserting our worldview as we create our code. We want our program to throw an error when our worldview is challenged as soon as possible so that error can be discovered or handled. It makes it significantly easier to debug your code.</p><h3 id="using-zod" tabindex="-1">Using Zod <a class="header-anchor" href="#using-zod" aria-hidden="true">#</a></h3><p><a href="https://zod.dev" target="_blank" rel="noopener noreferrer">Zod</a> provides an easy way to assert your data at a finer level. For a simple example, we can parse and assert our function arguments to be a UUID.</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { expect } from &quot;bun:test&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { z } from &quot;zod&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const doMoreStuff = async (uuid: string): Promise&lt;boolean&gt; =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        z.string().uuid().parse(uuid)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const doStuff = async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const isUUID: boolean = await doMoreStuff(crypto.randomUUID())</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(isUUID).toBe(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(isUUID)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">doStuff()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="congrats" tabindex="-1">Congrats <a class="header-anchor" href="#congrats" aria-hidden="true">#</a></h3><p>You now possess some TypeScript TigerStyle wisdom!</p><img src="https://c.tenor.com/sGct_C8kYDEAAAAC/tenor.gif" width="300">`,32),r=[o];function l(p,i,c,d,u,g){return e(),n("div",null,r)}var A=s(t,[["render",l]]);export{h as __pageData,A as default};
