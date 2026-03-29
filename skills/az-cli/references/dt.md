# az dt

```bash
# Create or update a Digital Twins instance.
az dt create

# Delete an existing Digital Twins instance.
az dt delete

# List the collection of Digital Twins instances by subscription or resource group.
az dt list

# Show an existing Digital Twins instance.
az dt show

# Wait until an operation on an Digital Twins instance is complete.
az dt wait

# Delete a data history connection configured on a Digital Twins instance.
az dt data-history connection delete

# List all data history connections configured on a Digital Twins instance.
az dt data-history connection list

# Show details of a data history connection configured on a Digital Twins instance.
az dt data-history connection show

# Wait until an operation on a data history connection is complete.
az dt data-history connection wait

# Creates a data history connection between a Digital Twins instance and an Azure Data Explorer database. Requires pre-created Azure Data Explorer and Event Hub resources.
az dt data-history connection create adx

# Remove an endpoint from a Digital Twins instance.
az dt endpoint delete

# List all egress endpoints configured on a Digital Twins instance.
az dt endpoint list

# Show details of an endpoint configured on a Digital Twins instance.
az dt endpoint show

# Wait until an endpoint operation is done.
az dt endpoint wait

# Adds an EventGrid Topic endpoint to a Digital Twins instance. Requires pre-created resource.
az dt endpoint create eventgrid

# Adds an EventHub endpoint to a Digital Twins instance.
az dt endpoint create eventhub

# Adds a ServiceBus Topic endpoint to a Digital Twins instance.
az dt endpoint create servicebus

# Assign managed identities to a Digital Twins instance.
az dt identity assign

# Remove managed identities from a Digital Twins instance.
az dt identity remove

# Show the identity properties of a Digital Twins instance.
az dt identity show

# Create and execute a deletion job on a digital twin instance.
az dt job deletion create

# List all deletion jobs executed on a digital twins instance.
az dt job deletion list

# Show details of a deletion job executed on a digital twins instance.
az dt job deletion show

# Cancel a data import job executed on a digital twins instance.
az dt job import cancel

# Create and execute a data import job on a digital twin instance.
az dt job import create

# Delete a data import job executed on a digital twins instance.
az dt job import delete

# List all data import jobs executed on a digital twins instance.
az dt job import list

# Show details of a data import job executed on a digital twins instance.
az dt job import show

# Uploads one or more models.
az dt model create

# Delete a model. A model can only be deleted if no other models reference it.
az dt model delete

# Delete all models within a Digital Twins instance.
az dt model delete-all

# List model metadata, definitions and dependencies.
az dt model list

# Retrieve a target model or model definition.
az dt model show

# Updates the metadata for a model. Currently a model can only be decommisioned.
az dt model update

# Delete a private-endpoint connection associated with the Digital Twins instance.
az dt network private-endpoint connection delete

# List private-endpoint connections associated with the Digital Twins instance.
az dt network private-endpoint connection list

# Set the state of a private-endpoint connection associated with the Digital Twins instance.
az dt network private-endpoint connection set

# Show a private-endpoint connection associated with the Digital Twins instance.
az dt network private-endpoint connection show

# Wait until an operation on a private-endpoint connection is complete.
az dt network private-endpoint connection wait

# List private-links associated with the Digital Twins instance.
az dt network private-link list

# Show a private-link associated with the instance.
az dt network private-link show

# Assign a user, group or service principal to a role against a Digital Twins instance.
az dt role-assignment create

# Remove a user, group or service principal role assignment from a Digital Twins instance.
az dt role-assignment delete

# List the existing role assignments of a Digital Twins instance.
az dt role-assignment list

# Add an event route to a Digital Twins instance.
az dt route create

# Remove an event route from a Digital Twins instance.
az dt route delete

# List the configured event routes of a Digital Twins instance.
az dt route list

# Show details of an event route configured on a Digital Twins instance.
az dt route show

# Create a digital twin on an instance.
az dt twin create

# Remove a digital twin. All relationships referencing this twin must already be deleted.
az dt twin delete

# Deletes all digital twins within a Digital Twins instance, including all relationships for those twins.
az dt twin delete-all

# Query the digital twins of an instance. Allows traversing relationships and filtering by property values.
az dt twin query

# Show the details of a digital twin.
az dt twin show

# Update an instance digital twin via JSON patch specification.
az dt twin update

# Show details of a digital twin component.
az dt twin component show

# Update a digital twin component via JSON patch specification.
az dt twin component update

# Create a relationship between source and target digital twins.
az dt twin relationship create

# Delete a digital twin relationship on a Digital Twins instance.
az dt twin relationship delete

# Deletes all digital twin relationships within a Digital Twins instance, including incoming relationships.
az dt twin relationship delete-all

# List the relationships of a digital twin.
az dt twin relationship list

# Show details of a digital twin relationship.
az dt twin relationship show

# Updates the properties of a relationship between two digital twins via JSON patch specification.
az dt twin relationship update

# Sends telemetry on behalf of a digital twin. If component path is provided the emitted telemetry is on behalf of the component.
az dt twin telemetry send
```
