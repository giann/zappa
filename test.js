describe("Test zappa root expressions", function() {

    it("should generate a div", function() {
        expect(z.div().html()).toBe('<div></div>');
    });

    it("should generate a div", function() {
        expect(z().div().html()).toBe('<div></div>');
    });

    it("should find and wrap <body>", function() {
        expect(z('body').value().tagName).toBe('HTML');
    });

    it("should wrap document.body", function() {
        expect(z(document.body).value().tagName).toBe('HTML');
    });

});

describe("Test HTML5 tags functions", function() {

    it("should generate a div", function() {
        expect(z.div().html()).toBe('<div></div>');
    });

    it("should generate a span", function() {
        expect(z.span().html()).toBe('<span></span>');
    });

    it("should generate a div", function () {
        expect(z.div().html()).toBe('<div></div>')
    });

    it("should generate a span", function () {
        expect(z.span().html()).toBe('<span></span>')
    });

    it("should generate a ul", function () {
        expect(z.ul().html()).toBe('<ul></ul>')
    });

    it("should generate a li", function () {
        expect(z.li().html()).toBe('<li></li>')
    });

    it("should generate a a", function () {
        expect(z.a().html()).toBe('<a></a>')
    });

    it("should generate a area", function () {
        expect(z.area().html()).toBe('<area>')
    });

    it("should generate a audio", function () {
        expect(z.audio().html()).toBe('<audio></audio>')
    });

    it("should generate a br", function () {
        expect(z.br().html()).toBe('<br>')
    });

    it("should generate a button", function () {
        expect(z.button().html()).toBe('<button></button>')
    });

    it("should generate a canvas", function () {
        expect(z.canvas().html()).toBe('<canvas></canvas>')
    });

    it("should generate a data", function () {
        expect(z.data().html()).toBe('<data></data>')
    });

    it("should generate a datalist", function () {
        expect(z.datalist().html()).toBe('<datalist></datalist>')
    });

    it("should generate a dl", function () {
        expect(z.dl().html()).toBe('<dl></dl>')
    });

    it("should generate a embed", function () {
        expect(z.embed().html()).toBe('<embed>')
    });

    it("should generate a fieldset", function () {
        expect(z.fieldset().html()).toBe('<fieldset></fieldset>')
    });

    it("should generate a form", function () {
        expect(z.form().html()).toBe('<form></form>')
    });

    it("should generate a h1", function () {
        expect(z.h1().html()).toBe('<h1></h1>')
    });

    it("should generate a h2", function () {
        expect(z.h2().html()).toBe('<h2></h2>')
    });

    it("should generate a h3", function () {
        expect(z.h3().html()).toBe('<h3></h3>')
    });

    it("should generate a h4", function () {
        expect(z.h4().html()).toBe('<h4></h4>')
    });

    it("should generate a h5", function () {
        expect(z.h5().html()).toBe('<h5></h5>')
    });

    it("should generate a h6", function () {
        expect(z.h6().html()).toBe('<h6></h6>')
    });

    it("should generate a hr", function () {
        expect(z.hr().html()).toBe('<hr>')
    });

    it("should generate a iframe", function () {
        expect(z.iframe().html()).toBe('<iframe></iframe>')
    });

    it("should generate a img", function () {
        expect(z.img().html()).toBe('<img>')
    });

    it("should generate a input", function () {
        expect(z.input().html()).toBe('<input>')
    });

    it("should generate a label", function () {
        expect(z.label().html()).toBe('<label></label>')
    });

    it("should generate a legend", function () {
        expect(z.legend().html()).toBe('<legend></legend>')
    });

    it("should generate a li", function () {
        expect(z.li().html()).toBe('<li></li>')
    });

    it("should generate a map", function () {
        expect(z.map().html()).toBe('<map></map>')
    });

    it("should generate a video", function () {
        expect(z.video().html()).toBe('<video></video>')
    });

    it("should generate a audio", function () {
        expect(z.audio().html()).toBe('<audio></audio>')
    });

    it("should generate a meter", function () {
        expect(z.meter().html()).toBe('<meter></meter>')
    });

    it("should generate a ins", function () {
        expect(z.ins().html()).toBe('<ins></ins>')
    });

    it("should generate a del", function () {
        expect(z.del().html()).toBe('<del></del>')
    });

    it("should generate a object", function () {
        expect(z.object().html()).toBe('<object></object>')
    });

    it("should generate a ol", function () {
        expect(z.ol().html()).toBe('<ol></ol>')
    });

    it("should generate a optgroup", function () {
        expect(z.optgroup().html()).toBe('<optgroup></optgroup>')
    });

    it("should generate a option", function () {
        expect(z.option().html()).toBe('<option></option>')
    });

    it("should generate a output", function () {
        expect(z.output().html()).toBe('<output></output>')
    });

    it("should generate a p", function () {
        expect(z.p().html()).toBe('<p></p>')
    });

    it("should generate a param", function () {
        expect(z.param().html()).toBe('<param>')
    });

    it("should generate a pre", function () {
        expect(z.pre().html()).toBe('<pre></pre>')
    });

    it("should generate a progress", function () {
        expect(z.progress().html()).toBe('<progress></progress>')
    });

    it("should generate a blockquote", function () {
        expect(z.blockquote().html()).toBe('<blockquote></blockquote>')
    });

    it("should generate a q", function () {
        expect(z.q().html()).toBe('<q></q>')
    });

    it("should generate a cite", function () {
        expect(z.cite().html()).toBe('<cite></cite>')
    });

    it("should generate a script", function () {
        expect(z.script().html()).toBe('<script></script>')
    });

    it("should generate a noscript", function () {
        expect(z.noscript().html()).toBe('<noscript></noscript>')
    });

    it("should generate a select", function () {
        expect(z.select().html()).toBe('<select></select>')
    });

    it("should generate a source", function () {
        expect(z.source().html()).toBe('<source>')
    });

    it("should generate a span", function () {
        expect(z.span().html()).toBe('<span></span>')
    });

    it("should generate a style", function () {
        expect(z.style().html()).toBe('<style></style>')
    });

    it("should generate a table", function () {
        expect(z.table().html()).toBe('<table></table>')
    });

    it("should generate a caption", function () {
        expect(z.caption().html()).toBe('<caption></caption>')
    });

    it("should generate a th", function () {
        expect(z.th().html()).toBe('<th></th>')
    });

    it("should generate a td", function () {
        expect(z.td().html()).toBe('<td></td>')
    });

    it("should generate a col", function () {
        expect(z.col().html()).toBe('<col>')
    });

    it("should generate a colgroup", function () {
        expect(z.colgroup().html()).toBe('<colgroup></colgroup>')
    });

    it("should generate a tr", function () {
        expect(z.tr().html()).toBe('<tr></tr>')
    });

    it("should generate a tfoot", function () {
        expect(z.tfoot().html()).toBe('<tfoot></tfoot>')
    });

    it("should generate a thead", function () {
        expect(z.thead().html()).toBe('<thead></thead>')
    });

    it("should generate a tbody", function () {
        expect(z.tbody().html()).toBe('<tbody></tbody>')
    });

    it("should generate a textarea", function () {
        expect(z.textarea().html()).toBe('<textarea></textarea>')
    });

    it("should generate a time", function () {
        expect(z.time().html()).toBe('<time></time>')
    });

    it("should generate a title", function () {
        expect(z.title().html()).toBe('<title></title>')
    });

    it("should generate a track", function () {
        expect(z.track().html()).toBe('<track></track>')
    });

    it("should generate a ul", function () {
        expect(z.ul().html()).toBe('<ul></ul>')
    });

    it("should generate a section", function () {
        expect(z.section().html()).toBe('<section></section>')
    });

    it("should generate a article", function () {
        expect(z.article().html()).toBe('<article></article>')
    });

    it("should generate a nav", function () {
        expect(z.nav().html()).toBe('<nav></nav>')
    });

    it("should generate a address", function () {
        expect(z.address().html()).toBe('<address></address>')
    });

    it("should generate a aside", function () {
        expect(z.aside().html()).toBe('<aside></aside>')
    });


});

describe("Test element's attributes", function() {

    it("should generate a div with a class attribute set to 'aClass'", function() {
        expect(z.div({'class': 'aClass'}).html()).toBe('<div class="aClass"></div>');
    });

    it("should generate a div with a class attribute set to the result of a function", function() {
        expect(z.div({
            'class': function () {
                return 'aClass';
            }
        }).html()).toBe('<div class="aClass"></div>');
    });

});

describe("Test Zappa utility functions", function() {

    it("should generate a custom element", function() {
        expect(z.element('div').html()).toBe('<div></div>');
    });

    it("should append children to an element", function() {
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

    it("should append children returned by a function to an element", function() {
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

    it("should add a textNode to the parentElement", function() {
        expect(z.div().text('some text').html()).toBe('<div>some text</div>');
    });

    it("should return an html string", function() {
        expect(z.div().html()).toBe('<div></div>');
    });

    it("should return a DOM Object", function() {
        expect(
            HTMLElement.prototype.isPrototypeOf(
                z.div().value()
            )
        ).toBe(true);
    });

});