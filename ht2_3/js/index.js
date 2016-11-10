(() => {
    let calculator = firstNumber => {
        return {
            sum() {
                for (let i = 0; i < arguments.length; i++) {
                    firstNumber+=arguments[i];
                }
                return firstNumber;
            },
            diff() {
                for (let j = 0; j < arguments.length; j++) {
                    firstNumber-=arguments[j];
                }
                return firstNumber;
            },
            div() {
                for (let k = 0; k < arguments.length; k++) {
                    if (!arguments[k]) {
                        throw new Error('Давайте не будем так делать, введите что-нибудь отличное от нуля!')
                    }
                    firstNumber/=arguments[k];
                }

                return firstNumber;
            },
            mul() {
                for (let l = 0; l < arguments.length; l++) {
                    firstNumber*=arguments[l];
                }

                return firstNumber;
            }
        };
    };
    try {
        console.log(calculator(100).sum(1, 2, 3));
        console.log(calculator(100).diff(10, 20));
        console.log(calculator(100).div(2, 0));
        console.log(calculator(100).mul(2, 2));
    } catch (e) {
        console.log(e.message);
    }
})();