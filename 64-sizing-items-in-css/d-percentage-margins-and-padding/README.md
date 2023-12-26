# Sizing items in CSS: Percentage <code>margins</code> and <code>padding</code>

If you set <code>margin</code> and <code>padding</code> as a percentage, you may notice some strange behavior. 

In this project we have a box. We have given the inner box a <code>margin</code> of <code>10%</code> and a <code>padding</code> of 10%. The padding and margin on the <code>top</code> and <code>bottom</code> of the box are the same size as the <code>padding</code> and <code>margin</code> on the <code>left</code> and <code>right</code>. 
    
You might expect for example the percentage <code>top</code> and <code>bottom</code> margins to be a percentage of the element's <code>height</code>, and the percentage <code>left</code> and <code>right</code> margins to be a percentage of the element's <code>width</code>. However, this is not the case!

**When you use <code>margin</code> and <code>padding</code> set in percentages, the value is calculated from the inline size of the containing block — therefore the width when working in a horizontal language.**

In our example, all of the <code>margin</code>s and <code>padding</code> are <code>10%</code> of the <code>width</code>. This means you can have equal-sized <code>margin</code>s and <code>padding</code> all around the box. This is a fact worth remembering if you do use percentages in this way.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/64-sizing-items-in-css/d-percentage-margins-and-padding/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/64-sizing-items-in-css/d-percentage-margins-and-padding/">Visit website</a>
  </dd>
</dl>
