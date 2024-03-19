# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  React functions that connects to react features.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  -functions need to start with useUppercaseLetter()
  -hook can only be called at the top level of a component
  -can only be called by component or another hook.
- What is the purpose of state in React?
  To hold and change a variable between renders of a component, and trigger a rerender.
- Why can't we just maintain state in a local variable?
  It will be reset back to the local variable when the component is recalled, and there is no way to rerender.
- What two actions happen when you call a `state setter` function?
  The state value is updated and the component is rerendered.
- When does the local `state variable` get updated with the new value?
  Upon the rerender.

How to set values based on one click?
Maybe add an onClick to the button on app.tsx that updates the index, then sends the index as a prop to each value that changes. That way, the whole app is rerendered.

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
