# az iot du

```bash
# Create a Device Update account.
az iot du account create

# Delete a Device Update account.
az iot du account delete

# List all Device Update accounts in a subscription or resource group.
az iot du account list

# Show the details of a Device Update account.
az iot du account show

# Update a Device Update account.
az iot du account update

# Block until a desired account resource state has been met.
az iot du account wait

# Delete a private endpoint connection associated with a Device Update account.
az iot du account private-endpoint-connection delete

# List private endpoint connections associated with a Device Update account.
az iot du account private-endpoint-connection list

# Set the state of a private endpoint connection associated with a Device Update account.
az iot du account private-endpoint-connection set

# Show a private endpoint connection associated with a Device Update account.
az iot du account private-endpoint-connection show

# List private link resources supported by the account.
az iot du account private-link-resource list

# Import devices and modules to the Device Update instance from a linked IoT Hub.
az iot du device import

# List device identities contained within an instance.
az iot du device list

# Show a device identity contained within an instance.
az iot du device show

# Delete a device class or device class subgroup.
az iot du device class delete

# List device classes or device class subgroups.
az iot du device class list

# Show details about a device class or device class subgroup including installable updates, the best update and update compliance.
az iot du device class show

# Update a device class.
az iot du device class update

# Gets the breakdown of how many devices are on their latest update, have new updates available, or are in progress receiving new updates.
az iot du device compliance show

# Cancel a device class subgroup deployment.
az iot du device deployment cancel

# Create a deployment for a device group. The deployment will be multi-cast against every device class subgroup within the target group.
az iot du device deployment create

# Delete a deployment by device group or device class subgroup.
az iot du device deployment delete

# List deployments for a device group or device class subgroup.
az iot du device deployment list

# List devices in a device class subgroup deployment along with their state. Useful for getting a list of failed devices.
az iot du device deployment list-devices

# Retry a device class subgroup deployment.
az iot du device deployment retry

# Show a deployment for a device group or device class subgroup including status which details a breakdown of how many devices in the deployment are in progress, completed, or failed.
az iot du device deployment show

# Delete a device group.
az iot du device group delete

# List device groups within an instance.
az iot du device group list

# Show details about a device group including the best update and update compliance.
az iot du device group show

# List device health with respect to a target filter.
az iot du device health list

# Configure a device diagnostics log collection operation on specified devices.
az iot du device log collect

# List instance diagnostic log collection operations.
az iot du device log list

# Show a specific instance diagnostic log collection operation.
az iot du device log show

# Show a device module identity imported to the instance.
az iot du device module show

# Create a Device Update instance.
az iot du instance create

# Delete a Device Update instance.
az iot du instance delete

# List Device Update instances.
az iot du instance list

# Show a Device Update instance.
az iot du instance show

# Update a Device Update instance.
az iot du instance update

# Block until a desired instance resource state has been met.
az iot du instance wait

# Calculate the base64 hashed representation of a file.
az iot du update calculate-hash

# Delete a specific update version.
az iot du update delete

# Import a new update version into the Device Update instance.
az iot du update import

# List updates that have been imported to the Device Update instance.
az iot du update list

# Show a specific update version.
az iot du update show

# Stage an update for import to a target instance.
az iot du update stage

# List update file Ids with respect to update provider, name and version.
az iot du update file list

# Show the details of a specific update file with respect to update provider, name and version.
az iot du update file show

# Initialize a v5 import manifest with the desired state.
az iot du update init v5
```
