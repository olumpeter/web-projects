# Sizing items in CSS: <code>min-</code> and <code>max-</code> sizes

In addition to giving things a fixed <code>size</code>, we can ask CSS to give an element a minimum or a maximum <code>size</code>. If you have a box that might contain a variable amount of content, and you always want it to be at least a certain <code>height</code>, you could set the <code>min-height</code> property on it. The box will always be at least this height, but will then grow taller if there is more content than the box has space for at its minimum height.

In this project, you can see two boxes, both with a defined <code>min-height</code> of <code>150 pixels</code>. The box on the left is <code>150 pixels</code> tall; the box on the right has content that needs more room, and so it has grown taller than <code>150 pixels</code>. This is very useful for dealing with variable amounts of content while avoiding overflow.
    
A common use of <code>max-width</code> is to cause images to scale down if there is not enough space to display them at their intrinsic width while making sure they don't become larger than that <code>width</code>. As an example, if you were to set <code>width: 100%</code> on an image, and its intrinsic width was smaller than its container, the image would be forced to stretch and become larger, causing it to look pixelated. If you instead use <code>max-width: 100%</code>, and its intrinsic width is smaller than its container, the image will not be forced to stretch and become larger, thus preventing pixelation.
    
In the second example in this project, we have used the same image three times. The first image has been given <code>width: 100%</code> and is in a container which is larger than it, therefore it stretches to the container <code>width</code>. The second image has <code>max-width: 100%</code> set on it and therefore does not stretch to fill the container. The third box contains the same image again, also with <code>max-width: 100%</code> set; in this case you can see how it has scaled down to fit into the box.
    
This technique is used to make images responsive, so that when viewed on a smaller device they scale down appropriately. You should, however, not use this technique to load really large images and then scale them down in the browser. Images should be appropriately sized to be no larger than they need to be for the largest size they are displayed in the design. Downloading overly large images will cause your site to become slow, and it can cost users more money if they are on a metered connection.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/64-sizing-items-in-css/e-min-and-max-sizes/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/64-sizing-items-in-css/e-min-and-max-sizes/">Visit website</a>
  </dd>
</dl>
