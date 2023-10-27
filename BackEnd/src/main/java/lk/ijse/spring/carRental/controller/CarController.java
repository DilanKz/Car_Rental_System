package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.responseDTOs.CarResponseDTO;
import org.springframework.web.bind.annotation.*;

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
    public String addCar(@ModelAttribute CarResponseDTO carResponseDTO){
        System.out.println(carResponseDTO);
        return "got it";
    }
}
