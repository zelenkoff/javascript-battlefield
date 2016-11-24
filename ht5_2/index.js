// Создать страницу с кнопкой. При клике на кнопку,
//     на странице должен создаваться div произвольных размеров, в произвольном месте.
//     Цвет фона div'а должен быть каждый раз случайным.
// Созданные div'ы можно перетаскивать мышкой (drag & drop)

(() => {

    let button = document.querySelector('.creator'),
        body = document.querySelector('body');

    let randomColor = () => {
        let r = Math.round(Math.random() * 255),
            g = Math.round(Math.random() * 255),
            b = Math.round(Math.random() * 255);

        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    };

    body.addEventListener('mousedown', e => {

        let element = e.target;

        if (element.classList.value !== 'creator') {
               element.style.position = 'absolute';
                moveAt(e);
                element.style.zIndex = 1000;

                function moveAt(e) {
                    element.style.left = e.pageX - element.offsetWidth / 2 + 'px';
                    element.style.top = e.pageY - element.offsetWidth / 2 + 'px';
                }

                document.onmousemove = function (e) {
                    moveAt(e);
                };

                element.onmouseup = () => {
                  document.onmousemove = null;
                    element.onmouseup = null;
                };
        }
    });

    button.addEventListener('click', e => {

        let div = document.createElement('div'),
            text = document.createTextNode('DIV');

        div.style.width = Math.random() * 100 + 'px';
        div.style.height = Math.random() * 100 + 'px';

        div.appendChild(text);

        body.appendChild(div);

        div.style.position = 'absolute';
        div.style.left = Math.random() * window.innerWidth * Math.random() + 'px';
        div.style.top = Math.random() * window.innerHeight * Math.random() + 'px';
        div.style.backgroundColor = randomColor();
        div.style.border = '1px solid';
        div.style.cursor = 'pointer';

    });

})();