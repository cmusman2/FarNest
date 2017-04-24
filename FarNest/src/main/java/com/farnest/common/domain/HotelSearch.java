package com.farnest.common.domain;

import java.time.LocalDate;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class HotelSearch {
 private String CityAjaxH;
 
 @DateTimeFormat(pattern = "dd/MM/yy") 
 private LocalDate SDATEH;
 private Date EDATEH;
 private int nights;
 
public int getNights() {
	return nights;
}
public void setNights(int nights) {
	this.nights = nights;
}
public String getCityAjaxH() {
	return CityAjaxH;
}
public void setCityAjaxH(String cityAjaxH) {
	CityAjaxH = cityAjaxH;
}
public LocalDate getSDATEH() {
	return SDATEH;
}
public void setSDATEH(LocalDate sDATEH) {
	SDATEH = sDATEH;
}
public Date getEDATEH() {
	return EDATEH;
}
public void setEDATEH(Date eDATEH) {
	EDATEH = eDATEH;
}
 
}
