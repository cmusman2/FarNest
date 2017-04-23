package com.farnest.common.model;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAnyAttribute;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "hotellist", namespace="")
public class HotelList {
  private String size;
  private String activepropertycount;
  private List<HotelSummary> hotelSummaries;
  
  @XmlElement(name="hotelsummary")
  public List<HotelSummary> getHotelSummaries() {
	return hotelSummaries;
}
  
  
  
public HotelList()
{
	hotelSummaries = new ArrayList();
}
  
  
public void setHotelSummaries(List<HotelSummary> hotelSummaries) {
	this.hotelSummaries = hotelSummaries;
}
@XmlAttribute
  public String getSize() {
	return size;
}
public void setSize(String size) {
	this.size = size;
}

@XmlAttribute
public String getActivepropertycount() {
	return activepropertycount;
}
public void setActivepropertycount(String activepropertycount) {
	this.activepropertycount = activepropertycount;
}

}
