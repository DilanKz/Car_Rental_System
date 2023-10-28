let viewCarFrame = $('#viewCarFrame');
let carsList;

function loadAllCustomerCars() {

    $.ajax({
        url: 'http://localhost:8080/CarRental/Car/allCars',
        method: 'GET',
        success: function (res) {
            viewCarFrame.empty();
            carsList = res.data;
            for (let i = 0; i < carsList.length; i++) {
                addCustomerCars(carsList[i],i)
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function addCustomerCars(car,index) {

    let ribbonClass;


    let ob = JSON.stringify(car);

    if (car.carType === "Normal") {
        ribbonClass = "ribbon-normal";
    } else if (car.carType === "Premium") {
        ribbonClass = "ribbon-premium";
    } else if (car.carType === "Luxury") {
        ribbonClass = "ribbon-luxury";
    }
    let rentButton = car.state === "available" ? '<a href="#!" class="car__more"><span>Rent now</span></a>' : '<a href="#!" class="car__more" disabled><span>Rent now</span></a>';
    let imageFront = byteArrayToImage(car.carFront);

    let carHtml=`<div class="col-10 col-md-6 col-xl-3 m-5 mt-0">
                        <div class="car">
                            <div class="ribbon ribbon-top-left"><span class='${ribbonClass}'>${car.carType}</span></div>
                            <img src="${imageFront}" class="d-block w-100 rounded-4" alt="..." style="height: 210px">
                            <div class="car__title">
                                 <h3 class="car__name carNameAnchor" carid="${car.carId}" carIndex="${index}" "> ${car.name} </h3>
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

$(document).ready(function() {
    $(document).on('click', '.carNameAnchor', function() {
        let attr = $(this).attr('carid');
        let listElement = carsList[$(this).attr('carIndex')];

        console.log(listElement);
        loadCarViewPopUp(listElement)
    });
});

function loadCarViewPopUp(car) {

    $('#lblCarFrontPic').attr('src',byteArrayToImage(car.carFront))
    $('#lblCarBackPic').attr('src',byteArrayToImage(car.carBack))
    $('#lblCarSidePic').attr('src',byteArrayToImage(car.carSide))
    $('#lblCarInsidePic').attr('src',byteArrayToImage(car.carInside))

    $('#lblDayPay').text()

    $('#lblWaiverPay').text(car.dailyPayment)
    $('#lblMonthPay').text(car.monthlyPayment)
    $('#lblPPerKm').text(car.extraPerKm)
    $('#lblPassenger').text(car.passengers)
    $('#lblFuelType').text(car.carFuelType)
    $('#lblWholeKm').text(car.wholeKm)
    $('#lblTransmission').text(car.carTransmission)


    $('#carViewFrame').css('display','block');
}
