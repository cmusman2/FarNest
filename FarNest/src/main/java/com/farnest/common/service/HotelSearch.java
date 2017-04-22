package com.farnest.common.service;

import java.util.List;

import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;

import com.farnest.common.model.Hotel;

public class HotelSearch {  
  
	private HttpUriRequest request;
	
	
	public List<Hotel> getHotels()
	{
		request = new HttpPost("");
		
		return null;
	}
  
}
