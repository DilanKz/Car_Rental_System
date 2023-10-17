let btnRent = $('#rentIt');

btnRent.click(function () {
    let liveToast = $('#loginToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToast);
    toastBootstrap.show();
})