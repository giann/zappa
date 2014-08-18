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

        if (_.isString(attributes)) {
            e = text(e, attributes);
        } else {
            _.forOwn(attributes, function (value, attribute) {
                if (_.isFunction(value)) {
                    // what context to give their ?
                    value = value();
                }

                e.setAttribute(attribute, value);
            });
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

    var image = function image (parentElement, attributes) {
        return buildElement(parentElement, 'image', attributes);
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


    var elements = function (parentElement, list) {
        if (_.isArray(list)) {
            _.forEach(list, function (element) {
                if (isHTMLElement(element)) {
                    parentElement.appendChild(element);
                } else if (isZappa(element)) {
                    parentElement.appendChild(element.value(true));
                } else if (_.isFunction(element)) {
                    parentElement.appendChild(element().value(true));
                }
            });
        } else if (isHTMLElement(list)) {
            parentElement.appendChild(list);
        } else if (_.isFunction(list)) {
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

    var element = buildElement;

    function zappa(value) {
        // don't wrap if already wrapped, even if wrapped by a different `zappa` constructor
        return (value && typeof value == 'object' && !_.isArray(value) && hasOwnProperty.call(value, '__wrapped__'))
        ? value
        : new zappaWrapper(value);
    }

    zappa.div = div;
    zappa.span = span;
    zappa.ul = ul;
    zappa.li = li;
    zappa.elements = elements;
    zappa.element = element;
    zappa.text = text;
    zappa.a = a;
    zappa.area = area;
    zappa.audio = audio;
    zappa.br = br;
    zappa.button = button;
    zappa.canvas = canvas;
    zappa.data = data;
    zappa.datalist = datalist;
    zappa.dl = dl;
    zappa.embed = embed;
    zappa.fieldset = fieldset;
    zappa.form = form;
    zappa.h1 = h1;
    zappa.h2 = h2;
    zappa.h3 = h3;
    zappa.h4 = h4;
    zappa.h5 = h5;
    zappa.h6 = h6;
    zappa.hr = hr;
    zappa.iframe = iframe;
    zappa.image = image;
    zappa.input = input;
    zappa.label = label;
    zappa.legend = legend;
    zappa.li = li;
    zappa.map = map;
    zappa.video = video;
    zappa.audio = audio;
    zappa.meter = meter;
    zappa.ins = ins;
    zappa.del = del;
    zappa.object = object;
    zappa.ol = ol;
    zappa.optgroup = optgroup;
    zappa.option = option;
    zappa.output = output;
    zappa.p = p;
    zappa.param = param;
    zappa.pre = pre;
    zappa.progress = progress;
    zappa.blockquote = blockquote;
    zappa.q = q;
    zappa.cite = cite;
    zappa.script = script;
    zappa.noscript = noscript;
    zappa.select = select;
    zappa.source = source;
    zappa.span = span;
    zappa.style = style;
    zappa.table = table;
    zappa.caption = caption;
    zappa.th = th;
    zappa.td = td;
    zappa.col = col;
    zappa.colgroup = colgroup;
    zappa.tr = tr;
    zappa.tfoot = tfoot;
    zappa.thead = thead;
    zappa.tbody = tbody;
    zappa.textarea = textarea;
    zappa.time = time;
    zappa.title = title;
    zappa.track = track;
    zappa.ul = ul;

    function zappaWrapper(value) {
        if (value) {
            if (!isHTMLElement(value) && !_.isString(value)) {
                throw new Error('wrapped value must be an instance of HTMLElement or a selector expression');
            }

            if (_.isString(value)) {
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

    zappaWrapper.prototype = zappa.prototype;

    _.mixin(zappa, zappa);

    zappa.prototype.value = wrapperValueOf;

    window.z = zappa;

}.call(this));