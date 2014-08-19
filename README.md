# Zappa

*Zappa* is a tiny full javascript templating library. Instead of writing mix of HTML and Javascript/*Angular Expressions*, write only javascript !

## Examples

```javascript
    var context = {
        name: 'Zappa',
        things: ['very', 'much', 'easy']
    };

    z('body')
        .elements([
            z.h1().text('This is ' + context.name + ' !'),
            z.section({class: 'content'})
                .elements([
                    z.p().text('It\'s easy to write a zappa template.'),
                    z.ul()
                        .elements(
                            context.things.map(function (item) {
                                return z.li().text(item); 
                            })
                        )
                ])
        ]);
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