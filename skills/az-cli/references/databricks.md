# az databricks

```bash
# Create azure databricks accessConnector.
az databricks access-connector create

# Delete the azure databricks accessConnector.
az databricks access-connector delete

# List all the azure databricks accessConnectors within a subscription.
az databricks access-connector list

# Get an azure databricks accessConnector.
az databricks access-connector show

# Update azure databricks accessConnector.
az databricks access-connector update

# Place the CLI in a waiting state until a condition is met.
az databricks access-connector wait

# Create a new workspace.
az databricks workspace create

# Delete the workspace.
az databricks workspace delete

# Get all the workspaces.
az databricks workspace list

# Show the workspace.
az databricks workspace show

# Update the workspace.
az databricks workspace update

# Place the CLI in a waiting state until a condition is met.
az databricks workspace wait

# List the list of endpoints that VNET Injected Workspace calls Azure Databricks Control Plane. You must configure outbound access with these endpoints. For more information, see https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/udr.
az databricks workspace outbound-endpoint list

# Create the status of a private endpoint connection with the specified name.
az databricks workspace private-endpoint-connection create

# Delete private endpoint connection with the specified name.
az databricks workspace private-endpoint-connection delete

# List private endpoint connections of the workspace.
az databricks workspace private-endpoint-connection list

# Get a private endpoint connection properties for a workspace.
az databricks workspace private-endpoint-connection show

# Update the status of a private endpoint connection with the specified name.
az databricks workspace private-endpoint-connection update

# Place the CLI in a waiting state until a condition is met.
az databricks workspace private-endpoint-connection wait

# List private link resources for a given workspace.
az databricks workspace private-link-resource list

# Get the specified private link resource for the given group id (sub-resource).
az databricks workspace private-link-resource show

# Create a vnet peering for a workspace.
az databricks workspace vnet-peering create

# Delete the vnet peering.
az databricks workspace vnet-peering delete

# List vnet peerings under a workspace.
az databricks workspace vnet-peering list

# Show the vnet peering.
az databricks workspace vnet-peering show

# Update the vnet peering.
az databricks workspace vnet-peering update

# Place the CLI in a waiting state until a condition is met.
az databricks workspace vnet-peering wait
```
