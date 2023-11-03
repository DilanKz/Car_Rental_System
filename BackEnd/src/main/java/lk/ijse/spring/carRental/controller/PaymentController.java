package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.PaymentDTO;
import lk.ijse.spring.carRental.service.PaymentService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority Tharindu Dilan`
 * 7:55 PM
 * 2023-11-03 - 11 - 2023
 */
@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {
    @Autowired
    PaymentService service;

    @GetMapping
    public ResponseUtil getAll(){
        return new ResponseUtil("OK","All Payments",service.loadAllPayments());
    }

    @PutMapping("/update")
    public ResponseUtil updatePayment(@RequestBody PaymentDTO payment){
        service.updatePayment(payment);
        return new ResponseUtil("","",payment);
    }
}
