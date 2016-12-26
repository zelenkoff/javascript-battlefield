// Взять калькулятор, который был сделан в контексте ДЗ от 8 ноября.
//     Если домашнее задание не сделано, то сейчас необходимо сделать.
//     Необходимо модифицировать калькулятор следующим образом:
//     Превратить калькулятор в Класс (конструктор + прототип)
// Создать класс SqrCalc и унаследовать его от оригинального калькулятора.
//     SqrCalc должен расширять все методы оригинального калькулятора таким образом,
// чтобы возводить в квадрат результат всех расчетов. Например:
//
// let myCalculator = new SqlCalc(100);
//
// console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
// console.log(myCalculator.dif(10, 20)); //вернет 4 900
// console.log(myCalculator.div(2, 2)); //вернет 625
// console.log(myCalculator.mul(2, 2)); //вернет 160 000
//
//
// Обратите внимание, что не должно быть дублирования кода из методов оригинального калькулятора.
// Необходимо применить наследование.
//     Задачу необходимо выполнить в двух вариантах: ES5 и ES6


// Вариант ES6

// class Calculator {
//   constructor(firstNumber) {
//     this.firstNumber = firstNumber;
//   }

//   sum() {
//     let args = Array.prototype.slice.call(arguments);

//     let result = args.reduce((sum, curr) => {
//       return sum + curr;
//     }, this.firstNumber);

//     return result;
//   }
//   dif() { 
//     let args = Array.prototype.slice.call(arguments);

//     let result = args.reduce((imp, curr) => {
//       return imp - curr;
//     }, this.firstNumber);

//     return result;
//   }
//   div() {
//     let args = Array.prototype.slice.call(arguments);

//     let result = args.reduce((imp, curr) => {
//       return imp / curr;
//     }, this.firstNumber);

//     return result;
//   }
//   mul() {
//     let args = Array.prototype.slice.call(arguments);

//     let result = args.reduce((mul, curr) => {
//       return mul * curr;
//     }, this.firstNumber);

//     return result;
//   }
// }

// class SqrCalc extends Calculator {
//   constructor(SqrValue) {
//     super(SqrValue);
//   }
//   sum() {
//     return super.sum(...arguments) * super.sum(...arguments);
//   }
//   dif() {
//     return super.dif(...arguments) * super.dif(...arguments);
//   }
//   div() {
//     return super.div(...arguments) * super.div(...arguments);
//   }
//   mul() {
//     return super.mul(...arguments) * super.mul(...arguments);
//   }
// }
// let i = new SqrCalc(100);

// console.log(i.sum(1,2,3));
// console.log(i.dif(10,20));
// console.log(i.div(2,2));
// console.log(i.mul(2,2));

// ES6 вариант - конец

// ES5 вариант
var Calculator = function(firstNumber) {
	this.firstNumber = firstNumber;
};

Calculator.prototype.sum = function() {
	var args = Array.prototype.slice.call(arguments);
	var result = args.reduce(function(sum, curr) {
		return sum + curr;
	}, this.firstNumber);

	return result;
};

Calculator.prototype.dif = function() {
	var args = Array.prototype.slice.call(arguments);

	var result = args.reduce(function(imp, curr) {
		return imp - curr;
	}, this.firstNumber);

	return result;
};

Calculator.prototype.div = function() {
	var args = Array.prototype.slice.call(arguments);

	var result = args.reduce(function(imp, curr) {
		return imp / curr;
	}, this.firstNumber);

	return result;
};

Calculator.prototype.mul = function() {
	var args = Array.prototype.slice.call(arguments);

	var result = args.reduce(function(mul, curr) {
		return mul * curr;
	}, this.firstNumber);

	return result;
};

var newCalc = function(firstNumber) {
	this.firstNumber = firstNumber;
};

newCalc.prototype = Object.create(Calculator.prototype);

newCalc.prototype.sum = function() {
	var res = Calculator.prototype.sum.apply(this, arguments);
	return res * res;

};
newCalc.prototype.dif = function() {
	var res = Calculator.prototype.dif.apply(this, arguments);
	return res * res;

};
newCalc.prototype.div = function() {
	var res = Calculator.prototype.div.apply(this, arguments);
	return res * res;

};
newCalc.prototype.mul = function() {
	var res = Calculator.prototype.mul.apply(this, arguments);
	return res * res;

};


var i = new newCalc(100);

console.log(i.sum(1,2,3));
console.log(i.dif(10, 20));
console.log(i.div(2, 2));
console.log(i.mul(2, 2));

// ES5 вариант - конец
