let tblRequest = $('#tblRequest');



function loadAllRequests() {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Request/allRents',
        method: 'GET',
        success: function (res) {
            console.log(res.data);
            tblRequest.empty();
            let dataList = res.data;

            for (let i = 0; i < dataList.length; i++) {

                addTable(dataList[i])

            }

        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function addTable(rent) {
    let tr = `<tr>
                  <th>${rent.customerID}</th>
                  <th>${rent.rentID}</th>
                  <th>${rent.addDate}</th>
                  <th>${rent.fullPaymentStatus}</th>
                  <th>${rent.pickupDate}</th>
                  <th>${rent.estReturnDate}</th>
              </tr>`

    tblRequest.append(tr);
}
