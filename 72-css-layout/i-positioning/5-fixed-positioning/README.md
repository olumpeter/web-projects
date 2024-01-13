# CSS layout - Positioning: Fixed positioning

Let's now look at fixed positioning. This works in exactly the same way as 
absolute positioning, with one key difference: whereas absolute positioning 
fixes an element in place relative to its nearest positioned ancestor (the 
initial containing block if there isn't one), **fixed positioning** *usually* 
fixes an element in place relative to the visible portion of the viewport. (An 
exception to this occurs if one of the element's ancestors is a fixed containing 
block because its [transform property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) 
has a value other than none.) This means that you can create useful UI items 
that are fixed in place, like persistent navigation menus that are always 
visible no matter how much the page scrolls.

Let's put together a simple example to show what we mean. First of all, delete 
the existing `p:nth-of-type(1)` and `.positioned` rules from your CSS.

Now update the `body` rule to remove the `position: relative;` declaration and 
add a fixed height, like so:

```
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Now we're going to give the `h1` element `position: fixed;` and have it sit at 
the top of the viewport. Add the following rule to your CSS:

```
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin-top: 0;
  background: white;
  padding: 10px;
}
```
The `top: 0;` is required to make it stick to the top of the screen. We 
give the heading the same width as the content column and then a white 
background and some padding and margin so the content won't be visible 
underneath it.

If you save and refresh, you'll see a fun little effect of the heading 
staying fixed — the content appears to scroll up and disappear underneath 
it. But notice how some of the content is initially clipped under the 
heading. This is because the positioned heading no longer appears in the 
document flow, so the rest of the content moves up to the top. We could 
improve this by moving the paragraphs all down a bit. We can do this by 
setting some top margin on the first paragraph. Add this now: 

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/i-positioning/5-fixed-positioning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/i-positioning/5-fixed-positioning/">Visit website</a>
  </dd>
</dl>
