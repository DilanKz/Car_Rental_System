const home = $('#home');
const logInFrame = $('#logInFrame');
const registerFrame = $('#registerFrame');
const nav = $('#nav');


//buttons
const loginBtn = $('#btnLogin');
const signInBtn = $('#signIn');
const registerBtn = $('#btnRegister');

logInFrame.css('display','none')
registerFrame.css('display','none')

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
})

