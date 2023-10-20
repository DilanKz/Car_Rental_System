package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * `@authority Tharindu Dilan`
 * 5:02 PM
 * 2023-10-20 - 10 - 2023
 */

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Admin {
    @Id
    @Column(length = 10)
    private String adminID;
    private String name;
    private String address;
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;
}
