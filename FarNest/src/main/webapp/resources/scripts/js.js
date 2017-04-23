Date.prototype.getMonthName = function() {
var m = ['Jan','Feb','Mar','Apr','May','Jun','Jul',
'Aug','Sep','Oct','Nov','Dec'];
return m[this.getMonth()];
} 
Date.prototype.getDayName = function() {
var d = ['Sun','Mon','Tue','Wed',
'Thu','Fri','Sat'];
return d[this.getDay()];
}

var currencyLocal="";


function setCheckinmonthyear(idd2,id){

var m= trim(id.substring(0,2));
var y= id.substring(2,4);
 
if (m.substring(0,1)=="0") { m = m.substring(1,2);}
 
var mm= parseInt(m);


var today = new Date();

var cm = ((today.getMonth()+1) == mm); 
var opts='';
var tdd=today.getDate();
var optobj1 = document.getElementById('cidat');
var optobj2 = document.getElementById('codat');
var optobj3 = document.getElementById('cimonthyear');
var optobj4 = document.getElementById('comonthyear');

if ((idd2=="ci")||(idd2==""))
{
  remSelOpt(optobj1);
  var numdays=monthDays(mm);  
  setDays(optobj1,numdays,cm,tdd,y,m);
}

if ((idd2=="co")||(idd2==""))
{
  remSelOpt(optobj2);
  var numdays=monthDays(mm);  
  setDays(optobj2,numdays,cm,tdd,y,m);
  if (idd2=="co")
  {
     var m1=optobj3.value.substring(0,2);y1=optobj3.value.substring(2,4);
     var m2=optobj4.value.substring(0,2);y2=optobj4.value.substring(2,4);
     var d1 = new Date((20+y1), (m1-1), optobj1.value);
     var d2 = new Date((20+y2), (m2-1), optobj2.value);
     
     if (d1>d2){} else if (d1<d2){}  else 
     {
       d1.setDate(d1.getDate()+1);
       var newday= d1.getDate();
       if (newday <10) newday = "0"+newday;
       optobj2.value = newday;
     }
     
  }
  /* make 1 day after of checkoout day */
  
}
/*
if(optobj3.value == optobj4.value){
 if (optobj1.value>= optobj2.value){
   setDays(optobj1,numdays,cm,tdd,y,m);
   optobj2.options[0]=null;//remove first
   
   
 }
}else
if(optobj3.value > optobj4.value){
 optobj4.value = optobj3.value;
 if (optobj1.value>= optobj2.value){
   setDays(optobj2,numdays,cm,tdd,y,m);
   optobj2.options[0]=null;//remove first
 }
}
*/
}

function setCheckoutmonthyear(id){

var m= trim(id.substring(0,2));
var y= id.substring(2,4);
 
if (m.substring(0,1)=="0") { m = m.substring(1,2);}
 
var mm= parseInt(m);


var today = new Date();

var cm = ((today.getMonth()+1) == mm); 
var opts='';
var tdd=today.getDate();
var optobj1 = document.getElementById('cidat');
var optobj2 = document.getElementById('codat');
var optobj3 = document.getElementById('cimonthyear');
var optobj4 = document.getElementById('comonthyear');

remSelOpt(optobj2);
var numdays=monthDays(mm);  
setDays(optobj2,numdays,cm,tdd,y,m);


/*
if(optobj3.value == optobj4.value){
 if (optobj1.value>= optobj2.value){
   setDays(optobj2,numdays,cm,tdd,y,m);
   optobj2.options[0]=null;//remove first
 }
}else
if(optobj3.value > optobj4.value){
 optobj3.value = optobj4.value;
 if (optobj1.value>= optobj2.value){
   setDays(optobj2,numdays,cm,tdd,y,m);
   optobj2.options[0]=null;//remove first
 }
}*/

}

function setCheckinday(id){

  var today = new Date();
  //setmonthdays
  
  /*if (ss==""){
        today.setDate(today.getDate()+1);
        /*ss = today.getDate() + "/" +(today.getMonth()+1) + "/" +  today.getFullYear();
        var tod="" + today.getDate(); if ((tod.length)==1){ tod="0"+tod;}
        ss = tod+"-"+getMonMMM(today.getMonth()+1) +"-"+(today.getFullYear() + '').substring(2, 4);
  }*/
}

function getMonthDat(id){
 var m =getMonMM(id.substring(0,3));
 return m;
}

function getMonMM(id){

 var m = id.toLowerCase();
 if (m=="jan") return 1;else
 if (m=="feb") return 2;else
 if (m=="mar") return 3;else
 if (m=="apr") return 4;else
 if (m=="may") return 5;else
 if (m=="jun") return 6;else
 if (m=="jul") return 7;else
 if (m=="aug") return 8;else
 if (m=="sep") return 9;else
 if (m=="oct") return 10;else
 if (m=="nov") return 11;else
 if (m=="dec") return 12;
}

function getDayName(id){
 
 var m = id;
 if (m==1) return "Mon";else
 if (m==2) return "Tue";else
 if (m==3) return "Wed";else
 if (m==4) return "Thu";else
 if (m==5) return "Fr";else
 if (m==6) return "Sat";else
 if (m==0) return "Sun";

}

function getDayFirstofMonth(m){
var d = new Date(2013, (m-1), 1);
var dd=d.getDay();
d=null;
return dd;

}

function remSelOpt(id)   
{   
 len1 = id.options.length;   
 for (i=0;i<len1 ;i++ )   
 {   
   id.options[0] = null;     
 }   
  
}  

function setDays(id,numdays,cm,tdd,y,m){
 remSelOpt(id);

  for ( i = 1; i < (numdays+1); i++ )
  {
    td = new Date((2000+y),(m-1),(i));
    v=""+i;
    if (v.length==1) {v="0"+i;}
    
    if (cm){/*current month*/
      if (tdd <= (i))
      { 
       id.options[id.options.length] = new Option(td.getDayName() + " " + i, v);
      }
    }else
    {
       id.options[id.options.length] = new Option(td.getDayName() + " " + i, v);
    }
    td=null;
    
  } 
}

function monthDays(mm) {
if (mm==1) {return   31;}else
if (mm==2) {return   28;}else
if (mm==3) {return   31;}else
if (mm==4) {return   30;}else
if (mm==5) {return   31;}else
if (mm==6) {return   30;}else
if (mm==7) {return   31;}else
if (mm==8) {return   31;}else
if (mm==9) {return   30;}else
if (mm==10){return   31;}else
if (mm==11){return   30;}else
if (mm==12){return   31;}
}

function trim(str) {
        return str.replace(/^\s+|\s+$/g,"");
}

function indec(rooms,rate,price,id,idd,m){
 var o=document.getElementById(id);
 var r=document.getElementById(rate);
 var p=document.getElementById(price);
 var rs=document.getElementById(rooms);
 
  var cp=0;var v = ""; 
 if (r!=null) {
   cp = r.value ;
 }

 
 if (o!=null){
   v = o.innerHTML ;
  var n = 0;
  if (v!="") n = parseInt(v);
  
  
  if ((idd=='i') && (n<m) && (n<5))
    n = n + 1;
  else
  if ((idd=='d') && (n>1))
    n = n - 1;
    
  if (n>0)
  {  
    cp = (cp * n);    
   }else
   {
  }
  o.innerHTML=n;   
  rs.value=n;   
  p.innerHTML=parseFloat(cp).toFixed(2);   
    
 }
}

function showhideSortOpt(id){
 var so=document.getElementById(id);
 if (so!=null){
   if ( (so.style.display=="none") ||((so.style.display=="")) )
   { 
        so.style.display="block";
        var i= document.getElementById("i"+id);
        if (i!=null)    {i.src="../../images/u3.png"}
   }
   else                          
   { 
        so.style.display="none";
        var i= document.getElementById("i"+id);
        if (i!=null)    {i.src="../../images/d3.png"}
        
   }
 }
 
 
}



function setRooms(R){
  var R1 = document.getElementById("R1");
  var R2 = document.getElementById("R2");
  var R3 = document.getElementById("R3");
  var R4 = document.getElementById("R4");

  var R1A = document.getElementById("room1");
  var R2A = document.getElementById("room2");
  var R3A = document.getElementById("room3");
  var R4A = document.getElementById("room4");

  var R1C = document.getElementById("R1C");
  var R2C = document.getElementById("R2C");
  var R3C = document.getElementById("R3C");
  var R4C = document.getElementById("R4C");
  var grooms = document.getElementById("grooms");
  if (grooms!=null)
  {
   if(document.getElementById("rooms")!=null)
    var r= document.getElementById("rooms").value;
   else
   if(document.getElementById("Select1")!=null)
    var r= document.getElementById("Select1").value;
   var rs="";    
   if (r==1){rs=      "1&nbsp;room,";}else
   if (r>1) {rs=r+"&nbsp;rooms,";}
       
    if (document.getElementById("grooms2")!=null)   
    document.getElementById("grooms2").innerHTML = rs;
    grooms.innerHTML = rs;
  }

if ( (R==1)&&(R1!=null) ){  
  R1.style.display = "block"; 
  R2.style.display = "none"; R2A.value=1;R2C.value=0;
  R3.style.display = "none"; R3A.value=1;R3C.value=0;
  R4.style.display = "none"; R4A.value=1;R4C.value=0;
}else
if ((R==2)&&(R1!=null)){
  R1.style.display = "block"; 
  R2.style.display = "block";
  R3.style.display = "none"; R3A.value=1;R3C.value=0; 
  R4.style.display = "none"; R4A.value=1;R4C.value=0; 
}else
if ((R==3)&&(R1!=null)){
  R1.style.display = "block"; 
  R2.style.display = "block"; 
  R3.style.display = "block"; 
  R4.style.display = "none";R4A.value=1;R4C.value=0;  

}else
if ((R==4)&&(R1!=null)){
  R1.style.display = "block"; 
  R2.style.display = "block"; 
  R3.style.display = "block"; 
  R4.style.display = "block"; 
}
setAdults();
setChilds()
}

function setAges(age,id){
  var CA11 = document.getElementById(id+"11");
  var CA12 = document.getElementById(id+"12");
  var CA13 = document.getElementById(id+"13");
  var CAGE = document.getElementById("cages");

if (age==0){  
   
  CAGE.style.display = "none";       
  CA11.style.display = "none";CA11.value='';
  CA12.style.display = "none";CA12.value='';
  CA13.style.display = "none";CA13.value=''; 
}else
if (age==1){
  CAGE.style.display = "block";       
  CA11.style.display = "block"; 
  CA12.style.display = "none";CA12.value='';
  CA13.style.display = "none";CA13.value='';  
}else
if (age==2){
  CAGE.style.display = "block";
  CA11.style.display = "block";
  CA12.style.display = "block";
  CA13.style.display = "none";CA13.value='';  

}else
if (age==3){
  CAGE.style.display = "block";
  CA11.style.display = "block"; 
  CA12.style.display = "block"; 
  CA13.style.display = "block";  

}
setChilds();
}

function setAdults(){
var adults = document.getElementById("gadults");
var r1 = ''; var r2 =''; var r3 =''; var r4 = '';
if (document.getElementById("room1")!=null)
{r1 = document.getElementById("room1").value; }

if (document.getElementById("room2")!=null)
{r2 = document.getElementById("room2").value; }

if (document.getElementById("room3")!=null)
{r3 = document.getElementById("room3").value; }

if (document.getElementById("room4")!=null)
{r4 = document.getElementById("room4").value; }
var ta=0;
if (document.getElementById("rooms")!=null)
{var rooms = document.getElementById("rooms").value;}
else
if (document.getElementById("Select1")!=null)
{var rooms = document.getElementById("Select1").value;}


if (rooms==1) {ta = parseInt(r1);} else
if (rooms==2) {ta = parseInt(r1) + parseInt(r2);}else
if (rooms==3) {ta = parseInt(r1) +parseInt(r2) +parseInt(r3);} else
if (rooms==4) {ta = parseInt(r1) +parseInt(r2) +parseInt(r3) +parseInt(r4);}

if (adults!=null){
 var ad="";
 if (ta==1){ad=    "1&nbsp;adult";}else
 if (ta>1) {ad=ta+"&nbsp;adults";}
  
   if (document.getElementById("gadults2")!=null)
    document.getElementById("gadults2").innerHTML = ad;
    adults.innerHTML = ad;
 }

}

function setChildss(){

var childs = document.getElementById("childs");
var r1 = ''; var r2 =''; var r3 =''; var r4 = '';
if (document.getElementById("R1C")!=null)
{r1 = document.getElementById("R1C").value; }

if (document.getElementById("R2C")!=null)
{r2 = document.getElementById("R2C").value;} 

if (document.getElementById("R3C")!=null)
{r3 = document.getElementById("R3C").value;} 

if (document.getElementById("R4C")!=null)
{r4 = document.getElementById("R4C").value; }
var ta=0;
if (document.getElementById("rooms")!=null)
{var rooms = document.getElementById("rooms").value;}
else
if (document.getElementById("Select1")!=null)
{var rooms = document.getElementById("Select1").value;}

if (rooms==1) {ta = parseInt(r1);} else
if (rooms==2) {ta = parseInt(r1) + parseInt(r2);}else
if (rooms==3) {ta = parseInt(r1) +parseInt(r2) +parseInt(r3);} else
if (rooms==4) {ta = parseInt(r1) +parseInt(r2) +parseInt(r3) +parseInt(r4);}

if (childs!=null)
{ 
 var cn="";
 if (ta==1){cn=    ",1&nbsp;child";}else
 if (ta>1) {cn=",&nbsp;"+ta+"&nbsp;children";}
 childs.innerHTML = cn;
 if (document.getElementById("childs2")!=null){
   document.getElementById("childs2").innerHTML = cn;
 } 
}

}

function submitmFormDataUrl(url,id) 
{
  var q= getFormFields(id);
  window.location = url +"&"+ q;
  
}

function submitmFormData(id,hotelid) {
        /*if ((o!=null) && (o.value=="") )*/
        var frm = document.getElementById(id); 

        var o = document.getElementById('CityAjaxH');
        var cim,com,cid,cod = 0;
        if ( document.getElementById('cimonthyear')!=null) {cim = document.getElementById('cimonthyear').value}
        if ( document.getElementById('cidat')!=null) {cid = document.getElementById('cidat').value}
        if ( document.getElementById('comonthyear')!=null) {com = document.getElementById('comonthyear').value}
        if ( document.getElementById('codat')!=null) {cod = document.getElementById('codat').value}
        if ((cim+cid)>=(com+cod))
        {
          if(document.getElementById('validty')!=null) {document.getElementById('validty').style.display='block';return false;}
        }
       
        if(isDigit(hotelid)){
            var url = '../src/index.php?act=dodetails&supplierType=E'+getFormFields(id)+'&hotelId='+hotelid+'&docache=0';    
            window.location= url;
        
            /*window.location='../src/index.php?act=dodetails&hotelId='+hotelid+'&supplierType=E&local=&roominfo=&rooms=';*/
            return false;
        }       
       
        if (((o!=null) && (o.value=="") )||(o.value.toLowerCase()=="around current location"))
        {       
            var i2 = document.getElementById("smallprogimg2"); 
            if (i2!=null) i2.style.display = 'block';
            senddeflocRequest4('searchfrm');
            
        }else
        {
            
            
            if (frm!=null)
            {
            var i1 = document.getElementById("smallprogimg1"); 
            if (i1!=null) i1.style.display = 'block';
            
                frm.submit();
            }
        }  
}

function submitmFormDataxx(id,hotelid) {
        /*if ((o!=null) && (o.value=="") )*/
        var frm = document.getElementById(id); 
        if(isDigit(hotelid)){
            var url = '../src/index.php?act=dodetails&supplierType=E'+getFormFields(id)+'&hotelId='+hotelid+'&docache=0';    
            window.location= url;
        
            /*window.location='../src/index.php?act=dodetails&hotelId='+hotelid+'&supplierType=E&local=&roominfo=&rooms=';*/
            return false;
        }
        var o = document.getElementById('CityAjaxH');
        if ( (o!=null) && (o.value=="") )
        {
          if(document.getElementById('validty2')!=null) {document.getElementById('validty2').style.display='block';return false;}
        }else
        {
          if(document.getElementById('validty2')!=null) {document.getElementById('validty2').style.display='none';}
        }        
        var cim,com,cid,cod = 0;
        if ( document.getElementById('cimonthyear')!=null) {cim = document.getElementById('cimonthyear').value}
        if ( document.getElementById('cidat')!=null) {cid = document.getElementById('cidat').value}
        if ( document.getElementById('comonthyear')!=null) {com = document.getElementById('comonthyear').value}
        if ( document.getElementById('codat')!=null) {cod = document.getElementById('codat').value}
        if ((cim+cid)>=(com+cod))
        {
          if(document.getElementById('validty')!=null) {document.getElementById('validty').style.display='block';return false;}
        }else
        {
          if(document.getElementById('validty')!=null) {document.getElementById('validty').style.display='none';}
        }
    
       
        if (((o!=null) && (o.value=="") )||(o.value.toLowerCase()=="around current location"))
        {       
            var i2 = document.getElementById("smallprogimg2"); 
            if (i2!=null) i2.style.display = 'block';
            senddeflocRequest4('searchfrm');
            
        }else
        {
            
            
            if (frm!=null)
            { 
            var i1 = document.getElementById("smallprogimg1"); 
            if (i1!=null) i1.style.display = 'block';
            
                frm.submit();
            }
        }  
}

function submitmFormDataxx0(id,hn,search) {
        /*if ((o!=null) && (o.value=="") )*/
        var c2= document.getElementById("CityAjaxH2");
        if((c2!=null) && (isDigit(c2.value))){
            var url = '../src/index.php?act=dodetails&supplierType=E'+getFormFields(id)+'&hotelId='+hotelid+'&docache=0';    
            window.location= url;
        
            /*window.location='../src/index.php?act=dodetails&hotelId='+hotelid+'&supplierType=E&local=&roominfo=&rooms=';*/
            return false;
        }
        var frm = document.getElementById(id); 
        var hname= document.getElementById("hotelname"); 
        if (hname!=null) hname.value= hn;               
        var o = document.getElementById('CityAjaxH');
        if (o!=null) o.value = search;
        if ( (o!=null) && (o.value=="") )
        {
          if(document.getElementById('validty2')!=null) {document.getElementById('validty2').style.display='block';return false;}
        }else
        {
          if(document.getElementById('validty2')!=null) {document.getElementById('validty2').style.display='none';}
        }        
        var cim,com,cid,cod = 0;
        if ( document.getElementById('cimonthyear')!=null) {cim = document.getElementById('cimonthyear').value}
        if ( document.getElementById('cidat')!=null) {cid = document.getElementById('cidat').value}
        if ( document.getElementById('comonthyear')!=null) {com = document.getElementById('comonthyear').value}
        if ( document.getElementById('codat')!=null) {cod = document.getElementById('codat').value}
        if ((cim+cid)>=(com+cod))
        {
          if(document.getElementById('validty')!=null) {document.getElementById('validty').style.display='block';return false;}
        }else
        {
          if(document.getElementById('validty')!=null) {document.getElementById('validty').style.display='none';}
        }
    
       
        if (((o!=null) && (o.value=="") )||(o.value.toLowerCase()=="around current location"))
        {       
            var i2 = document.getElementById("smallprogimg2"); 
            if (i2!=null) i2.style.display = 'block';
            senddeflocRequest4('searchfrm');
            
        }else
        {
            
            
            if (frm!=null)
            { 
            var i1 = document.getElementById("smallprogimg1"); 
            if (i1!=null) i1.style.display = 'block';
            
                frm.submit();
            }
        }  
}

function submitFormData23(frmid,url) 
{  
  url='src/index.php?act=searchbb&'+url;
  window.location = url;  
}

function setRooms(R){//***//
  var R1 = document.getElementById("R1");
  var R2 = document.getElementById("R2");
  var R3 = document.getElementById("R3");
  var R4 = document.getElementById("R4");

  var R1A = document.getElementById("room1");
  var R2A = document.getElementById("room2");
  var R3A = document.getElementById("room3");
  var R4A = document.getElementById("room4");

  var R1C = document.getElementById("R1C");
  var R2C = document.getElementById("R2C");
  var R3C = document.getElementById("R3C");
  var R4C = document.getElementById("R4C");
  var grooms = document.getElementById("grooms");
  if (grooms!=null)
  {
   if(document.getElementById("rooms")!=null)
    var r= document.getElementById("rooms").value;
   else
   if(document.getElementById("Select1")!=null)
    var r= document.getElementById("Select1").value;
   var rs="";    
   if (r==1){rs=      "1&nbsp;room,";}else
   if (r>1) {rs=r+"&nbsp;rooms,";}
       
    if (document.getElementById("grooms2")!=null)   
    document.getElementById("grooms2").innerHTML = rs;
    grooms.innerHTML = rs;
  }

if ( (R==1)&&(R1!=null) ){  
  R1.style.display = "block"; 
  if (R2!=null){R2.style.display = "none"; if (R2A!=null) R2A.value=1; if (R2C!=null) R2C.value=0;}
  if (R3!=null){R3.style.display = "none"; if (R3A!=null) R3A.value=1; if (R3C!=null) R3C.value=0;}
  if (R4!=null){R4.style.display = "none"; if (R4A!=null) R4A.value=1; if (R4C!=null) R4C.value=0;}
}else
if ((R==2)&&(R1!=null)){
  R1.style.display = "block"; 
  if (R2!=null){R2.style.display = "block";}
  if (R3!=null){R3.style.display = "none"; if (R3A!=null) R3A.value=1; if (R3C!=null) R3C.value=0;}
  if (R4!=null){R4.style.display = "none"; if (R4A!=null) R4A.value=1; if (R4C!=null) R4C.value=0;}
}else
if ((R==3)&&(R1!=null)){
  R1.style.display = "block"; 
  if (R2!=null){R2.style.display = "block";} 
  if (R3!=null){R3.style.display = "block";} 
  if (R4!=null){R4.style.display = "none"; if (R4A!=null) R4A.value=1; if (R4C!=null) R4C.value=0;}

}else
if ((R==4)&&(R1!=null)){
  R1.style.display = "block"; 
  if (R2!=null){R2.style.display = "block";} 
  if (R3!=null){R3.style.display = "block";} 
  if (R4!=null){R4.style.display = "block";} 
}
setAdults();
setChilds();
}

  
function setAges(age,id){
  var CA11 = document.getElementById(id+"11");
  var CA12 = document.getElementById(id+"12");
  var CA13 = document.getElementById(id+"13");
  var CAGE = document.getElementById("cages");

if (age==0){  
  if (CAGE!=null){CAGE.style.display = "none";       }
  if (CA11!=null){CA11.style.display = "none";CA11.value='';}
  if (CA12!=null){CA12.style.display = "none";CA12.value='';}
  if (CA13!=null){CA13.style.display = "none";CA13.value=''; }
}else
if (age==1){
  if (CAGE!=null){CAGE.style.display = "block";}
  if (CA11!=null){CA11.style.display = "block"; }
  if (CA12!=null){CA12.style.display = "none";CA12.value='';}
  if (CA13!=null){CA13.style.display = "none";CA13.value='';  }
}else
if (age==2){
  if (CAGE!=null){CAGE.style.display = "block";}
  if (CA11!=null){CA11.style.display = "block";}
  if (CA12!=null){CA12.style.display = "block";}
  if (CA13!=null){CA13.style.display = "none";CA13.value='';  }

}else
if (age==3){
  if (CAGE!=null){CAGE.style.display = "block";}
  if (CA11!=null){CA11.style.display = "block"; }
  if (CA12!=null){CA12.style.display = "block"; }
  if (CA13!=null){CA13.style.display = "block";  }

}
setChilds();
}

function setAdults(){
var adults = document.getElementById("gadults");
var r1 = ''; var r2 =''; var r3 =''; var r4 = '';
if (document.getElementById("room1")!=null)
{r1 = document.getElementById("room1").value; }

if (document.getElementById("room2")!=null)
{r2 = document.getElementById("room2").value; }

if (document.getElementById("room3")!=null)
{r3 = document.getElementById("room3").value; }

if (document.getElementById("room4")!=null)
{r4 = document.getElementById("room4").value; }
var ta=0;
if (document.getElementById("rooms")!=null)
{var rooms = document.getElementById("rooms").value;}
else
if (document.getElementById("Select1")!=null)
{var rooms = document.getElementById("Select1").value;}


if (rooms==1) {ta = parseInt(r1);} else
if (rooms==2) {ta = parseInt(r1) + parseInt(r2);}else
if (rooms==3) {ta = parseInt(r1) +parseInt(r2) +parseInt(r3);} else
if (rooms==4) {ta = parseInt(r1) +parseInt(r2) +parseInt(r3) +parseInt(r4);}

if (adults!=null){
 var ad="";
 if (ta==1){ad=    "1&nbsp;adult";}else
 if (ta>1) {ad=ta+"&nbsp;adults";}
  
   if (document.getElementById("gadults2")!=null)
    document.getElementById("gadults2").innerHTML = ad;
    adults.innerHTML = ad;
 }

}

function setChilds(){
/****/
var childs = document.getElementById("childs");
var r1 = ''; var r2 =''; var r3 =''; var r4 = '';
if (document.getElementById("R1C")!=null)
{r1 = document.getElementById("R1C").value; }

if (document.getElementById("R2C")!=null)
{r2 = document.getElementById("R2C").value;} 

if (document.getElementById("R3C")!=null)
{r3 = document.getElementById("R3C").value;} 

if (document.getElementById("R4C")!=null)
{r4 = document.getElementById("R4C").value; }
var ta=0;
if (document.getElementById("rooms")!=null)
{var rooms = document.getElementById("rooms").value;}
else
if (document.getElementById("Select1")!=null)
{var rooms = document.getElementById("Select1").value;}

if (rooms==1) {ta = parseInt(r1);} else
if (rooms==2) {ta = parseInt(r1) + parseInt(r2);}else
if (rooms==3) {ta = parseInt(r1) +parseInt(r2) +parseInt(r3);} else
if (rooms==4) {ta = parseInt(r1) +parseInt(r2) +parseInt(r3) +parseInt(r4);}

for(i=(rooms);i<5;i++){
 for(j=0;j<3;j++){
   var s = "R";s=s+(i)+"C1"+(j+1);
   var o = document.getElementById(s);
   if ((o!=null)&&(i!=rooms)) {o.style.display='none';}
 }  
}

if (childs!=null)
{ 
 var cn="";
 if (ta==1){cn=    ",1&nbsp;child";}else
 if (ta>1) {cn=",&nbsp;"+ta+"&nbsp;children";}
 childs.innerHTML = cn;
 if (document.getElementById("childs2")!=null){
   document.getElementById("childs2").innerHTML = cn;
 } 
}

}

      function isDigit(v)
      {
        if (isNaN(v)) return false;
        if (v=="") return false;
        for ( i = 0; i < v.length; i++ ){        
         var charCode = v.charCodeAt(i);
         if ( (charCode < 47 || charCode > 58))
            return false;
        }
         return true;
      } 
      
function datedlg2(id,i){
 if (i=="i")
 {
   var s1=document.getElementById('cimonthyear').value;
   var year='20'+s1.substring(2);
   var month=s1.substring(0,2);
   var day=document.getElementById('cidat').value;   
   var d= new Date(year, (month - 1), day, 0, 0, 0, 0); 
   var s= enspace(d.getDayName()+', '+d.getDate()+' '+d.getMonthName()+' '+d.getFullYear()); 
   if (document.getElementById('cidisp')!=null) 
   document.getElementById('cidisp').innerHTML = s;
 }else
  if (i=="o")
 {
   var s1=document.getElementById('comonthyear').value;
   var year='20'+s1.substring(2);
   var month=s1.substring(0,2);
   var day=document.getElementById('codat').value;   
   var d= new Date(year, (month - 1), day, 0, 0, 0, 0);  
   var s=enspace(d.getDayName()+', '+d.getDate()+' '+d.getMonthName()+' '+d.getFullYear());
   if (document.getElementById('codisp')!=null) 
   document.getElementById('codisp').innerHTML = s;
 }
 
 
 datedlg(id);
}
      
function datedlg3(id)
{
  var r=document.getElementById('rooms').value;
  var a= 0;
  if (r==1)  
   a= parseInt(document.getElementById('room1').value) ;
  else 
  if (r==2)   
    a = parseInt(document.getElementById('room1').value) + parseInt(document.getElementById('room2').value) ;
  else
  if (r==3)     
    a = parseInt(document.getElementById('room1').value) + parseInt(document.getElementById('room2').value) + parseInt(document.getElementById('room3').value) ;
  else
  if (r==4) 
    a = parseInt(document.getElementById('room1').value) + parseInt(document.getElementById('room2').value) + parseInt(document.getElementById('room3').value) + parseInt(document.getElementById('room4').value);
  
  if (r==1) r="(1 room)"; else r="("+r+" rooms)";
  
  if (a==1) a="1 adult"; else a=a+" adults";
  var c= parseInt(document.getElementById('R1C').value) + parseInt(document.getElementById('R2C').value) + parseInt(document.getElementById('R3C').value) +parseInt(document.getElementById('R4C').value);
  if (c>0)
  {
    if (c==1) c="1 child"; else c=c+" children";
  }else c="";
  r=a+" "+c +" " + r;
  document.getElementById('paxd').innerHTML = enspace(r);
  datedlg(id);
}      
      
function datedlg(id)
{
  var o=document.getElementById(id);
  var i=document.getElementById(id+"img");
  if (o!=null)
  {
    if (o.style.display=="none") 
    { 
      o.style.display="block";
      if (i!=null)
      {
        i.height=17;i.width=10;
        i.src="../../images/d.png"
      }
    }
    else 
    {
      o.style.display="none";
      if (i!=null)
      {
        i.height=17;i.width=10;
        i.src="../../images/r.png"
      }	      
        
    }
  }
}      
	
	
function initparam()
{  
 
  var ci=new Date();
  ci.setDate(ci.getDate()+2);
  
  var cidat1=""; var codat1=""; var cimony=""; var comony=""; 
  if (document.getElementById('cidat1')!=null) cidat1 = document.getElementById('cidat1').value;
  if (document.getElementById('codat1')!=null) codat1 = document.getElementById('codat1').value;
  if (document.getElementById('cimony')!=null) cimony = document.getElementById('cimony').value;
  if (document.getElementById('comony')!=null) comony = document.getElementById('comony').value;
  
 
  
 // if (document.getElementById('cidisp')!=null) 
  { 
    if (document.getElementById('cidisp')!=null) 
    document.getElementById('cidisp').innerHTML = enspace(ci.getDayName()+', '+ci.getDate()+' '+ci.getMonthName()+' '+ci.getFullYear());
    var y=ci.getFullYear()+"";
    y=(ci.getMonth()+1)+""+y.substring(2); if (cimony!="") y=cimony; if (y.length=3) y = '0'+y;
    if (document.getElementById('cimonthyear'))
    { 
        var j=document.getElementById('cimonthyear').length;
        for(i=0;i<j;i++)
        {  
            if((document.getElementById('cimonthyear').options[i].value) == (y))
            { 
              document.getElementById('cimonthyear').selectedIndex = i;
              setCheckinmonthyear('',document.getElementById('cimonthyear').value);
              break;
            }
        }
        if (i<=j) {setCheckinmonthyear('',document.getElementById('cimonthyear').value);}
    }    
    if (document.getElementById('cidat'))
    {   var cd=ci.getDate(); if (cidat1!="") cd = cidat1;
        var j=document.getElementById('cidat').length;
        for(i=0;i<j;i++)
        {
            if(document.getElementById('cidat').options[i].value == cd)
            {
              document.getElementById('cidat').selectedIndex = i;break;
            }
        }      
    } 
    
  }
  
  var co=new Date(); 
  co.setDate(co.getDate()+3);  
 // if (document.getElementById('codisp')!=null) 
  { 
    if (document.getElementById('codisp')!=null) 
    document.getElementById('codisp').innerHTML = enspace(co.getDayName()+', '+co.getDate()+' '+co.getMonthName()+' '+co.getFullYear());
    var y=co.getFullYear()+""; 
    y=(co.getMonth()+1)+""+y.substring(2);if (comony!="") y=comony;if (y.length=3) y = '0'+y;
    if (document.getElementById('comonthyear'))
    {
        var j=document.getElementById('comonthyear').length;
        for(i=0;i<j;i++)
        { 
            if((document.getElementById('comonthyear').options[i].value) == (y))
            {
              document.getElementById('comonthyear').selectedIndex = i;
              setCheckoutmonthyear(document.getElementById('comonthyear').value);
              break;
            }
        }  
        if (i<=j) {setCheckoutmonthyear(document.getElementById('comonthyear').value);}    
    }  
    if (document.getElementById('codat'))
    {   var cod=co.getDate(); if (codat1!="") cod = codat1;
        var j=document.getElementById('codat').length;
        for(i=0;i<j;i++)
        {
            if(document.getElementById('codat').options[i].value == cod)
            {
              document.getElementById('codat').selectedIndex = i;break;
            }
        }      
    } 
    
  }
 
    var bookpax="";if (document.getElementById('bookpax')!=null) bookpax = document.getElementById('bookpax').value;
    var Variables = bookpax.split("&");
    var rn = 0;
    for(i=0; i<Variables.length; i++){
      
      var r=Variables[i];
      if (r!="")
      {
        var p = r.split("=");var pn=p[1].split(",");
        rn = rn + 1;
        document.getElementById(('room'+rn)).selectedIndex = (pn[0] - 1);
        document.getElementById('R'+rn+'C').selectedIndex = (pn.length - 1);
        for(j=1; j<pn.length; j++){ /*setAges((pn.length - 1),'R'+j+'C');*/
          document.getElementById('R'+rn+'C1'+j).value = pn[j];
        }
        
        
      } 

    }
    if (rn==0)  rn=1;
    if (document.getElementById('rooms')!=null) document.getElementById('rooms').selectedIndex = (rn-1);
    setRooms(rn);
  
  
}	



function getAddr(v)
{   
    var loc="";var sub="";var city="";var state="";var country="";
    var attrValue="";
    var ex=0;
    var o =eval("("+v+")");
    if(o.status=="OK")
    {
        var o1=  o.results;
        for(var i=0;i<o1.length;i++)
        {
            var obj = o1[i];
            for(var key in obj)
            {
                var attrName = key;       
                var attrValue=obj[key];
                    if (attrName=="address_components")
                    {  
                       for(var j=0;j<attrValue.length;j++)
                       {
                            var oe= attrValue[j];
                            var t=oe.types[0].toLowerCase();
                            
                            if (t=="locality") 
                            {
                              loc=oe.long_name;
                            }else                            
                            if (t=="sublocality") 
                            {
                              sub=oe.long_name;
                            }else
                            if (t=="administrative_area_level_2") 
                            {
                              city=oe.long_name;
                            }else
                            if (t=="administrative_area_level_1") 
                            {
                              state=oe.long_name;
                            }
                            if (t=="country") 
                            {
                              country=oe.long_name;
                            }                            
                            
                            for(var key in oe)
                            {
                             // alert(key+":"+oe[key]);
                            }
                            ex=1;
                       }
                        
                    }
               // if (ex==1)break;
            }
            //if (ex==1)break;
        }
    }
        
    if (country!="")
      attrValue = country;
    if (state!="")
      attrValue = state +", "+attrValue;
    if (city!="")
      attrValue = city +", "+attrValue;
    if (sub!="")
      attrValue = sub +", "+attrValue;
    if (loc!="")
      attrValue = loc+", "+attrValue;
      
    return attrValue;
}
function SendRequest(url,id){
        if (window.XMLHttpRequest)  
        {  xmlhttp=new XMLHttpRequest();  }  
        else  
        {  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");  }  
        xmlhttp.onreadystatechange=function()  
        {   
            if (xmlhttp.readyState==4 && xmlhttp.status==200)  
            {  
                var v= xmlhttp.responseText;
                loc=getAddr(v);
                /*GetVals2(escapeHTML(loc));*/
                if (loc!="") 
                {
                    var d=GetQueryFieldValue("def",url);
                    var frm = document.getElementById(id); 
                    if (frm!=null)
                    {
                        frm.def = d;
                        if (frm.CityAjaxH!=null)
                        {
                          frm.CityAjaxH.value = loc;
                        }
                        searchfrm.submit();
                    }    
                    
                }else
                {
                  var o = document.getElementById('errmsg');
                  /*if (o!=null) {o.innerHTML='Still trying to retrieve location. Otherwise specify your location and try again';}
                  else
                  alert('Still trying to retrieve location. Otherwise specify your location and try again');
                  */
                  return false;
                }
            }else
            {/*
                  var o = document.getElementById('errmsg');
                  if (o!=null) {o.innerHTML='Still trying to retrieve location. Otherwise specify your location and try again';}
                  else
                  alert('Still trying to retrieve location. Otherwise specify your location and try again');
                  */
               return false;
            } 
       }  
  
    xmlhttp.open("POST",url,true);  
    
    
    
    xmlhttp.send();
}





  function senddeflocRequest(id) {

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);
                                         
       var url='http://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=false';                                        
       GetVals(url);
               
        
      });
    }
  }
  
    function senddeflocRequest2(id) {

   
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);
       var url='http://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=false';                                        
       SendRequest(url,'searchfrm');
               
        
      });
    }
  }	 
  

function senddeflocRequest4(id) 
{
    if(navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);
       var url='http://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=false';                                        
       SendRequest(url+'&def=1','searchfrm');                       
      }, function()
      {
        var i2 = document.getElementById("smallprogimg2"); 
        if (i2!=null) i2.style.display = 'none';
      
        handleNoGeolocation(true); 
      });
    }else
    {
        var i2 = document.getElementById("smallprogimg2"); 
        if (i2!=null) i2.style.display = 'none';
    
      alert('Your device does not support this functionality. Specify your location and press search button.'); 
    }
}	   
  
  function handleNoGeolocation(errorFlag) 
  {  
        var i2 = document.getElementById("smallprogimg2"); 
        if (i2!=null) i2.style.display = 'none';
  
     if (errorFlag)
     {
          alert('Unable to obtain location. Please check your privacy and GPS settings.');
     } else 
     {     
          alert('Your device does not support this functionality. Specify your location and press search button.');
     }
  }    


function RelpaceAll(toke,newtoken,str)
{
  while (str.indexOf(toke)>-1){
           str = str.replace(toke,newtoken);
  }
  return str;

}
  function enspace(v)
  {
    return RelpaceAll(" ","&nbsp;",v);
  }

  function getFormFields(frm)
{
  var q= '';
  var frm = document.getElementById(frm);
  if (frm!=null) 
  {
    var elem = frm.elements;

    for(var i = 0; i < elem.length; i++)
    {   
        if ((elem[i].type=="checkbox") &&(elem[i].checked))
        {
            if (q=='')
            {
                q  = elem[i].name + "=" + elem[i].value;
            }else
            {
                q  = q +"&"+elem[i].name + "=" + elem[i].value;
            }
        }else
        if ((elem[i].type!="checkbox") &&(elem[i].name!="act"))
        {  
            if (q=='')
            {
                q  = elem[i].name + "=" + elem[i].value;
            }else
            {
                q  = q +"&"+elem[i].name + "=" + elem[i].value;
            }
        }
    } 
  }
  return q;
} 

function GetQueryFieldValue(name,url){

  var strQueryString="";

  var hasQueryString = url.indexOf('?'); 

  if (hasQueryString != -1) { 

    strQueryString = url.substring(hasQueryString+1, url.length);
    var Variables = strQueryString.split("&");
    var found = 0;
    for(i=0; i<Variables.length; i++){
      var field= Variables[i].split("=");
      if (field[0] == name){
       found = 1;
       break;
      }
    }
    if (found  == 1){
      return field[1]; 
    }else
    {
      return '';  
    }

  }
}



 
$(document).click(function(e) {
    var container = $('#showsort');

    if (!container.is(e.target)) 
    {  
        $('#sortdlg').hide(); 
    }
    else
    {      
        $('#sortdlg').show();
    }
    
 
     container = $('#showmenu');
     container2 = $('.showmenu');

    if ((!container.is(e.target)) && (!container2.is(e.target)) )
    {  
        $('#mainmenu').hide(); 
    }
    else
    {   var menu = document.getElementById('mainmenu');        
        if ($('#mainmenu').not(':visible'))
         $('#mainmenu').show();
        else
          $('#mainmenu').hide();
    }
    
    container = $('.showfilter');

    if (!container.is(e.target)) 
    {  
        /*$('#filterdlg').hide(); */
    }
    else
    {      
        $('#filterdlg').show();
    }
           


    if (($('#cancel-filter').is(e.target)) || ($('#apply-filter').is(e.target)) || ($('#close-filter').is(e.target)))
    {  
        $('#filterdlg').hide();
    }

      
 
 
});

function setBgChecked(id){
 var o = document.getElementById(id);
 var t = document.getElementById("td"+id); 
 if (o!=null) {o.checked= (!o.checked);} 
 if (t!=null)
 {
    if (o.checked)  t.className="tdselect"; 
        else 
        { 
          if ((id.indexOf('view@')> -1)||(id.indexOf('cat@')> -1))
                    t.className="tdunselect2";
          else          
                    t.className="tdunselect";
        }            
 
 }else t.className="tdselect"; 
}

function settdSelected(id,url){
  if (id !=null)
  id.className="tdselect"; 
  if ((typeof url != 'undefined') && (url!="")) window.location = url;
}
function settdSelectedSort(id,url){
  if (id!=null)
  id.className="sortitemselect"; 
  if ((typeof url != 'undefined') && (url!="")) window.location = url;
}

function doCityCheck(o)
{
  if (o!=null)
  {
    if (o.value.toLowerCase()=="around current location") o.value="";
  }
}

function doCityCheckb(o)
{
  if (o!=null)
  {
    if (o.value=="") o.value="Around current location";
  }
}