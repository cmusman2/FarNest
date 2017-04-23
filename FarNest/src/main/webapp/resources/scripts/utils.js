var h=document.documentElement.innerHTML;
var s= 'mtype2.js'+'">';
if  (h.indexOf(s)<0)
{var htl= null; if ( typeof hotelId=='undefined')  htl= document.getElementById('hotelId'); if (htl!=null) hotelId = htl.value; 

if ((hotelId!=null) && (typeof hotelId!='string') ) hotelId = hotelId.value; 



if (( typeof hotelId!='undefined') && (hotelId!=null) && (hotelId!=''))
{doDesk();}}

function doDesk(){if ( typeof hotelId!='undefined'){document.location='http://www.lowestroomrates.com/avails/wb'+hotelId;}}


/*if(isMobile()){alert('transfering to mobile');}else {alert('Welcome');}*/
var currencyLocal="";var locationOpts="";function Get_Cookie(check_name){var a_all_cookies=document.cookie.split(';');var a_temp_cookie='';var cookie_name='';var cookie_value='';var b_cookie_found=false;for(i=0;i<a_all_cookies.length;i++)
{a_temp_cookie=a_all_cookies[i].split('=');cookie_name=a_temp_cookie[0].replace(/^\s+|\s+$/g,'');if(cookie_name==check_name)
{b_cookie_found=true;if(a_temp_cookie.length>1)
{cookie_value=unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g,''));}
return cookie_value;break;}
a_temp_cookie=null;cookie_name='';}
if(!b_cookie_found)
{return'';}}
function FormatCookieVal(val){while(val.indexOf("+")>0){val=val.replace("+"," ");}
return val;}
function InitialiseH(id){setPromsTabs('http://www.lowestroomrates.com/src/loadpromotions.php?id=00&rt=1','promos2');var sort="";var S=FormatCookieVal(unescape(Get_Cookie('CityAjaxH')));var I=S.indexOf("&destinationid=");if(I>-1){S='';}
if(document.getElementById('CityAjaxH').value=="")
{document.getElementById('CityAjaxH').value=S;}
var ss=unescape(Get_Cookie('SDATEH'));var today=new Date();var valid=false;if(ss!=""){var res=ss.split("/");var day=res[0];var mon=res[1];var yea='20'+res[2];var oldDate=new Date(yea,mon-1,day);var curDate=new Date();valid=(oldDate>=curDate);}
if(!valid){today.setDate(today.getDate()+1);var tod=""+today.getDate();if((tod.length)==1){tod="0"+tod;}
ss=tod+"/"+(today.getMonth()+1)+"/"+(today.getFullYear()+'').substring(2,4);}
document.getElementById('from').value=ss;var ss=unescape(Get_Cookie('EDATEH'));valid=false;if(ss!=""){var res=ss.split("/");var day=res[0];var mon=res[1];var yea='20'+res[2];var oldDate=new Date(yea,mon-1,day);var curDate=new Date();valid=(oldDate>=curDate);}
if(!valid){today.setDate(today.getDate()+1);var tod=""+today.getDate();if((tod.length)==1){tod="0"+tod;}
ss=tod+"/"+(today.getMonth()+1)+"/"+(today.getFullYear()+'').substring(2,4);}
document.getElementById('to').value=ss;donights(document.getElementById('to'));if(document.getElementById('destid')!=null)
{if(document.getElementById('destid').value=="")
{document.getElementById('destid').value=unescape(Get_Cookie('destid'));}}
var propertyCategory=unescape(Get_Cookie('propertyCategory'));if(propertyCategory!="")
{propertyCategory="&propertyCategory="+propertyCategory;}
var curr="";if((curr=='')||(curr==null)){document.getElementById('currency').selectedIndex=0;}else
{document.getElementById('currency').value=curr;}
var loc=unescape(Get_Cookie('local'));if((loc=='')||(loc==null)){document.getElementById('local').selectedIndex=0;}else
{document.getElementById('local').value=loc;}
if(document.getElementById('supplierType')!=null){document.getElementById('supplierType').value=unescape(Get_Cookie('supplierType'));}
if(document.getElementById('hotelId')!=null){document.getElementById('hotelId').value=unescape(Get_Cookie('hotelId'));}
sort=unescape(Get_Cookie('sort'));var area=unescape(Get_Cookie('area'));var areacity=unescape(Get_Cookie('areacity'));var areacountry=unescape(Get_Cookie('areacountry'));paxa();if(id==1){var city=document.getElementById('CityAjaxH').value;var di="";if(city==""){di=Get_Cookie('destid');document.getElementById('destid').value=di;}
var sd="";if(document.getElementById('from')!=null){sd=document.getElementById('from').value;}
var ed="";if(document.getElementById('to')!=null){ed=document.getElementById('to').value;}
var lo="";if(document.getElementById('local')!=null){lo=document.getElementById('local').value;}
var cu="";if(document.getElementById('currency')!=null){cu=document.getElementById('currency').value;}
var lo="";if(document.getElementById('local')!=null){lo=document.getElementById('local').value;}
var lo="";if(document.getElementById('local')!=null){lo=document.getElementById('local').value;}
if((city!="")||(di!="")||(area!="")){var url='../src/SearchhtlList2.php?CityAjaxH='+city+'&SDATEH='+sd+'&EDATEH='+ed+'&destid='+di+'&local='+lo+'&currency='+cu+'&sort='+sort+propertyCategory+"&area="+area+"&areacity="+areacity+"&areacountry="+areacountry;showRequestResults('HtlOptionsOnLoad',url);}}}
function Set_Cookie(name,value,expires,path,domain,secure){  if ((name=='from')||(name=='to')||(name=='SDATEH')||(name=='EDATEH')){if (value.indexOf('%2F')>0) return false;}  var today=new Date();today.setTime(today.getTime());if(expires)
{expires=expires*1000*60*60*24;}
var expires_date=new Date(today.getTime()+(expires));document.cookie=name+"="+escape(value)+((expires)?";expires="+expires_date.toGMTString():"")+((path)?";path="+path:"")+((domain)?";domain="+domain:"")+((secure)?";secure":"");}
function validate(){if(((document.getElementById('CityAjaxH')!=null)&&(document.getElementById('CityAjaxH').value.length==0))&&((document.getElementById('HotelName')!=null)&&(document.getElementById('HotelName').value.length==0)))
{alert('Location/Hotel must be entered');showhideSearch(1);document.getElementById('CityAjaxH').focus();return 0;}else
if((document.getElementById('from')!=null)&&(document.getElementById('from').value.length==0)){alert('Enter check in date');document.getElementById('from').focus();return 0;}else
if((document.getElementById('to')!=null)&&(document.getElementById('to').value.length==0)){alert('Enter check out date');document.getElementById('to').focus();return 0;}
var rooms;if(document.getElementById('rooms')!=null)
rooms=document.getElementById('rooms');else
rooms=document.getElementById('Select1');if(rooms!=null){var r=rooms.value;var outv=2;if(r==1){outv=isRoomChildEmpty(1);if(outv==0)return 0;}
if(r==2){outv=isRoomChildEmpty(1);if(outv==0)return 0;outv=isRoomChildEmpty(2);if(outv==0)return 0;}
if(r==3){outv=isRoomChildEmpty(1);if(outv==0)return 0;outv=isRoomChildEmpty(2);if(outv==0)return 0;outv=isRoomChildEmpty(3);if(outv==0)return 0;}
if(r==4){outv=isRoomChildEmpty(1);if(outv==0)return 0;outv=isRoomChildEmpty(2);if(outv==0)return 0;outv=isRoomChildEmpty(3);if(outv==0)return 0;outv=isRoomChildEmpty(4);if(outv==0)return 0;}}
if(document.getElementById('CityAjaxH')!=null)
Set_Cookie('CityAjaxH',document.getElementById('CityAjaxH').value,'','/','','');if(document.getElementById('from')!=null)
Set_Cookie('SDATEH',document.getElementById('from').value,'','/','','');if(document.getElementById('to')!=null)
Set_Cookie('EDATEH',document.getElementById('to').value,'','/','','');if(document.getElementById('destid')!=null)
Set_Cookie('destid',document.getElementById('destid').value,'','/','','');if(document.getElementById('local')!=null)
Set_Cookie('local',document.getElementById('local').value,'','/','','');if(document.getElementById('supplierType')!=null){Set_Cookie('supplierType',document.getElementById('supplierType').value,'','/','','');}
if(document.getElementById('hotelId')!=null){Set_Cookie('hotelId',document.getElementById('hotelId').value,'','/','','');}
setRoomsCook();setRoomCook(1);setRoomCook(2);setRoomCook(3);setRoomCook(4);ShowHide('prog',1,380,56);return 1;}
function isRoomChildEmpty(id)
{var r=document.getElementById('R'+id+'C');if(r!=null)
{var v=r.value;if(v==1)
{if(isChildEmpty(id,1))
{alert('Enter the age of child 1 for room '+id);return 0;}}else
if(v==2)
{if(isChildEmpty(id,1))
{alert('Enter the age of child 1 for room '+id);return 0;}
if(isChildEmpty(id,2))
{alert('Enter the age of child 2 for room '+id);return 0;}}else
if(v==3)
{if(isChildEmpty(id,1))
{alert('Enter the age of child 1 for room '+id);return 0;}
if(isChildEmpty(id,2))
{alert('Enter the age of child 2 for room '+id);return 0;}
if(isChildEmpty(id,3))
{alert('Enter the age of child 3 for room '+id);return 0;}}}
return 1;}
function isChildEmpty(id,c)
{var o=document.getElementById('R'+id+'C1'+c);if(o!=null)
{if(o.value!="")
{return false;}}
return true;}
function setRoomsCook(){var rms=document.getElementById('rooms');if(rms==null){rms=document.getElementById('Select1');}
if(rms!=null){Set_Cookie('rooms',rms.value,'','/','','');}}
function setRoomCook(id){var o=document.getElementById('room'+id);if(o!=null){Set_Cookie('room'+id,o.value,'','/','','');}else{Set_Cookie('room'+id,'','','/','','');}
setChildCook(id);}
function setChildCook(id){if(document.getElementById('R'+id+'C')!=null){Set_Cookie('R'+id+'C',document.getElementById('R'+id+'C').value,'','/','','');}else{Set_Cookie('R'+id+'C','','','/','','');}
setChildAgeCook(id,1);setChildAgeCook(id,2);setChildAgeCook(id,3);}
function setChildAgeCook(id,c){var o=document.getElementById('R'+id+'C1'+c);if(o!=null){Set_Cookie('R'+id+'C1'+c,o.value,'','/','','');}else{Set_Cookie('R'+id+'C1'+c,'','','/','','');}}
function setDest(d,d2){Set_Cookie('CityAjaxH',d,'','/','','');Set_Cookie('destid',d2,'','/','','');}
function requestResults(path)
{var url='../../../../src/SearchhtlList224.php?CityAjaxH='+document.getElementById('CityAjaxH').value+'&SDATEH='+document.getElementById('from').value+'&EDATEH='+document.getElementById('to').value+'&local='+document.getElementById('local').value+'&currency='+document.getElementById('currency').value+'&destid='+document.getElementById('destid').value+'&path='+path;return showRequestResults('HtlOptions',url);}
function showRequestResults(id,url)
{var sortHeading=document.getElementById("sort-head");setRoomsCook();setRoomCook(1);setRoomCook(2);setRoomCook(3);setRoomCook(4);var v=GetQueryFieldValue('CityAjaxH2',url);if(isDigit(v)){var path=GetQueryFieldValue('path',url);window.location=path+'src/SearchhtlDetail.php?hotelId='+v+'&m=1&supplierType=E&currency=<currency>&local=&roominfo=&rooms=&rate=&cu=';return false;}
var BF=false;if(id=='HtlOptionsBF'){BF=true;id='HtlOptions';}
if(BF==false){var B=document.getElementById('BF');if(B!=null){B.checked=false;}
if(document.getElementById("resultCount")!=null)
document.getElementById("resultCount").innerHTML="Searching...";}
if((id=='HtlOptions')||(id=='HtlOptionsOnLoad'))
{if(id=='HtlOptions')
{var destid=GetQueryFieldValue('destid',url);if(destid=='<destid>')destid='';var result=1;if(destid==''){result=validate();}else{Set_Cookie('destid',GetQueryFieldValue('destid',url),'','/','','');}
if(result==0){return false;}}
id='HtlOptions';var rooms;if(document.getElementById('rooms')!=null)
rooms=document.getElementById('rooms').value;else
rooms=document.getElementById('Select1').value;if(rooms!=null)
{url=url+getPaxData();}}else
if(id=='avail')
{Set_Cookie('local',document.getElementById('local').value,'','/','','');Set_Cookie('SDATEH',document.getElementById('from').value,'','/','','');Set_Cookie('EDATEH',document.getElementById('to').value,'','/','','');}
if(id.length==0)
{document.getElementById(id).innerHTML="";document.getElementById(id).style.border="0px";return;}
ShowHide('prog',1,480,370);var progimg=document.getElementById("progimg");if(progimg!=null){progimg.style.display="block";}
if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{var str=xmlhttp.responseText;var I=-1;var locs='';var S='';I=str.indexOf("<CUR>");if(I>-1){if(sortHeading!=null){sortHeading.style.display="block";}
I=I+5;J=str.indexOf("</CUR>");S=str.substring(I,J);try
{if(document.getElementById('currency')!=null){var currencies=document.getElementById('currency');if(S=='')
{currencies.options[0].selected=true;}
else
document.getElementById('currency').value=S;if(document.getElementById("pr")!=null){document.getElementById("pr").innerHTML='(around '+S+')';}}}catch(err){}
str=str.replace('<CUR>'+S+'</CUR>','');}else
{if(sortHeading!=null){sortHeading.style.display="none";}}
if((id=='HtlOptions')||(id=='HtlOptionsOnLoad'))
{if(document.getElementById("resultCount")!=null){document.getElementById("resultCount").innerHTML="";}
I=str.indexOf("<MAP>");if(I>-1){I=I+5;J=str.indexOf("</MAP>");S=str.substring(I,J);try
{if(document.getElementById("mapdata")!=null){document.getElementById("mapdata").value="["+S+"]";}}catch(err){}
str=str.replace('<MAP>'+S+'</MAP>','');}
I=str.indexOf("<NRS>");if(I>=0)
{I=I+5;J=str.indexOf("</NRS>");S=str.substring(I,J);str=str.replace('<NRS>'+S+'</NRS>','');if(BF){document.getElementById("resultCount").innerHTML="results filtered";}else
if(document.getElementById("resultCount")!=null){var num=-1;try{num=parseInt(S);}catch(err){}
if(num==1)
document.getElementById("resultCount").innerHTML="1 hotel found";else
if(num>1)
document.getElementById("resultCount").innerHTML=num+" hotels found, some hotels may not be available on your travel dates.";else
if(num==0)
document.getElementById("resultCount").innerHTML="no hotel. Change the search criteria and try again.";}}
I=str.indexOf("<CIT>");if(I>=0){I=I+5;J=str.indexOf("</CIT>");S=str.substring(I,J);str=str.replace('<CIT>'+S+'</CIT>','');if(document.getElementById("city")!=null){document.getElementById("city").value=S;}}
I=str.indexOf("<COU>");if(I>=0){I=I+5;J=str.indexOf("</COU>");S=str.substring(I,J);str=str.replace('<COU>'+S+'</COU>','');if(document.getElementById("country")!=null){document.getElementById("country").value=S;}}
I=str.indexOf("<htlNearLocations>");S='';locs='';if(I>0)
{I=I+18;S=str.substring(I,str.length);locs=str.substring(I,(str.length-19));str=str.replace(S,'');}}
if((str!=null)&&(str!=""))
{document.getElementById(id).innerHTML=str;}
if((id=='HtlOptions')||(id=='HtlOptionsOnLoad'))
{var ll=document.getElementById("locationsL");if(ll!=null){ll.innerHTML=locs;}}
ShowHide('prog',0,280,6);ShowHide(id,1,280,6);if(progimg!=null){progimg.style.display="none";}}}
xmlhttp.open("GET",url,true);xmlhttp.send();if((id=='HtlOptions')||(id=='HtlOptionsOnLoad'))
{var sh=document.getElementById('searchHead');if(sh!=null)
{sh.innerHTML=document.getElementById('CityAjaxH').value;}
var sh2=document.getElementById('searchHead2');if(sh2!=null){sh2.innerHTML=document.getElementById('CityAjaxH').value;}}
var nextpage=GetQueryFieldValue('nextpage',url);if(nextpage!=''){window.location=nextpage;}}
function showRequestResultsOffs(id,url,fv){if(document.getElementById('CityAjaxH')!=null){if(fv.indexOf("&destinationId=")>-1){document.getElementById('CityAjaxH').value=fv;}else
{document.getElementById('CityAjaxH').value=fv;}}
if(document.getElementById('destid')!=null){document.getElementById('destid').value="";}
url=url+'&sort=PROMO';showRequestResultsPax(id,url);}
function requestResultsForPax(id,p){Set_Cookie('autoSearch','','','/','','');var url='src/SearchhtlList225.php?CityAjaxH='+document.getElementById('CityAjaxH').value+'&CityAjaxH2='+document.getElementById('CityAjaxH2').value+'&SDATEH='+document.getElementById('from').value+'&EDATEH='+document.getElementById('to').value+'&currency=&nextpage='+id+"&path="+p;var v=GetQueryFieldValue('CityAjaxH2',url);if(isDigit(v)){var path=GetQueryFieldValue('path',url);if((path!="")&&(typeof path!='undefined')){path=path;}else path="";window.location='src/SearchhtlDetail.php?hotelId='+v+'&m=1&supplierType=E&currency=<currency>&local=&roominfo=&rooms=&rate=&cu=';return false;}
if((p!="")&&(typeof p!='undefined'))
{p=p.replace('path=','');url=p+url;}else
if(typeof p=='undefined'){p='../';url=p+url;}
url=url+getPaxData();submitForm(id,url);document.body.style.cursor='progress';}
function showRequestResultsPax(id,url){var v=GetQueryFieldValue('CityAjaxH2',url);var path=GetQueryFieldValue('path',url);if(isDigit(v)){window.location=path+'src/SearchhtlDetail.php?hotelId='+v+'&m=1&supplierType=E&currency=<currency>&local=&roominfo=&rooms=&rate=&cu=';return false;}
var osv="";if(id=='HtlOptions'){if(document.getElementById('destid')!=null){var i=document.getElementById('destid').selectedIndex;var os=document.getElementById('destid').options;if(os>-1){osv=os[i].text;}}
url=url+'&osv='+osv;var destid=GetQueryFieldValue('destid',url);destid=trim(destid);var result=1;if(destid=='<destid>')
{destid=='';Set_Cookie('destid','','','/','','');}
if(destid==''){result=validate();}else{Set_Cookie('destid',GetQueryFieldValue('destid',url),'','/','','');Set_Cookie('CityAjaxH',GetQueryFieldValue('CityAjaxH',url),'','/','','');}
if(result==0){return false;}}
ShowHide('prog',1,480,370);var nextpage=GetQueryFieldValue('nextpage',url);var propertyCategory=GetQueryFieldValue('propertyCategory',url);Set_Cookie('propertyCategory',propertyCategory,'','/','','');var amen="";if(GetQueryFieldValue('am1',url)!=""){amen="&am1=1";}else
if(GetQueryFieldValue('am2',url)!=""){amen="&am2=2";}else
if(GetQueryFieldValue('am3',url)!=""){amen="&am3=3";}else
if(GetQueryFieldValue('am4',url)!=""){amen="&am4=4";}else
if(GetQueryFieldValue('am6',url)!=""){amen="&am6=6";}else
if(GetQueryFieldValue('am7',url)!=""){amen="&am7=7";}else
if(GetQueryFieldValue('am8',url)!=""){amen="&am8=8";}else
if(GetQueryFieldValue('am9',url)!=""){amen="&am9=9";};var frm=document.getElementById('Search');if(frm!=null)
{var elem=frm.elements;var q='';if(elem!=null)
{for(var i=0;i<elem.length;i++)
{if((elem[i].type=="checkbox")&&(elem[i].checked))
{if(q=='')
{q=elem[i].name+"="+elem[i].value;}else
{q=q+"&"+elem[i].name+"="+elem[i].value;}}else
if(elem[i].type!="checkbox")
{if(q=='')
{q=elem[i].name+"="+elem[i].value;}
else
{q=q+"&"+elem[i].name+"="+elem[i].value;}}}}}
if(nextpage!="")
q=nextpage+'?'+q;else
q='dynamic/SearchResultsHs22.html?'+q;q=q+'&currency='+document.getElementById('currency').value+amen;q=q+'&local='+document.getElementById('local').value+'&propertyCategory='+propertyCategory;q=q+"&destid="+destid+"&CityAjaxH="+GetQueryFieldValue('CityAjaxH',url);window.location=q;ShowHide('prog',0,280,6);}
var z=10;function ShowHide(id,h,l,t){dd=document.getElementById(id);if(dd!=null){d=dd.style;if(h==1){d.display="block";}else
{d.display="none";}
d.zIndex=2;if(id=='prog'){$(window).resize();}else{d.top=t;d.left=l;}}}
function openDlg(url,t)
{window.showModalDialog(url,"Pax info","dialogWidth:420px;dialogHeight:200px");}
function openDlg2(url,t)
{var specs='location=0,menubar=0,resizable=1,scrollbars=1,status=0,titlebar=1,toolbar=0,width=618,height=669';var replace='';window.open(url,t,specs,replace);}
function submitForm(id,url)
{if(validate()==1)
{if((document.getElementById('from')!=null)&&(document.getElementById('to')!=null))
{url=url+'&SDATEH='+document.getElementById('from').value;url=url+'&EDATEH='+document.getElementById('to').value;}
if(document.getElementById('progimg')!=null)
document.getElementById('progimg').style.display='block';if(document.getElementById('srchbtn')!=null)
document.getElementById('srchbtn').innerHTML='Searching...';window.location.href=url;}}
function submitRequestForm(submitButtonId,id,url)
{if(document.getElementById(submitButtonId)!=null){document.getElementById(submitButtonId).innerHTML="Processing...";document.getElementById(submitButtonId).disabled=true;}
window.location="../src/BookIt.php?url="+url;}
function setCursorByID(id,cursorStyle){var elem;if(document.getElementById&&(elem=document.getElementById(id))){if(elem.style)elem.style.cursor=cursorStyle;}}
function GetQueryFieldValue(name,url){var strQueryString="";var hasQueryString=url.indexOf('?');if(hasQueryString!=-1){strQueryString=url.substring(hasQueryString+1,url.length);var Variables=strQueryString.split("&");var found=0;for(i=0;i<Variables.length;i++){var field=Variables[i].split("=");if(field[0]==name){found=1;break;}}
if(found==1){return field[1];}else
{return'';}}}
function submitFilForm(id,d){var q='../src/Genbrandhtls2.php';if(document.getElementById("resultCount")!=null){document.getElementById("resultCount").innerHTML="results are being filtered...";}
q=q+'?filter=1';q=q+'&CityAjaxH='+document.getElementById("CityAjaxH").value;q=q+'&SDATEH='+document.getElementById("from").value;q=q+'&EDATEH='+document.getElementById("to").value;q=q+'&local='+document.getElementById("local").value;q=q+'&currency='+document.getElementById("currency").value;if(document.getElementById("destid")!=null)
q=q+'&destid='+document.getElementById("destid").value;if(document.getElementById("countrycode")!=null)
if(document.getElementById("latitude")!=null)q=q+'&latitude='+document.getElementById("latitude").value;
if(document.getElementById("longitude")!=null)q=q+'&longitude='+document.getElementById("longitude").value;
q=q+'&countrycode='+document.getElementById("countrycode").value;if(document.getElementById("hotelname")!=null)
q=q+'&hotelname='+document.getElementById("hotelname").value;if((document.getElementById("minRate")!=null)&&(id=="1"))
q=q+'&minRate='+document.getElementById("minRate").value;if((document.getElementById("maxRate")!=null)&&(id=="1"))
q=q+'&maxRate='+document.getElementById("maxRate").value;if(document.getElementById("proptype")!=null)
q=q+'&propertyCategory='+document.getElementById("proptype").value;if((document.getElementById("address")!=null)&&(document.getElementById("address").vlaue!="")&&(id=="2")){if(document.getElementById("country")!=null){q=q+'&address='+document.getElementById("address").value;q=q+'&country='+document.getElementById("country").value;if(document.getElementById("city")!=null)
q=q+'&streetcity='+document.getElementById("city").value;q=q+'&sort=PROXIMITY';}}
if((document.getElementById("propertyName")!=null)&&(document.getElementById("propertyName").value!="")&&(id=="0")){q=q+'&propertyName='+document.getElementById("propertyName").value;}
if((document.getElementById("postalCode")!=null)&&(document.getElementById("postalCode").value!="")&&(id=="3")){q=q+'&postalCode='+document.getElementById("postalCode").value;q=q+'&sort=PROXIMITY';}
if((document.getElementById("searchRadius")!=null)&&(document.getElementById("postalCode").value!="")&&(id=="4"))
{q=q+'&searchRadius='+document.getElementById("searchRadius").value;q=q+'&sort=PROXIMITY';}
if(document.getElementById('filter_form')!=null)
{var elem=document.getElementById('filter_form').elements;for(var i=0;i<elem.length;i++)
{if((elem[i].type=="select")||(elem[i].type=="select-one")){q=q+"&"+elem[i].name+"="+elem[i].value;}else
if((elem[i].type=="checkbox")&&(elem[i].checked)){q=q+"&"+elem[i].name+"="+elem[i].value;}else
if((elem[i].type=="radio")&&(elem[i].checked)){q=q+"&"+elem[i].name+"="+elem[i].value;}}}
q=q+getPaxData();getData2('results',q);}
function setRooms(R){var R1=document.getElementById("R1");var R2=document.getElementById("R2");var R3=document.getElementById("R3");var R4=document.getElementById("R4");var R1A=document.getElementById("room1");var R2A=document.getElementById("room2");var R3A=document.getElementById("room3");var R4A=document.getElementById("room4");var R1C=document.getElementById("R1C");var R2C=document.getElementById("R2C");var R3C=document.getElementById("R3C");var R4C=document.getElementById("R4C");var grooms=document.getElementById("grooms");if(grooms!=null)
{if(document.getElementById("rooms")!=null)
var r=document.getElementById("rooms").value;else
if(document.getElementById("Select1")!=null)
var r=document.getElementById("Select1").value;var rs="";if(r==1){rs="1&nbsp;room,";}else
if(r>1){rs=r+"&nbsp;rooms,";}
if(document.getElementById("grooms2")!=null)
document.getElementById("grooms2").innerHTML=rs;grooms.innerHTML=rs;}
if((R==1)&&(R1!=null)){R1.style.display="block";if(R2!=null){R2.style.display="none";if(R2A!=null)R2A.value=1;if(R2C!=null)R2C.value=0;}
if(R3!=null){R3.style.display="none";if(R3A!=null)R3A.value=1;if(R3C!=null)R3C.value=0;}
if(R4!=null){R4.style.display="none";if(R4A!=null)R4A.value=1;if(R4C!=null)R4C.value=0;}}else
if((R==2)&&(R1!=null)){R1.style.display="block";if(R2!=null){R2.style.display="block";}
if(R3!=null){R3.style.display="none";if(R3A!=null)R3A.value=1;if(R3C!=null)R3C.value=0;}
if(R4!=null){R4.style.display="none";if(R4A!=null)R4A.value=1;if(R4C!=null)R4C.value=0;}}else
if((R==3)&&(R1!=null)){R1.style.display="block";if(R2!=null){R2.style.display="block";}
if(R3!=null){R3.style.display="block";}
if(R4!=null){R4.style.display="none";if(R4A!=null)R4A.value=1;if(R4C!=null)R4C.value=0;}}else
if((R==4)&&(R1!=null)){R1.style.display="block";if(R2!=null){R2.style.display="block";}
if(R3!=null){R3.style.display="block";}
if(R4!=null){R4.style.display="block";}}
setAdults();setChilds()}
function setAges(age,id){var CA11=document.getElementById(id+"11");var CA12=document.getElementById(id+"12");var CA13=document.getElementById(id+"13");var CAGE=document.getElementById("cages");if(age==0){if(CAGE!=null){CAGE.style.display="none";}
if(CA11!=null){CA11.style.display="none";CA11.value='';}
if(CA12!=null){CA12.style.display="none";CA12.value='';}
if(CA13!=null){CA13.style.display="none";CA13.value='';}}else
if(age==1){if(CAGE!=null){CAGE.style.display="block";}
if(CA11!=null){CA11.style.display="block";}
if(CA12!=null){CA12.style.display="none";CA12.value='';}
if(CA13!=null){CA13.style.display="none";CA13.value='';}}else
if(age==2){if(CAGE!=null){CAGE.style.display="block";}
if(CA11!=null){CA11.style.display="block";}
if(CA12!=null){CA12.style.display="block";}
if(CA13!=null){CA13.style.display="none";CA13.value='';}}else
if(age==3){if(CAGE!=null){CAGE.style.display="block";}
if(CA11!=null){CA11.style.display="block";}
if(CA12!=null){CA12.style.display="block";}
if(CA13!=null){CA13.style.display="block";}}
setChilds();}
function setAdults(){var adults=document.getElementById("gadults");var r1='';var r2='';var r3='';var r4='';if(document.getElementById("room1")!=null)
{r1=document.getElementById("room1").value;}
if(document.getElementById("room2")!=null)
{r2=document.getElementById("room2").value;}
if(document.getElementById("room3")!=null)
{r3=document.getElementById("room3").value;}
if(document.getElementById("room4")!=null)
{r4=document.getElementById("room4").value;}
var ta=0;if(document.getElementById("rooms")!=null)
{var rooms=document.getElementById("rooms").value;}
else
if(document.getElementById("Select1")!=null)
{var rooms=document.getElementById("Select1").value;}
if(rooms==1){ta=parseInt(r1);}else
if(rooms==2){ta=parseInt(r1)+parseInt(r2);}else
if(rooms==3){ta=parseInt(r1)+parseInt(r2)+parseInt(r3);}else
if(rooms==4){ta=parseInt(r1)+parseInt(r2)+parseInt(r3)+parseInt(r4);}
if(adults!=null){var ad="";if(ta==1){ad="1&nbsp;adult";}else
if(ta>1){ad=ta+"&nbsp;adults";}
if(document.getElementById("gadults2")!=null)
document.getElementById("gadults2").innerHTML=ad;adults.innerHTML=ad;}}
function setChilds(){var childs=document.getElementById("childs");var r1='';var r2='';var r3='';var r4='';if(document.getElementById("R1C")!=null)
{r1=document.getElementById("R1C").value;}
if(document.getElementById("R2C")!=null)
{r2=document.getElementById("R2C").value;}
if(document.getElementById("R3C")!=null)
{r3=document.getElementById("R3C").value;}
if(document.getElementById("R4C")!=null)
{r4=document.getElementById("R4C").value;}
var ta=0;if(document.getElementById("rooms")!=null)
{var rooms=document.getElementById("rooms").value;}
else
if(document.getElementById("Select1")!=null)
{var rooms=document.getElementById("Select1").value;}
if(rooms==1){ta=parseInt(r1);}else
if(rooms==2){ta=parseInt(r1)+parseInt(r2);}else
if(rooms==3){ta=parseInt(r1)+parseInt(r2)+parseInt(r3);}else
if(rooms==4){ta=parseInt(r1)+parseInt(r2)+parseInt(r3)+parseInt(r4);}
if(childs!=null)
{var cn="";if(ta==1){cn=",1&nbsp;child";}else
if(ta>1){cn=",&nbsp;"+ta+"&nbsp;children";}
childs.innerHTML=cn;if(document.getElementById("childs2")!=null){document.getElementById("childs2").innerHTML=cn;}}}
$(window).resize(function(){$('#prog').css({position:'absolute',left:($(window).width()-$('#prog').outerWidth())/2,top:($(window).height()-$('#prog').outerHeight())/2});});function doFilter(id){var s=id;if(id=='PRICE'){if(document.getElementById('PRICE_REVERSE').value=='PRICE_REVERSE'){id='PRICE_REVERSE';document.getElementById('PRICE').innerHTML='Price(low to high)';document.getElementById('PRICE_REVERSE').value='';}else
{document.getElementById('PRICE_REVERSE').value='PRICE_REVERSE';document.getElementById('PRICE').innerHTML='Price(high to low)';}}
showRequestResults('HtlOptions','../src/SearchhtlList2.php?CityAjaxH='+document.getElementById('CityAjaxH').value+'&SDATEH='+document.getElementById('from').value+'&EDATEH='+document.getElementById('to').value+'&currency='+document.getElementById('currency').value+'&local='+document.getElementById('local').value+'&destid='+document.getElementById('destid').value+'&sort='+id);}
function checkPolicy(id,h){if(document.getElementById(id)!=null){d=document.getElementById(id).style;var im=document.getElementById("im"+id);if(d.display=="block")
{d.display="none";if(im!=null)im.src="../images/sslr.bmp";}else{d.display="block";if(im!=null)im.src="../images/ssd6.bmp";}}
return false;}
function getUrl(id){var destid=document.getElementById('destid').value;var url='src/htlMaps.php?CityAjaxH='+document.getElementById('CityAjaxH').value+'&SDATEH='+document.getElementById('from').value+'&EDATEH='+document.getElementById('to').value+'&local='+document.getElementById('local').value+'&currency='+document.getElementById('currency').value+'&destid='+destid+'&hotelId=';url=url+getPaxData();return url;}
function getUrlList(id){var destid=document.getElementById('destid').value;var url='http://www.lowestroomrates.com/src/htlMaps.php?CityAjaxH='+document.getElementById('CityAjaxH').value+'&destid='+document.getElementById('destid').value+'&SDATEH='+document.getElementById('from').value+'&EDATEH='+document.getElementById('to').value+'&local='+document.getElementById('local').value+'&currency='+document.getElementById('currency').value+'&destid='+destid+'&hotelId=&';url=url+getPaxData();return url;}
function getUrlList2(id){var destid='';if(document.getElementById('destid')!=null)
destid=document.getElementById('destid').value;var url='../src/htlMapData.php?CityAjaxH='+document.getElementById('CityAjaxH').value+'&SDATEH='+document.getElementById('from').value+'&EDATEH='+document.getElementById('to').value+'&local='+document.getElementById('local').value+'&currency='+document.getElementById('currency').value+'&destid='+destid+'&hotelId=&';url=url+getPaxData();return url;}
function getUrlOptions(url){var destId=document.getElementById('destid').value;url=url+getPaxData();return url;}
function getUrlBB(id){var destId=document.getElementById('destid').value;var url='../src/htlMaps.php?propertyCategory=5&CityAjaxH='+document.getElementById('CityAjaxH').value+'&SDATEH='+document.getElementById('from').value+'&EDATEH='+document.getElementById('to').value+'&local='+document.getElementById('local').value+'&currency='+document.getElementById('currency').value+'&destId='+destId+'&hotelId=';var M=document.getElementById(id);M.href=url;}
function GetVals(url){if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{currencyLocal=xmlhttp.responseText;return currencyLocal;}}
xmlhttp.open("GET",url,true);xmlhttp.send();}
function submitProms(url){var city=GetQueryFieldValue('CityAjaxH',url);var local=GetQueryFieldValue('local',url);var SDATEH=GetQueryFieldValue('SDATEH',url);var EDATEH=GetQueryFieldValue('EDATEH',url);var currency=GetQueryFieldValue('currency',url);var supplierType=GetQueryFieldValue('supplierType',url);var hotelId=GetQueryFieldValue('hotelId',url);Set_Cookie('CityAjaxH',city,'','/','','');Set_Cookie('SDATEH',SDATEH,'','/','','');Set_Cookie('EDATEH',EDATEH,'','/','','');Set_Cookie('local',local,'','/','','');Set_Cookie('supplierType',supplierType,'','/','','');Set_Cookie('hotelId',hotelId,'','/','','');window.location=url;}
function setProms(url){var mm;if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{mm=xmlhttp.responseText;if((mm!="")&&(mm!=null)){beaches=(eval("["+mm+"]"));}}}
xmlhttp.open("GET",url,true);xmlhttp.send();}
function setPromsTabs(url,t){url=url+'&t='+document.URL;var prog=document.getElementById("procimg");var tday=document.getElementById("todayrates");if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{if(prog!=null){prog.style.display='none';}
if(tday!=null){tday.style.display='none';}
if(document.getElementById(t)!=null)
{document.getElementById(t).innerHTML=xmlhttp.responseText;}}}
xmlhttp.open("GET",url,true);xmlhttp.send();if(isMobile()){doM();}}
function setPromsTabs2(url,cc,c,id){url=url+"?city="+cc+"&currency="+c+"&id="+id;var prog=document.getElementById("procimg");var tday=document.getElementById("todayrates");if(prog!=null){prog.style.display='block';}
if(tday!=null){tday.style.display='block';}
var s="";if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{if(prog!=null){prog.style.display='none';}
if(tday!=null){tday.style.display='none';}
{s=xmlhttp.responseText;var cs=cc.split("/");for(i=0;i<cs.length;i++)
{var s1=cs[i];var s2=s1.split(":");var d=document.getElementById(s2[1]);if(d!=null){d.innerHTML=getXmlFieldValue(s,s2[1])}}}}}
xmlhttp.open("GET",url,true);xmlhttp.send();}
function initp(){InitialiseH(0);}
function initp3(id){initp();}
function initp33(id){initp();}
function initp4(id,url){setPromsTabs(url+'src/loadpromotions.php?id='+id+'&rt=1','promos2');}
function initp2(c){var prog=document.getElementById("procimg");var tday=document.getElementById("todayrates");if(prog!=null){prog.style.display='block';}
if(tday!=null){tday.style.display='block';}
InitialiseH(0);setPromsTabs('../src/updatepromotions_citiesCU.php?city='+c,'promos2');}
function openMap(url)
{window.showModalDialog(url,"Hotel map","dialogWidth:920px;dialogHeight:620px");}
function showRequestResultsOffers(id,url)
{if(id.length==0)
{return;}
ShowHide('prog',1,430,330);ShowHide(id,0,280,6);var str='';if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{str=xmlhttp.responseText;document.getElementById(id).innerHTML=str;ShowHide('prog',0,280,6);ShowHide(id,1,280,6);}}
xmlhttp.open("GET",url,true);xmlhttp.send();}
function getGuestinRooms(id){var g="";var ad=0;var c=0;var cc=0;ad=document.getElementById("room"+id+"").value;g=ad;c=document.getElementById("R"+id+"C").value;if(c==1){cc=document.getElementById("R"+id+"C11").value;g=g+","+cc;}else
if(c==2){cc=document.getElementById("R"+id+"C11").value;g=g+","+cc;cc=document.getElementById("R"+id+"C12").value;g=g+","+cc;}else
if(c==3){cc=document.getElementById("R"+id+"C11").value;g=g+","+cc;cc=document.getElementById("R"+id+"C12").value;g=g+","+cc;cc=document.getElementById("R"+id+"C13").value;g=g+","+cc;}
return g;}
function showRequestResultsRates(id,url){SetCookies(id);showRequestResults(id,url);}
function ReplaceFieldValue(name,value,url){var strQueryString="";var strResult="";var found=false;var hasQueryString=url.indexOf('?');if(hasQueryString!=-1){strQueryString=url.substring(hasQueryString+1,url.length);var Variables=strQueryString.split("&");var found=0;for(i=0;i<Variables.length;i++){var field=Variables[i].split("=");if(field[0]==name){if(strResult==""){strResult=field[0]+"="+value;}
else
{strResult=strResult+"&"+field[0]+"="+value;}
found=true;}else
{if(strResult=="")
{strResult=field[0]+"="+field[1];}
else
{strResult=strResult+"&"+field[0]+"="+field[1];}}}}
if(!found){strResult=strResult+"&"+name+"="+value;}
return strResult;}
function showRequestResultsAlts(id,url){var sortHeading=document.getElementById("sort-head");if(id=='HtlOptions'){var S=GetQueryFieldValue('location',url);if(S==""){S=GetQueryFieldValue('CityAjaxH',url);}
if(S.indexOf("&destinationId=")>-1){S="";}
if(S!="")
document.getElementById('CityAjaxH').value=S;if(GetQueryFieldValue('destid',url)=='<destid>')
document.getElementById('destid').value='';else
document.getElementById('destid').value=GetQueryFieldValue('destid',url);document.getElementById('searchHead').innerHTML='Searching for '+document.getElementById('CityAjaxH').value+' ....';S=GetQueryFieldValue('hotelIdList',url);if(S==""){var result=validate();if(result==0){return false;}}
var rooms=document.getElementById('rooms').value;if(rooms!=null){var pax='';var ch='';for(i=0;i<=(rooms-1);i++){if(pax==''){pax='room'+(i+1)+'='+document.getElementById('room'+(i+1)).value;}else
{pax=pax+'&room'+(i+1)+'='+document.getElementById('room'+(i+1)).value;}
var childs=document.getElementById('R'+(i+1)+'C').value;if((childs!=null)&&(childs>0)){ch='';for(j=0;j<=(childs-1);j++){if(ch==''){ch=document.getElementById('R'+(i+1)+'C1'+(j+1)).value;}else
{ch=ch+','+document.getElementById('R'+(i+1)+'C1'+(j+1)).value;}}
if(ch!=''){pax=pax+','+ch;}}}
url=url+'&rooms='+rooms+'&'+pax;}}
if(id.length==0){document.getElementById(id).innerHTML="";document.getElementById(id).style.border="0px";return;}
ShowHide('prog',1,480,370);ShowHide(id,0,280,6);if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200)
{var str=xmlhttp.responseText;var I=-1;var locs='';var S='';I=str.indexOf("<CUR>");if(I>-1){if(sortHeading!=null){sortHeading.style.display="block";}
I=I+5;J=str.indexOf("</CUR>");S=str.substring(I,J);try
{if(document.getElementById("currency")!=null){document.getElementById("currency").value=S;}
if(document.getElementById("pr")!=null){document.getElementById("pr").innerHTML='(around '+S+')';}}catch(err){}
str=str.replace('<CUR>'+S+'</CUR>','');}else
{if(sortHeading!=null){sortHeading.style.display="none";}}
if((id=='HtlOptions')||(id=='HtlOptionsOnLoad'))
{if(document.getElementById("resultCount")!=null){document.getElementById("resultCount").innerHTML="";}
var I=0;var locs='';var S='';I=str.indexOf("<NRS>");if(I>=0)
{I=I+5;J=str.indexOf("</NRS>");S=str.substring(I,J);str=str.replace('<NRS>'+S+'</NRS>','');if(document.getElementById("resultCount")!=null){var num=-1;try{num=parseInt(S);}catch(err){}
if(num==1)
document.getElementById("resultCount").innerHTML="1 hotel found";else
if(num>1)
document.getElementById("resultCount").innerHTML=num+" hotels found, some hotels may not be available on your travel dates.";else
if(num==0)
document.getElementById("resultCount").innerHTML="no hotel. Change the search criteria and try again.";}}
I=str.indexOf("<CIT>");if(I>=0){I=I+5;J=str.indexOf("</CIT>");S=str.substring(I,J);str=str.replace('<CIT>'+S+'</CIT>','');if(document.getElementById("city")!=null){document.getElementById("city").value=S;}}
I=str.indexOf("<COU>");if(I>=0){I=I+5;J=str.indexOf("</COU>");S=str.substring(I,J);str=str.replace('<COU>'+S+'</COU>','');if(document.getElementById("country")!=null){document.getElementById("country").value=S;}}
I=str.indexOf("<htlNearLocations>");S='';locs='';if(I>0)
{I=I+18;S=str.substring(I,str.length);locs=str.substring(I,(str.length-19));str=str.replace(S,'');}}
if((str!=null)&&(str!=""))
{document.getElementById(id).innerHTML=str;}
if((id=='HtlOptions')||(id=='HtlOptionsOnLoad'))
{var ll=document.getElementById("locationsL");if(ll!=null){ll.innerHTML=locs;}}
ShowHide('prog',0,280,6);ShowHide(id,1,280,6);}}
xmlhttp.open("GET",url,true);xmlhttp.send();var sh=document.getElementById('searchHead');if(sh!=null){sh.innerHTML=document.getElementById('CityAjaxH').value;}
var sh2=document.getElementById('searchHead2');if(sh2!=null){sh2.innerHTML=document.getElementById('CityAjaxH').value;}}
function showRequestResultsBR(id,url){var sort=GetQueryFieldValue('sort',url);Set_Cookie('sort',sort,'','/','','');var city=GetQueryFieldValue('CityAjaxH',url);if(city!=""){if(document.getElementById('CityAjaxH')!=null){document.getElementById('CityAjaxH').value=city;}}
showRequestResultsPax(id,url);}
function goBackPage(id,url){var v=GetQueryFieldValue('CityAjaxH',url);if(v==""){window.location="../index.html";}
else{Set_Cookie('CityAjaxH',GetQueryFieldValue('CityAjaxH',url),'','/','','');window.location="../dynamic/SearchResultsHs22.html";}}
function showRequestResultsTop(url){ShowHide('prog',1,480,370);Set_Cookie('CityAjaxH',GetQueryFieldValue('CityAjaxH',url),'','/','','');Set_Cookie('hotelId',GetQueryFieldValue('hotelId',url),'','/','','');Set_Cookie('room1',GetQueryFieldValue('room1',url),'','/','','');Set_Cookie('room2',GetQueryFieldValue('room2',url),'','/','','');Set_Cookie('room3',GetQueryFieldValue('room3',url),'','/','','');Set_Cookie('room4',GetQueryFieldValue('room4',url),'','/','','');Set_Cookie('rooms',GetQueryFieldValue('rooms',url),'','/','','');Set_Cookie('autoSearch',GetQueryFieldValue('auto',url),'','/','','');ShowHide('prog',0,280,6);window.location=url;}
function showRequestResultsL(url){var frm=document.getElementById('searchL');var frm2=document.getElementById('Search');if(frm2!=null){Set_Cookie('SDATEH',frm2.SDATEH.value,'','/','','');Set_Cookie('EDATEH',frm2.EDATEH.value,'','/','','');}
var dep=GetQueryFieldValue('CityAjaxH',url);var v=GetQueryFieldValue('v',url);var destid=GetQueryFieldValue('destid',url);if(destid=='<destid>')destid='';var area=GetQueryFieldValue('area',url);var areacity=GetQueryFieldValue('areacity',url);var areacountry=GetQueryFieldValue('areacountry',url);if(frm!=null)
{dep=frm.CityAjaxH.value;var elem=frm.elements;var q='';for(var i=0;i<elem.length;i++)
{if((elem[i].type=="checkbox")&&(elem[i].checked)){if(q==''){q=elem[i].name+"="+elem[i].value;}else
{q=q+"&"+elem[i].name+"="+elem[i].value;}}else
if(elem[i].type!="checkbox"){if(q==''){q=elem[i].name+"="+elem[i].value;}else
{q=q+"&"+elem[i].name+"="+elem[i].value;}}}}
if(v!=""){if((dep=="")&&(destid=="")){alert('Select city or area and try again');return false;}}
Set_Cookie('CityAjaxH',dep,'','/','','');Set_Cookie('destid',destid,'','/','','');Set_Cookie('area',area,'','/','','');Set_Cookie('areacity',areacity,'','/','','');Set_Cookie('areacountry',areacountry,'','/','','');window.location=url;}
jQuery(function($){var timer;function mouseoverActiontooltip(event)
{$("body").append("<p id='tooltip'>"+this.rel+"</p>");$("#tooltip").css("left",(event.pageX+20)+"px");$("#tooltip").css("top",(event.pageY-10)+"px");}
function mouseoutActiontooltip(event)
{$("#tooltip").remove();}
function mousemoveActiontooltip(event)
{$("#tooltip").css("left",(event.pageX+20)+"px");$("#tooltip").css("top",(event.pageY-10)+"px");}
function mouseoverActiontooltipImage(event)
{$("body").append("<p id='tooltip'><img src="+this.rel+"></img></p>");$("#tooltip").css("left",(event.pageX+20)+"px");$("#tooltip").css("top",(event.pageY-10)+"px");}
function mouseoutActiontooltipImage(event)
{$("#tooltip").remove();}
function mousemoveActiontooltipImage(event)
{$("#tooltip").css("left",(event.pageX+20)+"px");$("#tooltip").css("top",(event.pageY-10)+"px");}
$('.tooltip').bind('mouseover',mouseoverActiontooltip);$('.tooltip').bind('mouseout',mouseoutActiontooltip);$('.tooltip').bind('mousemove',mousemoveActiontooltip);$('.tooltipImage').bind('mouseover',mouseoverActiontooltipImage);$('.tooltipImage').bind('mouseout',mouseoutActiontooltipImage);$('.tooltipImage').bind('mousemove',mousemoveActiontooltipImage);});function getMonMMM(m){if(m==1)return"Jan";else
if(m==2)return"Feb";else
if(m==3)return"Mar";else
if(m==4)return"Apr";else
if(m==5)return"May";else
if(m==6)return"Jun";else
if(m==7)return"Jul";else
if(m==8)return"Aug";else
if(m==9)return"Sep";else
if(m==10)return"Oct";else
if(m==11)return"Nov";else
if(m==12)return"Dec";}
function getMonMM(m){if(m=="Jan")return 1;else
if(m=="Feb")return 2;else
if(m=="Mar")return 3;else
if(m=="Apr")return 4;else
if(m=="May")return 5;else
if(m=="Jun")return 6;else
if(m=="Jul")return 7;else
if(m=="Aug")return 8;else
if(m=="Sep")return 9;else
if(m=="Oct")return 10;else
if(m=="Nov")return 11;else
if(m=="Dec")return 12;}
function RelpaceAll(toke,newtoken,str)
{while(str.indexOf(toke)>-1){str=str.replace(toke,newtoken);}
return str;}
function sleep(delay){var start=new Date().getTime();while(new Date().getTime()<start+delay);}
function pausecomp(millis)
{var date=new Date();var curDate=null;do{curDate=new Date();}
while(curDate-date<millis);}
function trim(sStr){return sStr.replace(/(^\s*)|(\s*$)/g,"");}
function getXmlFieldValue(xml,fieldname){var result="";var I=xml.indexOf("<"+fieldname+">");if(I>=0)
{I=I+fieldname.length+2;var J=xml.indexOf("</"+fieldname+">");result=xml.substring(I,J);}
return result;}
function submitFormData(frmid){SetCookies(frmid);var frm=document.getElementById(frmid);if(frm!=null){frm.submit();}}
function submitFormData23(frmid,url)
{if(url!="")
{var v=GetQueryFieldValue('CityAjaxH2',"?"+url);if(isDigit(v)){var path=GetQueryFieldValue('path',url);if((path!="")&&(typeof path!='undefined')){path=path;}else path="";window.location=path+'../../src/SearchhtlDetail.php?CityAjaxH='+url+'&m=1&hotelId='+v+'&supplierType=E'+getPaxData();return false;}}
var v=validate3("?CityAjaxH="+url);if(v==1)
{ShowHide('filtprog',1,380,56);SetCookies(frmid);url='../../src/Genbrandhtls.php?CityAjaxH='+url;window.location=url;}else return false;}
function submitFormDatabb(frmid,path,url)
{var v=validate3("?CityAjaxH="+url);if(v==1)
{ShowHide('filtprog',1,380,56);SetCookies(frmid);url=path+'src/Genbrandhtlsbb.php?CityAjaxH='+url;window.location=url;}else return false;}
function submitFormData22(frmid,url)
{SetCookies(frmid);var path=GetQueryFieldValue('path',url);
  var sd=GetQueryFieldValue('SDATEH',url);var ed=GetQueryFieldValue('EDATEH',url);
  if ((sd!='')&&(ed!='')){var d=getDateDiffDays(encodeDate(sd),encodeDate(ed));if (d>28){alert('Maximum 28 days can be booked');return false;}}
if(url!="")
{var v=GetQueryFieldValue('CityAjaxH2',url);if(isDigit(v)){if((path!="")&&(typeof path!='undefined')){path=path;}else path="";window.location=path+'../src/SearchhtlDetail.php'+url+'&m=1&hotelId='+v+'&supplierType=E'+getPaxData();return false;}}
url=path+'../src/Genbrandhtls.php'+url+getPaxData();window.location=url;}
function submitFormData24(frmid,url)
{SetCookies(frmid);var path=GetQueryFieldValue('path',url);var hi=GetQueryFieldValue('hotelId',url);
{var v=GetQueryFieldValue('CityAjaxH2',url);if(isDigit(v)){if((path!="")&&(typeof path!='undefined')){path=path;}else path="";
if (v!=hi)
{window.location=path+'../src/SearchhtlDetail.php'+url+'&m=1&hotelId='+v+'&supplierType=E'+getPaxData();return false;}
else 
{
 url=path+'../src/RoomAvailEscapes.php'+url+'&hotelId='+v+'&supplierType=E'+getPaxData();document.getElementById('availresults').innerHTML='';
 getData2('availresults',url);return false;
}
}

}
url=path+'../src/Genbrandhtls.php'+url+getPaxData();window.location=url;}
function initlocs(id,q){var obj=document.getElementById(id);var url="";if(q=="")
url="src/locs.php?act=cc&q=";else
var url="src/locs.php?"+q;if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{var locs=getMatrix(xmlhttp.responseText);var added=0;for(i=0;i<locs.length;i++)
{var loc=locs[i];if(loc[0]!="")
{if(added==0){obj.options[0]=new Option("Select","");added=1;}
obj.options[obj.options.length]=new Option(loc[1],loc[0]);}}}}
xmlhttp.open("GET",url,true);xmlhttp.send();}
function getData(id,url)
{var obj=document.getElementById(id);if((obj!=null)&&(obj.options!=null))
remSelOpt(obj);var prog=document.getElementById("filtprog");if(prog!=null){prog.style.display="block";}
$.get(url,function(data){{locationOpts=data;}}).success(function(){}).error(function(){}).complete(function()
{addData(id,locationOpts);})}
function addData(id,data){var prog=document.getElementById("filtprog");var obj=document.getElementById(id);var added=0;if(id=="sites"){if(obj!=null){obj.innerHTML=data;}}else
{var locs=getMatrix(data);for(i=0;i<locs.length;i++)
{var loc=locs[i];if(loc[0]!="")
{enable(id,1);if(added==0){obj.options[0]=new Option("Select ["+(locs.length-1)+"]","");added=1;}
obj.options[obj.options.length]=new Option(loc[1],loc[0]);}}}
if(prog!=null){prog.style.display="none";}}
function initstates(id,c){if(c=="")return false;var obj=document.getElementById(id);remSelOpt(obj);remSelOpt(document.getElementById("ct"));remSelOpt(document.getElementById("area"));remSelOpt(document.getElementById("str"));remSelOpt(document.getElementById("htl"));getData("st","../src/locs.php?act=st&q="+c);if(obj.options.length<1)
{id="ct";if(obj.options.length<1){var obj=document.getElementById(id);remSelOpt(obj);getData("ct","../src/locs.php?act=ct&st=&q="+c);}}}
function initcities(id,c,st){enable(id,1);if(st=="")return false;var obj=document.getElementById(id);remSelOpt(obj);remSelOpt(document.getElementById("ct"));remSelOpt(document.getElementById("area"));remSelOpt(document.getElementById("str"));remSelOpt(document.getElementById("htl"));getData("ct","../src/locs.php?act=ct&st="+st+"&q="+c);}
function initlandmarks(id,c,st,ct){if(ct=="")return false;var obj=document.getElementById(id);remSelOpt(obj);getData(id,"../src/locs.php?act=landm&st="+st+"&q="+c+"&ct="+ct);}
function initarea(id,c,st,ct){if(ct=="")return false;var obj=document.getElementById(id);remSelOpt(obj);remSelOpt(document.getElementById("str"));remSelOpt(document.getElementById("htl"));getData("area","../src/locs.php?act=area&st="+st+"&q="+c+"&ct="+ct);var ob=document.getElementById(id);if(ob.options.length<1){ob.options[0]=new Option("All areas",ct);initstreets("str",c,st,ct,"");}}
function initstreets(id,c,st,ct,a){if(ct=="")return false;var obj=document.getElementById(id);remSelOpt(obj);remSelOpt(document.getElementById("htl"));getData("str","../src/locs.php?act=str&st="+st+"&q="+c+"&ct="+ct+"&a="+a);getData("htl","../src/locs.php?act=htlstr&st="+st+"&q="+c+"&ct="+ct+"&a="+a);}
function inithotels(id,c,st,ct,str){if(str=="")return false;var obj=document.getElementById(id);remSelOpt(obj);getData("htl","../src/locs.php?act=htl&st="+st+"&q="+c+"&ct="+ct+"&str="+str);}
function remSelOpt(id)
{len1=id.options.length;for(i=0;i<len1;i++)
{id.options[0]=null;}}
function getMatrix(input_string)
{var parts=input_string.split('^');for(var t=0;t<parts.length;t++)
{var subparts=parts[t].split('@');parts[t]=subparts.splice(0,subparts.length);}
return parts;}
function doAssistantSumbit(url){var obj=document.getElementById("htl");if(obj!=null){if(obj.value==""){alert('Select a hotel from the list. Hotels appear in the list if country/state or city/area/street fields are selected.');return false;}
window.location=url;}}
function showhideSearch(id){var imch=document.getElementById('imch');if((document.getElementById('CityAjaxH')==null)||(document.getElementById('ChangeSearch')==null))
{return false;}
if((id==1)||(document.getElementById('searchinfo').style.display=='none')){document.getElementById('searchinfo').style.display='block';document.getElementById('CityAjaxH').select();document.getElementById('CityAjaxH').focus();if(imch!=null)imch.src=path+"images/sdd5b.png";paxa();paxa2();}else
{document.getElementById('searchinfo').style.display='none';if(imch!=null)imch.src=path+"images/srr5b.png";}}
function isNumberKey(evt)
{var charCode=(evt.which)?evt.which:event.keyCode
if(charCode>31&&(charCode<48||charCode>57))
return false;return true;}
function delCookie(id){if(document.getElementById(id)!=null){document.getElementById(id).style.display="none";}
var numcookie=0;var a_all_cookies=document.cookie.split(';');for(i=0;i<a_all_cookies.length;i++)
{cookie_name=a_all_cookies[i].replace(/^\s+|\s+$/g,'');if(cookie_name.indexOf('propcook2')>-1)
{numcookie=numcookie+1;}}
if(numcookie<=1){delCookies('rvh');}else{Set_Cookie(id,'',-1,'/','','');}}
function delCookies(id){if(document.getElementById(id)!=null){document.getElementById(id).style.display="none";}
var a_all_cookies=document.cookie.split(';');for(i=0;i<a_all_cookies.length;i++)
{cookie_name=a_all_cookies[i].replace(/^\s+|\s+$/g,'');if(cookie_name.indexOf('propcook2')>-1)
{Set_Cookie(cookie_name,'',-1,'/','','');}}}
function rvhtlsm(){var rvh="'rvh'";var none="'none'";return false;}
function isDigit(v)
{if(isNaN(v))return false;if(v=="")return false;for(i=0;i<v.length;i++){var charCode=v.charCodeAt(i);if((charCode<47||charCode>58))
return false;}
return true;}
function getRooms(){var r=0;if(Get_Cookie('rooms')=="")r=1;else
r=parseInt(unescape(Get_Cookie('rooms')));return r;}
function getSetRooms(){var rooms=getRooms();var r=document.getElementById('rooms');if(r==null){r=document.getElementById('Select1');}
if(r!=null){if(rooms==0)
r.selectedIndex=0;else
r.selectedIndex=(rooms-1);}}
function getRoomNum(id){var r=0;if(id==1){if(Get_Cookie('room'+id)=="")r=1;else
r=parseInt(unescape(Get_Cookie('room'+id)));}else
r=parseInt(unescape(Get_Cookie('room'+id)));return r;}
function getRoomChildNum(id){var c=0;if(Get_Cookie('R'+id+'C')!="")c=parseInt(unescape(Get_Cookie('R'+id+'C')));return c;}
function getRoomChildAge(id,c){var v='R'+id+'C1'+c;if(Get_Cookie(v)!="")c=parseInt(unescape(Get_Cookie(v)));return c;}
function getSetRoom(id){if(document.getElementById('room'+id)!=null){var f=getRoomNum(id);document.getElementById('room'+id).selectedIndex=f-1;ff=getRoomChildNum(id);setcages(ff,id);var c1=ff;document.getElementById('R'+id+'C').selectedIndex=ff;if(ff>0)
{f=getRoomChildAge(id,1);if(document.getElementById('R'+id+'C11')!=null){document.getElementById('R'+id+'C11').selectedIndex=f+1;}}
if(ff>1)
{f=getRoomChildAge(id,2);if(document.getElementById('R'+id+'C12')!=null)
document.getElementById('R'+id+'C12').selectedIndex=f+1;}
if(ff>2)
{f=getRoomChildAge(id,3);if(document.getElementById('R'+id+'C13')!=null)
document.getElementById('R'+id+'C13').selectedIndex=f+1;}}}
function resetPaxInfo(){var rms=0;var r1=getRoomNum(1);var r2=getRoomNum(2);var r3=getRoomNum(3);var r4=getRoomNum(4);var c1=getRoomChildNum(1);var c2=getRoomChildNum(2);var c3=getRoomChildNum(3);var c4=getRoomChildNum(4);var rooms=getRooms();if(rooms==0){rooms=1;}
if(rooms>0)
{getSetRooms();getSetRoom(1);getSetRoom(2);getSetRoom(3);getSetRoom(4);}}
function enable(id,a){if(a==0)
document.getElementById(id).disabled=true;else
document.getElementById(id).disabled=false;}
function showpropertyinfo(id,id2){var o=document.getElementById(id2);var d=document.getElementById("imd");var u=document.getElementById("imu");var s=document.getElementById("shd");if(o!=null)
{if(id==1){if(s.innerHTML=="Hide property description")
{o.style.display="none";if(s!=null)s.innerHTML="Show property description";if(d!=null)d.src="../images/sslr.bmp";}else{o.style.display="block";if(d!=null)d.src="../images/ssd6.bmp";if(s!=null)s.innerHTML="Hide property description";}}
else
if(id==0){o.style.display="none";if(d!=null)d.src="../images/sslr.bmp";if(s!=null)s.innerHTML="Show property description";}}}
function showpropertyinfo2(id,id2){var o=document.getElementById(id);var d=document.getElementById("imrates");if(o!=null)
{if(id2==1){o.style.display='block';if(d!=null)d.src="../images/sslr99d.bmp";}else
{if(o.style.display=='block'){o.style.display='none';if(d!=null)d.src="../images/sslr99.bmp";}else
{o.style.display='block';if(d!=null)d.src="../images/sslr99d.bmp";}}}
paxa2();}
function doHtlDetail(url){var c="";if(document.getElementById("CityAjaxH")!=null)c="&CityAjaxH="+document.getElementById("CityAjaxH").value;url=url+getPaxData()+c;window.open(url);}
function getData3(id,url)
{var elem=document.forms['filter_form'].elements;for(var i=0;i<elem.length;i++)
{if((elem[i].type=="checkbox")&&(elem[i].checked)){elem[i].checked=false;}else
if((elem[i].type=="radio")&&(elem[i].checked)){elem[i].checked=false;}else
if((elem[i].type=="text")){elem[i].value='';}}
getData2(id,url);}
function getData4(id,url)
{if(typeof url!='undefined')
{var v=GetQueryFieldValue('CityAjaxH2',url);if(isDigit(v)){var path=GetQueryFieldValue('path',url);if((path!="")&&(typeof path!='undefined')){path=path;}else path="";window.location=path+'src/SearchhtlDetail.php?hotelId='+v+'&m=1&supplierType=E&currency=<currency>&local=&roominfo=&rooms=&rate=&cu=';return false;}}
SetCookies(id);url=url+getPaxData();getData2(id,url);}
function getData2(id,url)
{var suggest=GetQueryFieldValue('suggest',url);if((suggest!="")&&(document.getElementById("CityAjaxH")!=null)){document.getElementById("CityAjaxH").value=suggest;}
var prog=document.getElementById("filtprog");var obj=document.getElementById(id);if(prog!=null){prog.style.display="block";}
$.get(url,function(data){{locationOpts=data;}}).success(function(){}).error(function(data){}).complete(function()
{if(obj!=null){var i=locationOpts.indexOf("<lat@");if(i>0)
{obj.innerHTML=locationOpts.substring(0,i);}else
{obj.innerHTML=locationOpts;if(prog!=null){prog.style.display="none";}
return false;}
var extra=locationOpts.substring(i+5,locationOpts.length);var fields=extra.split("@");var hn=fields[2];if(document.getElementById('filter')!=null)
if(document.getElementById('latitude')!=null)
{if((typeof fields[10]!='undefined')) document.getElementById('latitude').value=fields[0];}
if(document.getElementById('longitude')!=null)
{if((typeof fields[10]!='undefined'))document.getElementById('longitude').value=fields[1];}
{if(hn!="")
{if (document.getElementById('filter')!=null)document.getElementById('filter').style.display="block";}else
{if (document.getElementById('filter')!=null)document.getElementById('filter').style.display="none";}}
if(document.getElementById('cachelocation')!=null)
{if((typeof fields[10]!='undefined'))var v=fields[10];v=v.replace(">"," ");document.getElementById('cachelocation').value=v;}
if(document.getElementById('cachekey')!=null)
{if((typeof fields[9]!='undefined'))var v=fields[9];v=v.replace(">"," ");document.getElementById('cachekey').value=v;}
if(document.getElementById('moreresultsavailable')!=null)
{if((typeof fields[8]!='undefined'))var v=fields[8];v=v.replace(">"," ");document.getElementById('moreresultsavailable').value=v;if((v!="true")&&(document.getElementById('next')!=null))document.getElementById('next').innerHTML="";else
if(document.getElementById('next')!=null)document.getElementById('next').innerHTML="Next page";}
if(document.getElementById('destination')!=null)
{if((typeof fields[7]!='undefined'))var v=fields[7];v=v.replace(">"," ");if (v.indexOf("destinationid")<1) document.getElementById('destination').innerHTML=v;}
if(document.getElementById('countrycode')!=null)
{if((typeof fields[5]!='undefined'))
document.getElementById('countrycode').value=fields[5];}
if(document.getElementById('locationsL')!=null)
{if((typeof fields[4]!='undefined'))
  if (fields[4]!=''){
     document.getElementById('locationsL').innerHTML='<table><tr><td colspan="2" style="font-weight:bold;">Landmarks</td></tr>'+fields[4]+'</table>';
     if (document.getElementById('propType')!=null){ document.getElementById('propType').style.display='block';}
     if (document.getElementById('amenities')!=null){ document.getElementById('amenities').style.display='block';}
     if (document.getElementById('staticmapmain')!=null){ document.getElementById('staticmapmain').style.display='block';}
  }else
  {
     if (document.getElementById('propType')!=null){ document.getElementById('propType').style.display='none';}
     if (document.getElementById('amenities')!=null){ document.getElementById('amenities').style.display='none';}
     if (document.getElementById('staticmapmain')!=null){ document.getElementById('staticmapmain').style.display='none';}
  }
  
}

if(document.getElementById('city')!=null)
{if((typeof fields[3]!='undefined'))
document.getElementById('city').innerHTML=fields[3];}
if(document.getElementById('hotelcount')!=null)
{if((typeof fields[2]!='undefined'))
document.getElementById('hotelcount').innerHTML=fields[2];}
if(document.getElementById('staticmap')!=null)
{if((typeof fields[0]!='undefined')&&(typeof fields[1]!='undefined'))
{var sm='http://maps.googleapis.com/maps/api/staticmap?center='+fields[0]+','+fields[1]+'&zoom=10&size=170x100&markers=color:green%7C'+fields[0]+','+fields[1]+'&sensor=false';document.getElementById('staticmap').src=sm;}}
if(prog!=null){prog.style.display="none";}}})}
function submitFormDataAlt(frmid,destval,locval){var frm=document.getElementById(frmid);var dest=document.getElementById('destid');var loc=document.getElementById('CityAjaxH');if(loc!=null){loc.value=locval}
if(dest!=null){dest.value=destval;}
if(frm!=null){ShowHide('filtprog',1,380,56);frm.submit();}}
function showhideObj(id,id2,id3,id4){if (id=='divsearch') paxa2();var so=document.getElementById(id);if(so!=null){if((so.style.display=="none")||((so.style.display=="")))
{so.style.display="block";var i=document.getElementById("i"+id);if(i!=null){i.src="../../images/u3.png"}
if((typeof id2!='undefined')&&(document.getElementById(id2)!=null)){var so1=document.getElementById(id2);so1.style.display="block";}}
else
{so.style.display="none";if((typeof id2!='undefined')&&(document.getElementById(id2)!=null)){var so1=document.getElementById(id2);so1.style.display="none";}
var i=document.getElementById("i"+id);if(i!=null){i.src="../../images/d3.png"}}}
if((typeof id3!='undefined')&&(document.getElementById(id3)!=null)){var so3=document.getElementById(id3);so3.style.display="none";}
if((typeof id4!='undefined')&&(document.getElementById(id4)!=null)){var so4=document.getElementById(id4);so4.style.display="none";}}
function SetCookies(id)
{var f,v="";setRoomsCook();setRoomCook(1);setRoomCook(2);setRoomCook(3);setRoomCook(4);if(document.getElementById('CityAjaxH')!=null)
Set_Cookie('CityAjaxH',document.getElementById('CityAjaxH').value,'','/','','');if(document.getElementById('from')!=null){var v=document.getElementById('from').value;if(v.indexOf("%2F")>0){var vs=v.split('%2F');v=vs[1]+'/'+vs[0]+'/'+vs[2];}
Set_Cookie('SDATEH',v,'','/','','');}if(document.getElementById('to')!=null){var v=document.getElementById('to').value;if(v.indexOf("%2F")>0){var vs=v.split('%2F');v=vs[1]+'/'+vs[0]+'/'+vs[2];}
Set_Cookie('EDATEH',document.getElementById('to').value,'','/','','');}}
function getPaxData()
{var rooms="";var url="";if(document.getElementById('rooms')!=null)
rooms=document.getElementById('rooms').value;else
if(document.getElementById('Select1')!=null)
rooms=document.getElementById('Select1').value;if(rooms!="")
{var pax='';var ch='';for(i=0;i<=(rooms-1);i++)
{if(pax=='')
{pax='room'+(i+1)+'='+document.getElementById('room'+(i+1)).value;}else
{pax=pax+'&room'+(i+1)+'='+document.getElementById('room'+(i+1)).value;}
var childs=document.getElementById('R'+(i+1)+'C').value;if((childs!=null)&&(childs>0))
{ch='';for(j=0;j<=(childs-1);j++)
{if(ch=='')
{ch=document.getElementById('R'+(i+1)+'C1'+(j+1)).value;}else
{ch=ch+','+document.getElementById('R'+(i+1)+'C1'+(j+1)).value;}}
if(ch!='')
{pax=pax+','+ch;}}}
url=url+'&rooms='+rooms+'&'+pax;}
if(url=="")url="rooms=1&room1=1";return url;}
function loadTab(pageUrl,id)
{$.ajax({url:pageUrl,cache:false,success:function(message)
{$("#tabcontents1").hide();$("#tabcontents2").hide();$("#tabcontents3").hide();$("#tabcontents4").hide();$("#tab1").removeClass('current');$("#tab2").removeClass('current');$("#tab3").removeClass('current');$("#tab4").removeClass('current');$("#tabcontents"+id).empty().append(message);$("#tabcontents"+id).show();$("#tab"+id).removeClass('current').addClass('current');}});}
function loadTab2(pageUrl,id,id2)
{$("#tabcontents1").hide();$("#tabcontents2").hide();$("#tabcontents3").hide();$("#tabcontents4").hide();$("#tabcontents5").hide();$("#tab1").removeClass('current');$("#tab2").removeClass('current');$("#tab3").removeClass('current');$("#tab4").removeClass('current');$("#tab5").removeClass('current');$("#tabcontents"+id).show();$("#tab"+id).removeClass('current').addClass('current');if (id2==1){$("#Htl2PropertyInfo2").removeClass('closeDesc').addClass('openDesc');}else{$("#Htl2PropertyInfo2").removeClass('openDesc').addClass('closeDesc');}}
$(document).ready(function()
{$("#tab1").click(function(){loadTab2("",1);});
$("#tab2").click(function(){loadTab2("",2);});
$("#tab3").click(function(){loadTab2("",3);initMap();});
$("#tab4").click(function(){loadTab2("",4);});
$("#tab5").click(function(){loadTab2("",5);});
$("#tab11").click(function(){loadTab2("",1,1);});
$("#tab12").click(function(){loadTab2("",2);});
$("#tab13").click(function(){loadTab2("",3);initMap();});
$("#tab14").click(function(){loadTab2("",4);});
$("#tab15").click(function(){loadTab2("",5);});

}
);

function doCityCheck(o,v)
{if(o!=null)
{v=v.toLowerCase();o.style.color='#333';if(o.value.toLowerCase()==v)o.value="";}}
function doCityCheckb(o,v)
{if(o!=null)
{if(o.value==""){o.style.color='#aaa';o.value=v;}}}
function addhere(id,id2)
{var v=document.getElementById(id2).value;v=trim(v);var results='results';if((v=="")||(v.toLowerCase()=='specify here and press add now')){alert('Specify value and press Add now');return;}
var t='<table width="100%" title="'+v+'" style="cursor:pointer;background:#DBA901;border-bottom:#fff 1px solid" onclick="submitFormData23(<results>,<C>'+v+'&SDATEH=<SDATEH>&EDATEH=<EDATEH>&currency=<CURR>);">'+'<tr>'+'    <td>'+'        <span>'+v+'</span>'+'    </td>'+'   <td align="right">'+'        <span class="roundit" style="position:relative;background:#1e90ff;color:#fff">Search</span>'+'    </td>'+'</tr>'+'</table>';t=t.replace("<C>","'");t=t.replace("<results>","'results'");t=t.replace("<SDATEH>","'+document.getElementById('from').value+'");t=t.replace("<EDATEH>","'+document.getElementById('to').value+'");t=t.replace("<CURR>","'+document.getElementById('currency').value");document.getElementById(id).innerHTML=document.getElementById(id).innerHTML+t;document.getElementById(id2).value='';setPromsTabs('http://www.lowestroomrates.com/src/loadpromotions.php?id=NewFamilyDestination:'+v,'promos2');}
function encodeDate(ddmmyy){var res=ddmmyy.split("/");var day=res[0];var mon=res[1];var yea='20'+res[2];return new Date(yea,mon-1,day);}
function getDateDiffDays(f,t){var t1=f.getTime();var t2=t.getTime();var d=Math.floor((t2-t1)/(1000*60*60*24));if(d<0)d=0;return d;}
function getLocaleDateString(l){var formats={"ar":"dd/mm/yy","ar-sa":"dd/mm/yy","bg":"dd.m.yy","bg-bg":"dd.m.yy","ca-es":"dd/mm/yy","ca":"dd/mm/yy","zh":"yy/m/d","zh-tw":"yy/m/d","cs-cz":"d.m.yy","da-dk":"dd-mm-yy","de-de":"dd.mm.yy","de":"dd.mm.yy","el-gr":"d/m/yy","en-us":"m/d/yy","fi-fi":"d.m.yy","f":"dd/mm/yy","fr-fr":"dd/mm/yy","he-il":"dd/mm/yy","hu-hu":"yy. mm. dd.","is-is":"d.m.yy","it":"dd/mm/yy","it-it":"dd/mm/yy","ja-jp":"yy/mm/dd","ko":"yy-mm-dd","ko-kr":"yy-mm-dd","nl":"d-m-yy","nl-nl":"d-m-yy","nb-no":"dd.mm.yy","pl":"yy-mm-dd","pl-pl":"yy-mm-dd","pt":"dd-mm-yy","pt-br":"d/m/yy","ro ":"dd.mm.yy","ro-ro":"dd.mm.yy","ru":"dd.mm.yy","ru-ru":"dd.mm.yy","hr":"d.m.yy","hr-hr":"d.m.yy","sk":"d. m. yy","sk-sk":"d. m. yy","sq-al":"yy-mm-dd","sv-se":"yy-mm-dd","th":"d/m/yy","th-th":"d/m/yy","tr":"dd.mm.yy","tr-TR":"dd.mm.yy","ur-PK":"dd/mm/yy","id":"dd/mm/yy","id-id":"dd/mm/yy","uk-ua":"dd.mm.yy","be":"dd.mm.yy","be-by":"dd.mm.yy","sl-si":"d.m.yy","et-ee":"d.mm.yy","lv":"yy.mm.dd.","lv-lv":"yy.mm.dd.","lt-lt":"yy.mm.dd","fa-ir":"MM/dd/yy","vi-vn":"dd/mm/yy","hy-am":"dd.mm.yy","az-latn-az":"dd.mm.yy","eu-es":"yy/mm/dd","mk":"dd.mm.yy","mk-mk":"dd.mm.yy","af":"yy/mm/dd","af-za":"yy/mm/dd","ka-ge":"dd.mm.yy","fo":"dd-mm-yy","fo-fo":"dd-mm-yy","hi":"dd-mm-yy","hi-in":"dd-mm-yy","ms-my":"dd/mm/yy","kk-kz":"dd.mm.yy","ky-kg":"dd.mm.yy","sw-KE":"m/d/yy","uz-latn-uz":"dd/mm yy","tt-ru":"dd.mm.yy","pa-in":"dd-mm-yy","gu-in":"dd-mm-yy","ta-in":"dd-mm-yy","te-in":"dd-mm-yy","kn-in":"dd-mm-yy","mr-in":"dd-mm-yy","sa-in":"dd-mm-yy","mn":"yy.mm.dd","mn-mn":"yy.mm.dd","gl-es":"dd/mm/yy","kok-in":"dd-mm-yy","syr-sy":"dd/mm/yy","dv-mv":"dd/mm/yy","ar-iq":"dd/mm/yy","zh-cn":"yy/m/d","de-ch":"dd.mm.yy","en-gb":"dd/mm/yy","es-mx":"dd/mm/yy","fr-be":"d/mm/yy","it-ch":"dd.mm.yy","nl-be":"d/mm/yy","nn-no":"dd.mm.yy","pt-pt":"dd-mm-yy","sr-latn-cs":"d.m.yy","sv-fi":"d.m.yy","az-cyrl-az":"dd.mm.yy","ms-bn":"dd/mm/yy","uz-cyrl-uz":"dd.mm.yy","ar-eg":"dd/mm/yy","zh-hk":"d/m/yy","de-at":"dd.mm.yy","en-au":"d/mm/yy","es":"dd/mm/yy","es-es":"dd/mm/yy","fr-ca":"yy-mm-dd","sr-cyrl-cs":"d.m.yy","ar-ly":"dd/mm/yy","zh-sg":"d/m/yy","de-lu":"dd.mm.yy","en-ca":"dd/mm/yy","es-gt":"dd/mm/yy","fr-ch":"dd.mm.yy","ar-dz":"dd-mm-yy","zh-mo":"d/m/yy","de-li":"dd.mm.yy","en-nz":"d/mm/yy","es-cr":"dd/mm/yy","fr-lu":"dd/mm/yy","ar-ma":"dd-mm-yy","en-ie":"dd/mm/yy","es-pa":"mm/dd/yy","fr-mc":"dd/mm/yy","ar-tn":"dd-mm-yy","en-za":"yy/mm/dd","es-do":"dd/mm/yy","ar-om":"dd/mm/yy","en-jm":"dd/mm/yy","es-ve":"dd/mm/yy","ar-ye":"dd/mm/yy","en-029":"mm/dd/yy","es-co":"dd/mm/yy","ar-sy":"dd/mm/yy","en-bz":"dd/mm/yy","es-pe":"dd/mm/yy","ar-jo":"dd/mm/yy","en-tt":"dd/mm/yy","es-ar":"dd/mm/yy","ar-lb":"dd/mm/yy","en-zw":"M/d/yy","es-ec":"dd/mm/yy","ar-kw":"dd/mm/yy","en-ph":"m/d/yy","es-cl":"dd-mm-yy","ar-ae":"dd/mm/yy","es-uy":"dd/mm/yy","ar-bh":"dd/mm/yy","es-py":"dd/mm/yy","ar-qa":"dd/mm/yy","es-bo":"dd/mm/yy","es-sv":"dd/mm/yy","es-hn":"dd/mm/yy","es-ni":"dd/mm/yy","es-pr":"dd/mm/yy","am-et":"d/m/yy","tzm-latn-dz":"dd-mm-yy","iu-latn-ca":"d/mm/yy","sma-no":"dd.mm.yy","mn-mong-cn":"yy/m/d","gd-gb":"dd/mm/yy","en-my":"d/m/yy","prs-af":"dd/mm/yy","bn-bd":"dd-mm-yy","wo-sn":"dd/mm/yy","rw-rw":"m/d/yy","qut-gt":"dd/mm/yy","sah-ru":"mm.dd.yy","gsw-fr":"dd/mm/yy","co-fr":"dd/mm/yy","oc-fr":"dd/mm/yy","mi-nz":"dd/mm/yy","ga-ie":"dd/mm/yy","se-de":"yy-mm-dd","br-fr":"dd/mm/yy","smn-fi":"d.m.yy","moh-ca":"m/d/yy","arn-cl":"dd-mm-yy","ii-cn":"yy/m/d","dsb-de":"d. m. yy","ig-ng":"d/m/yy","kl-gl":"dd-mm-yy","lb-lu":"dd/mm/yy","ba-ru":"dd.mm.yy","nso-za":"yy/mm/dd","quz-bo":"dd/mm/yy","yo-ng":"d/m/yy","ha-latn-ng":"d/m/yy","fil-ph":"m/d/yy","ps-af":"dd/mm/yy","fy-nl":"d-m-yy","ne-np":"m/d/yy","se-no":"dd.mm.yy","iu-cans-ca":"d/m/yy","sr-latn-rs":"d.m.yy","si-lk":"yy-mm-dd","sr-cyrl-rs":"d.m.yy","lo-la":"dd/mm/yy","km-kh":"yy-mm-dd","cy-gb":"dd/mm/yy","bo-cn":"yy/m/d","sms-fi":"d.m.yy","as-in":"dd-mm-yy","ml-in":"dd-mm-yy","en-in":"dd-mm-yy","or-in":"dd-mm-yy","bn-in":"dd-mm-yy","tk-tm":"dd.mm.yy","bs-latn-ba":"d.m.yy","mt-mt":"dd/mm/yy","sr-cyrl-me":"d.m.yy","se-fi":"d.m.yy","zu-za":"yy/mm/dd","xh-za":"yy/mm/dd","tn-za":"yy/mm/dd","hsb-de":"d. m. yy","bs-cyrl-ba":"d.m.yy","tg-cyrl-tj":"dd.mm.yy","sr-latn-ba":"d.m.yy","smj-no":"dd.mm.yy","rm-ch":"dd/mm/yy","smj-se":"yy-mm-dd","quz-ec":"dd/mm/yy","quz-pe":"dd/mm/yy","hr-ba":"d.m.yy.","sr-latn-me":"d.m.yy","sma-se":"yy-mm-dd","en-sg":"d/m/yy","ug-cn":"yy-m-d","sr-cyrl-ba":"d.m.yy","es-us":"m/d/yy"};if((l=="")||(typeof l=='undefined'))
{var l=navigator.userLanguage;if(typeof l=='undefined'){l=navigator.language;}}
l=l.toLowerCase();return formats[l]||'dd/mm/yy';}
function pz(v){v=v+"";if(v.length==1)v='0'+v;return v;}
function donights(o)
{var f=document.getElementById('from').value;var t=document.getElementById('to').value;if((f!=null)&&(t!=null))
{var fd=encodeDate(f);var td=encodeDate(t);if((fd.getDate()+fd.getMonth())==(td.getDate()+td.getMonth())){td.setDate(td.getDate()+1);}
var y=td.getFullYear()+"";y=y.substring(4,2);/*document.getElementById('to').value=pz(td.getDate())+"/"+pz((td.getMonth()+1))+"/"+y;*/var d=getDateDiffDays(fd,td);var g=document.getElementById('nights');if(g!=null)g.innerHTML=d;var f=document.getElementById('localformat');var df="";if((f!=null)&&(f.value!="")&&(f.value!="<localformat>")){df=f.value;df=getLocaleDateString(df);}
else
{df=getLocaleDateString("");}df="dd/mm/20y";
var s=($.datepicker.formatDate(df,fd));if(document.getElementById('from0')!=null)document.getElementById('from0').innerHTML=s;var s=($.datepicker.formatDate(df,td));if(document.getElementById('to0')!=null)document.getElementById('to0').innerHTML=s;if((document.getElementById('fromttl')!=null)&&(df!=''))document.getElementById('fromttl').innerHTML='('+df+')';if((document.getElementById('tottl')!=null)&&(df!=''))document.getElementById('tottl').innerHTML='('+df+')';}}
  
  function dosearchloc(url){
   var c= document.getElementById("cc");
   var t= document.getElementById("ct");
   
   if (c.value==""){
     alert('Select country and try again');return false;
   }else
   if (t.value==""){
     alert('Select city and try again');return false;
   }
   getData4('results',url);
  }
  
 function dosearcharealoc(url){
   var c= document.getElementById("cc");
   var t= document.getElementById("ct");
   var a= document.getElementById("area");
   
   if (c.value==""){
     alert('Select country and try again');return false;
   }else
   if (t.value==""){
     alert('Select city and try again');return false;
   }else
   if (a.value==""){
     alert('Select area and try again');return false;
   } 
    
   getData4('results',url);
  }
  
  function getData5(id,url){
    if (validate3(url)==1)
    getData4(id,url);
    else return false;
  }
  function validate3(url){ 
  if (( (document.getElementById('CityAjaxH')!=null) && (document.getElementById('CityAjaxH').value.length==0) ) ||
     ( (document.getElementById('HotelName')!=null) && (document.getElementById('HotelName').value.length==0) ) )
   { 
     alert('Please specify destination and try again');
     document.getElementById('CityAjaxH').focus();
     return 0;
  }else
  if ( (document.getElementById('from') !=null)&& (document.getElementById('from').value.length==0) ){
     alert('Enter check in date');
     document.getElementById('from').focus();
     return 0;
  }else
  if ( (document.getElementById('to') !=null)&& (document.getElementById('to').value.length==0) ){
     alert('Enter check out date');
     document.getElementById('to').focus();
     return 0;
  } 
  
  //** max 28 days**/
  var d=getDateDiffDays(
                            encodeDate(document.getElementById('from').value),
                            encodeDate(document.getElementById('to').value)
                        );
  if (d>28)
  {
     alert('Maximum 28 days can be booked');
     return 0;  
  }
  
    if (document.getElementById('CityAjaxH')!=null)
  Set_Cookie( 'CityAjaxH', document.getElementById('CityAjaxH').value, '', '/', '', '' );
  
  if (document.getElementById('from')!=null)
  Set_Cookie( 'SDATEH', document.getElementById('from').value, '', '/', '', '' );
  
  if (document.getElementById('to')!=null)
  Set_Cookie( 'EDATEH', document.getElementById('to').value, '', '/', '', '' );

  ShowHide('prog',1,380,56);             
 return 1;  
}
function handleerrload(o,img)
{   
    errorload = 1;
    o.src=img.replace("_z","_b"); 
}	

function handleload(o,img)
{   if (errorload==0)
    {    
      var mi=document.getElementById("mainimg1");
      mi.className = 'mainimg';
      img = img;
      mi.src = img;
    }
    else    
    {
      errorload = 0; 

    }
}

function setNextImg(id){

    if (id=="r")
    {
        if (currentimg< (imgs.length - 1))
            currentimg = currentimg + 1;
        else  currentimg = 0;   
    }
    imageassign(imgs[currentimg]);
    
    var ic=document.getElementById("imgcount");
    if (ic!=null)
    {
       document.getElementById("imgcount").innerHTmL = (currentimg +1)+" / "+imgs.length; 
    }    


}


function setBackImg(id){
    if (id=="l")
    { 
        if (currentimg > 0)
            currentimg = currentimg - 1;
        else  currentimg = (imgs.length - 1);   
    }

    imageassign(imgs[currentimg]);
    var ic=document.getElementById("imgcount");
    if (ic!=null)
    {
       document.getElementById("imgcount").innerHTmL = (currentimg+1)+" / "+imgs.length; 
    }    

}

function setImg(id){

    currentimg = id;

    imageassign(imgs[currentimg]);

    var ic=document.getElementById("imgcount");
    if (ic!=null)
    {
       document.getElementById("imgcount").innerHTmL = (currentimg+1)+" / "+imgs.length; 
    }
    if (document.getElementById('i'+id)!=null)   
    document.getElementById('i'+id).className='imgselected';
}

function imageassign(img)
{
    var mi=document.getElementById("mainimg1");
    mi.src =  img;
    /*mi.className = 'mainimgbig';alert('3');*/
    var mi2=document.getElementById("preload");
    img =  img.replace("_b","_z");    
    mi2.src =  img ;
  
}function isMobile(){return((navigator.userAgent.match(/iPad|iPhone|iPod|mobi|Android|java|brew /i) != null) || (screen.width <= 480));}
function doM(){var v=(document.URL.substr(document.URL.indexOf('.html?m=')+8,1));if (document.URL.indexOf('.html?m=')>0) {var d=document.getElementById('hotelId');if (d!=null){document.location='http://www.lowestroomrates.com/avails/h'+v+d.value};}}function doM2(){var v=(document.URL.substr(document.URL.indexOf('.html?m=')+8,1));if (document.URL.indexOf('.html?m=')>0) {var d=document.getElementById('hotelId');if (d!=null){document.location='http://www.lowestroomrates.com/avails/h'+v+d.value};}}
function doCopyR(){ var doCopyR ='';  if (document.getElementById('doCopyR')!=null) {doCopyR=document.getElementById('doCopyR').value;} if (doCopyR!='0') try {document.body.innerHTML = document.body.innerHTML.replace(' 2015 ', ' '+new Date().getFullYear()+' ');document.body.innerHTML = document.body.innerHTML.replace(' 2014 ', ' '+new Date().getFullYear()+' ');}catch(err){}} doCopyR();function dosubmitFilForm(v){var hn=document.getElementById('hotelname');if (hn!=null) hn.value=v;submitFilForm(9,'');}function dosubmitFilFormlatlong(la,lo){var lat=document.getElementById('latitude');if (lat!=null) lat.value=la;var lon=document.getElementById('longitude');if (lon!=null) lon.value=lo;submitFilForm(9,'');}