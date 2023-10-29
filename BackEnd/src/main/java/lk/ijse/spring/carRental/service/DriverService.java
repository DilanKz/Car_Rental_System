package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.DriverDTO;

import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 10:57 PM
 * 2023-10-29 - 10 - 2023
 */

public interface DriverService {
    void saveDriver(DriverDTO dto);

    List<DriverDTO> getAllDrivers();

    DriverDTO getDriverData(String id);

    String getLastID();

    DriverDTO getDriverByUID(String id);
}
