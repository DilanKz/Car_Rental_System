package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.CarDTO;
import lk.ijse.spring.carRental.dto.responseDTOs.CarResponseDTO;
import lk.ijse.spring.carRental.service.CarService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

/**
 * `@authority Tharindu Dilan`
 * 3:45 PM
 * 2023-10-27 - 10 - 2023
 */
@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarController {
    @Autowired
    CarService carService;

    @PostMapping("/save")
    public ResponseUtil addCar(@ModelAttribute CarResponseDTO resp) throws IOException {
        System.out.println(resp);
        CarDTO carDTO = new CarDTO(
                resp.getCarId(),
                resp.getName(),
                resp.getRegNo(),
                resp.getColor(),
                resp.getPassengers(),
                resp.getCarType(),
                resp.getCarFuelType(),
                resp.getCarState(),
                resp.getCarTransmission(),
                resp.getWaiverPay(),
                resp.getMonthlyPayment(),
                resp.getDailyPayment(),
                resp.getExtraPerKm(),
                resp.getWholeKm(),
                resp.getMaintained(),
                resp.getDailyKmLimit(),
                resp.getMonthlyKmLimit(),
                resp.getCarFront().getBytes(),
                resp.getCarBack().getBytes(),
                resp.getCarSide().getBytes(),
                resp.getCarInside().getBytes()
        );
        return new ResponseUtil("ok","Car saved",resp);
    }

    @GetMapping("/carID")
    public ResponseUtil getID() throws IOException {
        return new ResponseUtil("Ok","id fetched",carService.lastCarID());
    }
}
