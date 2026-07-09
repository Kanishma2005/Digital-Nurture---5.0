package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) {
        LOGGER.debug("START - getCountry()");
        
        Country matchedCountry = null;

        // Load country list from country.xml using Spring context with try-with-resources to prevent resource leaks
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            // Retrieve the countryList bean configured in XML
            @SuppressWarnings("unchecked")
            List<Country> countries = (List<Country>) context.getBean("countryList");
            
            // Iterate through the list and compare codes using equalsIgnoreCase()
            for (Country country : countries) {
                if (country.getCode().equalsIgnoreCase(code)) {
                    matchedCountry = country;
                    break;
                }
            }
        }
        
        LOGGER.debug("END - getCountry()");
        return matchedCountry;
    }
}
