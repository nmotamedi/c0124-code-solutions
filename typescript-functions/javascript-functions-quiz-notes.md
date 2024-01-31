# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?
  a way to systematically package code to be easily reused later in the code.
- Describe the parts of a function **definition**.
  functionKeyword functionName (parameters) {
  code block;
  return optional;
  }
- Describe the parts of a function **call**.
  functionName(arguments);
- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?
  The block of code and the functionality is created and done within the definition, then simply utilized in the call through the function name.
- What is the difference between a **parameter** and an **argument**?
  parameter is the template placeholder in the definition of a function, the argument is what is passed through when the function is called.
- Why are function **parameters** useful?
  Since we won't know the actual values of what we are passing in, the placeholders are useful.
- What two effects does a `return` statement have on the behavior of a function?
  Breaks the function so that any code under it is unreachable. It also passes a value from the function.
- What is the syntax for defining an arrow function?
  const variable = (parameters) => {
  codeblock
  };
- When an arrow function's body is not surrounded in curly braces (concise body syntax), what changes in its functionality?
  There is an automatic return value if it is in one line.

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
