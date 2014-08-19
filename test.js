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