// Создать функцию `prepend`
//
//     `prepend` имеет два параметра, в которые нужно передать элементы
//
// Задача функции - вставить второй элемент в начало первого. Например:
//
// `prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.

(() => {

    let container = document.querySelector('.container'),
        link = document.querySelector('.link2');

    let prepend = (elem1, elem2) => {

        if (elem1.children) {
            elem1.insertBefore(elem2,elem1.children[0]);
        } else if (elem1.children === []) {
            elem1.appendChild(elem2);
        }

    };

    prepend(container,link);

})();