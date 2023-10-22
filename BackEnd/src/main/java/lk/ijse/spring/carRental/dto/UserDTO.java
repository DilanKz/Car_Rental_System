package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


/**
 * `@authority Tharindu Dilan`
 * 2:43 PM
 * 2023-10-22 - 10 - 2023
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserDTO {

    private String uid;
    private String userName;
    private String password;
    private String type;
    private String id;
}
