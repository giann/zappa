/*
The MIT License (MIT)

Copyright (c) 2014 Benoît Giannangeli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

;(function() {

    // Embedded lodash function to avoid dependency
    var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };

    var isObject = function (value) {
        // check if the value is the ECMAScript language type of Object
        // http://es5.github.io/#x8
        // and avoid a V8 bug
        // http://code.google.com/p/v8/issues/detail?id=2291
        return !!(value && objectTypes[typeof value]);
    };

    var isString = function (value) {
        return typeof value == 'string' ||
            value && typeof value == 'object' && toString.call(value) == '[object String]' || false;
    };

    var isFunction = function (value) {
        return typeof value == 'function';
    }
    // fallback for older versions of Chrome and Safari
    if (isFunction(/x/)) {
        isFunction = function(value) {
            return typeof value == 'function' && toString.call(value) == '[object Function]';
        };
    }

    var isHTMLElement = function (element) {
        return HTMLElement.prototype.isPrototypeOf(element) || Text.prototype.isPrototypeOf(element);
    };

    var isZappa = function (element) {
        return zappaWrapper.prototype.isPrototypeOf(element);
    };

    var getRoot = function (element) {
        if (isHTMLElement(element)) {

            if (element.parentElement) {
                return getRoot(element.parentElement);
            } else {
                return element;
            }

        }

        return null;
    }

    var buildElement = function (parentElement, tag, attributes) {
        var e = document.createElement(tag);

        // In case of: z.div({class: 'yolo'})
        // parentElement would be == to {class: 'yolo'} and attributes would be undefined
        if (parentElement && !isHTMLElement(parentElement) && !attributes) {
            attributes = parentElement;
            parentElement = undefined;
        }

        if (attributes) {
            if (isObject(attributes)) {
                for (var key in attributes) {
                    if (attributes.hasOwnProperty(key)) {
                        if (isFunction(attributes[key])) {
                            // what context to give their ?
                            attributes[key] = attributes[key]();
                        }

                        e.setAttribute(key, attributes[key]);
                    }
                }
            } else {
                throw new Error('Zappa: attributes must be an object.');
            }
        }

        if (parentElement && isHTMLElement(parentElement)) {
            parentElement.appendChild(e);
            //return parentElement;
        }

        return e;
    };

    var div = function div (parentElement, attributes) {
        return buildElement(parentElement, 'div', attributes);
    };

    var span = function span (parentElement, attributes) {
        return buildElement(parentElement, 'span', attributes);
    };

    var ul = function ul (parentElement, collection, attributes) {
        return buildElement(parentElement, 'ul', attributes);
    };

    var li = function li (parentElement, attributes) {
        return buildElement(parentElement, 'li', attributes);
    };

    var a = function a (parentElement, attributes) {
        return buildElement(parentElement, 'a', attributes);
    };

    var area = function area (parentElement, attributes) {
        return buildElement(parentElement, 'area', attributes);
    };

    var audio = function audio (parentElement, attributes) {
        return buildElement(parentElement, 'audio', attributes);
    };

    var br = function br (parentElement, attributes) {
        return buildElement(parentElement, 'br', attributes);
    };

    var button = function button (parentElement, attributes) {
        return buildElement(parentElement, 'button', attributes);
    };

    var canvas = function canvas (parentElement, attributes) {
        return buildElement(parentElement, 'canvas', attributes);
    };

    var data = function data (parentElement, attributes) {
        return buildElement(parentElement, 'data', attributes);
    };

    var datalist = function datalist (parentElement, attributes) {
        return buildElement(parentElement, 'datalist', attributes);
    };

    var dl = function dl (parentElement, attributes) {
        return buildElement(parentElement, 'dl', attributes);
    };

    var embed = function embed (parentElement, attributes) {
        return buildElement(parentElement, 'embed', attributes);
    };

    var fieldset = function fieldset (parentElement, attributes) {
        return buildElement(parentElement, 'fieldset', attributes);
    };

    var form = function form (parentElement, attributes) {
        return buildElement(parentElement, 'form', attributes);
    };

    var h1 = function h1 (parentElement, attributes) {
        return buildElement(parentElement, 'h1', attributes);
    };

    var h2 = function h2 (parentElement, attributes) {
        return buildElement(parentElement, 'h2', attributes);
    };

    var h3 = function h3 (parentElement, attributes) {
        return buildElement(parentElement, 'h3', attributes);
    };

    var h4 = function h4 (parentElement, attributes) {
        return buildElement(parentElement, 'h4', attributes);
    };

    var h5 = function h5 (parentElement, attributes) {
        return buildElement(parentElement, 'h5', attributes);
    };

    var h6 = function h6 (parentElement, attributes) {
        return buildElement(parentElement, 'h6', attributes);
    };

    var hr = function hr (parentElement, attributes) {
        return buildElement(parentElement, 'hr', attributes);
    };

    var iframe = function iframe (parentElement, attributes) {
        return buildElement(parentElement, 'iframe', attributes);
    };

    var img = function img (parentElement, attributes) {
        return buildElement(parentElement, 'img', attributes);
    };

    var input = function input (parentElement, attributes) {
        return buildElement(parentElement, 'input', attributes);
    };

    var label = function label (parentElement, attributes) {
        return buildElement(parentElement, 'label', attributes);
    };

    var legend = function legend (parentElement, attributes) {
        return buildElement(parentElement, 'legend', attributes);
    };

    var li = function li (parentElement, attributes) {
        return buildElement(parentElement, 'li', attributes);
    };

    var map = function map (parentElement, attributes) {
        return buildElement(parentElement, 'map', attributes);
    };

    var video = function video (parentElement, attributes) {
        return buildElement(parentElement, 'video', attributes);
    };

    var audio = function audio (parentElement, attributes) {
        return buildElement(parentElement, 'audio', attributes);
    };

    var meter = function meter (parentElement, attributes) {
        return buildElement(parentElement, 'meter', attributes);
    };

    var ins = function ins (parentElement, attributes) {
        return buildElement(parentElement, 'ins', attributes);
    };

    var del = function del (parentElement, attributes) {
        return buildElement(parentElement, 'del', attributes);
    };

    var object = function object (parentElement, attributes) {
        return buildElement(parentElement, 'object', attributes);
    };

    var ol = function ol (parentElement, attributes) {
        return buildElement(parentElement, 'ol', attributes);
    };

    var optgroup = function optgroup (parentElement, attributes) {
        return buildElement(parentElement, 'optgroup', attributes);
    };

    var option = function option (parentElement, attributes) {
        return buildElement(parentElement, 'option', attributes);
    };

    var output = function output (parentElement, attributes) {
        return buildElement(parentElement, 'output', attributes);
    };

    var p = function p (parentElement, attributes) {
        return buildElement(parentElement, 'p', attributes);
    };

    var param = function param (parentElement, attributes) {
        return buildElement(parentElement, 'param', attributes);
    };

    var pre = function pre (parentElement, attributes) {
        return buildElement(parentElement, 'pre', attributes);
    };

    var progress = function progress (parentElement, attributes) {
        return buildElement(parentElement, 'progress', attributes);
    };

    var blockquote = function blockquote (parentElement, attributes) {
        return buildElement(parentElement, 'blockquote', attributes);
    };

    var q = function q (parentElement, attributes) {
        return buildElement(parentElement, 'q', attributes);
    };

    var cite = function cite (parentElement, attributes) {
        return buildElement(parentElement, 'cite', attributes);
    };

    var script = function script (parentElement, attributes) {
        return buildElement(parentElement, 'script', attributes);
    };

    var noscript = function noscript (parentElement, attributes) {
        return buildElement(parentElement, 'noscript', attributes);
    };

    var select = function select (parentElement, attributes) {
        return buildElement(parentElement, 'select', attributes);
    };

    var source = function source (parentElement, attributes) {
        return buildElement(parentElement, 'source', attributes);
    };

    var span = function span (parentElement, attributes) {
        return buildElement(parentElement, 'span', attributes);
    };

    var style = function style (parentElement, attributes) {
        return buildElement(parentElement, 'style', attributes);
    };

    var table = function table (parentElement, attributes) {
        return buildElement(parentElement, 'table', attributes);
    };

    var caption = function caption (parentElement, attributes) {
        return buildElement(parentElement, 'caption', attributes);
    };

    var th = function th (parentElement, attributes) {
        return buildElement(parentElement, 'th', attributes);
    };

    var td = function td (parentElement, attributes) {
        return buildElement(parentElement, 'td', attributes);
    };

    var col = function col (parentElement, attributes) {
        return buildElement(parentElement, 'col', attributes);
    };

    var colgroup = function colgroup (parentElement, attributes) {
        return buildElement(parentElement, 'colgroup', attributes);
    };

    var tr = function tr (parentElement, attributes) {
        return buildElement(parentElement, 'tr', attributes);
    };

    var tfoot = function tfoot (parentElement, attributes) {
        return buildElement(parentElement, 'tfoot', attributes);
    };

    var thead = function thead (parentElement, attributes) {
        return buildElement(parentElement, 'thead', attributes);
    };

    var tbody = function tbody (parentElement, attributes) {
        return buildElement(parentElement, 'tbody', attributes);
    };

    var textarea = function textarea (parentElement, attributes) {
        return buildElement(parentElement, 'textarea', attributes);
    };

    var time = function time (parentElement, attributes) {
        return buildElement(parentElement, 'time', attributes);
    };

    var title = function title (parentElement, attributes) {
        return buildElement(parentElement, 'title', attributes);
    };

    var track = function track (parentElement, attributes) {
        return buildElement(parentElement, 'track', attributes);
    };

    var ul = function ul (parentElement, attributes) {
        return buildElement(parentElement, 'ul', attributes);
    };

    var section = function section (parentElement, attributes) {
        return buildElement(parentElement, 'section', attributes);
    };

    var article = function article (parentElement, attributes) {
        return buildElement(parentElement, 'article', attributes);
    };

    var nav = function nav (parentElement, attributes) {
        return buildElement(parentElement, 'nav', attributes);
    };

    var address = function address (parentElement, attributes) {
        return buildElement(parentElement, 'address', attributes);
    };

    var aside = function aside (parentElement, attributes) {
        return buildElement(parentElement, 'aside', attributes);
    };

    var elements = function (parentElement, list) {
        if (Array.isArray(list)) {
            list.forEach(function (element) {
                if (isHTMLElement(element)) {
                    parentElement.appendChild(element);
                } else if (isZappa(element)) {
                    parentElement.appendChild(element.value(true));
                } else if (isFunction(element)) {
                    parentElement.appendChild(element().value(true));
                }
            });
        } else if (isHTMLElement(list)) {
            parentElement.appendChild(list);
        } else if (isFunction(list)) {
            list = list();

            return elements(parentElement, list);
        }

        return parentElement;
    };

    var text = function (parentElement, text) {
        var textNode = document.createTextNode(text);

        if (isHTMLElement(parentElement)) {
            parentElement.appendChild(textNode);
            return parentElement;
        }

        return textNode;
    };

    var element = function (parentElement, tag, attributes) {

        // In case of: z.element('div', {class: 'yolo'})
        // parentElement would be == to {class: 'yolo'} and attributes would be undefined
        if (parentElement && !isHTMLElement(parentElement)) {
            attributes = tag;
            tag = parentElement;
            parentElement = undefined;
        }

        return buildElement(parentElement, tag, attributes);
    }

    function zappa(value) {
        // don't wrap if already wrapped, even if wrapped by a different `zappa` constructor
        return (value && typeof value == 'object' && !Array.isArray(value) && hasOwnProperty.call(value, '__wrapped__'))
        ? value
        : new zappaWrapper(value);
    }

    zappa.element = function (parentElement, tag, attributes) {
        return zappa(element(parentElement, tag, attributes));
    };

    zappa.elements = function (parentElement, attributes) {
        return zappa(elements(parentElement, attributes));
    };

    zappa.div = function (parentElement, attributes) {
        return zappa(div(parentElement, attributes));
    };

    zappa.span = function (parentElement, attributes) {
        return zappa(span(parentElement, attributes));
    };

    zappa.ul = function (parentElement, attributes) {
        return zappa(ul(parentElement, attributes));
    };

    zappa.li = function (parentElement, attributes) {
        return zappa(li(parentElement, attributes));
    };

    zappa.text = function (parentElement, attributes) {
        return zappa(text(parentElement, attributes));
    };

    zappa.a = function (parentElement, attributes) {
        return zappa(a(parentElement, attributes));
    };

    zappa.area = function (parentElement, attributes) {
        return zappa(area(parentElement, attributes));
    };

    zappa.audio = function (parentElement, attributes) {
        return zappa(audio(parentElement, attributes));
    };

    zappa.br = function (parentElement, attributes) {
        return zappa(br(parentElement, attributes));
    };

    zappa.button = function (parentElement, attributes) {
        return zappa(button(parentElement, attributes));
    };

    zappa.canvas = function (parentElement, attributes) {
        return zappa(canvas(parentElement, attributes));
    };

    zappa.data = function (parentElement, attributes) {
        return zappa(data(parentElement, attributes));
    };

    zappa.datalist = function (parentElement, attributes) {
        return zappa(datalist(parentElement, attributes));
    };

    zappa.dl = function (parentElement, attributes) {
        return zappa(dl(parentElement, attributes));
    };

    zappa.embed = function (parentElement, attributes) {
        return zappa(embed(parentElement, attributes));
    };

    zappa.fieldset = function (parentElement, attributes) {
        return zappa(fieldset(parentElement, attributes));
    };

    zappa.form = function (parentElement, attributes) {
        return zappa(form(parentElement, attributes));
    };

    zappa.h1 = function (parentElement, attributes) {
        return zappa(h1(parentElement, attributes));
    };

    zappa.h2 = function (parentElement, attributes) {
        return zappa(h2(parentElement, attributes));
    };

    zappa.h3 = function (parentElement, attributes) {
        return zappa(h3(parentElement, attributes));
    };

    zappa.h4 = function (parentElement, attributes) {
        return zappa(h4(parentElement, attributes));
    };

    zappa.h5 = function (parentElement, attributes) {
        return zappa(h5(parentElement, attributes));
    };

    zappa.h6 = function (parentElement, attributes) {
        return zappa(h6(parentElement, attributes));
    };

    zappa.hr = function (parentElement, attributes) {
        return zappa(hr(parentElement, attributes));
    };

    zappa.iframe = function (parentElement, attributes) {
        return zappa(iframe(parentElement, attributes));
    };

    zappa.img = function (parentElement, attributes) {
        return zappa(img(parentElement, attributes));
    };

    zappa.input = function (parentElement, attributes) {
        return zappa(input(parentElement, attributes));
    };

    zappa.label = function (parentElement, attributes) {
        return zappa(label(parentElement, attributes));
    };

    zappa.legend = function (parentElement, attributes) {
        return zappa(legend(parentElement, attributes));
    };

    zappa.li = function (parentElement, attributes) {
        return zappa(li(parentElement, attributes));
    };

    zappa.map = function (parentElement, attributes) {
        return zappa(map(parentElement, attributes));
    };

    zappa.video = function (parentElement, attributes) {
        return zappa(video(parentElement, attributes));
    };

    zappa.audio = function (parentElement, attributes) {
        return zappa(audio(parentElement, attributes));
    };

    zappa.meter = function (parentElement, attributes) {
        return zappa(meter(parentElement, attributes));
    };

    zappa.ins = function (parentElement, attributes) {
        return zappa(ins(parentElement, attributes));
    };

    zappa.del = function (parentElement, attributes) {
        return zappa(del(parentElement, attributes));
    };

    zappa.object = function (parentElement, attributes) {
        return zappa(object(parentElement, attributes));
    };

    zappa.ol = function (parentElement, attributes) {
        return zappa(ol(parentElement, attributes));
    };

    zappa.optgroup = function (parentElement, attributes) {
        return zappa(optgroup(parentElement, attributes));
    };

    zappa.option = function (parentElement, attributes) {
        return zappa(option(parentElement, attributes));
    };

    zappa.output = function (parentElement, attributes) {
        return zappa(output(parentElement, attributes));
    };

    zappa.p = function (parentElement, attributes) {
        return zappa(p(parentElement, attributes));
    };

    zappa.param = function (parentElement, attributes) {
        return zappa(param(parentElement, attributes));
    };

    zappa.pre = function (parentElement, attributes) {
        return zappa(pre(parentElement, attributes));
    };

    zappa.progress = function (parentElement, attributes) {
        return zappa(progress(parentElement, attributes));
    };

    zappa.blockquote = function (parentElement, attributes) {
        return zappa(blockquote(parentElement, attributes));
    };

    zappa.q = function (parentElement, attributes) {
        return zappa(q(parentElement, attributes));
    };

    zappa.cite = function (parentElement, attributes) {
        return zappa(cite(parentElement, attributes));
    };

    zappa.script = function (parentElement, attributes) {
        return zappa(script(parentElement, attributes));
    };

    zappa.noscript = function (parentElement, attributes) {
        return zappa(noscript(parentElement, attributes));
    };

    zappa.select = function (parentElement, attributes) {
        return zappa(select(parentElement, attributes));
    };

    zappa.source = function (parentElement, attributes) {
        return zappa(source(parentElement, attributes));
    };

    zappa.span = function (parentElement, attributes) {
        return zappa(span(parentElement, attributes));
    };

    zappa.style = function (parentElement, attributes) {
        return zappa(style(parentElement, attributes));
    };

    zappa.table = function (parentElement, attributes) {
        return zappa(table(parentElement, attributes));
    };

    zappa.caption = function (parentElement, attributes) {
        return zappa(caption(parentElement, attributes));
    };

    zappa.th = function (parentElement, attributes) {
        return zappa(th(parentElement, attributes));
    };

    zappa.td = function (parentElement, attributes) {
        return zappa(td(parentElement, attributes));
    };

    zappa.col = function (parentElement, attributes) {
        return zappa(col(parentElement, attributes));
    };

    zappa.colgroup = function (parentElement, attributes) {
        return zappa(colgroup(parentElement, attributes));
    };

    zappa.tr = function (parentElement, attributes) {
        return zappa(tr(parentElement, attributes));
    };

    zappa.tfoot = function (parentElement, attributes) {
        return zappa(tfoot(parentElement, attributes));
    };

    zappa.thead = function (parentElement, attributes) {
        return zappa(thead(parentElement, attributes));
    };

    zappa.tbody = function (parentElement, attributes) {
        return zappa(tbody(parentElement, attributes));
    };

    zappa.textarea = function (parentElement, attributes) {
        return zappa(textarea(parentElement, attributes));
    };

    zappa.time = function (parentElement, attributes) {
        return zappa(time(parentElement, attributes));
    };

    zappa.title = function (parentElement, attributes) {
        return zappa(title(parentElement, attributes));
    };

    zappa.track = function (parentElement, attributes) {
        return zappa(track(parentElement, attributes));
    };

    zappa.ul = function (parentElement, attributes) {
        return zappa(ul(parentElement, attributes));
    };

    zappa.section = function (parentElement, attributes) {
        return zappa(section(parentElement, attributes));
    };

    zappa.article = function (parentElement, attributes) {
        return zappa(article(parentElement, attributes));
    };

    zappa.nav = function (parentElement, attributes) {
        return zappa(nav(parentElement, attributes));
    };

    zappa.address = function (parentElement, attributes) {
        return zappa(address(parentElement, attributes));
    };

    zappa.aside = function (parentElement, attributes) {
        return zappa(aside(parentElement, attributes));
    };


    function zappaWrapper(value) {
        if (value) {
            if (!isHTMLElement(value) && !isString(value)) {
                throw new Error('wrapped value must be an instance of HTMLElement or a selector expression');
            }

            if (isString(value)) {
                value = document.querySelector(value);
            }
        }

        this.__wrapped__ = value;
    };

    function wrapperValueOf(shallow) {
        if (shallow) {
            return this.__wrapped__;
        }

        return getRoot(this.__wrapped__);
    };

    function wrapperHtmlValueOf(shallow) {
        if (shallow) {
            return this.__wrapped__.outerHTML;
        }

        return getRoot(this.__wrapped__).outerHTML;
    };

    zappaWrapper.prototype = zappa.prototype;

    // Adds zappa functions in it's prototype
    //_.mixin(zappa, zappa);
    for (var key in zappa) {
        if (zappa.hasOwnProperty(key)) {
            (function() {
                var func = zappa[key];
                zappa.prototype[key] = function() {
                    var chainAll = this.__chain__,
                        value = this.__wrapped__,
                        args = [value];

                    [].push.apply(args, arguments);
                    var result = func.apply(zappa, args);
                    if (chainAll) {
                        if (value === result && isObject(result)) {
                            return this;
                        }
                        result = new zappa(result);
                        result.__chain__ = chainAll;
                    }
                    return result;
                };
            })();
        }
    }

    zappa.prototype.value = wrapperValueOf;
    zappa.prototype.html = wrapperHtmlValueOf;

    window.z = zappa;

}.call(this));