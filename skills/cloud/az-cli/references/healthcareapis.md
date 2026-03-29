# az healthcareapis

```bash
# Add a list of registries to the service, repeated ones will be ignored.
az healthcareapis acr add

# Lists all container registries associated with the service.
az healthcareapis acr list

# Remove a list of registries from the service, non-existing ones will be ignored.
az healthcareapis acr remove

# Reset the container registries associated with the service to a new list.
az healthcareapis acr reset

# Create a DeidService.
az healthcareapis deidservice create

# Delete a DeidService by name.
az healthcareapis deidservice delete

# List DeidService resources by subscription ID.
az healthcareapis deidservice list

# Get a DeidService by name.
az healthcareapis deidservice show

# Update a DeidService by name.
az healthcareapis deidservice update

# Place the CLI in a waiting state until a condition is met.
az healthcareapis deidservice wait

# Assign the user or system managed identities.
az healthcareapis deidservice identity assign

# Remove the user or system managed identities.
az healthcareapis deidservice identity remove

# Show the details of managed identities.
az healthcareapis deidservice identity show

# Place the CLI in a waiting state until a condition is met.
az healthcareapis deidservice identity wait

# Get the operation result for a long running operation.
az healthcareapis operation-result show

# Update the state of the specified private endpoint connection associated with the service.
az healthcareapis private-endpoint-connection create

# Deletes a private endpoint connection.
az healthcareapis private-endpoint-connection delete

# Lists all private endpoint connections for a service.
az healthcareapis private-endpoint-connection list

# Gets the specified private endpoint connection associated with the service.
az healthcareapis private-endpoint-connection show

# Update the state of the specified private endpoint connection associated with the service.
az healthcareapis private-endpoint-connection update

# Place the CLI in a waiting state until a condition of the healthcareapis private-endpoint-connection is met.
az healthcareapis private-endpoint-connection wait

# Gets the private link resources that need to be created for a service.
az healthcareapis private-link-resource list

# Gets a private link resource that need to be created for a service.
az healthcareapis private-link-resource show

# Create the metadata of a service instance.
az healthcareapis service create

# Delete a service instance.
az healthcareapis service delete

# Get all the service instances in a resource group. And Get all the service instances in a subscription.
az healthcareapis service list

# Get the metadata of a service instance.
az healthcareapis service show

# Update the metadata of a service instance.
az healthcareapis service update

# Place the CLI in a waiting state until a condition of the healthcareapis service is met.
az healthcareapis service wait

# Create a workspace resource with the specified parameters.
az healthcareapis workspace create

# Deletes a specified workspace.
az healthcareapis workspace delete

# Lists all the available workspaces under the specified resource group. And Lists all the available workspaces under the specified subscription.
az healthcareapis workspace list

# Gets the properties of the specified workspace.
az healthcareapis workspace show

# Patch workspace details.
az healthcareapis workspace update

# Place the CLI in a waiting state until a condition of the healthcareapis workspace is met.
az healthcareapis workspace wait

# Create a DICOM Service resource with the specified parameters.
az healthcareapis workspace dicom-service create

# Deletes a DICOM Service.
az healthcareapis workspace dicom-service delete

# Lists all DICOM Services for the given workspace.
az healthcareapis workspace dicom-service list

# Gets the properties of the specified DICOM Service.
az healthcareapis workspace dicom-service show

# Patch DICOM Service details.
az healthcareapis workspace dicom-service update

# Place the CLI in a waiting state until a condition of the healthcareapis workspace dicom-service is met.
az healthcareapis workspace dicom-service wait

# Create a FHIR Service resource with the specified parameters.
az healthcareapis workspace fhir-service create

# Deletes a FHIR Service.
az healthcareapis workspace fhir-service delete

# Lists all FHIR Services for the given workspace.
az healthcareapis workspace fhir-service list

# Gets the properties of the specified FHIR Service.
az healthcareapis workspace fhir-service show

# Patch FHIR Service details.
az healthcareapis workspace fhir-service update

# Place the CLI in a waiting state until a condition of the healthcareapis workspace fhir-service is met.
az healthcareapis workspace fhir-service wait

# Create an IoT Connector resource with the specified parameters.
az healthcareapis workspace iot-connector create

# Deletes an IoT Connector.
az healthcareapis workspace iot-connector delete

# Lists all IoT Connectors for the given workspace.
az healthcareapis workspace iot-connector list

# Gets the properties of the specified IoT Connector.
az healthcareapis workspace iot-connector show

# Patch an IoT Connector.
az healthcareapis workspace iot-connector update

# Place the CLI in a waiting state until a condition of the healthcareapis workspace iot-connector is met.
az healthcareapis workspace iot-connector wait

# Create an IoT Connector FHIR destination resource with the specified parameters.
az healthcareapis workspace iot-connector fhir-destination create

# Deletes an IoT Connector FHIR destination.
az healthcareapis workspace iot-connector fhir-destination delete

# Lists all FHIR destinations for the given IoT Connector.
az healthcareapis workspace iot-connector fhir-destination list

# Gets the properties of the specified Iot Connector FHIR destination.
az healthcareapis workspace iot-connector fhir-destination show

# Update an IoT Connector FHIR destination resource with the specified parameters.
az healthcareapis workspace iot-connector fhir-destination update

# Place the CLI in a waiting state until a condition of the healthcareapis workspace iot-connector fhir-destination is met.
az healthcareapis workspace iot-connector fhir-destination wait

# Update the state of the specified private endpoint connection associated with the workspace.
az healthcareapis workspace private-endpoint-connection create

# Deletes a private endpoint connection.
az healthcareapis workspace private-endpoint-connection delete

# Lists all private endpoint connections for a workspace.
az healthcareapis workspace private-endpoint-connection list

# Gets the specified private endpoint connection associated with the workspace.
az healthcareapis workspace private-endpoint-connection show

# Update the state of the specified private endpoint connection associated with the workspace.
az healthcareapis workspace private-endpoint-connection update

# Place the CLI in a waiting state until a condition of the healthcareapis workspace private-endpoint-connection is met.
az healthcareapis workspace private-endpoint-connection wait

# Gets the private link resources that need to be created for a workspace.
az healthcareapis workspace private-link-resource list

# Gets a private link resource that need to be created for a workspace.
az healthcareapis workspace private-link-resource show
```
