package com.farnest.common.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.farnest.common.model.Principal;

public class CustomAuthenticationProvider implements AuthenticationProvider {
	// private Logger logger =
	// Logger.getLogger(CustomAuthenticationProvider.class);

	private UserDetailsService userDetailsService; // what am i supposed to do
													// with this?

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		/*
		 * UsernamePasswordAuthenticationToken auth =
		 * (UsernamePasswordAuthenticationToken) authentication; String username
		 * = String.valueOf(auth.getPrincipal()); String password =
		 * String.valueOf(auth.getCredentials());
		 * 
		 * logger.info("username:" + username); logger.info("password:" +
		 * password);
		 */

		String name = authentication.getName();
		// You can get the password here
		String password = authentication.getCredentials().toString();

		System.out.println("calling authenticate:" + name + ":" + password);

		ArrayList<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

		authorities.add(new GrantedAuthority() {
			public String getAuthority() {
				return "ROLE_USER";
			}
		});

		// Your custom authentication logic here
		
	 
		 List<Principal> user = ServiceDao.getSessionFactory().openSession().createQuery("from Principal where username='"+name+"'").list();
		
		
		if ((user.size()>0) && name.equals(user.get(0).getName()) && password.equals(user.get(0).getPassword())) {

			Authentication auth = new UsernamePasswordAuthenticationToken(name, password, authorities);

			SecurityContextHolder.getContext().setAuthentication(auth);
			return auth;
		} 

		return null;
	}

	/*
	 * public boolean supports(Class aClass) { return true; //To indicate that
	 * this authenticationprovider can handle the auth request. since there's
	 * currently only one way of logging in, always return true }
	 */

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

	public UserDetailsService getUserDetailsService() {
		return userDetailsService;
	}

	public void setUserDetailsService(UserDetailsService userDetailsService) {
		this.userDetailsService = userDetailsService;
	}

}
