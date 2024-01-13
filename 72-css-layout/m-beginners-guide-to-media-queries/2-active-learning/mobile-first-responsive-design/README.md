# CSS layout - Beginner's guide to media queries: Active learning - mobile first responsive design

Broadly, you can take two approaches to a responsive design. You can start with 
your desktop or widest view and then add breakpoints to move things around as 
the viewport becomes smaller, or you can start with the smallest view and add 
layout as the viewport becomes larger. This second approach is described as 
**mobile first** responsive design and is quite often the best approach to follow.

The view for the very smallest devices is quite often a simple single column of 
content, much as it appears in normal flow. This means that you probably don't 
need to do a lot of layout for small devices — order your source well and you 
will have a readable layout by default.

### Walkthrough: a simple mobile-first layout

#### Step 1:

Our starting point is an HTML document with some CSS applied to add background 
colors to the various parts of the layout.

We've made no layout changes, however the source of the document is ordered in 
a way that makes the content readable. This is an important first step and one 
which ensures that if the content were to be read out by a screen reader, it 
would be understandable.

This simple layout also works well on mobile. If we view the layout in 
Responsive Design Mode in DevTools we can see that it works pretty well as a 
straightforward mobile view of the site.

#### Step 2

From this point, start to drag the Responsive Design Mode view wider until 
you can see that the line lengths are becoming quite long, and we have space 
for the navigation to display in a horizontal line. This is where we'll add our 
first media query. We'll use ems, as this will mean that if the user has 
increased their text size, the breakpoint will happen at a similar line-length 
but wider viewport, than someone with a smaller text size.

**Add the below code into the bottom of your step1.html CSS.**

```
@media screen and (min-width: 40em) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  nav ul {
    display: flex;
  }

  nav li {
    flex: 1;
  }
}
```

#### Step 3

This CSS gives us a two-column layout inside the article, of the article content 
and related information in the aside element. We have also used flexbox to put 
the navigation into a row.

Let's continue to expand the width until we feel there is enough room for the 
sidebar to also form a new column. Inside a media query we'll make the main 
element into a two column grid. We then need to remove the margin-bottom on 
the article in order that the two sidebars align with each other, and we'll 
add a border to the top of the footer. Typically these small tweaks are the 
kind of thing you will do to make the design look good at each breakpoint.

**Again, add the below code into the bottom of your step1.html CSS.**

```
@media screen and (min-width: 70em) {
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  article {
    margin-bottom: 0;
  }

  footer {
    border-top: 1px solid #ccc;
    margin-top: 2em;
  }
}
```

If you look at the final example at different widths you can see how the design 
responds and works as a single column, two columns, or three columns, depending 
on the available width. This is a very simple example of a mobile first 
responsive design.

## The viewport meta tag

If you look at the HTML source in the above example, you'll see the following 
element included in the head of the document:

```
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot;/>
```

This is the [viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) — 
it exists as a way to control how mobile browsers render content. This is needed 
because by default, most mobile browsers lie about their viewport width. 
Non-responsive sites commonly look really bad when rendered in a narrow viewport, 
so mobile browsers usually render the site with a viewport width wider than the 
real device width by default (usually 980 pixels), and then shrink the rendered 
result so that it fits in the display.

This is all well and good, but it means that responsive sites are not going to 
work as expected. If the viewport width is reported as 980 pixels, then mobile 
layouts (for example created using a media query of @media screen and 
(max-width: 600px) { }) are not going to render as expected.

To remedy this, including a viewport meta tag like the one above on your page 
tells the browser &quot;don't render the content with a 980 pixel viewport — 
render it using the real device width instead, and set a default initial scale 
level for better consistency.&quot; The media queries will then kick in as 
expected.

## Do you really need a media query?

Flexbox, Grid, and multi-column layout all give you ways to create flexible and 
even responsive components without the need for a media query. It's always worth 
considering whether these layout methods can achieve what you want without 
adding media queries. For example, you might want a set of cards that are at 
least 200 pixels wide, with as many of these 200 pixels as will fit into the 
main article. This can be achieved with grid layout, using no media queries at all.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/m-beginners-guide-to-media-queries/2-active-learning/mobile-first-responsive-design/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/m-beginners-guide-to-media-queries/2-active-learning/mobile-first-responsive-design/">Visit website</a>
  </dd>
</dl>
