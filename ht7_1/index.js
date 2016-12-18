// ДЗ 1:
// Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
//     Для каждой cookie в таблице, необходимо добавить кнопку "удалить",
//     При нажатии на "удалить",
//     на экран должен быть выведен confirm с текстом "Удалить cookie с именем …?".
//     Вместо … необходимо подставить имя удаляемой cookie.
//     Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.

(() => {

    let coockies = document.cookie;

    let tranforming = coockies.split('; ');

    let viewer = cakes => {

        cakes.forEach((elem, index) => {
            let changer = elem.split('='),
                name = Symbol(),
                value = Symbol(),
                destroyer = Symbol();
            let obj = {
                [name]: changer[0],
                [value]: changer[1],
                [destroyer]: function () {
                    let answer = confirm(`Вы действительно хотите удалить КУКУ с именем ${obj[name]}?`);
                    if (answer) {
                        let data = new Date(0),
                            elem = document.getElementById(`${obj[name]}`);
                        document.cookie = `${obj[name]}=;path=/;expires=${data.toUTCString()}`;
                        elem.parentNode.remove();
                    } else {
                        console.log('Ну, нет так нет :(');
                    }
                }
            };
            let tr = document.createElement('tr'),
                tdName = document.createElement('td'),
                tdValue = document.createElement('td'),
                tdDestroyer = document.createElement('button');


            table.appendChild(tr);
            tdName.textContent = obj[name];
            tdName.setAttribute('id',`${obj[name]}`);
            tdValue.textContent = obj[value];
            tdDestroyer.textContent = 'Удалить';
            tr.appendChild(tdName);
            tr.appendChild(tdValue);
            tr.appendChild(tdDestroyer);

            tdDestroyer.addEventListener('click', obj[destroyer]);
        });

    };

    viewer(tranforming);


})();
