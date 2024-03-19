# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  An event is a way for React to call functions if various external things happen based on user interaction.
- What is an "event handler"? Which component declares the handler?
  The function that is called when an event occurs. The handler is declared at the highest parent that can then send out different props to children.
- How do you pass an event handler to a React component?
  As a prop.
- What is the naming convention for event handlers?
  handleUpperCase
- What is an "event handler prop"? Which component declares the prop?
  The Parent declares the event handler as a way to communicate with the child that incurs the event.
- What are some custom event handler props a component may wish to define?
  onButtonClick, onFormSubmit, etc
- What is the naming convention for custom event handler props?
  onUpperCase

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
