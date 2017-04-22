package com.farnest.common.test;

public class HttpRequestExecutor {
	/**
	 * Executes a request using the default context.
	 * @param request - the request to execute
	 * @return - json or xml or text response or null if not successful
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	
	
	
	/*
	public String executeAndRead(HttpUriRequest request) throws ClientProtocolException, IOException {
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
		}
		return responseStr;
	}
	*/
	
	
	
	
	/**
	 * Executes a request using the default context.
	 * @param request - the request to execute
	 * @return - the response to this request
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	
	
	
	/*
	public HttpResponse execute(HttpUriRequest request) throws ClientProtocolException, IOException {
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
	*/
	
	
	

}
