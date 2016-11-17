// Создать функцию `deleteTextNodes`
//
// Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
//
//     Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.


(() => {

    let elem = document.querySelector('.container');

    let deleteTextNodes = (element) => {

        for (let i of element.childNodes) {

            if (i.nodeType === 3) {
                element.removeChild(i);
                deleteTextNodes(element);
            } else if (i.nodeType === 1) {
                deleteTextNodes(i);
            }
        }
    };
        deleteTextNodes(elem);

})();