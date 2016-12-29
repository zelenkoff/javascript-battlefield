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
    getPhotos: function () {
        return this.callApi('photos.get', { v: '5.60', album_id: 'profile', extended: 1, count: '100'});
    },
    getComments: function (id) {
        return this.callApi('photos.getComments', { photo_id: id, v: '5.60', extended: 1});
    },
    getFullInfo: function () {
        var photos, comments = [];

        this.getPhotos().then(function (data) {
            photos = data.items;

            for (var i = 0; i < 10; i++) {
                Model.getComments(photos[i].id).then(function (data) {
                    comments.push(data);
                });
            }

            return comments;
        }).then(function (reports) {
            console.log(reports);

        })
    }

};
