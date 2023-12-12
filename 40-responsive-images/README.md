# Creating responsive images  using <code>&lt;img&gt;</code> and <code>&lt;picture&gt;</code> elements

This project shows how you can create responsive images using <code>&lt;img&gt;</code> and <code>&lt;picture&gt;</code> elements. It will show you how you can use <code>srcset</code> and <code>sizes</code> attributes to provide several additional source images along with hints to help the browser pick the right one. The <code>srcset</code> attribute defines the set of images we will allow the browser to choose between, and what size each image is. Each set of image information in the <code>srcset</code> attribute is separated from the previous one by a comma. The image information comprises of
  1. the **image filename**,
  1. a space, and
  1. the **image's intrinsic width** in pixels
An example of a set of image information is  &quot;elva-fairy-480w.jpg 480w&quot;. 
   
The sizes attribute defines a set of media conditions (e.g. screen widths) and indicates what image size would be best to choose, when certain media conditions are true. For example, the sizes attribute is comprised of
  1. a **media condition** that is specified as &quot;(max-width: 600px)&quot;, meaning &quotwhen the viewport width is 600 pixels or less&quot;, then
  1. a space, followed by
  1. the width of the slot the image will fill when the media condition is true (480px).

Note that older browsers that don't support these features will just ignore them. Instead, those browsers will go ahead and load the image referenced in the <code>src</code> attribute as normal.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/40-responsive-images/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/40-responsive-images/">Visit website</a>
  </dd>
</dl>
