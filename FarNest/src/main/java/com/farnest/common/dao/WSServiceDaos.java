package com.farnest.common.dao;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.JAXBIntrospector;
import javax.xml.bind.Unmarshaller;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import javax.xml.transform.stream.StreamSource;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;

import com.farnest.common.model.HotelResponse;
import com.farnest.common.model.HotelSummary;
import com.farnest.common.model.HotelSummaryList;

public class WSServiceDaos {
  public static List<HotelSummary> Hotels(String city, Date sd, Date ed)
  {
	  //authenticate
	  
	  
	  //get data
	  return null;
  }
  
  public static List<HotelSummary> Hotels(String city, Date sd, int nights) throws ClientProtocolException, IOException, JAXBException, XMLStreamException
  {
	  //authenticate
	  
	  //String x = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?><ns2:hotellistresponse xmlns:ns2=\"http://v3.hotel.wsapi.ean.com\"><customersessionid>0ABAAA42-487E-F915-62D2-4C6B0D9015B0</customersessionid><numberofroomsrequested>0</numberofroomsrequested><moreresultsavailable>false</moreresultsavailable><hotellist size=\"1374\" activepropertycount=\"1374\"><hotelsummary order=\"0\"><hotelid>284677</hotelid><name>Best Western Plus Delmere Hotel</name><address1>130 Sussex Gardens</address1><city>London</city><postalcode>W2 1UB</postalcode><countrycode>GB</countrycode><airportcode>LHR</airportcode><propertycategory>1</propertycategory><hotelrating>3.0</hotelrating><confidencerating>94</confidencerating><amenitymask>0</amenitymask><tripadvisorrating>4.0</tripadvisorrating><tripadvisorreviewcount>139</tripadvisorreviewcount><tripadvisorratingurl>http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-16366-4.gif</tripadvisorratingurl><locationdescription>Near Marble Arch</locationdescription><shortdescription>&amp;lt;p&amp;gt;&amp;lt;b&amp;gt;Property Location&amp;lt;/b&amp;gt; &amp;lt;br /&amp;gt;With a stay at Best Western Plus Delmere Hotel in London (Paddington), you&amp;apos;ll be convenient to Hyde Park Speakers&amp;apos; Corner and Selfridges.  This hotel is close to</shortdescription><highrate>284.29</highrate><lowrate>163.91</lowrate><ratecurrencycode>USD</ratecurrencycode><latitude>51.51563</latitude><longitude>-0.17226</longitude><proximitydistance>3.075692</proximitydistance><proximityunit>MI</proximityunit><hotelindestination>true</hotelindestination><thumbnailurl>/hotels/1000000/30000/21700/21632/21632_126_t.jpg</thumbnailurl><deeplink>http://www.travelnow.com/templates/396041/hotels/284677/overview?lang=en&amp;amp;currency=USD&amp;amp;standardCheckin=null/null/null&amp;amp;standardCheckout=6/7/2018</deeplink></hotelsummary></hotellist></ns2:hotellistresponse>";
	  String x = "<hotellistresponse><customersessionid>0ABAAA42-487E-F915-62D2-4C6B0D9015B0</customersessionid><numberofroomsrequested>0</numberofroomsrequested><moreresultsavailable>false</moreresultsavailable><hotellist size=\"1374\" activepropertycount=\"1374\"><hotelsummary order=\"0\"><hotelid>284677</hotelid><name>Best Western Plus Delmere Hotel</name><address1>130 Sussex Gardens</address1><city>London</city><postalcode>W2 1UB</postalcode><countrycode>GB</countrycode><airportcode>LHR</airportcode><propertycategory>1</propertycategory><hotelrating>3.0</hotelrating><confidencerating>94</confidencerating><amenitymask>0</amenitymask><tripadvisorrating>4.0</tripadvisorrating><tripadvisorreviewcount>139</tripadvisorreviewcount><tripadvisorratingurl>http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-16366-4.gif</tripadvisorratingurl><locationdescription>Near Marble Arch</locationdescription><shortdescription>&amp;lt;p&amp;gt;&amp;lt;b&amp;gt;Property Location&amp;lt;/b&amp;gt; &amp;lt;br /&amp;gt;With a stay at Best Western Plus Delmere Hotel in London (Paddington), you&amp;apos;ll be convenient to Hyde Park Speakers&amp;apos; Corner and Selfridges.  This hotel is close to</shortdescription><highrate>284.29</highrate><lowrate>163.91</lowrate><ratecurrencycode>USD</ratecurrencycode><latitude>51.51563</latitude><longitude>-0.17226</longitude><proximitydistance>3.075692</proximitydistance><proximityunit>MI</proximityunit><hotelindestination>true</hotelindestination><thumbnailurl>/hotels/1000000/30000/21700/21632/21632_126_t.jpg</thumbnailurl><deeplink>http://www.travelnow.com/templates/396041/hotels/284677/overview?lang=en&amp;amp;currency=USD&amp;amp;standardCheckin=null/null/null&amp;amp;standardCheckout=6/7/2018</deeplink></hotelsummary></hotellist></hotellistresponse>";
try
{
	StringReader sr = new StringReader(x);
      
	  
	  
	  JAXBContext jc = JAXBContext.newInstance(HotelResponse.class);
      Unmarshaller unmarshaller = jc.createUnmarshaller();
      HotelResponse hotelResponse = (HotelResponse)JAXBIntrospector.getValue( unmarshaller.unmarshal(sr));
      if(hotelResponse!=null && hotelResponse.getHotelList()!=null)
      return hotelResponse.getHotelList().getHotelSummaries();
      
      sr.close();
}catch(Exception exp)
{
	String ss = exp.getMessage();
}
	  
	  /*
	  String url = "http://www.lowestroomrates.com";

	  HttpClient client = HttpClientBuilder.create().build();
	  HttpPost post = new HttpPost(url+"/src/authenticate.php");
	  
	  List<NameValuePair> urlParameters = new ArrayList<NameValuePair>();
	  urlParameters.add(new BasicNameValuePair("sign", "tak12e"));
	  urlParameters.add(new BasicNameValuePair("pin", "vS0GKOzRwyZBSJX8gO2bHH4XVYhv-bNi2Eyuf4ZhvHs1uXmTq"));


	  post.setEntity(new UrlEncodedFormEntity(urlParameters));

	  HttpResponse response = client.execute(post);
	  
	  BufferedReader rd = new BufferedReader(
		        new InputStreamReader(response.getEntity().getContent()));

		StringBuffer result = new StringBuffer();
		String line = "";
		while ((line = rd.readLine()) != null) {
			result.append(line);
		}	  
	  
	  if(result.length()>0)
	  {
		  HttpClient clientData = HttpClientBuilder.create().build();
		  HttpPost postData = new HttpPost(url+"/src/htllist.php");
		  
		  
		  SimpleDateFormat df = new SimpleDateFormat("dd/MM/yy");
		  GregorianCalendar cal = new GregorianCalendar();
		  if (sd==null)
			  {sd = new Date();
				cal.setTime(sd);
				cal.add(Calendar.DATE, 1);
				sd = cal.getTime();
			  }
		  String s=df.format(sd);
		  
		  
			cal.setTime(sd);
			cal.add(Calendar.DATE, nights);
			String e= df.format(cal.getTime());		  
		  
		  List<NameValuePair> urlParametersData = new ArrayList<NameValuePair>();
		  urlParametersData.add(new BasicNameValuePair("xuid", result.toString()));
		  urlParametersData.add(new BasicNameValuePair("yzid0x", result.toString()));
		  
		  urlParametersData.add(new BasicNameValuePair("CityAjaxH", city));
		  urlParametersData.add(new BasicNameValuePair("SDATEH", s));
		  urlParametersData.add(new BasicNameValuePair("EDATEH", e));
		  urlParametersData.add(new BasicNameValuePair("maxnum", "15"));

			postData.setEntity(new UrlEncodedFormEntity(urlParametersData));

		  HttpResponse responseData = clientData.execute(postData);
		  
		  BufferedReader rdData = new BufferedReader(
			        new InputStreamReader(responseData.getEntity().getContent()));

			StringBuffer resultData = new StringBuffer();
			 line = "";
			while ((line = rdData.readLine()) != null) {
				resultData.append(line);
			}	
			
		  
	  }*/
		List<HotelSummary> hs = new ArrayList();
		
		HotelSummary h= new HotelSummary();
		h.setName("Marriott Manchester, Downtown");
		h.setAddress1("In the city center");
		h.setLowrate("325.55");
		h.setThumbnailurl("/hotels/2000000/1900000/1897400/1897390/1897390_4_l.jpg");
		hs.add(h);
		
		h= new HotelSummary();
		h.setName("Crown plaza City Center");
		h.setAddress1("Water front");
		h.setLowrate("125.80");
		h.setThumbnailurl("/hotels/1000000/900000/898700/898665/898665_117_l.jpg");
		hs.add(h);		
		
		h= new HotelSummary();
		h.setName("Crown plaza City Center");
		h.setAddress1("Water front");
		h.setLowrate("125.80");
		h.setThumbnailurl("/hotels/1000000/900000/898700/898665/898665_117_l.jpg");
		hs.add(h);	
	  
		h= new HotelSummary();
		h.setName("Crown plaza City Center");
		h.setAddress1("Water front");
		h.setLowrate("125.80");
		h.setThumbnailurl("/hotels/1000000/900000/898700/898665/898665_117_l.jpg");
		hs.add(h);	


		h= new HotelSummary();
		h.setName("Crown plaza City Center");
		h.setAddress1("Water front");
		h.setLowrate("125.80");
		h.setThumbnailurl("/hotels/1000000/900000/898700/898665/898665_117_l.jpg");
		hs.add(h);	
		
		//get data
	  return hs;
  }
}
