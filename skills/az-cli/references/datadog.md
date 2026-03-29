# az datadog

```bash
# Creates a new Datadog monitor resource in your Azure subscription. This sets up the integration between Azure and your Datadog account, enabling observability and monitoring of your Azure resources through Datadog.
az datadog monitor create

# Deletes an existing Datadog monitor resource from your Azure subscription, removing the integration and stopping the observability of your Azure resources through Datadog.
az datadog monitor delete

# Get marketplace and organization info mapped to the given monitor.
az datadog monitor get-billing-info

# Fetches the default Datadog API key associated with your monitor resource, which is used for authenticating and sending telemetry data from Azure to Datadog.
az datadog monitor get-default-key

# Retrieves a list of all Datadog monitor resources either within a specific resource group or across the entire subscription, helping you quickly audit and manage your monitoring setup.
az datadog monitor list

# Lists all API keys associated with a specific Datadog monitor resource, allowing you to manage and audit the keys used for authentication and data transmission.
az datadog monitor list-api-key

# Lists all hosts being monitored by a specific Datadog monitor resource, providing visibility into the infrastructure components under observation.
az datadog monitor list-host

# Lists all Azure resources that are linked to the same Datadog organization as the specified monitor resource, helping you understand the scope of integration.
az datadog monitor list-linked-resource

# Lists all Azure resources that are currently being monitored by the specified Datadog monitor resource, providing insight into the coverage of your observability setup.
az datadog monitor list-monitored-resource

# Refreshes the link used to set the password for the Datadog monitor resource and returns the latest link, ensuring secure access management.
az datadog monitor refresh-set-password-link

# Sets the default Datadog API key for the specified monitor resource, which will be used for authenticating and sending telemetry data from Azure to Datadog.
az datadog monitor set-default-key

# Retrieves the properties and configuration details of a specific Datadog monitor resource, providing insight into its setup and status.
az datadog monitor show

# Updates the configuration of an existing Datadog monitor resource in your Azure subscription, allowing you to modify its settings and integration parameters.
az datadog monitor update

# Place the CLI in a waiting state until a condition is met.
az datadog monitor wait

# Create the subscriptions that should be monitored by the Datadog monitor resource.
az datadog monitor monitored-subscription create

# Delete the subscriptions that are being monitored by the Datadog monitor resource.
az datadog monitor monitored-subscription delete

# List the subscriptions currently being monitored by the Datadog monitor resource.
az datadog monitor monitored-subscription list

# Get the subscriptions currently being monitored by the Datadog monitor resource.
az datadog monitor monitored-subscription show

# Update the subscriptions that should be monitored by the Datadog monitor resource.
az datadog monitor monitored-subscription update

# Sets up Single Sign-On (SSO) for your Datadog monitor resource, allowing users to log in to Datadog using their Azure Active Directory credentials for streamlined and secure access.
az datadog sso-config create

# Lists all Single Sign-On (SSO) configurations associated with a specific Datadog monitor resource, helping you manage and audit access settings.
az datadog sso-config list

# Retrieves the details of the Single Sign-On (SSO) configuration for a specific Datadog monitor resource, providing insight into its setup and status.
az datadog sso-config show

# Updates the Single Sign-On (SSO) configuration for a specific Datadog monitor resource, allowing you to modify its settings and integration parameters.
az datadog sso-config update

# Place the CLI in a waiting state until a condition is met.
az datadog sso-config wait

# List if the current subscription is being already monitored for selected Datadog organization.
az datadog subscription-status list

# Get if the current subscription is being already monitored for selected Datadog organization.
az datadog subscription-status default show

# Creates a new set of tag rules for a specific Datadog monitor resource, determining which Azure resources are monitored based on their tags.
az datadog tag-rule create

# Lists all tag rules associated with a specific Datadog monitor resource, helping you manage and audit the rules that control resource monitoring.
az datadog tag-rule list

# Retrieves the details of the tag rules for a specific Datadog monitor resource, providing insight into its setup and status.
az datadog tag-rule show

# Updates the tag rules for a specific Datadog monitor resource, allowing you to modify the rules that control which Azure resources are monitored.
az datadog tag-rule update

# Creates a new marketplace agreement for Datadog services in your Azure subscription, enabling you to subscribe to Datadog services through Azure Marketplace.
az datadog terms create

# Lists all marketplace agreements for Datadog services in your Azure subscription, helping you manage and audit your subscription and billing agreements.
az datadog terms list
```
