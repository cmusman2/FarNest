
package com.farnest.common.interceptor;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.www.DigestAuthenticationEntryPoint;

public class MyDigestAuthenticationEntryPoint extends DigestAuthenticationEntryPoint {
	 
    @Override
    public void commence
      (HttpServletRequest request, HttpServletResponse response, AuthenticationException authEx) 
      throws IOException, ServletException {
    	
    	System.out.println("MyDigestAuthenticationEntryPoint called");
    	
    	AuthUtils au = new AuthUtils("DigestRealm");    	
    	String authHeaderText=au.getAuthenticateHeader();
    	//String authHeaderText="Digest realm=\"" + getRealmName() + "\"";
    	
    	
  	
        response.addHeader("WWW-Authenticate", authHeaderText);
        
    	//@todo - remove following line
    	//System.out.println(((HttpServletRequest) response).getHeader("WWW-Authenticate").toString());
      //  System.out.println(((HttpServletRequest) request).getHeader("WWW-Authenticate").toString());
    	    	
         
        
    	setKey("acegi");
    	setNonceValiditySeconds(10);
    	setRealmName("DigestRealm");
    	
    	
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        PrintWriter writer = response.getWriter();
        writer.println("HTTP Status 401 - " + authEx.getMessage());
    }
 
    @Override
    public void afterPropertiesSet() throws Exception {
        setKey("acegi");
        setRealmName("DigestRealm");
        setNonceValiditySeconds(10);
        super.afterPropertiesSet();
    }
}