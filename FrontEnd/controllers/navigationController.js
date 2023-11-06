let mainLoggedInCustomer = null;


const home = $('#home');
const about = $('#about');
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

logInFrame.css('display', 'none')
registerFrame.css('display', 'none')
manageCarsFrame.css('display', 'none');
addCarsFrame.css('display', 'none');
rentACarFrame.css('display', 'none');
carViewForm.css('display', 'none');

let carsList;

loadAllCustomerCars();


function hideAll() {
    logInFrame.css('display', 'none')
    registerFrame.css('display', 'none')
    manageCarsFrame.css('display', 'none');
    addCarsFrame.css('display', 'none');
}

function showLogin() {
    /*nav.css('display','none')
    home.css('display','none')*/

    logInFrame.css('display', 'none')
    registerFrame.css('display', 'block')
}

loginBtn.click(function () {
    /*nav.css('display','none')
    home.css('display','none')*/
    logInFrame.css('display', 'block')
});

signInBtn.click(function () {
    showLogin();
    cusIdGenerator();
    userIdGenerator();
});

registerBtn.click(function () {
    logInFrame.css('display', 'none')
    registerFrame.css('display', 'block');
    cusIdGenerator();
    userIdGenerator();
});

$('#carsIt').click(function () {
    home.css('display', 'none')
    about.css('display', 'none')
    manageCarsFrame.css('display', 'block');
});

$('#carsSeeMore').click(function () {
    home.css('display', 'none')
    about.css('display', 'none')
    manageCarsFrame.css('display', 'block');
});

$('#homeIt').click(function () {
    home.css('display', 'block')
    about.css('display', 'block')
    manageCarsFrame.css('display', 'none');
    logInFrame.css('display', 'none')
    registerFrame.css('display', 'none');
});

$('#rentIt').click(function () {
    if (mainLoggedInCustomer != null) {
        home.css('display', 'none');
        about.css('display', 'none');
        manageCarsFrame.css('display', 'none');
        rentACarFrame.css('display', 'block');
    } else {
        yellowToastShow('Please sign in to Place a rent');
    }
});

$('#addNewCar').click(function () {

    addCarsFrame.css('display', 'block');
});

bg.click(function () {
    logInFrame.css('display', 'none')
    registerFrame.css('display', 'none')
    carViewForm.css('display', 'none')

    $('#regIDFrontLoader').attr('src', 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg');
    $('#regIDBackLoader').attr('src', 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg');
})

carNameAnchor.click(function () {
    carViewForm.css('display', 'block');
});

let loggedUser = null;

btnLogInM.click(function () {
    let userName = $('#txtLogUserName').val();
    let loginPass = $('#txtLogUserPass').val();

    if (loggedUser != null) {
        if (loggedUser.password === loginPass) {
            checkUser(userName, loginPass);
        }
    } else {
        getLoginDetails(userName, loginPass)
    }

});

function getLoginDetails(userName, password) {
    $.ajax({
        url: 'http://localhost:8080/CarRental/login/account?userName=' + userName,
        method: 'GET',
        async: false,
        success: function (res) {
            if (res.data != null) {
                loggedUser = res.data;
                if (res.data.userName === userName) {
                    checkUser(userName, password);
                }
            }
            //toast red
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function checkUser(username, password) {
    if (loggedUser.password === password) {
        console.log('check user true');

        if (loggedUser.type === 'admin') {
            console.log('admin');
            window.location.href = '../pages/admin.html';
        }
        if (loggedUser.type === 'user') {
            console.log('customer');
            $('#signIn').css('display', 'none');
            $('#btnLogin').css('display', 'none');
            getUser(loggedUser.id);
            logInFrame.css('display', 'none');
        }
        if (loggedUser.type === 'driver') {
            console.log('driver');
            window.location.href = '../pages/index.html';
        }

    } else {
        console.log('wrong password')
    }
}

function getUser(id) {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Register/getUser?id=' + id,
        method: 'GET',
        async: false,
        success: function (res) {
            console.log(res.data)
            mainLoggedInCustomer = res.data;
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

    let customerData = new FormData($('#registerFormData')[0]);
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


function iterateThreeCars(list) {
    for (let i = 0; i < 3; i++) {
        loadFrontCar(list[i]);
    }

}

function loadFrontCar(car) {

    let imageFront = byteArrayToImage(car.carFront);

    let carHtml = `<div class="col-10 col-md-6 col-xl-3 m-5 mt-2">
            <div class="car-2 box-shadow-3" style="background: #f8f9fa">
                <img src="${imageFront}" class="d-block w-100 rounded-4" alt="..." style="height: 210px">
                            <div class="car__title">
                                 <h3 class="car__name"> ${car.name} </h3>
                            </div>
                            <ul class="car__list">
                                <li>
                                    <i class="fa-solid fa-user-group text-primary me-2 ms-1"></i>
                                    <span>${car.passengers}</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-charging-station text-primary me-2 ms-1"></i>
                                    <span>${car.carFuelType}</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-gauge-high text-primary me-2 pe-1 ms-1"></i>
                                    <span>${car.wholeKm}</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-car-battery text-primary me-2 pe-1 ms-1"></i>
                                    <span>${car.carTransmission}</span>
                                </li>
                            </ul>
                            <div class="car__footer">
                                <span class="car__price">${car.dailyPayment} <sub>/ day</sub></span>
       
                            </div>
            </div>
        </div>`;

    $('#loadingCars').append(carHtml)
}