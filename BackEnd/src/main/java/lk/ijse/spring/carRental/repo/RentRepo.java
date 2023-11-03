package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * `@authority Tharindu Dilan`
 * 10:04 PM
 * 2023-10-31 - 10 - 2023
 */
public interface RentRepo extends JpaRepository<Rent,String> {
    @Query(value = "SELECT RentID FROM rent ORDER BY RentID DESC LIMIT 1",nativeQuery = true)
    String getLastID();
    @Modifying
    @Query(value = "UPDATE Rent SET state ='approved' WHERE RentID=:id")
    void updateStatus(@Param("id") String id);
    @Modifying
    @Query(value = "UPDATE Rent SET state ='finished' WHERE RentID=:id")
    void finishStatus(@Param("id") String id);
}
