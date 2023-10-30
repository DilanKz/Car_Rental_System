function approveCustomer() {

}

let customerURL = 'http://localhost:8080/CarRental/customer/'

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

    let tr = `<tr front="${byteArrayToImage(customer.imageFront)}" back="${byteArrayToImage(customer.imageBack)}">
                 <td>${customer.cid}</td>
                 <td>${customer.name}</td>
                 <td>${customer.address}</td>
                 <td>${customer.contact}</td>
             </tr>;`

    $('#tblNewCustomers').append(tr);
}

$('#tblNewCustomers').on('click', 'tr', function() {
    let frontImage = $(this).attr('front');
    let backImage = $(this).attr('back');

    console.log(frontImage,backImage)
});
