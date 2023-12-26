# Sizing items in CSS: Viewport units

**The viewport** — which is the visible area of your page in the browser you are using to view a site — also has a <code>size</code>. In CSS we have units which relate to the **size of the viewport** — the <code>vw</code> unit for **viewport width**, and <code>vh</code> for **viewport height**. Using these units you can size something relative to the viewport of the user.

<code>1vh</code> is equal to **1% of the viewport height**, and <code>1vw</code> is equal to **1% of the viewport width**. You can use these units to size boxes, but also text. In this project, we have a box which is sized as <code>20vh</code> and <code>20vw</code>. The box contains a letter A, which has been given a <code>font-size</code> of <code>10vh</code>.
    
If you change the <code>vh</code> and <code>vw</code> values this will change the size of the box or font; changing the viewport size will also change their sizes because they are sized relative to the viewport.
    
Sizing things according to the viewport can be useful in your designs. For example, if you want a full-page hero section to show before the rest of your content, making that part of your page <code>100vh</code> high will push the rest of the content below the viewport, meaning that it will only appear once the document is scrolled.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/64-sizing-items-in-css/f-viewport-units/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/64-sizing-items-in-css/f-viewport-units/">Visit website</a>
  </dd>
</dl>

