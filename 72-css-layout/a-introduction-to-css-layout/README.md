# CSS layout - Introduction to CSS layout
CSS page layout techniques allow us to take elements contained in a web 
page and control where they're positioned relative to the following 
factors: their default position in normal layout flow, the other elements 
around them, their parent container, and the main viewport/window. The page 
layout techniques we'll be covering in more detail in this module are:
  - Normal flow
  - The display property
  - Flexbox
  - Grid
  - Floats
  - Positioning
  - Table layout
  - Multiple-column layout

Each technique has its uses, advantages, and disadvantages. No technique is 
designed to be used in isolation. By understanding what each layout method 
is designed for, you'll be in a good position to understand which method is 
most appropriate for each task.

## Normal flow

Normal flow is how the browser lays out HTML pages by default when you do 
nothing to control page layout. An example is showed in this project.

Note how the HTML is displayed in the exact order in which it appears in 
the source code, with elements stacked on top of one another — the first 
paragraph, followed by the unordered list, followed by the second paragraph.

The elements that appear one below the other are described as block elements, 
in contrast to inline elements, which appear beside one another like the 
individual words in a paragraph.

For many of the elements on your page, the normal flow will create exactly 
the layout you need. However, for more complex layouts you will need to 
alter this default behavior using some of the tools available to you in CSS. 
Starting with a well-structured HTML document is very important because you 
can then work with the way things are laid out by default rather than 
fighting against it.

The methods that can change how elements are laid out in CSS are:
  - **The <code>display</code> property** — Standard values such as 
  <code>block</code>, <code>inline</code> or <code>inline-block</code> can 
  change how elements behave in normal flow, for example, by making a 
  block-level element behave like an inline-level element. We also have 
  entire layout methods that are enabled via specific display values, for 
  example, CSS Grid and Flexbox, which alter how child elements are laid out 
  inside their parents.
  - **Floats** — Applying a <code>float</code> value such as <code>left</code> 
  can cause block-level elements to wrap along one side of an element, like the 
  way images sometimes have text floating around them in magazine layouts.
  - **The <code>position</code> property** — Allows you to precisely control 
  the placement of boxes inside other boxes. static positioning is the default 
  in normal flow, but you can cause elements to be laid out differently using 
  other values, for example, as fixed to the top of the browser viewport.
  - **Table layout** — Features designed for styling parts of an HTML table can 
  be used on non-table elements using <code>display: table</code> and associated 
  properties.
  - **Multi-column layout** — The Multi-column layout properties can cause the 
  content of a block to lay out in columns, as you might see in a newspaper.

## The display property

The main methods for achieving page layout in CSS all involve specifying 
values for the <code>display</code> property. This property allows us to 
change the default way something displays. Everything in normal flow has a 
default value for <code>display</code>; i.e., a default way that elements 
are set to behave. For example, the fact that paragraphs in English 
display one below the other is because they are styled with 
<code>display: block</code>. If you create a link around some text inside 
a paragraph, that link remains inline with the rest of the text, and 
doesn't break onto a new line. This is because the <code>&lt;a&gt;</code> 
element is <code>display: inline</code> by default.

You can change this default display behavior. For example, the 
<code>&lt;li&gt;</code> element is <code>display: block</code> by default, 
meaning that list items display one below the other in our English document. 
If we were to change the display value to inline they would display next to 
each other, as words would do in a sentence. The fact that you can change the 
value of display for any element means that you can pick HTML elements for 
their semantic meaning without being concerned about how they will look. The 
way they look is something that you can change.

In addition to being able to change the default presentation by turning 
an item from <code>block</code> to <code>inline</code> and vice versa, 
there are some more involved layout methods that start out as a value of 
display. However, when using these you will generally need to invoke 
additional properties. The two values most important for our discussion 
of layout are <code>display: flex</code> and <code>display: grid</code>.

## Flexbox

Flexbox is the short name for the **Flexible Box Layout** CSS module, 
designed to make it easy for us to lay things out in one dimension — 
either as a row or as a column. To use flexbox, you apply 
<code>display: flex</code> to the parent element of the elements you want 
to lay out; all its direct children then become flex items. We can see this 
in a simple example.

### Setting <code>display: flex</code>

If we add <code>display: flex</code> to the parent, the three items now 
arrange themselves into columns. This is due to them becoming flex items 
and being affected by some initial values that flexbox sets on the flex 
container. They are displayed in a row because the property 
<code>flex-direction</code> of the parent element has an initial value of 
row. They all appear to stretch in height because the property 
<code>align-items</code> of their parent element has an initial value of 
stretch. This means that the items stretch to the height of the flex 
container, which in this case is defined by the tallest item. The items 
all line up at the start of the container, leaving any extra space at the 
end of the row.

### Setting the <code>flex</code> property

There are also properties that can be applied to flex items. These 
properties, among other things, can change the way that items flex, 
enabling them to expand or contract according to available space. 

As a simple example, we can add the <code>flex</code> property to all of 
our child items, and give it a value of <code>1</code>. This will cause 
all of the items to grow and fill the container, rather than leaving space 
at the end. If there is more space then the items will become wider; if 
there is less space they will become narrower. In addition, if you add 
another element to the markup, the other items will all become smaller to 
make space for it; the items all together continue taking up all the space.

## Grid Layout

While flexbox is designed for one-dimensional layout, Grid Layout is 
designed for two dimensions — lining things up in rows and columns.

Setting <code>display: grid</code>

Similar to flexbox, we enable Grid Layout with its specific display 
value — <code>display: grid</code>. In addition to using 
<code>display: grid</code>, we also define some row and column tracks for 
the parent using the <code>grid-template-rows</code> and 
<code>grid-template-columns</code> properties respectively. In this 
example, we've defined three columns, each of 1fr, as well as two rows of 
100px. We don't need to put any rules on the child elements; they're 
automatically placed into the cells our grid's created.

### Placing items on the grid

Once you have a grid, you can explicitly place your items on it, rather 
than relying on the auto-placement behavior seen above.  In the next 
example below, we've defined the same grid, but this time with three 
child items. We've set the start and end line of each item using the 
grid-column and grid-row properties. This causes the items to span 
multiple tracks.

## Floats

Floating an element changes the behavior of that element and the block 
level elements that follow it in normal flow. The floated element is 
moved to the left or right and removed from normal flow, and the 
surrounding content floats around it.

The <code>float</code> property has four possible values:

- <code>left</code> — Floats the element to the left.
- <code>right</code> — Floats the element to the right.
- <code>none</code> — Specifies no floating at all. This is the default value.
- <code>inherit</code> — Specifies that the value of the float property 
should be inherited from the element's parent element.

In the example below, we float a <code>&lt;div&gt;</code> left and give 
it a margin on the right to push the surrounding text away from it. This 
gives us the effect of text wrapped around the boxed element, and is most 
of what you need to know about floats as used in modern web design.

## Positioning techniques

Positioning allows you to move an element from where it would otherwise be 
placed in normal flow over to another location. Positioning isn't a method 
for creating the main layouts of a page; it's more about managing and 
fine-tuning the position of specific items on a page.

There are, however, useful techniques for obtaining specific layout 
patterns that rely on the <code>position</code> property. Understanding positioning 
also helps in understanding normal flow, and what it means to move an item 
out of the normal flow.

There are five types of positioning you should know about:

  - **Static positioning** is the default that every element gets. It just 
  means &quot;put the element into its normal position in the document 
  layout flow — nothing special to see here&quot;.
  - **Relative positioning** allows you to modify an element's position on 
  the page, moving it relative to its position in normal flow, as well as 
  making it overlap other elements on the page.
  - **Absolute positioning** moves an element completely out of the page's 
  normal layout flow, like it's sitting on its own separate layer. From 
  there, you can fix it to a position relative to the edges of its closest 
  positioned ancestor (which becomes <code>&lt;html&gt;</code> if no other 
  ancestors are positioned). This is useful for creating complex layout 
  effects, such as tabbed boxes where different content panels sit on top of 
  one another and are shown and hidden as desired, or information panels that 
  sit off-screen by default, but can be made to slide on screen using a control 
  button.
  - **Fixed positioning** is very similar to absolute positioning except that 
  it fixes an element relative to the browser viewport, not another element. 
  This is useful for creating effects such as a persistent navigation menu that 
  always stays in the same place on the screen as the rest of the content scrolls.
  - **Sticky positioning** is a newer positioning method that makes an 
  element act like position: relative until it hits a defined offset from 
  the viewport, at which point it acts like position: fixed.

### Simple positioning example

To provide familiarity with these page layout techniques, we'll show you a 
couple of quick examples as shown below.

### Relative positioning

Relative positioning allows you to offset an item from its default position 
in normal flow. This means you could achieve a task such as moving an icon 
down a bit so it lines up with a text label. To do this, we could add the 
following rule to add relative positioning:
  ```
  .relative-positioning {
    position: relative;
    top: 30px;
    left: 30px;
  }          
  ```
Here we give our middle paragraph a <code>position</code> value of 
<code>relative</code>. This doesn't do anything on its own, so we also add 
<code>top</code> and <code>left</code> properties. These serve to move the 
affected element down and to the right. This might seem like the opposite 
of what you were expecting, but you need to think of it as the element 
being pushed on its left and top sides, which results in it moving right 
and down.

### Absolute positioning

Absolute positioning is used to completely remove an element from the 
normal flow and instead position it using offsets from the edges of a 
containing block.

Going back to our original non-positioned example, we could add the 
following CSS rule to implement absolute positioning:

  ```
  .absolute-positioning {
    position: absolute;
    top: 30px;
    left: 30px;
  }
  ```
Here we give our middle paragraph a <code>position</code> value of 
<code>absolute</code> and the same top and left properties as before. 

This is very different! The positioned element has now been completely 
separated from the rest of the page layout and sits over the top of it.
The other two paragraphs now sit together as if their positioned sibling 
doesn't exist. The top and left properties have a different effect on 
absolutely positioned elements than they do on relatively positioned 
elements. In this case, the offsets have been calculated from the top 
and left of the page. It is possible to change the parent element that 
becomes this container and we will take a look at that in the lesson on 
positioning.

### Fixed positioning

Fixed positioning removes our element from document flow in the same way 
as absolute positioning. However, instead of the offsets being applied 
from the container, they are applied from the viewport. Because the item 
remains fixed in relation to the viewport, we can create effects such as 
a menu that remains fixed as the page scrolls beneath it.

In this example, we can scroll through the page, as well as a box with 
the property of <code>position: fixed</code>.

### Sticky positioning

Sticky positioning is the final positioning method that we have at our 
disposal. It mixes relative positioning with fixed positioning. When an 
item has position: sticky, it'll scroll in normal flow until it hits 
offsets from the viewport that we have defined. At that point, it becomes 
&quot;stuck&quot; as if it had <code>position: fixed</code> applied.

## Table layout

HTML tables are fine for displaying tabular data, but many years ago — 
before even basic CSS was supported reliably across browsers — web 
developers used to also use tables for entire web page layouts, putting 
their headers, footers, columns, etc. into various table rows and columns.
This worked at the time, but it has many problems: table layouts are 
inflexible, very heavy on markup, difficult to debug, and semantically 
wrong (e.g., screen reader users have problems navigating table layouts).

The way that a table looks on a webpage when you use table markup is due 
to a set of CSS properties that define table layout. These same properties 
can also be used to lay out elements that aren't tables, a use which is 
sometimes described as &quot;using CSS tables&quot;.

The example below shows one such use. It must be noted, that using CSS 
tables for layout should be considered a legacy method at this point, and 
should only be used to support old browsers that lack support for Flexbox 
or Grid.

As for the CSS, most of it's fairly ordinary except for the uses of the 
<code>display</code> property. The <code>&lt;form</code>&gt;, 
<code>&lt;div</code>&gt;, and <code>&lt;label</code>&gt;s and 
<code>&lt;input</code>&gt;s have been told to display like a table, 
table rows, and table cells respectively. Basically, they'll act like HTML 
table markup, causing the labels and inputs to line up nicely by default. 
All we then have to do is add a bit of sizing, margin, etc., to make 
everything look a bit nicer and we're done.

You'll notice that the caption paragraph has been given 
<code>display: table-caption;</code>, which makes it act like a table 
<code>&lt;caption&gt;</code>, and <code>caption-side: bottom;</code> to 
tell the caption to sit on the bottom of the table for styling purposes, 
even though the markup is before the <code>&lt;input&gt;</code> elements 
in the source. This allows for a nice bit of flexibility.

**Note:** Table layout, unlike the other topics of this page, won't be 
further covered in this module due to its legacy application.

## Multi-column layout

The multi-column layout CSS module provides us a way to lay out content 
in columns, similar to how text flows in a newspaper. While reading up 
and down columns is less useful in a web context due to the users having 
to scroll up and down, arranging content into columns can, nevertheless, 
be a useful technique.

To turn a block into a multi-column container, we use either the 
<code>column-count</code> property, which tells the browser how many 
columns we would like to have, or the <code>column-width</code> property, 
which tells the browser to fill the container with as many columns as 
possible of a specified width.

We're using a <code>column-width</code> of 200 pixels on that container, causing the 
browser to create as many 200 pixel columns as will fit. Whatever space 
is left between the columns will be shared.

## Summary

This article has provided a brief summary of all the layout technologies 
you should know about. Read on for more information on each individual 
technology!

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/c-flexbox/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/c-flexbox/">Visit website</a>
  </dd>
</dl>
