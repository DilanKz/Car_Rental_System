let selectedCarList=[]

function addCarToTheCart(listElement) {
    selectedCarList.push(listElement);

    console.log(selectedCarList.length);

    let image = byteArrayToImage(listElement.carFront);


    let cartItem=`<div class=" col-11 my-3 rounded-4 box-shadow" style="height: 120px">
                                                    <div class="p-2 row">
                                                        <div class="ms-3 p-0 rounded-4 overflow-hidden" style="height: 100px;width: 100px">
                                                            <img src="${image}" alt="" style="height: 100px;width: 100px">
                                                        </div>

                                                        <div class="col-6 ms-4" style="height: 100px">
                                                            <div class="row pt-3">
                                                                <div class="col-6">
                                                                    <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Waiver :</span> ${listElement.waiverPay}</p>
                                                                    <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Price  :</span> ${listElement.dailyPayment}</p>
                                                                </div>

                                                                <div class="col-6">
                                                                    <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Waiver :</span> ${listElement.monthlyPayment}</p>
                                                                    <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Price  :</span> ${listElement.extraPerKm}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-2 ms-2 d-flex justify-content-center align-items-center" style="height: 100px">
                                                            <div class="form-check">
                                                                <input class="form-check-input text-success checked"
                                                                       type="checkbox"
                                                                       value=""
                                                                       id="flexCheckDefault"/>
                                                                <label class="form-check-label"
                                                                       for="flexCheckDefault">Driver</label>
                                                            </div>
                                                        </div>

                                                        <div class="col-1 ms-2 d-flex justify-content-center align-items-center" style="height: 100px">
                                                            <button carindex="${selectedCarList.length-1}" type="button" class="btnItemClose btn-close p-2 box-shadow-2 bg-light"></button>
                                                        </div>
                                                    </div>
                                                </div>`

    $('#cartList').append(cartItem);

}

$(document).ready(function () {
    $(document).on('click', '.btnItemClose', function () {
        let indexToRemove = $(this).attr('carindex');
        //$(this).parent().parent().css('display','none')
        $(this).parent().parent().parent().remove();
        selectedCarList.splice(indexToRemove,1);
    });
});

function getRentOB() {
    let rent={
            rentID: null,
            pickupDate: "12",
            pickupTime: "23",
            estReturnDate: "4334",
            estReturnTime: "3434",
            fullPaymentStatus: "23423",
            state: "pending",
            waiverPaymentSlip: null,
            payment: null,
            rentDetails: null
    }

    return rent;
}