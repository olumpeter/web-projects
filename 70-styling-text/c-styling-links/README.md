# Styling text: Styling links

## Link states

These can be styled using different **pseudo-classes**:

- **Link**: A link that has a destination (i.e., not just a named anchor), 
styled using the <code>:link</code> pseudo class.
- **Visited**: A link that has already been visited (exists in the browser's 
history), styled using the <code>:visited</code> pseudo class.
- **Hover**: A link that is hovered over by a user's mouse pointer, styled 
using the <code>:hover</code> pseudo class.
- **Focus:** A link that is focused (e.g., moved to by a keyboard user using 
the <kbd>Tab</kbd> key or something similar, or programmatically focused 
using <code>HTMLElement.focus()</code>) — this is styled using the 
<code>:focus</code> pseudo class.
- **Active**: A link that is activated (e.g., clicked on), styled using the 
<code>:active</code> pseudo class.

## Default styles

Default links have the following properties:

- Links are underlined.
- Unvisited links are blue.
- Visited links are purple.
- Hovering a link makes the mouse pointer change to a little hand icon.
- Focused links have an outline around them — you should be able to focus on 
the links on this page with the keyboard by pressing the <kbd>tab</kbd> key. 
(On Mac, you'll need to use <kbd>option</kbd> + <kbd>tab</kbd> , or enable the 
Full Keyboard Access: All controls option by pressing <kbd>Ctrl</kbd> + <kbd>F7</kbd>.)
- Active links are red. Try holding down the mouse button on the link as you 
click it.

**Note**: All the link examples on this page link to the top of their window. 
The empty fragment (<code>href=&quot;#&quot;</code>) is used to create simple 
examples and ensure the live examples don't break.

Interestingly enough, these default styles are nearly the same as they were 
back in the early days of browsers in the mid-1990s. This is because users 
know and have come to expect this behavior — if links were styled differently, 
it would confuse a lot of people. This doesn't mean that you shouldn't style 
links at all. It just means that you shouldn't stray too far from the expected 
behavior. You should at least:

- Use underlining for links, but not for other things. If you don't want to 
underline links, at least highlight them in some other way.
- Make them react in some way when hovered/focused, and in a slightly 
different way when activated.

The default styles can be turned off/changed using the following CSS properties:

- <code>color</code> for the text color.
- <code>cursor</code> for the mouse pointer style — you shouldn't turn this 
off unless you've got a very good reason.
- <code>outline</code> for the text outline. An outline is similar to a border. The only 
difference is that a border takes up space in the box and an outline doesn't; 
it just sits over the top of the background. The outline is a useful 
accessibility aid, so should not be removed without adding another method of 
indicating the focused link.

## Styling some links

To start off with, we'll write out our empty rulesets:

```
a {
}

a:link {
}

a:visited {
}

a:focus {
}

a:hover {
}

a:active {
}

```

This order is important because link styles build on one another. For 
example, the styles in the first rule will apply to all the subsequent ones. 
When a link is activated, it's usually also hovered over. If you put these 
in the wrong order, and you're changing the same properties in each ruleset, 
things won't work as you expect. To remember the order, you could try using a 
mnemonic like **L**o**V**e **F**ears **HA**te.

## Including icons on links

A common practice is to include icons on links to provide more of an 
indicator as to what kind of content the link points to. For example:
```
.including-icons-on-links a[href^=&quot;http&quot;] {
  background: url(&quot;../images/icons8-external-link-26.png&quot;) no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```
Here, we're inserting a custom background image on external links in a 
similar manner to how we handled custom bullets on list items in the 
last project. This time, however, we're using the <code>background</code> 
shorthand instead of the individual properties. We set the path to the 
image we want to insert, specify <code>no-repeat</code> so we only get 
one copy inserted, and then specify the <code>position</code> as 100% of 
the way to the right of the text content, and <code>0</code> pixels from 
the top.

We also use <code>background-size</code> to specify the size we want the 
background image to be shown at. It's useful to have a larger icon and 
then resize it like this as needed for responsive web design purposes. 

Finally, we set some <code>padding-right</code> on the links to make 
space for the background image to appear in, so we aren't overlapping 
it with the text.

A final word: how did we select just external links? Well, if you are 
writing your HTML links properly, you should only be using absolute URLs 
for external links — it is more efficient to use relative links to link 
to other parts of your own site (as with the first link). The text 
&quot;http&quot; should therefore only appear in external links (like the 
second and third ones), and we can select this with an attribute 
selector: a[href^=&quot;http&quot;] selects <code>&lt;a&gt;</code> elements, 
but only if they have an href attribute with a value that begins with 
&quot;http&quot;.

## Styling links as buttons

Links are quite commonly styled to look and behave like buttons in 
certain circumstances. A website navigation menu can be marked up as a 
set of links, and this can be styled to look like a set of control 
buttons or tabs that provide the user with access to other parts of the 
site. Let's explore how.

- The HTML defines a <code>&lt;nav&gt;</code> element with a 
&quot;container&quot; class. The <code>&lt;nav&gt;</code> contains our 
links.

- The CSS includes the styling for the container and the links it 
contains these rules:

```
.styling-links-as-buttons .container {
  display: flex;
  gap: 0.625%;
}
```

- This rule says that:
  - The second rule says: The container is a **flexbox**. The items it 
  contains — the links, in this case — will be **flex items**.
  - The gap between the flex items will be 0.625% of the container's width.

```
.styling-links-as-buttons a {
  flex: 1;
  text-decoration: none;
  outline-color: transparent;
  text-align: center;
  line-height: 3;
  color: black;
}
```

- This rule says that:
  - The first declaration, <code>flex: 1</code>, means that the widths of 
  the items will be adjusted so they use all the available space in the 
  container.
  - Next, we turn off the default <code>text-decoration</code and 
    <code>outline</code> — we don't want those spoiling our look.
  - <code>text-align: center;</code> declaration is used to center the 
  text inside each link. 
  - <code>line-height: 3;</code> is used to set the line-height to 3 to 
  give the buttons some height (which also has the advantage of 
  centering the text vertically)
  - <code>color: black;</code> is used to set the text color to black.
 
  ## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/70-styling-text/c-styling-links/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/70-styling-text/c-styling-links/">Visit website</a>
  </dd>
</dl>
