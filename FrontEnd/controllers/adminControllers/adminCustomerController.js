let customerURL = 'http://localhost:8080/CarRental/customer/'

function approveCustomer(id) {
    $.ajax({
        url: customerURL + 'approve?id='+id,
        method: 'post',
        success: function (res) {

        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function getNewCustomers() {
    $.ajax({
        url: customerURL + 'newAll',
        method: 'GET',
        success: function (res) {
            let customer = res.data;
            console.log(customer);
            $('#tblNewCustomers').empty()
            for (let i = 0; i < customer.length; i++) {
                loadNewCustomers(customer[i])
            }

        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function loadNewCustomers(customer) {

    let tr = `<tr front="${byteArrayToImage(customer.imageFront)}" back="${byteArrayToImage(customer.imageBack)}" id="${customer.cid}">
                 <td>${customer.cid}</td>
                 <td>${customer.name}</td>
                 <td>${customer.address}</td>
                 <td>${customer.contact}</td>
             </tr>;`

    $('#tblNewCustomers').append(tr);
}
let cid;
$('#tblNewCustomers').on('click', 'tr', function() {
    let frontImage = $(this).attr('front');
    let backImage = $(this).attr('back');
    cid = $(this).attr('id');

    console.log(frontImage,backImage)
    $('#approveCustomer').css('display','block');

    $('#frontID').attr('src',frontImage);
    $('#backID').attr('src',backImage);
});

$('#submitUser').click(function () {
    approveCustomer(cid);
});
