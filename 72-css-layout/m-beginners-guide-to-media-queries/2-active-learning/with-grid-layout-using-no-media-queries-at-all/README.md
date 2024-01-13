# CSS layout - Beginner's guide to media queries: Active learning - Do you really need a media query?

### Do you really need a media query?

Flexbox, Grid, and multi-column layout all give you ways to create flexible 
and even responsive components without the need for a media query. It's always 
worth considering whether these layout methods can achieve what you want without 
adding media queries. For example, you might want a set of cards that are at 
least 200 pixels wide, with as many of these 200 pixels as will fit into the 
main article. This can be achieved with grid layout, using no media queries at 
all.

This could be achieved using the following:

```
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.grid li {
  border: 1px solid #666;
  padding: 10px;
}      
```

With the example open in your browser, make the screen wider and narrower to 
see the number of column tracks change. The nice thing about this method is 
that grid is not looking at the viewport width, but the width it has available 
for this component. It might seem strange to wrap up a section about media 
queries with a suggestion that you might not need one at all! However, in 
practice you will find that good use of modern layout methods, enhanced with 
media queries, will give the best results.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/m-beginners-guide-to-media-queries/2-active-learning/with-grid-layout-using-no-media-queries-at-all/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/m-beginners-guide-to-media-queries/2-active-learning/with-grid-layout-using-no-media-queries-at-all/">Visit website</a>
  </dd>
</dl>
