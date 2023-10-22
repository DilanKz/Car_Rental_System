package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.CustomerDTO;

/**
 * `@authority Tharindu Dilan`
 * 3:02 PM
 * 2023-10-22 - 10 - 2023
 */
public interface CustomerService {
    void saveCustomer(CustomerDTO dto);

    void updateCustomer(CustomerDTO c);

    String lastID();
}
