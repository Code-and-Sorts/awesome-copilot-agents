# az spring

```bash
# Create an Azure Spring Apps instance.
az spring create

# Delete an Azure Spring Apps.
az spring delete

# Commands to export target Azure resource definitions from Azure Spring Apps.
az spring export

# (Standard and Enterprise Tier Only) Flush Virtual network DNS setting for Azure Spring Apps.
az spring flush-virtualnetwork-dns-settings

# List all Azure Spring Apps in the given resource group, otherwise list the subscription's.
az spring list

# (Enterprise Tier Only) List Marketplace plan to be purchased.
az spring list-marketplace-plan

# (Standard and Basic Tier Only) List supported server versions.
az spring list-support-server-versions

# Show the details for an Azure Spring Apps.
az spring show

# Start an Azure Spring Apps.
az spring start

# Stop an Azure Spring Apps.
az spring stop

# Update an Azure Spring Apps.
az spring update

# Clear all settings of API portal.
az spring api-portal clear

# Create API portal.
az spring api-portal create

# Delete API portal.
az spring api-portal delete

# Show the settings, provisioning status and runtime status of API portal.
az spring api-portal show

# Update an existing API portal properties.
az spring api-portal update

# Bind a custom domain with the API portal.
az spring api-portal custom-domain bind

# List all custom domains of the API portal.
az spring api-portal custom-domain list

# Show details of a custom domain.
az spring api-portal custom-domain show

# Unbind a custom-domain of the API portal.
az spring api-portal custom-domain unbind

# Update a custom domain of the API portal.
az spring api-portal custom-domain update

# (Enterprise Tier Only) Create an APM.
az spring apm create

# (Enterprise Tier Only) Delete an APM.
az spring apm delete

# (Enterprise Tier Only) Disable an APM globally.
az spring apm disable-globally

# (Enterprise Tier Only) Enable an APM globally.
az spring apm enable-globally

# (Enterprise Tier Only) List all the APMs in the Azure Spring Apps. The secrets will be omitted.
az spring apm list

# (Enterprise Tier Only) List all the APMs enabled globally in the Azure Spring Apps.
az spring apm list-enabled-globally

# (Enterprise Tier Only) List all the supported APM types in the Azure Spring Apps.
az spring apm list-support-types

# (Enterprise Tier Only) Show an APM. The secrets will be masked.
az spring apm show

# (Enterprise Tier Only) Update an APM.
az spring apm update

# Show Application Insights settings.
az spring app-insights show

# Update Application Insights settings.
az spring app-insights update

# Append a new loaded public certificate to an app in the Azure Spring Apps.
az spring app append-loaded-public-certificate

# Append a new persistent storage to an app in the Azure Spring Apps.
az spring app append-persistent-storage

# Connect to the interactive shell of an app instance for troubleshooting'.
az spring app connect

# Create a new app with a default deployment in the Azure Spring Apps instance.
az spring app create

# Delete an app in the Azure Spring Apps.
az spring app delete

# Deploy source code or pre-built binary to an app and update related configurations.
az spring app deploy

# Disable remote debugging for a deployment.
az spring app disable-remote-debugging

# Enable remote debugging for a deployment.
az spring app enable-remote-debugging

# Get the remote debugging configuration of a deployment.
az spring app get-remote-debugging-config

# List all apps in the Azure Spring Apps.
az spring app list

# Show logs of an app instance, logs will be streamed when setting '-f/--follow'.
az spring app logs

# Restart instances of the app, default to production deployment.
az spring app restart

# Manually scale an app or its deployments.
az spring app scale

# Set production deployment of an app.
az spring app set-deployment

# Show the details of an app in the Azure Spring Apps.
az spring app show

# Show build log of the last deploy, only apply to source code deploy, default to production deployment.
az spring app show-deploy-log

# Start instances of the app, default to production deployment.
az spring app start

# Stop instances of the app, default to production deployment.
az spring app stop

# Unset production deployment of an app.
az spring app unset-deployment

# Update configurations of an app.
az spring app update

# Bind a custom domain with the app.
az spring app custom-domain bind

# List all custom domains of the app.
az spring app custom-domain list

# Show details of a custom domain.
az spring app custom-domain show

# Unbind a custom-domain of the app.
az spring app custom-domain unbind

# Update a custom domain of the app.
az spring app custom-domain update

# Create a staging deployment for the app. To deploy code or update setting to an existing deployment, use `az spring app deploy/update --deployment <staging deployment>`.
az spring app deployment create

# Delete a deployment of the app.
az spring app deployment delete

# Generate a heap dump of your target app instance to given file path.
az spring app deployment generate-heap-dump

# Generate a thread dump of your target app instance to given file path.
az spring app deployment generate-thread-dump

# List all deployments in an app.
az spring app deployment list

# Show details of a deployment.
az spring app deployment show

# Start a JFR on your target app instance to given file path.
az spring app deployment start-jfr

# Enable system-assigned managed identity or assign user-assigned managed identities to an app.
az spring app identity assign

# Force set managed identities on an app.
az spring app identity force-set

# Remove managed identity from an app.
az spring app identity remove

# Display app's managed identity info.
az spring app identity show

# (Enterprise Tier Only) Create Application Accelerator in Azure Spring Apps instance.
az spring application-accelerator create

# (Enterprise Tier Only) Delete Application Accelerator from Azure Spring Apps instance.
az spring application-accelerator delete

# (Enterprise Tier Only) Show the settings, provisioning status and runtime status of Application Accelerator.
az spring application-accelerator show

# (Enterprise Tier Only) Create a customized accelerator.
az spring application-accelerator customized-accelerator create

# (Enterprise Tier Only) Delete a customized accelerator.
az spring application-accelerator customized-accelerator delete

# (Enterprise Tier Only) List all existing customized accelerators.
az spring application-accelerator customized-accelerator list

# (Enterprise Tier Only) Show the settings, provisioning status and runtime status of customized accelerator.
az spring application-accelerator customized-accelerator show

# (Enterprise Tier Only) Sync certificate of a customized accelerator.
az spring application-accelerator customized-accelerator sync-cert

# (Enterprise Tier Only) Update a customized accelerator.
az spring application-accelerator customized-accelerator update

# (Enterprise Tier Only) Disable a predefined accelerator.
az spring application-accelerator predefined-accelerator disable

# (Enterprise Tier Only) Enable a predefined accelerator.
az spring application-accelerator predefined-accelerator enable

# (Enterprise Tier Only) List all existing predefined accelerators.
az spring application-accelerator predefined-accelerator list

# (Enterprise Tier Only) Show the settings, provisioning status and runtime status of predefined accelerator.
az spring application-accelerator predefined-accelerator show

# Bind an app to Application Configuration Service.
az spring application-configuration-service bind

# Reset all Application Configuration Service settings.
az spring application-configuration-service clear

# Create Application Configuration Service.
az spring application-configuration-service create

# Delete Application Configuration Service.
az spring application-configuration-service delete

# Show the provisioning status, runtime status, and settings of Application Configuration Service.
az spring application-configuration-service show

# Unbind an app from Application Configuration Service.
az spring application-configuration-service unbind

# Update Application Configuration Service.
az spring application-configuration-service update

# Command to show the configurations pulled by Application Configuration Service from upstream Git repositories.
az spring application-configuration-service config show

# Add a Git property to the Application Configuration Service settings.
az spring application-configuration-service git repo add

# List all Git settings of Application Configuration Service.
az spring application-configuration-service git repo list

# Delete an existing Git property from the Application Configuration Service settings.
az spring application-configuration-service git repo remove

# Update an existing Git property in the Application Configuration Service settings.
az spring application-configuration-service git repo update

# Create Application Live View.
az spring application-live-view create

# Delete Application Live View.
az spring application-live-view delete

# Show the provisioning state, running status and settings of Application Live View.
az spring application-live-view show

# Show the build service.
az spring build-service show

# Update the build service.
az spring build-service update

# Create a build.
az spring build-service build create

# Delete a build.
az spring build-service build delete

# List builds.
az spring build-service build list

# Show a build.
az spring build-service build show

# Update a build.
az spring build-service build update

# List build results.
az spring build-service build result list

# Show a build result.
az spring build-service build result show

# Create a builder.
az spring build-service builder create

# Delete a builder.
az spring build-service builder delete

# Show a builder.
az spring build-service builder show

# Show deployments.
az spring build-service builder show-deployments

# Update a builder.
az spring build-service builder update

# (Enterprise Tier Only) Create a buildpack binding.
az spring build-service builder buildpack-binding create

# (Enterprise Tier Only) Delete a buildpack binding.
az spring build-service builder buildpack-binding delete

# (Enterprise Tier Only) List all buildpack binding in a builder. The secrets will be masked.
az spring build-service builder buildpack-binding list

# (Enterprise Tier Only) Set a buildpack binding.
az spring build-service builder buildpack-binding set

# (Enterprise Tier Only) Show a buildpack binding. The secrets will be masked.
az spring build-service builder buildpack-binding show

# Add a certificate in Azure Spring Apps.
az spring certificate add

# List all certificates in Azure Spring Apps.
az spring certificate list

# List all the apps reference an existing certificate in the Azure Spring Apps.
az spring certificate list-reference-app

# Remove a certificate in Azure Spring Apps.
az spring certificate remove

# Show a certificate in Azure Spring Apps.
az spring certificate show

# Update a certificate in Azure Spring Apps.
az spring certificate update

# (Enterprise Tier Only) List managed components.
az spring component list

# (Enterprise Tier Only) Show logs for managed components. Logs will be streamed when setting '-f/--follow'. For now, only supports subcomponents of (a) Application Configuration Service (b) Spring Cloud Gateway (c) Spring Cloud Config Server.
az spring component logs

# (Enterprise Tier Only) List all available instances of a specific managed component in an Azure Spring Apps instance.
az spring component instance list

# (Enterprise Tier Only) Bind an app to Config Server.
az spring config-server bind

# Erase all settings in Config Server.
az spring config-server clear

# (Enterprise Tier Only) Create Config Server.
az spring config-server create

# (Enterprise Tier Only) Delete Config Server.
az spring config-server delete

# (Standard consumption Tier Only) Disable Config Server.
az spring config-server disable

# (Standard consumption Tier Only) Enable Config Server.
az spring config-server enable

# Set Config Server from a yaml file.
az spring config-server set

# Show Config Server.
az spring config-server show

# (Enterprise Tier Only) Unbind an app from Config Server.
az spring config-server unbind

# Set git property of Config Server, will totally override the old one.
az spring config-server git set

# Add a new repository of git property of Config Server.
az spring config-server git repo add

# List all repositories of git property of Config Server.
az spring config-server git repo list

# Remove an existing repository of git property of Config Server.
az spring config-server git repo remove

# Override an existing repository of git property of Config Server, will totally override the old one.
az spring config-server git repo update

# Delete a spring app connection.
az spring connection delete

# List connections of a spring app.
az spring connection list

# List source configurations of a spring app connection.
az spring connection list-configuration

# List client types and auth types supported by spring app connections.
az spring connection list-support-types

# Get the details of a spring app connection.
az spring connection show

# Validate a spring app connection.
az spring connection validate

# Place the CLI in a waiting state until a condition of the connection is met.
az spring connection wait

# Create a spring app connection to app-insights.
az spring connection create app-insights

# Create a spring app connection to appconfig.
az spring connection create appconfig

# Create a spring app connection to cognitiveservices.
az spring connection create cognitiveservices

# Create a spring app connection to confluent-cloud.
az spring connection create confluent-cloud

# Create a spring app connection to cosmos-cassandra.
az spring connection create cosmos-cassandra

# Create a spring app connection to cosmos-gremlin.
az spring connection create cosmos-gremlin

# Create a spring app connection to cosmos-mongo.
az spring connection create cosmos-mongo

# Create a spring app connection to cosmos-sql.
az spring connection create cosmos-sql

# Create a spring app connection to cosmos-table.
az spring connection create cosmos-table

# Create a spring app connection to eventhub.
az spring connection create eventhub

# Create a spring app connection to fabric-sql.
az spring connection create fabric-sql

# Create a spring app connection to keyvault.
az spring connection create keyvault

# Create a spring app connection to mongodb-atlas.
az spring connection create mongodb-atlas

# Create a spring app connection to mysql.
az spring connection create mysql

# Create a spring app connection to mysql-flexible.
az spring connection create mysql-flexible

# Create a spring app connection to neon-postgres.
az spring connection create neon-postgres

# Create a spring app connection to postgres.
az spring connection create postgres

# Create a spring app connection to postgres-flexible.
az spring connection create postgres-flexible

# Create a spring app connection to redis.
az spring connection create redis

# Create a spring app connection to redis-enterprise.
az spring connection create redis-enterprise

# Create a spring app connection to servicebus.
az spring connection create servicebus

# Create a spring app connection to signalr.
az spring connection create signalr

# Create a spring app connection to sql.
az spring connection create sql

# Create a spring app connection to storage-blob.
az spring connection create storage-blob

# Create a spring app connection to storage-file.
az spring connection create storage-file

# Create a spring app connection to storage-queue.
az spring connection create storage-queue

# Create a spring app connection to storage-table.
az spring connection create storage-table

# Create a spring app connection to webpubsub.
az spring connection create webpubsub

# Update a spring app to app-insights connection.
az spring connection update app-insights

# Update a spring app to appconfig connection.
az spring connection update appconfig

# Update a spring app to cognitiveservices connection.
az spring connection update cognitiveservices

# Update a spring app to confluent-cloud connection.
az spring connection update confluent-cloud

# Update a spring app to cosmos-cassandra connection.
az spring connection update cosmos-cassandra

# Update a spring app to cosmos-gremlin connection.
az spring connection update cosmos-gremlin

# Update a spring app to cosmos-mongo connection.
az spring connection update cosmos-mongo

# Update a spring app to cosmos-sql connection.
az spring connection update cosmos-sql

# Update a spring app to cosmos-table connection.
az spring connection update cosmos-table

# Update a spring app to eventhub connection.
az spring connection update eventhub

# Update a spring app to fabric-sql connection.
az spring connection update fabric-sql

# Update a spring app to keyvault connection.
az spring connection update keyvault

# Update a spring app to mongodb-atlas connection.
az spring connection update mongodb-atlas

# Update a spring app to mysql connection.
az spring connection update mysql

# Update a spring app to mysql-flexible connection.
az spring connection update mysql-flexible

# Update a spring app to neon-postgres connection.
az spring connection update neon-postgres

# Update a spring app to postgres connection.
az spring connection update postgres

# Update a spring app to postgres-flexible connection.
az spring connection update postgres-flexible

# Update a spring app to redis connection.
az spring connection update redis

# Update a spring app to redis-enterprise connection.
az spring connection update redis-enterprise

# Update a spring app to servicebus connection.
az spring connection update servicebus

# Update a spring app to signalr connection.
az spring connection update signalr

# Update a spring app to sql connection.
az spring connection update sql

# Update a spring app to storage-blob connection.
az spring connection update storage-blob

# Update a spring app to storage-file connection.
az spring connection update storage-file

# Update a spring app to storage-queue connection.
az spring connection update storage-queue

# Update a spring app to storage-table connection.
az spring connection update storage-table

# Update a spring app to webpubsub connection.
az spring connection update webpubsub

# Create a container registry.
az spring container-registry create

# Delete a container registry.
az spring container-registry delete

# List all container registries.
az spring container-registry list

# Show a container registry.
az spring container-registry show

# Update a container registry.
az spring container-registry update

# Create Dev Tool Portal.
az spring dev-tool create

# Delete Dev Tool Portal.
az spring dev-tool delete

# Show the provisioning state, running status and settings of Dev Tool Portal.
az spring dev-tool show

# Update Dev Tool Portal.
az spring dev-tool update

# (Support Standard consumption Tier) Disable Eureka Server.
az spring eureka-server disable

# (Support Standard consumption Tier) Enable Eureka Server.
az spring eureka-server enable

# (Support Standard consumption Tier) Show Eureka Server.
az spring eureka-server show

# Clear all settings of gateway.
az spring gateway clear

# Create Spring Cloud Gateway.
az spring gateway create

# Delete Spring Cloud Gateway.
az spring gateway delete

# Restart Spring Cloud Gateway.
az spring gateway restart

# Show the settings, provisioning status and runtime status of gateway.
az spring gateway show

# Sync certificate of gateway.
az spring gateway sync-cert

# Update an existing gateway properties.
az spring gateway update

# Bind a custom domain with the gateway.
az spring gateway custom-domain bind

# List all custom domains of the gateway.
az spring gateway custom-domain list

# Show details of a custom domain.
az spring gateway custom-domain show

# Unbind a custom-domain of the gateway.
az spring gateway custom-domain unbind

# Update a custom domain of the gateway.
az spring gateway custom-domain update

# Create a gateway route config with routing rules of Json array format.
az spring gateway route-config create

# List all existing gateway route configs.
az spring gateway route-config list

# Delete an existing gateway route config.
az spring gateway route-config remove

# Get an existing gateway route config.
az spring gateway route-config show

# Update an existing gateway route config with routing rules of Json array format.
az spring gateway route-config update

# Create a new job in Azure Spring Apps service.
az spring job create

# Delete a job in the Azure Spring Apps.
az spring job delete

# Deploy artifact to a job and update related configurations.
az spring job deploy

# List all jobs in the Azure Spring Apps.
az spring job list

# Show logs for job execution instances. Logs will be streamed when setting '-f/--follow'.
az spring job logs

# Show the details of a job in the Azure Spring Apps.
az spring job show

# Start an execution of the job.
az spring job start

# Update configurations of a job.
az spring job update

# Cancel a job execution.
az spring job execution cancel

# List all executions of the job.
az spring job execution list

# Show status and results of an execution of the job.
az spring job execution show

# List all instances of the job execution.
az spring job execution instance list

# Commands to add a constumer private DNS zone with Azure Spring Apps.
az spring private-dns-zone add

# Commands to clean up constumer private DNS zone in Azure Spring Apps.
az spring private-dns-zone clean

# Commands to update constumer private DNS zone in Azure Spring Apps.
az spring private-dns-zone update

# Bind an app or a job to Service Registry.
az spring service-registry bind

# Create Service Registry.
az spring service-registry create

# Delete Service Registry.
az spring service-registry delete

# Show the provisioning status and runtime status of Service Registry.
az spring service-registry show

# Unbind an app or a job from Service Registry.
az spring service-registry unbind

# Create a new storage in the Azure Spring Apps.
az spring storage add

# List all existing storages in the Azure Spring Apps.
az spring storage list

# List all the persistent storages related to an existing storage in the Azure Spring Apps.
az spring storage list-persistent-storage

# Remove an existing storage in the Azure Spring Apps.
az spring storage remove

# Get an existing storage in the Azure Spring Apps.
az spring storage show

# Update an existing storage in the Azure Spring Apps.
az spring storage update

# Disable test endpoint of the Azure Spring Apps.
az spring test-endpoint disable

# Enable test endpoint of the Azure Spring Apps.
az spring test-endpoint enable

# List test endpoint keys of the Azure Spring Apps.
az spring test-endpoint list

# Regenerate a test-endpoint key for the Azure Spring Apps.
az spring test-endpoint renew-key
```
