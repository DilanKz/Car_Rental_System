package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;

/**
 * `@authority Tharindu Dilan`
 * 9:16 PM
 * 2023-10-31 - 10 - 2023
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RentDetailsDTO {
    private String rentID;
    private String carID;
    private String driverID;
}
