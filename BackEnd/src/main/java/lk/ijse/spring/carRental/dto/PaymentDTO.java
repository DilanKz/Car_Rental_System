package lk.ijse.spring.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * `@authority Tharindu Dilan`
 * 9:16 PM
 * 2023-10-31 - 10 - 2023
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class PaymentDTO {
    private String paymentID;
    private String payment;
    private String paymentExtraMillage;
}
