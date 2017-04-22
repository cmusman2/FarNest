package com.farnest.common.interceptor;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.DigestAuthenticationFilter;

public class CustomDigestAuthenticationFilter extends DigestAuthenticationFilter {

	 
	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			         FilterChain chain) throws IOException, ServletException 
	{
		 HttpServletRequest httpRequest = (HttpServletRequest) request;
		String header = httpRequest.getHeader("Authorization");
		System.out.println("called here:"+header);
		String section212response = header.substring(7);
		System.out.println("header:"+section212response);
		
		System.out.println(SecurityContextHolder.getContext().getAuthentication());
		try{
		    super.doFilter(request, response, chain);
		}catch(Exception e)
		{
			System.out.println("Error:"+e.getMessage());
		}
		
		System.out.println(SecurityContextHolder.getContext().getAuthentication());
		
	}

}
