package lk.ijse.spring.carRental.repo;

import lk.ijse.spring.carRental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 4:57 PM
 * 2023-10-20 - 10 - 2023
 */
public interface CustomerRepo extends JpaRepository<Customer,String> {
    @Query(value = "SELECT cid FROM customer ORDER BY cid DESC LIMIT 1",nativeQuery = true)
    String getLastID();
    @Query(value = "SELECT * FROM customer WHERE cid=:id",nativeQuery = true)
    Customer getCustomerData(@Param("id") String id);
    @Query(value = "SELECT * FROM customer WHERE state='none'",nativeQuery = true)
    List<Customer> getNewCustomer();
    @Modifying
    @Query(value = "UPDATE customer SET state ='approved' WHERE cid=:id",nativeQuery = true)
    void approveCustomer(@Param("id") String id);
}
