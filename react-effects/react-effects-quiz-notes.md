# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When the page loads for the first time.
- What is a React Effect?
  A way to handle functions outside of React, like async function
- When should you use an Effect and when should you not use an Effect?
  When you can get information from State and react, don't need to use Effect.
- When do Effects run?
  After components are rendered.
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  in an array after the callback function in useEffect(). They tell react when and what to call multiple times.
- Why would you want to clean up from an Effect?
  May need a way to clear up an effect.
- How do you clean up from an Effect?
  send it as a function.
- When does the cleanup function run?
  On close of the page.

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
