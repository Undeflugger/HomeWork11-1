const table = document.getElementsByTagName('table')[0];
let list = '';
let listColumn = '';
let calc = 1;
for(let i = 0; i < 10; i++){
    listColumn = '';
    for(let j = 0; j < 10; j++){
        listColumn += `<td>${calc}</td>`;
        calc ++;
    }
    list += `<tr>${listColumn}</tr>`;
}

table.innerHTML = list;
