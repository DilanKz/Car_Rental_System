package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.CustomerDTO;
import lk.ijse.spring.carRental.dto.responseDTOs.CustomerRespDTO;
import lk.ijse.spring.carRental.service.CustomerService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

/**
 * `@authority Tharindu Dilan`
 * 8:17 PM
 * 2023-10-22 - 10 - 2023
 */
@RestController
@RequestMapping("/Register")
@CrossOrigin
public class UserRegisterController {

    @Autowired
    CustomerService service;

    @PostMapping
    public ResponseUtil makeAccount(CustomerRespDTO dto) throws IOException {

        CustomerDTO customerDTO = new CustomerDTO(
                dto.getCid(),
                dto.getName(),
                dto.getEmail(),
                dto.getAddress(),
                dto.getContact(),
                dto.getRegDte(),
                dto.getImageFront().getBytes(),
                dto.getImageBack().getBytes(),
                dto.getDto()
        );

        service.saveCustomer(customerDTO);
        return new ResponseUtil("Ok","Successfully create account",dto);
    }

    @GetMapping
    public ResponseUtil getLastId(){
        return new ResponseUtil("Ok","Successfully fetched",service.lastID());
    }
}
