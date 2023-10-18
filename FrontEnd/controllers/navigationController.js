const home = $('#home');
const logInFrame = $('#logInFrame');
const registerFrame = $('#registerFrame');
const manageCarsFrame = $('#manageCarsFrame');
const addCarsFrame = $('#addCarsFrame');
const summeryFrame = $('#summeryFrame');
const nav = $('#nav');


//buttons
const loginBtn = $('#btnLogin');
const signInBtn = $('#signIn');
const registerBtn = $('#btnRegister');

logInFrame.css('display','none')
registerFrame.css('display','none')
manageCarsFrame.css('display','none');
addCarsFrame.css('display','none');

function hideAll() {
    logInFrame.css('display','none')
    registerFrame.css('display','none')
    manageCarsFrame.css('display','none');
    addCarsFrame.css('display','none');
}

function showLogin() {
    nav.css('display','none')
    home.css('display','none')

    logInFrame.css('display','none')
    registerFrame.css('display','block')
}

loginBtn.click(function () {
    nav.css('display','none')
    home.css('display','none')
    logInFrame.css('display','block')
});

signInBtn.click(function () {
    showLogin();
});

registerBtn.click(function () {
    logInFrame.css('display','none')
    registerFrame.css('display','block')
});

$('#carsIt').click(function () {
    home.css('display','none')
    manageCarsFrame.css('display','block');
});

$('#homeIt').click(function () {
    home.css('display','block')
    manageCarsFrame.css('display','none');
    logInFrame.css('display','none')
    registerFrame.css('display','none');
});

$('#addNewCar').click(function () {

    addCarsFrame.css('display','block');
});


$('#btnAddCarClose').click(function () {
    addCarsFrame.css('display','none');
});

$('#btnAddCarSave').click(function () {
    addCarsFrame.css('display','none');
});