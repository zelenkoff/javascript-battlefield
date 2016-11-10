(() => {
    'use strict';

    let data = [1,2,3,4,5],
        newArr = [];

    let falseChecker = value => {
      if (typeof value === 'string') {
          return true;
      } else {
          newArr.push(value);
      }
    };

    let isSomeTrue = (source, filterFn) => {
        for (let i = 0; i < source.length; i++) {
            filterFn(source[i]);
        }

        if (source.length === newArr.length) {
            return false;
        } else {
            return true;
        }

    };

    console.log(isSomeTrue(data,falseChecker));
})();

