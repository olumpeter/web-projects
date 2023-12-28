# Styling text: Web fonts

## Font families recap -
The fonts applied to your HTML can be controlled using the 
<code>font-family</code property. This takes one or more font family 
names. When displaying a webpage, a browser will travel down a list of 
<code>font-family</code> values until it finds a font available on the 
system it is running on:

```
p {
  font-family: Helvetica, &quot;Trebuchet MS&quot;, Verdana, sans-serif;
}    
```

There are only a handful of fonts that you can guarantee to be available 
across all common systems — the so-called **Web-safe fonts**. You can use 
the font stack to specify preferred fonts, followed by web-safe alternatives, 
followed by the default system font. However, this increases your workload 
because of the testing required to make sure that your designs work with 
each font.

## Web fonts
But there is an alternative that works very well. CSS allows you to specify 
font files, available on the web, to be downloaded along with your website 
as it's accessed. This means that any browser supporting this CSS feature can 
display the fonts you've specifically chosen. Amazing! The syntax required 
looks something like this:

First of all, you have a <code>@font-face</code> ruleset at the start of 
the CSS, which specifies the font file(s) to download:

```
@font-face {
  font-family: &quot;myFont&quot;;
  src: url(&quot;myFont.woff2&quot;);
}
```

Below this you use the font family name specified inside <code>@font-face</code> 
to apply your custom font to anything you like, as normal:

```
html {
  font-family: &quot;myFont&quot;, &quot;Bitstream Vera Serif&quot;, serif;
}

```

The syntax does get a bit more complex than this. We'll go into more detail below.

## Finding fonts

For this example, we'll use two web fonts: one for the headings and one for 
the body text. To start with, we need to find the font files that contain the 
fonts. Fonts are created by font foundries and are stored in different file 
formats. There are generally three types of sites where you can obtain fonts:

- A free font distributor: This is a site that makes free fonts available for 
download (there may still be some license conditions, such as crediting the 
font creator). Examples include **Font Squirrel**, **dafont**, and **Everything 
Fonts.**
- A paid font distributor: This is a site that makes fonts available for a 
charge, such as **fonts.com** or **myfonts.com**. You can also buy fonts 
directly from font foundries, for example **Linotype**, **Monotype**, or 
**Exljbris**.
- An online font service: This is a site that stores and serves the fonts for 
you, making the whole process easier.

Let's find some fonts! Go to **Font Squirrel** and choose two fonts: a nice 
interesting font for the headings (maybe a nice display or slab serif font), 
and a slightly less flashy and more readable font for the paragraphs. When 
you've found a font, press the download button and save the file inside the 
same directory as the HTML and CSS files you saved earlier. It doesn't matter 
whether they are TTF (True Type Fonts) or OTF (Open Type Fonts).

Unzip the two font packages (Web fonts are usually distributed in ZIP files 
containing the font file(s) and licensing information). You may find multiple 
font files in the package — some fonts are distributed as a family with 
different variants available, for example thin, medium, bold, italic, thin 
italic, etc. For this example, we just want you to concern yourself with a 
single font file for each choice.

Note: In Font Squirrel, under the &quot;Find fonts&quot; section in the 
right-hand column, you can click on the different tags and classifications to 
filter the displayed choices.

## Generating the required code

Now you'll need to generate the required code (and font formats). For each 
font, follow these steps:

1. Make sure you have satisfied any licensing requirement if you are going to 
use this in a commercial and/or Web project.
1. Go to the Fontsquirrel **Webfont Generator**.
1. Upload your two font files using the Upload Fonts button.
1. Check the checkbox labeled &quot;Yes, the fonts I'm uploading are legally
 eligible for web embedding.&quot;
1. Click Download your kit.

After the generator has finished processing, you should get a ZIP file to 
download. Save it in the same directory as your HTML and CSS.

If you need to support legacy browsers, select the &quot;Expert&quot; mode in 
the Fontsquirrel Webfont Generator, select SVG, EOT, and TTF formats before 
downloading your kit.

Web services for font generation typically limit file sizes. In such a case, 
consider using tools such as:

1. **sfnt2woff-zopfli** for converting ttf to woff
1. **fontforge** for converting from ttf to svg
1. **batik ttf2svf** for converting from ttf to svg
1. **woff2** for converting from ttf to woff2

## Implementing the code in your demo

At this point, unzip the webfont kit you just generated. Inside the unzipped 
directory you'll see some useful items:

- Two versions of each font: the .woff, .woff2 files.
- A demo HTML file for each font — load these in your browser to see what the 
font will look like in different usage contexts.
A stylesheet.css file, which contains the generated @font-face code you'll need.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-projects/70-styling-text/d-web-fonts/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-projects/70-styling-text/d-web-fonts/">Visit website</a>
  </dd>
</dl>
