package lk.ijse.spring.carRental.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * `@authority Tharindu Dilan`
 * 3:45 PM
 * 2023-10-27 - 10 - 2023
 */
@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarController {

    @PostMapping
    public String addCar(){

        return "got it";
    }
}
