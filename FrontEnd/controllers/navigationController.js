const home = $('#home');
const logInFrame = $('#logInFrame');
const registerFrame = $('#registerFrame');
const manageCarsFrame = $('#manageCarsFrame');
const addCarsFrame = $('#addCarsFrame');
const rentACarFrame = $('#rentACarFrame');
const rentForm = $('#rentForm');
const bg = $('.bg-blur-8');
const nav = $('#nav');


//buttons
const loginBtn = $('#btnLogin');
const btnLogInM = $('#btnLogInM');
const signInBtn = $('#signIn');
const registerBtn = $('#btnRegister');
const customerReg = $('#btnCustomerReg');

logInFrame.css('display','none')
registerFrame.css('display','none')
manageCarsFrame.css('display','none');
addCarsFrame.css('display','none');
rentACarFrame.css('display','none');

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

$('#rentIt').click(function () {
    home.css('display','none');
    manageCarsFrame.css('display','none');
    rentACarFrame.css('display','block');
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


btnLogInM.click(function () {
    let userName = $('#txtLogUserName').val();
    let loginPass = $('#txtLogUserPass').val();

    if (userName==='admin'){
        console.log('admin');
        window.location.href='../pages/admin.html';
    }
    if (userName==='customer'){
        console.log('customer');
        window.location.href='../index.html';
    }
    if (userName==='driver'){
        console.log('driver');
    }
});


/*$('#registerFormData').submit(function (e) {
    e.preventDefault();

    let formData=new FormData(this);
    formData.set('cid', cusID);
    formData.set('id', cusID);
    formData.set('regDte','2023-12-12');

    $.ajax({
        url: 'http://localhost:8080/CarRental/Register/test',
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

})*/


customerReg.click(function () {

    let customerData=new FormData($('#registerFormData')[0]);
    customerData.set('cid', cusID);
    customerData.set('id', cusID);
    customerData.set('uid', userID);
    customerData.set('type', userID);

    /*let idFront = $('#btnIDFront')[0].files[0];
    let idBack = $('#btnIDBack')[0].files[0];

    let fileList = [idFront, idBack];

    let formData = new FormData();

    for (let i = 0; i < fileList.length; i++) {
        formData.append("images", fileList[i]);
    }

    formData.append("customerData", customerData);*/

    $.ajax({
        url: 'http://localhost:8080/CarRental/Register/test',
        method: 'POST',
        data: customerData,
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