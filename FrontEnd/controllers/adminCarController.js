let containerView = $('#carContainerView');
function loadAllCars() {

    $.ajax({
        url: 'http://localhost:8080/CarRental/Car/allCars',
        method: 'GET',
        success: function (res) {
            let carsList = res.data;
            for (let i = 0; i < carsList.length; i++) {
                containerView.empty();
                addCarToView(carsList[i])
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}
