let containerView = $('#carContainerView');
function loadAllCars() {

    $.ajax({
        url: 'http://localhost:8080/CarRental/Car/allCars',
        method: 'GET',
        success: function (res) {
            containerView.empty();
            let carsList = res.data;
            for (let i = 0; i < carsList.length; i++) {
                addCarToView(carsList[i])
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function base64ToUint8Array(base64) {
    const binaryString = window.atob(base64);
    const length = binaryString.length;
    const uint8Array = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }

    return uint8Array;
}


function byteArrayToImage(byteArray) {
    const blob = new Blob([base64ToUint8Array(byteArray)], { type: 'image/jpeg' });
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl;
}

function byteArrayToFile(byteArray) {
    const blob = new Blob([base64ToUint8Array(byteArray)], { type: 'image/jpeg' });
    const file = new File([blob], 'a.jpg', { type: blob.type });
    return file;
}

function addCarToView(car) {

    console.log(car);
    let imageFront = byteArrayToImage(car.carFront);

    let carElementHTML = `
    <div class="col-2 ms-2 me-2 mb-3 p-3 bg-light rounded-4 customer clickable" carid='${JSON.stringify(car)}'>
        <div class="row rounded-4 overflow-hidden">
            <img src="${imageFront}" alt="" class="rounded-4 card-link" style="height: 150px;width: 240px">
        </div>
        <div class="row d-flex justify-content-center">
            <h6 class="h6 mb-0 mt-1 w-auto">${car.name}</h6>
        </div>
    </div>
`;



    containerView.append(carElementHTML);

}


$(document).ready(function() {
    $(document).on('click', '.customer', function() {
        let attr = $(this).attr('carid');
        loadCarFrame(JSON.parse(attr));
    });
});


function loadCarFrame(car) {
    carViewFrame.css('display','block');
    $('#btnAddCarSave').css('display','none');
    $('#btnAddCarUpdate').css('display','block');
    carID=car.carId;
    maintenance=car.maintained;

    let imageFront=byteArrayToFile(car.carFront);
    let imageBack=byteArrayToFile(car.carBack);
    let imageSide=byteArrayToFile(car.carSide);
    let imageInside=byteArrayToFile(car.carInside);

    $('#imgCarFront').attr('src',byteArrayToImage(car.carFront))
    $('#imgCarBack').attr('src',byteArrayToImage(car.carBack))
    $('#imgCarSide').attr('src',byteArrayToImage(car.carSide))
    $('#imgCarIn').attr('src',byteArrayToImage(car.carInside))

    $('#txtRegNo').val(car.regNo);
    $('#txtBrand').val(car.name);
    $('#txtWeaverPay').val(car.waiverPay);
    $('#txtWholeKm').val(car.wholeKm);
    $('#txtCarState').val(car.carState);
    $('#txtColour').val(car.color);
    $('#txtPCount').val(car.passengers);
    $('#txtCarType').val(car.carType);
    $('#txtFuelType').val(car.carFuelType);
    $('#txtTransmissionType').val(car.carTransmission);
    $('#txtDailyRate').val(car.dailyPayment);
    $('#txtMonthlyRate').val(car.monthlyPayment);
    $('#txtDailyLimit').val(car.dailyKmLimit);
    $('#txtMonthlyLimit').val(car.monthlyKmLimit);
    $('#txtExtraKmPrice').val(car.extraPerKm);
}

