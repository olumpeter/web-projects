# Studying permissive code

This web project is meant to study the permissive nature of HTML code. By permissive, I mean that HTML is doesn't suffer from <strong>syntax error</strong>. This means that the page still displays even if there are syntax errors in the HTML code. Syntax errors are spelling or punctuation errors in your code that actually cause the program not to run

The code in this webpage is deliberately written with some built-in errors for us to explore (the HTML markup is said to be badly-formed, as opposed to well-formed).

## A review of the problems
<ul>
  <li>The paragraph and list item elements have no closing tags. Looking at the image above, this doesn't seem to have affected the markup rendering too badly, as it is easy to infer where one element should end and another should begin.</li>
  <li>The first <code>&lt;strong&gt;</code> element has no closing tag. This is a bit more problematic, as it isn't easy to tell where the element is supposed to end. In fact, the whole of the rest of the text has been strongly emphasized.</li>
  <li>This section is badly nested: <code>&lt;strong&gt;strong &lt;em&gt;strong emphasized?&lt;/strong&gt; what is this?&lt;/em&lt;.</code> It is not easy to tell how this has been interpreted because of the previous problem.</li>
  <li>The <code>href</code> attribute value is missing a closing double quote. This seems to have caused the biggest problem — the link has not rendered at all.</li>
</ul>

 ## How you can access this live website
<p>Use the following URL:</p>
<ul>
  <li>https://olumpeter.github.io/web-projects/25-studying-permissive-code/</li>
</ul>
<p>or click the following link:</p> 
<ul>
  <li><a href="https://olumpeter.github.io/web-projects/25-studying-permissive-code/">
    Visit website</a></li>
</ul>
