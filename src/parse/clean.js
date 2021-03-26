const jsdom = require("jsdom");
const { readFileSync, writeFileSync } = require("fs");
const { parseStr, toType } = require("./genTS");



console.log('Start')
var dom = new jsdom.JSDOM(readFileSync('../out/api_fresh.htm')),
    doc = dom.window.document;



let start = new Date(), last = new Date();
function time() {
    console.log(' >', new Date() - last, 'ms');
    last = new Date();
}


var list = doc.querySelectorAll('div[style="border:solid 1px #DEDEDE;background:#DFEEE7;color:#222222;padding:4px;"]');
console.log('Removing', list.length, 'PHP structures')
for (var elm of list) elm.remove();

//Setting attr for later use
list = doc.querySelectorAll('strong');
for (let elm of list) elm.setAttribute('cont', elm.textContent);
time();



list = doc.querySelectorAll('div[style="border:solid 1px #DEDEDE;background:#FEEBE5;color:#222222;padding:4px;"]');
console.log('Removing', list.length / 2, 'REST parameter structures')
for (var elm of list) {
    var b = elm.firstChild.firstChild;
    if (b.textContent === 'REST (POST parameters)') elm.remove();
} time();



list = doc.querySelectorAll('span[style="color:#EA33A6"]');
console.log('Removing ~', list.length / 5, 'Structure Responses');
for (var elm of list) {
    if (elm.textContent !== 'Response') continue;
    var elm = elm.nextElementSibling.nextElementSibling;

    if (elm.children.length < 1) continue;
    div = elm.children.item(0).children.item(0);
    if (!div) continue;

    div.remove();
} time();



list = doc.querySelectorAll('div[style="border:solid 1px #DEDEDE;background:#FFF1BC;color:#222222;padding:4px;"]');
console.log('Removing', list.length, 'Useless Spacings');
for (var elm of list) {
    elm.innerHTML = elm.innerHTML
        .replace(/<br>/g, '')
        .replace(new RegExp('\n    ', 'g'), '');
} time();



list = doc.querySelectorAll('span[style="font-size:80%"]');
console.log('Fixxing', list.length, 'styles');
for (var elm of list) {
    elm.removeAttribute('style');
    elm.children.item(1)?.remove();
} time();



list = doc.querySelectorAll('div[style="border:solid 1px #DEDEDE;background:#FEEBE5;color:#222222;padding:4px;"]');
console.log('Converting', list.length, 'type definitions');
for (var elm of list) {
    var pre = elm.children.item(0),
        str = pre.textContent.replace(new RegExp('\n', 'g'), '')
            .slice(4)
            .replace('<?xml version="1.0" encoding="UTF-8" ?>', '')
            .replace('<?xml version="1.0" encoding="UTF-8"?>', '');

    if (str.startsWith('<EXCEPTION')) continue;

    pre.textContent = toType(parseStr(pre.textContent));
    //console.log(JSON.stringify(str))
} time();



list = doc.querySelectorAll('br');
console.log('Removing', list.length, '<br>');
for (let elm of list) elm.remove();
time();



writeFileSync('../out/api_short.htm', dom.serialize());