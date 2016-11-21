// ДЗ - 4 (не обязательно)
//
// Создать функцию `scanDOM`.
//
//     `scanDOM` должна перебирать все узлы на странице и выводить
// в консоль статистику по элементам и классам на странице. Например:
// Тэгов div: 10
// Тэгов a: 5
// Тэгов span: 10
// Текстовых узлов: 100
// Элементов с классом c1: 10
// Элементов с классом c2: 20
//
// Количество и название классов/тегов заранее неизвестно.
//     Функция сама должна определить количество и название тегов/классов.
//
//     Для продвинутой работы с классами элемента, рекомендуется ознакомиться со свойством `classList`.

(() => {
    let begin = document.querySelector('body'),
        elements = {};

    let scanDOM = (start) => {
        let nodes = start.childNodes,
            len = nodes.length;

        for (let i = 0; i < len; i++) {

            if (nodes[i].nodeType === 3) {

                if (elements["Текстовых узлов"] === undefined) {
                    elements["Текстовых узлов"] = 1;
                } else {
                    elements["Текстовых узлов"] += 1;
                }
            }

            if (nodes[i].nodeType === 1) {

                if (nodes[i].classList.length > 1) {
                    for (let j = 0; j < nodes[i].classList.length; j++) {
                        elements["Элементов с классом: " + nodes[i].classList[j]]
                            = elements["Элементов с классом: " + nodes[i].classList[j]] !== undefined
                            ? elements["Элементов с классом: " + nodes[i].classList[j]] += 1
                            : elements["Элементов с классом: " + nodes[i].classList[j]] = 1;
                    }
                } else {
                    if (elements["Элементов с классом: " + nodes[i].classList.value] === undefined) {
                        elements["Элементов с классом: " + nodes[i].classList.value] = 1;
                    } else {
                        elements["Элементов с классом: " + nodes[i].classList.value] +=1;
                    }
                }

                if (elements["Тегов " + nodes[i].tagName] === undefined) {
                    elements["Тегов " + nodes[i].tagName] = 1;
                } else {
                    elements["Тегов " + nodes[i].tagName] += 1;
                }

                scanDOM(nodes[i]);
            }
        }
    };
    scanDOM(begin);

    for (let i in elements) {

        console.log(`${i} -> ${elements[i]}`);
    }

})();