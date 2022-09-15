import{_ as s,c as n,o as a,a as e}from"./app.c41aeefa.js";const u=JSON.parse('{"title":"Language Design","description":"","frontmatter":{},"headers":[{"level":2,"title":"Types","slug":"types","link":"#types","children":[{"level":3,"title":"Type Inference","slug":"type-inference","link":"#type-inference","children":[]}]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[{"level":3,"title":"Special Function Situations","slug":"special-function-situations","link":"#special-function-situations","children":[]}]},{"level":2,"title":"Conditionals","slug":"conditionals","link":"#conditionals","children":[]},{"level":2,"title":"When","slug":"when","link":"#when","children":[]}],"relativePath":"design.md"}'),l={name:"design.md"},o=e(`<ul><li><a href="#language-design">Language Design</a><ul><li><a href="#types">Types</a><ul><li><a href="#type-inference">Type Inference</a></li></ul></li><li><a href="#variables">Variables</a></li><li><a href="#functions">Functions</a><ul><li><a href="#special-function-situations">Special Function Situations</a></li></ul></li><li><a href="#conditionals">Conditionals</a></li><li><a href="#when">When</a></li></ul></li></ul><h1 id="language-design" tabindex="-1">Language Design <a class="header-anchor" href="#language-design" aria-hidden="true">#</a></h1><p>joelang is a strongly typed scripting language focused on easy code writing/reading.</p><p>&quot;Any fool can write code that a computer can understand. Good programmers write code that humans can understand.&quot; \u2013 Martin Fowler</p><h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><ul><li>Numbers <code>123</code>, <code>9,876</code>, <code>100001.0002</code>, <code>3^e2</code></li><li>Strings <code>&#39;foo&#39;</code>, <code>&quot;foo&quot;</code></li><li>Boolean <code>true</code>, <code>false</code></li><li>Nil <code>nil</code></li><li>Path <code>@/path/to/file/relative/to/calling/dir</code>, <code>./path/relative/to/current/file</code> (this will be cross-OS, so Windows paths will use Unix style, eg: use <code>./code/joe/file</code> instead of <code>.\\code\\joe\\file</code></li><li>Array <code>[1, 2, 3]</code>, <code>[&#39;a&#39;, &#39;b&#39;]</code>, <code>[1, 2 if condition, 3]</code></li><li>Tuple <code>&lt;1, &#39;pizza&#39;, 3.14&gt;</code>, <code>&lt;1, &#39;pizza&#39; if they have, 3.14&gt;</code></li><li>POJO (Plain Ol&#39; Joe Object) <code>{a: 1, b: 2 if condition, c: 3}</code></li><li>Switch statements return a value (returns <code>nil</code> if no else case)</li></ul><h3 id="type-inference" tabindex="-1">Type Inference <a class="header-anchor" href="#type-inference" aria-hidden="true">#</a></h3><p>Often the type can be inferred</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const boolean = true; // bool</span></span>
<span class="line"><span style="color:#A6ACCD;">const file = ./foo.joe; // path</span></span>
<span class="line"><span style="color:#A6ACCD;">const num = 3; // number</span></span>
<span class="line"><span style="color:#A6ACCD;">const str = &quot;hello&quot;; // string</span></span>
<span class="line"><span style="color:#A6ACCD;">const ary = [&#39;foo&#39;, &#39;bar&#39;]; // array&lt;string&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const range = 1..10; // array&lt;number&gt; since it&#39;s a range. In joelang, ranges are always inclusive on both sides</span></span>
<span class="line"><span style="color:#A6ACCD;">const tpl = &lt;1, &#39;fun&#39;, 3.4, false, nil&gt;; // tuple</span></span>
<span class="line"><span style="color:#A6ACCD;">const object = {a: 1, b: 2}; // object (POJO - Plain Ol&#39; Joe Object)</span></span>
<span class="line"><span style="color:#A6ACCD;">const myMethod = f {...} // function type (as opposed to a regular function \`f myMethod {}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>If you instantiate a variable without assigning it immediately, a type is required:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let myName: string; // assign after, OK</span></span>
<span class="line"><span style="color:#A6ACCD;">let myName; // error missing type or assigment</span></span>
<span class="line"><span style="color:#A6ACCD;">const myName; // error missing assignment, since constants cannot be reassigned</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><p>Variable names must match this regular expression: <code>[_a-zA-Z][_a-zA-Z0-9]*\\??</code>.</p><p>Some valid variable names include: <code>_</code>, <code>foo345</code>, <code>isDone?</code></p><p>Variable names that end with a <code>?</code> will be a bool, but is not required to used.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// both of these are valid</span></span>
<span class="line"><span style="color:#A6ACCD;">const isDone = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">const isDone? = true;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// this, however, is invalid</span></span>
<span class="line"><span style="color:#A6ACCD;">const num? = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><p>Functions are defined with the <code>f</code> keyword, followed by the function name, optionally arguments, optionally return types, and then curly braces for the body.</p><p>Function names must match this regular expression: <code>[_a-zA-Z][_a-zA-Z0-9]*\\??!?</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// no args, no return</span></span>
<span class="line"><span style="color:#A6ACCD;">f myName {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// args</span></span>
<span class="line"><span style="color:#A6ACCD;">f myName (arg1: number, arg2: MyType, arg3 = true) {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// single return</span></span>
<span class="line"><span style="color:#A6ACCD;">f myName -&gt; string {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// multiple return</span></span>
<span class="line"><span style="color:#A6ACCD;">f myName -&gt; string, number, etc. {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// you can assign a function to a variable (notice the semicolon)</span></span>
<span class="line"><span style="color:#A6ACCD;">const myName = f {...}; // usual things apply: args, return types, etc.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="special-function-situations" tabindex="-1">Special Function Situations <a class="header-anchor" href="#special-function-situations" aria-hidden="true">#</a></h3><p>Function names that end with a <code>?</code> must return a bool, only. But it is not required, and a function that returns a bool does not need the <code>?</code>.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// must return bool</span></span>
<span class="line"><span style="color:#A6ACCD;">f isDone? -&gt; bool {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Functions that (may) throw an error <strong>must</strong> end with a <code>!</code>. Conversely, functions that end with a <code>!</code> must throw an error in at least one situation.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">f danger! {</span></span>
<span class="line"><span style="color:#A6ACCD;">	throw Error if something bad happens;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>If a function returns a bool <strong>and</strong> throws an error, the <code>?</code> preceeds the <code>!</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">f isDone?! {</span></span>
<span class="line"><span style="color:#A6ACCD;">	throw Error if something bad happens;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="conditionals" tabindex="-1">Conditionals <a class="header-anchor" href="#conditionals" aria-hidden="true">#</a></h2><p>If statements can be specified before or after the statement.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// before</span></span>
<span class="line"><span style="color:#A6ACCD;">if someCondition {</span></span>
<span class="line"><span style="color:#A6ACCD;">	do();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if someCondition {</span></span>
<span class="line"><span style="color:#A6ACCD;">	do();</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if otherCondition {</span></span>
<span class="line"><span style="color:#A6ACCD;">	other();</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">	lastResort();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// after</span></span>
<span class="line"><span style="color:#A6ACCD;">do() if someCondition;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// this can be used in arrays</span></span>
<span class="line"><span style="color:#A6ACCD;">[1, 2 if someCondition, 3] // array will either be [1, 2, 3] or [1, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// in tuples</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;1, &#39;fun&#39;, 3.14 if wantPie, false, nil&gt; // same idea</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// and in POJOs</span></span>
<span class="line"><span style="color:#A6ACCD;">{a: 1, b: 2 if condition, c: 3} // \`b\` will not be in object if condition is false</span></span>
<span class="line"><span style="color:#A6ACCD;">// if you want the property to always be there, use a ternary</span></span>
<span class="line"><span style="color:#A6ACCD;">{a: 1, b: condition ? 2 : 0, c: 3} // \`b\` will definitely be in object</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="when" tabindex="-1">When <a class="header-anchor" href="#when" aria-hidden="true">#</a></h2><p>Pattern matching is done with the <code>when</code> keyword.</p><p>Each branch can be one or more values, a range or array of possible values, or <code>...</code> for anything else (similar to <code>default</code> in C-type languages)</p><p>The types of each values must match the type of the conditional variable. The return type of each branch must be the same.</p><p>The <code>when</code> structure will always return a value, which may be captured in a variable or returned.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// set a string variable</span></span>
<span class="line"><span style="color:#A6ACCD;">const size = when someNumber {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// if someNumber is 1 or 2</span></span>
<span class="line"><span style="color:#A6ACCD;">	1, 2 -&gt; &#39;small&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// between 3 and 10 (inclusive)</span></span>
<span class="line"><span style="color:#A6ACCD;">	3..10 -&gt; &#39;medium&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// do stuff before, and use explicit return</span></span>
<span class="line"><span style="color:#A6ACCD;">	11 -&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		doThing1();</span></span>
<span class="line"><span style="color:#A6ACCD;">		doThing2();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">		return &#39;large&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// or call a function, whose return value will be used</span></span>
<span class="line"><span style="color:#A6ACCD;">	12 -&gt; someFunction(),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// any other value</span></span>
<span class="line"><span style="color:#A6ACCD;">	... -&gt; &#39;off the charts&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \`when\`s don&#39;t have to return anything</span></span>
<span class="line"><span style="color:#A6ACCD;">when someNumber {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// call a function</span></span>
<span class="line"><span style="color:#A6ACCD;">	1, 2 -&gt; small(),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	3..10 -&gt; medium(),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// fallback function to call</span></span>
<span class="line"><span style="color:#A6ACCD;">	... -&gt; offTheCharts(),</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// if you need to do multiple things in a branch, wrap in braces</span></span>
<span class="line"><span style="color:#A6ACCD;">when someNumber {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// call a function</span></span>
<span class="line"><span style="color:#A6ACCD;">	1, 2 -&gt; somethingSimple(),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	3..10 -&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		doComplicatedThing1();</span></span>
<span class="line"><span style="color:#A6ACCD;">		doComplicatedThing2();</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// fallback function to call</span></span>
<span class="line"><span style="color:#A6ACCD;">	... -&gt; offTheCharts(),</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// returning</span></span>
<span class="line"><span style="color:#A6ACCD;">f foo {</span></span>
<span class="line"><span style="color:#A6ACCD;">	return when ... { ... };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,36),p=[o];function t(c,i,r,C,d,A){return a(),n("div",null,p)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
