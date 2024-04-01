# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create, Read, Update, Delete
- How do you add a row to a SQL table?
  Insert statement with <insert into "table"("attributes") values('values') returning \*>
- How do you add multiple rows to a SQL table at once?
  multiple tuples.
- How do you update rows in a database table?
  update {table}
  set "attribute" = 'value'
  where "attribute" = 'value'
- How do you delete rows from a database table?
  delete
  from "Table"
  where "attribute" = 'value'
  and "attribute" = 'value'
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  So it does not update or delete all rows.
- How do you accidentally delete or update all rows in a table?
  Without setting a where
- How do you get back the modified row without a separate `select` statement?
  returning \*
- Why did you get an error when trying to delete certain films?
  The values in some films are utilized in other tables.

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
