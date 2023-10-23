package lk.ijse.spring.carRental.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * `@authority Tharindu Dilan`
 * 10:16 AM
 * 2023-10-20 - 10 - 2023
 */
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "lk.ijse.spring.carRental.controller")
public class WebAppConfig {
    public WebAppConfig(){
        System.out.println("WebAppConfig:Web App Instantiated");
    }

    @Bean
    public MultipartResolver multipartResolver() {
        return new StandardServletMultipartResolver();
    }
}
