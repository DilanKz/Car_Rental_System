package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.UserDTO;
import lk.ijse.spring.carRental.entity.User;
import lk.ijse.spring.carRental.repo.UserRepo;
import lk.ijse.spring.carRental.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * `@authority Tharindu Dilan`
 * 2:32 PM
 * 2023-10-22 - 10 - 2023
 */

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public UserDTO getData(String uName){
        User user = userRepo.getCredentials(uName);
        return mapper.map(user, UserDTO.class);
    }


    @Override
    public String getLastID(){
        return userRepo.getLastID();
    }

}
