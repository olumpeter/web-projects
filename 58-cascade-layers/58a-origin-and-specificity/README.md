# Origin and specificity

In this project, there are two links. The first has no author styles applied, so only user-agent styles are applied (and your personal user styles, if any). The second has text-decoration and color set by author styles even though the selector in the author stylesheet has a specificity of 0-0-0. The reason why author styles <code>&quot;win&quot;</code> is because when there are conflicting styles from different origins, the rules from the origin with precedence are applied, irrespective of the specificity in the origin that doesn't have precedence.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/58-cascade-layers/58a-origin-and-specificity/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/58-cascade-layers/58a-origin-and-specificity/">Visit website</a>
  </dd>
</dl>
