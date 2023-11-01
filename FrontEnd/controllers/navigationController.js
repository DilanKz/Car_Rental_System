let mainLoggedInCustomer=null;


const home = $('#home');
const logInFrame = $('#logInFrame');
const registerFrame = $('#registerFrame');
const manageCarsFrame = $('#manageCarsFrame');
const addCarsFrame = $('#addCarsFrame');
const rentACarFrame = $('#rentACarFrame');
const carViewForm = $('#carViewFrame');
const rentForm = $('#rentForm');
const bg = $('.bg-blur-8');
const nav = $('#nav');


//buttons
const loginBtn = $('#btnLogin');
const btnLogInM = $('#btnLogInM');
const signInBtn = $('#signIn');
const registerBtn = $('#btnRegister');
const customerReg = $('#btnCustomerReg');
const carNameAnchor = $('.carNameAnchor');

logInFrame.css('display','none')
registerFrame.css('display','none')
manageCarsFrame.css('display','none');
addCarsFrame.css('display','none');
rentACarFrame.css('display','none');
carViewForm.css('display','none');

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
    loadAllCustomerCars()
});

$('#homeIt').click(function () {
    home.css('display','block')
    manageCarsFrame.css('display','none');
    logInFrame.css('display','none')
    registerFrame.css('display','none');
});

$('#rentIt').click(function () {
    if (mainLoggedInCustomer!=null){
        home.css('display','none');
        manageCarsFrame.css('display','none');
        rentACarFrame.css('display','block');
    }else {
        yellowToastShow('Please sign in to Place a rent');
    }
});

$('#addNewCar').click(function () {

    addCarsFrame.css('display','block');
});

bg.click(function () {
    logInFrame.css('display','none')
    registerFrame.css('display','none')
    carViewForm.css('display','none')

    $('#regIDFrontLoader').attr('src', 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg');
    $('#regIDBackLoader').attr('src', 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg');
})

carNameAnchor.click(function () {
    carViewForm.css('display','block');
});

let loggedUser=null;

btnLogInM.click(function () {
    let userName = $('#txtLogUserName').val();
    let loginPass = $('#txtLogUserPass').val();

    if (loggedUser!=null){
        if (loggedUser.password === loginPass) {
            checkUser(userName,loginPass);
        }
    }else {
        getLoginDetails(userName,loginPass)
    }

});

function getLoginDetails(userName,password) {
    $.ajax({
        url: 'http://localhost:8080/CarRental/login/account?userName='+userName,
        method: 'GET',
        async:false,
        success: function (res) {
            if (res.data!=null){
                loggedUser=res.data;
                if (res.data.userName===userName){
                    checkUser(userName,password);
                }
            }
            //toast red
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function checkUser(username,password) {
    if (loggedUser.password===password){
        console.log('check user true');

        if (loggedUser.type==='admin'){
            console.log('admin');
            window.location.href='../pages/admin.html';
        }
        if (loggedUser.type==='user'){
            console.log('customer');
            $('#signIn').css('display','none');
            $('#btnLogin').css('display','none');
            getUser(loggedUser.id);
            logInFrame.css('display','none');
        }
        if (loggedUser.type==='driver'){
            console.log('driver');
        }

    }else {
        console.log('wrong password')
    }
}

function getUser(id) {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Register/getUser?id='+id,
        method: 'GET',
        async:false,
        success: function (res) {
            console.log(res.data)
            mainLoggedInCustomer=res.data;
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}


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
    customerData.set('state', 'none');
    customerData.set('regDte', '2023-10-30');
    customerData.set('password', $('#txtLogUserPass').val());

    /*let idFront = $('#btnIDFront')[0].files[0];
    let idBack = $('#btnIDBack')[0].files[0];

    let fileList = [idFront, idBack];

    let formData = new FormData();

    for (let i = 0; i < fileList.length; i++) {
        formData.append("images", fileList[i]);
    }

    formData.append("customerData", customerData);*/

    $.ajax({
        url: 'http://localhost:8080/CarRental/Register/makeAccount',
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