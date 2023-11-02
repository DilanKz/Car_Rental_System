let selectedCarList = []

function addCarToTheCart(listElement) {

    selectedCarList.push(listElement);

    console.log(selectedCarList.length);

    let image = byteArrayToImage(listElement.carFront);


    let cartItem = `<div class="cartItemCarCard col-11 my-3 rounded-4 box-shadow" carindex="${listElement.carId}" style="height: 120px">
                                                    <div class="p-2 row">
                                                        <div class="ms-3 p-0 rounded-4 overflow-hidden" style="height: 100px;width: 100px">
                                                            <img src="${image}" alt="" style="height: 100px;width: 100px">
                                                        </div>

                                                        <div class="col-7 ms-4" style="height: 100px">
                                                            <div class="row pt-3">
                                                                <div class="col-6">
                                                                    <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Waiver :</span> ${listElement.waiverPay}</p>
                                                                    <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Price  :</span> ${listElement.dailyPayment}</p>
                                                                </div>

                                                                <div class="col-6">
                                                                    <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Rs-Month :</span> ${listElement.monthlyPayment}</p>
                                                                    <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Rs-Extra  :</span> ${listElement.extraPerKm}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-1 ms-2 d-flex justify-content-center align-items-center" style="height: 100px">
                                                            <div class="form-check">
                                                                <input class="driveCheck form-check-input text-success checked" type="checkbox" value="" carindex="${selectedCarList.length - 1}"/>
                                                                <label class="form-check-label">Driver</label>
                                                            </div>
                                                        </div>

                                                        <div class="col-1 ms-2 d-flex justify-content-center align-items-center" style="height: 100px">
                                                            <button carindex="${selectedCarList.length - 1}" type="button" class="btnItemClose btn-close p-2 box-shadow-2 bg-light"></button>
                                                        </div>
                                                    </div>
                                                </div>`

    $('#cartList').append(cartItem);

}

$(document).ready(function () {
    $(document).on('click', '.btnItemClose', function () {
        let indexToRemove = $(this).attr('carindex');
        //$(this).parent().parent().css('display','none')
        $(this).parent().parent().parent().remove();
        selectedCarList.splice(indexToRemove, 1);
    });
});

function getRentOB() {
    let rent = {
        rentID: null,
        pickupDate: "12",
        pickupTime: "23",
        addDate:new Date().toLocaleDateString(),
        estReturnDate: "4334",
        estReturnTime: "3434",
        fullPaymentStatus: "23423",
        state: "pending",
        waiverPaymentSlip: null,
        payment: null,
        customerID: "C00-002",
        rentDetails: null
    }

    return rent;
}

let detailList = [];
let driverList = [];
let payID;
let rentID;
let selectedFullDate = null;
let selectedFullTime = null;
let estReturnData = null;
let estReturnTime = null;


$('#btnPlaceRequest').click(function () {
    makeRentDetailList();
});

function makeRentDetailList() {
    detailList = [];


    $(document).ready(function () {
        let card = $('.cartItemCarCard');
        let drivers = $('.driveCheck');

        console.log(card.first().attr('carindex'));

        for (let i = 0; i < card.length; i++) {

            let carID = $(card[i]).attr('carindex');
            let driverID = null;
            if ($(drivers[i]).is(':checked')) {
                driverID = driverList[i];
            }

            detailList.push({
                rentID: rentID,
                carID: carID,
                driverID: driverID
            });
        }
    });

    let rent = getRentOB();
    rent.rentID = rentID;
    rent.rentDetails = detailList;
    rent.payment = {
        paymentID: payID,
        payment: "0",
        paymentExtraMillage: "0",

    };
    rent.pickupDate = selectedFullDate;
    rent.pickupTime = selectedFullTime;
    rent.estReturnDate = estReturnData;
    rent.estReturnTime = estReturnTime;
    rent.customerID = mainLoggedInCustomer.cid;

    if (selectedFullDate && selectedFullTime && estReturnData && estReturnTime) {
        console.log(rent);

        addRequest(rent);

    } else {
        console.log('One or more variables are null.');
    }

}


$('#txtRentPickupDate').change(function () {
    let selectedDateTime = new Date($(this).val());
    let currentDateTime = new Date();
    currentDateTime.setDate(currentDateTime.getDate() + 2);

    if (selectedDateTime < currentDateTime) {

        let selectedHours = selectedDateTime.getHours();
        let selectedMinutes = selectedDateTime.getMinutes();

        selectedFullDate = selectedDateTime.getFullYear() + '-' + (selectedDateTime.getMonth() + 1) + '-' + selectedDateTime.getDate();
        selectedFullTime = selectedHours + ':' + (selectedMinutes < 10 ? '0' : '') + selectedMinutes;

        console.log(selectedFullDate);
        console.log(selectedFullTime);
    } else {
        console.log('Selected date/time is more than two days from now.');
    }
});

$('#txtRentEstRDate').change(function () {
    let selectedDateTime = new Date($(this).val());

    let selectedHours = selectedDateTime.getHours();
    let selectedMinutes = selectedDateTime.getMinutes();

    estReturnData = selectedDateTime.getFullYear() + '-' + (selectedDateTime.getMonth() + 1) + '-' + selectedDateTime.getDate();
    estReturnTime = selectedHours + ':' + (selectedMinutes < 10 ? '0' : '') + selectedMinutes;

    console.log(estReturnData);
    console.log(estReturnTime);
});

let slipFile = null;

$(document).ready(function () {
    slipFile = null;
    $('#slipFile').change(function () {
        slipFile = ($(this).val());
    });
});


function addRequest(rentOB) {
    if (slipFile != null) {
        let formData = new FormData();
        formData.set('slip', $('#slipFile')[0].files[0])

        $.ajax({
            url: 'http://localhost:8080/CarRental/Request/paySlip',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                if (res.state === "OK") {
                    $.ajax({
                        url: 'http://localhost:8080/CarRental/Request',
                        method: 'POST',
                        data: JSON.stringify(rentOB),
                        contentType: 'application/json',
                        success: function (res) {

                        },
                        error: function (error) {
                            console.error('Error:', error);
                        }
                    });
                }
            },
            error: function (error) {
                console.error('Error:', error);
                return "";
            }
        });

    } else {
        //toast
    }
}