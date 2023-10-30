package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority Tharindu Dilan`
 * 10:59 PM
 * 2023-10-29 - 10 - 2023
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriverDTO {
    String dID;
    String name;
    String address;
    String licenseNo;
    String contact;
    String email;
    String status;
    UserDTO dto;
}
