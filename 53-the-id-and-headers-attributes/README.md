# The id and headers attributes

An alternative to using the <code>scope</code> attribute is to use <code>id</code> and <code>headers</code> attributes to create associations between headers and cells. The way they are used is as follows:
  1. You add a unique id to each <code>&lt;th&gt;</code> element.
  1. You add a headers attribute to each <code>&lt;td&gt;</code> element.

Each headers attribute has to contain a list of the ids of all the <code>&lt;th&gt;</code> elements that act as a **header** for that cell, separated by spaces. This gives your HTML table an explicit definition of the position of each cell in the table, defined by the header(s) for each column and row it is part of, kind of like a spreadsheet. For it to work well, the table really needs both column and row headers. 

**Note:** This method creates very precise associations between headers and data cells but it uses a lot more markup and does not leave any room for errors. The scope approach is usually enough for most tables.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/53-the-id-and-headers-attributes/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/53-the-id-and-headers-attributes/">Visit website</a>
  </dd>
</dl>
