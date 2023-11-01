package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.service.UserService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * `@authority Tharindu Dilan`
 * 4:58 PM
 * 2023-10-20 - 10 - 2023
 */

@RestController
@RequestMapping("/login")
@CrossOrigin
public class UserLoginController {
    @Autowired
    UserService service;

    @GetMapping("/account")
    public ResponseUtil getUserCredentials(@RequestParam String userName){
        System.out.println(userName);
        return new ResponseUtil("Ok","Successfully fetched",service.getData(userName));
    }


}
