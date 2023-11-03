package lk.ijse.spring.carRental.service.impl;

import lk.ijse.spring.carRental.dto.PaymentDTO;
import lk.ijse.spring.carRental.repo.PaymentRepo;
import lk.ijse.spring.carRental.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 10:17 PM
 * 2023-10-31 - 10 - 2023
 */
@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    PaymentRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String lastID(){
        return repo.getLastID();
    }

    @Override
    public List<PaymentDTO> loadAllPayments(){
        return mapper.map(repo.findAll(),new TypeToken<PaymentDTO>(){}.getType());
    }
}
