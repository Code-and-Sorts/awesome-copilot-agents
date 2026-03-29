# az devops

```bash
# Configure the Azure DevOps CLI or view your configuration.
az devops configure

# This command will invoke request for any DevOps area and resource. Please use only json output as the response of this command is not fixed. Helpful docs - https://docs.microsoft.com/en-us/rest/api/azure/devops/.
az devops invoke

# Set the credential (PAT) to use for a particular organization.
az devops login

# Clear the credential for all or a particular organization.
az devops logout

# Add a new banner and immediately show it.
az devops admin banner add

# List banners.
az devops admin banner list

# Remove a banner.
az devops admin banner remove

# Show details for a banner.
az devops admin banner show

# Update the message, level, or expiration date for a banner.
az devops admin banner update

# Disable an extension.
az devops extension disable

# Enable an extension.
az devops extension enable

# Install an extension.
az devops extension install

# List extensions installed in an organization.
az devops extension list

# Search extensions from marketplace.
az devops extension search

# Get detail of single extension.
az devops extension show

# Uninstall an extension.
az devops extension uninstall

# Create a team project.
az devops project create

# Delete team project.
az devops project delete

# List team projects.
az devops project list

# Show team project.
az devops project show

# Create a new Azure DevOps group.
az devops security group create

# Delete an Azure DevOps group.
az devops security group delete

# List all the groups in a project or organization.
az devops security group list

# Show group details.
az devops security group show

# Update name AND/OR description for an Azure DevOps group.
az devops security group update

# Add membership.
az devops security group membership add

# List memberships for a group or user.
az devops security group membership list

# Remove membership.
az devops security group membership remove

# List tokens for given user/group and namespace.
az devops security permission list

# Reset permission for given permission bit(s).
az devops security permission reset

# Clear all permissions of this token for a user/group.
az devops security permission reset-all

# Show permissions for given token, namespace and user/group.
az devops security permission show

# Assign allow or deny permission to given user/group.
az devops security permission update

# List all available namespaces for an organization.
az devops security permission namespace list

# Show details of permissions available in each namespace.
az devops security permission namespace show

# Create a service endpoint using configuration file.
az devops service-endpoint create

# Deletes service endpoint.
az devops service-endpoint delete

# List service endpoints in a project.
az devops service-endpoint list

# Get the details of a service endpoint.
az devops service-endpoint show

# Update a service endpoint.
az devops service-endpoint update

# Create an Azure RM type service endpoint.
az devops service-endpoint azurerm create

# Create a GitHub service endpoint.
az devops service-endpoint github create

# Create a team.
az devops team create

# Delete a team.
az devops team delete

# List all teams in a project.
az devops team list

# List members of a team.
az devops team list-member

# Show team details.
az devops team show

# Update a team's name and/or description.
az devops team update

# Add user.
az devops user add

# List users in an organization [except for users which are added via AAD groups].
az devops user list

# Remove user from an organization.
az devops user remove

# Show user details.
az devops user show

# Update license type for a user.
az devops user update

# Create a wiki.
az devops wiki create

# Delete a wiki.
az devops wiki delete

# List all the wikis in a project or organization.
az devops wiki list

# Show details of a wiki.
az devops wiki show

# Add a new page.
az devops wiki page create

# Delete a page.
az devops wiki page delete

# Get the content of a page or open a page.
az devops wiki page show

# Edit a page.
az devops wiki page update
```
