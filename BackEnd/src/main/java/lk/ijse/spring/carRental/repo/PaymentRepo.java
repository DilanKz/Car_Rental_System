package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * `@authority Tharindu Dilan`
 * 10:02 PM
 * 2023-10-31 - 10 - 2023
 */
public interface PaymentRepo extends JpaRepository<Payment,String> {
    @Query(value = "SELECT paymentID FROM payment ORDER BY paymentID DESC LIMIT 1",nativeQuery = true)
    String getLastID();
}
