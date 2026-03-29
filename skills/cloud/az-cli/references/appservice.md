# az appservice

```bash
# List regions where a plan sku is available.
az appservice list-locations

# Create App Service Environment.
az appservice ase create

# Private DNS Zone for Internal (ILB) App Service Environments.
az appservice ase create-inbound-services

# Delete App Service Environment.
az appservice ase delete

# List App Service Environments.
az appservice ase list

# List IP addresses associated with an App Service Environment.
az appservice ase list-addresses

# List app service plans associated with an App Service Environment.
az appservice ase list-plans

# Send a test upgrade notification in App Service Environment.
az appservice ase send-test-notification

# Show details of an App Service Environment.
az appservice ase show

# Update App Service Environment.
az appservice ase update

# Upgrade App Service Environment.
az appservice ase upgrade

# Create and purchase a custom domain.
az appservice domain create

# Show the legal terms for purchasing and creating a custom domain.
az appservice domain show-terms

# Set the key that all apps in an appservice plan use to connect to the hybrid-connections in that appservice plan.
az appservice hybrid-connection set-key

# Create a Kubernetes Environment.
az appservice kube create

# Delete kubernetes environment.
az appservice kube delete

# List kubernetes environments by subscription or resource group.
az appservice kube list

# Show the details of a kubernetes environment.
az appservice kube show

# Update a Kubernetes Environment. Currently not supported.
az appservice kube update

# Wait for a Kubernetes Environment to reach a desired state.
az appservice kube wait

# Create an app service plan.
az appservice plan create

# Delete an app service plan.
az appservice plan delete

# List app service plans.
az appservice plan list

# Get the app service plans for a resource group or a set of resource groups.
az appservice plan show

# Update an app service plan.
az appservice plan update

# Assign a managed identity to an App Service plan.
az appservice plan identity assign

# Remove managed identities from an App Service plan.
az appservice plan identity remove

# Set the default managed identity for an App Service plan.
az appservice plan identity set-default

# Show the managed identity for an App Service plan.
az appservice plan identity show

# Add an install script to a managed instance App Service plan.
az appservice plan managed-instance install-script add

# List install scripts for a managed instance App Service plan.
az appservice plan managed-instance install-script list

# Remove an install script from a managed instance App Service plan.
az appservice plan managed-instance install-script remove

# Connect to a managed instance App Service plan worker instance via RDP using Azure Bastion.
az appservice plan managed-instance instance connect

# List instances for a managed instance App Service plan.
az appservice plan managed-instance instance list

# Recycle a specific instance in a managed instance App Service plan.
az appservice plan managed-instance instance recycle

# Add VNet integration to a managed instance App Service plan.
az appservice plan managed-instance network add

# Remove VNet integration from a managed instance App Service plan.
az appservice plan managed-instance network remove

# Show the network configuration for a managed instance App Service plan.
az appservice plan managed-instance network show

# Add a registry adapter to a managed instance App Service plan.
az appservice plan managed-instance registry-adapter add

# List registry adapters for a managed instance App Service plan.
az appservice plan managed-instance registry-adapter list

# Remove a registry adapter from a managed instance App Service plan.
az appservice plan managed-instance registry-adapter remove

# Add a storage mount to a managed instance App Service plan.
az appservice plan managed-instance storage-mount add

# List storage mounts for a managed instance App Service plan.
az appservice plan managed-instance storage-mount list

# Remove a storage mount from a managed instance App Service plan.
az appservice plan managed-instance storage-mount remove

# List the virtual network integrations used in an appservice plan.
az appservice vnet-integration list
```
