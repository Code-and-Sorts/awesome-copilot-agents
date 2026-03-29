# az servicebus

```bash
# This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces.
az servicebus georecovery-alias break-pair

# Create a new Alias(Disaster Recovery configuration).
az servicebus georecovery-alias create

# Delete an Alias(Disaster Recovery configuration).
az servicebus georecovery-alias delete

# Check the give namespace name availability.
az servicebus georecovery-alias exists

# Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace.
az servicebus georecovery-alias fail-over

# List all Alias(Disaster Recovery configurations).
az servicebus georecovery-alias list

# Sets Service Bus Geo-Disaster Recovery Configuration Alias for the give Namespace.
az servicebus georecovery-alias set

# Get Alias(Disaster Recovery configuration) for primary or secondary namespace.
az servicebus georecovery-alias show

# List the authorization rules for a namespace.
az servicebus georecovery-alias authorization-rule list

# Get an authorization rule for a namespace by rule name.
az servicebus georecovery-alias authorization-rule show

# Gets the primary and secondary connection strings for the namespace.
az servicebus georecovery-alias authorization-rule keys list

# This operation reverts Migration.
az servicebus migration abort

# This operation Completes Migration of entities by pointing the connection strings to Premium namespace and any entities created after the operation will be under Premium Namespace. CompleteMigration operation will fail when entity migration is in-progress.
az servicebus migration complete

# Delete a MigrationConfiguration.
az servicebus migration delete

# List all migrationConfigurations.
az servicebus migration list

# Get Migration Config.
az servicebus migration show

# Create Migration configuration and starts migration of entities from Standard to Premium namespace.
az servicebus migration start

# Place the CLI in a waiting state until a condition is met.
az servicebus migration wait

# Create a Service Bus Namespace.
az servicebus namespace create

# Delete an existing namespace. This operation also removes all associated resources under the namespace.
az servicebus namespace delete

# Check the give namespace name availability.
az servicebus namespace exists

# GeoDR Failover.
az servicebus namespace failover

# List all the available namespaces within the subscription by resource group & also irrespective of the resource groups.
az servicebus namespace list

# Get a description for the specified namespace.
az servicebus namespace show

# Update a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
az servicebus namespace update

# Place the CLI in a waiting state until a condition is met.
az servicebus namespace wait

# Create an authorization rule for a namespace.
az servicebus namespace authorization-rule create

# Delete a namespace authorization rule.
az servicebus namespace authorization-rule delete

# List the authorization rules for a namespace.
az servicebus namespace authorization-rule list

# Get an authorization rule for a namespace by rule name.
az servicebus namespace authorization-rule show

# Update an authorization rule for a namespace.
az servicebus namespace authorization-rule update

# Gets the primary and secondary connection strings for the namespace.
az servicebus namespace authorization-rule keys list

# Regenerates the primary or secondary connection strings for the namespace.
az servicebus namespace authorization-rule keys renew

# Add Encryption properties to a namespace.
az servicebus namespace encryption add

# Remove one or more Encryption properties from a namespace.
az servicebus namespace encryption remove

# Assign System or User or System, User assigned identities to a namespace.
az servicebus namespace identity assign

# Removes System or User or System, User assigned identities from a namespace.
az servicebus namespace identity remove

# Create NetworkRuleSet for a Namespace.
az servicebus namespace network-rule-set create

# List list of NetworkRuleSet for a Namespace.
az servicebus namespace network-rule-set list

# Get NetworkRuleSet for a Namespace.
az servicebus namespace network-rule-set show

# Update NetworkRuleSet for a Namespace.
az servicebus namespace network-rule-set update

# Add a IP-Rule for network rule of namespace.
az servicebus namespace network-rule-set ip-rule add

# Remove Ip-Rule from network rule of namespace.
az servicebus namespace network-rule-set ip-rule remove

# Add a Virtual-Network-Rule for network rule of namespace.
az servicebus namespace network-rule-set virtual-network-rule add

# Remove network rule for a namespace.
az servicebus namespace network-rule-set virtual-network-rule remove

# Approve a private endpoint connection request for servicebus namespace.
az servicebus namespace private-endpoint-connection approve

# Create PrivateEndpointConnections of service namespace.
az servicebus namespace private-endpoint-connection create

# Delete a private endpoint connection request for servicebus namespace.
az servicebus namespace private-endpoint-connection delete

# List the available PrivateEndpointConnections within a namespace.
az servicebus namespace private-endpoint-connection list

# Reject a private endpoint connection request for servicebus namespace.
az servicebus namespace private-endpoint-connection reject

# Get a description for the specified Private Endpoint Connection.
az servicebus namespace private-endpoint-connection show

# Update PrivateEndpointConnections of service namespace.
az servicebus namespace private-endpoint-connection update

# Place the CLI in a waiting state until a condition is met.
az servicebus namespace private-endpoint-connection wait

# List lists of resources that supports Privatelinks.
az servicebus namespace private-link-resource show

# Add one or more Replica properties to a namespace.
az servicebus namespace replica add

# Remove one or more Replica properties to a namespace.
az servicebus namespace replica remove

# Create a Service Bus queue. This operation is idempotent.
az servicebus queue create

# Delete a queue from the specified namespace in a resource group.
az servicebus queue delete

# List the queues within a namespace.
az servicebus queue list

# Get a description for the specified queue.
az servicebus queue show

# Update a Service Bus queue. This operation is idempotent.
az servicebus queue update

# Create an authorization rule for a queue.
az servicebus queue authorization-rule create

# Delete a queue authorization rule.
az servicebus queue authorization-rule delete

# List all authorization rules for a queue.
az servicebus queue authorization-rule list

# Get an authorization rule for a queue by rule name.
az servicebus queue authorization-rule show

# Update an authorization rule for a queue.
az servicebus queue authorization-rule update

# Primary and secondary connection strings to the queue.
az servicebus queue authorization-rule keys list

# Regenerates the primary or secondary connection strings to the queue.
az servicebus queue authorization-rule keys renew

# Create a topic in the specified namespace.
az servicebus topic create

# Delete a topic from the specified namespace and resource group.
az servicebus topic delete

# List all the topics in a namespace.
az servicebus topic list

# Get a description for the specified topic.
az servicebus topic show

# Update a topic in the specified namespace.
az servicebus topic update

# Create an authorization rule for the specified topic.
az servicebus topic authorization-rule create

# Delete a topic authorization rule.
az servicebus topic authorization-rule delete

# List authorization rules for a topic.
az servicebus topic authorization-rule list

# Get the specified authorization rule.
az servicebus topic authorization-rule show

# Update an authorization rule for the specified topic.
az servicebus topic authorization-rule update

# Gets the primary and secondary connection strings for the topic.
az servicebus topic authorization-rule keys list

# Regenerates primary or secondary connection strings for the topic.
az servicebus topic authorization-rule keys renew

# Create a topic subscription.
az servicebus topic subscription create

# Delete a subscription from the specified topic.
az servicebus topic subscription delete

# List all the subscriptions under a specified topic.
az servicebus topic subscription list

# Get a subscription description for the specified topic.
az servicebus topic subscription show

# Update a topic subscription.
az servicebus topic subscription update

# Create the ServiceBus Rule for Subscription.
az servicebus topic subscription rule create

# Delete an existing rule.
az servicebus topic subscription rule delete

# List all the rules within given topic-subscription.
az servicebus topic subscription rule list

# Get the description for the specified rule.
az servicebus topic subscription rule show

# Update a new rule and updates an existing rule.
az servicebus topic subscription rule update
```
