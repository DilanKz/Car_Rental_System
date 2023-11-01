package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.CarDTO;
import lk.ijse.spring.carRental.dto.responseDTOs.CarResponseDTO;
import lk.ijse.spring.carRental.service.CarService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 3:45 PM
 * 2023-10-27 - 10 - 2023
 */
@RestController
@RequestMapping("/Car")
@CrossOrigin
public class CarController {
    @Autowired
    CarService carService;

    @PostMapping("/save")
    public ResponseUtil addCar(@ModelAttribute CarResponseDTO req) throws IOException {
        System.out.println(req);
        CarDTO carDTO = new CarDTO(
                req.getCarId(),
                req.getName(),
                req.getRegNo(),
                req.getColor(),
                req.getPassengers(),
                req.getCarType(),
                req.getCarFuelType(),
                req.getCarState(),
                req.getCarTransmission(),
                req.getWaiverPay(),
                req.getMonthlyPayment(),
                req.getDailyPayment(),
                req.getExtraPerKm(),
                req.getWholeKm(),
                req.getMaintained(),
                req.getDailyKmLimit(),
                req.getMonthlyKmLimit(),
                req.getCarFront().getBytes(),
                req.getCarBack().getBytes(),
                req.getCarSide().getBytes(),
                req.getCarInside().getBytes()
        );

        carService.saveCar(carDTO);

        return new ResponseUtil("ok","Added",carDTO);
    }

    @GetMapping("/carID")
    public ResponseUtil getID() throws IOException {
        return new ResponseUtil("Ok","id fetched",carService.lastCarID());
    }
    @GetMapping("/allCars")
    public ResponseUtil getAllCars(){

        List<CarDTO> allCars = carService.getAllCars();

        return new ResponseUtil("Ok","id fetched",allCars);
    }

    @PutMapping("/update")
    public ResponseUtil updateCar(@ModelAttribute CarResponseDTO req) throws IOException {
        System.out.println(req);
        CarDTO carDTO = new CarDTO(
                req.getCarId(),
                req.getName(),
                req.getRegNo(),
                req.getColor(),
                req.getPassengers(),
                req.getCarType(),
                req.getCarFuelType(),
                req.getCarState(),
                req.getCarTransmission(),
                req.getWaiverPay(),
                req.getMonthlyPayment(),
                req.getDailyPayment(),
                req.getExtraPerKm(),
                req.getWholeKm(),
                req.getMaintained(),
                req.getDailyKmLimit(),
                req.getMonthlyKmLimit(),
                req.getCarFront().getBytes(),
                req.getCarBack().getBytes(),
                req.getCarSide().getBytes(),
                req.getCarInside().getBytes()
        );

        carService.saveCar(carDTO);
        return new ResponseUtil("ok","Car updated",carDTO);
    }
}
