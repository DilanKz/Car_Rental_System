$('#tblRequest');

function loadAllRequests() {
    $.ajax({
        url: 'http://localhost:8080/requst/',
        method: 'GET',
        success: function (res) {
            containerView.empty();
            carsList = res.data;
            for (let i = 0; i < carsList.length; i++) {
                addCarToView(carsList[i]);
                $('#carLoader').css('display', 'none')
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}