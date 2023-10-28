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
        console.log(attr);
    });
});

