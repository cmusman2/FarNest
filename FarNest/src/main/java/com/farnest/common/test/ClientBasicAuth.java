package com.farnest.common.test;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.Charset;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.apache.commons.codec.binary.Base64;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.farnest.common.model.Hotel;
import com.farnest.common.model.Hotels;

public class ClientBasicAuth {

	final static int SC_OK=200;
	
	private String username;
	private String password;
	private URI uri;
	private static final String URL_SECURED_BY_BASIC_AUTHENTICATION = "http://localhost:8081/spring-security-rest-basic";

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public URI getUri() {
		return uri;
	}

	public void setUri(URI uri) {
		this.uri = uri;
	}

	public ClientBasicAuth(String username, String password, URI uri) {
		this.username = username;
		this.password = password;
		this.uri = uri;
	}

	public ClientBasicAuth() {
	}

	public void doBasicAuth() throws Exception {
		CredentialsProvider provider = new BasicCredentialsProvider();
		UsernamePasswordCredentials credentials = new UsernamePasswordCredentials(username, password);
		provider.setCredentials(AuthScope.ANY, credentials);
		HttpClient client = HttpClientBuilder.create().setDefaultCredentialsProvider(provider).build();

		HttpResponse response = null;
		try {
			response = client.execute(new HttpGet(uri));
			
			 int StatusCode = response.getStatusLine().getStatusCode();
				
			 if ( StatusCode ==  SC_OK)
			 {
				 
			 } else throw new Exception("Not autneticated - status code:"+StatusCode);			
			

			BufferedReader in = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
			String inputLine;
			StringBuffer responseData = new StringBuffer();
			while ((inputLine = in.readLine()) != null) {
				responseData.append(inputLine);
			}
			in.close();

			String result = responseData.toString();

			JAXBContext jaxbContext = null;
			try {
				jaxbContext = JAXBContext.newInstance(Hotels.class);

				Unmarshaller jaxbUnmarshaller = null;

				jaxbUnmarshaller = jaxbContext.createUnmarshaller();

				InputStream is = new ByteArrayInputStream(result.getBytes());

				Hotels hotelResponse = (Hotels) jaxbUnmarshaller.unmarshal(is);
				
				
				for(Hotel h:hotelResponse.getHotels())
				{
					System.out.println(h.getName());
				}
				
				
			} catch (JAXBException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			System.out.println(result);

		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		int statusCode = response.getStatusLine().getStatusCode();

		System.out.println(statusCode);

		// assertThat(statusCode, equalTo(HttpStatus.SC_OK));
	}

	public <Hotel> void SendBasicAutgRequest() {

		try {
			uri = new URI("http://localhost:8092/SpringMVC/getHotels");
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		RestTemplate restTemplate;
		restTemplate = new RestTemplate();

		@SuppressWarnings("unchecked")
		ResponseEntity<Hotel> res = (ResponseEntity<Hotel>) restTemplate.exchange(uri, HttpMethod.GET,
				new HttpEntity<Hotel>(createHeaders(username, password)), Hotels.class);

		// Hotels hs=res.getBody();

		// System.out.println(res.getBody());

	}

	private HttpHeaders createHeaders(final String username, final String password) {
		return new HttpHeaders() {
			{
				String auth = username + ":" + password;
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodedAuth);
				set("Authorization", authHeader);
			}
		};
	}
}
