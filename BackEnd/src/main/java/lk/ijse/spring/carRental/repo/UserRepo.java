package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * `@authority Tharindu Dilan`
 * 4:57 PM
 * 2023-10-20 - 10 - 2023
 */
public interface UserRepo extends JpaRepository<User,String> {
    @Query(value = "SELECT uid FROM User ORDER BY uid DESC LIMIT 1",nativeQuery = true)
    String getLastID();

    @Query(value = "SELECT * FROM User WHERE User.userName=:name",nativeQuery = true)
    User getCredentials(@Param("name") String userName);

}
