(() => {
    'use strict';

    let arr = [1,2,3,4,5];

    let isNumber = value => typeof value === 'string';

        let isAllTrue = (source, filterFn) => {
            let checker = 0;

            if (!source.length) {
                throw new Error('Массив пуст! Пожалуйста, добавьте хотя бы один элемент');
            }

            for (let i = 0; i < source.length; i++) {
                if (filterFn(source[i])) {
                    checker++;
                }
            }

            if (checker === source.length) {
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