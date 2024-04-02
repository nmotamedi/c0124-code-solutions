# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  An ID that is established in one table and used in another relationally.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  select \* (or "table"."attribute" as "alias")
  from "table"
  join "table2" using ("attribute");

join "table" on "table2"."attribute" = "table1"."attribute"

- How do you temporarily rename columns or tables in a SQL statement?
  select "table"."attribute" as "alias"
- How do you create a one-to-many relationship between two tables?
  Using a foreign Key from the one list and placing it in the many table.
- How do you create a many-to-many relationship between two tables?
  Using a join table.

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
