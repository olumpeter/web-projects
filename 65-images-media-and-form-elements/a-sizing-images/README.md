# Images, media, and form elements: Sizing images

Everything in CSS generates a box. If you place an image inside a box that is smaller or larger than the intrinsic dimensions of the image file in either direction, it will either appear smaller than the box, or overflow the box. You need to make a decision about what happens with the overflow.
    
In this project, we have two boxes, both 200 pixels in size: 
- One contains an image which is smaller than 200 pixels — it is smaller than the box and doesn't stretch to fill it.
- The other is larger than 200 pixels and overflows the box.
    
So what can we do about the overflowing issue? A common technique is to make the <code><max-width</code> of an image <code>100%</code>. This will enable the image to become smaller in size than the box but not larger. This technique will also work with other replaced elements such as <code>&lt;video&gt;</code>s, or <code>&lt;iframe&gt;</code>s.
    
Try adding <code>max-width: 100%</code> to the <code>&lt;img&gt;</code> element in the example above. You will see that the smaller image remains unchanged, but the larger one becomes smaller to fit into the box.

You can make other choices about images inside containers. For example, you may want to size an image so it completely covers a box. The <code>object-fit</code> property can help you here. When using <code>object-fit</code> the replaced element can be sized to fit a box in a variety of ways.
    
In this project, we have used the value <code>cover</code>, which sizes the image down, maintaining the aspect ratio so that it neatly fills the box. As the aspect ratio is maintained, some parts of the image will be cropped by the box.
    
If we use <code>contain</code> as a value, the image will be scaled down until it is small enough to fit inside the box. This will result in &quot;letterboxing&quot; if it is not the same aspect ratio as the box.

You could also try the value of <code>fill</code>, which will fill the box but not maintain the aspect ratio.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/65-images-media-and-form-elements/a-sizing-images/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/65-images-media-and-form-elements/a-sizing-images/">Visit website</a>
  </dd>
</dl>
