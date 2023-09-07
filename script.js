/** @format */
//para a musica faz que comece a tocar quando alguem clicar no botao
// nao deu pra deixar a musica tocando sozinho devido a autorizaçoes dos navegadores
document.addEventListener('DOMContentLoaded', function () {
	const playButton = document.querySelector('#playButton');
	const audioElement = document.querySelector('#audioPlayer');

	playButton.addEventListener('click', function () {
		audioElement.play();
	});
});
// login comeca assim que o evento do DOM esta load, verifica se o nome tem mais do que 2 caracteres e ativa o botão de iniciar o jogo
document.addEventListener('DOMContentLoaded', function () {
	const input = document.querySelector('.login__input');
	const button = document.querySelector('.login__button');
	const form = document.querySelector('.login-form');

	const validateInput = ({ target }) => {
		if (target.value.length > 2) {
			button.removeAttribute('disabled');
			return;
		}

		button.setAttribute('disabled', '');
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		localStorage.setItem('player', input.value);
		window.location = 'game.html';
	};

	input.addEventListener('input', validateInput);
	form.addEventListener('submit', handleSubmit);
});
