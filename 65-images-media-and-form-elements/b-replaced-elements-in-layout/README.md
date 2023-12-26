# Images, media, and form elements: Replaced elements in layout

When using various CSS layout techniques on replaced elements, you may well find that they behave slightly differently from other elements. For example, in a <code>flex</code> or <code>grid</code> layout elements are stretched by default to fill the entire area. Images will not stretch, and instead will be aligned to the start of the grid area or flex container.

In this project, you can see this happening in the example below where we have a two column, two row grid container, which has four items in it. All of the <code>&lt;div&gt;</code> elements have a background color and stretch to fill the row and column. The image, however, does not stretch.
    
Just keep in mind that replaced elements, when they become part of a grid or flex layout, have different default behaviors, essentially to avoid them being stretched strangely by the layout.
    
To force the image to stretch to fill the grid cell it is in, you'd have to do something like the following:

<code>
img {
  width: 100%;
  height: 100%;
}
</code>
    
This would, however, stretch the image, so it's probably not what you'd want to do.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/65-images-media-and-form-elements/b-replaced-elements-in-layout/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/65-images-media-and-form-elements/b-replaced-elements-in-layout/">Visit website</a>
  </dd>
</dl>
