# <img src="https://raw.githubusercontent.com/giann/zappa/master/logo.png" alt="Zappa" height="25"> Zappa

*Zappa* is a tiny javascript only templating library for the browser. Instead of writing a mix of HTML and Javascript/*Angular Expressions*, write only javascript !

*Zappa* uses actual `HTMLElement`s internally. You can directly use them and avoid the parsing step of string based template systems. The generated HTML is always valid.

*Zappa* is javascript only: no pseudo-language to learn or special delimiters to use, only javascript code.

**Requirements:** [Lodash](http://lodash.com/)

## Quick Start

### Installation

```shell
bower install zappa
```

### Overview

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

### Zappa's functions

There is a function for every HTML5 tag:

```javascript
z.div();
z.span();
z.ul();
z.form();
...
```

If you miss one or you want to use [web components](http://www.polymer-project.org/), you can use `element`:


```javascript
z.element('newtag');
```

will generate

```html
<newtag></newtag>
```

To add text inside an element, use `text`:

```javascript
z.div().text('this text is in the div.');
```

will generate

```html
<div>this text is in the div</div>
```

### Root expression

###### You can call any element function (div, span, etc.) directly on `z`:

```javascript
z.div();
```

will generate a lone `div`:

```html
<div></div>
````

###### You can wrap an element from the DOM:

```javascript
z(document.body)
    .div().text('this is appended to the body');
```

Any subsequent element function will append the generated HTML to the wrapped element:

```html
<body>
    <div>this is appended to the body</div> 
</body>
````

###### You can wrap the result of a query:

```javascript
z('.container')
    .div().text('this is appended to the .container');
```

Any subsequent element function will append the generated HTML to the wrapped element found by the query:

```html
<div class="container">
    <div>this is appended to the .container</div> 
</div>
````

### Attributes

To add attributes to an element, simply pass an object to the function:

```javascript
z.form({
    'class': 'container',
    'name': 'aForm',
    'action': '/gothere'
});
```

will generate

```html
<form class="container" name="aForm" action="/gothere">
</form>
```

###### You can use functions instead of `attributes` values:

```javascript
z.div({
    class: function () {
        if (document.documentElement.clientWidth < 768) {
           return 'mobile';
        } else {
           return 'desktop';
        }
    }
});
```

will generate:

```html
<div class="desktop"></div>
```

or if you're on a tiny screen:

```html
<div class="mobile"></div>
```

### Multiple children

To append several elements to the same root, use `elements`:

```javascript
z.ul().elements([
    z.li().text('one'),
    z.li().text('two'),
    z.li().text('three')
]);
```

will generate:

```html
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
````

###### You can use a function instead of `elements` array argument:

```javascript
var things = ['one', 'two', 'three']

z.ul().elements(function () {
    return things.map(function (item) {
        return z.span().text(item + ' ' + item);
    });
});
```

will generate:

```html
<ul>
    <li>one one</li>
    <li>two two</li>
    <li>three three</li>
</ul>
```

### Get the result

The preferred way to use zappa's result is `value` which returns the `HTMLElement` generated:

```javascript
z.div().text('get me !').value();
```

will return the root `HTMLElement` of the generated HTML.

But you can still work with strings, if you are required to, with `html`:

```javascript
z.div().text('get me !').html();
```
will return the `outerHTML` of the generated HTML.
