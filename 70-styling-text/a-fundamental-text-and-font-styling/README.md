# Styling text: Fundamental text and font styling

Here, we'll go through all the basic fundamentals of text/font styling in detail, including setting font weight, family and style, font shorthand, text alignment and other effects, and line and letter spacing.
    
## What is involved in styling text in CSS? 

Text inside an element is laid out inside the **element's content box**. It starts at the **top left** of the **content area**, and flows towards the end of the line. Once it reaches the end, it goes down to the next line and flows to the end again. This pattern repeats until all the content has been placed in the box. 
Text content effectively behaves like a series of **inline elements**, being laid out on lines adjacent to one another, and not creating line breaks until the 
end of the line is reached, or unless you force a line break manually using the <code>&lt;br&gt;</code> element.

The CSS properties used to style text generally fall into two categories:
- **Font styles**: Properties that affect a text's font, e.g., which font gets applied, its size, and whether it's bold, italic, etc.
- **Text layout styles**: Properties that affect the spacing and other layout features of the text, allowing manipulation of, for example, the space between lines and letters, and how the text is aligned within the content box.

**Note**: Bear in mind that the text inside an element is all affected as one single entity. You can't select and style subsections of text unless you 
wrap them in an appropriate element (such as a <code>&lt;span&gt;</code> or <code>&lt;strong&gt;</code>), or use a text-specific pseudo-element like <code>::first-letter</code> (selects the first letter of an element's text), <code>::first-line</code> (selects the first line of an element's text), or <code>::selection </code>(selects the text currently highlighted by the cursor).

## Fonts 

Let's look at properties for styling fonts:

- The <code>color</code> property sets the color of the foreground content of the selected elements, which is usually the text, but can also include a couple of other 
things, such as an <code>underline</code> or <code>overline</code> placed on text using the <code>text-decoration</code> property.
- To set a different font for your text, you use the <code>font-family</code> property — this allows you to specify a font (or list of fonts) for the browser to apply 
to the selected elements. The browser will only apply a font if it is available on the machine the website is being accessed on; if not, it will just use a 
browser default font. Here is a list of default fonts:
  - <code>serif</code> - Fonts that have serifs (the flourishes and other small details you see at the ends of the strokes in some typefaces).
  - <code>sans-serif</code> - Fonts that don't have serifs.
  - <code>monospace</code> - Fonts where every character has the same width, typically used in code listings.
  - <code>cursive</code> - Fonts that are intended to emulate handwriting, with flowing, connected strokes.
  - <code>fantasy</code> - Fonts that are intended to be decorative.
  
### Font size

The most common units you'll use to size text are:
- <code>px</code> (pixels): This is an absolute unit — it results in the same final computed value for the font on the page in pretty much any situation.
- <code>ems</code>: 1 em is equal to the font size set on the parent element of the current element we are styling (more specifically, the width of a capital 
letter M contained inside the parent element). This can become tricky to work out if you have a lot of nested elements with different font sizes set, but it is doable. Why bother? It is quite natural once you get used to it, and you can use em to size everything, not just text. You can have an entire website sized using em, which makes maintenance easy.
- <code>rems</code>: These work just like <code>em</code>, except that **1 rem** is equal to the font size set on the root element of the document (i.e. <code>&lt;html&gt;</code>), not the parent element. This makes doing the maths to work out your font sizes much easier.

The <code>font-size</code> of an element is inherited from that element's parent element. This all starts with the root element of the entire document — <code>&lt;html&gt;</code> — the standard <code>font-size</code> of which is set to <code>16px</code> across browsers. Any paragraph (or another element that doesn't have a different size set by the browser) inside the root element will have a final size of <code>16px</code>. Other elements may have different default sizes. For example, an h1 element has a size of<code>2em</code> set by default, so it will have a final size of <code>32px</code>.

### Font style, font weight, text transform, and text decoration

CSS provides four common properties to alter the visual weight/emphasis of text:

- <code>font-style</code>: Used to turn italic text on or off. Possible values are as follows (you'll rarely use this, unless you want to turn some italic styling 
off for some reason):
      - <code>normal</code>: Sets the text to the normal font (turns existing italics off).
      - <code>italic</code>: Sets the text to use the italic version of the font, if available; if not, it will simulate italics with oblique instead.
      - <code>oblique</code>: Sets the text to use a simulated version of an italic font, created by slanting the normal version.
- <code>font-weight</code>: Sets how bold the text is. This has many values available in case you have many font variants available (such as -light, -normal, -bold, -extrabold, -black, etc.), but realistically you'll rarely use any of them except for normal and bold:
      - <code>normal</code>, <code>bold</code>: Normal and bold font weight.
      - <code>lighter</code>, <code>bolder</code>: Sets the current element's boldness to be one step lighter or heavier than its parent element's boldness.
      - <code>100</code> - <code>900</code>: Numeric boldness values that provide finer grained control than the above keywords, if needed.
- <code>text-transform</code>: Allows you to set your font to be transformed. Values include:
      - <code>none</code>: Prevents any transformation.
      - <code>uppercase</code>: Transforms all text to capitals.
      - <code>lowercase</code>: Transforms all text to lower case.
      - <code>capitalize</code>: Transforms all words to have the first letter capitalized.
      - <code>full-width</code>: Transforms all glyphs to be written inside a fixed-width square, similar to a monospace font, allowing aligning of, e.g., Latin 
      characters along with Asian language glyphs (like Chinese, Japanese, Korean).
- <code>text-decoration</code>: Sets/unsets text decorations on fonts (you'll mainly use this to unset the default underline on links when styling them). Available values are:
      - <code>none</code>: Unsets any text decorations already present.
      - <code>underline</code>: Underlines the text.
      - <code>overline</code>: Gives the text an overline.
      - <code>line-through</code>: Puts a strikethrough over the text.
      
      You should note that text-decoration can accept multiple values at once if you want to add multiple decorations simultaneously, for example, text-decoration: underline overline. Also note that text-decoration is a shorthand property for text-decoration-line, text-decoration-style, and text-decoration-color. You can use combinations of these property values to create interesting effects, for example: text-decoration: line-through red wavy.

### Text drop shadows

You can apply drop shadows to your text using the <code>text-shadow property</code>. This takes up to four values: <code>text-shadow: 4px 4px 5px red;</code>

The four properties are as follows:

  1. The **horizontal offset of the shadow** from the original text — this can take most available CSS length and size units, but you'll most commonly use <code>px</code>; positive values move the shadow right, and negative values left. This value has to be included.
  1. The **vertical offset of the shadow** from the original text. This behaves similarly to the horizontal offset, except that it moves the shadow up/down, not left/right. This value has to be included.
  1. The **blur radius**: a higher value means the shadow is dispersed more widely. If this value is not included, it defaults to <code>0</code>, which means no blur. This can take most available CSS length and size units.
  1. The base color of the shadow, which can take any CSS color unit. If not included, it defaults to currentcolor, i.e. the shadow's color is taken from the element's color property.

### Multiple shadows

You can apply multiple shadows to the same text by including multiple shadow values separated by commas, for example:

      ```
      h1 {
        text-shadow:
          1px 1px 1px red,
          2px 2px 1px red;
      }
      ```
## Text layout

Let's have a look at properties we can use to affect text layout.

### Text alignment

The <code>text-align</code> property is used to control how text is aligned within its containing content box. The available values are listed below. They work 
in pretty much the same way as they do in a regular word processor application:
    - <code>left</code>: Left-justifies the text.
    - <code>right</code>: Right-justifies the text.
    - <code>center</code>: Centers the text.
    - <code>justify</code>: Makes the text spread out, varying the gaps in between the words so that all lines of text are the same width. You need to use this carefully — it can look terrible, especially when applied to a paragraph with lots of long words in it. If you are going to use this, you should also think about using something else along with it, such as hyphens, to break some of the longer words across lines.

### Line height

The <code>line-height</code> property sets the height of each line of text. This property can not only take most length and size units, but can also take a unitless value, which acts as a multiplier and is generally considered the best option. With a unitless value, the <code>font-size</code> gets multiplied and results in the <code>line-height</code>. Body text generally looks nicer and is easier to read when the lines are spaced apart. The recommended line height is around <code>1.5</code> – <code>2</code> (double spaced). To set our lines of text to 1.6 times the height of the font, we'd use:

    ```
    p {
      line-height: 1.6;
    }
    ```
### Letter and word spacing

The <code>letter-spacing</code> and <code>word-spacing</code> properties allow you to set the spacing between letters and words in your text. You won't use these very often, but might find a use for them to obtain a specific look, or to improve the legibility of a particularly dense font. They can take most length and size 
units.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/70-styling-text/a-fundamental-text-and-font-styling/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/70-styling-text/a-fundamental-text-and-font-styling/">Visit website</a>
  </dd>
</dl>
