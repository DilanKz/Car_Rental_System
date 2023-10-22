package lk.ijse.spring.carRental.dto.responseDTOs;

import lk.ijse.spring.carRental.dto.UserDTO;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

/**
 * `@authority Tharindu Dilan`
 * 3:30 PM
 * 2023-10-22 - 10 - 2023
 */
public class CustomerRespDTO {
    private String cid;
    private String name;
    private String email;
    private String address;
    private String contact;
    private LocalDate regDte;
    private String idNo;
    private UserDTO dto;
}
