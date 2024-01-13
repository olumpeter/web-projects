# CSS layout - Responsive design: Demonstration of responsive typography

Responsive typography describes changing font sizes within media queries or 
using viewport units to reflect lesser or greater amounts of screen real estate.

### Using media queries for responsive typography

In this example, we want to set our level 1 heading to be 4rem, meaning it 
will be four times our base font size. That's a really large heading! We only 
want this jumbo heading on larger screen sizes, therefore we first create a 
smaller heading then use media queries to overwrite it with the larger size 
if we know that the user has a screen size of at least 1200px.

### Using viewport units for responsive typography

Viewport units `vw` can also be used to enable responsive typography, without 
the need for setting breakpoints with media queries. 1vw is equal to one percent 
of the viewport width, meaning that if you set your font size using vw, it will 
always relate to the size of the viewport.

```
h2 {
  font-size: 6vw;
}
```

The problem with doing the above is that the user loses the ability to zoom 
any text set using the `vw` unit, as that text is always related to the size 
of the viewport. 
*Therefore you should never set text using viewport units alone*.

There is a solution, and it involves using `calc()`. If you add the `vw` unit 
to a value set using a fixed size such as `em`s or `rems` then the text will 
still be zoomable. Essentially, the `vw` unit adds on top of that zoomed value:

```
h2 {
  font-size: calc(1.5rem + 3vw);
}
```

This means that we only need to specify the font size for the heading 
once, rather than set it up for mobile and redefine it in the media 
queries. The font then gradually increases as you increase the size of the 
viewport.

## The viewport meta tag

If you look at the HTML source of a responsive page, you will usually see the 
following &lt;meta&gt; tag in the &lt;head&gt; of the document.
```
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
```

This viewport meta tag tells mobile browsers that they should set the width 
of the viewport to the device width, and scale the document to 100% of its 
intended size, which shows the document at the mobile-optimized size that 
you intended.

Why is this needed? Because mobile browsers tend to lie about their viewport width.

This meta tag exists because when smartphones first arrived, most sites were 
not mobile optimized. The mobile browser would, therefore, set the viewport 
width to 980 pixels, render the page at that width, and show the result as a 
zoomed-out version of the desktop layout. Users could zoom in and pan around 
the website to view the bits they were interested in, but it looked bad.

By setting width=device-width you are overriding a mobile device's default, 
like Apple's default width=980px, with the actual width of the device. 
Without it, your responsive design with breakpoints and media queries may 
not work as intended on mobile browsers. If you've got a narrow screen layout 
that kicks in at 480px viewport width or less, but the device is saying it is 
980px wide, that user will not see your narrow screen layout.

**So you should always include the viewport meta tag in the head of your documents.**


## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/l-responsive-design/3-responsive-typography/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/l-responsive-design/3-responsive-typography/">Visit website</a>
  </dd>
</dl>
