(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})();

let dashboardFrame = $('#dashboardFrame');
let requestsFrame = $('#requestsFrame');
let carsFrame = $('#carsFrame');
let accountFrame = $('#accountFrame');
let profileFrame = $('#profileFrame');
let carViewFrame = $('#carViewFrame');


let btnDashboard = $('#btnDashboard');
let btnCars = $('#btnCars');
let btnAccount = $('#btnAccount');
let btnRequests = $('#btnRequests');

function hide() {
    dashboardFrame.css('display','none');
    requestsFrame.css('display','none');
    carsFrame.css('display','none');
    accountFrame.css('display','none');
    profileFrame.css('display','none');
    carViewFrame.css('display','none');

    btnDashboard.removeClass('bottomLine')
    btnCars.removeClass('bottomLine')
    btnAccount.removeClass('bottomLine')
    btnRequests.removeClass('bottomLine')
}

hide();
dashboardFrame.css('display','block');
btnDashboard.addClass('bottomLine');

$('#btnProfile')

btnDashboard.click(function () {
    hide();
    dashboardFrame.css('display','block');
    $(this).addClass('bottomLine')
});

btnCars.click(function () {
    hide();
    carsFrame.css('display','block');
    $(this).addClass('bottomLine');
    loadAllCars();
});

btnRequests.click(function () {
    hide();
    requestsFrame.css('display','block');
    $(this).addClass('bottomLine')
});

btnAccount.click(function () {
    hide();
    accountFrame.css('display','block');
    getAllDrivers()
    $(this).addClass('bottomLine')
});

$('#btnAddNewCar').click(function () {
    carIdGenerator();
    carViewFrame.css('display','block');
    $('#btnAddCarSave').css('display','block');
    $('#btnAddCarUpdate').css('display','none');
});

$('#btnAddCarClose').click(function () {
    carViewFrame.css('display','none');
});



