import Calculator from './parentES6';

class sqrCalc extends Calculator {
    constructor(SqrValue) {
        super(SqrValue);
    }
    sum() {
        return super.sum(...arguments) * super.sum(...arguments);
    }
    dif() {
        return super.dif(...arguments) * super.dif(...arguments);
    }
    div() {
        return super.div(...arguments) * super.div(...arguments);
    }
    mul() {
        return super.mul(...arguments) * super.mul(...arguments);
    }
}

let i = new sqrCalc(100);

console.log(i.sum(1,2,3));
console.log(i.dif(10,20));
console.log(i.div(2,2));
console.log(i.mul(2,2));