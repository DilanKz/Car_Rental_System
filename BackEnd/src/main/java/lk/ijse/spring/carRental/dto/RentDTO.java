package lk.ijse.spring.carRental.dto;

import lk.ijse.spring.carRental.entity.Payment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority Tharindu Dilan`
 * 9:16 PM
 * 2023-10-31 - 10 - 2023
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RentDTO {
    private String RentID;
    private String pickupDate;
    private String pickupTime;
    private String estReturnDate;
    private String estReturnTime;
    private String FullPaymentStatus;
    private String state;
    private byte[] waiverPaymentSlip;
    private Payment payment;
}
