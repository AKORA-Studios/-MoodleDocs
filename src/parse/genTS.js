const jsdom = require("jsdom");
const { readFileSync, writeFileSync, watchFile } = require("fs");




function convertType(str) {
    if (str === 'int') return 'number';
    return str;
}

function parseStr(str) {
    var docu = new jsdom.JSDOM(str).window.document;
    var respon = docu.querySelector('RESPONSE').children.item(0);

    return parse(respon);
}

/**
 * @param {Element} elm 
 */
function parse(elm) {
    var temp = {}, type = elm.nodeName;

    if (type === 'SINGLE') {
        for (var e of elm.children)
            temp[e.getAttribute('name')] = parse(e);

    } else if (type === 'MULTIPLE') {
        var single = elm.children.item(0),
            parsed = parse(single);

        parsed._isArray = true;

        temp = parsed;
    } else if (type === 'KEY') {
        var first = elm.children.item(0);
        if (elm.children.length === 1 && first.nodeName === 'VALUE') temp = convertType(elm.children.item(0).innerHTML);
        else temp = parse(first);
    }

    return temp;
}

function toType(struc) {
    return 'type reponse = ' + JSON.stringify(struc, null, 4)
        .replace(/\"/g, '')
        .replace(/(_isArray: true)\n( )*}/g, '}[]')
}

module.exports = { convertType, parse, toType, parseStr }

/*
watchFile('../input.html', {
    interval: 100
}, (curr, prev) => {
    var doc = new jsdom.JSDOM(readFileSync('../input.html')).window.document;
    var main = doc.querySelector('RESPONSE').children.item(0);

    var structure = parse(main)
    writeFileSync('output.ts', 'type reponse = ' + JSON.stringify(structure, null, 4)
        .replace(/\"/g, '')
        .replace(/(_isArray: true)\n( )*}/g, '}[]')
    );

    console.count('Compiled');
})
*/