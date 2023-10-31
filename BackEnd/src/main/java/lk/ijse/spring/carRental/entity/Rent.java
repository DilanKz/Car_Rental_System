package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

/**
 * `@authority Tharindu Dilan`
 * 2:20 PM
 * 2023-10-31 - 10 - 2023
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Rent {
    @Id
    private String RentID;
    private String FullPaymentStatus;
    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "customerID",referencedColumnName = "cusID",nullable = false)
    private Customer customerID;
    @OneToMany(mappedBy = "rent", cascade = CascadeType.ALL)
    private List<RentDetails> rentDetails;
}
