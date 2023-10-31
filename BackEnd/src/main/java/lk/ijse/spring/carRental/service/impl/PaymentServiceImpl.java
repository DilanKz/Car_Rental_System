package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.repo.AdminRepo;
import lk.ijse.spring.carRental.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * `@authority Tharindu Dilan`
 * 10:17 PM
 * 2023-10-31 - 10 - 2023
 */
@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    AdminRepo adminRepo;
}
