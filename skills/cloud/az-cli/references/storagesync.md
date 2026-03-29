# az storagesync

```bash
# Check the give namespace name availability.
az storagesync check-name-availability

# Create a new storage sync service.
az storagesync create

# Delete a given storage sync service.
az storagesync delete

# List all storage sync services in a resource group or a subscription.
az storagesync list

# Show the properties for a given storage sync service.
az storagesync show

# List a PrivateEndpointConnection List.
az storagesync private-endpoint-connection list

# Unregister an on-premises server from it's storage sync service.
az storagesync registered-server delete

# List all registered servers for a given storage sync service.
az storagesync registered-server list

# Show the properties for a given registered server.
az storagesync registered-server show

# Place the CLI in a waiting state until a condition of a registered server is met.
az storagesync registered-server wait

# Create a new sync group.
az storagesync sync-group create

# Delete a given sync group.
az storagesync sync-group delete

# List all sync groups in a storage sync service.
az storagesync sync-group list

# Show the properties for a given sync group.
az storagesync sync-group show

# Create a new cloud endpoint.
az storagesync sync-group cloud-endpoint create

# Delete a given cloud endpoint.
az storagesync sync-group cloud-endpoint delete

# List all cloud endpoints in a sync group.
az storagesync sync-group cloud-endpoint list

# Show the properties for a given cloud endpoint.
az storagesync sync-group cloud-endpoint show

# Triggers detection of changes performed on Azure File share connected to the specified Azure File Sync Cloud Endpoint.
az storagesync sync-group cloud-endpoint trigger-change-detection

# Place the CLI in a waiting state until a condition of a cloud endpoint is met.
az storagesync sync-group cloud-endpoint wait

# Create a new server endpoint.
az storagesync sync-group server-endpoint create

# Delete a given server endpoint.
az storagesync sync-group server-endpoint delete

# List all server endpoints in a sync group.
az storagesync sync-group server-endpoint list

# Show the properties for a given server endpoint.
az storagesync sync-group server-endpoint show

# Update the properties for a given server endpoint.
az storagesync sync-group server-endpoint update

# Place the CLI in a waiting state until a condition of a server endpoint is met.
az storagesync sync-group server-endpoint wait
```
