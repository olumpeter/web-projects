# Marking up a letter: 

This project helps you to actively learn text basic and advanced HTML text formatting, use of hyperlinks, and use of HTML <code>&lt;head&gt;</code>.  The following areas are covered:

## Block/structural semantics

This involves:
- Structuring the overall document with an appropriate structure including <code>&lt;!DOCTYPE html&gt;</code>, and <code>&lt;html lang="en-US"&gt;</code>, <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> elements.
- Marking up the letter with a structure of paragraphs and headings.
  - The "Re:" in the letter should be the only level one heading marked up using <code>&lt;h1&gt;</code> HTML element.
  - The sections in the letter such as "Starting dates", "Subjects of study" and "Exotic dance moves" should be marked up as level 2 headers marked using <code>&lt;h1&gt;</code> HTML element.
  - All appropriate structural elements that shouldn't be headings or lists should be marked up as paragraphs.
- Marking up semester start dates, study subjects and exotic dances using appropriate list type
  - You should markup semester start dates as an unordered list (<code>&lt;ul&gt;/&lt;li&gt;</code>), or arguably an ordered list (<code>&lt;ol&gt;/&lt;li&gt;</code>) — either is ok
  - Marking up study subjects as an ordered list (<code>&lt;ol&gt;/&lt;li&gt;</code>)
  - Marking up the exotic dances as a description list (<code>&lt;dl&gt;/&lt;dd&gt;/&lt;dt&gt;</code>)
- Marking up the two addresses using the <code>&lt;address&gt;</code> elements. You should make each line of the address sit on a new line using the <code>&lt;br&gt;</code> elements.

## Inline semantics
- The names of the sender and receiver (and "Tel" and "Email") should be marked up with strong importance by wrapping them in a <code>&lt;strong&gt;</code> element.
- The four dates in the document should be given appropriate elements containing machine-readable dates using a <code>&lt;time&gt;</code> element. Each one should have a datetime attribute containing a machine readable date. For example <code>&lt;time datetime="2016-01-20"&gt;20 January 2016&gt;/time&gt;</code>
- The first address and first date in the letter should be given a class attribute value of <code>"sender-column";</code> the CSS you'll add later will then cause these to be right aligned, as should be the case in a classic letter layout.
- The five acronyms/abbreviations ("PhD", "HTML", "CSS", "BC" and "Esq") in the main text of the letter should be marked up to provide expansions of each acronym/abbreviation using <code>&lt;abbr&gt;</code> element with a title attribute. For example, <code>&lt;abbr title="Cascading Style Sheets"&gt;CSS&lt;/abbr&gt;</code>
- The six sub/superscripts (<code>H<sub>2</sub>O</code>, <code>C<sub>14</sub>H<sub>12</sub>O<sub>12</sub></code>, <code>30<sup>o</sup>C</code>, <code>86<sup>o</sup>F</code>, <code>3 × 10<sup>3</sup></code>, and <code>3 × 10<sup>4</sup></code>) should be marked up appropriately using either <code>&lt;sub&gt;</code> or <code>&lt;sup&gt;</code> HTML elements.
- At least two appropriate words in the text should be marked up with strong importance/emphasis using either the <code>&lt;strong&gt;</code> element or <code>&lt;em&gt;</code> element.
- Add a hyperlink to the phrases "important university dates" and "exotic dance research page." with appropriate links and titles. For the location that the links point to, just use http://example.com. This should be marked using &lt;a&gt; element with a reasonable word to make that link.
- The university motto quote and citation should be wrapped in a <code>&lt;q&gt;</code> element, and "The memoirs of Bill S Preston, Esq" should be wrapped in a <code>&lt;cite&gt;</code> element.

## The head of the document

- The character set of the document should be specified as utf-8 using <code>&lt;meta charset="utf-8"&gt;</code> inside the <code>&lt;head&gt;</code> element.
- The author of the letter should be specified in an appropriate meta tag using <code>&lt;meta name="author" content="Dr. Eleanor Gaye"&gt;</code> inside the <code>&lt;head&gt;</code> element.
- The provided CSS should be included in a file called style.css in a folder called styles and linked to the web page using <code><link href="styles/style.css", rel="stylesheet"></code>

## Other tasks

Use the <code><a href="https://validator.w3.org/" title="Validate HTML document">W3C HTML validator</a></code> to validate your HTML. 
