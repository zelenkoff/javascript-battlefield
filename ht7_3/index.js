// ДЗ 3 (по желанию):
// Взять результат ДЗ по теме DOM Events (страница с кнопкой для создания div'ов, которые можно перетаскивать при помощи D&D)
// Добавить на страницу кнопку "сохранить".
// При нажатии на данную кнопку, количество, цвет и позиция всех div'ов должны быть сохранены в одну cookie.
// После перезагрузки страницы, необходимо достать эту информацию из cookie и восстановить все div'ы (с их размерами, позицией и цветами)


(() => {

    let button = document.querySelector('.creator'),
        body = document.querySelector('body');

    let randomColor = () => {
        let symbols = '0123456789ABCDEF',
            color = '#';

        for (let i = 0; i < 6; i++) {
            color += symbols[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    let getCookie = name => {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    body.addEventListener('mousedown', e => {

        let element = e.target;

        function moveAt(e) {
            element.style.left = e.pageX - element.offsetWidth / 2 + 'px';
            element.style.top = e.pageY - element.offsetWidth / 2 + 'px';
        }

        if (element.classList.value !== 'creator' && element.classList.value !== 'saver') {
            element.style.position = 'absolute';
            moveAt(e);
            element.style.zIndex = 1000;

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
        div.style.cursor = 'pointer';
    });

    saver.addEventListener('click', e => {
        let divs = document.querySelectorAll('div'),
            data = [],
            time = new Date;

        for (let i of divs) {
            data.push({
                element: i.tagName,
                content: i.textContent,
                position: i.style.position,
                width: i.style.width,
                height: i.style.height,
                color: i.style.backgroundColor,
                left: i.style.left,
                top: i.style.top
            });
        }

        let cake = JSON.stringify(data);
        time.setDate(time.getDate() + 1);
        document.cookie = `divs=${cake};path=/;expires=${time.toUTCString()}` ;

    });

    if (document.cookie.match('divs')) {

        let recovering = getCookie('divs');
        let changing = JSON.parse(recovering);


        let out = changing.map(obj => {
            let element = document.createElement(`${obj.element}`),
                inside = document.createTextNode(`${obj.content}`);

            element.appendChild(inside);
            body.appendChild(element);

            element.style.position = `${obj.position}`;
            element.style.width = `${obj.width}`;
            element.style.height = `${obj.height}`;
            element.style.backgroundColor = `${obj.color}`;
            element.style.left = `${obj.left}`;
            element.style.top = `${obj.top}`;
        });

    }

})();