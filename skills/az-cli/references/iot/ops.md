# az iot ops

```bash
# Evaluate cluster-side readiness and runtime health of deployed IoT Operations services.
az iot ops check

# Clone an instance.
az iot ops clone

# Create an IoT Operations instance.
az iot ops create

# Delete IoT Operations from the cluster.
az iot ops delete

# Enable edge to cloud hydration.
az iot ops enable-rsync

# Opens the version guide located at https://aka.ms/aio-versions in the default browser.
az iot ops get-versions

# Bootstrap the Arc-enabled cluster for IoT Operations deployment.
az iot ops init

# List IoT Operations instances.
az iot ops list

# Migrate root assets to a namespace.
az iot ops migrate-assets

# Show an IoT Operations instance.
az iot ops show

# Update an IoT Operations instance.
az iot ops update

# Upgrade an IoT Operations instance.
az iot ops upgrade

# Create an asset.
az iot ops asset create

# Delete an asset.
az iot ops asset delete

# Query the Resource Graph for assets.
az iot ops asset query

# Show an asset.
az iot ops asset show

# Update an asset.
az iot ops asset update

# List datasets within an asset.
az iot ops asset dataset list

# Show a dataset within an asset.
az iot ops asset dataset show

# Add a datapoint to an asset dataset.
az iot ops asset dataset point add

# Export data-points in an asset dataset.
az iot ops asset dataset point export

# Import data-points in an asset dataset.
az iot ops asset dataset point import

# List data-points in an asset dataset.
az iot ops asset dataset point list

# Remove a datapoint in an asset dataset.
az iot ops asset dataset point remove

# Delete an asset endpoint profile.
az iot ops asset endpoint delete

# Query the Resource Graph for asset endpoint profiles.
az iot ops asset endpoint query

# Show an asset endpoint profile.
az iot ops asset endpoint show

# Update an asset endpoint profile.
az iot ops asset endpoint update

# Create an asset endpoint profile for an OPCUA connector.
az iot ops asset endpoint create opcua

# Add an event to an asset.
az iot ops asset event add

# Export events in an asset.
az iot ops asset event export

# Import events in an asset.
az iot ops asset event import

# List events in an asset.
az iot ops asset event list

# Remove an event in an asset.
az iot ops asset event remove

# List mqtt brokers associated with an instance.
az iot ops broker list

# Show details of an mqtt broker.
az iot ops broker show

# Create or replace an mqtt broker authentication resource.
az iot ops broker authn apply

# Delete an mqtt broker authentication resource.
az iot ops broker authn delete

# List mqtt broker authentication resources associated with a broker.
az iot ops broker authn list

# Show details of an mqtt broker authentication resource.
az iot ops broker authn show

# Add authentication methods to an mqtt broker authentication resource.
az iot ops broker authn method add

# Create or replace an mqtt broker authorization resource.
az iot ops broker authz apply

# Delete an mqtt broker authorization resource.
az iot ops broker authz delete

# List mqtt broker authorization resources associated with a broker.
az iot ops broker authz list

# Show details of an mqtt broker authorization resource.
az iot ops broker authz show

# Create or replace an mqtt broker listener service.
az iot ops broker listener apply

# Delete an mqtt broker listener.
az iot ops broker listener delete

# List mqtt broker listeners associated with a broker.
az iot ops broker listener list

# Show details of an mqtt broker listener.
az iot ops broker listener show

# Add a tcp port config to an mqtt broker listener service.
az iot ops broker listener port add

# Remove a tcp port config from an mqtt broker listener service.
az iot ops broker listener port remove

# Update an mqtt broker's disk persistence settings.
az iot ops broker persist update

# Add an enterprise grade client application instance certificate.
az iot ops connector opcua client add

# Remove client application instance certificate from the OPC UA Broker.
az iot ops connector opcua client remove

# Show details of secretsync resource 'aio-opc-ua-broker-client-certificate'.
az iot ops connector opcua client show

# Add an issuer certificate to the OPC UA Broker's issuer certificate list.
az iot ops connector opcua issuer add

# Remove trusted certificate(s) from the OPC UA Broker's issuer certificate list.
az iot ops connector opcua issuer remove

# Show details of secretsync resource 'aio-opc-ua-broker-issuer-list'.
az iot ops connector opcua issuer show

# Add a trusted certificate to the OPC UA Broker's trusted certificate list.
az iot ops connector opcua trust add

# Remove trusted certificate(s) from the OPC UA Broker's trusted certificate list.
az iot ops connector opcua trust remove

# Show details of secretsync resource 'aio-opc-ua-broker-trust-list'.
az iot ops connector opcua trust show

# Create a new connector template.
az iot ops connector template create

# Delete a connector template.
az iot ops connector template delete

# List all connector templates.
az iot ops connector template list

# Display a connector template.
az iot ops connector template show

# Update an existing connector template.
az iot ops connector template update

# Create or replace a dataflow associated with a dataflow profile.
az iot ops dataflow apply

# Delete a dataflow associated with a dataflow profile.
az iot ops dataflow delete

# List dataflows associated with a dataflow profile.
az iot ops dataflow list

# Show details of a dataflow associated with a dataflow profile.
az iot ops dataflow show

# Create or replace a dataflow endpoint resource.
az iot ops dataflow endpoint apply

# Delete a dataflow endpoint resource.
az iot ops dataflow endpoint delete

# List dataflow endpoint resources associated with an instance.
az iot ops dataflow endpoint list

# Show details of a dataflow endpoint resource.
az iot ops dataflow endpoint show

# Create or replace a dataflow endpoint resource for Azure Data Lake Storage Gen2.
az iot ops dataflow endpoint create adls

# Create or replace a dataflow endpoint resource for Azure Data Explorer.
az iot ops dataflow endpoint create adx

# Create or replace a dataflow endpoint resource for custom kafka broker.
az iot ops dataflow endpoint create custom-kafka

# Create or replace a dataflow endpoint resource for custom MQTT broker.
az iot ops dataflow endpoint create custom-mqtt

# Create or replace a dataflow endpoint resource for Azure Event Grid.
az iot ops dataflow endpoint create eventgrid

# Create or replace a dataflow endpoint resource for kafka-enabled Azure Event Hubs namespace.
az iot ops dataflow endpoint create eventhub

# Create or replace a dataflow endpoint resource for Microsoft Fabric OneLake.
az iot ops dataflow endpoint create fabric-onelake

# Create or replace a Microsoft Fabric Real-Time Intelligence data flow endpoint.
az iot ops dataflow endpoint create fabric-realtime

# Create or replace a Azure IoT Operations Local MQTT dataflow endpoint.
az iot ops dataflow endpoint create local-mqtt

# Create or replace a local storage dataflow endpoint.
az iot ops dataflow endpoint create local-storage

# Create or replace an OpenTelemetry dataflow endpoint.
az iot ops dataflow endpoint create otel

# Update the properties of an existing dataflow endpoint resource for Azure Data Lake Storage Gen2.
az iot ops dataflow endpoint update adls

# Update the properties of an existing dataflow endpoint resource for Azure Data Explorer.
az iot ops dataflow endpoint update adx

# Update the properties of an existing dataflow endpoint resource for custom kafka broker.
az iot ops dataflow endpoint update custom-kafka

# Update the properties of an existing dataflow endpoint resource for custom MQTT broker.
az iot ops dataflow endpoint update custom-mqtt

# Update the properties of an existing dataflow endpoint resource for Azure Event Grid.
az iot ops dataflow endpoint update eventgrid

# Update the properties of an existing dataflow endpoint resource for kafka-enabled Azure Event Hubs namespace.
az iot ops dataflow endpoint update eventhub

# Update the properties of an existing dataflow endpoint resource for Microsoft Fabric OneLake.
az iot ops dataflow endpoint update fabric-onelake

# Update the properties of an existing Microsoft Fabric Real-Time Intelligence data flow endpoint.
az iot ops dataflow endpoint update fabric-realtime

# Update the properties of an existing Azure IoT Operations Local MQTT data flow endpoint.
az iot ops dataflow endpoint update local-mqtt

# Update the properties of an existing local storage data flow endpoint.
az iot ops dataflow endpoint update local-storage

# Update the properties of an existing OpenTelemetry dataflow endpoint.
az iot ops dataflow endpoint update otel

# Create or replace a dataflow profile.
az iot ops dataflow profile create

# Delete a dataflow profile.
az iot ops dataflow profile delete

# List dataflow profiles associated with an instance.
az iot ops dataflow profile list

# Show details of a dataflow profile.
az iot ops dataflow profile show

# Update a dataflow profile.
az iot ops dataflow profile update

# Assign a user-assigned managed identity with the instance.
az iot ops identity assign

# Remove a user-assigned managed identity from the instance.
az iot ops identity remove

# Show the instance identities.
az iot ops identity show

# Disable management actions for an IoT Operations instance.
az iot ops mgmt-actions disable

# Enable management actions for an IoT Operations instance.
az iot ops mgmt-actions enable

# Execute a management action on a namespace asset.
az iot ops mgmt-actions execute

# Show management actions configuration for an IoT Operations instance.
az iot ops mgmt-actions show

# Create a Device Registry namespace.
az iot ops ns create

# Delete a Device Registry namespace.
az iot ops ns delete

# List Device Registry namespaces.
az iot ops ns list

# Show details of a Device Registry namespace.
az iot ops ns show

# Update a Device Registry namespace.
az iot ops ns update

# Delete a namespaced asset from an IoT Operations instance.
az iot ops ns asset delete

# Query namespaced assets.
az iot ops ns asset query

# Show details of a namespaced asset in an IoT Operations instance.
az iot ops ns asset show

# Create a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom create

# Update a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom update

# Add a datapoint to a custom asset dataset in a Device Registry namespace.
az iot ops ns asset custom datapoint add

# Export datapoints to file.
az iot ops ns asset custom datapoint export

# Import datapoints from file.
az iot ops ns asset custom datapoint import

# List data points for a custom asset dataset in a Device Registry namespace.
az iot ops ns asset custom datapoint list

# Remove a datapoint from a custom asset dataset in a Device Registry namespace.
az iot ops ns asset custom datapoint remove

# Add a dataset to a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom dataset add

# Export datasets to file.
az iot ops ns asset custom dataset export

# Import datasets from file.
az iot ops ns asset custom dataset import

# List datasets for a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom dataset list

# Remove a dataset from a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom dataset remove

# Show details of a dataset for a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom dataset show

# Update a dataset for a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom dataset update

# Add an event group to a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom event-group add

# Export event-groups to file.
az iot ops ns asset custom event-group export

# Import event-groups from file.
az iot ops ns asset custom event-group import

# List event groups for a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom event-group list

# Remove an event group from a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom event-group remove

# Show details of an event group for a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom event-group show

# Update an event group for a custom namespaced asset in an IoT Operations instance.
az iot ops ns asset custom event-group update

# Add an event to a custom asset event group in a Device Registry namespace.
az iot ops ns asset custom event add

# Export events to file.
az iot ops ns asset custom event export

# Import events from file.
az iot ops ns asset custom event import

# List events for a custom asset event group in a Device Registry namespace.
az iot ops ns asset custom event list

# Remove an events from a custom asset event group in a Device Registry namespace.
az iot ops ns asset custom event remove

# Add an action to a custom asset management group.
az iot ops ns asset custom mgmt-action add

# Export management actions to file.
az iot ops ns asset custom mgmt-action export

# Import management actions from file.
az iot ops ns asset custom mgmt-action import

# List actions in a custom asset management group.
az iot ops ns asset custom mgmt-action list

# Remove an action from a custom asset management group.
az iot ops ns asset custom mgmt-action remove

# Add a management group to a custom asset.
az iot ops ns asset custom mgmt-group add

# Export management groups to file.
az iot ops ns asset custom mgmt-group export

# Import management groups from file.
az iot ops ns asset custom mgmt-group import

# List management groups for a custom asset.
az iot ops ns asset custom mgmt-group list

# Remove a management group from a custom asset.
az iot ops ns asset custom mgmt-group remove

# Show details of a management group for a custom asset.
az iot ops ns asset custom mgmt-group show

# Update a management group for a custom asset.
az iot ops ns asset custom mgmt-group update

# Add a stream to a custom asset.
az iot ops ns asset custom stream add

# Export streams to file.
az iot ops ns asset custom stream export

# Import streams from file.
az iot ops ns asset custom stream import

# List streams in a custom asset.
az iot ops ns asset custom stream list

# Remove a stream from a custom asset.
az iot ops ns asset custom stream remove

# Show details of a stream in a custom asset.
az iot ops ns asset custom stream show

# Update a stream in a custom asset.
az iot ops ns asset custom stream update

# Create a media namespaced asset in an IoT Operations instance.
az iot ops ns asset media create

# Update a media namespaced asset in an IoT Operations instance.
az iot ops ns asset media update

# Add a stream to a media asset.
az iot ops ns asset media stream add

# Export streams to file.
az iot ops ns asset media stream export

# Import streams from file.
az iot ops ns asset media stream import

# List streams in a media asset.
az iot ops ns asset media stream list

# Remove a stream from a media asset.
az iot ops ns asset media stream remove

# Show details of a stream in a media asset.
az iot ops ns asset media stream show

# Update a stream in a media asset.
az iot ops ns asset media stream update

# Create an MQTT namespaced asset in an IoT Operations instance.
az iot ops ns asset mqtt create

# Update an MQTT namespaced asset in an IoT Operations instance.
az iot ops ns asset mqtt update

# Add a dataset to an MQTT namespaced asset in an IoT Operations instance.
az iot ops ns asset mqtt dataset add

# Export datasets to file.
az iot ops ns asset mqtt dataset export

# Import datasets from file.
az iot ops ns asset mqtt dataset import

# List datasets for an MQTT namespaced asset in an IoT Operations instance.
az iot ops ns asset mqtt dataset list

# Remove a dataset from an MQTT namespaced asset in an IoT Operations instance.
az iot ops ns asset mqtt dataset remove

# Show details of a dataset for an MQTT namespaced asset in an IoT Operations instance.
az iot ops ns asset mqtt dataset show

# Update a dataset for an MQTT namespaced asset in an IoT Operations instance.
az iot ops ns asset mqtt dataset update

# Create an ONVIF namespaced asset in an IoT Operations instance.
az iot ops ns asset onvif create

# Update an ONVIF namespaced asset in an IoT Operations instance.
az iot ops ns asset onvif update

# Add an event group to an ONVIF namespaced asset in an IoT Operations instance.
az iot ops ns asset onvif event-group add

# Export event-groups to file.
az iot ops ns asset onvif event-group export

# Import event-groups from file.
az iot ops ns asset onvif event-group import

# List event groups for an ONVIF namespaced asset in an IoT Operations instance.
az iot ops ns asset onvif event-group list

# Remove an event group from an ONVIF namespaced asset in an IoT Operations instance.
az iot ops ns asset onvif event-group remove

# Show details of an event group for an ONVIF namespaced asset in an IoT Operations instance.
az iot ops ns asset onvif event-group show

# Update an event group for an ONVIF namespaced asset in an IoT Operations instance.
az iot ops ns asset onvif event-group update

# Add an event to an ONVIF asset event group in a Device Registry namespace.
az iot ops ns asset onvif event add

# Export events to file.
az iot ops ns asset onvif event export

# Import events from file.
az iot ops ns asset onvif event import

# List events for an ONVIF asset event group in a Device Registry namespace.
az iot ops ns asset onvif event list

# Remove an event from an ONVIF asset event group in a Device Registry namespace.
az iot ops ns asset onvif event remove

# Add a management group to an ONVIF asset.
az iot ops ns asset onvif mgmt-group add

# Export management groups to file.
az iot ops ns asset onvif mgmt-group export

# Import management groups from file.
az iot ops ns asset onvif mgmt-group import

# List management groups for an ONVIF asset.
az iot ops ns asset onvif mgmt-group list

# Remove a management group from an ONVIF asset.
az iot ops ns asset onvif mgmt-group remove

# Show details of a management group for an ONVIF asset.
az iot ops ns asset onvif mgmt-group show

# Update a management group for an ONVIF asset.
az iot ops ns asset onvif mgmt-group update

# Create an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua create

# Update an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua update

# Add a datapoint to an OPC UA asset dataset in a Device Registry namespace.
az iot ops ns asset opcua datapoint add

# Export datapoints to file.
az iot ops ns asset opcua datapoint export

# Import datapoints from file.
az iot ops ns asset opcua datapoint import

# List data points for an OPC UA asset dataset in a Device Registry namespace.
az iot ops ns asset opcua datapoint list

# Remove a datapoint from an OPC UA asset dataset in a Device Registry namespace.
az iot ops ns asset opcua datapoint remove

# Add a dataset to an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua dataset add

# Export datasets to file.
az iot ops ns asset opcua dataset export

# Import datasets from file.
az iot ops ns asset opcua dataset import

# List datasets for an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua dataset list

# Remove a dataset from an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua dataset remove

# Show details of a dataset for an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua dataset show

# Update a dataset for an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua dataset update

# Add an event group to an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua event-group add

# Export event-groups to file.
az iot ops ns asset opcua event-group export

# Import event-groups from file.
az iot ops ns asset opcua event-group import

# List event groups for an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua event-group list

# Remove an event group from an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua event-group remove

# Show details of an event group for an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua event-group show

# Update an event group for an OPC UA namespaced asset in an IoT Operations instance.
az iot ops ns asset opcua event-group update

# Add an event to an OPC UA asset event group in a Device Registry namespace.
az iot ops ns asset opcua event add

# Export events to file.
az iot ops ns asset opcua event export

# Import events from file.
az iot ops ns asset opcua event import

# List events for an OPC UA asset event group in a Device Registry namespace.
az iot ops ns asset opcua event list

# Remove an event from an OPC UA asset event group in a Device Registry namespace.
az iot ops ns asset opcua event remove

# Add an action to an OPC UA asset management group.
az iot ops ns asset opcua mgmt-action add

# Export management actions to file.
az iot ops ns asset opcua mgmt-action export

# Import management actions from file.
az iot ops ns asset opcua mgmt-action import

# List actions in an OPC UA asset management group.
az iot ops ns asset opcua mgmt-action list

# Remove an action from an OPC UA asset management group.
az iot ops ns asset opcua mgmt-action remove

# Add a management group to an OPC UA asset.
az iot ops ns asset opcua mgmt-group add

# Export management groups to file.
az iot ops ns asset opcua mgmt-group export

# Import management groups from file.
az iot ops ns asset opcua mgmt-group import

# List management groups for an OPC UA asset.
az iot ops ns asset opcua mgmt-group list

# Remove a management group from an OPC UA asset.
az iot ops ns asset opcua mgmt-group remove

# Show details of a management group for an OPC UA asset.
az iot ops ns asset opcua mgmt-group show

# Update a management group for an OPC UA asset.
az iot ops ns asset opcua mgmt-group update

# Create a REST namespaced asset in an IoT Operations instance.
az iot ops ns asset rest create

# Update a REST namespaced asset in an IoT Operations instance.
az iot ops ns asset rest update

# Add a dataset to a REST namespaced asset in an IoT Operations instance.
az iot ops ns asset rest dataset add

# Export datasets to file.
az iot ops ns asset rest dataset export

# Import datasets from file.
az iot ops ns asset rest dataset import

# List datasets for a REST namespaced asset in an IoT Operations instance.
az iot ops ns asset rest dataset list

# Remove a dataset from a REST namespaced asset in an IoT Operations instance.
az iot ops ns asset rest dataset remove

# Show details of a dataset for a REST namespaced asset in an IoT Operations instance.
az iot ops ns asset rest dataset show

# Update a dataset for a REST namespaced asset in an IoT Operations instance.
az iot ops ns asset rest dataset update

# Create an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse create

# Update an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse update

# Add a dataset to an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse dataset add

# Export datasets to file.
az iot ops ns asset sse dataset export

# Import datasets from file.
az iot ops ns asset sse dataset import

# List datasets for an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse dataset list

# Remove a dataset from an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse dataset remove

# Show details of a dataset for an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse dataset show

# Update a dataset for an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse dataset update

# Add an event group to an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse event-group add

# Export event-groups to file.
az iot ops ns asset sse event-group export

# Import event-groups from file.
az iot ops ns asset sse event-group import

# List event groups for an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse event-group list

# Remove an event group from an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse event-group remove

# Show details of an event group for an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse event-group show

# Update an event group for an SSE namespaced asset in an IoT Operations instance.
az iot ops ns asset sse event-group update

# Add an event to an SSE asset event group in a Device Registry namespace.
az iot ops ns asset sse event add

# Export events to file.
az iot ops ns asset sse event export

# Import events from file.
az iot ops ns asset sse event import

# List events for an SSE asset event group in a Device Registry namespace.
az iot ops ns asset sse event list

# Remove an event from an SSE asset event group in a Device Registry namespace.
az iot ops ns asset sse event remove

# Create a device in a Device Registry namespace.
az iot ops ns device create

# Delete a device from a Device Registry namespace.
az iot ops ns device delete

# Query devices in Device Registry namespaces.
az iot ops ns device query

# Show details of a device in a Device Registry namespace.
az iot ops ns device show

# Update a device in a Device Registry namespace.
az iot ops ns device update

# List all endpoints of a device in a Device Registry namespace.
az iot ops ns device endpoint list

# List inbound endpoints of a device in a Device Registry namespace.
az iot ops ns device endpoint inbound list

# Remove inbound endpoints from a device in a Device Registry namespace.
az iot ops ns device endpoint inbound remove

# Add a custom inbound endpoint to a device in a Device Registry namespace.
az iot ops ns device endpoint inbound add custom

# Add a media inbound endpoint to a device in a Device Registry namespace.
az iot ops ns device endpoint inbound add media

# Add an MQTT inbound endpoint to a device in a Device Registry namespace.
az iot ops ns device endpoint inbound add mqtt

# Add an ONVIF inbound endpoint to a device in a Device Registry namespace.
az iot ops ns device endpoint inbound add onvif

# Add an OPC UA inbound endpoint to a device in a Device Registry namespace.
az iot ops ns device endpoint inbound add opcua

# Add a rest inbound endpoint to a device in a Device Registry namespace.
az iot ops ns device endpoint inbound add rest

# Add an SSE inbound endpoint to a device in a Device Registry namespace.
az iot ops ns device endpoint inbound add sse

# Remove a management endpoint entry from a Device Registry namespace.
az iot ops ns mgmt-endpoint remove

# Create a container registry endpoint for an instance.
az iot ops registry create

# Delete a container registry endpoint.
az iot ops registry delete

# List configured container registry endpoints.
az iot ops registry list

# Show details of a container registry endpoint.
az iot ops registry show

# Update a container registry endpoint.
az iot ops registry update

# Create a schema within a schema registry.
az iot ops schema create

# Delete a target schema within a schema registry.
az iot ops schema delete

# List schemas within a schema registry.
az iot ops schema list

# Show details of a schema within a schema registry.
az iot ops schema show

# Show the schema references used for dataflows.
az iot ops schema show-dataflow-refs

# Create a schema registry.
az iot ops schema registry create

# Delete a target schema registry.
az iot ops schema registry delete

# List schema registries in a resource group or subscription.
az iot ops schema registry list

# Show details of a schema registry.
az iot ops schema registry show

# Add a schema version to a schema.
az iot ops schema version add

# List schema versions for a specific schema.
az iot ops schema version list

# Remove a target schema version.
az iot ops schema version remove

# Show details of a schema version.
az iot ops schema version show

# Disable secret sync for an instance.
az iot ops secretsync disable

# Enable secret sync for an instance.
az iot ops secretsync enable

# List the secret sync configs associated with an instance.
az iot ops secretsync list

# Creates a standard support bundle zip archive for use in troubleshooting and diagnostics.
az iot ops support create-bundle
```
