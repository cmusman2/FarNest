package com.farnest.common.test;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Random;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.AuthCache;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.impl.auth.DigestScheme;
import org.apache.http.impl.client.BasicAuthCache;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import com.farnest.common.model.Hotel;
import com.farnest.common.model.Hotels;

public class ClientDigestAuth {

	final static int SC_OK=200;
	
	
	private String username;
	private String password;
	private URL uri;

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

	public URL getUri() {
		return uri;
	}

	public void setUri(URL uri) {
		this.uri = uri;
	}

	public ClientDigestAuth(String username, String password, URL uri) {
		this.username = username;
		this.password = password;
		this.uri = uri;
	}

	public ClientDigestAuth() {
	}

	public void doDigestAuth() throws Exception {

		HttpHost targetHost = new HttpHost(uri.getHost(), uri.getPort(), uri.getProtocol());
		CloseableHttpClient httpClient = HttpClients.createDefault();
		HttpClientContext context = HttpClientContext.create();

		String user = this.username;
		String password = this.password;

		CredentialsProvider credsProvider = new BasicCredentialsProvider();
		credsProvider.setCredentials(AuthScope.ANY, new UsernamePasswordCredentials(user, password));
		AuthCache authCache = new BasicAuthCache();
		DigestScheme digestScheme = new DigestScheme();
		digestScheme.overrideParamter("realm", "DigestRealm");
		digestScheme.overrideParamter("nonce", Long.toString(new Random().nextLong(), 36));
		// digestScheme.overrideParamter("qop", "auth");
		// digestScheme.overrideParamter("nc", "1");
		// digestScheme.overrideParamter("cnonce", DigestScheme.createCnonce());

		authCache.put(targetHost, digestScheme);

		context.setCredentialsProvider(credsProvider);
		context.setAuthCache(authCache);

		HttpGet httpget = new HttpGet(uri.getPath());

		CloseableHttpResponse response = httpClient.execute(targetHost, httpget, context);
		
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

			for (Hotel h : hotelResponse.getHotels()) {
				System.out.println(h.getName());
			}

		} catch (JAXBException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
		int statusCode = response.getStatusLine().getStatusCode();

		System.out.println(statusCode);

	}

}
