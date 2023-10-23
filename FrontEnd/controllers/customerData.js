//This is where all the customer field and data are verified




$('#btnCustomerReg');

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

    console.log(tp,name)

    let customerData={
        cid:'1234',
        name:name,
        email:email,
        address:address,
        contact:tp,
        regDte:'2023-12-12',
        dto:{
            uid:'98765',
            userName:regUserName,
            password:pass,
            type:'customer',
            id:'1234'
        }
    };



    /*let formData = new FormData();

    formData.append('cid', '12345');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('contact', tp);
    formData.append('regDte', "date");
    formData.append('imageFront', idFront);
    formData.append('imageBack', idBack);
    formData.append('dto.uid', '98765'); // Nested UserDTO properties
    formData.append('dto.userName', regUserName);
    formData.append('dto.password', pass);
    formData.append('dto.type', 'customer');
    formData.append('dto.id', '12345');

    console.log(customerDTO)

    let plainObject = {};
    for (let [key, value] of formData.entries()) {
        plainObject[key] = value;
    }
    //return JSON.stringify(customerDTO);
    return formData;*/

    let formData = new FormData();

    for (let key in customerData) {
        if (customerData[key] instanceof Object && !Array.isArray(customerData[key])) {
            for (let subKey in customerData[key]) {
                formData.append(`${key}.${subKey}`, customerData[key][subKey]);
            }
        } else {
            formData.append(key, customerData[key]);
        }
    }

    return formData;

}