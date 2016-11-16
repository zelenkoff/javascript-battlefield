(() => {

    var objA = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
        prop4: {
             subProp1: 'sub value1',
             subProp2: {
                 subSubProp1: 'sub sub value1',
                 subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
             }
         },
         prop5: 1000,
         prop6: new Date(2016, 2, 10)
     };
     var objB = {
         prop5: 1000,
         prop3: 'value3',
         prop1: 'value1',
         prop2: 'value2',
         prop6: new Date('2016/03/10'),
         prop4: {
             subProp2: {
                 subSubProp1: 'sub sub value1',
                 subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4]
             },
             subProp1: 'sub value1'
         }
 };


    function deepEqual(obj1, obj2) {

        let keysObj1 = Object.keys(obj1),
            keysObj2 = Object.keys(obj2),
            dateTest = Object.prototype.toString;

        if (obj1 === obj2) return true;
        if (keysObj1.length !== keysObj2.length) return false;

        for (let i in obj1) {
            if (obj1[i] !== obj2[i]) {
                console.log(i);
                if (dateTest.call(obj1[i]) === '[object Date]' && dateTest.call(obj2[i]) === '[object Date]') {
                    if (obj1[i].getTime() !== obj2[i].getTime()) return false;
                } else if (typeof obj1[i] === 'object'
                    && typeof obj2[i] === 'object'
                    && Array.isArray(obj1[i]) !== true
                    && Array.isArray(obj2[i]) !== true ) {
                    deepEqual(obj1[i], obj2[i]);
                } else if (Array.isArray(obj1[i]) === true && Array.isArray(obj2[i]) === true) {
                    if (obj1[i].length !== obj2[i].length) {
                        return false;
                    } else {
                        obj1[i].sort((a,b) => {
                            if (a === b) {
                                return 0;
                            }
                            if (typeof a === typeof b) {
                                return a < b ? -1 : 1;
                            }
                            return typeof a < typeof b ? -1 : 1;
                        });
                        obj2[i].sort((a,b) => {
                            if (a === b) {
                                return 0;
                            }
                            if (typeof a === typeof b) {
                                return a < b ? -1 : 1;
                            }
                            return typeof a < typeof b ? -1 : 1;
                        });
                        console.log(obj1[i],obj2[i]);
                    }
                    for (let j = 0; j < obj1[i].length; j++) {
                        if (obj1[i][j] !== obj2[i][j] && typeof obj1[i][j] !== 'object') {
                            return false;
                        } else {
                            deepEqual(obj1[i][j],obj2[i][j]);
                        }
                    }
                } else {
                    return false;
                }
            }
        }
        return true;
    }

    console.log(deepEqual(objA,objB));
})();

// ДЗ - 2 (со звездочкой)
//
// Как известно, в js не существует способа проверить идентичность объектов.
//
//     Написав 'objA === objB' мы получим true только в том случае,
// если objA и objB указывают на один и тот же объект.
//     Задача: написать функцию deepEqual, которая принимает в качестве параметров два аргумента - два объекта.
//
//     Если обе переменные указывают на один и тот же объект, значит оба объекта идентичны.
//     Если оба объекта имеют одинаковые свойства и их значения, значит оба объекта идентичны.
//
//     Посмотрите на примеры того, как должна работать функция deepEqual:
//
//
// console.log(deepEqual(objA, objB)); //объекты идентичны, вернет true
//
// Не смотря на то, что свойства в objB перемешаны(последовательность свойства в objB
// отличается от последовательности свойств в objA),
// функция всё равно вернет true, так как количество свойств, из имена и значения совпадают у обоих объектов.
//
//     Так же обратите внимание, что deepEqual должна работать рекурсивно.
//
//     Это значит, что если значением какого-то свойства объекта является массив или объект,
//      то начать сверять и их у обоих объектов.
//
//     Если одним из элементов сверяемого массива, является другой массив или объект,
// то их тоже надо сверить рекурсивно.
//
//     При сверке объектов - последовательность свойств не важна, но при сверке массивов, важна последовательность элементов, то есть массивы:
// `[1,2,3,4]` и `[2,1,3,4]` не равны, так как, хотя и имеют одинаковые значения, отличаются в последовательности этих значений.
//
//     Так же обратите внимание, что даты тоже должны сравниваться корректно,
// не смотря на отличия в способах создания.