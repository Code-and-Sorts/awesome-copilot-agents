# az search

```bash
# Regenerates either the primary or secondary admin API key.
az search admin-key renew

# Gets the primary and secondary admin API keys for the specified Azure Cognitive Search service.
az search admin-key show

# Disconnects the private endpoint connection and deletes it from the search service.
az search private-endpoint-connection delete

# Gets a list of all private endpoint connections in the given service.
az search private-endpoint-connection list

# Gets the details of the private endpoint connection to the search service in the given resource group.
az search private-endpoint-connection show

# Update an existing private endpoint connection in a Search service in the given resource group.
az search private-endpoint-connection update

# Gets a list of all supported private link resource types for the given service.
az search private-link-resource list

# Generates a new query key for the specified search service.
az search query-key create

# Deletes the specified query key.
az search query-key delete

# Returns the list of query API keys for the given Azure Cognitive Search service.
az search query-key list

# Checks whether or not the given search service name is available for use. Search service names must be globally unique since they are part of the service URI (https://`<name>`.search.windows.net).
az search service check-name-availability

# Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
az search service create

# Delete a search service in the given resource group, along with its associated resources.
az search service delete

# Gets a list of all Search services in the given resource group.
az search service list

# Get the search service with the given name in the given resource group.
az search service show

# Update an existing search service in the given resource group.
az search service update

# Upgrades the Azure AI Search service to the latest version available.
az search service upgrade

# Place the CLI in a waiting state until a condition is met.
az search service wait

# Gets the primary and secondary admin API keys for the specified Azure AI Search service.
az search service admin-key list

# Regenerates either the primary or secondary admin API key. You can only regenerate one key at a time.
az search service admin-key regenerate

# List a list of network security perimeter configurations for a search service.
az search service network-security-perimeter-configuration list

# Reconcile network security perimeter configuration for the Azure AI Search resource provider. This triggers a manual resync with network security perimeter configurations by ensuring the search service carries the latest configuration.
az search service network-security-perimeter-configuration reconcile

# Get a network security perimeter configuration.
az search service network-security-perimeter-configuration show

# Delete the private endpoint connection and deletes it from the search service.
az search service private-endpoint-connection delete

# List a list of all private endpoint connections in the given service.
az search service private-endpoint-connection list

# Get the details of the private endpoint connection to the search service in the given resource group.
az search service private-endpoint-connection show

# Update a private endpoint connection to the search service in the given resource group.
az search service private-endpoint-connection update

# List a list of all supported private link resource types for the given service.
az search service private-link-resource list

# Create a new query key for the specified search service. You can create up to 50 query keys per service.
az search service query-key create

# Delete the specified query key. Unlike admin keys, query keys are not regenerated. The process for regenerating a query key is to delete and then recreate it.
az search service query-key delete

# Returns the list of query API keys for the given Azure AI Search service.
az search service query-key list

# Create the creation or update of a shared private link resource managed by the search service in the given resource group.
az search service shared-private-link-resource create

# Delete the deletion of the shared private link resource from the search service.
az search service shared-private-link-resource delete

# List a list of all shared private link resources managed by the given service.
az search service shared-private-link-resource list

# Get the details of the shared private link resource managed by the search service in the given resource group.
az search service shared-private-link-resource show

# Update the creation or update of a shared private link resource managed by the search service in the given resource group.
az search service shared-private-link-resource update

# Place the CLI in a waiting state until a condition is met.
az search service shared-private-link-resource wait

# Create shared privatelink resources in a Search service in the given resource group.
az search shared-private-link-resource create

# Initiates the deletion of the shared private link resource from the search service.
az search shared-private-link-resource delete

# Gets a list of all shared private link resources managed by the given service.
az search shared-private-link-resource list

# Gets the details of the shared private link resource managed by the search service in the given resource group.
az search shared-private-link-resource show

# Update shared privatelink resources in a Search service in the given resource group.
az search shared-private-link-resource update

# Wait for async shared private link resource operations.
az search shared-private-link-resource wait

# List a list of all Azure AI Search quota usages across the subscription.
az search usage list

# Get the quota usage for a search SKU in the given subscription.
az search usage show
```
