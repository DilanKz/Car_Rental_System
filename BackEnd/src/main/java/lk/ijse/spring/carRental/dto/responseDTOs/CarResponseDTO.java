package lk.ijse.spring.carRental.dto.responseDTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

/**
 * `@authority Tharindu Dilan`
 * 3:47 PM
 * 2023-10-27 - 10 - 2023
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CarResponseDTO {
    private String carId;
    private String name;
    private String regNo;
    private String color;
    private String passengers;
    private String carType;
    private String carFuelType;
    private String carState;
    private String carTransmission;
    private String waverPay;
    private String monthlyPayment;
    private String dailyPayment;
    private String extraPerKm;
    private String wholeKm;
    private String maintained;
    private String dailyKmLimit;
    private String monthlyKmLimit;
    private MultipartFile carFront;
    private MultipartFile carBack;
    private MultipartFile carSide;
    private MultipartFile carInside;
}
