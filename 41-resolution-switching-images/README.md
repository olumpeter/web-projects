# Resolution switching: Same size, different resolutions

This projects shows how you can allow the browser to choose an appropriate resolution image by using <code>srcset</code> attribute with x-descriptors and without sizes attribute - the browser works out what resolution the display is that it is being shown on, and serves the most appropriate image referenced in the <code>srcset</code>. So if the device accessing the page has a standard/low resolution display, with one device pixel representing each CSS pixel, the <code>elva-fairy-320w.jpg</code> image will be loaded (the 1x is implied, so you don't need to include it.) If the device has a high resolution of two device pixels per CSS pixel or more, the elva-fairy-640w.jpg image will be loaded. The 640px image is 93KB, whereas the 320px image is only 39KB.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/41-resolution-switching-images/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/41-resolution-switching-images/">Visit website</a>
  </dd>
</dl>

