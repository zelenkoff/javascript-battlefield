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
                    arrNoDate = [];

                let sorted = arr.map(item => {
                    if (!item.bdate) {
                        arrNoDate.push(item);
                    } else {
                        let date = item.bdate.split('.');

                        if (date.length < 3) {
                            date.push('2016');
                        }

                        item.bdate = Date.parse(date.reverse().join('-'));
                        return item;
                    }
                }).sort((a, b) => a.bdate - b.bdate).map(item => {
                    if (item) {
                        let date = new Date(item.bdate);

                        item.bdate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
                        return item;
                    }

                });

                // console.log(sorted);

               //
                let source = lisfOfFriends.innerHTML;
               let compiler = Handlebars.compile(source);
               let template = compiler({list: sorted});

                results.innerHTML = template;

               resolve();
           }
        });
    });
}).catch(e => alert(`Ошибка: ${e.message}`));

