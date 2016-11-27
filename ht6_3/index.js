// ДЗ 3 (не обязательное):
// Создать страничку с текстовым полем.
//     После загрузки странички, загрузить список городов при помощи AJAX.
//     При вводе текста в тестовое поле,
//     выводить под текстовым полем список тех городов, в названиях которых есть введенный текст.
//     Использование промисов обязательно.
//     Запрещено использование любых библиотек (включая jQuery) и фреймворков.


let ready = () => {
    return new Promise((res, rej) => {
       let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

        xhr.onload = () => {
            if (xhr.status === 200) {
                res(xhr.responseText);
            } else {
                rej(new Error('Произошла ошибка' + xhr.status));
            }
        };

        xhr.onerror = () => rej(new Error('Ошибка'));
        xhr.send();
    });
};

ready().then(
    res => {
        let data = JSON.parse(res),
            arr = [];

        for (let i of data) {
            for (let j in i) {
                arr.push(i[j].toLowerCase());
            }
        }
        viewer(arr);


    },
    rej => console.log(rej)
);

let viewer = data => {
    input.oninput = () => {
        for (let i of data) {
            if (i.indexOf(input.value) !== -1) {
                creator(i, input.value);
            }
        }
    };
};

function creator(element, value) {

    for (let i = 0; i < list.childNodes.length; i++) {
        let item = list.childNodes[i].textContent;

        if (item.indexOf(value) === -1) {
            list.childNodes[i].remove();
        }
    }

        let li = document.createElement('li');

        li.textContent = element;

        list.appendChild(li);



}

document.addEventListener('DOMContentLoaded', ready);
