package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.repo.AdminRepo;
import lk.ijse.spring.carRental.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * `@authority Tharindu Dilan`
 * 8:12 PM
 * 2023-10-24 - 10 - 2023
 */
@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    AdminRepo adminRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String lastID() {
        return adminRepo.getLastID();
    }
}
