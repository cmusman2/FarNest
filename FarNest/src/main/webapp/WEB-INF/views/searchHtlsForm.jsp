<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Search</title>
<link type="text/css" rel="stylesheet" href="resources/css/styles.css"
	media="all" />
	
	<style>
.searchPane{background:url(resources/images/27528_351_z.jpg); background-size: cover;}

	.xtable {
    background:url('resources/images/27528_351_z.jpg');
    background-repeat:no-repeat;
    background-position:center center;
    width:180px; 
    height:200px;
    border:1px solid black;
    width:180px; 
    height:200px;   
    }
	</style>
</head>
<body>

	
<form id="searchForm" action="searchdo" method="POST">
<div>
	<table class="searchPane">
		<tr>
			<td colspan="2">Search</td>
		</tr>
		<tr>
			<td>Destination</td>
			 <td><input class="ac_input city_input" path="SDATEH" placeholder="Enter destination" style="height:30px;width:30%" type="search" id="CityAjaxH" name="CityAjaxH" /></td>
			 <input type="hidden" id="hotelId">
			 <input type="hidden" id="CityAjaxH2">
			 <input type="hidden" id="CityLocal">
			 
		</tr>
		<tr>
			<td>Check-in</td>
			<td><input type="from" placeholder="dd/mm/yy" style="height:30px;width:30%" name="SDATEH" id="from" readonly="readonly"  class="date-input"/></td>
		</tr>
		<tr>
			<td>Nights</td>
			<td>
			  <select  style="height:30px;width:30%" id="nights" name="nights">
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
	</div>
	</form>
	
	<script type="text/javascript" src="resources/scripts/development-bundle/jquery-1.6.2.js"></script>  <script type="text/javascript" src="resources/scripts/development-bundle/ui/jquery.ui.core.js"></script>  <script type="text/javascript" src="resources/scripts/development-bundle/ui/jquery.ui.datepicker.js"></script>  <script type="text/javascript" src="resources/scripts/development-bundle/jquery.autocomplete.js"></script>  <script type="text/javascript" src="resources/scripts/utils.js"></script> <script type="text/javascript" src="resources/scripts/js.js"></script> <script type="text/javascript" src="resources/scripts/utilsp.js"></script>
<script type="text/javascript">    

$(function() {  var dates = $( "#from" ).datepicker({  defaultDate: "+1w",  showOn: "both",  changeMonth: true,  buttonImageOnly: true,  numberOfMonths: 2,  dateFormat:'dd/mm/y',  onSelect: function( selectedDate ) {  var option = this.id == "from" ? "minDate" : "maxDate",  instance = $( this ).data( "datepicker" ),  date = $.datepicker.parseDate(  instance.settings.dateFormat ||  $.datepicker._defaults.dateFormat,  selectedDate, instance.settings );  dates.not( this ).datepicker( "option", option, date );  }  });  });     

function findValue(li) {  if( li == null ) return alert("No match!");     if( !!li.extra ) var sValue = li.extra[0];     else var sValue = li.selectValue;  if (document.getElementById('CityAjaxH2')!=null){  document.getElementById('CityAjaxH2').value = li.extra[1];  }    }    
function selectItem(li) {  findValue(li);  }    
function formatItem(row) {      if (document.getElementById('CityAjaxH2')!=null){  document.getElementById('CityAjaxH2').value = '';  }  return row[1] ;  }    
function lookupAjax(){   var oSuggest = $("#CityAjaxH")[0].autocompleter;  oSuggest.findValue();  return false;  }    
function lookupLocal(){    var oSuggest = $("#CityLocal")[0].autocompleter;  oSuggest.findValue();    return false;   }  
$("#CityAjaxH").autocomplete(  "autoComplete",  {  delay:10,  minChars:3,  matchSubset:1,  matchContains:3,  cacheLength:0,  onItemSelect:selectItem,  onFindValue:findValue,  formatItem:formatItem,  autoFill:false  }  );     

</script> 

</body>
</html>