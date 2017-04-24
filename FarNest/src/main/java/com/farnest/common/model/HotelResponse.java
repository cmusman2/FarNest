package com.farnest.common.model;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "hotellistresponse", namespace="http://v3.hotel.wsapi.ean.com/")

public class HotelResponse {

	private String customersessionid;
	private String numberofroomsrequested;
	private String moreresultsavailable;
	private HotelList hotelList;
		
	
	public HotelResponse()
	{
		hotelList = new HotelList();
	}
	

	public String getNumberofroomsrequested() {
		return numberofroomsrequested;
	}

	public void setNumberofroomsrequested(String numberofroomsrequested) {
		this.numberofroomsrequested = numberofroomsrequested;
	}

	@XmlElement(name="hotellist")
	public HotelList getHotelList() {
		return hotelList;
	}

	public void setHotelList(HotelList hotelList) {
		this.hotelList = hotelList;
	}

	public String getMoreresultsavailable() {
		return moreresultsavailable;
	}

	public void setMoreresultsavailable(String moreresultsavailable) {
		this.moreresultsavailable = moreresultsavailable;
	}

	@XmlElement
	public String getCustomersessionid() {
		return customersessionid;
	}

	public void setCustomersessionid(String customersessionid) {
		this.customersessionid = customersessionid;
	}
}
