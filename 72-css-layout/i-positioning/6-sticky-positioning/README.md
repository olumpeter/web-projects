# CSS layout - Positioning: Sticky positioning
      
There is another position value available called `position: sticky`, which 
is somewhat newer than the others. This is basically a hybrid between 
relative and fixed position. It allows a positioned element to act like 
it's relatively positioned until it's scrolled to a certain threshold 
(e.g., 10px from the top of the viewport), after which it becomes fixed.

## Basic example

Sticky positioning can be used, for example, to cause a navigation bar to 
scroll with the page until a certain point and then stick to the top of the 
page.

```
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

### Scrolling index

An interesting and common use of position: sticky is to create a scrolling 
index page where different headings stick to the top of the page as they 
reach it. The markup for such an example might look like so:


## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/i-positioning/6-sticky-positioning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/i-positioning/6-sticky-positioning/">Visit website</a>
  </dd>
</dl>
