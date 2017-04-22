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
<link type="text/css" rel="stylesheet" href="resources/styles.css"
	media="all" />
</head>
<body>
	<table>
		<tr>
			<td colspan="6" class="test"><spring:message
					code="hotel.search.results" text="Hotels in" /> ${destination}</td>
		</tr>
		<c:forEach items="${htlList.getHotels()}" var="htl">
			<tr>
				<td colspan="6" class="htlname"><a href="hotel/${htl.id}?id=${htl.id}">${htl.name}</a></td>
			</tr>
			<tr>
				<td colspan="6" valign="top">
					<table cellspacing="0" cellpadding="0">
						<tr>
							<td width="30%" valign="top"><c:if test='${not empty "${htl.getThumbNail()}"}'>
									<img src="${htl.getThumbNail()}" alt="img" width="100%"/>
								</c:if></td>
                             <td align="left" valign="top" style="padding-left:5px">${htl.address1}<br/>${htl.address2}</td>

							 
							 
							<td align="right" class="price">${htl.rate}</td>
						</tr>
						<tr>
							<td colspan="3" align="right"><form action="hotel/${htl.id}" method="POST">
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
			<td colspan="3" class="test" align="right"><input type="button"
				value="Add a new hotel"></td>
			<td colspan="3" class="test"><input type="button"
				value="Just a button"></td>
		</tr>
	</table>
</body>
</html>