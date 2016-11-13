(() => {
    'use strict';

    let data = [1,2,3,4,5];

    //Моя версия forEach

    let newForEach = (arr, callback) => {


        if (typeof callback !== 'function') {
            throw new Error(`${callback} это не функция!`);
        }

        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }

    };

    try {
        newForEach(data, item => console.log(item));
    } catch (e) {
        console.log(e.message);
    }

    //Моя версия forEach - end

    //Моя версия map
    let myMap = (arr, callback) => {

        if (typeof callback !== 'function') {
            throw new Error(`${callback} это не функция!`);
        }

        let A = [];

        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    };

    //Моя версия map - end
// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.19
// Ссылка (en): http://es5.github.com/#x15.4.4.19
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.19
    if (!Array.prototype.map) {

        Array.prototype.map = function(callback, thisArg) {

            var T, A, k;

            if (this == null) {
                throw new TypeError(' this is null or not defined');
            }

            // 1. Положим O равным результату вызова ToObject с передачей ему
            //    значения |this| в качестве аргумента.
            var O = Object(this);

            // 2. Положим lenValue равным результату вызова внутреннего метода Get
            //    объекта O с аргументом "length".
            // 3. Положим len равным ToUint32(lenValue).
            var len = O.length >>> 0;

            // 4. Если вызов IsCallable(callback) равен false, выкидываем исключение TypeError.
            // Смотрите (en): http://es5.github.com/#x9.11
            // Смотрите (ru): http://es5.javascript.ru/x9.html#x9.11
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }

            // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
            if (arguments.length > 1) {
                T = thisArg;
            }

            // 6. Положим A равным новому масиву, как если бы он был создан выражением new Array(len),
            //    где Array является стандартным встроенным конструктором с этим именем,
            //    а len является значением len.
            A = new Array(len);

            // 7. Положим k равным 0
            k = 0;

            // 8. Пока k < len, будем повторять
            while (k < len) {

                var kValue, mappedValue;

                // a. Положим Pk равным ToString(k).
                //   Это неявное преобразование для левостороннего операнда в операторе in
                // b. Положим kPresent равным результату вызова внутреннего метода HasProperty
                //    объекта O с аргументом Pk.
                //   Этот шаг может быть объединён с шагом c
                // c. Если kPresent равен true, то
                if (k in O) {

                    // i. Положим kValue равным результату вызова внутреннего метода Get
                    //    объекта O с аргументом Pk.
                    kValue = O[k];

                    // ii. Положим mappedValue равным результату вызова внутреннего метода Call
                    //     функции callback со значением T в качестве значения this и списком
                    //     аргументов, содержащим kValue, k и O.
                    mappedValue = callback.call(T, kValue, k, O);

                    // iii. Вызовем внутренний метод DefineOwnProperty объекта A с аргументами
                    // Pk, Описатель Свойства
                    // { Value: mappedValue,
                    //   Writable: true,
                    //   Enumerable: true,
                    //   Configurable: true }
                    // и false.

                    // В браузерах, поддерживающих Object.defineProperty, используем следующий код:
                    // Object.defineProperty(A, k, {
                    //   value: mappedValue,
                    //   writable: true,
                    //   enumerable: true,
                    //   configurable: true
                    // });

                    // Для лучшей поддержки браузерами, используем следующий код:
                    A[k] = mappedValue;
                }
                // d. Увеличим k на 1.
                k++;
            }

            // 9. Вернём A.
            return A;
        };
    }


    // ДЗ - 1:
    //
    // написать аналоги методов для работы с массивами:
    //
    //     forEach, filter, map, slice, reduce, splice  пример:
    //
    //
    //
    //     let array = [1, 2, 3, 4, 5, 6];
    //
    // forEach(array, item => console.log(item));
    //
    // let greaterThan4 = filter(array, item => item > 4);
    //
    // let sqare = map(array, item => item*item);
    //
    //
    //
    // Описание того, как работают эти методы, есть на Mozilla Developer Network и в бесплатных видеоуроках LoftBlog/LoftSchool.
    //
    //
    //
    //     Реализация функции splice является задачей со звездочкой.
    //
    //     Ее выполнение не обязательно, но желательно.
    //
    //
    //
    //     Внимание:
    //
    // в данном задании запрещено использовать встроенные методы для работы с массивами! Разрешено использовать стандартные
    //
    // операторы 'for/for-in/while/if`' (и т.д.) и свойство 'length'



})();
