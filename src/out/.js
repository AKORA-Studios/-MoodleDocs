let search = document.getElementById('search'),
    submit = document.getElementById('submit');

submit.setAttribute('href', `#${search.value}`);
search.onchange = (e) => {
    submit.setAttribute('href', `#${search.value}`);
}
//search.onkeyup = (e) => showResult(search.value);

submit.onclick = (e) => {
    let elm = document.querySelector('#' + search.value);
    if (elm) elm.setAttribute('open', '')
}


//
let livesearch = document.getElementById("livesearch"),
    endpoints = Array.from(document.querySelectorAll('details'))
        .map(e => e.id.replace(/_/g, ' ')),
    responseText = '';

/**
 * @param {string} str 
 */
function showResult(str) {
    str = str.toLowerCase();
    if (str.length == 0) {
        livesearch.innerHTML = '';
        livesearch.removeAttribute('open');
        return;
    }

    let results = endpoints.filter(s => s.includes(str) || s.startsWith(str))
        .slice(0, 10);

    livesearch.innerHTML = results.map(r => `<a href="#${r.replace(/ /g, '_')}">${r}</a>`)
        .join('<br />');
    livesearch.setAttribute('open', '');
}














//Fixing Highlight JS
let codes = Array.from(document.querySelectorAll('code'));

for (let code of codes) {
    code.innerHTML = code.innerHTML
        .replace(/\{/g, '<span class="hljs-bracket">{</span>')
        .replace(/\}/g, '<span class="hljs-bracket">}</span>')
        .replace(/\[/g, '<span class="hljs-bracket">[</span>')
        .replace(/\]/g, '<span class="hljs-bracket">]</span>')
}