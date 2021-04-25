import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import * as prettier from 'prettier';
import * as json from '../out/api.json';


function fancyCase(s: string) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}
function fancyName(s: string) {
    return s.split('_').map(fancyCase).join(' ');
}

function format(str: string): string {
    //return str;

    return prettier.format(str, {
        tabWidth: 4,
        semi: false,
        parser: 'babel-ts'
    });
}




type Endpoint = {
    title: string;
    description: string;
    ajax: boolean;
    login: boolean;
    args: {
        title: string,
        structure: string
    }[];
    response: string;
    errors: string[];
}
type Module = {
    [key: string]: {
        [key: string]: Endpoint[]
    }
}

const root = join(__dirname, '..', 'out', 'ts');

console.log(root);

function generate(obj: Module): string {
    let txt = '';
    for (let high in obj) {
        console.log('-', high);
        let tmp = obj[high];
        txt += `namespace ${high} {\n`;


        for (let low in tmp) {
            console.log('-', '-', low);
            let arr = tmp[low];
            let inner = '';
            if (Array.isArray(arr)) for (let end of arr) {
                if (!end.response) continue;
                if (end.response.startsWith('General')) continue;

                inner += `namespace ${end.title.split('_').splice(3).join('_') || end.title} {\n`;
                //inner += end.args + '\n\n';
                inner += end.response;
                inner += '}\n\n';
            } else {
                continue;
                let end = arr as any as Endpoint;
                inner += `namespace ${end.title.split('_').splice(3).join('_')} {\n`;
                //inner += end.args + '\n\n';
                inner += end.response + '\n\n //QwQ';
                inner += '}\n\n';
            }
            if (inner.length > 10)
                txt += `namespace ${low ?? 'OOOF'} {\n ${inner}}\n`;
        }
        txt += '}\n\n';
    }

    return txt;
}

for (let k in json) {
    console.log(k)
    let innerTS = generate(json.core as any);
    writeFileSync(join(root, k + '.ts'), format(`declare namespace ${k} {
        ${innerTS}
    }`.replace(/delete/g, 'Delete')));
}


