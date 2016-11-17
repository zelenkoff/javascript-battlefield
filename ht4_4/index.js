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
    let begin = document.querySelector('body');

    let scanDOM = (start) => {
            let textNode = 0;

        for (let i = 0; i < start.childNodes.length; i++) {
            if (start.childNodes[i].nodeType === 3) {
                console.log(start.childNodes[i]);
                textNode++;
            } else if (start.childNodes[i].nodeType === 1
                && start.childNodes[i].length > 0) {
                scanDOM(start.childNodes[i]);
            }

            if (start.childNodes[i] = start.lastChild) {
                console.log('Текстовых узлов: ', textNode);
            }
            // if (i.nodeType === 3) {
            //     console.log(i);
            //     textNode++;
            // } else if (i.nodeType === 1 && i.childNodes.length > 0) {
            //     scanDOM(i);
            // }
            //
            // if (i.lastChild === i) {
            //     console.log('Текстовых узлов: ', textNode);
            // }
        }


        // for (let i of start.childNodes) {
        //
        //     if (i.nodeType === 3) {
        //         console.log(i);
        //         textNode++;
        //     } else if (i.nodeType === 1 && i.childNodes.length > 0) {
        //         scanDOM(i);
        //     }
        // }
        // console.log('Текстовых узлов: ', textNode);
    };

    scanDOM(begin);


})();