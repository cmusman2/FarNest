<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
    
<spring:htmlEscape defaultHtmlEscape="true" /> 
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Hotels list</title>
<link type="text/css" rel="stylesheet" href="resources/css/styles.css" media="all"/>


  
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
			<td colspan="6" class="test"><spring:message
					code="hotel.search.results" text="Hotels in" /> ${destination}</td>
		</tr>
		<tr>
		  <td colspan="6" style="background-color:#eee">
		  
<form:form method="POST" action="searchdo" commandName="searchForm">

<table class="searchPane" style="background:#eee">
		<tr>
			<td colspan="2">Search</td>
		</tr>
		<tr>
			<td>Destination</td>
			 <td><input class="ac_input city_input" style="width:30%" type="search" id="CityAjaxH" name="CityAjaxH" value="London" value=""/></td>
			 <input type="hidden" id="hotelId">
			 <input type="hidden" id="CityAjaxH2">
			 <input type="hidden" id="CityLocal">
			 
		</tr>
		<tr>
			<td>Check-in</td>
			<td><input type="from" style="width:30%" name="SDATEH" id="from" readonly="readonly"  class="date-input"/></td>
		</tr>
		<tr>
			<td>Nights</td>
			<td>
			  <select  style="width:30%" id="nights">
			   <option value="1">1</option>
			   <option value="2">2</option>
			   <option value="3">3</option>
			   <option value="4">4</option>
			   <option value="5">5</option>
			   <option value="6">6</option>
			   <option value="7">7</option>
			   <option value="8">8</option>
			   <option value="9">9</option>
			   <option value="10">10</option>
			   <option value="11">11</option>
			   <option value="12">12</option>
			   <option value="13">13</option>
			   <option value="14">14</option>
			   <option value="15">15</option>
			   <option value="16">16</option>
			   <option value="17">17</option>
			   <option value="18">18</option>
			   <option value="19">19</option>
			   <option value="20">20</option>
			   <option value="21">21</option>
			   <option value="22">22</option>
			   <option value="23">23</option>
			   <option value="24">24</option>
			   <option value="25">25</option>
			   <option value="26">26</option>
			   <option value="27">27</option>
			   <option value="28">28</option>
			   
			  </select>
			</td>
		</tr>
		<tr>
			 
			<td colspan="2"><input type="submit" value="Search" align="middle"></td>
		</tr>		
	</table>
	</form:form>
		  
		  </td>
		</tr>
		
		<tr>
			<td colspan="6" class="resultheading">Search results</td>
		</tr>
	 				
		<c:forEach items="${hotels}" var="htl">
			<tr>
				<td colspan="6" class="htlname"><a href="displayHotel/${htl.name}">${htl.name}</a></td>
			</tr> 
			<tr>
				<td colspan="6" valign="top">
					<table cellspacing="0" cellpadding="0">
						<tr>
							<td width="1%" valign="top"  htmlEscape="true" escapeXml="true" >
							
							<c:if test='${not empty "${htl.thumbnailurl}"}'>
									<img src="http://media.expedia.com${htl.thumbnailurl}" alt="" />
								</c:if></td>
                             <td align="left" valign="top" style="padding-left:5px">
                             
                             <c:if test='${not empty "${htl.address1}"}'>                                    
									${htl.address1} 
									  
								</c:if>
								
                             <c:if test='${not empty "${htl.locationdescription}"}'>                                  
									<c:out value="${htl.locationdescription}"/>
									<br/>
								</c:if>
                             
                             <c:if test='${not empty "${htl.city}"}'>                                    
									${htl.city}
									<br/>
								</c:if>

                             <c:if test='${not empty "${htl.postalcode}"}'>                                    
									${htl.postalcode}
									<br/>
								</c:if>

                             <c:if test='${not empty "${htl.countrycode}"}'>                                    
									${htl.countrycode}
									<br/>
								</c:if>
								
								
                             <c:if test='${not empty "${htl.shortdescription}"}'>
                                  <p style="font-size:10pt">
                                    <script>var v= $('<div/>').html('${htl.shortdescription}').text();document.write(v);</script>...
								  </p>	
								</c:if>								
								
                             </td>

							 
							 
							<td align="right"><span  class="price">${htl.ratecurrencycode}&nbsp;${htl.lowrate}</span>
							 <br/>
							 <span class="selectbtn"><a href="#">See&nbsp;details</a></span>
							</td>
						</tr>
						<tr>
							<td colspan="3" align="right">
							<!-- 
							<form action="update/${htl.name}" method="POST">
									<input type="hidden" name="id" id="id" value="${htl.hotelid}" /><input
										type="submit"
										value="<spring:message code="button.details" text="See details" />" />
								</form>
								-->
								</td>
						</tr>
					</table>
				</td>
			</tr>
		    <tr>
			<td colspan="6" style="border-color:#1e90ff;border-width:10pt">&nbsp;</td>
		    </tr>	

		</c:forEach>
<!-- 
		<tr>
			<td colspan="3" class="test" align="right"><input type="button"
				value="Add a new hotel"></td>
			<td colspan="3" class="test"><input type="button"
				value="Just a button"></td>
		</tr>
		-->
	</table>
	
	<script type="text/javascript" src="resources/scripts/development-bundle/jquery-1.6.2.js"></script>  <script type="text/javascript" src="resources/scripts/development-bundle/ui/jquery.ui.core.js"></script>  <script type="text/javascript" src="resources/scripts/development-bundle/ui/jquery.ui.datepicker.js"></script>  <script type="text/javascript" src="resources/scripts/development-bundle/jquery.autocomplete.js"></script>  <script type="text/javascript" src="resources/scripts/utils.js"></script> <script type="text/javascript" src="resources/scripts/js.js"></script> <script type="text/javascript" src="resources/scripts/utilsp.js"></script>
<script type="text/javascript">    $(function() {  var dates = $( "#from" ).datepicker({  defaultDate: "+1w",  showOn: "both",  changeMonth: true,  buttonImageOnly: true,  numberOfMonths: 2,  dateFormat:'dd/mm/y',  onSelect: function( selectedDate ) {  var option = this.id == "from" ? "minDate" : "maxDate",  instance = $( this ).data( "datepicker" ),  date = $.datepicker.parseDate(  instance.settings.dateFormat ||  $.datepicker._defaults.dateFormat,  selectedDate, instance.settings );  dates.not( this ).datepicker( "option", option, date );  }  });  });     function findValue(li) {  if( li == null ) return alert("No match!");     if( !!li.extra ) var sValue = li.extra[0];     else var sValue = li.selectValue;  if (document.getElementById('CityAjaxH2')!=null){  document.getElementById('CityAjaxH2').value = li.extra[1];  }    }    function selectItem(li) {  findValue(li);  }    function formatItem(row) {  /*document.getElementById('destid').value = '';*/  if (document.getElementById('CityAjaxH2')!=null){  document.getElementById('CityAjaxH2').value = '';  }  return row[1] ;  }    function lookupAjax(){  var oSuggest = $("#CityAjaxH")[0].autocompleter;  oSuggest.findValue();  return false;  }    function lookupLocal(){  var oSuggest = $("#CityLocal")[0].autocompleter;  oSuggest.findValue();    return false;  }  $("#CityAjaxH").autocomplete(  "http://lowestroomrates.com/src/autocomplete.php",  {  delay:10,  minChars:3,  matchSubset:1,  matchContains:3,  cacheLength:0,  onItemSelect:selectItem,  onFindValue:findValue,  formatItem:formatItem,  autoFill:false  }  );     </script> 
	
</body>
</html>