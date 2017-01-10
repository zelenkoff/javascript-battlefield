var Calculator = require('./parentES5');

var SqrCalc = function(firstNumber) {
	this.firstNumber = firstNumber;
};

SqrCalc.prototype = Object.create(Calculator.prototype);

SqrCalc.prototype.sum = function() {
	var res = Calculator.prototype.sum.apply(this, arguments);
	return res * res;

};
SqrCalc.prototype.dif = function() {
	var res = Calculator.prototype.dif.apply(this, arguments);
	return res * res;

};
SqrCalc.prototype.div = function() {
	var res = Calculator.prototype.div.apply(this, arguments);
	return res * res;

};
SqrCalc.prototype.mul = function() {
	var res = Calculator.prototype.mul.apply(this, arguments);
	return res * res;

};


var i = new SqrCalc(100);
try{
	console.log(i.sum(1,2,3));
	console.log(i.dif(10, 20));
	console.log(i.div(2, 2));
	console.log(i.mul(2, 2));
} catch (e) {
	alert(e);
}