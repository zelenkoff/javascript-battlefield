(() => {
    'use strict';

    let data = [1,2,3,4,5];

    let falseChecker = value => typeof value === 'string';

    let isSomeTrue = (source, filterFn) => {
        let checker = 0;

        if (!source.length) {
            throw new Error('Нельзя передать пустой массив');
        }

        for (let i = 0; i < source.length; i++) {
            if (!filterFn(source[i])) {
                checker++;
            }
        }

        console.log(checker);

        if (checker === source.length) {
            return false;
        } else {
            return true;
        }

    };
    try {
        console.log(isSomeTrue(data,falseChecker));
    } catch (e) {
        console.log(e.message);
    }
})();

