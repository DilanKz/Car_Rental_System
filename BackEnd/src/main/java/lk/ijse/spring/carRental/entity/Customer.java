package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * `@authority Tharindu Dilan`
 * 12:08 PM
 * 2023-10-20 - 10 - 2023
 */

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Customer {
    @Id
    @Column(length = 10)
    private String cid;
    private String name;
    private String email;
    private String address;
    private String contact;
    private String state;
    private LocalDate regDte;
    @Lob
    private byte[] imageFront;
    @Lob
    private byte[] imageBack;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;
}
