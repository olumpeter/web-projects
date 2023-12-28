# Styling text: Styling lists

We'll look at unordered, ordered, and description lists — all have styling features that are similar, as well as some that are particular to themselves. 

Here are some of the default styles applied to elements before you explicitly specify author styles using CSS.
- The <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> elements have a <code>top</code> and <code>bottom</code> <code>margin</code> of <code>16px</code> (<code>1em</code>) and a <code>padding-left</code> of <code>40px</code> (<code>2.5em</code>). If the directionality attribute <code>dir</code> is set to right-to-left (<code>rtl</code>) for <code>ul</code> and <code>ol</code> elements, in that case <code>padding-right</code> comes into effect and its default value is <code>40px</code> (<code>2.5em</code>).
- The list items (<code>&lt;li&gt;</code> elements) have no set defaults for spacing.
- The <code>&lt;dl&gt;</code> element has a <code>top</code> and <code>bottom margin</code> of <code>16px</code> (<code>1em</code>), but no <code>padding</code> set.
- The <code>&lt;dd&gt;</code> elements have <code>margin-left</code> of <code>40px</code> (<code>2.5em</code>).
- The <code>&lt;p&lt;</code> elements we've included for reference have a <code>top</code> and <code>bottom margin</code> of <code>16px</code> (<code>1em</code>) — the same as the different list types.

## Handling list spacing

When styling lists, you need to adjust their styles so they keep the same vertical spacing as their surrounding elements (such as paragraphs and images; sometimes called vertical rhythm), and the same horizontal spacing as each other.

The CSS used for the text styling and spacing is as follows:

```
/* General styles */

/* Rule 1 sets a sitewide font and a baseline font size of 10px. These are inherited by everything on the page. */

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
}

/*
Rules 2 and 3 set relative font sizes for the headings, different list types (the children of
the list elements inherit these), and paragraphs. This means that each paragraph and list will
have the same font size and top and bottom spacing, helping to keep the vertical rhythm consistent.
*/

h2 {
  font-size: 2rem;
}

ul, 
ol, 
dl, 
p {
  font-size: 1.5rem;
}

/*
Rule 4 sets the same line-height on the paragraphs and list items — so the paragraphs and each
individual list item will have the same spacing between lines. This will also help to keep the
vertical rhythm consistent.
*/

li, 
p {
  line-height: 1.5;
}

/* Description list styles */

/*
Rules 5 and 6 apply to the description list. We set the same line-height on the description
list terms and descriptions as we did with the paragraphs and list items. Again, consistency
is good! We also make the description terms have bold font, so they visually stand out easier.
*/

dd, dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}
```

## List-specific styles

There are three properties you should know about to start with, which can be set on <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> elements:

- <code>list-style-type</code>: Sets the type of bullets to use for the list, for example, square or circle bullets for an unordered list, or numbers, letters, or roman numerals for an ordered list.
- <code>list-style-position</code>: Sets whether the bullets, at the start of each item, appear inside or outside the lists.
- <code>list-style-image</code>: Allows you to use a custom image for the bullet, rather than a simple square or circle.

### Bullet styles

The <code>list-style-type</code> property allows you to set what type of bullet to use for the bullet points. For example,

```
/* Ordered list styles */

ol {
  list-style-type: upper-roman;
}
```

### Bullet position

The <code>list-style-position</code> property sets whether the bullets appear inside the list items, or outside them before the start of each item. The  default value is <code>outside</code>, which causes the bullets to sit outside the list items, as seen in this project. You can try this as an example,

```
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

### Using a custom bullet image

The <code>list-style-image</code> property allows you to use a custom image for your bullet. The syntax is pretty simple:

```
ul {
  list-style-image: url(../images/star.svg);
}    
```

In this project, we did more:

```
/* Unordered list styles */

ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(../images/star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

- <code>padding-left: 2rem;</code> set the <code>padding-left</code> of the <code>&lt;ul&gt;</code> down from the default <code>40px</code> to <code>20px</code>, then set the same amount on the list items. This is so that, overall, the list items are still lined up with the ordered list items and the description list descriptions, but the list items have some padding for the background images to sit inside. If we didn't do this, the background images would overlap with the list item text, which would look messy.
- <code>list-style-type: none;</code> set the <code>list-style-type</code> to <code>none</code>, so that no bullet appears by default. We're going to use background properties to handle the bullets instead.
- <code>ul li {...}</code> selects each list item in the unordered list so that we can insert a bullet onto each unordered list item.
  - <code>background-image</code>: This references the path to the image file you  want to use as the bullet.
  - <code>background-position</code>: This defines where in the background of the selected element the image will appear — in this case we are saying <code>0 0</code>, which means the bullet will appear in the very top left of each list item.
  - <code>background-size</code>: This sets the size of the background image. We ideally want the bullets to be the same size as the list items (or very slightly smaller or larger). We are using a size of <code>1.6rem</code> (<code>16px</code>), which fits very nicely with the <code>20px</code> padding we've allowed for the bullet to sit inside — <code>16px</code> plus <code>4px</code> of space between the bullet and the list item text works well.
  - <code>background-repeat</code>: By default, background images repeat until they fill up the available background space. We only want one copy of the image inserted in each case, so we set this to a value of <code>no-repeat</code>.

## Controlling list counting
Sometimes you might want to count differently on an ordered list — e.g., 
starting from a number other than 1, or counting backwards, or counting 
in steps of more than 1. HTML and CSS have some tools to help you here.

### start
 
The start attribute allows you to start the list counting from a number other than 1. for example: <code>&lt;ol start=&quot;4&quot;&gt;</code>

### reversed

The reversed attribute will start the list counting down instead of up. For example:  <code>&lt;ol start=&quot;4&quot; reversed&gt;</code>

### value

The value attribute allows you to set your list items to specific numerical values. The following example: <code>&lt;li value=&quot;2&quot;&gt;</code>, <code>&lt;li value=&quot;4&quot;&gt;</code>, <code>&lt;li value=&quot;6&quot;&gt;</code>, <code>&lt;li value=&quot;8&quot;&gt;</code>

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/70-styling-text/b-styling-lists/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/70-styling-text/b-styling-lists/">Visit website</a>
  </dd>
</dl>
