//This is where all the customer field and data are verified

let name = $('#txtName');
let address = $('#txtAddress');
let tp = $('#txtTp');
let idFront = $('#btnIDFront').files[0];
let idBack = $('#btnIDBack').files[0];
let email = $('#txtEmail');
let code = $('#txtCode');
let regUserName = $('#txtUN');

let pass = $('#txtPass');
let confirmPass = $('#txtConfirmPass');


$('#btnCustomerReg');

function customerFormData() {
    let formData = new FormData();

    formData.append('cid', '12345');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('contact', tp);
    formData.append('regDte', "date");
    formData.append('dto.uid', '98765'); // Nested UserDTO properties
    formData.append('dto.userName', regUserName);
    formData.append('dto.password', pass);
    formData.append('dto.type', 'customer');
    formData.append('dto.id', '12345');
}