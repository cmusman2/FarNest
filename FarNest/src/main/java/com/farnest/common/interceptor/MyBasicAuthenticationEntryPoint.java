package com.farnest.common.interceptor;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;

public class MyBasicAuthenticationEntryPoint extends BasicAuthenticationEntryPoint {
	 
    @Override
    public void commence
      (HttpServletRequest request, HttpServletResponse response, AuthenticationException authEx) 
      throws IOException, ServletException {
    	
    	String authHeaderText="Basic realm=\"" + getRealmName() + "\"";
    	
  	
        response.addHeader("WWW-Authenticate", authHeaderText);
        
    	//@todo - remove following line
    	//System.out.println(((HttpServletRequest) response).getHeader("WWW-Authenticate").toString());
    	    	
        
        
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        PrintWriter writer = response.getWriter();
        writer.println("HTTP Status 401 - " + authEx.getMessage());
    }
 
    @Override
    public void afterPropertiesSet() throws Exception {
        setRealmName("BasicRealm");
        super.afterPropertiesSet();
    }
}