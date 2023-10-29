package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.DriverDTO;
import lk.ijse.spring.carRental.dto.UserDTO;
import lk.ijse.spring.carRental.entity.Driver;
import lk.ijse.spring.carRental.entity.User;
import lk.ijse.spring.carRental.repo.DriverRepo;
import lk.ijse.spring.carRental.repo.UserRepo;
import lk.ijse.spring.carRental.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 10:58 PM
 * 2023-10-29 - 10 - 2023
 */

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper mapper;

    @Autowired
    UserRepo userRepo;

    @Override
    public void saveDriver(DriverDTO dto) {
        Driver driver = mapper.map(dto, Driver.class);
        driver.setUser(mapper.map(dto.getDto(), User.class));

        repo.save(driver);
    }

    @Override
    public List<DriverDTO> getAllDrivers(){
        return mapper.map(repo.findAll(), new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public DriverDTO getDriverData(String id){
        Driver driver = repo.getDriverData(id);

        DriverDTO driverDTO = mapper.map(driver, DriverDTO.class);
        driverDTO.setDto(mapper.map(driver.getUser(), UserDTO.class));

        return driverDTO;
    }

    @Override
    public String getLastID(){
        return userRepo.getLastID();
    }

    @Override
    public DriverDTO getDriverByUID(String id){
        Driver driver = repo.getDriverData(id);

        DriverDTO driverDTO = mapper.map(driver, DriverDTO.class);
        driverDTO.setDto(mapper.map(driver.getUser(), UserDTO.class));

        return driverDTO;
    }
}
