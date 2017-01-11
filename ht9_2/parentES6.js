export default class Calculator {
    constructor(firstNumber) {
        this.firstNumber = firstNumber;
    }

    sum() {
        let args = [...arguments];

        let result = args.reduce((sum, curr) => {
            return sum + curr;
        }, this.firstNumber);

        return result;
    }
    dif() {
        let args = [...arguments];

        let result = args.reduce((imp, curr) => {
            return imp - curr;
        }, this.firstNumber);

        return result;
    }
    div() {
        let args = [...arguments];

        let result = args.reduce((imp, curr) => {
            if (!curr) {
                throw new Error('Делить на нуль можно, но не нужно!');
            }
            return imp / curr;
        }, this.firstNumber);

        return result;
    }
    mul() {
        let args = [...arguments];

        let result = args.reduce((mul, curr) => {
            return mul * curr;
        }, this.firstNumber);

        return result;
    }
}

