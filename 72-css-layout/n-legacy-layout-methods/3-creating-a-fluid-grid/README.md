# Legacy layout methods - Creating a fluid grid

Our grid works nicely, but it has a fixed width. We really want a flexible 
(fluid) grid that will grow and shrink with the available space in the browser 
viewport. To achieve this we can turn the reference pixel widths into 
percentages.

The equation that turns a fixed width into a flexible percentage-based one is as 
follows.

>`target / context = result`

For our column width, our **target width** is 60 pixels and our **context** is 
the 960 pixel wrapper. We can use the following to calculate a percentage.

>`60 / 960 = 0.0625`

We then move the decimal point 2 places giving us a percentage of 6.25%. So, 
in our CSS we can replace the 60 pixel column width with 6.25%.

We need to do the same with our gutter width:
>`20 / 960 = 0.02083333333`

So we need to replace the 20 pixel `margin-left` on our .col rule and the 20 
pixel padding-right on .wrapper with 2.08333333%.

### Updating our grid

body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}

Not only have we given it a percentage `width`, we have also added a `max-width` 
property in order to stop the layout becoming too wide.

Next, update the fourth CSS rule (with the `.col` selector) like so:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```
Now comes the slightly more laborious part — we need to update all our 
`.col.span` rules to use percentages rather than pixel widths. This takes a bit of 
time with a calculator; to save you some effort, we've done it for you below.

Update the bottom block of CSS rules with the following:

```
/* Two column widths (12.5%) plus one gutter width (2.08333333%) */
.col.span2 {
  width: 14.58333333%;
}

/* Three column widths (18.75%) plus two gutter widths (4.1666666) */
.col.span3 {
  width: 22.91666666%;
}

/* And so on… */
.col.span4 {
  width: 31.24999999%;
}
.col.span5 {
  width: 39.58333332%;
}

.col.span6 {
  width: 47.91666665%;
}

.col.span7 {
  width: 56.24999998%;
}

.col.span8 {
  width: 64.58333331%;
}

.col.span9 {
  width: 72.91666664%;
}

.col.span10 {
  width: 81.24999997%;
}

.col.span11 {
  width: 89.5833333%;
}

.col.span12 {
  width: 97.91666663%;
}

```

Now save your code, load it in a browser, and try changing the viewport width 
— you should see the column widths adjust nicely to suit.

Here we are turning each row into a flex container. With a flexbox-based grid 
we still need rows in order to allow us to have elements that add up to less 
than 100%. We set that container to display: flex.

On `.col` we set the flex property's first value (flex-grow) to 1 so our items 
can grow, the second value (flex-shrink) to 1 so the items can shrink, and the 
third value (flex-basis) to auto. As our element has a width set, auto will use 
that width as the flex-basis value.

On the top line we get twelve neat boxes on the grid and they grow and shrink 
equally as we change the viewport width. On the next line, however, we only have 
four items and these also grow and shrink from that 60px basis. With only four of 
them they can grow a lot more than the items in the row above, the result being 
that they all occupy the same width on the second row.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/n-legacy-layout-methods/3-creating-a-fluid-grid/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/n-legacy-layout-methods/3-creating-a-fluid-grid/">Visit website</a>
  </dd>
</dl>
