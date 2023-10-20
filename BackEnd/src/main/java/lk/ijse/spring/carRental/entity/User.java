package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * `@authority Tharindu Dilan`
 * 10:58 AM
 * 2023-10-20 - 10 - 2023
 */

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class User {

    @Id
    @Column(length = 10)
    private String uid;
    private String userName;
    private String password;
    private String type;
    private String id;
}
