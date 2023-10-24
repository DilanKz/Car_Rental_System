package lk.ijse.spring.carRental.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lk.ijse.spring.carRental.dto.CustomerDTO;
import lk.ijse.spring.carRental.dto.responseDTOs.CustomerRespDTO;
import lk.ijse.spring.carRental.service.CustomerService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

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

    @Autowired
    ObjectMapper objectMapper;


    @PostMapping
    public ResponseUtil makeAccount(@RequestParam(value = "customerData") String customerDataJson, @RequestPart(value = "images") MultipartFile[] files) throws IOException {
        System.out.println(customerDataJson);



        CustomerRespDTO customerData = objectMapper.readValue(customerDataJson, CustomerRespDTO.class);
        System.out.println(customerData);

        CustomerDTO customerDTO = new CustomerDTO(
                customerData.getCid(),
                customerData.getName(),
                customerData.getEmail(),
                customerData.getAddress(),
                customerData.getContact(),
                customerData.getRegDte(),
                files[0].getBytes(),
                files[1].getBytes(),
                customerData.getDto()
        );


        System.out.println(customerDTO);

        service.saveCustomer(customerDTO);
        return new ResponseUtil("Ok","Successfully create account",customerDTO);
    }




    @GetMapping("/cusId")
    public ResponseUtil getLastCusId(){
        return new ResponseUtil("Ok","Successfully fetched",service.lastID());
    }

    @GetMapping("/uId")
    public ResponseUtil getLastUId(){
        return new ResponseUtil("Ok","Successfully fetched",service.lastID());
    }
}
