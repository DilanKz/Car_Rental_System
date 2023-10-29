package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * `@authority Tharindu Dilan`
 * 10:48 PM
 * 2023-10-29 - 10 - 2023
 */
public interface DriverRepo extends JpaRepository<Driver,String> {
    @Query(value = "SELECT dID FROM driver ORDER BY dID DESC LIMIT 1",nativeQuery = true)
    String getLastID();

    @Query(value = "SELECT * FROM driver WHERE dID=:id",nativeQuery = true)
    Driver getDriverData(@Param("id") String id);
}
