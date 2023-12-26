# Images, media, and form elements: Form elements

Many form controls are added to your page by way of the <code>&lt;input&gt;</code> element — this defines simple form fields such as text inputs, through to more complex fields such as color and date pickers. There are some additional elements, such as <code>&lt;textarea&gt;</code> for multiline text input, and also elements used to contain and label parts of forms such as <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>.

HTML also contains attributes that enable web developers to indicate which fields are required, and even the type of content that needs to be entered. If the user enters something unexpected, or leaves a required field blank, the browser can show an error message. Different browsers vary with one another in how much styling and customization they allow for such items.
    
In the example in this project, we have styled some text inputs using CSS — you can see that things such as borders, margins and padding all apply as you would expect. We are using attribute selectors to target the different input types. Try changing how this form looks by adjusting the borders, adding background colors to the fields, and changing fonts and padding.
    

>"**Warning:** 
You should take care when changing the styling of form elements to make sure it is still obvious to the user they are form elements. You could create a form input with no borders and background that is almost indistinguishable from the content around it, but this would make it very hard to recognize and fill in."
    
Inheritance and form elements: In some browsers, form elements do not inherit font styling by default. Therefore, if you want to be sure that your form fields use the font defined on the body, or on a parent element, you should add this rule to your CSS.
    
<code>button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}</code>
    
**Form elements and box-sizing:**
Across browsers, form elements use different box sizing rules for different widgets. You learned about the box-sizing property in our box model lesson and you can use this knowledge when styling forms to ensure a consistent experience when setting widths and heights on form elements.

For consistency, it is a good idea to set margins and padding to 0 on all elements, then add these back in when styling particular controls:

<code>button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}</code>

**Other useful settings:**
In addition to the rules mentioned above, you should also set <code>overflow: auto</code> on <code>&lt;textarea&gt;</code>s to stop IE showing a scrollbar when there is no need for one:

<code>textarea {
  overflow: auto;
}</code>

**Putting it all together into a &quot;reset&quot;**:

<code>button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}</code>

<code>textarea {
  overflow: auto;
}</code>

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/65-images-media-and-form-elements/c-form-elements/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/65-images-media-and-form-elements/c-form-elements/">Visit website</a>
  </dd>
</dl>
