package com.farnest.common.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Repository;

import com.farnest.common.model.Principal;

@Repository
public class EmployeeDaoImpl implements UserDetailsService  {
 
	 @Autowired
	    private SessionFactory sessionFactory;
	 
	    public void addEmployee(Principal principal) {
	        this.sessionFactory.openSession().save(principal);
	    }
	 
	    @SuppressWarnings("unchecked")
	    public List<Principal> getAllEmployees() {
	        return this.sessionFactory.openSession().createQuery(" from Principal ").list();
	    }
	 
	    public void deleteEmployee(Integer employeeId) {
	    	Principal employee = (Principal) sessionFactory.openSession().load(
	    			Principal.class, employeeId);
	        if (null != employee) {
	            this.sessionFactory.getCurrentSession().delete(employee);
	        }
	    }
	 
	    @SuppressWarnings("deprecation")
	    public UserDetails loadUserByUsername(String username)
	    {
	        System.out.println("Getting access details from employee dao !!");
	        List<Principal> list = this.sessionFactory.openSession().createQuery("from Employee where name='"+username+"'").list();
	        UserDetails user =null;
	        if (list.size()>0)
	        {
		        // Ideally it should be fetched from database and populated instance of
		        // #org.springframework.security.core.userdetails.User should be returned from this method
		         // user = new User(username, "password", true, true, true, true, new GrantedAuthority[]{ new GrantedAuthorityImpl("ROLE_USER") });
		        return user;

	        }
	       return null;
	    }
}
