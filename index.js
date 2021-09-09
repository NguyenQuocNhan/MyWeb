function createTH(content) {
    let TH = document.createElement('th');
    TH.innerHTML = content;
    return TH;
}

function createTD(content) {
    let TD = document.createElement('td');
    TD.innerHTML = content;

    return TD;
}

function createTitle(list) {
    var title = document.createElement('tr');
    list.forEach(element => {
        title.appendChild(createTH(element));
    })
    return title;
}

function createContent(list) {
    var content = document.createElement('tr');
    list.forEach(element => {
        content.appendChild(createTD(element));
    })
    return content;
}

function createTableArr(title, content) {
    let table = document.createElement('table');
    var trTitle = createTitle(title);
    table.appendChild(trTitle);

    content.forEach(element => {
        var valueContent = createContent(element);
        table.appendChild(valueContent);
    })
    document.body.appendChild(table);
}

function listConvertArr(list) {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        let childArr = [];
        for (let j = 0; j < list[i].length; j++) {
            childArr.push(list[j][i]);
        }
        arr.push(childArr);
    }

    return arr;
}

let title = ['name', 'type', 'index'];
let nameData = ['nhan', 'loc', 'yen'];
let typeData = ['A', 'A', 'B'];
let indexData = ['1', '2', '3'];
let content = [];
content.push(nameData);
content.push(typeData);
content.push(indexData);

createTableArr(title, listConvertArr(content));