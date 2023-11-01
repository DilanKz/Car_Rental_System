package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.repo.DriverRepo;
import lk.ijse.spring.carRental.repo.RentRepo;
import lk.ijse.spring.carRental.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 10:27 PM
 * 2023-10-31 - 10 - 2023
 */
@Service
@Transactional
public class RentServiceImpl implements RentService {
    @Autowired
    RentRepo rentRepo;
    @Autowired
    DriverRepo driverRepo;

    @Override
    public String lastID(){
        return rentRepo.getLastID();
    }

    @Override
    public List<String> getAvailableDrivers(){
        return driverRepo.getAllDID();
    }
}
