package com.farnest.common.model;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "hotels")
public class HotelSummaryList implements Serializable{
  private List<HotelSummary> hotels;
  
  
  public HotelSummaryList()
  {
	  hotels = new ArrayList<HotelSummary>();
  }


public List<HotelSummary> getHotels() {
	return hotels;
} 

@XmlElement(name = "hotel")
public void setHotels(List<HotelSummary> hotels) {
	this.hotels = hotels;
}
  
@Override
public String toString() {
	String hs="Hotels:";
	for(HotelSummary h:hotels)
	{
		hs=hs+h.toString();
	}
	return hs;
}
}
