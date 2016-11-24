(() => {

    var objA = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
        prop4: {
             subProp1: 'sub value1',
             subProp2: {
                 subSubProp1: 'sub sub value1',
                 subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5],
                 subSubProp3: [1, 2, {prop2: 1, prop: 2}, 4, 5]
             }
         },
        prop7: {
            subProp1: 'sub value1',
            subProp2: {
                subSubProp1: 'sub sub value1',
                subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5],
                subSubProp3: [1, 2, {prop2: 1, prop: 2}, 4, 5]
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
                 subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5],
                 subSubProp3: [1, 2, {prop2: 1, prop: 2}, 4, 5]
             },
             subProp1: 'sub value1'
         },
         prop7: {
             subProp1: 'sub value1',
             subProp2: {
                 subSubProp1: 'sub sub value1',
                 subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5],
                 subSubProp3: [1, 2, {prop2: 1, prop: 2}, 4, 5]
             }
         }
 };

    function deepEqual(obj1, obj2) {

        let keysObj1 = Object.keys(obj1),
            keysObj2 = Object.keys(obj2),
            dateTest = Object.prototype.toString;

        if (obj1 === obj2) return true;
        if (keysObj1.length !== keysObj2.length) return false;

        for (let i = 0; i < keysObj1.length; i++) {
            let object1 = obj1[keysObj1[i]],
                object2 = obj2[keysObj1[i]];

            if (object1 !== object2) {

                if (dateTest.call(object1) === '[object Date]'
                    && dateTest.call(object2) === '[object Date]') {
                    if (object1.getTime() !== object2.getTime()) {
                        return false;
                    }
                } else if (typeof object1 === 'object'
                    && typeof object2 === 'object'
                    && Array.isArray(object1) !== true
                    && Array.isArray(object2) !== true) {
                    var callIt = deepEqual(object1, object2);

                    if (!callIt) return false;
                } else if (Array.isArray(object1) === true && Array.isArray(object2) === true) {

                    if (object1.length !== object2.length) {
                        console.log(object1.length, object2.length);
                        console.log('t');
                        return false;
                    } else {
                        for (let j = 0; j < object1.length; j++) {
                            if (object1[j] !== object2[j]) {

                                if (typeof object1[j] === 'object' && typeof object2[j] === 'object') {
                                    let callIt = deepEqual(object1[j], object2[j]);

                                    if (!callIt) return false;
                                } else {
                                    return false;
                                }

                            }
                        }
                    }

                } else {
                    return false;
                }
            }
            if (i === keysObj1.length - 1) {
                return true;
            }
        }
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
//     При сверке объектов - последовательность свойств не важна, но при сверке массивов, важна последовательность элементов,
// то есть массивы:
// `[1,2,3,4]` и `[2,1,3,4]` не равны, так как, хотя и имеют одинаковые значения, отличаются в последовательности этих значений.
//
//     Так же обратите внимание, что даты тоже должны сравниваться корректно,
// не смотря на отличия в способах создания.