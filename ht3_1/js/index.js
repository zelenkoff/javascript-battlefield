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

        let A = new Array(arr.length);

        if (typeof callback !== 'function') {
            throw new Error(`${callback} это не функция!`);
        }

        for (let i = 0; i < arr.length; i++) {
            A[i] = callback(arr[i], i, arr);
        }

        return A;
    };

    try {
        let res = myMap(data,item => item*2);
        console.log(res);
    } catch (e) {
        console.log(e.message);
    }

    //Моя версия map - end

    //Моя версия filter

    let myFilter = (arr, callback) => {
        let A = [],
            j = 0;

        if (typeof callback !== 'function') {
            throw new Error(`${callback} это не функция!`);
        }

        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], i, arr)) {
                A[j] = arr[i];
                j++;
            }
        }

        return A;
    };
    try {
        let result = myFilter(data, item => item > 1);
        console.log(result);
    } catch (e) {
        console.log(e.message);
    }

    //Моя версия filter - end

    //Моя версия slice

    let mySlice = (arr, start = 0, end = arr.length) => {

        if (!arr.length) {
            throw new Error('Передайте не пустой массив!');
        }

        if (start >= arr.length) return [];

        if (Math.sign(start) === -1) start+=arr.length;

        if (Math.sign(end) === -1) end+=arr.length;

        let A = [],
            j = 0;

        for (let i = start; i < end; i++) {
            A[j] = arr[i];
            j++;
        }

        return A;
    };
    try {
        let arr = mySlice(data,1,3);
        console.log(arr);
    } catch (e) {
        console.log(e.message);
    }

    //Моя версия slice - end

    //Моя версия reduce

    let myReduce = (arr, callback, initialValue) => {

        let i = 0;

        if (arr.length === 0 && !initialValue) {
            throw new Error(`Переданный массив ПУСТ и начальное значение не задано! Нам не с чем работать!`);
        }

        if (arr.length === 1 && !initialValue) {
            return arr[0];
        }

        if (arr.length === 0 && initialValue) {
            return initialValue;
        }

        if (typeof callback !== "function") {
            throw new Error(`${callback} это не функция!`);
        }

        let previusValue, currentValue;

        if (initialValue) {
            previusValue=initialValue;

            for (i; i < arr.length; i++) {
                previusValue= callback(previusValue,currentValue = arr[i],i,arr);
            }

        } else {
            previusValue = arr[0];

            for (i = 1; i < arr.length; i++) {
                previusValue = callback(previusValue,currentValue = arr[i],i, arr);
            }
        }


        return previusValue;
    };

    //
    try{
        let result = myReduce(data, (sum, cur) => {
            return sum + cur;
        });

        console.log(result);
    } catch (e) {
        console.log(e.message);
    }

    //Моя версия reduce - end

    // * Моя версия splice

    function mySplice (arr, start, deleteCount){

        let result = [],
            element,
            max = Math.max,
            min = Math.min,
            len = arr.length,
            delta,
            k = 0,
            insertCount = max(arguments.length - 3, 0),
            shift_count,
            new_len;

        start = start || 0;

        if (start < 0) {
            start += len;
        }

        start = max(min(start, len), 0);

        deleteCount = max(min(typeof deleteCount === 'number' ?
        deleteCount : len, len - start), 0);

        delta = insertCount - deleteCount;

        new_len = len + delta;

        while (k < deleteCount) {
            element = arr[start + k];
            if (element !== undefined) {
                result[k] = element;
            }
            k+=1;
        }

        shift_count = len - start - deleteCount;

        if (delta < 0) {
            k = start + insertCount;
            while (shift_count) {
                arr[k] = arr[k - delta];
                k+=1;
                shift_count -= 1;
            }
            arr.length = new_len;
        } else if (delta > 0) {
            k = 1;
            while (shift_count) {
                arr[new_len - k] = arr[len - k];
                k+=1;
                shift_count -=1;
            }
            arr.length = new_len;
        }

        for (k = 0; k < insertCount; k+=1) {
            arr[start + k] = arguments[k + 3];
        }

        return result;

    }

    let ddd = [1,2,3,4,5,6];

    let a = mySplice(ddd,1,0);
    console.log(ddd);
    console.log(a);
    // * Моя версия splice
})();
