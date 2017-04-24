package com.farnest.common.controller;

import java.util.ArrayList;
import java.util.List;


import org.hibernate.Session;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.farnest.common.dao.ServiceDao;
import com.farnest.common.dao.WSServiceDaos;
import com.farnest.common.domain.HotelSearch;
import com.farnest.common.model.Hotel;
import com.farnest.common.model.HotelSummary;
import com.farnest.common.model.HotelSummaryList;
import com.farnest.common.model.Hotels;

@RestController
@RequestMapping("/")
public class TravelController {
	
	
	
	
	@RequestMapping(value = "/hotels", method = RequestMethod.GET)
	public  Hotels getHotels()
	{
		//logger.debug("hotels request received....");
		
		Hotels htls = new Hotels();
		
		Hotel h = new Hotel();
		h.setName("marriot");
		htls.getHotels().add(h);
		
		h = new Hotel();
		h.setName("holiday Inn");
		htls.getHotels().add(h);

		return htls;
	}
	
	@RequestMapping(value = "/displayHotel", method = RequestMethod.GET)
	public   ModelAndView displayHotel()
	{
		
       Session session = ServiceDao.getSessionFactory().openSession();
		
		@SuppressWarnings("unchecked")
		List<Hotel> htls = (List<Hotel>) session.createQuery("from Hotel").list();
		Hotels hotels = new Hotels();
		hotels.setHotels(htls);

	 
		
		 
		ModelAndView mv = new ModelAndView("htlList");

		mv.addObject("htlList", hotels); 
		 


		return mv;
	}
	
	@RequestMapping(value = "/displayHotel/{name}", method = RequestMethod.GET)
	public  ModelAndView displayHotelDetail(ModelAndView mv, @PathVariable("name") String name)
	{
		
       Session session = ServiceDao.getSessionFactory().openSession();
		
		@SuppressWarnings("unchecked")
		List<Hotel> htls = (List<Hotel>) session.createQuery("from Hotel where name='"+name+"'").list();
		Hotels hotels = new Hotels();
		hotels.setHotels(htls);

	 
		
		 
		
        mv.setViewName("htlDetail");
		mv.addObject("htlList", hotels); 
		 


		return mv;
	}
	
	@RequestMapping(value = "/getHotels", method = RequestMethod.GET)
	public   Hotels displayHotelsDB()
	{
		
		Session session = ServiceDao.getSessionFactory().openSession();
		
		@SuppressWarnings("unchecked")
		List<Hotel> htls = (List<Hotel>) session.createQuery("from Hotel").list();
		Hotels hotels = new Hotels();
		hotels.setHotels(htls);

		return hotels;
	}
	
	@RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
	public   ModelAndView hotelUpdate(ModelAndView mv, @RequestParam("id") String id)
	{		
		Session session = ServiceDao.getSessionFactory().openSession();
		
		@SuppressWarnings("unchecked")
		List<Hotel> htls = (List<Hotel>) session.createQuery("from Hotel where id="+id).list();
		
		Hotel h;
		if (htls.size()>0)
		 h =htls.get(0);
		else
			 h = new Hotel();
		
        mv.setViewName("hotelUpdate");
		mv.addObject("hotel", h); 
		return mv;

	}	 
	
	
	@RequestMapping(value = "/hotel/{id}")
	public   ModelAndView hotelDetails(ModelAndView mv, @RequestParam("id") String id)
	{		
		Session session = ServiceDao.getSessionFactory().openSession();
		
		@SuppressWarnings("unchecked")
		List<Hotel> htls = (List<Hotel>) session.createQuery("from Hotel where id="+id).list();
		
		Hotel h;
		if (htls.size()>0)
		 h =htls.get(0);
		else
			 h = new Hotel();
        mv.setViewName("htlDetail");
		mv.addObject("hotel", h); 
		return mv;

	}	
	
	@RequestMapping(value = "/searchdoorig", method = RequestMethod.POST)
	public   Hotels searchdoorig(@ModelAttribute("searchForm")  HotelSearch hotelSearch, BindingResult bindingResult)
	{		
		Hotels hs = new Hotels();
		
		Hotel h= new Hotel();
		h.setName("Marriott Manchester, Downtown");
		h.setAddress1("In the city center");
		h.setRate("325.55");
		h.setThumbNail("http://images.travelnow.com/hotels/2000000/1900000/1897400/1897390/1897390_4_t.jpg");
		hs.getHotels().add(h);
		
		h= new Hotel();
		h.setName("Crown plaza City Center");
		h.setAddress1("Water front");
		h.setRate("125.80");
		h.setThumbNail("http://images.travelnow.com/hotels/1000000/900000/898700/898665/898665_117_t.jpg");
		hs.getHotels().add(h);		
		
		h= new Hotel();
		h.setName("Crown plaza City Center");
		h.setAddress1("Water front");
		h.setRate("125.80");
		h.setThumbNail("http://images.travelnow.com/hotels/1000000/900000/898700/898665/898665_117_t.jpg");
		hs.getHotels().add(h);		
		
		
		System.out.println(hotelSearch.getCityAjaxH());
        /*mv.setViewName("htlList");
		mv.addObject("htlList", hs); 
		mv.addObject("destination", hotelSearch.getCityAjaxH());*/
		return hs;

	}
		
	@RequestMapping(value = "/searchdo", method = RequestMethod.POST)
	public   ModelAndView searchdo(ModelAndView mv,@ModelAttribute("searchForm")  HotelSearch hotelSearch, BindingResult bindingResult)
	{		
		HotelSummaryList hs = new HotelSummaryList();
		List<HotelSummary> hotels=null;
		try
		{
		   hotels = WSServiceDaos.Hotels(hotelSearch.getCityAjaxH(), hotelSearch.getSDATEH(), 1);
		}catch(Exception exp)
		{
			
		}
		
		
		System.out.println(hotelSearch.getCityAjaxH());
        
		mv.setViewName("htlDisplay3");		
		mv.addObject("hotels",hotels);
		return mv;

	}
	
	
	@RequestMapping(value = "/autoComplete")
	public   List<String> autoComplete(@RequestParam("q")  String q)
	{		
          List<String> locations = new ArrayList();
          
          locations.add("Londonderry, Northern Ireland, United Kingdom|");
          locations.add("London, England, United Kingdom|");
          locations.add("London, Kentucky, United States of America|");
          locations.add("London, Ohio, United States of America|");
          locations.add("Manchester, Kentucky, United States of America|");
          locations.add("Birmingham, Kentucky, United States of America|");
          List<String> selected = new ArrayList();
          for(String s:locations)
          {
	          if(s.toLowerCase().contains(q.toLowerCase())){selected.add(s);}
          }
          
          
          //locations.add("Londonderrey| \n");
          //locations.add("London, Canada| \n");
          
          
          return selected;
	}
}
