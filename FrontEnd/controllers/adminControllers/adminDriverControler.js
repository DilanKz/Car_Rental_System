let baseURL='http://localhost:8080/CarRental/Driver/';
let userID;
let driveID;


$('#btnAddDriver').click(function () {
    $('#addDriverFrame').css('display','block');
    nextDriverIdGenerator();
    nextUserIdGenerator();
})


$('#btnDriverRegister').click(function () {

    let driverJSON = createDriverJSON();
    console.log(driveID)

    $.ajax({
        url: baseURL+'makeAccount',
        method: 'POST',
        data:JSON.stringify(driverJSON),
        contentType:'application/json',
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
        url: baseURL+'uId',
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