package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.CustomerDTO;
import lk.ijse.spring.carRental.entity.Customer;
import lk.ijse.spring.carRental.repo.CustomerRepo;
import lk.ijse.spring.carRental.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * `@authority Tharindu Dilan`
 * 3:03 PM
 * 2023-10-22 - 10 - 2023
 */
@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto){

        if (!customerRepo.existsById(dto.getCid())){
            throw new RuntimeException(dto.getCid()+" Customer already exist");
        }

        Customer customer = mapper.map(dto, Customer.class);
        customerRepo.save(customer);
    }

    @Override
    public void updateCustomer(CustomerDTO c) {
        if (!customerRepo.existsById(c.getCid())) {
            throw new RuntimeException(c.getCid()+ " Customer is not available, check again.!");
        }

        Customer map = mapper.map(c, Customer.class);
        customerRepo.save(map);
    }

}
