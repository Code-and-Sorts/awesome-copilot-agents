# az blueprint

```bash
# Create a blueprint definition.
az blueprint create

# Delete a blueprint definition.
az blueprint delete

# Export a blueprint definition and artifacts to json file(s).
az blueprint export

# Import a blueprint definition and artifacts from a directoy of json files.
az blueprint import

# List blueprint definitions.
az blueprint list

# Publish a new version of the blueprint definition with the latest artifacts. Published blueprint definitions are immutable.
az blueprint publish

# Get a blueprint definition.
az blueprint show

# Update a blueprint definition.
az blueprint update

# Delete a blueprint artifact.
az blueprint artifact delete

# List artifacts for a given blueprint definition.
az blueprint artifact list

# Get a blueprint artifact.
az blueprint artifact show

# Create blueprint policy artifact.
az blueprint artifact policy create

# Update blueprint policy artifact.
az blueprint artifact policy update

# Create blueprint role artifact.
az blueprint artifact role create

# Update blueprint role artifact.
az blueprint artifact role update

# Create blueprint arm artifact.
az blueprint artifact template create

# Update blueprint arm artifact.
az blueprint artifact template update

# Create a blueprint assignment.
az blueprint assignment create

# Delete a blueprint assignment.
az blueprint assignment delete

# List blueprint assignments within a subscription.
az blueprint assignment list

# Get a blueprint assignment.
az blueprint assignment show

# Update a blueprint assignment.
az blueprint assignment update

# Place the CLI in a waiting state until a condition of the Blueprint Assignment is met.
az blueprint assignment wait

# Get Blueprint Servie Principal Name objectId.
az blueprint assignment who

# Add a resource group artifact to the blueprint.
az blueprint resource-group add

# List blueprint resource group artifact.
az blueprint resource-group list

# Remove a blueprint resource group artifact.
az blueprint resource-group remove

# Show blueprint resource group artifact.
az blueprint resource-group show

# Update blueprint resource group artifact.
az blueprint resource-group update

# Delete a published version of a blueprint.
az blueprint version delete

# List published versions of given blueprint definition.
az blueprint version list

# Get a published version of a blueprint.
az blueprint version show

# List artifacts for a version of a published blueprint.
az blueprint version artifact list

# Show an artifact for a published blueprint.
az blueprint version artifact show
```
