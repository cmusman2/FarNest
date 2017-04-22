package com.farnest.common.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

import org.hibernate.Session;
import org.springframework.dao.DataAccessException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

//import org.springframework.security.core.authority.GrantedAuthorityImpl;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.farnest.common.model.Principal;


public class LocalUserDetailService implements UserDetailsService {
  
	@Override
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException, DataAccessException
			{
		 
		Session session = ServiceDao.getSessionFactory().openSession();
		
		List<Principal> q=null;
		try
		{
		    q = session.createQuery("FROM Principal   where  userName = '" + username + "'").list();
		}
		catch(Exception exp)
		{
			System.out.println("Error in LocalUserDetailService:"+exp);
		}
		 
		UserDetails user = null;
	 
		 
		
		if (q.size() > 0) {
			
			 
			
			Principal principal = q.get(0); 
			
			ArrayList<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

			authorities.add(new GrantedAuthority() {
				public String getAuthority() {
					return "ROLE_USER";
				}
			});
			boolean enabled = true;
			boolean accountNotExpired = true;
			boolean credentialNotExpired = true;
			boolean accountNotLocked = true;
			 
			 
			
			/*user = new User(username, principal.getPassword(), enabled, accountNotExpired, credentialNotExpired, accountNotLocked,
					authorities);*/
			 Vector userAuthorities = new Vector();
	//		 userAuthorities.add(new GrantedAuthorityImpl("ROLE_USER"));
	//		 userAuthorities.add(new GrantedAuthorityImpl("ROLE_ADMIN"));
			 user = new User(username, principal.getPassword(), true, true, true, true, authorities);
			
			 
			
			
			
			    // Authenticate the user
			 //UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, principal.getPassword());
			 //SecurityContextHolder.getContext().setAuthentication(authRequest); 
			
			
			
			
			
		} 
		System.out.println("authenticated user:"+user);
		return user;
	}

}
