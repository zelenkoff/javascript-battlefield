// Загрузить города при помощи AJAX из
// https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json (сервер поддерживает AJAX CORS)
//     Отсортировать города по алфавиту и вывести на странице.
//     Использование промисов обязательно.
//     Запрещено использование любых библиотек (включая jQuery) и фреймворков.

(() => {

    let getCitys = url => {
        return new Promise((response, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            xhr.onload = () => {

                if (xhr.status === 200) {
                    response(xhr.responseText);
                } else {
                    let error = new Error (xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }

            };

            xhr.onerror = () => reject(new Error('Ошибка'));

            xhr.send();
        });
    };

    getCitys('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
        .then(
            res => {
                let data = JSON.parse(res),
                    arr = [];

                let tranform = data.map(obj => arr.push(obj.name));

                arr.sort();

                content.textContent = arr;

            },
            rej => console.log(rej)
        );


})();