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
<link type="text/css" rel="stylesheet" href="resources/styles.css" media="all"/>
</head>
<body>
<table>
    <tr>  
      <td colspan="6" class="test"><spring:message code="hotel.list" text="default text" /></td>   
    </tr>
    <c:forEach items="${htlList.getHotels()}" var="htl">
        <tr>             
            <td><a href="displayHotel/${htl.name}">${htl.name}</a></td>
            <td>${htl.address1}</td>
            <td>${htl.address2}</td>
            <td>${htl.rate}</td>
            
            <td><form action="update?${htl.id}" method="POST"><input type="hidden" name="id" id="id" value="${htl.id}" /><input type="submit" value="<spring:message code="button.update" text="Update" />"/></form></td>
            <td><form action="delete?${htl.id}" method="POST"><input type="hidden" name="id" id="id" value="${htl.id}" /><input type="submit" value="<spring:message code="button.delete" text="Delete" />"/></form></td>
         </tr>		
        		
	</c:forEach>
	
    <tr>  
      <td colspan="3" class="test" align="right"><form action="add" method="POST"><input type="submit" value="<spring:message code="button.add" text="Add hotel" />"/></form></td>   
      <td colspan="3" class="test"><form action="../SpringMVC" method="GET"><input type="submit" value="Home"></form></td> 
    </tr>	
	</table>
</body>
</html>