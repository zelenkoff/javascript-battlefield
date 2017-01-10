var Model = {
    login: function(appId, perms) {
        return new Promise(function(resolve, reject) {
            VK.init({
                apiId: appId
            });

            VK.Auth.login(function(response) {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, perms);
        });
    },
    callApi: function(method, params) {
        return new Promise(function(resolve, reject) {
            VK.api(method, params, function(response) {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response.response);
                }
            });
        });
    },
    getUser: function() {
        return this.callApi('users.get', {});
    },
    getUsers: function (ids) {
        return this.callApi('users.get', { user_ids: ids, fields: 'photo_50' });
    },
    getMusic: function() {
        return this.callApi('audio.get', {});
    },
    getFriends: function() {
        return this.callApi('friends.get', { fields: 'photo_100' });
    },
    getNews: function() {
        return this.callApi('newsfeed.get', { filters: 'post', count: 20 });
    },
    getGroups: function () {
        return this.callApi('groups.get', { fields: 'photo_100', extended: 1, v: '5.60' });
    },
    getComments: function () {
        return this.callApi('photos.getAllComments', { v: '5.60', extended: 1, count: '100' });
    },
    getPhotos: function () {
        return this.callApi('photos.getAll', { v: '5.60', extended: 1, count: '100'});
    },
    getUniqueElements: function (array) {
        if (!(array instanceof Array)) {
            throw new Error('Необходимо передать массив');
        } else {
            let obj = {},
                uniqueArray = [];

            for (let i of array) {
                obj[i] = true;
            }

            for (let j in obj) {
                uniqueArray.push(j);
            }

            return uniqueArray;
        }
    },
    getData: function () {
        let comments,
            photos,
            users;

        return this.getPhotos().then( data => {
            photos = data.items;

            return this.getComments();
        }).then( data => {
            comments = data.items;

            let usersIds = comments.map(elem => elem.from_id),
                uniqueIds = this.getUniqueElements(usersIds);

            return this.getUsers(uniqueIds);
        }).then(data => {
            users = data;
            let arr = [],
                obj = {},
                photosIds = photos.map(el => el.id),
                pIds = comments.map(el => el.pid);

            for (let i = 0; i < photosIds.length; i++) {
                arr.push({
                    [photosIds[i]]: 0
                });
            }

            // for (let k of pIds) {
            //     if ()
            // }
            for (let j = 0; j < pIds.length; j++) {
                console.log(pIds[j]);
                if (typeof arr[j][pIds[j]] !== 'undefined') {
                    arr[j][pIds[j]] += 1;
                }

            }

            photos.forEach(el => el.comments = {});

            // for (let k of photos) {
            //     if (k.id in arr) {
            //         k.comments.count = arr[k.id];
            //     }
            // }
            console.log(arr);
            return photos;
        });

        // return this.getComments().then(data => {
        //     comments = data.items;
        //
        //     return this.getPhotos();
        // }).then(data => {
        //     photos = data.items;
        //
        //     let arr = {};
        //
        //     let upDatePhotos = photos.forEach(el => {
        //         el.comments = {};
        //     });
        //
        //     const ids = photos.map(item => item.id);
        //
        //     const pids = comments.map(item => item.pid);
        //
        //     for (let i of ids) {
        //         arr[i] = 0;
        //     }
        //
        //     for (let j of pids) {
        //         if (arr[j] !== 'undefined') {
        //             arr[j] += 1;
        //         }
        //     }
        //
        //     for (let k of photos) {
        //         if (k.id in arr) {
        //             k.comments.count = arr[k.id];
        //         }
        //     }
        //
        //     return this.getUser();
        // }).then(users => {
        //     console.log(users);
        //     console.log(photos);
        //     console.log(comments);
        //
        //     return photos;
        // });

    }
};
