let containerView = $('#carContainerView');
let data;

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


    let carID=car.carId;
    let maintenance=car.maintained;
    let imageFront=byteArrayToFile(car.carFront);
    let imageBack=byteArrayToFile(car.carBack);
    let imageSide=byteArrayToFile(car.carSide);
    let imageInside=byteArrayToFile(car.carInside);

    loadCarData(car);

    $('#btnCarFront').on('change', function() {
        const selectedFile = this.files[0];

        if (selectedFile) {
            imageFront = selectedFile;
        }
    });

    $('#btnCarBack').on('change', function() {
        const selectedFile = this.files[0];

        if (selectedFile) {
            imageBack = selectedFile;
        }
    });

    $('#btnCarSide').on('change', function() {
        const selectedFile = this.files[0];

        if (selectedFile) {
            imageSide = selectedFile;
        }
    });

    $('#btnCarIn').on('change', function() {
        const selectedFile = this.files[0];

        if (selectedFile) {
            imageInside = selectedFile;
        }
    });

    data = new FormData();
    data.set('carFront',imageFront);
    data.set('carBack',imageBack);
    data.set('carSide',imageSide);
    data.set('carInside',imageInside);
    data.set('carId',carID);
    data.set('maintained',maintenance);
}


function loadCarData(car){
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

function finalizeFormData(){
    data.set('regNo',$('#txtRegNo').val());
    data.set('name',$('#txtBrand').val());
    data.set('waiverPay',$('#txtWeaverPay').val());
    data.set('wholeKm',$('#txtWholeKm').val());
    data.set('carState',$('#txtCarState').val());
    data.set('color',$('#txtColour').val());
    data.set('passengers',$('#txtPCount').val());
    data.set('carType',$('#txtCarType').val());
    data.set('carFuelType',$('#txtFuelType').val());
    data.set('carTransmission',$('#txtTransmissionType').val());
    data.set('dailyPayment',$('#txtDailyRate').val());
    data.set('monthlyPayment',$('#txtMonthlyRate').val());
    data.set('dailyKmLimit',$('#txtDailyLimit').val());
    data.set('monthlyKmLimit',$('#txtMonthlyLimit').val());
    data.set('extraPerKm',$('#txtExtraKmPrice').val());
}

$('#btnAddCarUpdate').click(function () {
    updateCar()
});


$('#btnAddCarSave').click(function () {

    let formData=new FormData($('#carFormData')[0]);
    formData.set('carId',carID)
    formData.set('maintained',maintenance)

    $.ajax({
        url: 'http://localhost:8080/CarRental/Car/save',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            //toast here
            loadAllCars();
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
});

function updateCar() {

    finalizeFormData();

    $.ajax({
        url: 'http://localhost:8080/CarRental/Car/update',
        method: 'PUT',
        data: data,
        processData: false,
        contentType: false,
        success: function (res) {
            //toast here
            loadAllCars();
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

}
