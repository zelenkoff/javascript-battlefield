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
        return this.callApi('photos.getAllComments', { v: '5.60', count: '100' });
    },
    getPhotos: function () {
        return this.callApi('photos.getAll', { v: '5.60', extended: 1, count: '100'});
    },
    getData: function () {
        let comments,
            photos,
            result;

        return this.getComments().then(data => {
            comments = data.items;

            return this.getPhotos();
        }).then(data => {
            photos = data.items;

            return photos;
        }).then(data => {
            let arr = {};

            let upDatePhotos = photos.forEach(el => {
                el.comments_count = 0;
            });

            const ids = photos.map(item => item.id);

            const pids = comments.map(item => item.pid);

            for (let i of ids) {
                arr[i] = 0;
            }

            for (let j of pids) {
                if (arr[j] !== 'undefined') {
                    arr[j] += 1;
                }
            }

            for (let k of data) {
                if (k.id in arr) {
                    k.comments_count = arr[k.id];
                }
            }

            return data;
        });

    }
};
