# CSS layout - Test your skills: Grid

The aim of this skill test is to assess whether you understand how a grid 
and grid items behave. You will be working through several small tasks that 
use different elements of the material you have just covered.

## Task 1

In this task, you should create a grid into which the four child elements 
will auto-place. The grid should have three columns sharing the available 
space equally and a 20-pixel gap between the column and row tracks. After 
that, try adding more child containers inside the parent container with the 
class of grid and see how they behave by default.

The aim of this task is to show understanding of the basics of creating a 
grid with a gap between the items.

  ```
  .task-1 .grid > * {
    background-color: #4d7298;
    border: 2px solid #77a6b6;
    border-radius: 0.5em;
    color: #fff;
    padding: 0.5em;
  }
  
  .task-1 .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  ```
## Task 2

In this task, we already have a grid defined. By editing the CSS rules for 
the two child elements, cause them to span over several grid tracks each. 
The second item should overlay the first as in the image below:

The aim of this task is to demonstrate an understanding of placing an item 
between grid lines, and that it is possible to layer items by way of them 
occupying the same grid cells.

  ```
  .task-2 .item1 {
    background-color: rgb(74 102 112 / 70%);
    border: 5px solid rgb(74 102 112 / 100%);
    grid-row: 1 / 3;
    grid-column: 1 / 4;
  }
  
  .task-2 .item2 {
    background-color: rgb(214 162 173 / 70%);
    border: 5px solid rgb(214 162 173 / 100%);
    grid-row: 2 / 4;
    grid-column: 2 / 5;
  }      
  ```

## Task 2 Additional question

Can you now cause the first item to display on top without changing the order 
of items in the source?

This extra question requires a little bit of research. One way of achieving 
this would be to use order, which we've encountered in the flexbox tutorial.

  ```
  .task-2-additional-question .item1 {
    order: 1;
  }
  ```
Another valid solution is to use `z-index`:

  ```
  .task-2-additional-question .item1 {
    z-index: 1;
  }      
  ```
## Task 3

In this task, there are four direct children in this grid. The starting point 
has them displayed using auto-placement. Use the `grid-area` and `grid-template-areas` 
properties to lay the items out as shown in the image below:

This task requires that the student gives each part of the layout a name 
using the grid-area property, then uses `grid-template-areas` to lay them out. 
Possible areas of confusion would be not realising they should place a `.` to 
leave a cell empty, or that they should repeat the name to cause an element 
to span more than one track.

  ```
  .task-3 .grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    grid-template-areas: 
      &quot;one one&quot;
      &quot;two three&quot;
      &quot;. four&quot;;
  }
  
  .task-3 .one {
    grid-area: one
  }
  
  .task-3 .two {
    grid-area: two
  }
  
  .task-3 .three {
    grid-area: three
  }
  
  .task-3 .four {
    grid-area: four
  }
  ```
## Task 4

In this task, you will need to use both grid layout and flexbox to recreate 
the example as seen in the image below. The gap between the column and row 
tracks should be 10px. You do not need to make any changes to the HTML in 
order to achieve this.

This task demonstrates the understanding of the student in terms of which 
components make sense as a grid and which as flex.

The container will need to be a grid layout, as we have alignment in rows and 
columns - two-dimensional.

The ul for the tags needs to be a flex container as tags are not lined up in 
columns, only in rows and they are centered in the space with the alignment 
property justify-content set to center.

The student may try to use flexbox on the container and restrict the cards 
with percentage values. They may also try to make the items into a grid 
layout in which case you should point out that the items are not aligned in 
two dimensions so flexbox isn't the best choice.

  ```
  .container {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  ```

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/f-test-your-skills-grids/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/f-test-your-skills-grids/">Visit website</a>
  </dd>
</dl>
