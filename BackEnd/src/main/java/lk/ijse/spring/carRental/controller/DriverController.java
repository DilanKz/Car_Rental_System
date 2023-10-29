package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.DriverDTO;
import lk.ijse.spring.carRental.dto.responseDTOs.CustomerResponseDTO;
import lk.ijse.spring.carRental.dto.responseDTOs.UserResponseDTO;
import lk.ijse.spring.carRental.service.DriverService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

/**
 * `@authority Tharindu Dilan`
 * 11:11 PM
 * 2023-10-29 - 10 - 2023
 */

@RestController
@RequestMapping("/Driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService service;

    @GetMapping("/uId")
    public ResponseUtil getLastUId(){
        return new ResponseUtil("Ok","Successfully fetched",service.getLastID());
    }

    @PostMapping("/makeAccount")
    public ResponseUtil getAllData(@RequestBody DriverDTO dto) throws IOException {
        System.out.println(dto);
        service.saveDriver(dto);

        return new ResponseUtil("Ok","Driver added successfully",dto);
    }

    @GetMapping("/all")
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil("Ok","Drivers fetched ",service.getAllDrivers());
    }
}
