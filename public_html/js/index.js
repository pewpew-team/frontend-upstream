var $page = $('#page')

function showScoreboardScreen() {
    hideMainScreen();
    $page.html(scoreboardTmpl());
    $page.find('.js-back').on('click', function () {
        hideScoreboardScreen();
        showMainScreen();
    });
}
function hideScoreboardScreen() {
	$page.find('.js-back').off('click', '**');
}

function showGameScreen() {
    hideMainScreen();
    $page.html(gameTmpl());
    $page.find('.js-exit').on('click', function () {
        hideGameScreen();
        showMainScreen();
    });
}
function hideGameScreen() {
    $page.find('.js-exit').off('click','**');
}

function showLoginScreen() {
    hideMainScreen();
    $page.html(loginTmpl());
    $page.find('.js-back').on('click', function () {
        hideLoginScreen();
        showMainScreen();
    });
}
function hideLoginScreen() {
    $page.find('.js-back').off('click', '**');
}

function showMainScreen() {
    $page.html(mainTmpl());
    $page.find('.js-scoreboard').on('click', showScoreboardScreen);
    $page.find('.js-game').on('click', showGameScreen);
    $page.find('.js-login').on('click', showLoginScreen);
}

function hideMainScreen() {
    $page.find('.js-scoreboard').off('click', '**');
    $page.find('.js-start-game').off('click', '**');
    $page.find('.js-login').off('click', '**');
}

