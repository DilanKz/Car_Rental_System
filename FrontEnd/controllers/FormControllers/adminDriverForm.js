let txtDriverName = $('#txtDriverName');
let txtDriverAddress = $('#txtDriverAddress');
let txtDriverContact = $('#txtDriverContact');
let txtDriverLicNo = $('#txtDriverLicNo');
let txtDriverEmail = $('#txtDriverEmail');
let txtDriverUsername = $('#txtDriverUsername');
let txtDriverPassword = $('#txtDriverPassword');

function createDriverJSON() {


    let driverJSON={
        did:driveID,
        name:txtDriverName.val(),
        address:txtDriverAddress.val(),
        licenseNo:txtDriverLicNo.val(),
        contact:txtDriverContact.val(),
        email:txtDriverEmail.val(),
        status:'available',
        dto:{
            uid:userID,
            userName:txtDriverUsername.val(),
            password:txtDriverPassword.val(),
            type:'driver',
            id:driveID,
        }
    }


    return driverJSON;
}

function loadClearDriverData(name,address,licNo,contact,email,username,password) {
    txtDriverName.val(name);
    txtDriverAddress.val(address);
    txtDriverLicNo.val(licNo);
    txtDriverContact.val(contact);
    txtDriverEmail.val(email);
    txtDriverUsername.val(username);
    txtDriverPassword.val(password);
}