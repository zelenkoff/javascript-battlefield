var Calculator = require('./parentES5');

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