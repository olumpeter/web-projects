# Backgrounds and borders - Sizing the background image

We can size the image to fit inside the background using the following keywords: 
- <code>cover</code> — the browser will make the image just large enough so that it completely covers the box area while still retaining its aspect ratio. In this case, part of the image is likely to end up outside the box.
- <code>contain</code> — the browser will make the image the right size to fit inside the box. In this case, you may end up with gaps on either side or on the top and bottom of the image, if the aspect ratio of the image is different from that of the box.
    
Try the following:

- Change the length units used to modify the size of the background.
- Remove the length units and see what happens when you use <code>background-size: cover</code> or <code>background-size: contain</code>.
- If your image is smaller than the box, you can change the value of <code>background-repeat</code> to repeat the image.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/60-backgrounds-and-borders/c-controlling-background-repeat/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/60-backgrounds-and-borders/c-controlling-background-repeat/">Visit website</a>
  </dd>
</dl>
