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

            }

        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}
