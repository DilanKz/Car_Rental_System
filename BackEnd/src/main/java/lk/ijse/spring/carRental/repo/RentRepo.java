package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * `@authority Tharindu Dilan`
 * 10:04 PM
 * 2023-10-31 - 10 - 2023
 */
public interface RentRepo extends JpaRepository<Rent,String> {
    @Query(value = "SELECT RentID FROM rent ORDER BY RentID DESC LIMIT 1",nativeQuery = true)
    String getLastID();
}
