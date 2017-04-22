package com.farnest.common.model;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement(name = "name")
public class Shop {

	String name;
	
	String staffName[];
	public String getName() {
		return name;
	}
	
	@XmlElement
	public void setName(String name) {
		this.name = name;
	}
	public String[] getStaffName() {
		return staffName;
	}
	@XmlElement
	public void setStaffName(String[] staffName) {
		this.staffName = staffName;
	}
	public Shop() {
	} 
	
}