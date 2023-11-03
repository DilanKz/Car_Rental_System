package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.PaymentDTO;

import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 10:17 PM
 * 2023-10-31 - 10 - 2023
 */
public interface PaymentService {
    String lastID();

    List<PaymentDTO> loadAllPayments();

    void updatePayment(PaymentDTO dto);
}
