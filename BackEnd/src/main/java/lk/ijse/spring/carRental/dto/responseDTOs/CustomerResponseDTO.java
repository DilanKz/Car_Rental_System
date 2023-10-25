package lk.ijse.spring.carRental.dto.responseDTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

/**
 * `@authority Tharindu Dilan`
 * 10:26 AM
 * 2023-10-25 - 10 - 2023
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CustomerResponseDTO {
    private String cid;
    private String name;
    private String email;
    private String address;
    private String contact;
    private LocalDate regDte;
    private MultipartFile imageFront;
    private MultipartFile imageBack;
}
