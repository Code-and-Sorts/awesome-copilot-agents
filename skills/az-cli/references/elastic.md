# az elastic

```bash
# Retrieve mapping details between the Elastic Organization and Azure Subscription for the logged-in user.
az elastic get-elastic-organization-to-azure-subscription-mapping

# Fetch the User API Key from the internal database, if it was generated and stored during the creation of the Elasticsearch Organization.
az elastic get-organization-api-key

# List a list of all available Elastic versions for a specified region, helping you choose the best version for your deployment.
az elastic elastic-version list

# Retrieve mapping details between the Elastic Organization and Azure Subscription for the logged-in user.
az elastic get elastic organization-to-azure subscription mapping

# Associate a traffic filter with your Elastic monitor resource to control and manage network traffic.
az elastic monitor associate-traffic-filter

# Create a new Elastic monitor resource in your Azure subscription, enabling observability and monitoring of your Azure resources through Elastic.
az elastic monitor create

# Create and associate an IP filter with your Elastic monitor resource to control and manage network traffic.
az elastic monitor create-and-associate-ip-filter

# Create and associate a PL filter with your Elastic monitor resource to control and manage network traffic.
az elastic monitor create-and-associate-pl-filter

# Create or update external user configurations for your Elastic monitor resource, enabling access and management by external users.
az elastic monitor create-or-update-external-user

# Delete an existing Elastic monitor resource from your Azure subscription, removing its observability and monitoring capabilities.
az elastic monitor delete

# Delete an existing traffic filter associated with your Elastic monitor resource, removing its network traffic control capabilities.
az elastic monitor delete-traffic-filter

# Detach and delete an existing traffic filter from your Elastic monitor resource, removing its network traffic control capabilities.
az elastic monitor detach-and-delete-traffic-filter

# Detach an existing traffic filter from your Elastic monitor resource, removing its network traffic control capabilities.
az elastic monitor detach-traffic-filter

# Retrieve marketplace and organization billing information mapped to the given Elastic monitor resource.
az elastic monitor get-billing-info

# List all Elastic monitor resources within a specified subscription, helping you audit and manage your monitoring setup.
az elastic monitor list

# List all traffic filters associated with your Elastic monitor resource, helping you manage network traffic control.
az elastic monitor list-all-traffic-filter

# List all traffic filters associated with your Elastic monitor resource, helping you manage network traffic control.
az elastic monitor list-associated-traffic-filter

# List all active deployments associated with the marketplace subscription linked to the given Elastic monitor resource.
az elastic monitor list-connected-partner-resource

# Fetch detailed information about Elastic cloud deployments corresponding to the Elastic monitor resource.
az elastic monitor list-deployment-info

# List all resources currently being monitored by the Elastic monitor resource, helping you manage observability.
az elastic monitor list-monitored-resource

# List all resources currently being monitored by the Elastic monitor resource, helping you manage observability.
az elastic monitor list-resource

# List all upgradable versions for your Elastic monitor resource, helping you plan and execute upgrades.
az elastic monitor list-upgradable-version

# List all VM resources currently being monitored by the Elastic monitor resource, helping you manage observability.
az elastic monitor list-vm-host

# Get detailed properties of a specific Elastic monitor resource, helping you manage observability and performance.
az elastic monitor show

# Update a new Elastic monitor resource in your Azure subscription, enabling observability and monitoring of your Azure resources through Elastic.
az elastic monitor update

# Update the VM details that will be monitored by the Elastic monitor resource, ensuring optimal observability and performance.
az elastic monitor update-vm-collection

# Upgrade the Elastic monitor resource to a newer version, ensuring optimal observability and performance.
az elastic monitor upgrade

# Update the VM details that will be monitored by the Elastic monitor resource, ensuring optimal observability and performance.
az elastic monitor vm-collection-update

# List detailed information about VM ingestion that will be monitored by the Elastic monitor resource, ensuring optimal observability and performance.
az elastic monitor vm-ingestion-detail

# Place the CLI in a waiting state until a condition is met.
az elastic monitor wait

# Create subscriptions to be monitored by the Elastic monitor resource, enabling observability and monitoring.
az elastic monitor monitored-subscription create

# Delete subscriptions being monitored by the Elastic monitor resource, removing their observability and monitoring capabilities.
az elastic monitor monitored-subscription delete

# List all subscriptions currently being monitored by the Elastic monitor resource, helping you manage observability.
az elastic monitor monitored-subscription list

# Get detailed information about all subscriptions currently being monitored by the Elastic monitor resource.
az elastic monitor monitored-subscription show

# Update subscriptions to be monitored by the Elastic monitor resource, enabling observability and monitoring.
az elastic monitor monitored-subscription update

# Place the CLI in a waiting state until a condition is met.
az elastic monitor monitored-subscription wait

# Create an OpenAI integration rule for a given Elastic monitor resource, enabling advanced AI-driven observability and monitoring.
az elastic monitor open-ai-integration create

# Delete an OpenAI integration rule for a given Elastic monitor resource, removing AI-driven observability and monitoring capabilities.
az elastic monitor open-ai-integration delete

# Get the status of OpenAI integration for a given Elastic monitor resource, ensuring optimal observability and performance.
az elastic monitor open-ai-integration get-statu

# Get the status of OpenAI integration for a given Elastic monitor resource, ensuring optimal observability and performance.
az elastic monitor open-ai-integration get-status

# List all OpenAI integration rules for a given Elastic monitor resource, helping you manage AI-driven observability and monitoring.
az elastic monitor open-ai-integration list

# Get detailed information about OpenAI integration rules for a given Elastic monitor resource.
az elastic monitor open-ai-integration show

# Update an OpenAI integration rule for a given Elastic monitor resource, enabling advanced AI-driven observability and monitoring.
az elastic monitor open-ai-integration update

# Create a tag rule set for a given Elastic monitor resource, enabling fine-grained control over observability based on resource tags.
az elastic monitor tag-rule create

# Delete a tag rule set for a given Elastic monitor resource, removing fine-grained control over observability based on resource tags.
az elastic monitor tag-rule delete

# List all tag rules for a given Elastic monitor resource, helping you manage fine-grained control over observability based on resource tags.
az elastic monitor tag-rule list

# Get detailed information about a tag rule set for a given Elastic monitor resource.
az elastic monitor tag-rule show

# Update a tag rule set for a given Elastic monitor resource, enabling fine-grained control over observability based on resource tags.
az elastic monitor tag-rule update

# Place the CLI in a waiting state until a condition is met.
az elastic monitor tag-rule wait
```
