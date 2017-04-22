package com.farnest.common.test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Random;
import java.util.Scanner;

import org.apache.commons.codec.binary.Base64;

import org.apache.http.Header;
import org.apache.http.HeaderElement;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.MalformedChallengeException;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.AuthCache;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.impl.auth.DigestScheme;
import org.apache.http.impl.client.BasicAuthCache;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHttpRequest;
import org.apache.http.util.EntityUtils;
import org.springframework.security.core.AuthenticationException;

@SuppressWarnings("deprecation")
public class Client {

	private static final String WWW_AUTHENTICATE = "WWW-Authenticate";	
	
	public static void main(String[] args) throws Exception {
		System.out.println("hello");
		
		 
		char ch=' ';
		while ( (ch != 'Q')) {
			System.out.println("\r\n");
			
			System.out.print("Enter your choice:[B= Basic authentication test, D=Digest authentication test, Q=Quit]:");
			System.out.println("");
			Scanner c = new Scanner(System.in);
			String line = c.nextLine();
			if (line.length() > 0)
				ch = Character.toUpperCase(line.charAt(0));
			
		  if (ch=='B') try {System.out.println("attempting...");doBasicAuth();}catch(Exception e){System.out.println(e.getMessage());} 
		  else
			  if (ch=='D') try {System.out.println("attempting...");doDigestAuth();}catch(Exception e){System.out.println(e.getMessage());}
		  
		}
		    //doBasicAuth();		 
			//doDigestAuth();
            //downloadDigest(new URL("http://localhost:8092/SpringMVC/hotels"));
		    //doWork();
		System.out.println("Terminated");
	}
	
	public static String doWork()
	{
		String responseStr = null;
		String url="http://localhost:8092/SpringMVC/hotels";
		
		HttpUriRequest request;
		
		request=new HttpGet(url);
		
		

		try {
			
			// This should return an HTTP 401 Unauthorized with
			// a challenge to solve.
			final HttpResponse authResponse =  execute(request);	
			System.out.println("attempting:"+authResponse);
			 
			// Validate that we got an HTTP 401 back			
			if(authResponse.getStatusLine().getStatusCode() ==
				HttpStatus.SC_UNAUTHORIZED) {
				if(authResponse.containsHeader(WWW_AUTHENTICATE)) {
					
					UsernamePasswordCredentials credentials = new UsernamePasswordCredentials("test", "testit");
					// A org.apache.http.impl.auth.DigestScheme instance is
					// what will process the challenge from the web-server	
					final DigestScheme md5Auth = new DigestScheme();
					
					// Get the challenge.
					final Header challenge =
						authResponse.getHeaders(WWW_AUTHENTICATE)[0];
					// Solve it.
					md5Auth.processChallenge(challenge);

					// Generate a solution Authentication header using your
					// username and password.
					final Header solution = md5Auth.authenticate(
							credentials,
							new BasicHttpRequest(HttpGet.METHOD_NAME,
									new URL(url).getPath()));
					
					
				    HeaderElement[]	he=solution.getElements(); 
				    
				    String v="";
				    for(HeaderElement h:solution.getElements())
				    {
				    	if (h.getName().equals("nonce"))
				    	{
				    		v= h.getValue();
				    	}
				    }
				    
				     
				    
					String nonceAsPlainText = new String(Base64.decodeBase64(  v.getBytes()));					
					
					// Do another request, but this time include the solution
					// Authentication header as generated by HttpClient.
					request.addHeader(solution);
					 
					 
					 
					
					//request.addHeader(solution);
					responseStr = executeAndRead(new HttpGet(url));	
					
					System.out.println("tried:"+responseStr);
					
				} else {
					//TODO: do something other than throw exception
					throw new Exception("Service responded with Http 401, " +
					"but did not send us usable WWW-Authenticate header.");
				}
			} else {
				//TODO: do something other than throw exception
				throw new Exception("Did not get an Http 401 " +
				"like we were expecting.");
			}
		} catch (MalformedChallengeException e) {
			// TODO Auto-generated catch block
			//log.error(e);
			e.printStackTrace();
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return responseStr;
	}
	
	public static HttpResponse execute(HttpUriRequest request) throws ClientProtocolException, IOException {
		HttpResponse response  = null;
		DefaultHttpClient httpclient = new DefaultHttpClient();
		try{
			response = httpclient.execute(request);
			HttpEntity entity = response.getEntity();
			if (entity != null) {
				//TODO: in version 4.1 this was deprecated
				//user EntityUtils.consumeContent(entity) instead
				entity.consumeContent();
			}
		}  finally{
			// When HttpClient instance is no longer needed, 
			// shut down the connection manager to ensure
			// immediate deallocation of all system resources
			httpclient.getConnectionManager().shutdown();
		}
		return response;
	}
	
	
	public static String executeAndRead(HttpUriRequest request) throws ClientProtocolException, IOException {
		String responseStr = null;
		DefaultHttpClient httpclient = new DefaultHttpClient();
		try{
			HttpResponse response = httpclient.execute(request);
			HttpEntity entity = response.getEntity();
			if (entity != null) {				
				responseStr = EntityUtils.toString(entity);
				//TODO: in version 4.1 this was deprecated
				//user EntityUtils.consumeContent(entity) instead
				entity.consumeContent();
			}
		}  finally{
			// When HttpClient instance is no longer needed, 
			// shut down the connection manager to ensure
			// immediate deallocation of all system resources
			httpclient.getConnectionManager().shutdown();
			httpclient.close();
		}
		return responseStr;
	}
	
	
	
	private static void downloadDigest(URL url)
			  throws IOException {
			  HttpHost targetHost = new HttpHost(url.getHost(), url.getPort(), url.getProtocol());
			  CloseableHttpClient httpClient = HttpClients.createDefault();
			  HttpClientContext context = HttpClientContext.create();

			  String credential = url.getUserInfo();
			  //if (credential != null) 
			  {
			    String user = "test";//credential.split(":")[0];
			    String password = "mytest";//credential.split(":")[1];

			    CredentialsProvider credsProvider = new BasicCredentialsProvider();
			    credsProvider.setCredentials(AuthScope.ANY,
			      new UsernamePasswordCredentials(user, password));
			    AuthCache authCache = new BasicAuthCache();
			    DigestScheme digestScheme = new DigestScheme();
			    digestScheme.overrideParamter("realm", "DigestRealm");
			    digestScheme.overrideParamter("nonce", Long.toString(new Random().nextLong(), 36));
			    //digestScheme.overrideParamter("qop", "auth");
				//digestScheme.overrideParamter("nc", "1");
				//digestScheme.overrideParamter("cnonce", DigestScheme.createCnonce());	  
				    
			    authCache.put(targetHost, digestScheme);

			    context.setCredentialsProvider(credsProvider);
			    context.setAuthCache(authCache);
			  }

			  HttpGet httpget = new HttpGet(url.getPath());

			  CloseableHttpResponse response = httpClient.execute(targetHost, httpget, context);

			  BufferedReader in = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
				String inputLine;
				StringBuffer responseData = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					responseData.append(inputLine);
				}
				in.close();

				String result = responseData.toString();
			  
			  
			  System.out.println(result);
			  
			  
			  
			  for(Header h:response.getAllHeaders())
			  {
				//  System.out.println(h.getName()+":"+h.getValue()); 
			  }
			   
			}
	
	
	private static void doDigestAuth2()
	{
		 DefaultHttpClient httpclient = new DefaultHttpClient();
		final HttpHost targetHost = new HttpHost("localhost", 8092, "http");
	    final CredentialsProvider credsProvider = new BasicCredentialsProvider();
	    credsProvider.setCredentials(AuthScope.ANY,
	            new UsernamePasswordCredentials("test", "mytest"));

	    final AuthCache authCache = new BasicAuthCache();
	    DigestScheme digestAuth = new DigestScheme();
	    digestAuth.overrideParamter("realm", "DigestRealm");
	   // digestAuth.overrideParamter("nonce", Long.toString(new Random().nextLong(), 36));
	    digestAuth.overrideParamter("qop", "auth");
	    digestAuth.overrideParamter("nc", "1");
	    digestAuth.overrideParamter("cnonce", DigestScheme.createCnonce());	    
	    
	    
	    authCache.put(targetHost, digestAuth);

	    // Add AuthCache to the execution context
	    HttpClientContext context = HttpClientContext.create();
	    context.setAuthCache(authCache);
	HttpGet httpget = new HttpGet("http://localhost:8092/SpringMVC/hotels");
	CloseableHttpResponse response;
	httpclient.close();
	try {
		  response = httpclient.execute(targetHost , httpget, context );
		  System.out.println(response);
	} 
	catch (ClientProtocolException e) {
		// TODO Auto-generated catch block
		System.out.println(e.getMessage());
		e.printStackTrace();
	} 
	catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
	}
	
	
	
	
	private static void doBasicAuth() throws Exception
	{
		try {
			ClientBasicAuth clientBasicAuth = new ClientBasicAuth("jimi","jimispassword", new URI("http://localhost:8085/SpringMVC/getHotels"));
			//clientBasicAuth.SendBasicAutgRequest();
			clientBasicAuth.doBasicAuth();
			
			
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			System.out.println("error");
			e.printStackTrace();
		}
	}

	
	private static void doDigestAuth() throws Exception
	{
		ClientDigestAuth clientDigestAuth = new ClientDigestAuth("jimi","jimispassword", new URL("http://localhost:8085/SpringMVC/hotels"));
		//clientBasicAuth.SendBasicAutgRequest();
		clientDigestAuth.doDigestAuth();
	}
	
	
}
