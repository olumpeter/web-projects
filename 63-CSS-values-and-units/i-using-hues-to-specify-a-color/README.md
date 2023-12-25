# CSS values and units: Using hues to specify a color

If you want to go beyond **keywords**, **hexadecimal**, and **<code>rgb()</code>** for colors, you might want to try using <code>&lt;hue&gt;</code>. **Hue** is the property that allows us to tell the difference or similarity between colors like <code>red</code>, <code>orange</code>, <code>yellow</code>, <code>green</code>, <code>blue</code>, etc. The key concept is that you can specify a hue in an <code>&lt;angle&gt;</code> because most of the color models describe **hues** using a **color wheel**. 
    
A great starting point for using hues in CSS is the <code>hsl()</code> function. Let's take a quick look at the parts you can specify:

- **Hue**: The base shade of the color. This takes a <code>&lt;hue&gt;</code> value between <code>0</code> and <code>360</code>, representing the angles around a **color wheel**.
- **Saturation**: How saturated is the color? This takes a value from <code>0–100%</code>, where <code>0</code> is no color (it will appear as a shade of grey), and <code>100%</code> is full color saturation.
- **Lightness**: How light or bright is the color? This takes a value from <code>0–100%</code>, where <code>0</code> is no light (it will appear completely black) and <code>100%</code> is full light (it will appear completely white).

Similar to <code>rgb()</code>, the <code>hsl()</code> color value also has an optional fourth value, separated from the color with a slash (<code>/</code>), representing the **alpha transparency.**

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/63-CSS-values-and-units/i-using-hues-to-specify-a-color/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/63-CSS-values-and-units/i-using-hues-to-specify-a-color/">Visit website</a>
  </dd>
</dl>
