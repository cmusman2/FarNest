<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>    
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Hotels list</title>
<link type="text/css" rel="stylesheet" href="../resources/styles.css" media="all"/>
</head>
<body>
<table>
    <tr>  
      <td colspan="4" class="test">${hotel.name}</td>   
    </tr>
     
        <tr>             
            <td>${hotel.name}</td>
            <td>${hotel.address1}</td>
            <td>${hotel.address2}</td>
            <td>${hotel.rate}</td>
         </tr>		
        		
	 
        <tr>             
            <td colspan="4"><a href="../displayHotel"><spring:message code="link.back" text="Back" /></a></td>

         </tr>		
	</table>
</body>
</html>