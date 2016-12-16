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
				if (sessionStorage.length) {
					let all = JSON.parse(sessionStorage.getItem('allFriends')),
						favFriends = JSON.parse(sessionStorage.getItem('favfriends'));
					let sourceAll = reclamingFriends.innerHTML,
						sourceFavorite = reclamingFavorites.innerHTML,

						compiledAll = Handlebars.compile(sourceAll),
						compiledFavorite = Handlebars.compile(sourceFavorite),

						templateAll = compiledAll({friends: all}),
						templateFavorite = compiledFavorite({favorites: favFriends});

						allFriends.innerHTML = templateAll;
						fav.innerHTML = templateFavorite;
				} else {
					let source = listOfAllFriends.innerHTML,
						compiled = Handlebars.compile(source),
						template = compiled({listFriends: data.response.items});
					allFriends.innerHTML = template;
				}
				let draged,
					people = data.response.items,
					favoriteFriends = document.querySelector('.friends__stars-list'),
					everyOneFriends = document.querySelector('.friends__list');
					console.log(data.response.items);
					inputAll.oninput = () => {
						let checked = people.filter(item => item.first_name.toLowerCase().indexOf(inputAll.value.toLowerCase()) !== -1 || item.last_name.toLowerCase().indexOf(inputAll.value.toLowerCase()) !== -1);
						inputAll.value ? templator(checked) : templator(people);
					};

					let templator = data => {
						let source = listOfAllFriends.innerHTML,
						compiled = Handlebars.compile(source),
						template = compiled({listFriends: data});
						allFriends.innerHTML = template;
					};

					inputTake.oninput = () => {
						let data = favoriteFriends.childNodes,
							newData = [];
							console.log(data[0]);
						if (data.length) {
							for (let i = 0; i < data.length; i++) {
								if (data[i].nodeType === 1 && data[i].outerText.toLowerCase().indexOf(inputTake.value.toLowerCase()) === -1) {
									data[i].style.display = 'none';
								} else if (data[i].nodeType === 1 && data[i].outerText.toLowerCase().indexOf(inputTake.value.toLowerCase()) !== -1 && data[i].style.display === 'none') {
									data[i].style.display = 'block';
								}
							}
						}
					};

					document.addEventListener('click', e => {
						if (e.target.classList.value === 'friends__adder') {
							favoriteFriends.appendChild(e.target.parentNode);
							e.target.nextElementSibling.style.display = 'block';
							e.target.style.display = 'none';
						} else if (e.target.classList.value === 'friends__returner') {
							everyOneFriends.insertBefore(e.target.parentNode, everyOneFriends.children[0]);
							e.target.previousElementSibling.style.display = 'block';
							e.target.style.display = 'none';

						}
					});

					document.addEventListener('dragstart', e => {
						draged = e.target;
						if (e.target.classList.value === 'friends__element') {
							e.target.style.opacity = .5;
							e.dataTransfer.effectAllowed = 'move';
							e.dataTransfer.setData('text/plain', '');
						}
					});
					document.addEventListener('dragend', e => {
						e.target.style.opacity = 1;
					});
					document.addEventListener('dragover', e => {
						e.preventDefault();
					});
					document.addEventListener('drop', e => {
						e.preventDefault();

						if (e.target.classList.value === 'friends__stars-list') {
							draged.parentNode.removeChild(draged);
							draged.childNodes[5].style.display = 'none';
							draged.childNodes[7].style.display = 'block';
							e.target.appendChild(draged);
						} else if (e.target.parentNode.parentNode.classList.value === 'friends__stars-list') {
							e.target.parentNode.parentNode.appendChild(draged);
							draged.childNodes[5].style.display = 'none';
							draged.childNodes[7].style.display = 'block';
						}
					});
					let savedElementsAll = [],
						savedElementsStars = [];


						let parser = (key, arr) => {
							var willSave = [];
							for (let i = 0; i < arr.length; i++) {
								willSave.push({photo: arr[i].childNodes[1].src, name: arr[i].childNodes[3].textContent});

							}

							sessionStorage.setItem(key, JSON.stringify(willSave));

						};

					saver.addEventListener('click', e => {
						if (favoriteFriends.childNodes.length) {

							for (let i = 0; i < everyOneFriends.childNodes.length; i++) {
								if (everyOneFriends.childNodes[i].nodeType === 1) {
									savedElementsAll.push(everyOneFriends.childNodes[i]);
								}
							}
							for (let j = 0; j < favoriteFriends.childNodes.length; j++) {
								if (favoriteFriends.childNodes[j].nodeType === 1) {
									savedElementsStars.push(favoriteFriends.childNodes[j]);
								}
							}

							parser('allFriends' ,savedElementsAll);
							parser('favfriends', savedElementsStars);
							savedElementsAll = [];
							savedElementsStars = [];

						} else {
							alert('Чтобы был смысл сохранять состояние - добавьте хотя бы одного друга в список!');
						}
					});

					res();
			}
		})
	});
}).catch(e => console.log(e.message));
