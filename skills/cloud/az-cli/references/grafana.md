# az grafana

```bash
# Backup an Azure Managed Grafana instance's content to an archive.
az grafana backup

# Create a workspace for Grafana resource. This API is idempotent, so user can either create a new grafana or update an existing grafana.
az grafana create

# Delete a workspace for Grafana resource.
az grafana delete

# List all resources of workspaces for Grafana under the specified subscription.
az grafana list

# List all the available plugins.
az grafana list-available-plugin

# Migrate an existing Grafana instance to an Azure Managed Grafana instance.
az grafana migrate

# Restore an Azure Managed Grafana instance from an archive.
az grafana restore

# Get the properties of a specific workspace for Grafana resource.
az grafana show

# Update a workspace for Grafana resource.
az grafana update

# Place the CLI in a waiting state until a condition is met.
az grafana wait

# Create a new API key.
az grafana api-key create

# Delete an API key.
az grafana api-key delete

# List existing API keys.
az grafana api-key list

# Create a new dashboard.
az grafana dashboard create

# Delete a dashboard.
az grafana dashboard delete

# Import a dashboard.
az grafana dashboard import

# List all dashboards of an instance.
az grafana dashboard list

# Get the details of a dashboard.
az grafana dashboard show

# Sync Azure Managed Grafana dashboards from one instance to another instance. Library panels within the dashboards will be automatically included in the sync. Note, dashboards with "Provisioned" state will be skipped due to being read-only.
az grafana dashboard sync

# Update a dashboard.
az grafana dashboard update

# Create a data source.
az grafana data-source create

# Delete a data source.
az grafana data-source delete

# List all data sources of an instance.
az grafana data-source list

# Query a data source having backend implementation.
az grafana data-source query

# Get the details of a data source.
az grafana data-source show

# Update a data source.
az grafana data-source update

# Create a new folder.
az grafana folder create

# Delete a folder.
az grafana folder delete

# List all folders of an instance.
az grafana folder list

# Get the details of a folder.
az grafana folder show

# Update a folder.
az grafana folder update

# Link an Azure Monitor workspace to a Grafana instance.
az grafana integrations monitor add

# Unlink an Azure Monitor workspace from a Grafana instance.
az grafana integrations monitor delete

# List all Azure Monitor workspaces linked to a Grafana instance.
az grafana integrations monitor list

# Create a managed private endpoint.
az grafana mpe create

# Delete a managed private endpoint.
az grafana mpe delete

# List all managed private endpoints.
az grafana mpe list

# Refresh and sync managed private endpoints to latest state.
az grafana mpe refresh

# Get a specific managed private endpoint.
az grafana mpe show

# Place the CLI in a waiting state until a condition is met.
az grafana mpe wait

# Create a notification channel.
az grafana notification-channel create

# Delete a notification channel.
az grafana notification-channel delete

# List all notification channels of an instance.
az grafana notification-channel list

# Get the details of a notification channel.
az grafana notification-channel show

# Test a notification channel.
az grafana notification-channel test

# Update a notification channel.
az grafana notification-channel update

# Delete a private endpoint connection.
az grafana private-endpoint-connection delete

# List all private endpoint connections.
az grafana private-endpoint-connection list

# Get a specific private endpoint connection.
az grafana private-endpoint-connection show

# Update a private endpoint connection.
az grafana private-endpoint-connection update

# Place the CLI in a waiting state until a condition is met.
az grafana private-endpoint-connection wait

# Create a new service account.
az grafana service-account create

# Delete a service account.
az grafana service-account delete

# List existing service accounts.
az grafana service-account list

# Get the details of a service account.
az grafana service-account show

# Update a service account.
az grafana service-account update

# Create a new service account token.
az grafana service-account token create

# Delete a service account token.
az grafana service-account token delete

# List existing service account tokens.
az grafana service-account token list

# Get the details of the current user.
az grafana user actual-user

# List users.
az grafana user list

# Get the details of a user.
az grafana user show
```
