# az sphere

```bash
# Gather diagnostic data about your local system, cloud and device configurations.
az sphere get-support-data

# Show the version of the Azure Sphere SDK installed.
az sphere show-sdk-version

# Download the certificate for your catalog.
az sphere ca-certificate download

# Download the certificate chain for your catalog as a PKCS#7 ".p7b" file.
az sphere ca-certificate download-chain

# Download a proof-of-possession certificate for your catalog for use with a provided code.
az sphere ca-certificate download-proof

# List all certificates in your resource group and catalog.
az sphere ca-certificate list

# Create a catalog.
az sphere catalog create

# Delete a catalog.
az sphere catalog delete

# List or download the available error reports for the selected catalog.
az sphere catalog download-error-report

# List available catalogs either in a resource group or a subscription.
az sphere catalog list

# Show details of a catalog.
az sphere catalog show

# Create a deployment.
az sphere deployment create

# List all deployments.
az sphere deployment list

# Show details of a deployment.
az sphere deployment show

# Create a device group.
az sphere device-group create

# Create default device groups targeting a product.
az sphere device-group create-defaults

# Delete the specified device group.
az sphere device-group delete

# List all device groups in a catalog.
az sphere device-group list

# Show a device group's details.
az sphere device-group show

# Update a device group's details.
az sphere device-group update

# Assign a device to a device group in your resource group and catalog.
az sphere device assign

# Claim a device in your resource group and catalog.
az sphere device claim

# Enable a device for testing cloud loading by disabling development and debugging on the attached device, and by assigning it to a device group that enables application updates from the cloud. By default, this will be the Field Test device group of the device's product, but other device groups can be specified. Not for use in manufacturing scenarios: see https://aka.ms/AzureSphereManufacturing for more information.
az sphere device enable-cloud-test

# Enable a device for development by enabling sideloading and debugging on the attached device, and by assigning it to a device group that disables application updates from the cloud. By default, this will be the Development device group of the device's product, but other device groups can be specified. Not for use in manufacturing scenarios: see https://aka.ms/AzureSphereManufacturing for more information.
az sphere device enable-development

# List all the devices in your catalog, product, or device group.
az sphere device list

# List all the attached devices.
az sphere device list-attached

# Use recovery mode to load new firmware onto the attached device.
az sphere device recover

# Show the number of attached devices.
az sphere device rescan-attached

# Restart the attached device.
az sphere device restart

# Show details of an existing device in your resource group and catalog.
az sphere device show

# Show the details of the attached device.
az sphere device show-attached

# Show the number of devices in your catalog, product, or device group.
az sphere device show-count

# Show the deployment status of the operating system on a device.
az sphere device show-deployment-status

# Show the operating system version on the attached device.
az sphere device show-os-version

# Unassign a device from a device group in your resource group and catalog.
az sphere device unassign

# Show the memory statistics for applications on the attached device.
az sphere device app show-memory-stats

# Show the storage quota and usage for applications on the attached device.
az sphere device app show-quota

# Show the status of applications on the attached device.
az sphere device app show-status

# Start applications on the attached device.
az sphere device app start

# Stop applications on the attached device.
az sphere device app stop

# Temporarily apply a capability session on the attached device.
az sphere device capability apply

# Download a device capability file from the Azure Sphere Security Service.
az sphere device capability download

# Show the current device capability configuration of the attached device.
az sphere device capability show-attached

# Update the device capability configuration for the attached device.
az sphere device capability update

# Add a certificate in the attached device's certificate store.
az sphere device certificate add

# Delete a certificate in the attached device's certificate store.
az sphere device certificate delete

# List certificates in the attached device's certificate store.
az sphere device certificate list

# Show details of a certificate in the attached device's certificate store.
az sphere device certificate show

# Show the available free space in the attached device's certificate store.
az sphere device certificate show-quota

# List the images installed on the attached device. By default, lists only applications.
az sphere device image list-installed

# List images in your catalog. By default, lists only images that will be installed when the device is updated.
az sphere device image list-targeted

# Show the manufacturing state of the attached device.
az sphere device manufacturing-state show

# Update the manufacturing state of the attached device. Caution: manufacturing state changes are permanent and irreversible.
az sphere device manufacturing-state update

# Disable a network interface on the attached device.
az sphere device network disable

# Enable a network interface on the attached device.
az sphere device network enable

# List firewall rules for the attached device.
az sphere device network list-firewall-rules

# List the network interfaces for the attached device.
az sphere device network list-interfaces

# Show diagnostics for one or all Wi-Fi networks on the attached device.
az sphere device network show-diagnostics

# Show the network status for the attached device.
az sphere device network show-status

# Update the network interface configuration for the attached device.
az sphere device network update-interface

# Configure the network proxy on the attached device.
az sphere device network proxy apply

# Delete proxy connection on the attached device.
az sphere device network proxy delete

# Disable network proxy on the attached device.
az sphere device network proxy disable

# Enable network proxy on the attached device.
az sphere device network proxy enable

# Show proxy connection on the attached device.
az sphere device network proxy show

# Delete applications or board configuration from the attached device.
az sphere device sideload delete

# Deploy an application or board configuration to the attached device.
az sphere device sideload deploy

# Set deployment timeout in seconds for application or board configuration.
az sphere device sideload set-deployment-timeout

# Show deployment timeout in seconds for application or board configuration.
az sphere device sideload show-deployment-timeout

# Add a Wi-Fi network on the attached device.
az sphere device wifi add

# Disable a Wi-Fi connection on the attached device.
az sphere device wifi disable

# Enable a Wi-Fi network on the attached device.
az sphere device wifi enable

# Forget a Wi-Fi network on the attached device.
az sphere device wifi forget

# List the current Wi-Fi configurations for the attached device.
az sphere device wifi list

# Reload the Wi-Fi network configuration on the attached device. Use this command after you add or remove a certificate (azsphere device certificate) to ensure that EAP-TLS networks use the most recent contents of the certificate store.
az sphere device wifi reload-config

# Scan for available Wi-Fi networks visible to the attached device.
az sphere device wifi scan

# Show details of a Wi-Fi network on the attached device.
az sphere device wifi show

# Show the status of the wireless interface on the attached device.
az sphere device wifi show-status

# Generate a C header file corresponding to a hardware definition and place it in the folder 'inc/hw' relative to the input JSON.
az sphere hardware-definition generate-header

# Test that the C header file in the 'inc/hw' folder is up-to-date with respect to the input JSON.
az sphere hardware-definition test-header

# Create an application image package.
az sphere image-package pack-application

# Show details of a given image package.
az sphere image-package show

# Add an image to your catalog from your local machine.
az sphere image add

# List all images in your resource group and catalog.
az sphere image list

# Show details of an existing image from your catalog.
az sphere image show

# Create a new product in your resource group and catalog.
az sphere product create

# Delete the specified product.
az sphere product delete

# List all products in your resource group and catalog.
az sphere product list

# Show details of a product in your resource group and catalog.
az sphere product show

# Update a product's details in your resource group and catalog.
az sphere product update
```
