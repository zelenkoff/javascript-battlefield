(() => {
    'use strict';

    let arr = [1,2,3,4,5];

    let isNumber = (value) => {return typeof value === 'number'};

        let isAllTrue = (source, filterFn) => {
            if (!source.length) {
                throw new Error('Массив пуст! Пожалуйста, добавьте хотя бы один элемент');
            }

            let trueChecker = source.filter(filterFn);

            if (trueChecker.length === source.length) {
                return true;
            } else {
                return false;
            }

        };

    try {
        console.log(isAllTrue(arr, isNumber));
    } catch (e) {
        console.log(e.message);
    }

})();
