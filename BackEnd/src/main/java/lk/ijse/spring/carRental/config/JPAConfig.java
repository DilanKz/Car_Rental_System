package lk.ijse.spring.carRental.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

/**
 * `@authority Tharindu Dilan`
 * 10:15 AM
 * 2023-10-20 - 10 - 2023
 */

@Configuration
@EnableJpaRepositories(basePackages = "lk.ijse.spring.carRental.repo")
@EnableTransactionManagement
@PropertySource("classpath:properties.properties")
public class JPAConfig {

    @Autowired
    Environment env;
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource ds, JpaVendorAdapter adapter){
        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
        factoryBean.setDataSource(ds);
        factoryBean.setJpaVendorAdapter(adapter);
        factoryBean.setPackagesToScan("lk.ijse.spring.carRental.entity");

        return factoryBean;
    }
    @Bean
    public DataSource dataSource(){
        DriverManagerDataSource ds= new DriverManagerDataSource();
        ds.setUsername("root");
        ds.setPassword("1234");
        ds.setDriverClassName("com.mysql.jdbc.Driver");
        ds.setUrl("jdbc:mysql://localhost:3306/crs?createDatabaseIfNotExist=true");
        return ds;
    }

    @Bean
    public JpaVendorAdapter adapter(){
        HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        adapter.setDatabase(Database.MYSQL);
        adapter.setGenerateDdl(true);
        adapter.setDatabasePlatform("org.hibernate.dialect.MySQL8Dialect");
        adapter.setShowSql(true);

        return adapter;
    }


    @Bean
    public PlatformTransactionManager transactionManager(EntityManagerFactory factory){
        return new JpaTransactionManager(factory);
    }

}
