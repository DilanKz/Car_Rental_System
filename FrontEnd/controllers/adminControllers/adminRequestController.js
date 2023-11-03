let tblRequest = $('#tblRequest');
let rentPopUp = $('#rentPopUp');
let popBtn = $('.popBtn');
rentPopUp.css('display','none');
loadAllCars();

let btnReject = $('#btnReject');
let btnApproveRent = $('#btnApproveRent');


function loadAllRequests() {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Request/allRents',
        method: 'GET',
        success: function (res) {
            console.log(res.data);
            tblRequest.empty();
            console.log(carsList);
            let dataList = res.data;
            loadAllPayments(dataList);
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

    let bg='rgba(159,255,183,1)'

    if (rent.state==='pending'){
        bg='rgb(255,240,159)'
    }

    let tr = `<tr class="rentTr" carindex='${JSON.stringify(rentReadOB)}'>
                  <th style="background-color: ${bg}">${rent.customerID}</th>
                  <th style="background-color: ${bg}">${rent.rentID}</th>
                  <th style="background-color: ${bg}">${rent.addDate}</th>
                  <th style="background-color: ${bg}">${rent.fullPaymentStatus}</th>
                  <th style="background-color: ${bg}">${rent.pickupDate}</th>
                  <th style="background-color: ${bg}">${rent.estReturnDate}</th>
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

        btnReject.attr('carindex',parseOB.rentID);
        btnApproveRent.attr('carindex',parseOB.rentID);

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

btnReject.click(function () {

    console.log($(this).attr('carindex'));
    /*$.ajax({
        url: 'http://localhost:8080/CarRental/Request/update?id='+this.attr('carindex'),
        method: 'POST',
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
    });*/
});

btnApproveRent.click(function () {


    $.ajax({
        url: 'http://localhost:8080/CarRental/Request/accept?id='+$(this).attr('carindex'),
        method: 'POST',
        success: function (res) {
            rentPopUp.css('display','none');
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
});


/*==========================================================================================*/

function loadAllPayments(list) {

    let paymentList=[];
    for (let i = 0; i < list.length; i++) {
        if (list[i].state==='approved'){
            paymentList.push(list[i]);
        }
    }

    console.log(paymentList);
    $('#tblPayment').empty();



    for (let i = 0; i < paymentList.length; i++) {

        let tr=`<tr class="paymentRow" rentID="${paymentList[i].rentID}" payID="${paymentList[i].payment}">
                    <td>${paymentList[i].payment.paymentID}</td>
                    <td>${paymentList[i].rentID}</td>
                    <td>${paymentList[i].payment.payment}</td>
                    <td>${paymentList[i].payment.paymentExtraMillage}</td>
                </tr>`

        $('#tblPayment').append(tr);
    }
}


$(document).ready(function() {
    $(document).on('click', '.paymentRow', function() {
        let attr = $(this).attr('payID');
        let rentID = $(this).attr('rentID');
        $('#finalizePaymentForm').css('display', 'block');
        $('#finalPayment').attr('payID',attr);
        $('#finalPayment').attr('rentID',rentID);
    });
});

$('#finalPayment').click(function () {

    let payment = JSON.parse($(this).attr('payID'));
    payment.payment=$('#fullPrice').val();
    payment.paymentExtraMillage=$('#damageCost').val();
    let rentID = $(this).attr('rentID');

    $.ajax({
        url: 'http://localhost:8080/CarRental/payment/update',
        method: 'PUT',
        data:JSON.stringify(payment),
        success: function (res) {
            $('#fullPrice').val("");
            $('#damageCost').val("");

            $.ajax({
                url: 'http://localhost:8080/CarRental/request/finish?id='+rentID,
                method: 'POST',
                data:JSON.stringify(payment),
                success: function (res) {


                },
                error: function (error) {
                    console.error('Error:', error);
                }
            });

        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
});
