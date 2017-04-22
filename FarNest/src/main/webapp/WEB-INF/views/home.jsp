<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
<title>Home</title>
</head>
<body>
    <h1>Hello world!</h1>
 
    <P>Hello Fredy, the time on the server is ${serverTime} and I am from <%=request.getServerName() %> with test version 1.0.0.1</P>
    <a href="/SpringMVC/displayHotel"> Display hotels</a>
    
    <a href="/SpringMVC/searchHtls"> Search hotels</a>
</body>
</html>