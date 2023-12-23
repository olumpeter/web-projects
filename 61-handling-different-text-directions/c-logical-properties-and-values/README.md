# Handling different text directions: Writing modes and block and inline layout

Block and inline layout is tied to the writing mode of the document, and not the physical screen. Blocks are only displayed from the top to the bottom of the page if you are using a writing mode that displays text horizontally, such as English.
    
In this project, I have two boxes that contain a heading and a paragraph. The first uses <code>writing-mode: horizontal-tb</code>, a writing mode that is written horizontally and from the top of the page to the bottom. The second uses <code>writing-mode: vertical-rl;</code> this is a writing mode that is written vertically and from right to left.
    
When we switch the writing mode, we are changing which direction is block and which is inline. In a <code>horizontal-tb</code> writing mode the block direction runs from top to bottom; in a <code>vertical-rl</code> writing mode the block direction runs right-to-left horizontally. So the block dimension is always the direction blocks are displayed on the page in the writing mode in use. The inline dimension is always the direction a sentence flows.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/61-handling-different-text-directions/c-logical-properties-and-values/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/61-handling-different-text-directions/c-logical-properties-and-values/">Visit website</a>
  </dd>
</dl>
