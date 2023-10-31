let selectedCarList=[]

function addCarToTheCart(index,list) {
    let listElement = list[index];
    selectedCarList.push(listElement);

    let image = byteArrayToImage(listElement.carFront);


    let cartItem=`<div class=" col-11 my-3 rounded-4 box-shadow" style="height: 120px">
             <div class="p-2 row">
                 <div class="ms-3 p-0 rounded-4 overflow-hidden" style="height: 100px;width: 100px">
                     <img src="${image}" alt="" style="height: 100px;width: 100px">
         
                 <div class="col-6 ms-4" style="height: 100px">
                     <div class="row pt-3">
                         <div class="col-6">
                             <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Waiver :</span> ${listElement.waiverPay}/=</p>
                             <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Daily  :</span> ${listElement.dailyPayment}/=</p>
         
                         <div class="col-6">
                             <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Monthly :</span> ${listElement.monthlyPayment}/=</p>
                             <p style="font-family: sans-serif" class="fw-medium"><span class="fs-5 fw-bold">Extra  :</span> ${listElement.extraPerKm}/=</p>
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
         
                 <div class="col-1 ms-2 d-flex justify-content-center align-items-center" style="height: 100px">
                     <button type="button" class="btnItemClose btn-close p-2 box-shadow-2 bg-light"></button>
                 </div>
             </div>
         </div>`

}