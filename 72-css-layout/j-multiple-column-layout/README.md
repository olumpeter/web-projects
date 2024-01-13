# CSS layout - Multiple-column layout

The multiple-column layout specification provides you with a method for 
laying content out in columns, as you might see in a newspaper. This article 
explains how to use this feature

## A basic example

Let's explore how to use multiple-column layout — often referred to as 
*multicol*. 

## A three-column layout

We enable multicol by using one of two properties: `column-count` or 
`column-width`. The `column-count` property takes a number as its value and 
creates that number of columns. If you add the following CSS to your 
stylesheet and reload the page, you'll get three columns:

```
.container {
  column-count: 3;
}
```

The columns that you create have flexible widths — the browser works out 
how much space to assign each column.

## Setting column-width

```
.container {
  column-width: 200px;
}
```

The browser will now give you as many columns as it can of the size that you 
specify; any remaining space is then shared between the existing columns. 
This means that you won't get exactly the width that you specify unless your 
container is exactly divisible by that width.

## Styling the columns 

The columns created by multicol cannot be styled individually. There's no way 
to make one column bigger than other columns or to change the background or 
text color of a single column. You have two opportunities to change the way 
that columns display:

- Changing the size of the gap between columns using the column-gap.
- Adding a rule between columns with column-rule.

## Spanning columns

You can cause an element to span across all the columns. In this case, the 
content breaks where the spanning element's introduced and then continues below 
the element, creating a new set of columns. To cause an element to span all the 
columns, specify the value of all for the column-span property.

>**Note**: It isn't possible to cause an element to span just some columns. The 
property can only have the values of none (which is the default) or all.

## Columns and fragmentation

The content of a multi-column layout is fragmented. It essentially behaves 
the same way as content behaves in paged media, such as when you print a 
webpage. When you turn your content into a multicol container, it fragments 
into columns. In order for the content to do this, it must break.

### Fragmented boxes

Sometimes, this breaking will happen in places that lead to a poor reading 
experience. In the example below, I have used multicol to lay out a series 
of boxes, each of which has a heading and some text inside. The heading 
becomes separated from the text if the columns fragment between the two.

###

To control this behavior, we can use properties from the 
[CSS Fragmentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fragmentation)
specification. This specification gives us properties to control the 
breaking of content in multicol and in paged media. For example, by adding 
the property `break-inside` with a value of `avoid` to the rules for `.card`. 
This is the container of the heading and text, so we don't want it fragmented.


## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/72-css-layout/j-multiple-column-layout/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/72-css-layout/j-multiple-column-layout/">Visit website</a>
  </dd>
</dl>
