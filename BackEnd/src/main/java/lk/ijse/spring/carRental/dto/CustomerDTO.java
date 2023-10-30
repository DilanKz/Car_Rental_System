package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Lob;
import java.time.LocalDate;

/**
 * `@authority Tharindu Dilan`
 * 2:56 PM
 * 2023-10-22 - 10 - 2023
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String cid;
    private String name;
    private String email;
    private String address;
    private String contact;
    private String state;
    private String regDte;
    private byte[] imageFront;
    private byte[] imageBack;
    private UserDTO dto;
}
