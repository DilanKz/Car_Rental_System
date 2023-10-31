package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.RentDetails;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * `@authority Tharindu Dilan`
 * 10:05 PM
 * 2023-10-31 - 10 - 2023
 */
public interface RentDetailsRepo extends JpaRepository<RentDetails,String> {
}
