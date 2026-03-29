# az eventhubs

```bash
# List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region.
az eventhubs cluster available-region

# Create an instance of an Event Hubs Cluster.
az eventhubs cluster create

# Delete an existing Event Hubs Cluster. This operation is idempotent.
az eventhubs cluster delete

# List the available Event Hubs Clusters within an ARM resource group.
az eventhubs cluster list

# Get the resource description of the specified Event Hubs Cluster.
az eventhubs cluster show

# Update an instance of an Event Hubs Cluster.
az eventhubs cluster update

# Place the CLI in a waiting state until a condition is met.
az eventhubs cluster wait

# List all Event Hubs Namespace IDs in an Event Hubs Dedicated Cluster.
az eventhubs cluster namespace list

# Creates the EventHubs Eventhub.
az eventhubs eventhub create

# Delete an Event Hub from the specified Namespace and resource group.
az eventhubs eventhub delete

# List all the Event Hubs in a Namespace.
az eventhubs eventhub list

# Get an Event Hubs description for the specified Event Hub.
az eventhubs eventhub show

# Update a new Event Hub as a nested resource within a Namespace.
az eventhubs eventhub update

# Create an AuthorizationRule for the specified Event Hub. Creation/update of the AuthorizationRule will take a few seconds to take effect.
az eventhubs eventhub authorization-rule create

# Delete an Event Hub AuthorizationRule.
az eventhubs eventhub authorization-rule delete

# List the authorization rules for an Event Hub.
az eventhubs eventhub authorization-rule list

# Get an AuthorizationRule for an Event Hub by rule name.
az eventhubs eventhub authorization-rule show

# Update an AuthorizationRule for the specified Event Hub. Creation/update of the AuthorizationRule will take a few seconds to take effect.
az eventhubs eventhub authorization-rule update

# Gets the ACS and SAS connection strings for the Event Hub.
az eventhubs eventhub authorization-rule keys list

# Regenerates the ACS and SAS connection strings for the Event Hub.
az eventhubs eventhub authorization-rule keys renew

# Create an Event Hubs consumer group as a nested resource within a Namespace.
az eventhubs eventhub consumer-group create

# Delete a consumer group from the specified Event Hub and resource group.
az eventhubs eventhub consumer-group delete

# List all the consumer groups in a Namespace. An empty feed is returned if no consumer group exists in the Namespace.
az eventhubs eventhub consumer-group list

# Get a description for the specified consumer group.
az eventhubs eventhub consumer-group show

# Update an Event Hubs consumer group as a nested resource within a Namespace.
az eventhubs eventhub consumer-group update

# This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces.
az eventhubs georecovery-alias break-pair

# Create a new Alias(Disaster Recovery configuration).
az eventhubs georecovery-alias create

# Delete an Alias(Disaster Recovery configuration).
az eventhubs georecovery-alias delete

# Check the give Namespace name availability.
az eventhubs georecovery-alias exists

# Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace.
az eventhubs georecovery-alias fail-over

# List all Alias(Disaster Recovery configurations).
az eventhubs georecovery-alias list

# Sets a Geo-Disaster Recovery Configuration Alias for the give Namespace.
az eventhubs georecovery-alias set

# Get Alias(Disaster Recovery configuration) for primary or secondary namespace.
az eventhubs georecovery-alias show

# List a list of authorization rules for a Namespace.
az eventhubs georecovery-alias authorization-rule list

# Get an AuthorizationRule for a Namespace by rule name.
az eventhubs georecovery-alias authorization-rule show

# Gets the primary and secondary connection strings for the Namespace.
az eventhubs georecovery-alias authorization-rule keys list

# Creates the EventHubs Namespace.
az eventhubs namespace create

# Delete an existing namespace. This operation also removes all associated resources under the namespace.
az eventhubs namespace delete

# Check the give Namespace name availability.
az eventhubs namespace exists

# GeoDR Failover.
az eventhubs namespace failover

# List all the available Namespaces within a subscription, irrespective of the resource groups.
az eventhubs namespace list

# Get the description of the specified namespace.
az eventhubs namespace show

# Update a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
az eventhubs namespace update

# Place the CLI in a waiting state until a condition is met.
az eventhubs namespace wait

# Creates an application group for an EventHub namespace.
az eventhubs namespace application-group create

# Delete an ApplicationGroup for a Namespace.
az eventhubs namespace application-group delete

# List a list of application groups for a Namespace.
az eventhubs namespace application-group list

# Get an ApplicationGroup for a Namespace.
az eventhubs namespace application-group show

# Update an ApplicationGroup for a Namespace.
az eventhubs namespace application-group update

# Appends an application group policy to the existing policy. This cmdlet can be used to append one or more throttling policies.
az eventhubs namespace application-group policy add

# Removes an application group policy from the existing policies. This cmdlet can be used to remove one or more throttling policies.
az eventhubs namespace application-group policy remove

# Create an AuthorizationRule for a Namespace.
az eventhubs namespace authorization-rule create

# Delete an AuthorizationRule for a Namespace.
az eventhubs namespace authorization-rule delete

# List a list of authorization rules for a Namespace.
az eventhubs namespace authorization-rule list

# Get an AuthorizationRule for a Namespace by rule name.
az eventhubs namespace authorization-rule show

# Update an AuthorizationRule for a Namespace.
az eventhubs namespace authorization-rule update

# Gets the primary and secondary connection strings for the Namespace.
az eventhubs namespace authorization-rule keys list

# Regenerates the primary or secondary connection strings for the specified Namespace.
az eventhubs namespace authorization-rule keys renew

# Add Encryption properties to a namespace.
az eventhubs namespace encryption add

# Remove one or more Encryption properties from a namespace.
az eventhubs namespace encryption remove

# Assign System or User or System,User assigned identities to a namespace.
az eventhubs namespace identity assign

# Remove System or User or System,User assigned identities from a namespace.
az eventhubs namespace identity remove

# Create NetworkRuleSet for a Namespace.
az eventhubs namespace network-rule-set create

# List NetworkRuleSet for a Namespace.
az eventhubs namespace network-rule-set list

# Get NetworkRuleSet for a Namespace.
az eventhubs namespace network-rule-set show

# Update NetworkRuleSet for a Namespace.
az eventhubs namespace network-rule-set update

# Add a IP-Rule for network rule of namespace.
az eventhubs namespace network-rule-set ip-rule add

# Remove Ip-Rule from network rule of namespace.
az eventhubs namespace network-rule-set ip-rule remove

# Add a Virtual-Network-Rule for network rule of namespace.
az eventhubs namespace network-rule-set virtual-network-rule add

# Remove network rule for a namespace.
az eventhubs namespace network-rule-set virtual-network-rule remove

# List of current NetworkSecurityPerimeterConfiguration for Namespace.
az eventhubs namespace nsp-configuration list

# Get a NetworkSecurityPerimeterConfigurations resourceAssociationName.
az eventhubs namespace nsp-configuration show

# Approve a private endpoint connection request for eventhubs namesapce.
az eventhubs namespace private-endpoint-connection approve

# Create PrivateEndpointConnections of service namespace.
az eventhubs namespace private-endpoint-connection create

# Delete a private endpoint connection request for eventhubs namespace.
az eventhubs namespace private-endpoint-connection delete

# List the available PrivateEndpointConnections within a namespace.
az eventhubs namespace private-endpoint-connection list

# Reject a private endpoint connection request for eventhubs namespace.
az eventhubs namespace private-endpoint-connection reject

# Get a description for the specified Private Endpoint Connection name.
az eventhubs namespace private-endpoint-connection show

# Update PrivateEndpointConnections of service namespace.
az eventhubs namespace private-endpoint-connection update

# Place the CLI in a waiting state until a condition is met.
az eventhubs namespace private-endpoint-connection wait

# List lists of resources that supports Privatelinks.
az eventhubs namespace private-link-resource show

# Add one or more Replica properties to a namespace.
az eventhubs namespace replica add

# Remove one or more Replica properties to a namespace.
az eventhubs namespace replica remove

# Create an EventHub schema group.
az eventhubs namespace schema-registry create

# Delete an EventHub schema group.
az eventhubs namespace schema-registry delete

# List all the Schema Groups in a Namespace.
az eventhubs namespace schema-registry list

# Get the details of an EventHub schema group.
az eventhubs namespace schema-registry show

# Update an EventHub schema group.
az eventhubs namespace schema-registry update
```
