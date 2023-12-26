# Sizing items in CSS: The natural or intrinsic size of things

HTML Elements have a natural size, set before they are affected by any CSS. A straightforward example is an image. An image file contains sizing information, described as its intrinsic size. This size is determined by the image itself, not by any formatting we happen to apply.
    
If you place an image on a page and do not change its <code>height</code> or <code>width</code>, either by using attributes on the <code>&lt;img&gt;</code> tag or else by CSS, it will be displayed using that intrinsic size. We have given the image in this project a <code>border</code> so that you can see the extent of its size as defined in its file.
    
An empty <code>&lt;div&gt;</code>, on the other hand, has no <code>size</code> of its own. If you add a <code>&lt;div&gt;</code> to your HTML with no content, then give it a <code>border</code> as we did with the image, you will see a line on the page. This is the collapsed <code>border</code> on the element — there is no content to hold it open. 
    
In the second example, that <code>border</code> stretches to the <code>width</code> of the container, because it is **a block level element**, a behavior that should be starting to become familiar to you. It has no <code>height</code> (or <code>size</code> in the block dimension) because there is no content.

Try adding some text inside the empty <code>&lt;div&gt;</code> element. The <code>border</code> now contains that text because the height of the element is defined by the content. Therefore the size of this <code>&lt;div&gt;</code> in the block dimension comes from the <code>size</code> of the content. Again, this is the intrinsic size of the element — its <code>size</code> is defined by its content.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/64-sizing-items-in-css/a-the-natural-or-intrinsic-size-of-things/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/64-sizing-items-in-css/a-the-natural-or-intrinsic-size-of-things/">Visit website</a>
  </dd>
</dl>
