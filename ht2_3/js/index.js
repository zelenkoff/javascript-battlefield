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