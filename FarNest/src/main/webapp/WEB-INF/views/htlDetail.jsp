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
      <td colspan="2" class="test">Selected hotel(s)</td>   
    </tr>
    <c:forEach items="${htlList.getHotels()}" var="htl">
        <tr>             
            <td>Name</td><td>${htl.name}</td>
          </tr>		
        <tr>             
             <td>Address1</td><td>${htl.address1}</td>

         </tr>	
         <tr>             
             <td>Address2</td><td>${htl.address2}</td>
         </tr>	
        <tr>             
             <td>Rate</td><td>${htl.rate}</td>
         </tr>	         
	</c:forEach>
        <tr>             
            <td colspan="2" class="test"><a href="../displayHotel"><spring:message code="link.back" text="Back" /></a></td>

         </tr>		
	</table>
</body>
</html>