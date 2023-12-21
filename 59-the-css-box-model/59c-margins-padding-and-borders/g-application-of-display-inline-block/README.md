# The CSS Box-model: Application of display: inline-block
  
Where <code>display: inline-block</code> can be useful is when you want to give a link a larger hit area by adding padding. <code>&lt;a&gt;</code> is an <code>inline</code> element like <code>&gt;span&gt;</code> you can use <code>display: inline-block</code> to allow padding to be set on it, making it easier for a user to click the link.

You see this fairly frequently in navigation bars. The navigation below is displayed in a row using <code>flexbox</code> and we have added <code>padding</code> to the <code>&lt;a&gt;</code> element as we want to be able to change the background-color when the <code>&lt;a&gt;</code> is hovered. The <code>padding</code> appears to overlap the <code>border</code> on the <code>&lt;ul&gt;</code> element. This is because the <code>&lt;a&gt;</code> is an <code>inline</code> element.
    
Add <code>display: inline-block</code> to the rule with the <code>.links-list</code> a selector, and you will see how it fixes this issue by causing the <code>padding</code> to be respected by other elements.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/59-the-css-box-model/59c-margins-padding-and-borders/g-application-of-display-inline-block/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/59-the-css-box-model/59c-margins-padding-and-borders/g-application-of-display-inline-block/">Visit website</a>
  </dd>
</dl>
