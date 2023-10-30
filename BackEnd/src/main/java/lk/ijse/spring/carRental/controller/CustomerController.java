package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.service.CustomerService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority Tharindu Dilan`
 * 4:59 PM
 * 2023-10-20 - 10 - 2023
 */

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService service;

    @GetMapping("/newAll")
    public ResponseUtil getNewCustomers(){
        return new ResponseUtil("Ok","Fetched",service.getNewCustomers());
    }

    @PostMapping("/approve")
    public ResponseUtil approveCustomer(@Param("id")String id){
        service.updateState(id);
        return new ResponseUtil("Ok","Customer Approved",id);
    }
}
