let btnRent = $('#rentIt');

btnRent.click(function () {
    let liveToast = $('#liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToast);
    toastBootstrap.show();
})