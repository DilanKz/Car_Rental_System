let tblRequest = $('#tblRequest');
let rentPopUp = $('#rentPopUp');
let popBtn = $('.popBtn');
rentPopUp.css('display','none');
loadAllCars();

let btnReject = $('#btnReject');
let approveRent = $('#btnApproveRent');


function loadAllRequests() {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Request/allRents',
        method: 'GET',
        success: function (res) {
            console.log(res.data);
            tblRequest.empty();
            console.log(carsList);
            let dataList = res.data;

            for (let i = 0; i < dataList.length; i++) {
                addTable(dataList[i]);
            }

        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function addTable(rent) {

    let rentReadOB = createRentReadOB(rent);

    let tr = `<tr class="rentTr" carindex='${JSON.stringify(rentReadOB)}'>
                  <th>${rent.customerID}</th>
                  <th>${rent.rentID}</th>
                  <th>${rent.addDate}</th>
                  <th>${rent.fullPaymentStatus}</th>
                  <th>${rent.pickupDate}</th>
                  <th>${rent.estReturnDate}</th>
              </tr>`

    tblRequest.append(tr);
}

function createRentReadOB(rent) {

    let imagePath = byteArrayToImage(rent.waiverPaymentSlip);

    let rentOB={
        rentID:rent.rentID,
        details:[],
        waiver: imagePath,
        pickupDate:rent.estReturnDate,
        returnDate:rent.pickupDate,
    }

    for (let i = 0; i < rent.rentDetails.length; i++) {

        let carOB = carSearch(rent.rentDetails[i].carID);

        let renReadOBList={
            carID:carOB.carId,
            brand:carOB.name,
            waiver:carOB.waiverPay,
            driverID:'No',
        }

        if (rent.rentDetails[i].carID){
            renReadOBList.driver='Yes';
        }

        rentOB.details.push(renReadOBList);

    }

    return rentOB;
}

function carSearch(id) {
    for (let i = 0; i < carsList.length; i++) {
        if (id===carsList[i].carId){
            return carsList[i];
        }
    }
}

$(document).ready(function() {
    $(document).on('click', '.rentTr', function() {
        rentPopUp.css('display','block');

        let parseOB = JSON.parse($(this).attr('carindex'));
        console.log(parseOB)

        $('#txtEstReturnData').val(parseOB.returnDate);
        $('#txtPickupDate').val(parseOB.pickupDate);
        $('#imgPaySlip').attr('src',parseOB.waiver);
        $('#tblRequestDetails').empty();
        loadRentDetails(parseOB.details);

    });
});

popBtn.click(function () {
    console.log('hi')
    rentPopUp.css('display','none');
});

function loadRentDetails(detail) {

    for (let i = 0; i < detail.length; i++) {
        let tr = `<tr>
                  <td>${detail[i].carID}</td>
                  <td>${detail[i].brand}</td>
                  <td>${detail[i].waiver}</td>
                  <td>${detail[i].driverID}</td>
              </tr>`

        $('#tblRequestDetails').append(tr);
    }

}
