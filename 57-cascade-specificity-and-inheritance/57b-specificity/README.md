# Specificity

Specificity is the algorithm that the browser uses to decide which property value is applied to an element. If multiple style blocks have different selectors that configure the same property with different values and target the same element, specificity decides the property value that gets applied to the element. Specificity is basically a measure of how specific a selector's selection will be:
- An element selector is less specific; it will select all elements of that type that appear on a page, so it has less weight. Pseudo-element selectors have the same specificity as regular element selectors.
- A class selector is more specific; it will select only the elements on a page that have a specific class attribute value, so it has more weight. Attribute selectors and pseudo-classes have the same weight as a class.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/57-cascade-specificity-and-inheritance/57b-specificity/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/57-cascade-specificity-and-inheritance/57b-specificity/">Visit website</a>
  </dd>
</dl>
