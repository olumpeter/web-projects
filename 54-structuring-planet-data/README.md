# Structuring planet data

The objective of this task is to test your comprehension of HTML tables and associated features. 

You are working at a school; currently your students are studying the planets of our solar system, and you want to provide them with an easy-to-follow set of data to look up facts and figures about the planets. An HTML data table would be ideal — you need to take the raw data you have available and turn it into a table. 

This task will enable you to actively learn how to: 
  1. Give a table a basic high level structure — an outer container using the <code>&lt;table&gt;</code> element, a table header using the <code>&lt;thead&gt</code> element, and a table body using the <code>&lt;tbody&gt;</code> element.
  1. Providing a caption to your table using the <code>&lt;caption&gt;</code> element, which is placed right below the opening <code>&lt;table&gt;</code> element.
  1. Add a row to the table header containing all the column headers by putting the cells of the row inside a <code>&lt;tr&gt;</code> element and using <code>&lt;th&gt;</code> elements for the cells because they are headers. Make sure you leave a two-column gap at the start of the row by setting the value of the <code>colspan</code> attribute to 2, i.e. <code>colspan=&quot;2&quot;</code>. Also make the planet names column a header of &quot;Name&quot; Create all the content rows inside the table body using the <code>&lt;tbody&gt;</code> element, remembering to make all the row headings into headings semantically.
  1. Add attributes to make the row and column headers unambiguously associated with the rows, columns, or rowgroups using the <code>scope</code> attribute of the <code>&lt;th&gt;</code> that they act as headings for.
  1. Add a black border just around the column that contains all the planet name row headers by adding a <code>&lt;colgroup&gt;</code> element just below the <code>&lt;caption&gt;</code> with a <code>style</code> attribute along the lines of <code>style=&quot;border: 2px solid black&quot;</code>.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/54-structuring-planet-data/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/54-structuring-planet-data/">Visit website</a>
  </dd>
</dl>
