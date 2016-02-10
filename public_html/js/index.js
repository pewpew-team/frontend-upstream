var $page = $('#page')

function showScoreboardScreen() {
	// TODO
}
function hideScoreboardScreen() {
	// TODO
}

function showGameScreen() {
	// TODO
}
function hideGameScreen() {
	// TODO
}

function showLoginScreen() {
	// TODO
}
function hideLoginScreen() {
	// TODO
}

function showMainScreen() {
    $page.html(mainTmpl());
    $page.find('.js-scoreboard').on('click', showScoreboardScreen);
    $page.find('.js-start-game').on('click', showGameScreen);
    $page.find('.js-login').on('click', showLoginScreen);
}

function hideMainScreen() {
	// TODO
}

