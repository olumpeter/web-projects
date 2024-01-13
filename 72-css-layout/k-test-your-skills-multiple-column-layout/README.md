# CSS layout - Test your skills multiple-column layout

## Task 1

In this task, we want you to create three columns, with a 50px gap between 
each column.

### Marking guide

This task covers understanding of `column-count` and `column-gap`.

.task-1 {
  column-count: 3;
  column-gap: 50px;
}

## Task 2

In this task, we want you to create columns which have a minimum width of 
200px. Then, add a 5px grey rule between each column, ensuring there is 10px 
of space between the edge of the rule and the column content.

### Marking guide

In this task we test for understanding of `column-width`, `column-rule`, and 
the fact that a rule does not change the size of the gap.

```
.task-2 {
  column-width: 200px;
  column-rule: 5px solid #ccc;
  column-gap: 25px;
}      
```

The student has been asked to create columns which will be at least 200 
pixels wide, assuming there is space for more than one column. So they will 
need to use the `column-width` property.

They could use the longhand column-rule-* properties instead of the 
shorthand, though there is no benefit to doing so.

The key thing with the use of column-gap is that they have understood that 
the rule does not add 5px of space to the gap. To have 10px either side of 
the rule they need a 25px gap as the rule is laid over it.

## Task 3

In this task, we want you to cause the element containing the heading and 
subheading to span across all columns.

### Marking guide

In this task we test for understanding of the column-span property.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/k-test-your-skills-multiple-column-layout/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/k-test-your-skills-multiple-column-layout/">Visit website</a>
  </dd>
</dl>

All the student needs to do is set the element with a class of `.box` to 
`column-span: all`. This is mostly a task of checking that they select the 
right element.
