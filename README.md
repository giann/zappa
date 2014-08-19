# Zappa

*Zappa* is a tiny full javascript templating library. Instead of writing mix of HTML and Javascript/*Angular Expressions*, write only javascript !

## Examples

```javascript
    z('body')
        .elements([
            z().h1().text('This is Zappa !'),
            z().section({class: 'content'})
                .elements([
                    z().p().text('It\'s easy to write a zappa template.'),
                    z().ul()
                        .elements([
                            z().li().text('very'),
                            z().li().text('much'),
                            z().li().text('easy')
                        ])
                ])
        ])
```

will append to `<body>`:

```html
    <h1>This is Zappa !</h1>
    <section class="content">
        <p>It's easy to write a zappa template.</p>
        <ul>
            <li>very</li>
            <li>much</li>
            <li>easy</li>
        </ul>
    </section>
```