var Controller = {
    musicRoute: function() {
        return Model.getMusic().then(function(music) {
            results.innerHTML = View.render('music', {list: music});
        });
    },
    friendsRoute: function() {
        return Model.getFriends().then(function(friends) {
            results.innerHTML = View.render('friends', {list: friends});
        });
    },
    newsRoute: function() {
        return Model.getNews().then(function (news) {
            console.log(news);
            results.innerHTML = View.render('news', {list: news.items});
        });
    },
    groupRoute: function () {
        return Model.getGroups().then(function (groups) {
            results.innerHTML = View.render('groups', {list: groups.items});
        })
    },
    photosRoute: function () {
        return Model.getData().then(function (data) {
            console.log(data);
            results.innerHTML = View.render('photos', {list: data});
        })
    }
};
