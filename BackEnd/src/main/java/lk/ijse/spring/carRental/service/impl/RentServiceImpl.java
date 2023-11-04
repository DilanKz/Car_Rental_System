package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.PaymentDTO;
import lk.ijse.spring.carRental.dto.RentDTO;
import lk.ijse.spring.carRental.dto.RentDetailsDTO;
import lk.ijse.spring.carRental.entity.Car;
import lk.ijse.spring.carRental.entity.Rent;
import lk.ijse.spring.carRental.entity.RentDetails;
import lk.ijse.spring.carRental.repo.CarRepo;
import lk.ijse.spring.carRental.repo.DriverRepo;
import lk.ijse.spring.carRental.repo.RentRepo;
import lk.ijse.spring.carRental.service.RentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
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

    @Autowired
    CarRepo carRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String lastID() {
        return rentRepo.getLastID();
    }

    @Override
    public void save(RentDTO dto) {

        Rent rent = mapper.map(dto, Rent.class);

        for (RentDetailsDTO details:dto.getRentDetails()) {
            RentDetails rentDetails = new RentDetails();
            rentDetails.setRentID(details.getRentID());
            rentDetails.setRentID(details.getCarID());
            rentDetails.setDriverID(details.getDriverID());

            Car car = carRepo.findById(details.getCarID()).get();
            car.setCarState("Unavailable");
            carRepo.save(car);

        }

        System.out.println(rent);
        //Rent rent = new Rent();
        rentRepo.save(rent);
    }
    @Override
    public void update(String dto) {

        Rent rent = rentRepo.findById(dto).get();
        rent.setState("rejected");

        for (RentDetails rentDetail : rent.getRentDetails()) {
            Car car = carRepo.findById(rentDetail.getCarID()).get();
            car.setCarState("Available");
            carRepo.save(car);
        }

        rentRepo.save(rent);
    }

    @Override
    public List<String> getAvailableDrivers() {
        return driverRepo.getAllDID();
    }

    @Override
    public List<RentDTO> getAllRents(){
        List<Rent> all = rentRepo.findAll();
        List<RentDTO> allRentDTOS=new ArrayList<>();

        for (Rent rent : all) {
            RentDTO rentDTO = mapper.map(rent, RentDTO.class);
            rentDTO.setPayment(mapper.map(rent.getPayment(), PaymentDTO.class));
            List<RentDetailsDTO> detailsDTOS=new ArrayList<>();

            for (RentDetails rentDetail : rent.getRentDetails()) {
                RentDetailsDTO rentDetails = new RentDetailsDTO();
                rentDetails.setRentID(rentDetail.getRentID());
                rentDetails.setCarID(rentDetail.getCarID());
                rentDetails.setDriverID(rentDetail.getDriverID());

                detailsDTOS.add(rentDetails);
            }
            rentDTO.setRentDetails(detailsDTOS);
            allRentDTOS.add(rentDTO);
        }

        return allRentDTOS;

    }
    @Override
    public void acceptRent(String id){
        rentRepo.updateStatus(id);
    }
    @Override
    public void finishStatus(String id){
        rentRepo.finishStatus(id);
    }
}
