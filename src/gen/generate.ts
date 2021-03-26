import { writeFileSync, readFileSync } from 'fs';
import { json } from './json';


function fancyCase(s: string) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}
function fancyName(s: string) {
    return s.split('_').map(fancyCase).join(' ');
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



function generate(obj: Module) {
    let txt = '';
    for (let high in obj) {
        let tmp = obj[high],
            str = '';
        for (let low in tmp) {
            let arr = tmp[low];
            str += `<div class="low" id="${low}"><h3>${fancyCase(low)}</h3>`;

            for (let end of arr) {
                str += `</p><details id="${end.title}">
                    <summary class="endpointTitle">${fancyName(end.title)}</summary>
                    <p class="light">(${end.title})</p>
                    <div>
                        <text class="description">${end.description}</text>
                        <div class="ajax-login">
                            ${end.ajax ? '✅' : '❌'}  Ajax
                            <br />
                            ${end.login ? '✅' : '❌'} Login
                        </div>
                        <h5>Arguments</h5>
                        <div class="arguments"><ul>
                            ${end.args.map(a => `<li>${a.title}<ul><li>${a.structure}</li></ul></li>`)
                        .join('')}
                        </ul></div>
                        <h5>Response</h5>
                        <div class="response"><pre>
                            <code class="ts">${end.response}</code>
                        </pre></div>
                        <h5>Errors</h5>
                        <div class="errors"><ul>
                            ${end.errors.map(s => `<li>${s}</li>`)}
                        </ul></div>
                    </div>
                </details>`
            }
            str += '</div>';
        }

        txt += `<div class="high" id="${high}"><h2>${fancyCase(high)}</h2>${str}</div>`
    }

    return txt;
}

let html = '';

for (let k in json) {
    html += `<div id="${k}" class="module">
        <h2>${fancyCase(k)}</h2>
        <div class="module">${generate(json[k] as any)}</div>
    </div>`
}


writeFileSync('../out/api_gen.html',
    readFileSync('../out/template.html').toString()
        .replace('DOCUMENTATION', html)
);