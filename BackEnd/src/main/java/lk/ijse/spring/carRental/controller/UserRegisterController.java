package lk.ijse.spring.carRental.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lk.ijse.spring.carRental.dto.responseDTOs.CustomerResponseDTO;
import lk.ijse.spring.carRental.dto.responseDTOs.UserResponseDTO;
import lk.ijse.spring.carRental.service.CustomerService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/cusId")
    public ResponseUtil getLastCusId(){
        return new ResponseUtil("Ok","Successfully fetched",service.lastID());
    }

    @GetMapping("/uId")
    public ResponseUtil getLastUId(){
        return new ResponseUtil("Ok","Successfully fetched",service.lastID());
    }

    @PostMapping("/makeAccount")
    public String getAllData(@ModelAttribute CustomerResponseDTO customerResponseDTO, @ModelAttribute UserResponseDTO UserResponseDTO){
        System.out.println(customerResponseDTO);
        System.out.println(UserResponseDTO);
        return "Got it";
    }
}
