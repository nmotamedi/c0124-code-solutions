# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They can set ways different expressions are run depending on if elements are truthy or falsy.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  && - if the first element is false, the second element is not run. || - if the first element is true, the second element is not run.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  specific to null or undefined falsy expressions, whereas || tests for all falsy.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  Similar to if else, but is mainly used for assignment or returns as it only exists as one expression.
- What is the `?.` (optional chaining) operator? When would you use it?
  It returns undefined if any value is null or undefined when accessing values in an object or array. Helpful when some properties are optional.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It spreads each element in an array or object into elements that can be input into functions as arguments or into other elements/objects.
- What data types can be spread into an array? Into an object?
  iterable types - array or string. Key:value pairs for objects.
- How does spread syntax differ from rest syntax?
  rest syntax pulls elements into one element, while spread does the opposite.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
