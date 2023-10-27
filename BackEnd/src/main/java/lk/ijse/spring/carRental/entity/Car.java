package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

/**
 * `@authority Tharindu Dilan`
 * 2:43 PM
 * 2023-10-27 - 10 - 2023
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Car {
    @Id
    @Column(length = 10)
    private String carId;
    private String name;
    private String regNo;
    private String color;
    private String passengers;
    private String carType;
    private String carFuelType;
    private String carState;
    private String carTransmission;
    private String waiverPay;
    private String monthlyPayment;
    private String dailyPayment;
    private String extraPerKm;
    private String wholeKm;
    private String maintained;
    private String dailyKmLimit;
    private String monthlyKmLimit;
    @Lob
    private byte[] carFront;
    @Lob
    private byte[] carBack;
    @Lob
    private byte[] carSide;
    @Lob
    private byte[] carInside;
}
