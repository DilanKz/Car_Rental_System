package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * `@authority Tharindu Dilan`
 * 4:33 PM
 * 2023-10-27 - 10 - 2023
 */
public interface CarRepo extends JpaRepository<Car,String> {
    @Query(value = "SELECT carId FROM car ORDER BY carId DESC LIMIT 1",nativeQuery = true)
    String getLastID();
}
