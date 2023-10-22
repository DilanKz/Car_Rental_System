package lk.ijse.spring.carRental.service;

import lk.ijse.spring.carRental.dto.UserDTO;

/**
 * `@authority Tharindu Dilan`
 * 2:31 PM
 * 2023-10-22 - 10 - 2023
 */

public interface UserService {
    UserDTO getData(String id);

    String getLastID();
}
