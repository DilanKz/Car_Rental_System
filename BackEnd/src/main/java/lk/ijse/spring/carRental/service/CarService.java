package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.CarDTO;

/**
 * `@authority Tharindu Dilan`
 * 4:48 PM
 * 2023-10-27 - 10 - 2023
 */
public interface CarService {
    void saveCar(CarDTO dto);

    String lastCarID();
}
