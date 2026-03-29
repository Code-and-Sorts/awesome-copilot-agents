# az containerapp auth

```bash
# Show the authentication settings for the containerapp.
az containerapp auth show

# Update the authentication settings for the containerapp.
az containerapp auth update

# Show the authentication settings for the Apple identity provider.
az containerapp auth apple show

# Update the client id and client secret for the Apple identity provider.
az containerapp auth apple update

# Show the authentication settings for the Facebook identity provider.
az containerapp auth facebook show

# Update the app id and app secret for the Facebook identity provider.
az containerapp auth facebook update

# Show the authentication settings for the GitHub identity provider.
az containerapp auth github show

# Update the client id and client secret for the GitHub identity provider.
az containerapp auth github update

# Show the authentication settings for the Google identity provider.
az containerapp auth google show

# Update the client id and client secret for the Google identity provider.
az containerapp auth google update

# Show the authentication settings for the Azure Active Directory identity provider.
az containerapp auth microsoft show

# Update the client id and client secret for the Azure Active Directory identity provider.
az containerapp auth microsoft update

# Configure a new custom OpenID Connect identity provider.
az containerapp auth openid-connect add

# Removes an existing custom OpenID Connect identity provider.
az containerapp auth openid-connect remove

# Show the authentication settings for the custom OpenID Connect identity provider.
az containerapp auth openid-connect show

# Update the client id and client secret setting name for an existing custom OpenID Connect identity provider.
az containerapp auth openid-connect update

# Show the authentication settings for the Twitter identity provider.
az containerapp auth twitter show

# Update the consumer key and consumer secret for the Twitter identity provider.
az containerapp auth twitter update
```
