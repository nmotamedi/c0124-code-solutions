# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To track how our code is running and outputting.
- What is a "model"?
  A way to organize/process information in the HTML
- Which "document" is being referred to in the phrase Document Object Model?
  HTML
- What is the word "object" referring to in the phrase Document Object Model?
  The elements of the HTML are accessible as a JS Object
- What is a DOM Tree?
  The order/heirarchy of the HTML.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector, getElementById
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll
- Why might you want to assign the return value of a DOM query to a variable?
  So the code doesn't have to query the HTML document every time to access the information. Saves space.
- What `console` method allows you to inspect the properties of a DOM element object?
  dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  So that the script can access all the content of the page.
- What does `document.querySelector()` take as its argument and what does it return?
  CSS selector, Object
- What does `document.querySelectorAll()` take as its argument and what does it return?
  CSS selector, Node of various objects

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
