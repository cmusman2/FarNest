<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<title>Update</title>
<link type="text/css" rel="stylesheet" href="resources/styles.css"
	media="all" />
</head>
<body>

<form:form method="POST" action="updatedo" commandName="Hotel">
	<table>
    <tr>  
      <td colspan="2" class="test"><spring:message code="hotel.edit" text="Change hotel details" /></td>   
    </tr>	
		<tr>
			<td>Name</td>
			 <td><form:input path="name"/>
			 <form:hidden path="id"/>
			 </td>
			 
		</tr>
		<tr>
			<td>Address1</td>
			<td><form:input path="address1" /></td>
		</tr>
		<tr>
			<td>Address2</td>
			<td><form:input path="address2" /></td>
		</tr>
		<tr>
			<td>Postal Code</td>
			<td><form:input path="postalCode" /></td>
		</tr>		
		<tr>
			<td>Rate</td>
			<td><form:input path="rate" /></td>
		</tr>		
		<tr>
			<td>ThumbNail</td>
			<td><form:input path="thumbNail" /></td>
		</tr>		
		<tr>
			 
			<td class="test" align="right"><input type="submit" value="Update" align="middle"></td>
			<td class="test"><a href="displayHotel"><spring:message code="link.back" text="Back" /></a></td>
		</tr>		
	</table>
	</form:form>
</body>
</html>