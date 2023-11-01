package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.CustomerDTO;
import lk.ijse.spring.carRental.dto.UserDTO;
import lk.ijse.spring.carRental.entity.Customer;
import lk.ijse.spring.carRental.entity.User;
import lk.ijse.spring.carRental.repo.CustomerRepo;
import lk.ijse.spring.carRental.repo.UserRepo;
import lk.ijse.spring.carRental.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

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
    UserRepo userRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto) {

        if (customerRepo.existsById(dto.getCid())) {
            throw new RuntimeException(dto.getCid() + " Customer already exist");
        }


        Customer customer = mapper.map(dto, Customer.class);
        customer.setUser(mapper.map(dto.getDto(), User.class));

        System.out.println(customer.getRegDte());
        System.out.println(customer.getState());
        customerRepo.save(customer);
    }
    @Override
    public CustomerDTO getCustomer(String id){

        Customer customer = customerRepo.getCustomerData(id);

        CustomerDTO map = mapper.map(customer, CustomerDTO.class);
        map.setDto(mapper.map(customer.getUser(), UserDTO.class));

        return map;
    }

    @Override
    public void updateCustomer(CustomerDTO c) {
        if (!customerRepo.existsById(c.getCid())) {
            throw new RuntimeException(c.getCid() + " Customer is not available, check again.!");
        }

        Customer map = mapper.map(c, Customer.class);
        customerRepo.save(map);
    }

    @Override
    public String lastID() {
        return customerRepo.getLastID();
    }

    @Override
    public List<CustomerDTO> getNewCustomers() {
        List<Customer> customers = customerRepo.getNewCustomer();
        List<CustomerDTO> dtoList = new ArrayList<>();

        for (Customer customer : customers) {
            CustomerDTO map = mapper.map(customer, CustomerDTO.class);
            map.setDto(mapper.map(customer.getUser(), UserDTO.class));
            dtoList.add(map);
        }

        System.out.println(dtoList);
        return dtoList;
    }

    @Override
    public void updateState(String id){
        System.out.println(id);
        customerRepo.approveCustomer(id);
    }
}
