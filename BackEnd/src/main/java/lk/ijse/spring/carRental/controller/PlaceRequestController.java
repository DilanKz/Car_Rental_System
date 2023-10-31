package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.dto.RentDTO;
import lk.ijse.spring.carRental.service.PaymentService;
import lk.ijse.spring.carRental.service.RentService;
import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * `@authority Tharindu Dilan`
 * 9:14 PM
 * 2023-10-31 - 10 - 2023
 */
@RestController
@RequestMapping("/Request")
@CrossOrigin
public class PlaceRequestController {

    @Autowired
    PaymentService paymentService;

    @Autowired
    RentService rentService;

    @PostMapping
    public ResponseUtil placeRequest(@RequestBody RentDTO dto){
        System.out.println(dto);
        return new ResponseUtil("","",dto);
    }
    @PostMapping("/paySlip")
    public ResponseUtil getImages(@RequestPart MultipartFile slip){
        return  new ResponseUtil("OK","Added Image",slip.getName());
    }

    @GetMapping("/payID")
    public ResponseUtil lastPayID(){
        return new ResponseUtil("OK","Fetched PaymentID",paymentService.lastID());
    }
    @GetMapping("/rentID")
    public ResponseUtil lastRentID(){
        return new ResponseUtil("OK","Fetched PaymentID",rentService.lastID());
    }
}
