// ДЗ 2:
// К страничке из предыдущего задания необходимо добавить форму с текстовыми полями и кнопкой "добавить".
//     Список текстовых полей:
//     - имя
//     - значение
//     - срок годности (количество дней)
//
// После нажатия на кнопку "добавить" должна быть создана (и добавлена в таблицу)
// новая cookie с указанными параметрами. Обратите внимание, что в поле "срок годности"
// указывается количество дней (начиная с текущего), на протяжении которых будет доступна cookie.
//
//     После добавление cookie, значения текстовых полей формы должны быть очищены.
//     Если какое-то из полей формы не заполнено, то, при нажатии на кнопку "добавить",
// cookie не должна быть создана, а на экран должен быть выведен alert с предупреждением "Заполните все поля формы".
//     Так же заметьте, что при работе с формой и таблицей, не должно быть перезагрузок страницы
(() => {
    let coockies = document.cookie,
        inputs = document.querySelectorAll('input');

    add.addEventListener('click', e => {
        e.preventDefault();
        let date = new Date;
        if (!newName.value || !newValue.value || !newDate.value) {
            alert('Заполните все поля!');

        } else {
            document.cookie = `${newName.value}=${newValue.value};path=/;expires=${date.getDate() + +newDate.value}`;
            viewer([`${newName.value}=${newValue.value}`]);

            inputs.forEach(el => el.value = '');
        }

    });

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