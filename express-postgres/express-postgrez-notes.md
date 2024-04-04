# express-error-handling-notes

What is the purpose of the pg NPM package?
to allow express to send SQL to postgres.
How do you tell pg which database to connect to?
The database is connected at the end of the connection string in the pool creation.
How do you send SQL to PostgreSQL from your Express server?
db.query().
How do you get the rows return from the SQL query?
Assigning variable the value of the row prop of the object returned from the q.
What must you always remember to put around your asynchronous route handlers? Why?
try/catch - handle errors.
What is a SQL Injection Attack and how do you avoid it in pg?
Avoid it in PG by sending variables to postgres via parameterized queires instead of string arguments. If a hacker has the ability to directly input into the query, they can gain access.

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
