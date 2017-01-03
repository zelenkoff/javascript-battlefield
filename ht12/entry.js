Handlebars.registerHelper('formatTime', function(time) {
    var minutes = parseInt(time / 60),
        seconds = time - minutes * 60;

    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
});

Handlebars.registerHelper('formatDate', function(ts) {
    return new Date(ts * 1000).toLocaleString();
});

let View = require('./view'),
    Model = require('./model'),
    Router = require('./router');

document.addEventListener('click', e => {
    if (e.target.getAttribute('data-route') === 'musicRoute') {
        Router.handle('music');
    } else if (e.target.getAttribute('data-route') === 'friendsRoute') {
        Router.handle('friends');
    } else if (e.target.getAttribute('data-route') === 'newsRoute') {
        Router.handle('news');
    }
});

new Promise(function(resolve) {
    window.onload = resolve;
}).then(function() {
    return Model.login(5267932, 2 | 8 | 8192);
}).then(function() {
    return Model.getUser().then(function(users) {
        header.innerHTML = View.render('header', users[0]);
    });
}).catch(function(e) {
    console.error(e);
    alert('Ошибка: ' + e.message);
});
