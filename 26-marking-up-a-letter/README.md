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
  - You should markup semester start dates as an unordered list (&lt;ul&gt;/&lt;li&gt;), or arguably an ordered list (&lt;ol&gt;/&lt;li&gt;) — either is ok
  - Marking up study subjects as an ordered list (&lt;ol&gt;/&lt;li&gt;)
  - Marking up the exotic dances as a description list (&lt;dl&gt;/&lt;dd&gt;/&lt;dt&gt;)
- Marking up the two addresses using the &lt;address&gt; elements. You should make each line of the address sit on a new line using the &lt;br&gt; elements.

## Inline semantics

