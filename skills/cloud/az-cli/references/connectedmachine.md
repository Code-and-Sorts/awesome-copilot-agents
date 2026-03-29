# az connectedmachine

```bash
# Assess patches on an Azure Arc-Enabled Server.
az connectedmachine assess-patches

# Delete an Azure Arc-Enabled Server.
az connectedmachine delete

# Install patches on an Azure Arc-Enabled Server.
az connectedmachine install-patches

# List all the hybrid machines in the specified subscription or resource group.
az connectedmachine list

# Get information about the model view or the instance view of an Azure Arc-Enabled Server.
az connectedmachine show

# Update operation to update a hybrid machine.
az connectedmachine update

# Upgrade Machine Extensions.
az connectedmachine upgrade-extension

# Create operation to create or update the extension.
az connectedmachine extension create

# Delete operation to delete the extension.
az connectedmachine extension delete

# Get all extensions of a Non-Azure machine.
az connectedmachine extension list

# Get operation to get the extension.
az connectedmachine extension show

# Update operation to create or update the extension.
az connectedmachine extension update

# Place the CLI in a waiting state until a condition is met.
az connectedmachine extension wait

# List all Extension versions based on location, publisher, extensionType.
az connectedmachine extension image list

# Get an Extension Metadata based on location, publisher, extensionType and version.
az connectedmachine extension image show

# Create operation to create a license profile.
az connectedmachine license-profile create

# Delete operation to delete a license profile.
az connectedmachine license-profile delete

# List operation to get all license profiles of a non-Azure machine.
az connectedmachine license-profile list

# Get information about the view of a license profile.
az connectedmachine license-profile show

# Update operation to update a license profile.
az connectedmachine license-profile update

# Place the CLI in a waiting state until a condition is met.
az connectedmachine license-profile wait

# Create a license.
az connectedmachine license create

# Delete a license.
az connectedmachine license delete

# Get all licenses of a non-Azure machine.
az connectedmachine license list

# Get information about the view of a license.
az connectedmachine license show

# Update operation to update a license.
az connectedmachine license update

# Place the CLI in a waiting state until a condition is met.
az connectedmachine license wait

# Delete a private endpoint connection with a given name.
az connectedmachine private-endpoint-connection delete

# List all private endpoint connections on a private link scope.
az connectedmachine private-endpoint-connection list

# Get a private endpoint connection.
az connectedmachine private-endpoint-connection show

# Update a private endpoint connection with a given name.
az connectedmachine private-endpoint-connection update

# Place the CLI in a waiting state until a condition is met.
az connectedmachine private-endpoint-connection wait

# List the private link resources that need to be created for an Azure Monitor PrivateLinkScope.
az connectedmachine private-link-resource list

# Get the private link resources that need to be created for an Azure Monitor PrivateLinkScope.
az connectedmachine private-link-resource show

# Create an Azure Arc PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
az connectedmachine private-link-scope create

# Delete an Azure Arc PrivateLinkScope.
az connectedmachine private-link-scope delete

# Get a list of Azure Arc PrivateLinkScopes for a resource group or a subscription.
az connectedmachine private-link-scope list

# Get an Azure Arc PrivateLinkScope.
az connectedmachine private-link-scope show

# Update an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
az connectedmachine private-link-scope update

# Place the CLI in a waiting state until a condition is met.
az connectedmachine private-link-scope wait

# List the network security perimeter configurations for a private link scope.
az connectedmachine private-link-scope network-security-perimeter-configuration list

# Force the network security perimeter configuration to refresh for a private link scope.
az connectedmachine private-link-scope network-security-perimeter-configuration reconcile

# Get the network security perimeter configuration for a private link scope.
az connectedmachine private-link-scope network-security-perimeter-configuration show

# Create a run command.
az connectedmachine run-command create

# Delete a run command.
az connectedmachine run-command delete

# Get all the run commands of a non-Azure machine.
az connectedmachine run-command list

# Get a run command.
az connectedmachine run-command show

# Update operation to create or update a run command.
az connectedmachine run-command update

# Place the CLI in a waiting state until a condition is met.
az connectedmachine run-command wait
```
