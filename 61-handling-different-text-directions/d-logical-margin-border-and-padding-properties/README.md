# Handling different text directions: Logical margin, border, and padding properties

The <code>margin-top property is mapped to <code>margin-block-start</code> — this will always refer to the margin at the start of the block dimension.

The <code>padding-left</code> property maps to <code>padding-inline-start</code>, the <code>padding</code> that is applied to the start of the inline direction. This will be where sentences start in that writing mode. The <code>border-bottom</code> property maps to <code>border-block-end</code>, which is the border at the end of the block dimension.

You can see a comparison between physical and logical properties in this project.

If you change the writing mode of the boxes by switching the <code>writing-mode</code> property on <code>.box</code> to <code>vertical-rl</code>, you will see how the physical properties stay tied to their physical direction, whereas the logical properties switch with the writing mode.

You can also see that the <code>h2</code> has a <code>black border-bottom</code>. Can you work out how to make that bottom border always go below the text in both writing modes?

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/61-handling-different-text-directions/d-logical-margin-border-and-padding-properties/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/61-handling-different-text-directions/d-logical-margin-border-and-padding-properties/">Visit website</a>
  </dd>
</dl>
