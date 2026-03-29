# az cloud-service

```bash
# Create a cloud service (extended support). Please note some properties can be set only during cloud service creation.
az cloud-service create

# Delete a cloud service.
az cloud-service delete

# Delete role instances in a cloud service.
az cloud-service delete-instance

# Get a list of all cloud services under a resource group.
az cloud-service list

# Get a list of all cloud services in the subscription, regardless of the associated resource group.
az cloud-service list-all

# Power off the cloud service. Note that resources are still attached and you are getting charged for the resources.
az cloud-service power-off

# Rebuild Role Instances. Reinstall the operating system on instances of web roles or worker roles and initialize the storage resources that are used by them. If you do not want to initialize storage resources, you can use Reimage Role Instances.
az cloud-service rebuild

# Reimage asynchronous operation reinstalls the operating system on instances of web roles or worker roles.
az cloud-service reimage

# Restart one or more role instances in a cloud service.
az cloud-service restart

# Display information about a cloud service.
az cloud-service show

# Get the status of a cloud service.
az cloud-service show-instance-view

# Start the cloud service.
az cloud-service start

# Update a cloud service.
az cloud-service update

# Place the CLI in a waiting state until a condition of the cloud-service is met.
az cloud-service wait

# List all guest operating system families available to be specified in the XML service configuration (.cscfg) for a cloud service.
az cloud-service os-family list

# Show guest operating system family that can be specified in the XML service configuration (.cscfg) for a cloud service.
az cloud-service os-family show

# List all guest operating system versions available to be specified in the XML service configuration (.cscfg) for a cloud service.
az cloud-service os-version list

# Show guest operating system version that can be specified in the XML service configuration (.cscfg) for a cloud service.
az cloud-service os-version show

# Delete a role instance from a cloud service.
az cloud-service role-instance delete

# Get the list of all role instances in a cloud service.
az cloud-service role-instance list

# The Rebuild Role Instance asynchronous operation reinstalls the operating system on instances of web roles or worker roles and initializes the storage resources that are used by them. If you do not want to initialize storage resources, you can use Reimage Role Instance.
az cloud-service role-instance rebuild

# The Reimage Role Instance asynchronous operation reinstalls the operating system on instances of web roles or worker roles.
az cloud-service role-instance reimage

# The Reboot Role Instance asynchronous operation requests a reboot of a role instance in the cloud service.
az cloud-service role-instance restart

# Get a role instance from a cloud service.
az cloud-service role-instance show

# Retrieve information about the run-time state of a role instance in a cloud service.
az cloud-service role-instance show-instance-view

# Get a remote desktop file for a role instance in a cloud service.
az cloud-service role-instance show-remote-desktop-file

# Get a list of all roles in a cloud service.
az cloud-service role list

# Get a role from a cloud service.
az cloud-service role show

# Get a list of all update domains in a cloud service.
az cloud-service update-domain list-update-domain

# Get the specified update domain of a cloud service.
az cloud-service update-domain show-update-domain

# Update the role instances in the specified update domain.
az cloud-service update-domain walk-update-domain
```
