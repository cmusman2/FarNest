package com.farnest.common.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.farnest.common.domain.HotelSearch;

@Controller

public class HomeController {
	//private static final Logger logger = Logger.getLogger(HomeController.class);
    
    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String home(Locale locale, Model model) {
        //logger.debug("Welcome home! The client locale is {}.");
        Date date = new Date();
        DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
         
        String formattedDate = dateFormat.format(date);
          
        model.addAttribute("serverTime", formattedDate );
         
        return "home";
    }
     
    @RequestMapping(value = "/emp/get/{id}", method = RequestMethod.GET)
    public String getEmployee(Locale locale, Model model,@PathVariable("id") int id) {
        //logger.info("Welcome user! Requested Emp ID is: "+id);
        Date date = new Date();
        DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
         
        String formattedDate = dateFormat.format(date);
         
        model.addAttribute("serverTime", formattedDate );
        model.addAttribute("id", id);
        model.addAttribute("name", "Pankaj");
         
        return "employee";
    }
     
    @RequestMapping(value="/login")
    public String login(HttpServletRequest request, Model model){
    	System.out.println("hello login");
        return "login";
    }
     
    @RequestMapping(value="/logout")
    public String logout(){
        return "logout";
    }
     
    @RequestMapping(value="/denied")
    public String denied(){
        return "denied";
    } 
    
    @RequestMapping(value="/searchHtls")
    public String searchHtls(Map<String, Object> map){
    	
    	HotelSearch hotelSearch = new HotelSearch();
    	map.put("searchForm", hotelSearch);
    	
        return "searchHtlsForm";
    }
}
