package lk.ijse.spring.carRental.service;

import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 10:26 PM
 * 2023-10-31 - 10 - 2023
 */
public interface RentService {
    String lastID();

    List<String> getAvailableDrivers();
}
