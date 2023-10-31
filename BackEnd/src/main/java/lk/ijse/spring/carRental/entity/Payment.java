package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

/**
 * `@authority Tharindu Dilan`
 * 2:23 PM
 * 2023-10-31 - 10 - 2023
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Payment {
    @Id
    private String paymentID;
    private String payment;
    private String paymentExtraMillage;
    @Lob
    private byte[] wavierPayment;

}