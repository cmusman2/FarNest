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

<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.3.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js">
    </script>
  
<script>
function encode(value){
	alert(value);
	
	//return value;
	  return $('<div/>').text(value).html();
	}

	function decode(value){
		alert(value);
		//return value;
	  return $('<div/>').html(value).text();
	}
</script>
</head>
<body>
<table>
		<tr>
			<td colspan="6" class="test">Hotels in London</td>
		</tr>
		<tr>
		  <td colspan="6" style="background-color:#eee">
		  
<form id="searchForm" action="searchdo" method="POST">
	<table align="center" width="400px" style="background-color:#eee">
		<tr>
			<td>Destination</td>
			 <td><input id="CityAjaxH" name="CityAjaxH" style="width: 394px" value="London" type="text" value="London"/></td>
			 
		</tr>
		<tr>
			<td>Check-in</td>
			<td><input type="text" readonly id="SDATEH" value="10/12/16"></td>
		</tr>
		<tr>
			<td>Check-out</td>
			<td><input type="text" readonly id="EDATEH" value="11/12/16"></td>
		</tr>
		<tr>
			 
			<td colspan="2" align="center"><input type="submit" style="cursor:pointer;padding:5px" value="Search again" align="middle"></td>
		</tr>		
	</table>
	</form>
	<table>
		<tr>
			<td colspan="6" class="testresults"><spring:message
					code="hotel.search.results" text="Search results" /> ${destination}</td>
		</tr>
		
		<c:forEach items="${htlList.getHotels()}" var="htl">
			<tr>
				<td colspan="6" class="htlname"><a href="displayHotel/${htl.name}">${htl.name}</a></td>
			</tr>
			<tr>
				<td colspan="6" valign="top">
					<table cellspacing="0" cellpadding="0">
						<tr>
							<td width="1%" valign="top"><c:if test='${not empty "${htl.getThumbNail()}"}'>
									<img src="${htl.getThumbNail()}" alt="img" />
								</c:if></td>
                             <td align="left" valign="top" style="padding-left:5px">${htl.address1}<br/>${htl.address2}</td>

							 
							 
							<td align="right" class="price">${htl.rate}</td>
						</tr>
						<tr>
							<td colspan="3" align="right"><form action="update/${htl.name}" method="POST">
									<input type="hidden" name="id" id="id" value="${htl.id}" /><input
										type="submit"
										value="<spring:message code="button.details" text="See details" />" />
								</form></td>
						</tr>
					</table>
				</td>
			</tr>


		</c:forEach>

		<tr>
			<td colspan="3" class="testresults">&nbsp;</td>
		</tr>
	</table>
</body>
</html>