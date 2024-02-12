# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To see what our code is outputting and to debug.
- What is the purpose of events and event handling?
  To have the code react to changes in the system. The handling allows a function to be conducted when an event occurs.
- Are all possible parameters required to use a JavaScript method or function?
  No, some are optional.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()
- What is a callback function?
  A function you send as an argument into another function.
- What object is passed into an event listener callback when the event fires?
  event
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  It is the element that was acted upon to trigger the event. Check MDN.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The first is a correctly formatted event listened with a callback function. The second is incorrect.

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
