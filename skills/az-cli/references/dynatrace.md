# az dynatrace

```bash
# Get Marketplace SaaS resource details for a given tenant under a subscription.
az dynatrace get-marketplace-saas-resource-detail

# Create a Dynatrace resource on Azure for monitoring and observability needs.
az dynatrace monitor create

# Delete a Dynatrace resource.
az dynatrace monitor delete

# Get status of metrics being sent to the Dynatrace resource.
az dynatrace monitor get-metric-status

# Get the SSO configuration details for Dynatrace resource.
az dynatrace monitor get-sso-detail

# Return payload to be included in API request body when installing Dynatrace agent on a Virtual Machine. Use this command to facilitate automated deployment of monitoring agents across VMs.
az dynatrace monitor get-vm-host-payload

# List all MonitorResource by subscriptionId.
az dynatrace monitor list

# List all App Services that have Dynatrace OneAgent installed.
az dynatrace monitor list-app-service

# Displays compute resources (VMs, VMSS) that are currently being monitored by the specified Dynatrace resource.
az dynatrace monitor list-host

# List all available Dynatrace environments that can be integrated with your Azure Dynatrace resources.
az dynatrace monitor list-linkable-environment

# List of all Azure resources currently being monitored by a Dynatrace resource.
az dynatrace monitor list-monitored-resource

# Get Dynatrace resource properties including Dynatrace Environment information, SSO properties, resource location, marketplace subscription status and associated user information.
az dynatrace monitor show

# Update a MonitorResource.
az dynatrace monitor update

# Place the CLI in a waiting state until a condition is met.
az dynatrace monitor wait

# Create the subscriptions that should be monitored by the Dynatrace monitor resource.
az dynatrace monitor monitored-subscription create

# Delete the subscriptions that are being monitored by the Dynatrace monitor resource.
az dynatrace monitor monitored-subscription delete

# List the subscriptions currently being monitored by the Dynatrace monitor resource.
az dynatrace monitor monitored-subscription list

# Get the subscriptions currently being monitored by the Dynatrace monitor resource.
az dynatrace monitor monitored-subscription show

# Update the subscriptions that are being monitored by the Dynatrace monitor resource.
az dynatrace monitor monitored-subscription update

# Place the CLI in a waiting state until a condition is met.
az dynatrace monitor monitored-subscription wait

# Create a new SSO configuration for seamless authentication between Azure and the Dynatrace platform.
az dynatrace monitor sso-config create

# List all SSO configurations associated with a specific Dynatrace resource.
az dynatrace monitor sso-config list

# Get information about a specific Dynatrace SSO configuration including SSO state and URL.
az dynatrace monitor sso-config show

# Update a DynatraceSingleSignOnResource.
az dynatrace monitor sso-config update

# Place the CLI in a waiting state until a condition is met.
az dynatrace monitor sso-config wait

# Create a new tag rule that defines which Azure resources should be monitored based on their assigned tags.
az dynatrace monitor tag-rule create

# Remove or delete a tag rule from Dynatrace resource.
az dynatrace monitor tag-rule delete

# List all tag rules associated with a Dynatrace resource. This helps understand the current monitoring inclusion/exclusion logic across your environment.
az dynatrace monitor tag-rule list

# Get detailed information about include/exclude tag rules enabled for logs and metrics.
az dynatrace monitor tag-rule show

# Update an existing tag rule.
az dynatrace monitor tag-rule update

# Place the CLI in a waiting state until a condition is met.
az dynatrace monitor tag-rule wait

# List all MonitorResource by subscriptionId.
az dynatrace observability monitor list

# Performs Dynatrace agent install/uninstall action through the Azure Dynatrace resource on the provided list of resources.
az dynatrace observability monitor manage-agent-installation

# Upgrades the billing Plan for Dynatrace monitor resource.
az dynatrace observability monitor upgrade-plan
```
