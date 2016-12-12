// Взять калькулятор, который был сделан в контексте ДЗ от 8 ноября.
//     Если домашнее задание не сделано, то сейчас необходимо сделать.
//     Необходимо модифицировать калькулятор следующим образом:
//     Превратить калькулятор в Класс (конструктор + прототип)
// Создать класс SqrCalc и унаследовать его от оригинального калькулятора.
//     SqrCalc должен расширять все методы оригинального
// калькулятора таким образом, чтобы возводить в квадрат результат всех расчетов. Например:
//
// let myCalculator = new SqlCalc(100);
//
// console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
// console.log(myCalculator.dif(10, 20)); //вернет 4 900
// console.log(myCalculator.div(2, 2)); //вернет 625
// console.log(myCalculator.mul(2, 2)); //вернет 160 000
//
//
// Обратите внимание, что не должно быть дублирования кода
// из методов оригинального калькулятора. Необходимо применить наследование.

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