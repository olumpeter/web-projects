# CSS layout - Normal Flow
Elements on a webpage lay out in normal flow if you haven't applied 
any CSS to change the way they behave. You can change how elements 
behave either by adjusting their position in normal flow or by removing 
them from it altogether. Starting with a solid, well-structured document 
that's readable in normal flow is the best way to begin any webpage. It 
ensures that your content is readable even if the user's using a very 
limited browser or a device such as a screen reader that reads out the 
content of the page. In addition, since normal flow is designed to make a 
readable document, by starting in this way you're working with the document 
rather than struggling against it as you make changes to the layout.

Before digging deeper into different layout methods, it's worth revisiting 
some of the things you have studied in previous modules with regard to normal 
document flow.

## How are elements laid out by default?

The process begins as the boxes of individual elements are laid out in 
such a way that any padding, border, or margin they happen to have is 
added to their content. This is what we call the **box model**.

By default, a **block-level element's** content fills the available inline 
space of the parent element containing it, growing along the block dimension 
to accommodate its content. The size of **inline-level** elements is just 
the size of their content. You can set <code>width</code> or <code>height</code> 
on some elements that have a default <code>display</code> property value of inline, 
like <code>&lt;img&gt;</code>, but <code>display</code> value will still 
remain <code>inline</code>.

If you want to control the <code>display</code> property of an inline-level 
element in this manner, use CSS to set it to behave like a block-level element 
(e.g., with <code>display: block;</code> or <code>display: inline-block;</code>, 
which mixes characteristics from both).

That explains how elements are structured individually, but how about the 
way they're structured when they interact with one another? The normal 
layout flow (mentioned in the layout introduction article) is the system by 
which elements are placed inside the browser's viewport. 

By default, block-level elements are laid out in the *block flow direction*, 
which is based on the parent's **writing mode** (*initial*: 
<code>horizontal-tb</code>). Each element will appear on a new line below the 
last one, with each one separated by whatever margin that's been specified. 
In English, for example, (or any other horizontal, top to bottom writing mode) 
block-level elements are laid out vertically.

Inline elements behave differently. They don't appear on new lines; instead, 
they all sit on the same line along with any adjacent (or wrapped) text content 
as long as there is space for them to do so inside the width of the parent 
block level element. If there isn't space, then the overflowing content will 
move down to a new line.

If two vertically adjacent elements both have a margin set on them and their 
margins touch, the larger of the two margins remains and the smaller one 
disappears. This is known as **margin collapsing**. Collapsing margins is 
only relevant in the vertical direction.

This is known as margin collapsing. Collapsing margins is only relevant in 
the vertical direction.

## Summary
In this lesson you've learned the basics of normal flow — the default layout 
for CSS elements. By understanding how inline elements, block elements, and 
margins behave by default, it'll be easier to modify their behavior in the 
future.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/b-normal-flow/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/b-normal-flow/">Visit website</a>
  </dd>
</dl>
