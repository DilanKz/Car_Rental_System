package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.CarDTO;
import lk.ijse.spring.carRental.entity.Car;
import lk.ijse.spring.carRental.repo.CarRepo;
import lk.ijse.spring.carRental.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 4:50 PM
 * 2023-10-27 - 10 - 2023
 */
@Service
@Transactional
public class CarServiceImpl implements CarService {
    @Autowired
    CarRepo carRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCar(CarDTO dto) {
        if (carRepo.existsById(dto.getCarId())) {
            throw new RuntimeException("This car already exist");
        }

        Car map = mapper.map(dto, Car.class);
        carRepo.save(map);
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (!carRepo.existsById(dto.getCarId())) {
            throw new RuntimeException("This car doesn't exist");
        }

        Car map = mapper.map(dto, Car.class);
        carRepo.save(map);
    }

    @Override
    public String lastCarID() {
        return carRepo.getLastID();
    }

    @Override
    public List<CarDTO> getAllCars() {
        List<Car> all = carRepo.findAll();
        return mapper.map(all, new TypeToken<List<CarDTO>>() {
        }.getType());
    }
}
