# az devcenter

```bash
# Create an attached network connection.
az devcenter admin attached-network create

# Delete an attached network connection.
az devcenter admin attached-network delete

# List the attached network connections configured for a dev center or project.
az devcenter admin attached-network list

# Get an attached network connection configured for a dev center or project.
az devcenter admin attached-network show

# Place the CLI in a waiting state until a condition is met.
az devcenter admin attached-network wait

# Gets customization task error details.
az devcenter admin catalog-task get-error-detail

# List tasks in the catalog.
az devcenter admin catalog-task list

# Get a task from the catalog.
az devcenter admin catalog-task show

# Connects a catalog to enable syncing.
az devcenter admin catalog connect

# Create a catalog.
az devcenter admin catalog create

# Delete a catalog resource.
az devcenter admin catalog delete

# Gets catalog synchronization error details.
az devcenter admin catalog get-sync-error-detail

# List catalogs for a dev center.
az devcenter admin catalog list

# Get a catalog.
az devcenter admin catalog show

# Syncs templates for a template source.
az devcenter admin catalog sync

# Update a catalog.
az devcenter admin catalog update

# Place the CLI in a waiting state until a condition is met.
az devcenter admin catalog wait

# Check the availability of name for resource.
az devcenter admin check-name-availability execute

# Check the availability of name for resource.
az devcenter admin check-scoped-name-availability execute

# Create a dev box definition.
az devcenter admin devbox-definition create

# Delete a dev box definition.
az devcenter admin devbox-definition delete

# List dev box definitions configured for a dev center or project.
az devcenter admin devbox-definition list

# Get a dev box definition configured for a dev center or a project.
az devcenter admin devbox-definition show

# Update a dev box definition.
az devcenter admin devbox-definition update

# Place the CLI in a waiting state until a condition is met.
az devcenter admin devbox-definition wait

# Create a dev center.
az devcenter admin devcenter create

# Delete a dev center.
az devcenter admin devcenter delete

# List all dev centers in a resource group.
az devcenter admin devcenter list

# Get a dev center.
az devcenter admin devcenter show

# Update a dev center.
az devcenter admin devcenter update

# Place the CLI in a waiting state until a condition is met.
az devcenter admin devcenter wait

# Gets environment definition error details.
az devcenter admin environment-definition get-error-detail

# List environment definitions in the catalog.
az devcenter admin environment-definition list

# Get an environment definition from the catalog.
az devcenter admin environment-definition show

# Create an environment type.
az devcenter admin environment-type create

# Delete an environment type.
az devcenter admin environment-type delete

# List environment types for the devcenter.
az devcenter admin environment-type list

# Get an environment type.
az devcenter admin environment-type show

# Update an environment type.
az devcenter admin environment-type update

# Create a gallery.
az devcenter admin gallery create

# Delete a gallery.
az devcenter admin gallery delete

# List galleries for a dev center.
az devcenter admin gallery list

# Get a gallery.
az devcenter admin gallery show

# Place the CLI in a waiting state until a condition is met.
az devcenter admin gallery wait

# List versions for an image.
az devcenter admin image-version list

# Get an image version.
az devcenter admin image-version show

# List images for a dev center or gallery.
az devcenter admin image list

# Get a gallery image.
az devcenter admin image show

# Create a network connection.
az devcenter admin network-connection create

# Delete a network connection.
az devcenter admin network-connection delete

# List network connections.
az devcenter admin network-connection list

# List health check status details.
az devcenter admin network-connection list-health-check

# List the endpoints that agents may call as part of Dev Box service administration. These FQDNs should be allowed for outbound access in order for the Dev Box service to function.
az devcenter admin network-connection list-outbound-network-dependencies-endpoint

# Triggers a new health check run. The execution and health check result can be tracked via the network Connection health check details.
az devcenter admin network-connection run-health-check

# Get a network connection.
az devcenter admin network-connection show

# Get health check status details.
az devcenter admin network-connection show-health-check

# Update a Network Connection.
az devcenter admin network-connection update

# Place the CLI in a waiting state until a condition is met.
az devcenter admin network-connection wait

# Create a pool.
az devcenter admin pool create

# Delete a pool.
az devcenter admin pool delete

# List pools for a project.
az devcenter admin pool list

# Triggers a refresh of the pool status.
az devcenter admin pool run-health-check

# Get a pool.
az devcenter admin pool show

# Update a pool.
az devcenter admin pool update

# Place the CLI in a waiting state until a condition is met.
az devcenter admin pool wait

# List allowed environment types for a project.
az devcenter admin project-allowed-environment-type list

# Get an allowed environment type.
az devcenter admin project-allowed-environment-type show

# Connects a project catalog to enable syncing.
az devcenter admin project-catalog connect

# Create a project catalog.
az devcenter admin project-catalog create

# Delete a project catalog resource.
az devcenter admin project-catalog delete

# Gets project catalog synchronization error details.
az devcenter admin project-catalog get-sync-error-detail

# List the catalogs associated with a project.
az devcenter admin project-catalog list

# Get an associated project catalog.
az devcenter admin project-catalog show

# Syncs templates for a template source.
az devcenter admin project-catalog sync

# Update a project catalog.
az devcenter admin project-catalog update

# Place the CLI in a waiting state until a condition is met.
az devcenter admin project-catalog wait

# Gets Environment Definition error details.
az devcenter admin project-environment-definition get-error-detail

# List the environment definitions in this project catalog.
az devcenter admin project-environment-definition list

# Get an environment definition from the catalog.
az devcenter admin project-environment-definition show

# Create a project environment type.
az devcenter admin project-environment-type create

# Delete a project environment type.
az devcenter admin project-environment-type delete

# List environment types for a project.
az devcenter admin project-environment-type list

# Get a project environment type.
az devcenter admin project-environment-type show

# Update a project environment type.
az devcenter admin project-environment-type update

# Cancels the specified build for an image definition.
az devcenter admin project-image-definition-build cancel

# Gets Build details.
az devcenter admin project-image-definition-build get-build-detail

# List builds for a specified image definition.
az devcenter admin project-image-definition-build list

# Get a build for a specified image definition.
az devcenter admin project-image-definition-build show

# Builds an image for the specified Image Definition.
az devcenter admin project-image-definition build-image

# Gets Image Definition error details.
az devcenter admin project-image-definition get-error-detail

# List Image Definitions in the catalog.
az devcenter admin project-image-definition list

# Get an Image Definition from the catalog.
az devcenter admin project-image-definition show

# List versions for a project image.
az devcenter admin project-image-version list

# Get a project image version.
az devcenter admin project-image-version show

# List images for a project.
az devcenter admin project-image list

# Get a project image.
az devcenter admin project-image show

# Create a project policy.
az devcenter admin project-policy create

# Delete an project policy.
az devcenter admin project-policy delete

# List all project policies in the dev center.
az devcenter admin project-policy list

# Get a specific project policy.
az devcenter admin project-policy show

# Update an project policy.
az devcenter admin project-policy update

# Place the CLI in a waiting state until a condition is met.
az devcenter admin project-policy wait

# Lists SKUs available to the project.
az devcenter admin project-sku list

# Create a project.
az devcenter admin project create

# Delete a project.
az devcenter admin project delete

# Gets applicable inherited settings for this project.
az devcenter admin project get-inherited-setting

# List projects.
az devcenter admin project list

# Get a project.
az devcenter admin project show

# Update a project.
az devcenter admin project update

# Place the CLI in a waiting state until a condition is met.
az devcenter admin project wait

# Create a schedule.
az devcenter admin schedule create

# Delete a schedule.
az devcenter admin schedule delete

# List schedules for a pool.
az devcenter admin schedule list

# Get a schedule.
az devcenter admin schedule show

# Update a schedule.
az devcenter admin schedule update

# Place the CLI in a waiting state until a condition is met.
az devcenter admin schedule wait

# List the Microsoft.DevCenter SKUs available in a subscription.
az devcenter admin sku list

# List the current usages and limits in this location for the provided subscription.
az devcenter admin usage list

# Create a dev box add on.
az devcenter dev add-on create

# Delete a dev box add on.
az devcenter dev add-on delete

# Disable a dev box add on.
az devcenter dev add-on disable

# Enable a dev box add on.
az devcenter dev add-on enable

# List add ons for a dev box.
az devcenter dev add-on list

# Get a dev box add on.
az devcenter dev add-on show

# List Dev Box creations that are pending approval.
az devcenter dev approval list

# List all of the catalogs available for a project.
az devcenter dev catalog list

# Get the specified catalog within the project.
az devcenter dev catalog show

# Create a customization group.
az devcenter dev customization-group create

# List customization groups on the dev box.
az devcenter dev customization-group list

# Get a customization group.
az devcenter dev customization-group show

# List customization task.
az devcenter dev customization-task list

# Get a customization task.
az devcenter dev customization-task show

# Show logs of a customization task.
az devcenter dev customization-task show-logs

# Validate customization tasks.
az devcenter dev customization-task validate

# Align a dev box to the pools current pool configuration.
az devcenter dev dev-box align

# Approve the creation of a dev box.
az devcenter dev dev-box approve

# Captures a manual snapshot of the dev box.
az devcenter dev dev-box capture-snapshot

# Create a dev box.
az devcenter dev dev-box create

# Delay an action.
az devcenter dev dev-box delay-action

# Delay all actions.
az devcenter dev dev-box delay-all-actions

# Delete a dev box.
az devcenter dev dev-box delete

# List dev boxes for a user, list dev boxes in the dev center for a project and user, or list dev boxes that the caller has access to in the dev center.
az devcenter dev dev-box list

# List actions on a dev box.
az devcenter dev dev-box list-action

# Lists operations on the dev box which have occurred within the past 90 days.
az devcenter dev dev-box list-operation

# List snapshots for a dev box.
az devcenter dev dev-box list-snapshot

# Attempts automated repair steps to resolve common problems on a Dev Box. The dev box may restart during this operation.
az devcenter dev dev-box repair

# Restart a dev box.
az devcenter dev dev-box restart

# Restores a dev box to a specified snapshot.
az devcenter dev dev-box restore-snapshot

# Creates an action to schedule the deletion of a dev box.
az devcenter dev dev-box schedule-delete

# Lets a user set their own active hours for their Dev Box, overriding the defaults set at the pool level.
az devcenter dev dev-box set-active-hours

# Get a dev box.
az devcenter dev dev-box show

# Get an action.
az devcenter dev dev-box show-action

# Get an operation on a dev box.
az devcenter dev dev-box show-operation

# Get remote connection info.
az devcenter dev dev-box show-remote-connection

# Get a snapshot by snapshot id.
az devcenter dev dev-box show-snapshot

# Skip an action.
az devcenter dev dev-box skip-action

# Start a dev box.
az devcenter dev dev-box start

# Stop a dev box.
az devcenter dev dev-box stop

# List all environment definitions available within a catalog or list all environment definitions available for a project.
az devcenter dev environment-definition list

# Get an environment definition from a catalog.
az devcenter dev environment-definition show

# List all environment types configured for a project.
az devcenter dev environment-type list

# List the signed-in user's permitted abilities in an environment type.
az devcenter dev environment-type list-abilities

# Get an environment type configured for a project.
az devcenter dev environment-type show

# Create an environment.
az devcenter dev environment create

# Delay an environment action.
az devcenter dev environment delay-action

# Delete an environment and all its associated resources.
az devcenter dev environment delete

# Update an environment.
az devcenter dev environment deploy

# List the environments for a project or list the environments for a user within a project.
az devcenter dev environment list

# List specific environment actions.
az devcenter dev environment list-action

# Lists operations on the environment which have occurred within the past 90 days.
az devcenter dev environment list-operation

# Get an environment.
az devcenter dev environment show

# Retrieve a specific environment action.
az devcenter dev environment show-action

# Gets the logs for an operation on an environment.
az devcenter dev environment show-logs-by-operation

# Gets an environment action result.
az devcenter dev environment show-operation

# Gets outputs from the environment.
az devcenter dev environment show-outputs

# Skip a specific environment action.
az devcenter dev environment skip-action

# Update an environment.
az devcenter dev environment update

# Update the environment expiration.
az devcenter dev environment update-expiration-date

# Get the log for an imaging build task.
az devcenter dev image-build show-log

# Aligns all dev boxes in the pool with the current configuration.
az devcenter dev pool align

# List available pools.
az devcenter dev pool list

# Get a pool.
az devcenter dev pool show

# List all projects.
az devcenter dev project list

# List the signed-in user's permitted abilities in a project.
az devcenter dev project list-abilities

# Get a project.
az devcenter dev project show

# Get the status of an operation.
az devcenter dev project show-operation

# List schedules.
az devcenter dev schedule list

# Get a schedule.
az devcenter dev schedule show
```
