package com.farnest.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.farnest.common.model.Hotel;

@Controller
@RequestMapping("/hotels")
public class HotelController {

	
	@RequestMapping(value = "{name}", method = RequestMethod.GET)
	public @ResponseBody Hotel getHotel(@PathVariable String name)
	{ 
		Hotel h = new Hotel();
		h.setName(name);
		return h;
	}
}
