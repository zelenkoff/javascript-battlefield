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
        let data = JSON.parse(res);

        let tranform = data.map(obj => obj.name.toLowerCase());

        viewer(tranform);
    },
    rej => console.log(rej)
);

let viewer = data => {
    input.oninput = () => {
        let checked = data.filter(city => city.indexOf(input.value) !== -1);

        input.value ? creator(checked.sort()) : creator([]);

    };
};

let creator = data => {

    for (let i = 0; i < list.childNodes.length; i++) {
        list.childNodes[i].remove();
        i--;
    }
  data.forEach((city, index, arr) => {
     let li = document.createElement('li');
      li.textContent = city;
      list.appendChild(li);
  });
};


document.addEventListener('DOMContentLoaded', ready);
