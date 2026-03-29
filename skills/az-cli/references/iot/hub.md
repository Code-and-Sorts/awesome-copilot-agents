# az iot hub

```bash
# Create an Azure IoT hub.
az iot hub create

# Delete an IoT hub.
az iot hub delete

# Generate a SAS token for a target IoT Hub, device or module.
az iot hub generate-sas-token

# Invoke a device method.
az iot hub invoke-device-method

# Invoke a module method.
az iot hub invoke-module-method

# List IoT hubs.
az iot hub list

# List available pricing tiers.
az iot hub list-skus

# Initiate a manual failover for the IoT Hub to the geo-paired disaster recovery region.
az iot hub manual-failover

# Monitor device telemetry & messages sent to an IoT Hub.
az iot hub monitor-events

# Monitor feedback sent by devices to acknowledge cloud-to-device (C2D) messages.
az iot hub monitor-feedback

# Query an IoT Hub using a powerful SQL-like language.
az iot hub query

# Get the details of an IoT hub.
az iot hub show

# Get the quota metrics for an IoT hub.
az iot hub show-quota-metrics

# Get the statistics for an IoT hub.
az iot hub show-stats

# Update metadata for an IoT hub.
az iot hub update

# Wait until an operation on an IoT Hub instance is complete.
az iot hub wait

# Create/upload an Azure IoT Hub certificate.
az iot hub certificate create

# Deletes an Azure IoT Hub certificate.
az iot hub certificate delete

# Generates a verification code for an Azure IoT Hub certificate.
az iot hub certificate generate-verification-code

# Lists all certificates contained within an Azure IoT Hub.
az iot hub certificate list

# Shows information about a particular Azure IoT Hub certificate.
az iot hub certificate show

# Update an Azure IoT Hub certificate.
az iot hub certificate update

# Verifies an Azure IoT Hub certificate.
az iot hub certificate verify

# Create an IoT automatic device management configuration in a target IoT Hub.
az iot hub configuration create

# Delete an IoT device configuration.
az iot hub configuration delete

# List IoT automatic device management configurations in an IoT Hub.
az iot hub configuration list

# Get the details of an IoT automatic device management configuration.
az iot hub configuration show

# Evaluate a target user or system metric defined in an IoT device configuration.
az iot hub configuration show-metric

# Update specified properties of an IoT automatic device management configuration.
az iot hub configuration update

# Show the connection strings for the specified IoT Hubs using the given policy name and key.
az iot hub connection-string show

# Create an event hub consumer group.
az iot hub consumer-group create

# Delete an event hub consumer group.
az iot hub consumer-group delete

# List event hub consumer groups.
az iot hub consumer-group list

# Get the details for an event hub consumer group.
az iot hub consumer-group show

# Create a device in an IoT Hub.
az iot hub device-identity create

# Delete an IoT Hub device.
az iot hub device-identity delete

# Export all device identities from an IoT Hub to an Azure Storage blob container.
az iot hub device-identity export

# Import device identities to an IoT Hub from a storage container blob.
az iot hub device-identity import

# List devices in an IoT Hub.
az iot hub device-identity list

# Renew target keys of IoT Hub devices with sas authentication.
az iot hub device-identity renew-key

# Get the details of an IoT Hub device.
az iot hub device-identity show

# Update an IoT Hub device.
az iot hub device-identity update

# Add devices as children to a target edge device.
az iot hub device-identity children add

# Outputs the collection of assigned child devices.
az iot hub device-identity children list

# Remove child devices from a target edge device.
az iot hub device-identity children remove

# Show a given IoT Hub device connection string.
az iot hub device-identity connection-string show

# Set the parent device of a target device.
az iot hub device-identity parent set

# Get the parent device of a target device.
az iot hub device-identity parent show

# List device twins in an IoT Hub.
az iot hub device-twin list

# Replace device twin definition with target json.
az iot hub device-twin replace

# Get a device twin definition.
az iot hub device-twin show

# Update device twin desired properties and tags.
az iot hub device-twin update

# Get IoT Hub's device streams endpoints.
az iot hub devicestream show

# Invoke a root or component level command of a digital twin device.
az iot hub digital-twin invoke-command

# Show the digital twin of an IoT Hub device.
az iot hub digital-twin show

# Update the read-write properties of a digital twin device via JSON patch specification.
az iot hub digital-twin update

# Get the distributed tracing settings for a device.
az iot hub distributed-tracing show

# Update the distributed tracing options for a device.
az iot hub distributed-tracing update

# Assign managed identities to an IoT Hub.
az iot hub identity assign

# Remove managed identities from an IoT Hub.
az iot hub identity remove

# Show the identity properties of an IoT Hub.
az iot hub identity show

# Cancel an IoT Hub job.
az iot hub job cancel

# Create and schedule an IoT Hub job for execution.
az iot hub job create

# List the historical jobs of an IoT Hub.
az iot hub job list

# Show details of an existing IoT Hub job.
az iot hub job show

# Delete all or a specific endpoint for an IoT Hub.
az iot hub message-endpoint delete

# Get information on all the endpoints for an IoT Hub.
az iot hub message-endpoint list

# Get information on mentioned endpoint for an IoT Hub.
az iot hub message-endpoint show

# Add a Cosmos DB Container endpoint for an IoT Hub.
az iot hub message-endpoint create cosmosdb-container

# Add an Event Hub endpoint for an IoT Hub.
az iot hub message-endpoint create eventhub

# Add a Service Bus Queue endpoint for an IoT Hub.
az iot hub message-endpoint create servicebus-queue

# Add a Service Bus Topic endpoint for an IoT Hub.
az iot hub message-endpoint create servicebus-topic

# Add a Storage Container endpoint for an IoT Hub.
az iot hub message-endpoint create storage-container

# Update the properties of an existing Cosmos DB Container endpoint for an IoT Hub.
az iot hub message-endpoint update cosmosdb-container

# Update the properties of an existing Event Hub endpoint for an IoT Hub.
az iot hub message-endpoint update eventhub

# Update the properties of an existing Service Bus Queue endpoint for an IoT Hub.
az iot hub message-endpoint update servicebus-queue

# Update the properties of an existing Service Bus Topic endpoint for an IoT Hub.
az iot hub message-endpoint update servicebus-topic

# Update the properties of an existing Storage Container endpoint for an IoT Hub.
az iot hub message-endpoint update storage-container

# Create a message enrichment for chosen endpoints in your IoT Hub.
az iot hub message-enrichment create

# Delete a message enrichment in your IoT hub (by key).
az iot hub message-enrichment delete

# Get information on all message enrichments for your IoT Hub.
az iot hub message-enrichment list

# Update a message enrichment in your IoT hub (by key).
az iot hub message-enrichment update

# Add a route for an IoT Hub.
az iot hub message-route create

# Delete all routes or a mentioned route in an IoT Hub.
az iot hub message-route delete

# Get all the routes in an IoT Hub.
az iot hub message-route list

# Get information about the route in an IoT Hub.
az iot hub message-route show

# Test all routes or a mentioned route in an IoT Hub.
az iot hub message-route test

# Update a route for an IoT Hub.
az iot hub message-route update

# Enable or disable the fallback route in an IoT Hub.
az iot hub message-route fallback set

# Show the fallback route of an IoT Hub.
az iot hub message-route fallback show

# Create a module on a target IoT device in an IoT Hub.
az iot hub module-identity create

# Delete a device in an IoT Hub.
az iot hub module-identity delete

# List modules located on an IoT device in an IoT Hub.
az iot hub module-identity list

# Renew target keys of IoT Hub device modules with sas authentication.
az iot hub module-identity renew-key

# Get the details of an IoT device module in an IoT Hub.
az iot hub module-identity show

# Update an IoT Hub device module.
az iot hub module-identity update

# Show a target IoT device module connection string.
az iot hub module-identity connection-string show

# Replace a module twin definition with target json.
az iot hub module-twin replace

# Show a module twin definition.
az iot hub module-twin show

# Update module twin desired properties and tags.
az iot hub module-twin update

# Create a new shared access policy in an IoT hub.
az iot hub policy create

# Delete a shared access policy from an IoT hub.
az iot hub policy delete

# List shared access policies of an IoT hub.
az iot hub policy list

# Regenerate keys of a shared access policy of an IoT hub.
az iot hub policy renew-key

# Get the details of a shared access policy of an IoT hub.
az iot hub policy show

# Export the state of an IoT Hub to a file.
az iot hub state export

# Import a Hub state from a file to an IoT Hub.
az iot hub state import

# Migrate the state of one hub to another hub without saving to a file.
az iot hub state migrate
```
