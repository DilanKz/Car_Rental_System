package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * `@authority Tharindu Dilan`
 * 8:09 PM
 * 2023-10-24 - 10 - 2023
 */
public interface AdminRepo extends JpaRepository<Admin,String> {
    @Query(value = "SELECT adminID FROM admin ORDER BY adminID DESC LIMIT 1",nativeQuery = true)
    String getLastID();
    @Query(value = "SELECT * FROM admin WHERE adminID=:id",nativeQuery = true)
    Admin getAdminData(@Param("id") String id);
}
