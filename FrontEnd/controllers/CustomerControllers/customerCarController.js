let viewCarFrame = $('#viewCarFrame');
let carsList;

function loadAllCustomerCars() {

    $.ajax({
        url: 'http://localhost:8080/CarRental/Car/allCars',
        method: 'GET',
        success: function (res) {
            viewCarFrame.empty();
            $('#carLoaderScreen').css('display','flex')
            carsList = res.data;
            for (let i = 0; i < carsList.length; i++) {
                addCustomerCars(carsList[i],i)
            }
            $('#carLoaderScreen').css('display','none')
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
    let rentButton = car.carState === "Available" ? '<a href="#!" class="car__more"><span>Rent now</span></a>' : '<a href="#!" class="car__more" disabled><span>Rent now</span></a>';
    let imageFront = byteArrayToImage(car.carFront);

    let stateTr = car.carState === "Available"?`<span class="p-1 ps-2 pe-2 text-bg-success rounded-4">${car.carState}</span>`:`<span class="p-1 ps-2 pe-2 text-bg-warning rounded-4">${car.carState}</span>`;

    let carHtml=`<div class="col-10 col-md-6 col-xl-3 m-5 mt-0">
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

    $('#lblDayPay').text(car.dailyPayment)

    $('#lblWaiverPay').text(car.waiverPay)
    $('#lblMonthPay').text(car.monthlyPayment)
    $('#lblPPerKm').text(car.extraPerKm)
    $('#lblPassenger').text(car.passengers)
    $('#lblFuelType').text(car.carFuelType)
    $('#lblWholeKm').text(car.wholeKm)
    $('#lblTransmission').text(car.carTransmission)
    $('#btnRentNow').prop('disabled', false);
    
    if (car.carState==='Available'){
        $('#btnRentNow').prop('disabled', false);
    }

    $('#carViewFrame').css('display','block');
}
