package lk.ijse.spring.carRental.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lk.ijse.spring.carRental.dto.CustomerDTO;
import lk.ijse.spring.carRental.dto.UserDTO;
import lk.ijse.spring.carRental.dto.responseDTOs.CustomerResponseDTO;
import lk.ijse.spring.carRental.dto.responseDTOs.UserResponseDTO;
import lk.ijse.spring.carRental.service.CustomerService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;

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
    @PostMapping("/makeAccount")
    public ResponseUtil getAllData(@ModelAttribute CustomerResponseDTO cusReq, @ModelAttribute UserResponseDTO userReq) throws IOException {
        System.out.println(cusReq);
        System.out.println(userReq);

        UserDTO userDTO = new UserDTO(userReq.getUid(), userReq.getUserName(), userReq.getPassword(), userReq.getType(), userReq.getId());

        CustomerDTO dto=new CustomerDTO(
                cusReq.getCid(),
                cusReq.getName(),
                cusReq.getEmail(),
                cusReq.getAddress(),
                cusReq.getContact(),
                LocalDate.parse(cusReq.getRegDte()),
                cusReq.getImageFront().getBytes(),
                cusReq.getImageBack().getBytes(),
                userDTO
        );

        service.saveCustomer(dto);

        return new ResponseUtil("Ok","Customer Added",dto);
    }

    @GetMapping("/")
    public ResponseUtil getCustomerDataByUID(){
        new ResponseUtil();
    }
}
