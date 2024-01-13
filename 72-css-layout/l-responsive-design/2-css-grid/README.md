# CSS layout - Responsive design: A simple grid-based responsive design

In CSS Grid Layout the `fr` unit allows the distribution of available space 
across grid tracks. The next example creates a grid container with three tracks 
sized at 1fr. This will create three column tracks, each taking one part of the 
available space in the container. You can find out more about this approach to 
create a grid in the Learn Layout Grids topic, under 
[Flexible grids with the fr unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids#flexible_grids_with_the_fr_unit).

```
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/l-responsive-design/2-css-grid/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/l-responsive-design/2-css-grid/">Visit website</a>
  </dd>
</dl>
