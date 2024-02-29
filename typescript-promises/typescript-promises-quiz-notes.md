# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  Pending promise, then fulfillment or rejection, then settled with the .then(onFulfillment) or .catch(onRejection), then return those into new promises.
- What are the three states a Promise can be in?
  Pending, fulfilled, rejected
- How do you handle the fulfillment of a Promise?
  with the first callback of the .then()
- How do you handle the rejection of a Promise?
  with the second callback of the .then() or a .catch();

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
