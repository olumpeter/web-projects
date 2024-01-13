# CSS layout - Test your skills: Flexbox

The aim of this skill test is to assess whether you understand how flexbox 
and flex items behave. Below are four common design patterns that you might 
use flexbox to create. Your task is to build them.

## Task 1

In this task, the list items are the navigation for a site. They should be 
laid out as a row, with an equal amount of space between each item.

The aim of this task is to show understanding of the default behavior of Flexbox, and how you do not need to do a lot of work to acheive many patterns.

To solve this task the you need to use <code>display: flex</code> on the 
parent, and also <code>justify-content: space-between</code>. You do not need 
to use the flex property or any of the longhands on the children, as the 
defaults will cause them to display auto sized and not grow to fill the 
inline dimension.

  ```
  .task-1 nav ul {
    display: flex;
    justify-content: space-between;
  }      
  ```

## Task 2

In this task, the list items are all different sizes, but we want them to be 
displayed as three equal sized columns, no matter what content is in each 
item.

The aim of this task is to demonstrate an understanding of the <code>flex</code> 
property, and in particular the way that flex-basis works.

It would be correct for you to have used <code>flex: 1</code> on the 
<code>li</code> or <code>flex: 1 0 0</code>, or <code>flex: 1 1 0</code>. 
The key thing is that they have set the flex-basis to 0. It would also be 
correct to use the longhands, for example:
  
  ```
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  ```
However as the specification advises use of the shorthands, in this scenario 
<code>flex: 1</code> is probably the best answer of all of these, and so the 
most optimal result would be:
  
  ```
  .task-2 ul {
    display: flex;
  }
  
  .task-2 li {
    flex: 1;
  }
 ```

Additional question:

  - Can you now make the first item twice the size of the other items?

You should add an additional selector that targets the first element and sets 
<code>flex: 2;</code> (or <code>flex: 2 0 0;</code> or <code>flex-grow: 2</code):

  ```
  .task-2-additional-question li:first-child {
    flex: 2;
  }      
  ```

## Task 3

In this task, there are two elements in the HTML below, a &gt;div&lt; element 
with a class of parent which contains another &lt;div&gt; element with a class 
of child. Use flexbox to center the child inside the parent. Note that there 
is not just one possible solution here.

Here we use Flexbox to center an item horizontally and vertically. The aim of 
this task is to demonstrate the student has an understanding of how to use 
the alignment properties to achieve this.

On the parent they should use:

  ```
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```
## Task 4

In this task, we want you to arrange these items into rows as in the image below:

This example demonstrates understanding of the <code>flex-wrap</code> property 
to wrap flex lines. In addition, to ensure that they end up with something 
that looks like the example they need to set <code>flex: auto</code> on the child 
(or <code>flex: 1 1 auto;</code>).

  ```
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  
  li {
    flex: auto;
  }      
  ```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/d-test-your-skills-flexbox/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/d-test-your-skills-flexbox/">Visit website</a>
  </dd>
</dl>
