package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * `@authority Tharindu Dilan`
 * 4:57 PM
 * 2023-10-20 - 10 - 2023
 */
public interface CustomerRepo extends JpaRepository<Customer,String> {
}
