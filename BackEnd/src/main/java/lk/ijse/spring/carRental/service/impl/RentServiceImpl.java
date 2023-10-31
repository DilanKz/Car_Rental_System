package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.repo.RentRepo;
import lk.ijse.spring.carRental.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * `@authority Tharindu Dilan`
 * 10:27 PM
 * 2023-10-31 - 10 - 2023
 */
public class RentServiceImpl implements RentService {
    @Autowired
    RentRepo rentRepo;

    @Override
    public String lastID(){
        return rentRepo.getLastID();
    }
}
