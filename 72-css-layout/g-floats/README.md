# CSS layout - Floats

Originally for floating images inside blocks of text, the float property 
became one of the most commonly used tools for creating multiple 
column layouts on webpages. With the advent of flexbox and grid it's now 
returned to its original purpose, as this article explains.

## The background of floats

The `float` property was introduced to allow web developers to implement 
layouts involving an image floating inside a column of text, with the text 
wrapping around the left or right of it. The kind of thing you might get in 
a newspaper layout.

But web developers quickly realized that you can float anything, not just 
images, so the use of float broadened, for example, to fun layout effects 
such as [drop-caps](https://css-tricks.com/snippets/css/drop-caps/).

Floats have commonly been used to create entire website layouts featuring 
multiple columns of information floated so they sit alongside one another 
(the default behavior would be for the columns to sit below one another in 
the same order as they appear in the source). There are newer, better 
layout techniques available. Using floats in this way should be regarded as 
a **legacy technique**.

## A float example

### Floating the box

To float the box, add the float and margin-right properties to the .box rule:

```
.a-float-example .box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;

  /* Floating the box */
  float: left;
  margin-right: 15px;
}
```

Let's think about how the float works. The element with the float set on it 
(the `&lt;div&gt;` element in this case) is taken out of the normal layout 
flow of the document and stuck to the left-hand side of its parent container 
(`&lt;body&gt;`, in this case). Any content that would come below the floated 
element in the normal layout flow will now wrap around it instead, filling up 
the space to the right-hand side of it as far up as the top of the floated 
element. There, it will stop.

Floating the content to the right has exactly the same effect, but in 
reverse: the floated element will stick to the right, and the content will 
wrap around it to the left. Try changing the float value to `right` and replace 
`margin-right` with `margin-left` in the last ruleset to see what the result is.

## Visualizing the float

While we can add a margin to the float to push the text away, we can't add a 
margin to the text to move it away from the float. This is because a floated 
element is taken out of normal flow and the boxes of the following items 
actually run behind the float. You can see this by making some changes to your 
example.

Add a class of special to the first paragraph of text, the one immediately 
following the floated box, then in your CSS add the following rules. These will 
give our following paragraph a background color.

```
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

To make the effect easier to see, change the `margin-right` on your float to 
`margin` so you get space all around the float. You'll be able to see the 
background on the paragraph running right underneath the floated box, as in the 
example below.

```
.a-float-example .box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;

  /* Floating the box */
  float: left;
  margin: 15px;
}
```

The line boxes of our following element have been shortened so the text runs 
around the float, but due to the float being removed from normal flow the box 
around the paragraph still remains full width.

## Clearing floats

We've seen that a float is removed from normal flow and that other elements 
will display beside it. If we want to stop the following element from moving 
up, we need to clear it; this is achieved with the `clear` property.

In your HTML from the previous example, add a class of `cleared` to the second 
paragraph below the floated item. Then add the following to your CSS:

```
.clearing-floats .cleared {
  clear: left;
}
```

- You should see that the second paragraph now clears the floated element and 
no longer comes up alongside it. The clear property accepts the following values:

- left: Clear items floated to the left.
- right: Clear items floated to the right.
- both: Clear any floated items, left or right.

## Clearing boxes wrapped around a float

You now know how to clear something following a floated element, but let's see 
what happens if you have a tall float and a short paragraph, with a box wrapped 
around both elements.

### The problem

Change your document so that the first paragraph and the floated box are 
jointly wrapped with a `&lt;div&gt;`, which has a class of wrapper.

...

In your CSS, add the following rule for the `.wrapper` class and then reload 
the page:

```
.clearing-boxes-wrapped-around-a-float .wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}      
```

In addition, remove the original `.cleared` class:

```
.cleared {
  clear: left;
}
```

You'll see that, just like in the example where we put a background color on 
the paragraph, the background color runs behind the float.

Once again, this is because the float has been taken out of normal flow. You 
might expect that by wrapping the floated box and the text of first paragraph 
that wraps around the float together, the subsequent content will be cleared of 
the box. But this is not the case, as shown above. To deal with this, the 
standard method is to create a 
[block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context) (BFC) 
using the `display` property.

## `display: flow-root`

To solve this problem is to use the value `flow-root` of the display property. 
This exists only to create a BFC without using hacks — there will be no 
unintended consequences when you use it.

```
.clearing-boxes-wrapped-around-a-float .wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
  display: flow-root;
}
```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/g-floats/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/g-floats/">Visit website</a>
  </dd>
</dl>
