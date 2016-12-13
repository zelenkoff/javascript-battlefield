new Promise(resolve => {
	if (document.readyState === 'complete') {
		resolve();
	} else {
		window.onload = resolve;
	}
}).then(() => {
	return new Promise((res, rej) => {
		VK.init({
			apiId: 5774694
		});

		VK.Auth.login(response => {
			console.log(response);
			if (response.session) {
				res(response);
			} else {
				rej(new Error('Не удалось авторизоваться'));
			}
		}, 2);
	});
}).then(() => {
	return new Promise((res, rej) => {
		VK.api('friends.get', {v: '5.60', fields: 'photo_50'}, data => {
			if (data.error) {
				rej(new Error(data.error.error_msg));
			} else {
				let source = listOfAllFriends.innerHTML,
					compiled = Handlebars.compile(source),
					template = compiled({listFriends: data.response.items});
					console.log(data.response.items);

					allFriends.innerHTML = template;

					res();
			}
		})
	});
}).catch(e => console.log(e.message));
