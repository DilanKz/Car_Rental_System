package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.service.CustomerService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
