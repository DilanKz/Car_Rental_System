package lk.ijse.spring.carRental.dto.responseDTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority Tharindu Dilan`
 * 10:26 AM
 * 2023-10-25 - 10 - 2023
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserResponseDTO {
    private String uid;
    private String userName;
    private String password;
    private String type;
    private String id;
}
