# az account

```bash
# Accept subscription ownership status.
az account accept-ownership-status

# Clear all subscriptions from the CLI's local cache.
az account clear

# Create a subscription.
az account create

# Get a token for utilities to access Azure.
az account get-access-token

# Get a list of subscriptions for the logged in account. By default, only 'Enabled' subscriptions from the current cloud is shown.
az account list

# List supported regions for the current subscription.
az account list-locations

# Set a subscription to be the current active subscription.
az account set

# Get the details of a subscription.
az account show

# Create Alias Subscription.
az account alias create

# Delete Alias.
az account alias delete

# List Alias Subscriptions.
az account alias list

# Get Alias Subscription.
az account alias show

# Place the CLI in a waiting state until a condition of the account alias is met.
az account alias wait

# Create a subscription lock.
az account lock create

# Delete a subscription lock.
az account lock delete

# List lock information in the subscription.
az account lock list

# Show the details of a subscription lock.
az account lock show

# Update a subscription lock.
az account lock update

# Check if a Management Group Name is Valid.
az account management-group check-name-availability

# Create a new management group.
az account management-group create

# Delete an existing management group.
az account management-group delete

# List all management groups in the current tenant.
az account management-group list

# Get the details of the management group.
az account management-group show

# Update an existing management group.
az account management-group update

# List all entities for the authenticated user.
az account management-group entities list

# Create hierarchy settings defined at the Management Group level.
az account management-group hierarchy-settings create

# Delete the hierarchy settings defined at the Management Group level.
az account management-group hierarchy-settings delete

# Get all the hierarchy settings defined at the Management Group level.
az account management-group hierarchy-settings list

# Update the hierarchy settings defined at the Management Group level.
az account management-group hierarchy-settings update

# Add a subscription to a management group.
az account management-group subscription add

# Remove an existing subscription from a management group.
az account management-group subscription remove

# Show the details of a subscription under a known management group.
az account management-group subscription show

# Get the subscription under a management group.
az account management-group subscription show-sub-under-mg

# Get the backfill status for a tenant.
az account management-group tenant-backfill get

# Start backfilling subscriptions for a tenant.
az account management-group tenant-backfill start

# Cancel subscription.
az account subscription cancel

# Enable subscription.
az account subscription enable

# Get all subscriptions for a tenant.
az account subscription list

# This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list.
az account subscription list-location

# Rename subscription.
az account subscription rename

# Get details about a specified subscription.
az account subscription show

# Get the tenants for your account.
az account tenant list
```
