// ДЗ 1: переделать предыдущее ДЗ с загрузкой списка городов по AJAX.
//     После загрузки страницы, происходит загрузка городов через AJAX.
//     Города сортируются по имени и выводятся на странице при помощи шаблонизатора Handlebars.
//     При вводе значений в текстовое поле, должны скрываться те города,
// в названии которых нет подстроки, указанной в текстовом поле.


function ready() {
    return new Promise((response, reject) => {
      let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

        xhr.onload = () => {
          if (xhr.status === 200) {
              response(xhr.responseText);
          } else {
              reject(new Error('Произошла ошибка' + xhr.status));
          }
        };

        xhr.onerror = () => reject(new Error('Ошибка'));
        xhr.send();
    });
}

ready().then(
    res => {
        let data = JSON.parse(res),
            getNames = data.map(obj => obj.name.toLowerCase());
        viewer(getNames);
        templator(getNames.sort());
    }
);

let viewer = data => {
    input.oninput = () => {
        let checked = data.filter(city => city.indexOf(input.value) !== -1);
        input.value ? templator(checked.sort()) : templator(data.sort());
    }
};

let templator = data => {
    let objArray = [],
        source = handle.innerHTML,
        compiler = Handlebars.compile(source);

    for (let i = 0; i < data.length; i++) {
        objArray[i] = {city: data[i]};
    }

    template = compiler({list: objArray});
    result.innerHTML = template;
};

document.addEventListener('DOMContentLoaded', ready);

