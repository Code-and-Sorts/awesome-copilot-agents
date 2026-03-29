# az iot central

```bash
# Query device telemetry or property data with IoT Central Query Language.
az iot central query

# Generate an API token associated with your IoT Central application.
az iot central api-token create

# Delete an API token associated with your IoT Central application.
az iot central api-token delete

# Get the list of API tokens associated with your IoT Central application.
az iot central api-token list

# Get details for an API token associated with your IoT Central application.
az iot central api-token show

# Create an IoT Central application.
az iot central app create

# Delete an IoT Central application.
az iot central app delete

# List IoT Central applications.
az iot central app list

# Get the details of an IoT Central application.
az iot central app show

# Update metadata for an IoT Central application.
az iot central app update

# Assign managed identities to an IoT Central application.
az iot central app identity assign

# Remove managed identities from an IoT Central application.
az iot central app identity remove

# Show the identity properties of an IoT Central application.
az iot central app identity show

# Approve a private endpoint connection request for an IoT Central application.
az iot central app private-endpoint-connection approve

# Delete a private endpoint connection for an IoT Central application.
az iot central app private-endpoint-connection delete

# List all of the private endpoint connections for an IoT Central application.
az iot central app private-endpoint-connection list

# Reject a private endpoint connection request for an IoT Central application.
az iot central app private-endpoint-connection reject

# Show details of a private endpoint connection request for an IoT Central application.
az iot central app private-endpoint-connection show

# List all of the IoT Central application private link resources in the specified account.
az iot central app private-link-resource list

# Show details of a private link resource in the specified IoT Central application.
az iot central app private-link-resource show

# Create a device group.
az iot central device-group create

# Delete a device group.
az iot central device-group delete

# Get the list of device groups for an IoT Central application.
az iot central device-group list

# Get the device group  by ID.
az iot central device-group show

# Update an existing device group.
az iot central device-group update

# Create a device template in IoT Central.
az iot central device-template create

# Delete a device template from IoT Central.
az iot central device-template delete

# Get the list of device templates for an IoT Central application.
az iot central device-template list

# Get a device template from IoT Central.
az iot central device-template show

# Update a device template in IoT Central.
az iot central device-template update

# Generate a derived device SAS key.
az iot central device compute-device-key

# Create a device in IoT Central.
az iot central device create

# Delete a device from IoT Central.
az iot central device delete

# Get the list of devices for an IoT Central application.
az iot central device list

# List the components present in a device.
az iot central device list-components

# List the modules present in a device.
az iot central device list-modules

# Reverts the previously executed failover command by moving the device back to it's original IoT Hub.
az iot central device manual-failback

# Execute a manual failover of device across multiple IoT Hubs to validate device firmware's ability to reconnect using DPS to a different IoT Hub.
az iot central device manual-failover

# Get registration info on device(s) from IoT Central.
az iot central device registration-info

# Get a device from IoT Central.
az iot central device show

# Get device credentials from IoT Central.
az iot central device show-credentials

# Update a device in IoT Central.
az iot central device update

# Create an individual device attestation.
az iot central device attestation create

# Remove an individual device attestation.
az iot central device attestation delete

# Get device attestation.
az iot central device attestation show

# Update an individual device attestation via patch.
az iot central device attestation update

# Purges the cloud-to-device message queue for the target device.
az iot central device c2d-message purge

# Get the details for the latest command request and response sent to the device.
az iot central device command history

# Run a command on a device and view associated response. Does NOT monitor property updates that the command may perform.
az iot central device command run

# Add devices as children to a target edge device.
az iot central device edge children add

# Get the list of children of an IoT Edge device.
az iot central device edge children list

# Remove child devices from a target edge device.
az iot central device edge children remove

# Get the deployment manifest associated to the specified IoT Edge device.
az iot central device edge manifest show

# Get the list of modules in an IoT Edge device.
az iot central device edge module list

# Restart a module in an IoT Edge device.
az iot central device edge module restart

# Get a module in an IoT Edge device.
az iot central device edge module show

# Get the last telemetry value from a device.
az iot central device telemetry show

# Replace writable property values of a device, a device component or a device module or a device module component.
az iot central device twin replace

# Get all property values of a device, a device component, a device module or a device module component.
az iot central device twin show

# Update writable property values of a device, a device component, a device module or a device module component.
az iot central device twin update

# View device telemetry messages sent to the IoT Central app.
az iot central diagnostics monitor-events

# View desired and reported properties sent to/from the IoT Central app.
az iot central diagnostics monitor-properties

# View the registration summary of all the devices in an app.
az iot central diagnostics registration-summary

# Validate messages sent to the IoT Hub for an IoT Central app.
az iot central diagnostics validate-messages

# Validate reported properties sent to the IoT Central application.
az iot central diagnostics validate-properties

# Create an enrollment group.
az iot central enrollment-group create

# Delete an enrollment group by ID.
az iot central enrollment-group delete

# Generate a verification code for the primary or secondary x509 certificate of an enrollment group.
az iot central enrollment-group generate-verification-code

# Get the list of enrollment groups in an application.
az iot central enrollment-group list

# Get details about an enrollment group by ID.
az iot central enrollment-group show

# Update an enrollment group.
az iot central enrollment-group update

# Verify the primary or secondary x509 certificate of an enrollment group.
az iot central enrollment-group verify-certificate

# Create an export for an IoT Central application.
az iot central export create

# Delete an export for an IoT Central application.
az iot central export delete

# Get the full list of exports for an IoT Central application.
az iot central export list

# Get an export details.
az iot central export show

# Update an export for an IoT Central application.
az iot central export update

# Create an export destination for an IoT Central application.
az iot central export destination create

# Delete an export destination for an IoT Central application.
az iot central export destination delete

# Get the full list of export destinations for an IoT Central application.
az iot central export destination list

# Get an export destination details.
az iot central export destination show

# Update an export destination for an IoT Central application.
az iot central export destination update

# Create file upload storage account configuration.
az iot central file-upload-config create

# Delete file upload storage account configuration.
az iot central file-upload-config delete

# Get the details of file upload storage account configuration.
az iot central file-upload-config show

# Update file upload storage account configuration.
az iot central file-upload-config update

# Create and execute a job via its job definition.
az iot central job create

# Get job device statuses.
az iot central job get-devices

# Get the list of jobs for an IoT Central application.
az iot central job list

# Re-run a job on all failed devices.
az iot central job rerun

# Resume a stopped job.
az iot central job resume

# Get the details of a job by ID.
az iot central job show

# Stop a running job.
az iot central job stop

# Create an organization in the application.
az iot central organization create

# Delete an organization by ID.
az iot central organization delete

# Get the list of organizations for an IoT Central application.
az iot central organization list

# Get the details of a organization by ID.
az iot central organization show

# Update an organization in the application.
az iot central organization update

# Get the list of roles for an IoT Central application.
az iot central role list

# Get the details of a role by ID.
az iot central role show

# Create a scheduled job by ID.
az iot central scheduled-job create

# Delete an existing scheduled job by ID.
az iot central scheduled-job delete

# Get the list of scheduled job definitions in an application.
az iot central scheduled-job list

# Get the list of job instances for a scheduled job definition.
az iot central scheduled-job list-runs

# Get details about a scheduled job by ID.
az iot central scheduled-job show

# Update a scheduled job by ID.
az iot central scheduled-job update

# Add a user to the application.
az iot central user create

# Delete a user from the application.
az iot central user delete

# Get list of users for an IoT Central application.
az iot central user list

# Get the details of a user by ID.
az iot central user show

# Update roles for a user in the application.
az iot central user update
```
