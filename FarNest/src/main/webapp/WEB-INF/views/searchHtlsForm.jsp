<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Search</title>
<link type="text/css" rel="stylesheet" href="resources/styles.css"
	media="all" />
</head>
<body>

<form:form method="POST" action="searchdo" commandName="searchForm">
	<table>
		<tr>
			<td colspan="2">Search</td>
		</tr>
		<tr>
			<td>Destination</td>
			 <td><form:input path="CityAjaxH"  value="London"/></td>
			 
		</tr>
		<tr>
			<td>Check-in</td>
			<td><input type="text" id="SDATEH" value="10/12/16"></td>
		</tr>
		<tr>
			<td>Check-out</td>
			<td><input type="text" id="EDATEH" value="11/12/16"></td>
		</tr>
		<tr>
			 
			<td colspan="2"><input type="submit" value="Search" align="middle"></td>
		</tr>		
	</table>
	</form:form>
</body>
</html>