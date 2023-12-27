# Styling tables

## Spacing and layout

The first thing we need to do is sort out the spacing/layout — default table styling is so cramped! To do this, add the following CSS to your <code>style.css</code> file:

<code>/* spacing and layout*/

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}</code>

The most important parts to note are as follows:

- A <code>table-layout</code> value of fixed is generally a good idea to set on your table, as it makes the table behave a bit more predictably by default. Normally, 
table columns tend to be sized according to how much content they contain, which produces some strange results. With <code>table-layout: fixed</code>, you can size 
your columns according to the width of their headings, and then deal with their content as appropriate. This is why we've selected the four different headings with the <code>thead th:nth-child(n)</code> (<code>:nth-child</code>) selector (&quot;Select the n-th child that is a <code>&lt;th&gt;</code> element in a sequence, inside a <code>&lt;thead&gt;</code> element&quot;) and given them set percentage widths. The entire column width follows the width of its heading, making for a nice way to size your table columns. We've coupled this with a <code>width</code> of <code>100%</code>, meaning that the table will fill any container it is put in, and be nicely responsive (although it would still need some more work to get it looking good on narrow screen widths).
- A <code>border-collapse</code> value of <code>collapse</code> is standard best practice for any table styling effort. By default, when you set borders on table elements, they will all have spacing between them.
- We've put a border around the whole table, which is needed because we'll be putting some borders round the table header and footer later on — it looks 
really odd and disjointed when you don't have a border round the whole outside of the table and end up with gaps.
- We've set some padding on the <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> elements — this gives the data items some space to breathe, making the table look a lot more 
legible.

## Some simple typography

Now we'll get our text sorted out a bit. First of all, we've found a font on Google Fonts that is suitable for a table about punk bands. You can go there and find a different one if you like; you'll just have to replace our provided <code>&lt;link&gt;</code> element and custom <code>font-family</code> declaration with the ones Google Fonts gives you. First, add the following <code>&lt;link&gt;</code> element into your HTML head, just above your existing <code>&lt;link&gt;</code> element:

<code>&lt;link
  href=&quot;https://fonts.googleapis.com/css?family=Rock+Salt&quot;
  rel=&quot;stylesheet&quot;
  type=&quot;text/css&quot; /&gt;</code>

Now add the following CSS into your style.css file, below the previous addition:

<code>thead th,
tfoot th {
  font-family: &quot;Rock Salt&quot;, cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}</code>

## Graphics and colors

Now onto graphics and colors! Because the table is full of punk and attitude, we need to give it some bright imposing styling to suit it. Don't worry, you don't have to make your tables this loud — you can opt for something more subtle and tasteful.

Start by adding the following CSS to your <code>style.css</code> file, again at the bottom:

<code>thead,
tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(to bottom, rgb(0 0 0 / 10%), rgb(0 0 0 / 50%));
  border: 3px solid purple;
}</code>

## Zebra striping

zebra stripes — alternating rows of color that make the different data rows in your table easier to parse and read. Add the following <cCSS to the bottom of your <code>style.css file:

/* zebra striping */

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url(noise.png);
}

table {
  background-color: #ff33cc;
}</code>

# Styling the caption

There is one last thing to do with our table — style the caption. To do this, add the following to the bottom of your <code>style.css</code> file:

<code>caption {
  font-family: &quot;Rock Salt&quot;, cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  text-align: right;
  letter-spacing: 1px;
}</code>

## Table styling quick tip

- Make your table markup as simple as possible, and keep things flexible, e.g. by using percentages, so the design is more responsive.
- Use <code>table-layout: fixed</code> to create a more predictable table layout that allows you to easily set column widths by setting width on their headings (<code>&lt;th&gt;</code>).
- Use <code>border-collapse: collapse to make table elements borders collapse into each other, producing a neater and easier to control look.
- Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to break up your table into logical chunks and provide extra places to apply CSS to, so it is easier to layer styles on top of one another if required.
- Use <code>zebra</code> striping to make alternative rows easier to read.
- Use <code>text-align</code> to line up your <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> text, to make things neater and easier to follow.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/66-styling-tables/66-styling-tables/b-styling-our-table/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/66-styling-tables/66-styling-tables/b-styling-our-table/">Visit website</a>
  </dd>
</dl>
