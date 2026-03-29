# az staticwebapp

```bash
# Create a static app. To provide content to the static web app and integrate with a Github repo, provide the Github repository URL (--source) and a branch (--branch). If the repo is under a Github organization, please ensure that the Azure CLI Github App has access to the organization. Access can be requested in the browser when using the "--login-with-github" argument. Access must be granted by the organization's admin.
az staticwebapp create

# Delete a static app.
az staticwebapp delete

# Disconnect source control to enable connecting to a different repo.
az staticwebapp disconnect

# List all static app resources in a subscription, or in resource group if provided.
az staticwebapp list

# Connect to a repo and branch following a disconnect command.
az staticwebapp reconnect

# Show details of a static app.
az staticwebapp show

# Update a static app. Return the app updated.
az staticwebapp update

# Delete app settings with given keys of the static app.
az staticwebapp appsettings delete

# List app settings of the static app.
az staticwebapp appsettings list

# Add to or change the app settings of the static app.
az staticwebapp appsettings set

# Link a backend to a static web app. Also known as "Bring your own API.".
az staticwebapp backends link

# Show details on the backend linked to a static web app.
az staticwebapp backends show

# Unlink backend from a static web app.
az staticwebapp backends unlink

# Validate a backend for a static web app.
az staticwebapp backends validate

# Create a Static Web App database connection.
az staticwebapp dbconnection create

# Delete a Static Web App database connection.
az staticwebapp dbconnection delete

# Get details for a Static Web App database connection.
az staticwebapp dbconnection show

# Disable the Azure Front Door CDN for a static webapp. For optimal experience and availability please check our documentation https://aka.ms/swaedge.
az staticwebapp enterprise-edge disable

# Enable the Azure Front Door CDN for a static webapp. Enabling enterprise-grade edge requires re-registration for the Azure Front Door Microsoft.CDN resource provider. For optimal experience and availability please check our documentation https://aka.ms/swaedge.
az staticwebapp enterprise-edge enable

# Show the status (Enabled, Disabled, Enabling, Disabling) of the Azure Front Door CDN for a webapp. For optimal experience and availability please check our documentation https://aka.ms/swaedge.
az staticwebapp enterprise-edge show

# Delete the static app production environment or the specified environment.
az staticwebapp environment delete

# Show information about functions.
az staticwebapp environment functions

# List all environment of the static app including production.
az staticwebapp environment list

# Show information about the production environment or the specified environment.
az staticwebapp environment show

# Link an Azure Function to a static webapp. Also known as "Bring your own Functions." Only one Azure Functions app is available to a single static web app. Static webapp SKU must be "Standard" or "Dedicated".
az staticwebapp functions link

# Show details on the Azure Function linked to a static webapp.
az staticwebapp functions show

# Unlink an Azure Function from a static webapp.
az staticwebapp functions unlink

# Delete given hostname of the static app.
az staticwebapp hostname delete

# List custom hostnames of the static app.
az staticwebapp hostname list

# Set given sub-domain hostname to the static app. Please configure CNAME/TXT/ALIAS record with your DNS provider. Use --no-wait to not wait for validation.
az staticwebapp hostname set

# Get details for a staticwebapp custom domain. Can be used to fetch validation token for TXT domain validation (see example).
az staticwebapp hostname show

# Assign managed identity to the static web app.
az staticwebapp identity assign

# Disable static web app's managed identity.
az staticwebapp identity remove

# Display static web app's managed identity.
az staticwebapp identity show

# List the deployment token for the static app.
az staticwebapp secrets list

# Reset the deployment token for the static app.
az staticwebapp secrets reset-api-key

# Create invitation link for specified user to the static app.
az staticwebapp users invite

# Lists users and assigned roles, limited to users who accepted their invites.
az staticwebapp users list

# Updates a user entry with the listed roles. Either user details or user id is required.
az staticwebapp users update
```
