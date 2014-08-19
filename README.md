# Zappa

*Zappa* is a tiny full javascript templating library. Instead of writing mix of HTML and Javascript/*Angular Expressions*, write only javascript !

## Examples

```javascript
    z('body')
        .elements([
            z().h1().text('This is Zappa !'),
            z().p().text('It\'s easy to write a zappa template.')
        ])
```

will append to `<body>`:

```html
    <h1>This is Zappa !</h1>
    <p>It's easy to write a zappa template.</p>
```