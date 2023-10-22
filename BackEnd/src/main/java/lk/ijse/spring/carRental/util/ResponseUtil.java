package lk.ijse.spring.carRental.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * `@authority Tharindu Dilan`
 * 3:30 PM
 * 2023-10-22 - 10 - 2023
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseUtil {
    private String state;
    private String message;
    private Object data;
}
