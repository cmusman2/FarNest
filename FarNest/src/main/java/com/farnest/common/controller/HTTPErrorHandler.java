package com.farnest.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HTTPErrorHandler{

    String path = "../error";

    @RequestMapping(value="/404")
    public String error404(){
       // DO stuff here 
        System.out.println("got it");
        return "error404";
    }
    
    @RequestMapping(value="/500") 
    public String error500(){
       // DO stuff here 
        System.out.println("got it");
        return "error500";
    }    
    
    @RequestMapping(value="error") 
    public String error(){
       // DO stuff here 
        System.out.println("got it");
        return "../error/404/index";
    }      
}
