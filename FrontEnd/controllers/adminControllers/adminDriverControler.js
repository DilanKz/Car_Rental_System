let baseURL = 'http://localhost:8080/CarRental/Driver/';
let userID;
let driveID;


$('#btnAddDriver').click(function () {
    $('#addDriverFrame').css('display', 'block');
    nextDriverIdGenerator();
    nextUserIdGenerator();
});


$('#btnDriverRegister').click(function () {

    let driverJSON = createDriverJSON();
    console.log(driveID)

    $.ajax({
        url: baseURL + 'makeAccount',
        method: 'POST',
        data: JSON.stringify(driverJSON),
        contentType: 'application/json',
        success: function (res) {
            console.log(res.state);
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
});


function nextUserIdGenerator() {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Register/uId',
        method: 'GET',
        success: function (res) {

            if (res.data == null) {

                userID = 'U00-001';
            } else {
                let number = parseInt(res.data.slice(4), 10);
                number++;
                userID = "U00-" + number.toString().padStart(3, "0");
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function nextDriverIdGenerator() {
    $.ajax({
        url: baseURL + 'uId',
        method: 'GET',
        success: function (res) {

            if (res.data == null) {

                driveID = 'DRI-001';
            } else {
                let number = parseInt(res.data.slice(4), 10);
                number++;
                driveID = "DRI-" + number.toString().padStart(3, "0");
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function getAllDrivers() {
    $.ajax({
        url: baseURL + 'all',
        method: 'GET',
        success: function (res) {
            let drivers = res.data;
            $('#tblDrivers').empty()
            for (let i = 0; i < drivers.length; i++) {
                loadOne(drivers[i]);
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function loadOne(driver) {
    let stateTr= `<td><label class="badge bg-warning">${driver.status}</label></td>`;

    if (driver.status==='available'){
        stateTr= `<td><label class="badge bg-success">${driver.status}</label></td>`;
    }

    let tr = `<tr admin="${driver}">
                  <td>${driver.did}</td>
                  <td>${driver.name}</td>
                  <td>${driver.address}</td>
                  <td>${driver.licenseNo}</td>
                  <td>${driver.contact}</td>
                  ${stateTr}
              </tr>`

    $('#tblDrivers').append(tr)
}