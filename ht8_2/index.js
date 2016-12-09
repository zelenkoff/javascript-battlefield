// ДЗ 2:
// Создать приложение для ВКонтакте, которое загружает список ваших друзей и выводит их на страницу
// в следующем формате: Фото, ФИО, Возраст, Дата рождения.
//     Друзья должны быть отсортированы по дате рождения в порядке убывания.
//     То есть на самом верху списка расположен друг с ближайший датой рождения.
//     Использование шаблонизатора приветствуется.
new Promise((resolve, reject) => {
    VK.init({
        apiId: 5761870
    });

    VK.Auth.login(response => {
        if (response.session) {
            resolve(response);
        } else {
            reject(new Error("Не удалось авторизоваться!"));
        }
    }, 2 | 4 );
}).then(() => {
    return new Promise((resolve, reject) => {
        VK.api('users.get', {'name_case': 'gen'}, response => {
            console.log(response);
            if (response.error) {
                reject(new Error(response.error.error_msg));
            } else {
                let userInfo = response.response[0];
                header__name.textContent = `Друзья ${userInfo.first_name} ${userInfo.last_name}`;
                resolve();
            }
        });
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        VK.api('friends.get', {v: '5.60', fields: "photo_100, bdate"}, answer => {
            console.log(answer);
            if (answer.error) {
               reject(new Error(answer.error.error_msg));
           } else {

                let arr = answer.response.items,
                    today = new Date(),
                    time = today.getTime(),
                    before = [],
                    after = [],
                    empty = [],
                    full = [];

                let sorted = arr.map((item, i) => {
                    if (!item.bdate) {
                        empty.push(item);
                    } else {
                        let date = item.bdate.split('.');

                        if (date.length < 3) {
                            date.push(today.getFullYear());
                        }
                        item.bdate = Date.parse(date.reverse().join('-'));

                        return item;
                    }
                }).filter(item => item).forEach(item => {
                    item.bdate > time ? after.push(item) : before.push(item);
                });

                after = after.sort((a, b) => a.bdate - b.bdate);
                before = before.sort((a, b) => a.bdate - b.bdate);

                full = after.concat(before);

                console.log(full);

                let fullRecovered = full.map(item => {
                    let date = new Date(item.bdate);

                    item.bdate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

                    return item;
                });

                let fullInformation = fullRecovered.concat(empty);

                let source = lisfOfFriends.innerHTML;
               let compiler = Handlebars.compile(source);
               let template = compiler({list: fullInformation});

                results.innerHTML = template;

               resolve();
           }
        });
    });
}).catch(e => alert(`Ошибка: ${e.message}`));

