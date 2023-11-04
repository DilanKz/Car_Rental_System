let viewCarFrame = $('#viewCarFrame');
let btnRentNow = $('#btnRentNow');

function loadAllCustomerCars() {

    $.ajax({
        url: 'http://localhost:8080/CarRental/Car/allCars',
        method: 'GET',
        success: function (res) {
            viewCarFrame.empty();
            $('#carLoaderScreen').css('display', 'flex')
            carsList = res.data;
            iterateThreeCars(carsList);
            for (let i = 0; i < carsList.length; i++) {
                addCustomerCars(carsList[i], i)
            }
            $('#carLoaderScreen').css('display', 'none')
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function addCustomerCars(car, index) {

    let ribbonClass;


    let ob = JSON.stringify(car);

    if (car.carType === "Normal") {
        ribbonClass = "ribbon-normal";
    } else if (car.carType === "Premium") {
        ribbonClass = "ribbon-premium";
    } else if (car.carType === "Luxury") {
        ribbonClass = "ribbon-luxury";
    }
    let rentButton = car.carState === "Available" ? '<a href="#!" class="text-decoration-none car__more btnRentNow" carindex="' + index + '"><span>Add to cart <i class="ms-2 fa-solid fa-cart-plus"></i></span></a>' : '<a href="#!" class="text-decoration-none car__more"  carindex="' + index + '" disabled><span>Add to cart <i class="ms-2 fa-solid fa-cart-plus"></i></span></a>';
    let imageFront = byteArrayToImage(car.carFront);

    let stateTr = car.carState === "Available" ? `<span class="p-1 ps-2 pe-2 text-bg-success rounded-2">${car.carState}</span>` : `<span class="p-1 ps-2 pe-2 text-bg-warning rounded-2">${car.carState}</span>`;

    let carHtml = `<div class="col-10 col-md-6 col-xl-3 m-5 mt-0">
                        <div class="car">
                            <div class="ribbon ribbon-top-left"><span class='${ribbonClass}'>${car.carType}</span></div>
                            <img src="${imageFront}" class="d-block w-100 rounded-4" alt="..." style="height: 210px">
                            <div class="car__title">
                                 <h3 class="car__name carNameAnchor" carid="${car.carId}" carIndex="${index}" "> ${car.name} </h3>
                                 ${stateTr}
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
        
                                ${rentButton}
                            </div>
                        </div>
                    </div>`;

    viewCarFrame.append(carHtml);

}

$(document).ready(function () {
    $(document).on('click', '.carNameAnchor', function () {
        let index = $(this).attr('carIndex');
        let listElement = carsList[$(this).attr('carIndex')];

        console.log(listElement);
        loadCarViewPopUp(listElement,index)
    });
});

function loadCarViewPopUp(car, index) {

    $('#lblCarFrontPic').attr('src', byteArrayToImage(car.carFront))
    $('#lblCarBackPic').attr('src', byteArrayToImage(car.carBack))
    $('#lblCarSidePic').attr('src', byteArrayToImage(car.carSide))
    $('#lblCarInsidePic').attr('src', byteArrayToImage(car.carInside))

    $('#lblDayPay').text(car.dailyPayment)

    $('#lblWaiverPay').text(car.waiverPay)
    $('#lblMonthPay').text(car.monthlyPayment)
    $('#lblPPerKm').text(car.extraPerKm)
    $('#lblPassenger').text(car.passengers)
    $('#lblFuelType').text(car.carFuelType)
    $('#lblWholeKm').text(car.wholeKm)
    $('#lblTransmission').text(car.carTransmission);
    btnRentNow.prop('disabled', false);
    btnRentNow.attr('carindex', index);

    if (car.carState === 'Available') {
        btnRentNow.prop('disabled', false);
    }

    $('#carViewFrame').css('display', 'block');
}

$(document).ready(function () {
    btnRentNow.click(function () {
        let listElement = carsList[$(this).attr('carIndex')];
        console.log(listElement);

        if (mainLoggedInCustomer!=null){
            drivers();
            nextPayID();
            nextRentID();
            addCarToTheCart(listElement);
        }else {
            RedToastShow('Please sign in to use cart');
        }
    });
});


$(document).ready(function () {
    $(document).on('click', '.btnRentNow', function () {
        let listElement = carsList[$(this).attr('carIndex')];
        console.log(listElement);
        if (mainLoggedInCustomer!=null){
            drivers();
            nextPayID();
            nextRentID();
            addCarToTheCart(listElement);
        }else {
            RedToastShow('Please sign in to use cart');
        }
    });
});

function drivers() {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Request/drivers',
        method: 'GET',
        success: function (res) {
            driverList= res.data;
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function nextPayID() {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Request/payID',
        method: 'GET',
        success: function (res) {

            if (res.data == null) {

                payID = 'P00-001';
            } else {
                let number = parseInt(res.data.slice(4), 10);
                number++;
                payID = "P00-" + number.toString().padStart(3, "0");
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}
function nextRentID() {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Request/rentID',
        method: 'GET',
        success: function (res) {

            if (res.data == null) {

                rentID = 'RQ0-001';
            } else {
                let number = parseInt(res.data.slice(4), 10);
                number++;
                rentID = "RQ0-" + number.toString().padStart(3, "0");
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}