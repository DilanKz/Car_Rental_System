const home = $('#home');
const logInFrame = $('#logInFrame');
const registerFrame = $('#registerFrame');
const manageCarsFrame = $('#manageCarsFrame');
const addCarsFrame = $('#addCarsFrame');
const rentForm = $('#rentForm');
const bg = $('.bg-blur-8');
const nav = $('#nav');


//buttons
const loginBtn = $('#btnLogin');
const signInBtn = $('#signIn');
const registerBtn = $('#btnRegister');
const customerReg = $('#btnCustomerReg');

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
    /*nav.css('display','none')
    home.css('display','none')*/

    logInFrame.css('display','none')
    registerFrame.css('display','block')
}

loginBtn.click(function () {
    /*nav.css('display','none')
    home.css('display','none')*/
    logInFrame.css('display','block')
});

signInBtn.click(function () {
    showLogin();
    cusIdGenerator();
    userIdGenerator();
});

registerBtn.click(function () {
    logInFrame.css('display','none')
    registerFrame.css('display','block');
    cusIdGenerator();
    userIdGenerator();
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

bg.click(function () {
    logInFrame.css('display','none')
    registerFrame.css('display','none')

    $('#regIDFrontLoader').attr('src', 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg');
    $('#regIDBackLoader').attr('src', 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg');
})


$('#btnAddCarClose').click(function () {
    addCarsFrame.css('display','none');
});

$('#btnAddCarSave').click(function () {
    addCarsFrame.css('display','none');
});



customerReg.click(function () {

    let customerData=customerFormData();

    let idFront = $('#btnIDFront')[0].files[0];
    let idBack = $('#btnIDBack')[0].files[0];

    let fileList = [idFront, idBack];

    let formData = new FormData();

    for (let i = 0; i < fileList.length; i++) {
        formData.append("images", fileList[i]);
    }

    formData.append("customerData", customerData);

    $.ajax({
        url: 'http://localhost:8080/CarRental/Register',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            console.log('Files uploaded and customer data sent successfully');
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

});