package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.RentDTO;

import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 10:26 PM
 * 2023-10-31 - 10 - 2023
 */
public interface RentService {
    String lastID();

    void save(RentDTO dto);

    List<String> getAvailableDrivers();

    List<RentDTO> getAllRents();

    void acceptRent(String id);

    void finishStatus(String id);
}
