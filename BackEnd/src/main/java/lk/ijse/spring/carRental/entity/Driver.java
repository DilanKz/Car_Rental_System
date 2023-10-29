package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * `@authority Tharindu Dilan`
 * 10:43 PM
 * 2023-10-29 - 10 - 2023
 */

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Driver {
    @Id
    @Column(length = 10)
    String dID;
    String name;
    String address;
    String licenseNo;
    String status;
    String id;
    @OneToOne(cascade = CascadeType.ALL)
    User user;
}
