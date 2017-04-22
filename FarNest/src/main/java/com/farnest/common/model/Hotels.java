package com.farnest.common.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "hotels")
public class Hotels implements Serializable{
  private List<Hotel> hotels;
  
  
  public Hotels()
  {
	  hotels = new ArrayList<Hotel>();
  }


public List<Hotel> getHotels() {
	return hotels;
} 

@XmlElement(name = "hotel")
public void setHotels(List<Hotel> hotels) {
	this.hotels = hotels;
}
  
@Override
public String toString() {
	String hs="Hotels:";
	for(Hotel h:hotels)
	{
		hs=hs+h.toString();
	}
	return hs;
}
}
