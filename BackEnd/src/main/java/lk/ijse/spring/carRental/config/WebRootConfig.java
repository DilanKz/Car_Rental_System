package lk.ijse.spring.carRental.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
/**
 * `@authority Tharindu Dilan`
 * 10:16 AM
 * 2023-10-20 - 10 - 2023
 */
@Configuration
@Import({JPAConfig.class})
@ComponentScan(basePackages = "lk.ijse.spring.carRental.service")
public class WebRootConfig {
    //this Config class is assigned for pojo's which is processing
    //DAOs and Business of the application

   public WebRootConfig(){
       System.out.println("WebRootConfig : Instantiated");
   }

   @Bean
   public ModelMapper modelMapper(){
       return new ModelMapper();
   }

}
