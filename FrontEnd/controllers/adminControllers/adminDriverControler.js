let baseURL = 'http://localhost:8080/CarRental/Driver/';
let userID;
let driveID;


$('#btnAddDriver').click(function () {
    $('#addDriverFrame').css('display', 'block');

    $('#btnDriverRegister').css('display','block')
    $('#btnDriverUpdate').css('display','none')
    $('#driverStateGroup').css('display','none');
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

    let tr = `<tr admin='${JSON.stringify(driver)}'>
                  <td>${driver.did}</td>
                  <td>${driver.name}</td>
                  <td>${driver.address}</td>
                  <td>${driver.licenseNo}</td>
                  <td>${driver.contact}</td>
                  ${stateTr}
              </tr>`

    $('#tblDrivers').append(tr);
}

let driver;

$('#tblDrivers').on('click', 'tr', function() {
    let clickedRow = $(this);
    console.log(clickedRow)
    driver = JSON.parse(clickedRow.attr('admin'));
    console.log(driver);
    loadClearDriverData(driver.name,driver.address,driver.licenseNo,driver.contact,driver.email,driver.dto.userName,driver.dto.password)
    $('#addDriverFrame').css('display', 'block');
    $('#btnDriverUpdate').css('display','block');
    $('#btnDriverRegister').css('display','none');
    $('#driverStateGroup').css('display','block');
});

$('#btnDriverUpdate').click(function () {

    let driverJSON = createDriverJSON();
    driverJSON.did=driver.did;
    driverJSON.status=driver.status;
    driverJSON.dto.uid=driver.dto.uid;
    driverJSON.dto.id=driver.dto.id;


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