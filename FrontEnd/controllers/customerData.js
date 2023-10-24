//This is where all the customer field and data are verified and customer json made


$('#btnCustomerReg');

let cusID;
let userID;

function customerFormData() {

    let name = $('#txtName').val();
    let address = $('#txtAddress').val();
    let tp = $('#txtTp').val();
    let idFront = $('#btnIDFront')[0].files[0];
    let idBack = $('#btnIDBack')[0].files[0];
    let email = $('#txtEmail').val();
    let code = $('#txtCode').val();
    let regUserName = $('#txtUN').val();

    let pass = $('#txtPass').val();
    let confirmPass = $('#txtConfirmPass').val();

    console.log()

    let customerData = {
        cid: cusID,
        name: name,
        email: email,
        address: address,
        contact: tp,
        regDte: '2023-12-12',
        dto: {
            uid: userID,
            userName: regUserName,
            password: pass,
            type: 'customer',
            id: cusID
        }
    };
    console.log(customerData)

    return JSON.stringify(customerData);

}

function cusIdGenerator() {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Register/cusId',
        method: 'GET',
        success: function (res) {

            if (res.data == null) {

                cusID = 'C00-001';
            } else {
                let number = parseInt(res.data.slice(4), 10);
                number++;
                cusID = "C00-" + number.toString().padStart(3, "0");
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

}

function userIdGenerator() {
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