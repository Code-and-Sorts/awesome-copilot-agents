# az webapp

```bash
# Open a web app in a browser. This is not supported in Azure Cloud Shell.
az webapp browse

# Create a web app.
az webapp create

# Creates a remote connection using a tcp tunnel to your web app.
az webapp create-remote-connection

# Delete a web app.
az webapp delete

# Deploys a provided artifact to Azure Web Apps.
az webapp deploy

# List web apps.
az webapp list

# List all scaled out instances of a web app or web app slot.
az webapp list-instances

# List available built-in stacks which can be used for web apps.
az webapp list-runtimes

# Restart a web app.
az webapp restart

# Modify the number of instances of a webapp on Arc enabled Kubernetes workloads .
az webapp scale

# Get the details of a web app.
az webapp show

# SSH command establishes a ssh session to the web container and developer would get a shell terminal remotely.
az webapp ssh

# Start a web app.
az webapp start

# Stop a web app.
az webapp stop

# Create a webapp and deploy code from a local workspace to the app. The command is required to run from the folder where the code is present. Current support includes Node, Python, .NET Core and ASP.NET. Node, Python apps are created as Linux apps. .Net Core, ASP.NET, and static HTML apps are created as Windows apps. Append the html flag to deploy as a static HTML app. Each time the command is successfully run, default argument values for resource group, sku, location, plan, and name are saved for the current directory. These defaults are then used for any arguments not provided on subsequent runs of the command in the same directory.  Use 'az configure' to manage defaults. Run this command with the --debug parameter to see the API calls and parameters values being used.
az webapp up

# Update an existing web app.
az webapp update

# Show the authentication settings for the webapp in the classic format.
az webapp auth-classic show

# Update the authentication settings for the webapp in the classic format.
az webapp auth-classic update

# Sets the authentication settings for the webapp in the v2 format, overwriting any existing settings.
az webapp auth set

# Show the authentification settings for the webapp.
az webapp auth show

# Update the authentication settings for the webapp.
az webapp auth update

# Show the authentication settings for the Apple identity provider.
az webapp auth apple show

# Update the client id and client secret for the Apple identity provider.
az webapp auth apple update

# Reverts the configuration version of the authentication settings for the webapp from v2 to v1 (classic).
az webapp auth config-version revert

# Show the configuration version of the authentication settings for the webapp. Configuration version v1 refers to the /authSettings endpoints whereas v2 refers to the /authSettingsV2 endpoints.
az webapp auth config-version show

# Upgrades the configuration version of the authentication settings for the webapp from v1 (classic) to v2.
az webapp auth config-version upgrade

# Show the authentication settings for the Facebook identity provider.
az webapp auth facebook show

# Update the app id and app secret for the Facebook identity provider.
az webapp auth facebook update

# Show the authentication settings for the GitHub identity provider.
az webapp auth github show

# Update the client id and client secret for the GitHub identity provider.
az webapp auth github update

# Show the authentication settings for the Google identity provider.
az webapp auth google show

# Update the client id and client secret for the Google identity provider.
az webapp auth google update

# Show the authentication settings for the Azure Active Directory identity provider.
az webapp auth microsoft show

# Update the client id and client secret for the Azure Active Directory identity provider.
az webapp auth microsoft update

# Configure a new custom OpenID Connect identity provider.
az webapp auth openid-connect add

# Removes an existing custom OpenID Connect identity provider.
az webapp auth openid-connect remove

# Show the authentication settings for the custom OpenID Connect identity provider.
az webapp auth openid-connect show

# Update the client id and client secret setting name for an existing custom OpenID Connect identity provider.
az webapp auth openid-connect update

# Show the authentication settings for the Twitter identity provider.
az webapp auth twitter show

# Update the consumer key and consumer secret for the Twitter identity provider.
az webapp auth twitter update

# Set a web app's configuration.
az webapp config set

# Get the details of a web app's configuration.
az webapp config show

# Adds an Access Restriction to the webapp.
az webapp config access-restriction add

# Removes an Access Restriction from the webapp.
az webapp config access-restriction remove

# Sets if SCM site is using the same restrictions as the main site and default actions.
az webapp config access-restriction set

# Show Access Restriction settings for webapp.
az webapp config access-restriction show

# Delete web app settings.
az webapp config appsettings delete

# Get the details of a web app's settings.
az webapp config appsettings list

# Set a web app's settings.
az webapp config appsettings set

# Create a backup of a web app.
az webapp config backup create

# Delete a web app backup.
az webapp config backup delete

# List backups of a web app.
az webapp config backup list

# Restore a web app from a backup.
az webapp config backup restore

# Show the backup schedule for a web app.
az webapp config backup show

# Configure a new backup schedule for a web app.
az webapp config backup update

# Delete a web app's connection strings.
az webapp config connection-string delete

# Get a web app's connection strings.
az webapp config connection-string list

# Update a web app's connection strings.
az webapp config connection-string set

# Delete an existing web app's container settings.
az webapp config container delete

# Set an existing web app's container settings.
az webapp config container set

# Get details of a web app's container settings.
az webapp config container show

# Bind a hostname to a web app.
az webapp config hostname add

# Unbind a hostname from a web app.
az webapp config hostname delete

# Get the external-facing IP address for a web app.
az webapp config hostname get-external-ip

# List all hostname bindings for a web app.
az webapp config hostname list

# List the restorable snapshots for a web app.
az webapp config snapshot list

# Restore a web app snapshot.
az webapp config snapshot restore

# Bind an SSL certificate to a web app.
az webapp config ssl bind

# Create a Managed Certificate for a hostname in a webapp app.
az webapp config ssl create

# Delete an SSL certificate from a web app.
az webapp config ssl delete

# Import an SSL or App Service Certificate to a web app from Key Vault.
az webapp config ssl import

# List SSL certificates for a web app.
az webapp config ssl list

# Show the details of an SSL certificate for a web app.
az webapp config ssl show

# Unbind an SSL certificate from a web app.
az webapp config ssl unbind

# Upload an SSL certificate to a web app.
az webapp config ssl upload

# Add an Azure storage account configuration to a web app.
az webapp config storage-account add

# Delete a web app's Azure storage account configuration.
az webapp config storage-account delete

# Get a web app's Azure storage account configurations.
az webapp config storage-account list

# Update an existing Azure storage account configuration on a web app.
az webapp config storage-account update

# Delete a webapp connection.
az webapp connection delete

# List connections of a webapp.
az webapp connection list

# List source configurations of a webapp connection.
az webapp connection list-configuration

# List client types and auth types supported by webapp connections.
az webapp connection list-support-types

# Get the details of a webapp connection.
az webapp connection show

# Validate a webapp connection.
az webapp connection validate

# Place the CLI in a waiting state until a condition of the connection is met.
az webapp connection wait

# Create a webapp connection to app-insights.
az webapp connection create app-insights

# Create a webapp connection to appconfig.
az webapp connection create appconfig

# Create a webapp connection to cognitiveservices.
az webapp connection create cognitiveservices

# Create a webapp connection to confluent-cloud.
az webapp connection create confluent-cloud

# Create a webapp connection to cosmos-cassandra.
az webapp connection create cosmos-cassandra

# Create a webapp connection to cosmos-gremlin.
az webapp connection create cosmos-gremlin

# Create a webapp connection to cosmos-mongo.
az webapp connection create cosmos-mongo

# Create a webapp connection to cosmos-sql.
az webapp connection create cosmos-sql

# Create a webapp connection to cosmos-table.
az webapp connection create cosmos-table

# Create a webapp connection to eventhub.
az webapp connection create eventhub

# Create a webapp connection to fabric-sql.
az webapp connection create fabric-sql

# Create a webapp connection to keyvault.
az webapp connection create keyvault

# Create a webapp connection to mongodb-atlas.
az webapp connection create mongodb-atlas

# Create a webapp connection to mysql.
az webapp connection create mysql

# Create a webapp connection to mysql-flexible.
az webapp connection create mysql-flexible

# Create a webapp connection to neon-postgres.
az webapp connection create neon-postgres

# Create a webapp connection to postgres.
az webapp connection create postgres

# Create a webapp connection to postgres-flexible.
az webapp connection create postgres-flexible

# Create a webapp connection to redis.
az webapp connection create redis

# Create a webapp connection to redis-enterprise.
az webapp connection create redis-enterprise

# Create a webapp connection to servicebus.
az webapp connection create servicebus

# Create a webapp connection to signalr.
az webapp connection create signalr

# Create a webapp connection to sql.
az webapp connection create sql

# Create a webapp connection to storage-blob.
az webapp connection create storage-blob

# Create a webapp connection to storage-file.
az webapp connection create storage-file

# Create a webapp connection to storage-queue.
az webapp connection create storage-queue

# Create a webapp connection to storage-table.
az webapp connection create storage-table

# Create a webapp connection to webpubsub.
az webapp connection create webpubsub

# Update a webapp to app-insights connection.
az webapp connection update app-insights

# Update a webapp to appconfig connection.
az webapp connection update appconfig

# Update a webapp to cognitiveservices connection.
az webapp connection update cognitiveservices

# Update a webapp to confluent-cloud connection.
az webapp connection update confluent-cloud

# Update a webapp to cosmos-cassandra connection.
az webapp connection update cosmos-cassandra

# Update a webapp to cosmos-gremlin connection.
az webapp connection update cosmos-gremlin

# Update a webapp to cosmos-mongo connection.
az webapp connection update cosmos-mongo

# Update a webapp to cosmos-sql connection.
az webapp connection update cosmos-sql

# Update a webapp to cosmos-table connection.
az webapp connection update cosmos-table

# Update a webapp to eventhub connection.
az webapp connection update eventhub

# Update a webapp to fabric-sql connection.
az webapp connection update fabric-sql

# Update a webapp to keyvault connection.
az webapp connection update keyvault

# Update a webapp to mongodb-atlas connection.
az webapp connection update mongodb-atlas

# Update a webapp to mysql connection.
az webapp connection update mysql

# Update a webapp to mysql-flexible connection.
az webapp connection update mysql-flexible

# Update a webapp to neon-postgres connection.
az webapp connection update neon-postgres

# Update a webapp to postgres connection.
az webapp connection update postgres

# Update a webapp to postgres-flexible connection.
az webapp connection update postgres-flexible

# Update a webapp to redis connection.
az webapp connection update redis

# Update a webapp to redis-enterprise connection.
az webapp connection update redis-enterprise

# Update a webapp to servicebus connection.
az webapp connection update servicebus

# Update a webapp to signalr connection.
az webapp connection update signalr

# Update a webapp to sql connection.
az webapp connection update sql

# Update a webapp to storage-blob connection.
az webapp connection update storage-blob

# Update a webapp to storage-file connection.
az webapp connection update storage-file

# Update a webapp to storage-queue connection.
az webapp connection update storage-queue

# Update a webapp to storage-table connection.
az webapp connection update storage-table

# Update a webapp to webpubsub connection.
az webapp connection update webpubsub

# Add allowed origins.
az webapp cors add

# Remove allowed origins.
az webapp cors remove

# Show allowed origins.
az webapp cors show

# List web apps that have been deleted.
az webapp deleted list

# Restore a deleted web app.
az webapp deleted restore

# Get the details for available web app publishing credentials.
az webapp deployment list-publishing-credentials

# Get the details for available web app deployment profiles.
az webapp deployment list-publishing-profiles

# Configure continuous deployment via containers.
az webapp deployment container config

# Get the URL which can be used to configure webhooks for continuous deployment. Requires SCM Basic Auth Publishing Credentials to be enabled.
az webapp deployment container show-cd-url

# Add a GitHub Actions workflow file to the specified repository. The workflow will build and deploy your app to the specified webapp.
az webapp deployment github-actions add

# Remove and disconnect the GitHub Actions workflow file from the specified repository.
az webapp deployment github-actions remove

# Configure deployment slot auto swap.
az webapp deployment slot auto-swap

# Create a deployment slot.
az webapp deployment slot create

# Delete a deployment slot.
az webapp deployment slot delete

# List all deployment slots.
az webapp deployment slot list

# Swap deployment slots for a web app.
az webapp deployment slot swap

# Manage deployment from git or Mercurial repositories.
az webapp deployment source config

# Get a URL for a git repository endpoint to clone and push to for web app deployment.
az webapp deployment source config-local-git

# Perform deployment using the kudu zip push deployment for a web app.
az webapp deployment source config-zip

# Delete a source control deployment configuration.
az webapp deployment source delete

# Get the details of a source control deployment configuration.
az webapp deployment source show

# Synchronize from the repository. Only needed under manual integration mode.
az webapp deployment source sync

# Update source control token cached in Azure app service.
az webapp deployment source update-token

# Update deployment credentials.
az webapp deployment user set

# Get deployment publishing user.
az webapp deployment user show

# Add an existing hybrid-connection to a webapp.
az webapp hybrid-connection add

# List the hybrid-connections on a webapp.
az webapp hybrid-connection list

# Remove a hybrid-connection from a webapp.
az webapp hybrid-connection remove

# Assign managed identity to the web app.
az webapp identity assign

# Disable web app's managed identity.
az webapp identity remove

# Display web app's managed identity.
az webapp identity show

# Configure logging for a web app.
az webapp log config

# Download a web app's log history as a zip file.
az webapp log download

# Get the details of a web app's logging configuration.
az webapp log show

# Start live log tracing for a web app.
az webapp log tail

# List deployments associated with web app.
az webapp log deployment list

# Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified.
az webapp log deployment show

# Get details of all scans conducted on webapp, upto max scan limit set on the webapp This will get you the scan log results in addition to the scan status of each scan conducted on the webapp.
az webapp scan list-result

# Get results of specified scan-id. This will fetch you the Scan log results of the specified scan-id.
az webapp scan show-result

# Starts the scan on the specified webapp files in the wwwroot directory. It returns a JSON containing the ScanID, traking and results URL.
az webapp scan start

# Stops the current executing scan. Does nothing if no scan is executing.
az webapp scan stop

# Track status of scan by providing scan-id. You can track the status of the scan from [Starting, Success, Failed, TimeoutFailure, Executing].
az webapp scan track

# Convert a webapp from sitecontainers to a classic custom container and vice versa.
az webapp sitecontainers convert

# Create sitecontainers for a linux webapp.
az webapp sitecontainers create

# Delete a sitecontainer for a linux webapp.
az webapp sitecontainers delete

# List all the sitecontainers for a linux webapp.
az webapp sitecontainers list

# Get the logs of a sitecontainer for a linux webapp.
az webapp sitecontainers log

# List the details of a sitecontainer for a linux webapp.
az webapp sitecontainers show

# Get the status of a sitecontainer for a linux webapp.
az webapp sitecontainers status

# Update an existing sitecontainer for a linux webapp.
az webapp sitecontainers update

# Clear the routing rules and send all traffic to production.
az webapp traffic-routing clear

# Configure routing traffic to deployment slots.
az webapp traffic-routing set

# Display the current distribution of traffic across slots.
az webapp traffic-routing show

# Add a regional virtual network integration to a webapp.
az webapp vnet-integration add

# List the virtual network integrations on a webapp.
az webapp vnet-integration list

# Remove a regional virtual network integration from webapp.
az webapp vnet-integration remove

# List all continuous webjobs on a selected web app.
az webapp webjob continuous list

# Delete a specific continuous webjob.
az webapp webjob continuous remove

# Start a specific continuous webjob on a selected web app.
az webapp webjob continuous start

# Stop a specific continuous webjob.
az webapp webjob continuous stop

# List all triggered webjobs hosted on a web app.
az webapp webjob triggered list

# Get history of a specific triggered webjob hosted on a web app.
az webapp webjob triggered log

# Delete a specific triggered webjob hosted on a web app.
az webapp webjob triggered remove

# Run a specific triggered webjob hosted on a web app.
az webapp webjob triggered run
```
