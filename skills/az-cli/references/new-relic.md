# az new-relic

```bash
# Lists all the New Relic accounts in your Azure subscription, helping you understand the existing accounts that have been created.
az new-relic account list

# Creates a new New Relic monitor resource in your Azure subscription. This sets up the integration between Azure and your New Relic account, enabling observability and monitoring of your Azure resources through New Relic.
az new-relic monitor create

# Deletes an existing New Relic monitor resource from your Azure subscription, removing the integration and stopping the observability of your Azure resources through New Relic.
az new-relic monitor delete

# Retrieve marketplace and organization billing information mapped to the given New Relic monitor resource.
az new-relic monitor get-billing-info

# Retrieves the metric rules that are configured in the New Relic monitor resource.
az new-relic monitor get-metric-rule

# Retrieves the metric status that are configured in the New Relic monitor resource.
az new-relic monitor get-metric-statu

# Retrieves a list of all New Relic monitor resources either within a specific resource group or across the entire subscription, helping you quickly audit and manage your monitoring setup.
az new-relic monitor list

# Lists the app service resources currently being monitored by the New Relic resource, helping you understand which app services are under monitoring.
az new-relic monitor list-app-service

# List all active deployments associated with the marketplace subscription linked to the given New Relic monitor resource.
az new-relic monitor list-connected-partner-resource

# List all VM resources currently being monitored by the New Relic monitor resource, helping you manage observability.
az new-relic monitor list-host

# Lists all Azure resources that are linked to the same New Relic organization as the specified monitor resource, helping you understand the scope of integration.
az new-relic monitor list-linked-resource

# Lists all Azure resources that are currently being monitored by the specified New Relic monitor resource, providing insight into the coverage of your observability setup.
az new-relic monitor monitored-resource

# Retrieves the properties and configuration details of a specific New Relic monitor resource, providing insight into its setup and status.
az new-relic monitor show

# Switches the billing for the New Relic Monitor resource to be billed by Azure Marketplace.
az new-relic monitor switch-billing

# Returns the payload that needs to be passed in the request body for installing the New Relic agent on a VM, providing the necessary configuration details.
az new-relic monitor vm-host-payload

# Place the CLI in a waiting state until a condition is met.
az new-relic monitor wait

# Create subscriptions to be monitored by the New Relic monitor resource, enabling observability and monitoring.
az new-relic monitor monitored-subscription create

# Delete subscriptions being monitored by the New Relic monitor resource, removing their observability and monitoring capabilities.
az new-relic monitor monitored-subscription delete

# Get detailed information about all subscriptions currently being monitored by the New Relic monitor resource.
az new-relic monitor monitored-subscription show

# Update subscriptions to be monitored by the New Relic monitor resource, ensuring optimal observability and performance.
az new-relic monitor monitored-subscription update

# Place the CLI in a waiting state until a condition is met.
az new-relic monitor monitored-subscription wait

# Creates a new set of tag rules for a specific New Relic monitor resource, determining which Azure resources are monitored based on their tags.
az new-relic monitor tag-rule create

# Delete a tag rule set for a given New Relic monitor resource, removing fine-grained control over observability based on resource tags.
az new-relic monitor tag-rule delete

# Lists all tag rules associated with a specific New Relic monitor resource, helping you manage and audit the rules that control resource monitoring.
az new-relic monitor tag-rule list

# Retrieves the details of the tag rules for a specific New Relic monitor resource, providing insight into its setup and status.
az new-relic monitor tag-rule show

# Updates the tag rules for a specific New Relic monitor resource, allowing you to modify the rules that control which Azure resources are monitored.
az new-relic monitor tag-rule update

# Place the CLI in a waiting state until a condition is met.
az new-relic monitor tag-rule wait

# Lists all the New Relic organizations in your Azure subscription, helping you understand the existing organizations that have been created.
az new-relic organization list

# Lists all the plans data in your Azure subscription, providing an overview of the available plans.
az new-relic plan list
```
