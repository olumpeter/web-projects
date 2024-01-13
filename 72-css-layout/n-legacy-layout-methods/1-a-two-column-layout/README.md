# Legacy layout methods - A two column layout

Let's start with the simplest possible example — a two column layout. 

Each one of the columns needs an outer element to contain its content and let 
us manipulate all of it at once. In this example case we've chosen &lt;div&gt;s, 
but you could choose something more semantically appropriate like &lt;article&gt;s, 
&lt;section&gt;s, and &lt;aside&gt;, or whatever.

Now for the CSS. First, of all, apply the following to your HTML to provide 
some basic setup:

```
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}      
```

The body will be 90% of the viewport wide until it gets to 900px wide, in which 
case it will stay fixed at this width and center itself in the viewport. By 
default, its children (the `h1` and the two `&lt;div&gt;`s) will span 100% of the 
width of the body. If we want the two &lt;div&gt;s to be floated alongside one 
another, we need to set their widths to total 100% of the width of their parent 
element or smaller so they can fit alongside one another. Add the following to 
the bottom of your CSS:

```
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

You'll notice here that we are using percentages for all the widths — this 
is quite a good strategy, as it creates a liquid layout, one that adjusts to 
different screen sizes and keeps the same proportions for the column widths at 
smaller screen sizes. Try adjusting the width of your browser window to see for 
yourself. This is a valuable tool for responsive web design.

## Creating simple legacy grid frameworks

The majority of legacy frameworks use the behavior of the float property to 
float one column up next to another in order to create something that looks 
like a grid. Working through the process of creating a grid with floats shows 
you how this works and also introduces some more advanced concepts to build on 
the things you learned in the lesson on [floats and clearing](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats).

## A simple fixed width grid

Lets first create a grid system that uses fixed width columns.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/m-beginners-guide-to-media-queries/n-legacy-layout-methods/1-a-two-column-layout/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/m-beginners-guide-to-media-queries/n-legacy-layout-methods/1-a-two-column-layout/">Visit website</a>
  </dd>
</dl>
