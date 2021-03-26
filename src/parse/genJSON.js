const { JSDOM } = require("jsdom");
const { readFileSync, writeFileSync } = require("fs");
const _ = require('lodash');
const prettier = require('prettier');

console.log('Start'); let start = new Date();
var dom = new JSDOM(readFileSync('../out/api_short.htm')),
    doc = dom.window.document;

console.log('Parsed in', new Date() - start, 'ms');
start = new Date();





/** 
 * @returns {HTMLElement[]}
 * */
function getMain() { return Array.from(doc.querySelector('div[role="main"]').children) }
let elements = getMain();




/**
 * @param {string} s
 * @returns {HTMLElement}*/
function query(s) { return doc.querySelector(s) }
/**
 * @param {string} s
 * @returns {HTMLElement[]}*/
function queryAll(s) { return Array.from(doc.querySelectorAll(s)) };
function join(...arr) { return arr.filter(s => s && s !== '').join('_') }
function parseErr(s) {
    let xml = new JSDOM(s).window.document;
    let arr = Array.from(xml.querySelectorAll('*')).slice(3)
        .map(e => e.className).filter(s => s !== '');
    return arr;
}


var api = [];
let endpoints = queryAll('strong');
api = endpoints.map(e => e.textContent);



//Sorting
api = api.sort();
/**
 * @param {any[]} api 
 */
function split(api) {
    let temp = {};
    for (let i = 0; i < api.length; i++) {

        let end = api[i],
            arr = end.split('_'),
            all = api.filter(e => e.startsWith(arr[0]));

        //console.log(arr);

        temp[arr[0]] = all.map(e => e.slice(arr[0].length + 1));
        api = api.filter(e => !e.startsWith(arr[0])).slice(1);
    }

    return temp
}

let obj = split(api);
for (let x in obj) {
    obj[x] = split(obj[x]);
    for (let y in obj[x]) {
        obj[x][y] = split(obj[x][y]);
    }
}



//Adding data
/**
 * @param {{[key: string]: string | any[]}} json 
 */
function toFullName(json, root = '') {
    if (Array.isArray(json)) {
        for (let i in json) {
            let end = json[i];
            json[i] = toFullName(end, join(root, end));
        }
    } else if (typeof json === 'object') {
        for (let k in json) {
            json[k] = toFullName(json[k], join(root, k))
        }
    } else {
        let i = elements.findIndex(e => e.getAttribute('cont') === root),
            arr = elements.slice(i), next = arr.slice(1).findIndex(e => e.getAttribute('cont'));
        arr = arr.slice(0, next);


        let elm = arr[0],
            desc = arr[1],
            argsI = arr.findIndex(e => e.textContent === 'Arguments'),
            resI = arr.findIndex(e => e.textContent === 'Response'),
            errI = arr.findIndex(e => e.textContent === 'Error message');

        let args = arr.slice(argsI + 1, resI).map(e => {
            let title = e.querySelector('b').textContent,
                structure = e.querySelector('div>div>pre').textContent
                    .slice('General structure\n'.length);

            return { title, structure }
        });

        let responseElm = arr.slice(resI + 1)[0]
            .querySelector('div > div > pre'), response;


        if (responseElm) {
            if (responseElm.textContent.startsWith('General structure')) {
                response = responseElm.textContent;
            } else {
                response = prettier.format(responseElm.textContent, {
                    tabWidth: 4,
                    semi: false,
                    parser: 'babel-ts'
                });
            }
        }


        let errorElm = arr.slice(errI + 1)[0]
            .querySelector('div > div > pre'), errors;
        if (errorElm) errors = parseErr(errorElm.textContent
            .slice('REST'.length));

        let ajax = elements[i - 1].nextSibling.nodeValue.includes('Yes'),
            login = elements[i - 2].nextSibling.nodeValue.includes('Yes');



        json = {
            title: elm.textContent,
            description: desc.textContent,
            ajax,
            login,
            args,
            response,
            errors
        };
    }

    return json;
}

let fullArr = toFullName(_.cloneDeep(obj));


writeFileSync('../out/api.json', JSON.stringify(fullArr, null, 4));

console.log('Finished in', new Date() - start, 'ms');