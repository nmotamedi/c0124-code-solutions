# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  async is used for the function call, and await is used when calling the promise.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  It is more easily readible and can throw clearer errors.
- When do you use `async`?
  When defining the asyncronous function.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  When getting the value of the promise. It puts it into task stack so takes it out of the call stack.
- How do you handle errors with `await`?
  catching it.
- What do `try`, `catch` and `throw` do? When do you use them?
  try is the body in which you are running code. If an error occurs, code in the try stops running and moves onto the catch, where the error is sent and thrown into the console.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it will resolve like a typical promise.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await - reads clearer.

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
