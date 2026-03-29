# az eventgrid

```bash
# Create a domain.
az eventgrid domain create

# Delete a domain.
az eventgrid domain delete

# List available domains.
az eventgrid domain list

# Get the details of a domain.
az eventgrid domain show

# Update a domain.
az eventgrid domain update

# Create a new event subscription for a domain.
az eventgrid domain event-subscription create

# Delete an event subscription of a domain.
az eventgrid domain event-subscription delete

# List event subscriptions of a specific domain.
az eventgrid domain event-subscription list

# Get the details of an event subscription of a domain.
az eventgrid domain event-subscription show

# Update an event subscription of a domain.
az eventgrid domain event-subscription update

# List shared access keys of a domain.
az eventgrid domain key list

# Regenerate a shared access key of a domain.
az eventgrid domain key regenerate

# Create a domain topic under a domain.
az eventgrid domain topic create

# Delete a domain topic under a domain.
az eventgrid domain topic delete

# List available topics in a domain.
az eventgrid domain topic list

# Get the details of a domain topic.
az eventgrid domain topic show

# Create a new event subscription for a domain topic.
az eventgrid domain topic event-subscription create

# Delete an event subscription of a domain topic.
az eventgrid domain topic event-subscription delete

# List event subscriptions of a specific domain topic.
az eventgrid domain topic event-subscription list

# Get the details of an event subscription of a domain topic.
az eventgrid domain topic event-subscription show

# Update an event subscription of a domain topic.
az eventgrid domain topic event-subscription update

# Create a new event subscription.
az eventgrid event-subscription create

# Delete an event subscription.
az eventgrid event-subscription delete

# List event subscriptions.
az eventgrid event-subscription list

# Get the details of an event subscription.
az eventgrid event-subscription show

# Update an event subscription.
az eventgrid event-subscription update

# Get the details of an extension topic.
az eventgrid extension-topic show

# Create a new namespace.
az eventgrid namespace create

# Delete existing namespace.
az eventgrid namespace delete

# List all the namespaces under an Azure subscription.
az eventgrid namespace list

# List the two keys used to publish to a namespace.
az eventgrid namespace list-key

# Regenerate a shared access key for a namespace.
az eventgrid namespace regenerate-key

# Show a namespace.
az eventgrid namespace show

# Update a namespace.
az eventgrid namespace update

# Place the CLI in a waiting state until a condition is met.
az eventgrid namespace wait

# Create a CA certificate.
az eventgrid namespace ca-certificate create

# Delete an existing CA certificate.
az eventgrid namespace ca-certificate delete

# List all the CA certificates under a namespace.
az eventgrid namespace ca-certificate list

# Show a CA certificate.
az eventgrid namespace ca-certificate show

# Update a CA certificate with the specified parameters.
az eventgrid namespace ca-certificate update

# Place the CLI in a waiting state until a condition is met.
az eventgrid namespace ca-certificate wait

# Create a client group.
az eventgrid namespace client-group create

# Delete an existing client group.
az eventgrid namespace client-group delete

# List all the client groups under a namespace.
az eventgrid namespace client-group list

# Show a client group.
az eventgrid namespace client-group show

# Update a client group.
az eventgrid namespace client-group update

# Place the CLI in a waiting state until a condition is met.
az eventgrid namespace client-group wait

# Create a client.
az eventgrid namespace client create

# Delete an existing client.
az eventgrid namespace client delete

# List all the client under a namespace.
az eventgrid namespace client list

# Show a client.
az eventgrid namespace client show

# Update a client.
az eventgrid namespace client update

# Place the CLI in a waiting state until a condition is met.
az eventgrid namespace client wait

# Create a permission binding.
az eventgrid namespace permission-binding create

# Delete an existing permission binding.
az eventgrid namespace permission-binding delete

# List all the permission bindings under a namespace.
az eventgrid namespace permission-binding list

# Show a permission binding.
az eventgrid namespace permission-binding show

# Update a permission binding.
az eventgrid namespace permission-binding update

# Place the CLI in a waiting state until a condition is met.
az eventgrid namespace permission-binding wait

# Create a topic space.
az eventgrid namespace topic-space create

# Delete an existing topic space.
az eventgrid namespace topic-space delete

# List all the topic spaces under a namespace.
az eventgrid namespace topic-space list

# Show a topic space.
az eventgrid namespace topic-space show

# Update a topic space.
az eventgrid namespace topic-space update

# Place the CLI in a waiting state until a condition is met.
az eventgrid namespace topic-space wait

# Create a new namespace topic.
az eventgrid namespace topic create

# Delete existing namespace topic.
az eventgrid namespace topic delete

# List all the namespace topics under a namespace.
az eventgrid namespace topic list

# List the two keys used to publish to a namespace topic.
az eventgrid namespace topic list-key

# Regenerate a shared access key for a namespace topic.
az eventgrid namespace topic regenerate-key

# Show a namespace topic.
az eventgrid namespace topic show

# Update a namespace topic.
az eventgrid namespace topic update

# Place the CLI in a waiting state until a condition is met.
az eventgrid namespace topic wait

# Create an event subscription of a namespace topic.
az eventgrid namespace topic event-subscription create

# Delete an existing event subscription of a namespace topic.
az eventgrid namespace topic event-subscription delete

# List event subscriptions that belong to a specific namespace topic.
az eventgrid namespace topic event-subscription list

# Show an event subscription of a namespace topic.
az eventgrid namespace topic event-subscription show

# Update an event subscription of a namespace topic.
az eventgrid namespace topic event-subscription update

# Place the CLI in a waiting state until a condition is met.
az eventgrid namespace topic event-subscription wait

# Authorize a partner configuration.
az eventgrid partner configuration authorize

# Create a partner configuration.
az eventgrid partner configuration create

# Delete a partner configuration.
az eventgrid partner configuration delete

# List available partner configurations.
az eventgrid partner configuration list

# Get the details of a partner configuration.
az eventgrid partner configuration show

# Unauthorize a partner configuration.
az eventgrid partner configuration unauthorize

# Update a partner configuration.
az eventgrid partner configuration update

# Activate a partner destination.
az eventgrid partner destination activate

# Create a partner destination.
az eventgrid partner destination create

# Delete a partner destination.
az eventgrid partner destination delete

# List available partner destinations.
az eventgrid partner destination list

# Get the details of a partner destination.
az eventgrid partner destination show

# Update the details of a partner destination.
az eventgrid partner destination update

# Create a partner namespace.
az eventgrid partner namespace create

# Delete a partner namespace.
az eventgrid partner namespace delete

# List available partner namespaces.
az eventgrid partner namespace list

# Get the details of a partner namespace.
az eventgrid partner namespace show

# Create a new channel for a partner namespace.
az eventgrid partner namespace channel create

# Delete a partner namespace.
az eventgrid partner namespace channel delete

# List available partner channels.
az eventgrid partner namespace channel list

# Get the details of a channel under a partner namespace.
az eventgrid partner namespace channel show

# Update the details of a channel under a partner namespace.
az eventgrid partner namespace channel update

# Create an event channel under a partner namespace.
az eventgrid partner namespace event-channel create

# Delete a partner namespace.
az eventgrid partner namespace event-channel delete

# List available partner event-channels.
az eventgrid partner namespace event-channel list

# Get the details of an event channel under a partner namespace.
az eventgrid partner namespace event-channel show

# List shared access keys of a partner namespace.
az eventgrid partner namespace key list

# Regenerate a shared access key of a partner namespace.
az eventgrid partner namespace key regenerate

# Create a new partner registration.
az eventgrid partner registration create

# Delete a partner registration.
az eventgrid partner registration delete

# List all partner registrations in specific resource group or all under the specified azure subscription.
az eventgrid partner registration list

# Get a partner registration.
az eventgrid partner registration show

# Activate a partner topic.
az eventgrid partner topic activate

# Deactivate a partner topic.
az eventgrid partner topic deactivate

# Delete a partner topic.
az eventgrid partner topic delete

# List available partner topics.
az eventgrid partner topic list

# Get the details of a partner topic.
az eventgrid partner topic show

# Create a new event subscription for a partner topic.
az eventgrid partner topic event-subscription create

# Delete an event subscription of a partner topic.
az eventgrid partner topic event-subscription delete

# List event subscriptions of a specific partner topic.
az eventgrid partner topic event-subscription list

# Get the details of an event subscription of a partner topic.
az eventgrid partner topic event-subscription show

# Update an event subscription of a partner topic.
az eventgrid partner topic event-subscription update

# List available verified partners.
az eventgrid partner verified-partner list

# Get the details of a verified partner.
az eventgrid partner verified-partner show

# Create a system topic.
az eventgrid system-topic create

# Delete a system topic.
az eventgrid system-topic delete

# List available system topics.
az eventgrid system-topic list

# Get the details of a system topic.
az eventgrid system-topic show

# Update a system topic.
az eventgrid system-topic update

# Create a new event subscription for a system topic.
az eventgrid system-topic event-subscription create

# Delete an event subscription of a system topic.
az eventgrid system-topic event-subscription delete

# List event subscriptions of a specific system topic.
az eventgrid system-topic event-subscription list

# Get the details of an event subscription of a system topic.
az eventgrid system-topic event-subscription show

# Update an event subscription of a system topic.
az eventgrid system-topic event-subscription update

# List registered topic types.
az eventgrid topic-type list

# List the event types supported by a topic type.
az eventgrid topic-type list-event-types

# Get the details for a topic type.
az eventgrid topic-type show

# Create a topic.
az eventgrid topic create

# Delete a topic.
az eventgrid topic delete

# List available topics.
az eventgrid topic list

# Get the details of a topic.
az eventgrid topic show

# Update a topic.
az eventgrid topic update

# Create a new event subscription for a topic.
az eventgrid topic event-subscription create

# Delete an event subscription of a topic.
az eventgrid topic event-subscription delete

# List event subscriptions of a specific topic.
az eventgrid topic event-subscription list

# Get the details of an event subscription of a topic.
az eventgrid topic event-subscription show

# Update an event subscription of a topic.
az eventgrid topic event-subscription update

# List shared access keys of a topic.
az eventgrid topic key list

# Regenerate a shared access key of a topic.
az eventgrid topic key regenerate
```
