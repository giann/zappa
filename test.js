describe("Test zappa root expressions", function() {

    it("z.div() works", function() {
        expect(z.div().html()).toBe('<div></div>');
    });

    it("z().div() works", function() {
        expect(z().div().html()).toBe('<div></div>');
    });

    it("z('body') wrap <body>", function() {
        expect(z('body').value().tagName).toBe('HTML');
    });

    it("z(document.body) wrap <body>", function() {
        expect(z(document.body).value().tagName).toBe('HTML');
    });

});

describe("Test HTML5 tags functions", function() {

    it("z.div() works", function() {
        expect(z.div().html()).toBe('<div></div>');
    });

    it("z.span() works", function() {
        expect(z.span().html()).toBe('<span></span>');
    });

    it("z.div() works", function () {
        expect(z.div().html()).toBe('<div></div>')
    });

    it("z.span() works", function () {
        expect(z.span().html()).toBe('<span></span>')
    });

    it("z.ul() works", function () {
        expect(z.ul().html()).toBe('<ul></ul>')
    });

    it("z.li() works", function () {
        expect(z.li().html()).toBe('<li></li>')
    });

    it("z.a() works", function () {
        expect(z.a().html()).toBe('<a></a>')
    });

    it("z.area() works", function () {
        expect(z.area().html()).toBe('<area>')
    });

    it("z.audio() works", function () {
        expect(z.audio().html()).toBe('<audio></audio>')
    });

    it("z.br() works", function () {
        expect(z.br().html()).toBe('<br>')
    });

    it("z.button() works", function () {
        expect(z.button().html()).toBe('<button></button>')
    });

    it("z.canvas() works", function () {
        expect(z.canvas().html()).toBe('<canvas></canvas>')
    });

    it("z.data() works", function () {
        expect(z.data().html()).toBe('<data></data>')
    });

    it("z.datalist() works", function () {
        expect(z.datalist().html()).toBe('<datalist></datalist>')
    });

    it("z.dl() works", function () {
        expect(z.dl().html()).toBe('<dl></dl>')
    });

    it("z.embed() works", function () {
        expect(z.embed().html()).toBe('<embed>')
    });

    it("z.fieldset() works", function () {
        expect(z.fieldset().html()).toBe('<fieldset></fieldset>')
    });

    it("z.form() works", function () {
        expect(z.form().html()).toBe('<form></form>')
    });

    it("z.h1() works", function () {
        expect(z.h1().html()).toBe('<h1></h1>')
    });

    it("z.h2() works", function () {
        expect(z.h2().html()).toBe('<h2></h2>')
    });

    it("z.h3() works", function () {
        expect(z.h3().html()).toBe('<h3></h3>')
    });

    it("z.h4() works", function () {
        expect(z.h4().html()).toBe('<h4></h4>')
    });

    it("z.h5() works", function () {
        expect(z.h5().html()).toBe('<h5></h5>')
    });

    it("z.h6() works", function () {
        expect(z.h6().html()).toBe('<h6></h6>')
    });

    it("z.hr() works", function () {
        expect(z.hr().html()).toBe('<hr>')
    });

    it("z.iframe() works", function () {
        expect(z.iframe().html()).toBe('<iframe></iframe>')
    });

    it("z.img() works", function () {
        expect(z.img().html()).toBe('<img>')
    });

    it("z.input() works", function () {
        expect(z.input().html()).toBe('<input>')
    });

    it("z.label() works", function () {
        expect(z.label().html()).toBe('<label></label>')
    });

    it("z.legend() works", function () {
        expect(z.legend().html()).toBe('<legend></legend>')
    });

    it("z.li() works", function () {
        expect(z.li().html()).toBe('<li></li>')
    });

    it("z.map() works", function () {
        expect(z.map().html()).toBe('<map></map>')
    });

    it("z.video() works", function () {
        expect(z.video().html()).toBe('<video></video>')
    });

    it("z.audio() works", function () {
        expect(z.audio().html()).toBe('<audio></audio>')
    });

    it("z.meter() works", function () {
        expect(z.meter().html()).toBe('<meter></meter>')
    });

    it("z.ins() works", function () {
        expect(z.ins().html()).toBe('<ins></ins>')
    });

    it("z.del() works", function () {
        expect(z.del().html()).toBe('<del></del>')
    });

    it("z.object() works", function () {
        expect(z.object().html()).toBe('<object></object>')
    });

    it("z.ol() works", function () {
        expect(z.ol().html()).toBe('<ol></ol>')
    });

    it("z.optgroup() works", function () {
        expect(z.optgroup().html()).toBe('<optgroup></optgroup>')
    });

    it("z.option() works", function () {
        expect(z.option().html()).toBe('<option></option>')
    });

    it("z.output() works", function () {
        expect(z.output().html()).toBe('<output></output>')
    });

    it("z.p() works", function () {
        expect(z.p().html()).toBe('<p></p>')
    });

    it("z.param() works", function () {
        expect(z.param().html()).toBe('<param>')
    });

    it("z.pre() works", function () {
        expect(z.pre().html()).toBe('<pre></pre>')
    });

    it("z.progress() works", function () {
        expect(z.progress().html()).toBe('<progress></progress>')
    });

    it("z.blockquote() works", function () {
        expect(z.blockquote().html()).toBe('<blockquote></blockquote>')
    });

    it("z.q() works", function () {
        expect(z.q().html()).toBe('<q></q>')
    });

    it("z.cite() works", function () {
        expect(z.cite().html()).toBe('<cite></cite>')
    });

    it("z.script() works", function () {
        expect(z.script().html()).toBe('<script></script>')
    });

    it("z.noscript() works", function () {
        expect(z.noscript().html()).toBe('<noscript></noscript>')
    });

    it("z.select() works", function () {
        expect(z.select().html()).toBe('<select></select>')
    });

    it("z.source() works", function () {
        expect(z.source().html()).toBe('<source>')
    });

    it("z.span() works", function () {
        expect(z.span().html()).toBe('<span></span>')
    });

    it("z.style() works", function () {
        expect(z.style().html()).toBe('<style></style>')
    });

    it("z.table() works", function () {
        expect(z.table().html()).toBe('<table></table>')
    });

    it("z.caption() works", function () {
        expect(z.caption().html()).toBe('<caption></caption>')
    });

    it("z.th() works", function () {
        expect(z.th().html()).toBe('<th></th>')
    });

    it("z.td() works", function () {
        expect(z.td().html()).toBe('<td></td>')
    });

    it("z.col() works", function () {
        expect(z.col().html()).toBe('<col>')
    });

    it("z.colgroup() works", function () {
        expect(z.colgroup().html()).toBe('<colgroup></colgroup>')
    });

    it("z.tr() works", function () {
        expect(z.tr().html()).toBe('<tr></tr>')
    });

    it("z.tfoot() works", function () {
        expect(z.tfoot().html()).toBe('<tfoot></tfoot>')
    });

    it("z.thead() works", function () {
        expect(z.thead().html()).toBe('<thead></thead>')
    });

    it("z.tbody() works", function () {
        expect(z.tbody().html()).toBe('<tbody></tbody>')
    });

    it("z.textarea() works", function () {
        expect(z.textarea().html()).toBe('<textarea></textarea>')
    });

    it("z.time() works", function () {
        expect(z.time().html()).toBe('<time></time>')
    });

    it("z.title() works", function () {
        expect(z.title().html()).toBe('<title></title>')
    });

    it("z.track() works", function () {
        expect(z.track().html()).toBe('<track></track>')
    });

    it("z.ul() works", function () {
        expect(z.ul().html()).toBe('<ul></ul>')
    });

    it("z.section() works", function () {
        expect(z.section().html()).toBe('<section></section>')
    });

    it("z.article() works", function () {
        expect(z.article().html()).toBe('<article></article>')
    });

    it("z.nav() works", function () {
        expect(z.nav().html()).toBe('<nav></nav>')
    });

    it("z.address() works", function () {
        expect(z.address().html()).toBe('<address></address>')
    });

    it("z.aside() works", function () {
        expect(z.aside().html()).toBe('<aside></aside>')
    });


});

describe("Test element's attributes", function() {

    it("z.div({'class': 'aClass'}) generates a div with a class attribute set to 'aClass'", function() {
        expect(z.div({'class': 'aClass'}).html()).toBe('<div class="aClass"></div>');
    });

    it("z.div({'class': function}) generates a div with a class attribute set to the result of function", function() {
        expect(z.div({
            'class': function () {
                return 'aClass';
            }
        }).html()).toBe('<div class="aClass"></div>');
    });

});

describe("Test Zappa utility functions", function() {

    it("element() generates a custom element", function() {
        expect(z.element('div').html()).toBe('<div></div>');
    });

    it("elements() append children to an element", function() {
        expect(
            z.ul()
                .elements([
                    z.li(),
                    z.li(),
                    z.li()
                ])
            .html())
        .toBe('<ul><li></li><li></li><li></li></ul>');
    });

    it("elements(function) append children returned by function to an element", function() {
        expect(
            z.ul()
                .elements(
                    function () {
                        return [
                            z.li(),
                            z.li(),
                            z.li()
                        ]
                    }).html())
        .toBe('<ul><li></li><li></li><li></li></ul>');
    });

    it("text() add a textNode to the parentElement", function() {
        expect(z.div().text('some text').html()).toBe('<div>some text</div>');
    });

});