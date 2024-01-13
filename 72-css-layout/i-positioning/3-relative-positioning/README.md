# CSS layout - Positioning: Relative positioning

Relative positioning is the first position type we'll take a look at. This is 
very similar to static positioning, except that once the positioned element 
has taken its place in the normal flow, you can then modify its final position, 
including making it overlap other elements on the page. Go ahead and update the 
position declaration in your code:

```
position: relative;
```

If you save and refresh at this stage, you won't see a change in the result at 
all. So how do you modify the element's position? You need to use the `top`, 
`bottom`, `left`, and `right` properties, which we'll explain in the next 
section.

### Introducing `top`, `bottom`, `left`, and `right`

`top`, `bottom`, `left`, and `right` are used alongside position to specify 
exactly where to move the positioned element to. To try this out, add the 
following declarations to the .positioned rule in your CSS:

```
top: 30px;
left: 30px;
```

Note: The values of these properties can take any units you'd reasonably 
expect: pixels, mm, rems, %, etc.

If you now save and refresh, you'll get a result something like this:

Cool, huh? Ok, so this probably wasn't what you were expecting. Why has it 
moved to the bottom and to the right if we specified top and left? This may 
seem counterintuitive. You need to think of it as if there's an invisible 
force that pushes the specified side of the positioned box, moving it in the 
opposite direction. So, for example, if you specify top: 30px;, it's as if a 
force will push the top of the box, causing it to move downwards by 30px.


## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/i-positioning/3-relative-positioning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/i-positioning/3-relative-positioning/">Visit website</a>
  </dd>
</dl>
