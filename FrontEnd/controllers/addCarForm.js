let carID;

function cusIdGenerator() {
    $.ajax({
        url: 'http://localhost:8080/CarRental/Car/carID',
        method: 'GET',
        success: function (res) {

            if (res.data == null) {

                carID = 'C_reg-0001';
            } else {
                let number = parseInt(res.data.slice(6), 10);
                number++;
                carID = "C_reg-" + number.toString().padStart(4, "0");
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

}