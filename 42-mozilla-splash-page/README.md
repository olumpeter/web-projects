# Mozilla splash page

This project tests your ability to create Mozilla splash page by following these steps:
  1. prepare images by creating a <code>400px</code> and a <code>120px</code> versions of the <code>firefox_logo-only_RGB.png</code>, <code>firefox-addons.jpg</code>, and <code>mozilla-dinosaur-head.png</code> images. It expects you to call them something sensible such as <code>firefox_logo_only_RGB_400w.png</code> and <code>firefox_logo_only_RGB_400w.png</code>. It also tests your ability to create a <code>1200px</code> and <code>600px</code> version of the Red Panda image and saving it with an appropriate name such as <code>red-panda-landscape-1200w.png</code> and <code>red-panda-portrait-600w.png</code> respectively. The latter is portrait and shows the panda close up.
  1. After preparing the images and putting them in one directory called images, you should go ahead and make <code>120px</code> version of the <code>Firefox logo</code> a logo to the <code>header</code> part of the page using the <code>img</code> element and the <code>src</code> and <code>alt</code> attributes.
  1. You should then add a video to the main article content by embedding the correct video using the <code>iframe</code> element. Use the <code>width</code> and <code>height</code> attributes to make the embedded video <code>400px</code> wide and <code>225px</code> high.
  1. You should then add responsive images to the further info links. Make sure you use the correct image inside the link (<code>Firefox logo</code> for Download Firefox, <code>Dinosaur</code> for mozilla.org, <code>Add-ons</code> image for the add-ons site.), you include an appropriate <code>src</code> and <code>alt</code> attribute, you include a <code>srcset</code> attribute that declares the <code>120px</code> version of the image as <code>120w</code>, and the <code>400px</code> version of <code>400w</code>.
  1. You should include sizes attribute that declares that the <ode>120px</code> version should be used if the viewport is <code>500px</code> wide or narrower ((max-width: 500px)), and the <code>400px</code> version should be used otherwise.
  1. You should embed the <code>MDN logo SVG</code> inside the last link, just in a normal image element, with appropriate <code>src</code> attribute and <code>alt</code> text.
  1. Finally, you should add an <code>art directed red panda</code> into the page using a <code>&lt;picture&gt;</code> element. Make sure you include an <code>&lt;img&gt;</code> element inside the <code>&lt;picture&gt;</code> element, pointing to the landscape version, with appropriate <code>alt</code> text a <code>&lt;source&lt;</code> element with a <code>srcset</code> attribute pointing to the portrait version of the image, and a <code>media</code> attribute that causes the portrait image to show up only if the viewport is <code>600px<code> wide or less (<code>(max-width: 600px)</code>.)

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/42-mozilla-splash-page/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/42-mozilla-splash-page/">Visit website</a>
  </dd>
</dl>
