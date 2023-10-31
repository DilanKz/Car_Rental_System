package lk.ijse.spring.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * `@authority Tharindu Dilan`
 * 2:21 PM
 * 2023-10-31 - 10 - 2023
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@IdClass(RentDetail_PK.class)
public class RentDetails{

    @Id
    private String rentID;
    @Id
    private String carID;

    private String driverID;

    @OneToOne(cascade = {CascadeType.ALL})
    private Payment payment;

    @ManyToOne
    @JoinColumn(name = "rentID",referencedColumnName = "RentID",insertable = false,updatable = false)
    private Rent rent;

    @ManyToOne
    @JoinColumn(name = "carID",referencedColumnName = "carID",insertable = false,updatable = false)
    private Car car;

    @ManyToOne
    @JoinColumn(name = "driverID",referencedColumnName = "driverID",insertable = false,updatable = false)
    private Driver driver;

}
