//This is where all the customer field and data are verified and customer json made




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

    return JSON.stringify(customerData);

}