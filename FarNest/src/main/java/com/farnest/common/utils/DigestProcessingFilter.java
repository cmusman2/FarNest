package com.farnest.common.utils;

public class DigestProcessingFilter  {
/*

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		if (!(request instanceof HttpServletRequest)) {
			throw new ServletException("Can only process HttpServletRequest");
		}

		if (!(response instanceof HttpServletResponse)) {
			throw new ServletException("Can only process HttpServletResponse");
		}

		HttpServletRequest httpRequest = (HttpServletRequest) request;

		String header = httpRequest.getHeader("Authorization");

		 
			System.out.println("Authorization header received from user agent: " + header);
		 

		if ((header != null) && header.startsWith("Digest ")) {
			String section212response = header.substring(7);

			String[] headerEntries = StringUtils.commaDelimitedListToStringArray(section212response);
			 
			
			Map headerMap = StringSplitUtils.splitEachArrayElementAndCreateMap(headerEntries, "=", "\"");

			String username = (String) headerMap.get("username");
			String realm = (String) headerMap.get("realm");
			String nonce = (String) headerMap.get("nonce");
			String uri = (String) headerMap.get("uri");
			String responseDigest = (String) headerMap.get("response");
			String qop = (String) headerMap.get("qop"); // RFC 2617 extension
			String nc = (String) headerMap.get("nc"); // RFC 2617 extension
			String cnonce = (String) headerMap.get("cnonce"); // RFC 2617
																// extension

			// Check all required parameters were supplied (ie RFC 2069)
			if ((username == null) || (realm == null) || (nonce == null) || (uri == null) || (response == null)) {
				 
					System.out.println("extracted username: '" + username + "'; realm: '" + username + "'; nonce: '"
							+ username + "'; uri: '" + username + "'; response: '" + username + "'");
				 
                
					throw	new BadCredentialsException("DigestProcessingFilter.missingMandatory",
								 
								"Missing mandatory digest value; received header {0}");

				return;
			}

			// Check all required parameters for an "auth" qop were supplied (ie
			// RFC 2617)
			if ("auth".equals(qop)) {
				if ((nc == null) || (cnonce == null)) {
					System.out.println("extracted nc: '" + nc + "'; cnonce: '" + cnonce + "'");
					 

					throw
							new BadCredentialsException("DigestProcessingFilter.missingAuth",
									 
									"Missing mandatory digest value; received header {0}");

					return;
				}
			}

			// Check realm name equals what we expected
			if (!this.getAuthenticationEntryPoint().getRealmName().equals(realm)) {
				fail(request, response,
						new BadCredentialsException(messages.getMessage("DigestProcessingFilter.incorrectRealm",
								new Object[] { realm, this.getAuthenticationEntryPoint().getRealmName() },
								"Response realm name '{0}' does not match system realm name of '{1}'")));

				return;
			}

			// Check nonce was a Base64 encoded (as sent by
			// DigestProcessingFilterEntryPoint)
			if (!Base64.isArrayByteBase64(nonce.getBytes())) {
				fail(request, response,
						new BadCredentialsException(messages.getMessage("DigestProcessingFilter.nonceEncoding",
								new Object[] { nonce }, "Nonce is not encoded in Base64; received nonce {0}")));

				return;
			}

			// Decode nonce from Base64
			// format of nonce is:
			// base64(expirationTime + ":" + md5Hex(expirationTime + ":" + key))
			String nonceAsPlainText = new String(Base64.decodeBase64(nonce.getBytes()));
			String[] nonceTokens = StringUtils.delimitedListToStringArray(nonceAsPlainText, ":");

			if (nonceTokens.length != 2) {
				fail(request, response,
						new BadCredentialsException(messages.getMessage("DigestProcessingFilter.nonceNotTwoTokens",
								new Object[] { nonceAsPlainText },
								"Nonce should have yielded two tokens but was {0}")));

				return;
			}

			// Extract expiry time from nonce
			long nonceExpiryTime;

			try {
				nonceExpiryTime = new Long(nonceTokens[0]).longValue();
			} catch (NumberFormatException nfe) {
				fail(request, response,
						new BadCredentialsException(messages.getMessage("DigestProcessingFilter.nonceNotNumeric",
								new Object[] { nonceAsPlainText },
								"Nonce token should have yielded a numeric first token, but was {0}")));

				return;
			}

			// Check signature of nonce matches this expiry time
			String expectedNonceSignature = DigestUtils
					.md5Hex(nonceExpiryTime + ":" + this.getAuthenticationEntryPoint().getKey());

			if (!expectedNonceSignature.equals(nonceTokens[1])) {
				fail(request, response,
						new BadCredentialsException(messages.getMessage("DigestProcessingFilter.nonceCompromised",
								new Object[] { nonceAsPlainText }, "Nonce token compromised {0}")));

				return;
			}

			// Lookup password for presented username
			// NB: DAO-provided password MUST be clear text - not encoded/salted
			// (unless this instance's passwordAlreadyEncoded property is
			// 'false')
			boolean loadedFromDao = false;
			UserDetails user = userCache.getUserFromCache(username);

			if (user == null) {
				loadedFromDao = true;

				try {
					user = userDetailsService.loadUserByUsername(username);
				} catch (UsernameNotFoundException notFound) {
					fail(request, response,
							new BadCredentialsException(messages.getMessage("DigestProcessingFilter.usernameNotFound",
									new Object[] { username }, "Username {0} not found")));

					return;
				}

				if (user == null) {
					throw new AuthenticationServiceException(
							"AuthenticationDao returned null, which is an interface contract violation");
				}

				userCache.putUserInCache(user);
			}

			// Compute the expected response-digest (will be in hex form)
			String serverDigestMd5;

			// Don't catch IllegalArgumentException (already checked validity)
			serverDigestMd5 = generateDigest(passwordAlreadyEncoded, username, realm, user.getPassword(),
					((HttpServletRequest) request).getMethod(), uri, qop, nonce, nc, cnonce);

			// If digest is incorrect, try refreshing from backend and
			// recomputing
			if (!serverDigestMd5.equals(responseDigest) && !loadedFromDao) {
				if (logger.isDebugEnabled()) {
					logger.debug(
							"Digest comparison failure; trying to refresh user from DAO in case password had changed");
				}

				try {
					user = userDetailsService.loadUserByUsername(username);
				} catch (UsernameNotFoundException notFound) {
					// Would very rarely happen, as user existed earlier
					fail(request, response,
							new BadCredentialsException(messages.getMessage("DigestProcessingFilter.usernameNotFound",
									new Object[] { username }, "Username {0} not found")));
				}

				userCache.putUserInCache(user);

				// Don't catch IllegalArgumentException (already checked
				// validity)
				serverDigestMd5 = generateDigest(passwordAlreadyEncoded, username, realm, user.getPassword(),
						((HttpServletRequest) request).getMethod(), uri, qop, nonce, nc, cnonce);
			}

			// If digest is still incorrect, definitely reject authentication
			// attempt
			if (!serverDigestMd5.equals(responseDigest)) {
				if (logger.isDebugEnabled()) {
					logger.debug("Expected response: '" + serverDigestMd5 + "' but received: '" + responseDigest
							+ "'; is AuthenticationDao returning clear text passwords?");
				}

				fail(request, response, new BadCredentialsException(
						messages.getMessage("DigestProcessingFilter.incorrectResponse", "Incorrect response")));

				return;
			}

			// To get this far, the digest must have been valid
			// Check the nonce has not expired
			// We do this last so we can direct the user agent its nonce is
			// stale
			// but the request was otherwise appearing to be valid
			if (nonceExpiryTime < System.currentTimeMillis()) {
				fail(request, response, new NonceExpiredException(
						messages.getMessage("DigestProcessingFilter.nonceExpired", "Nonce has expired/timed out")));

				return;
			}

			if (logger.isDebugEnabled()) {
				logger.debug(
						"Authentication success for user: '" + username + "' with response: '" + responseDigest + "'");
			}

			UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(user,
					user.getPassword());
			authRequest.setDetails(new WebAuthenticationDetails(httpRequest));

			SecurityContextHolder.getContext().setAuthentication(authRequest);
		}

		chain.doFilter(request, response);
	}

	public static String encodePasswordInA1Format(String username, String realm, String password) {
		String a1 = username + ":" + realm + ":" + password;
		String a1Md5 = new String(DigestUtils.md5Hex(a1));

		return a1Md5;
	}

	private void fail(ServletRequest request, ServletResponse response, AuthenticationException failed)
			throws IOException, ServletException {
		SecurityContextHolder.getContext().setAuthentication(null);

		if (logger.isDebugEnabled()) {
			logger.debug(failed);
		}

		authenticationEntryPoint.commence(request, response, failed);
	}

	
	public static String generateDigest(boolean passwordAlreadyEncoded, String username, String realm, String password,
			String httpMethod, String uri, String qop, String nonce, String nc, String cnonce)
			throws IllegalArgumentException {
		String a1Md5 = null;
		String a2 = httpMethod + ":" + uri;
		String a2Md5 = new String(DigestUtils.md5Hex(a2));

		if (passwordAlreadyEncoded) {
			a1Md5 = password;
		} else {
			a1Md5 = encodePasswordInA1Format(username, realm, password);
		}

		String digest;

		if (qop == null) {
			// as per RFC 2069 compliant clients (also reaffirmed by RFC 2617)
			digest = a1Md5 + ":" + nonce + ":" + a2Md5;
		} else if ("auth".equals(qop)) {
			// As per RFC 2617 compliant clients
			digest = a1Md5 + ":" + nonce + ":" + nc + ":" + cnonce + ":" + qop + ":" + a2Md5;
		} else {
			throw new IllegalArgumentException("This method does not support a qop: '" + qop + "'");
		}

		String digestMd5 = new String(DigestUtils.md5Hex(digest));

		return digestMd5;
	}

	public UserDetailsService getUserDetailsService() {
		return userDetailsService;
	}

	public DigestProcessingFilterEntryPoint getAuthenticationEntryPoint() {
		return authenticationEntryPoint;
	}

	public UserCache getUserCache() {
		return userCache;
	}

	public void init(FilterConfig ignored) throws ServletException {
	}

	public void setUserDetailsService(UserDetailsService authenticationDao) {
		this.userDetailsService = authenticationDao;
	}

	public void setAuthenticationEntryPoint(DigestProcessingFilterEntryPoint authenticationEntryPoint) {
		this.authenticationEntryPoint = authenticationEntryPoint;
	}

	 

	public void setPasswordAlreadyEncoded(boolean passwordAlreadyEncoded) {
		this.passwordAlreadyEncoded = passwordAlreadyEncoded;
	}

	public void setUserCache(UserCache userCache) {
		this.userCache = userCache;
	}
	
	
	*/
}
