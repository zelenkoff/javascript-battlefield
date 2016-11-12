(() => {
    let calculator = firstNumber => {
        return {
            sum() {
                let result = firstNumber;

                for (let i = 0; i < arguments.length; i++) {
                    result+=arguments[i];
                }
                return result;
            },
            diff() {
                let result = firstNumber;

                for (let j = 0; j < arguments.length; j++) {
                    result-=arguments[j];
                }
                return result;
            },
            div() {
                let result = firstNumber;

                for (let k = 0; k < arguments.length; k++) {
                    if (!arguments[k]) {
                        throw new Error('Давайте не будем так делать, введите что-нибудь отличное от нуля!')
                    }
                    result/=arguments[k];
                }

                return result;
            },
            mul() {
                let result = firstNumber;

                for (let l = 0; l < arguments.length; l++) {
                    result*=arguments[l];
                }

                return result;
            }
        };
    };
    let myCalculator = calculator(100);
    try {
        console.log(myCalculator.sum(1, 2, 3));
        console.log(myCalculator.diff(10, 20));
        console.log(myCalculator.div(2, 2));
        console.log(myCalculator.mul(2, 2));
    } catch (e) {
        console.log(e.message);
    }
})();

// Написать функцию 'calculator', которая имеет один параметр - 'result'
//
// 'firstNumber' - это число, с которым будут производиться действия
//
// Функция 'calculator' должна возвращать объект, у которого должно быть несколько методов.
//
//     Каждая из этих функций принимает неограниченное количество аргументов и производит какие-то арифметические операции с этими аргументами и тем числом, которое было передано в 'calculator' и возвращает результат:
//
//     - 'sum' - складывает 'firstNumber' с переданным аргументами
//
// - 'dif' - вычитает из 'firstNumber' переданные аргументы
//
// - 'div' - делит 'firstNumber' на первый переданный аргумент. Результат этой операции делится на второй переданный аргумент (если он есть) и так далее
//
// - 'mul' - умножает 'firstNumber' на первый переданный аргумент. Результат этой операции умножается на второй переданный аргумент (если он есть) и так далее.
//
//     Предусмотреть исключительные ситуации, для функции 'div', когда делитель равен нулю
//
//
//
// пример:
//
//     var myCalculator = calculator(100);
//
//
//
// console.log(myCalculator.sum(1, 2, 3)); //вернет 106
//
// console.log(myCalculator.dif(10, 20)); //вернет 70
//
// console.log(myCalculator.div(2, 2)); //вернет 25
//
// console.log(myCalculator.mul(2, 2)); //вернет 400