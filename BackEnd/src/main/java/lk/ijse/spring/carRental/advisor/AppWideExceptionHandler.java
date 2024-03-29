package lk.ijse.spring.carRental.advisor;

import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * `@authority Tharindu Dilan`
 * 3:30 PM
 * 2023-10-22 - 10 - 2023
 */

@RestControllerAdvice
@CrossOrigin
public class AppWideExceptionHandler {

    @ExceptionHandler({RuntimeException.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseUtil handleException(RuntimeException e) {
        return new ResponseUtil("Error",e.getMessage(),"");
    }

}
