# az ad

```bash
# Create an application.
az ad app create

# Delete an application.
az ad app delete

# List applications.
az ad app list

# Get the details of an application.
az ad app show

# Update an application.
az ad app update

# Delete an application's password or certificate credentials.
az ad app credential delete

# List an application's password or certificate credential metadata. (The content of the password or certificate credential is not retrievable.).
az ad app credential list

# Reset an application's password or certificate credentials.
az ad app credential reset

# Create application federated identity credential.
az ad app federated-credential create

# Delete application federated identity credential.
az ad app federated-credential delete

# List application federated identity credentials.
az ad app federated-credential list

# Show application federated identity credential.
az ad app federated-credential show

# Update application federated identity credential.
az ad app federated-credential update

# Add an application owner.
az ad app owner add

# List application owners.
az ad app owner list

# Remove an application owner.
az ad app owner remove

# Add an API permission.
az ad app permission add

# Grant Application & Delegated permissions through admin-consent.
az ad app permission admin-consent

# Remove an API permission.
az ad app permission delete

# Grant the app an API Delegated permissions.
az ad app permission grant

# List API permissions the application has requested.
az ad app permission list

# List Oauth2 permission grants.
az ad app permission list-grants

# Create a new domain service with the specified parameters.
az ad ds create

# The Delete Domain Service operation deletes an existing Domain Service.
az ad ds delete

# List domain services in resource group or in subscription.
az ad ds list

# Get the specified domain service.
az ad ds show

# Update the existing deployment properties for domain service.
az ad ds update

# Place the CLI in a waiting state until a condition of the ad ds is met.
az ad ds wait

# Create a group.
az ad group create

# Delete a group.
az ad group delete

# Get a collection of object IDs of groups of which the specified group is a member.
az ad group get-member-groups

# List groups in the directory.
az ad group list

# Get the details of a group.
az ad group show

# Add a member to a group.
az ad group member add

# Check if a member is in a group.
az ad group member check

# Get the members of a group.
az ad group member list

# Remove a member from a group.
az ad group member remove

# Add a group owner.
az ad group owner add

# List group owners.
az ad group owner list

# Remove a group owner.
az ad group owner remove

# Get the list of directory objects that are owned by the user.
az ad signed-in-user list-owned-objects

# Get the details for the currently logged-in user.
az ad signed-in-user show

# Create a service principal.
az ad sp create

# Create an application and its associated service principal, optionally configure the service principal's RBAC role assignments.
az ad sp create-for-rbac

# Delete a service principal.
az ad sp delete

# List service principals.
az ad sp list

# Get the details of a service principal.
az ad sp show

# Update a service principal.
az ad sp update

# Delete a service principal's password or certificate credentials.
az ad sp credential delete

# List a service principal's password or certificate credential metadata. (The content of the password or certificate credential is not retrievable.).
az ad sp credential list

# Reset a service principal's password or certificate credentials.
az ad sp credential reset

# List service principal owners.
az ad sp owner list

# Create a user.
az ad user create

# Delete a user.
az ad user delete

# Get groups of which the user is a member.
az ad user get-member-groups

# List users.
az ad user list

# Get the details of a user.
az ad user show

# Update a user.
az ad user update
```
