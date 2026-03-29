# az cdn

```bash
# Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint.
az cdn name-exists

# Check the quota and actual usage of the CDN profiles under the given subscription.
az cdn usage

# Create a new custom domain within an endpoint.
az cdn custom-domain create

# Delete an existing custom domain within an endpoint.
az cdn custom-domain delete

# Disable https delivery of the custom domain.
az cdn custom-domain disable-https

# Enable HTTPS for a custom domain. The resource name of the custom domain could be obtained using "az cdn custom-domain list".
az cdn custom-domain enable-https

# List all of the existing custom domains within an endpoint.
az cdn custom-domain list

# Get an existing custom domain within an endpoint.
az cdn custom-domain show

# Update a new custom domain within an endpoint.
az cdn custom-domain update

# Place the CLI in a waiting state until a condition is met.
az cdn custom-domain wait

# A long-running operation for adding an EdgeAction attachment.
az cdn edge-action add-attachment

# Create EdgeAction resource.
az cdn edge-action create

# Delete EdgeAction resource.
az cdn edge-action delete

# A long-running operation for deleting an EdgeAction attachment that returns no content.
az cdn edge-action delete-attachment

# List EdgeAction resources by subscription ID.
az cdn edge-action list

# Get EdgeAction resource.
az cdn edge-action show

# Update EdgeAction resource.
az cdn edge-action update

# Place the CLI in a waiting state until a condition is met.
az cdn edge-action wait

# Create EdgeActionExecutionFilter resource.
az cdn edge-action execution-filter create

# Delete EdgeActionExecutionFilter resource.
az cdn edge-action execution-filter delete

# List EdgeActionExecutionFilter resources by EdgeAction.
az cdn edge-action execution-filter list

# Get EdgeActionExecutionFilter resource.
az cdn edge-action execution-filter show

# Update EdgeActionExecutionFilter resource.
az cdn edge-action execution-filter update

# Place the CLI in a waiting state until a condition is met.
az cdn edge-action execution-filter wait

# Create EdgeActionVersion version.
az cdn edge-action version create

# Delete EdgeActionVersion resource.
az cdn edge-action version delete

# A long-running operation to deploy versioncode to EdgeActionVersion resource.
az cdn edge-action version deploy-version-code

# A long-running operation to get versioncode deployed to EdgeActionVersion resource.
az cdn edge-action version get-version-code

# List EdgeActionVersion resources by EdgeAction.
az cdn edge-action version list

# Get EdgeActionVersion resource.
az cdn edge-action version show

# Update EdgeActionVersion version.
az cdn edge-action version update

# Place the CLI in a waiting state until a condition is met.
az cdn edge-action version wait

# List are the global Point of Presence (POP) locations used to deliver CDN content to end users.
az cdn edge-node list

# Create a new CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
az cdn endpoint create

# Delete an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
az cdn endpoint delete

# List existing CDN endpoints.
az cdn endpoint list

# Pre-loads a content to CDN. Available for Verizon Profiles.
az cdn endpoint load

# Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint.
az cdn endpoint name-exists

# Removes a content from CDN.
az cdn endpoint purge

# Get an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
az cdn endpoint show

# Starts an existing CDN endpoint that is on a stopped state.
az cdn endpoint start

# Stops an existing running CDN endpoint.
az cdn endpoint stop

# Update an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile. Only tags can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update origin groups, use the Update Origin group operation. To update custom domains, use the Update Custom Domain operation.
az cdn endpoint update

# Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.
az cdn endpoint validate-custom-domain

# Place the CLI in a waiting state until a condition is met.
az cdn endpoint wait

# Add a delivery rule to a CDN endpoint.
az cdn endpoint rule add

# Remove a delivery rule from an endpoint.
az cdn endpoint rule remove

# Show delivery rules associate with the endpoint.
az cdn endpoint rule show

# Add an action to a delivery rule.
az cdn endpoint rule action add

# Remove an action from a delivery rule.
az cdn endpoint rule action remove

# Show delivery rules asscociate with the endpoint.
az cdn endpoint rule action show

# Add a condition to a delivery rule.
az cdn endpoint rule condition add

# Remove a condition from a delivery rule.
az cdn endpoint rule condition remove

# Show delivery rules associate with the endpoint.
az cdn endpoint rule condition show

# Create a new origin group within the specified endpoint.
az cdn origin-group create

# Delete an existing origin group within an endpoint.
az cdn origin-group delete

# List all of the existing origin groups within an endpoint.
az cdn origin-group list

# Get an existing origin group within an endpoint.
az cdn origin-group show

# Update a new origin group within the specified endpoint.
az cdn origin-group update

# Place the CLI in a waiting state until a condition is met.
az cdn origin-group wait

# Create a new origin within the specified endpoint.
az cdn origin create

# Delete an existing origin within an endpoint.
az cdn origin delete

# List all of the existing origins within an endpoint.
az cdn origin list

# Get an existing origin within an endpoint.
az cdn origin show

# Update a new origin within the specified endpoint.
az cdn origin update

# Place the CLI in a waiting state until a condition is met.
az cdn origin wait

# Abort the migration to Azure Frontdoor Premium/Standard.
az cdn profile-migration abort

# Checks if CDN profile can be migrated to Azure Frontdoor(Standard/Premium) profile.
az cdn profile-migration check-compatibility

# Commit the migrated Azure Frontdoor(Standard/Premium) profile.
az cdn profile-migration commit

# Migrate the CDN profile to Azure Frontdoor(Standard/Premium) profile. This step prepares the profile for migration and will be followed by Commit to finalize the migration.
az cdn profile-migration migrate

# Create a new Azure Front Door Standard or Azure Front Door Premium or CDN profile with a profile name under the specified subscription and resource group.
az cdn profile create

# Delete an existing  Azure Front Door Standard or Azure Front Door Premium or CDN profile with the specified parameters. Deleting a profile will result in the deletion of all of the sub-resources including endpoints, origins and custom domains.
az cdn profile delete

# List all of the Azure Front Door Standard, Azure Front Door Premium, and CDN profiles within an Azure subscription.
az cdn profile list

# Get an Azure Front Door Standard or Azure Front Door Premium or CDN profile with the specified profile name under the specified subscription and resource group.
az cdn profile show

# Update a new Azure Front Door Standard or Azure Front Door Premium or CDN profile with a profile name under the specified subscription and resource group.
az cdn profile update

# Approve the deployment of the version.
az cdn profile deployment-version approve

# Compare the deployment version to another deployment version.
az cdn profile deployment-version compare

# List existing deployment versions by profile.
az cdn profile deployment-version list

# Get an existing DeploymentVersion with the specified version name under the specified subscription, resource group and profile.
az cdn profile deployment-version show

# Update an existing DeploymentVersion within a profile.
az cdn profile deployment-version update
```
