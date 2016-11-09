(() => {
    'use strict';

    let arr = [1,2,3];

    let isNumber = (value) => {return typeof value === 'number'};

        let isAllTrue = (source, filterFn) => {
            if (!source.length) {
                throw new Error('Массив пуст');
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
        console.log('Произошла ошибка');
    }

})();
