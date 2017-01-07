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

module.exports = Calculator;