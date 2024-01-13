# CSS layout - Test your skills: Floats

The aim of this skill test is to assess whether you understand floats in CSS 
using the `float` and `clear` properties and values as well as other methods 
for clearing floats. You will be working through three small tasks that use 
different elements of the material you have just covered.

## Task 1

In this task, you need to float the two elements with a class of `float1` and 
`float2` left and right, respectively. The text should then appear between the 
two boxes, as in the image below:

This task covers understanding of the basic `float` property, and the values 
`left` and `right`. The following should be all they need to do.

```
.task-1 .float1 {
  float: left;
}

.task-1 .float2 {
  float: right;
}
```

## Task 2

In this task, the element with a class of `float` should be floated left. 
Then we want the first line of text to display next to that element, but the 
following line of text (which has a class of below) to display underneath it.

Your final result should look like the image below:

In task 2 we check that the student understands how to clear an element from 
a floated item. They need to flow the item left, then add `clear: left` to the 
class for the second paragraph.

```
.task-2 .float {
  float: left;
}

.task-2 .below {
  clear: left;
}
```

## Task 3

In this task, we have a floated element. The box wrapping the float and text is 
displaying behind the float. Use the most up-to-date method available to cause 
the box background to extend to below the float, as in the image below:

In the final task the student is asked to use the most up-to-date method of 
clearing the box underneath the floated item. Therefore they should add 
`display: flow-root` to the class for `.box`. Other methods might be to use 
`overflow` or a clearfix hack, however the learning materials detail the 
`flow-root` method as the modern way to achieve this.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/h-test-your-skills-floats/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/h-test-your-skills-floats/">Visit website</a>
  </dd>
</dl>
