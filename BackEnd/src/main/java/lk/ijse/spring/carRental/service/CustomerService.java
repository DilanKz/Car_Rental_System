package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.CustomerDTO;

import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 3:02 PM
 * 2023-10-22 - 10 - 2023
 */
public interface CustomerService {
    void saveCustomer(CustomerDTO dto);

    CustomerDTO getCustomer(String id);

    void updateCustomer(CustomerDTO c);

    String lastID();

    List<CustomerDTO> getNewCustomers();

    void updateState(String id);
}
