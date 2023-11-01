let btnRent = $('#rentIt');

btnRent.click(function () {
    blueToastShow('Please sign in to Place a rent');
    yellowToastShow('Please sign in to Place a rent');
});

function blueToastShow(message) {
    $('#toastBlueText').text(message);
    const toastBLueFrame = $('#toastBLueFrame');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastBLueFrame);
    toastBootstrap.show();
}

function yellowToastShow(message) {
    $('#toastYellowText').text(message);
    const toastBLueFrame = $('#toastYellowFrame');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastBLueFrame);
    toastBootstrap.show();
}