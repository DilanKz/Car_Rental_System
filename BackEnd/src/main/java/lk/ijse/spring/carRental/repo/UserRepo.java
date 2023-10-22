package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * `@authority Tharindu Dilan`
 * 4:57 PM
 * 2023-10-20 - 10 - 2023
 */
public interface UserRepo extends JpaRepository<User,String> {
    @Query(value = "SELECT id FROM User ORDER BY id DESC LIMIT 1",nativeQuery = true)
    String getLastID();

}
