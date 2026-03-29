# az functionapp

```bash
# Create a function app.
az functionapp create

# Delete a function app.
az functionapp delete

# Deploys a provided artifact to Azure functionapp.
az functionapp deploy

# List function apps.
az functionapp list

# List available locations for running function apps.
az functionapp list-consumption-locations

# List available locations for running function apps on the Flex Consumption plan.
az functionapp list-flexconsumption-locations

# List available built-in stacks which can be used for function apps on the Flex Consumption plan.
az functionapp list-flexconsumption-runtimes

# List available built-in stacks which can be used for function apps.
az functionapp list-runtimes

# Restart a function app.
az functionapp restart

# Get the details of a function app.
az functionapp show

# Start a function app.
az functionapp start

# Stop a function app.
az functionapp stop

# Update a function app.
az functionapp update

# Deploy to Azure Functions via GitHub actions.
az functionapp app up

# Set an existing function app's configuration.
az functionapp config set

# Get the details of an existing function app's configuration.
az functionapp config show

# Adds an Access Restriction to the function app.
az functionapp config access-restriction add

# Removes an Access Restriction from the functionapp.
az functionapp config access-restriction remove

# Sets if SCM site is using the same restrictions as the main site.
az functionapp config access-restriction set

# Show Access Restriction settings for functionapp.
az functionapp config access-restriction show

# Delete a function app's settings.
az functionapp config appsettings delete

# Show settings for a function app.
az functionapp config appsettings list

# Update a function app's settings.
az functionapp config appsettings set

# Delete an existing function app's container settings.
az functionapp config container delete

# Set an existing function app's container settings.
az functionapp config container set

# Get details of a function app's container settings.
az functionapp config container show

# Bind a hostname to a function app.
az functionapp config hostname add

# Unbind a hostname from a function app.
az functionapp config hostname delete

# Get the external-facing IP address for a function app.
az functionapp config hostname get-external-ip

# List all hostname bindings for a function app.
az functionapp config hostname list

# Bind an SSL certificate to a function app.
az functionapp config ssl bind

# Create a Managed Certificate for a hostname in a function app.
az functionapp config ssl create

# Delete an SSL certificate from a function app.
az functionapp config ssl delete

# Import an SSL certificate to a function app from Key Vault.
az functionapp config ssl import

# List SSL certificates for a function app.
az functionapp config ssl list

# Show the details of an SSL certificate for a function app.
az functionapp config ssl show

# Unbind an SSL certificate from a function app.
az functionapp config ssl unbind

# Upload an SSL certificate to a function app.
az functionapp config ssl upload

# Delete a functionapp connection.
az functionapp connection delete

# List connections of a functionapp.
az functionapp connection list

# List source configurations of a functionapp connection.
az functionapp connection list-configuration

# List client types and auth types supported by functionapp connections.
az functionapp connection list-support-types

# Get the details of a functionapp connection.
az functionapp connection show

# Validate a functionapp connection.
az functionapp connection validate

# Place the CLI in a waiting state until a condition of the connection is met.
az functionapp connection wait

# Create a functionapp connection to app-insights.
az functionapp connection create app-insights

# Create a functionapp connection to appconfig.
az functionapp connection create appconfig

# Create a functionapp connection to cognitiveservices.
az functionapp connection create cognitiveservices

# Create a functionapp connection to confluent-cloud.
az functionapp connection create confluent-cloud

# Create a functionapp connection to cosmos-cassandra.
az functionapp connection create cosmos-cassandra

# Create a functionapp connection to cosmos-gremlin.
az functionapp connection create cosmos-gremlin

# Create a functionapp connection to cosmos-mongo.
az functionapp connection create cosmos-mongo

# Create a functionapp connection to cosmos-sql.
az functionapp connection create cosmos-sql

# Create a functionapp connection to cosmos-table.
az functionapp connection create cosmos-table

# Create a functionapp connection to eventhub.
az functionapp connection create eventhub

# Create a functionapp connection to fabric-sql.
az functionapp connection create fabric-sql

# Create a functionapp connection to keyvault.
az functionapp connection create keyvault

# Create a functionapp connection to mongodb-atlas.
az functionapp connection create mongodb-atlas

# Create a functionapp connection to mysql.
az functionapp connection create mysql

# Create a functionapp connection to mysql-flexible.
az functionapp connection create mysql-flexible

# Create a functionapp connection to neon-postgres.
az functionapp connection create neon-postgres

# Create a functionapp connection to postgres.
az functionapp connection create postgres

# Create a functionapp connection to postgres-flexible.
az functionapp connection create postgres-flexible

# Create a functionapp connection to redis.
az functionapp connection create redis

# Create a functionapp connection to redis-enterprise.
az functionapp connection create redis-enterprise

# Create a functionapp connection to servicebus.
az functionapp connection create servicebus

# Create a functionapp connection to signalr.
az functionapp connection create signalr

# Create a functionapp connection to sql.
az functionapp connection create sql

# Create a functionapp connection to storage-blob.
az functionapp connection create storage-blob

# Create a functionapp connection to storage-file.
az functionapp connection create storage-file

# Create a functionapp connection to storage-queue.
az functionapp connection create storage-queue

# Create a functionapp connection to storage-table.
az functionapp connection create storage-table

# Create a functionapp connection to webpubsub.
az functionapp connection create webpubsub

# Update a functionapp to app-insights connection.
az functionapp connection update app-insights

# Update a functionapp to appconfig connection.
az functionapp connection update appconfig

# Update a functionapp to cognitiveservices connection.
az functionapp connection update cognitiveservices

# Update a functionapp to confluent-cloud connection.
az functionapp connection update confluent-cloud

# Update a functionapp to cosmos-cassandra connection.
az functionapp connection update cosmos-cassandra

# Update a functionapp to cosmos-gremlin connection.
az functionapp connection update cosmos-gremlin

# Update a functionapp to cosmos-mongo connection.
az functionapp connection update cosmos-mongo

# Update a functionapp to cosmos-sql connection.
az functionapp connection update cosmos-sql

# Update a functionapp to cosmos-table connection.
az functionapp connection update cosmos-table

# Update a functionapp to eventhub connection.
az functionapp connection update eventhub

# Update a functionapp to fabric-sql connection.
az functionapp connection update fabric-sql

# Update a functionapp to keyvault connection.
az functionapp connection update keyvault

# Update a functionapp to mongodb-atlas connection.
az functionapp connection update mongodb-atlas

# Update a functionapp to mysql connection.
az functionapp connection update mysql

# Update a functionapp to mysql-flexible connection.
az functionapp connection update mysql-flexible

# Update a functionapp to neon-postgres connection.
az functionapp connection update neon-postgres

# Update a functionapp to postgres connection.
az functionapp connection update postgres

# Update a functionapp to postgres-flexible connection.
az functionapp connection update postgres-flexible

# Update a functionapp to redis connection.
az functionapp connection update redis

# Update a functionapp to redis-enterprise connection.
az functionapp connection update redis-enterprise

# Update a functionapp to servicebus connection.
az functionapp connection update servicebus

# Update a functionapp to signalr connection.
az functionapp connection update signalr

# Update a functionapp to sql connection.
az functionapp connection update sql

# Update a functionapp to storage-blob connection.
az functionapp connection update storage-blob

# Update a functionapp to storage-file connection.
az functionapp connection update storage-file

# Update a functionapp to storage-queue connection.
az functionapp connection update storage-queue

# Update a functionapp to storage-table connection.
az functionapp connection update storage-table

# Update a functionapp to webpubsub connection.
az functionapp connection update webpubsub

# Add allowed origins.
az functionapp cors add

# Enable or disable access-control-allow-credentials.
az functionapp cors credentials

# Remove allowed origins.
az functionapp cors remove

# Show allowed origins.
az functionapp cors show

# Get the details for available function app publishing credentials.
az functionapp deployment list-publishing-credentials

# Get the details for available function app deployment profiles.
az functionapp deployment list-publishing-profiles

# Update an existing function app's deployment configuration.
az functionapp deployment config set

# Get the details of a function app's deployment configuration.
az functionapp deployment config show

# Configure continuous deployment via containers.
az functionapp deployment container config

# Get the URL which can be used to configure webhooks for continuous deployment.
az functionapp deployment container show-cd-url

# Add a GitHub Actions workflow file to the specified repository. The workflow will build and deploy your app to the specified functionapp.
az functionapp deployment github-actions add

# Remove and disconnect the GitHub Actions workflow file from the specified repository.
az functionapp deployment github-actions remove

# Configure deployment slot auto swap.
az functionapp deployment slot auto-swap

# Create a deployment slot.
az functionapp deployment slot create

# Delete a deployment slot.
az functionapp deployment slot delete

# List all deployment slots.
az functionapp deployment slot list

# Swap deployment slots for a function app.
az functionapp deployment slot swap

# Manage deployment from git or Mercurial repositories.
az functionapp deployment source config

# Get a URL for a git repository endpoint to clone and push to for function app deployment.
az functionapp deployment source config-local-git

# Perform deployment using the kudu zip push deployment for a function app.
az functionapp deployment source config-zip

# Delete a source control deployment configuration.
az functionapp deployment source delete

# Get the details of a source control deployment configuration.
az functionapp deployment source show

# Synchronize from the repository. Only needed under manual integration mode.
az functionapp deployment source sync

# Update source control token cached in Azure app service.
az functionapp deployment source update-token

# Update deployment credentials.
az functionapp deployment user set

# Gets publishing user.
az functionapp deployment user show

# Create an Azure DevOps pipeline for a function app.
az functionapp devops-pipeline create

# List all Linux Consumption function apps that are eligible for migration to the Flex Consumption plan.
az functionapp flex-migration list

# Create a Flex Consumption app with the same settings as the provided Linux Consumption function app.
az functionapp flex-migration start

# Delete a function.
az functionapp function delete

# List functions in a function app.
az functionapp function list

# Get the details of a function.
az functionapp function show

# Delete a function key.
az functionapp function keys delete

# List all function keys.
az functionapp function keys list

# Create or update a function key.
az functionapp function keys set

# Add an existing hybrid-connection to a functionapp.
az functionapp hybrid-connection add

# List the hybrid-connections on a functionapp.
az functionapp hybrid-connection list

# Remove a hybrid-connection from a functionapp.
az functionapp hybrid-connection remove

# Assign managed identity to the web app.
az functionapp identity assign

# Disable web app's managed identity.
az functionapp identity remove

# Display web app's managed identity.
az functionapp identity show

# Delete a function app key.
az functionapp keys delete

# List all function app keys.
az functionapp keys list

# Create or update a function app key.
az functionapp keys set

# List deployment logs of the deployments associated with function app.
az functionapp log deployment list

# Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified.
az functionapp log deployment show

# Create an App Service Plan for an Azure Function.
az functionapp plan create

# Delete an App Service Plan.
az functionapp plan delete

# List App Service Plans.
az functionapp plan list

# Get the App Service Plans for a resource group or a set of resource groups.
az functionapp plan show

# Update an App Service plan for an Azure Function.
az functionapp plan update

# Update an existing function app's runtime configuration.
az functionapp runtime config set

# Get the details of a function app's runtime configuration.
az functionapp runtime config show

# Update an existing function app's scale configuration.
az functionapp scale config set

# Get the details of a function app's scale configuration.
az functionapp scale config show

# Delete always-ready settings in the scale configuration.
az functionapp scale config always-ready delete

# Add or update existing always-ready settings in the scale configuration.
az functionapp scale config always-ready set

# Add a regional virtual network integration to a functionapp.
az functionapp vnet-integration add

# List the virtual network integrations on a functionapp.
az functionapp vnet-integration list

# Remove a regional virtual network integration from functionapp.
az functionapp vnet-integration remove
```
