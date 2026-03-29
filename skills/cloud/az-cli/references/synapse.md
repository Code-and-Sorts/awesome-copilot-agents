# az synapse

```bash
# Query activity runs based on input filter conditions.
az synapse activity-run query-by-pipeline-run

# Disable Azure Active Directly only Authentication for this Synapse workspace.
az synapse ad-only-auth disable

# Enable Azure Active Directly only Authentication for this Synapse workspace.
az synapse ad-only-auth enable

# Get a specific Azure Active Directly only Authentication property.
az synapse ad-only-auth get

# Create a data flow.
az synapse data-flow create

# Delete a data flow.
az synapse data-flow delete

# List data flows.
az synapse data-flow list

# Set an exist data flow.
az synapse data-flow set

# Get a data flow.
az synapse data-flow show

# Create a dataset.
az synapse dataset create

# Delete a dataset.
az synapse dataset delete

# List datasets.
az synapse dataset list

# Update an exist dataset.
az synapse dataset set

# Get a dataset.
az synapse dataset show

# Update an exist dataset.
az synapse dataset update

# Remove a self-hosted integration runtime node.
az synapse integration-runtime-node delete

# Get self-hosted integration runtime node ip.
az synapse integration-runtime-node get-ip-address

# Get self-hosted integration runtime node information.
az synapse integration-runtime-node show

# Update self-hosted integration runtime node.
az synapse integration-runtime-node update

# Create an integration runtime.
az synapse integration-runtime create

# Delete an integration runtime.
az synapse integration-runtime delete

# Get the integration runtime connection infomation.
az synapse integration-runtime get-connection-info

# Get metric data for a self-hosted integration runtime.
az synapse integration-runtime get-monitoring-data

# Gets detailed status information for an integration runtime.
az synapse integration-runtime get-status

# List integration runtimes.
az synapse integration-runtime list

# Get keys for a self-hosted integration runtime.
az synapse integration-runtime list-auth-key

# Regenerate self-hosted integration runtime key.
az synapse integration-runtime regenerate-auth-key

# Get an integration runtime.
az synapse integration-runtime show

# Start an SSIS integration runtime.
az synapse integration-runtime start

# Stop an SSIS integration runtime.
az synapse integration-runtime stop

# Synchronize credentials among integration runtime nodes.
az synapse integration-runtime sync-credentials

# Update an integration runtime.
az synapse integration-runtime update

# Upgrade self-hosted integration runtime.
az synapse integration-runtime upgrade

# Place the CLI in a waiting state until a condition of a integration runtime is met.
az synapse integration-runtime wait

# Create an managed integration runtime.
az synapse integration-runtime managed create

# Create an self-hosted integration runtime.
az synapse integration-runtime self-hosted create

# Creates a KQL script.
az synapse kql-script create

# Deletes a KQL script.
az synapse kql-script delete

# Export KQL scripts.
az synapse kql-script export

# Creates a KQL script.
az synapse kql-script import

# List KQL scripts.
az synapse kql-script list

# Gets a KQL script.
az synapse kql-script show

# Place the CLI in a waiting state until a condition of a KQL script is met.
az synapse kql-script wait

# Lists available operations for the Kusto sub-resources inside Microsoft.Synapse provider.
az synapse kusto-operation list

# Create an attached database configuration.
az synapse kusto attached-database-configuration create

# Deletes the attached database configuration with the given name.
az synapse kusto attached-database-configuration delete

# Returns the list of attached database configurations of the given Kusto Pool.
az synapse kusto attached-database-configuration list

# Returns an attached database configuration.
az synapse kusto attached-database-configuration show

# Update an attached database configuration.
az synapse kusto attached-database-configuration update

# Place the CLI in a waiting state until a condition of the synapse kusto attached-database-configuration is met.
az synapse kusto attached-database-configuration wait

# Deletes the data connection with the given name.
az synapse kusto data-connection delete

# Returns the list of data connections of the given Kusto pool database.
az synapse kusto data-connection list

# Returns a data connection.
az synapse kusto data-connection show

# Place the CLI in a waiting state until a condition of the synapse kusto data-connection is met.
az synapse kusto data-connection wait

# Create a data connection.
az synapse kusto data-connection event-grid create

# Updates a data connection.
az synapse kusto data-connection event-grid update

# Create a data connection.
az synapse kusto data-connection event-hub create

# Updates a data connection.
az synapse kusto data-connection event-hub update

# Create a data connection.
az synapse kusto data-connection iot-hub create

# Updates a data connection.
az synapse kusto data-connection iot-hub update

# Creates a Kusto pool database principalAssignment.
az synapse kusto database-principal-assignment create

# Deletes a Kusto pool principalAssignment.
az synapse kusto database-principal-assignment delete

# Lists all Kusto pool database principalAssignments.
az synapse kusto database-principal-assignment list

# Gets a Kusto pool database principalAssignment.
az synapse kusto database-principal-assignment show

# Update a Kusto pool database principalAssignment.
az synapse kusto database-principal-assignment update

# Place the CLI in a waiting state until a condition of the synapse kusto database-principal-assignment is met.
az synapse kusto database-principal-assignment wait

# Create a database.
az synapse kusto database create

# Deletes the database with the given name.
az synapse kusto database delete

# Returns the list of databases of the given Kusto pool.
az synapse kusto database list

# Returns a database.
az synapse kusto database show

# Updates a database.
az synapse kusto database update

# Place the CLI in a waiting state until a condition of the synapse kusto database is met.
az synapse kusto database wait

# Create a Kusto pool principalAssignment.
az synapse kusto pool-principal-assignment create

# Deletes a Kusto pool principalAssignment.
az synapse kusto pool-principal-assignment delete

# Lists all Kusto pool principalAssignments.
az synapse kusto pool-principal-assignment list

# Gets a Kusto pool principalAssignment.
az synapse kusto pool-principal-assignment show

# Update a Kusto pool principalAssignment.
az synapse kusto pool-principal-assignment update

# Place the CLI in a waiting state until a condition of the synapse kusto pool-principal-assignment is met.
az synapse kusto pool-principal-assignment wait

# Add a list of language extensions that can run within KQL queries.
az synapse kusto pool add-language-extension

# Create a Kusto pool.
az synapse kusto pool create

# Deletes a Kusto pool.
az synapse kusto pool delete

# Detaches all followers of a database owned by this Kusto Pool.
az synapse kusto pool detach-follower-database

# List all Kusto pools.
az synapse kusto pool list

# Returns a list of databases that are owned by this Kusto Pool and were followed by another Kusto Pool.
az synapse kusto pool list-follower-database

# Returns a list of language extensions that can run within KQL queries.
az synapse kusto pool list-language-extension

# Returns the SKUs available for the provided resource.
az synapse kusto pool list-sku

# Remove a list of language extensions that can run within KQL queries.
az synapse kusto pool remove-language-extension

# Gets a Kusto pool.
az synapse kusto pool show

# Starts a Kusto pool.
az synapse kusto pool start

# Stops a Kusto pool.
az synapse kusto pool stop

# Update a Kusto Kusto Pool.
az synapse kusto pool update

# Place the CLI in a waiting state until a condition of the synapse kusto pool is met.
az synapse kusto pool wait

# Create a link connection.
az synapse link-connection create

# Delete a link connection.
az synapse link-connection delete

# Edit tables for a link connection.
az synapse link-connection edit-link-tables

# Query the link table status of a link connection.
az synapse link-connection get-link-tables-status

# Check a link connection status after start/stop a link connection.
az synapse link-connection get-status

# List link connections in a synapse workspace.
az synapse link-connection list

# List the link tables of a link connection.
az synapse link-connection list-link-tables

# Get a link connection.
az synapse link-connection show

# Start a link connnection.
az synapse link-connection start

# Stop a link connection.
az synapse link-connection stop

# Update a link connection.
az synapse link-connection update

# Update landing zone credetial of a link connection.
az synapse link-connection update-landing-zone-credential

# Create a linked service.
az synapse linked-service create

# Delete a linked service.
az synapse linked-service delete

# List linked services.
az synapse linked-service list

# Update an exist linked service.
az synapse linked-service set

# Get a linked service.
az synapse linked-service show

# Update an exist linked service.
az synapse linked-service update

# Create a synapse managed private endpoints.
az synapse managed-private-endpoints create

# Delete synapse managed private endpoints in a workspace.
az synapse managed-private-endpoints delete

# List synapse managed private endpoints in a workspace.
az synapse managed-private-endpoints list

# Get a synapse managed private endpoints.
az synapse managed-private-endpoints show

# Create a notebook.
az synapse notebook create

# Delete a notebook.
az synapse notebook delete

# Export notebooks.
az synapse notebook export

# Import a notebook.
az synapse notebook import

# List notebooks.
az synapse notebook list

# Set an exist notebook.
az synapse notebook set

# Get a notebook.
az synapse notebook show

# Cancel a pipeline run by its run ID.
az synapse pipeline-run cancel

# Query pipeline runs in the workspace based on input filter conditions.
az synapse pipeline-run query-by-workspace

# Get a pipeline run by its run ID.
az synapse pipeline-run show

# Create a pipeline.
az synapse pipeline create

# Creates a run of a pipeline.
az synapse pipeline create-run

# Delete a pipeline.
az synapse pipeline delete

# List pipelines.
az synapse pipeline list

# Update an exist pipeline.
az synapse pipeline set

# Get a pipeline.
az synapse pipeline show

# Update an exist pipeline.
az synapse pipeline update

# Create a role assignment.
az synapse role assignment create

# Delete role assignments of workspace.
az synapse role assignment delete

# List role assignments.
az synapse role assignment list

# Get a role assignment by id.
az synapse role assignment show

# List role definitions.
az synapse role definition list

# Get role definition by role id/name.
az synapse role definition show

# List role scopes.
az synapse role scope list

# Create a spark job definition.
az synapse spark-job-definition create

# Delete a spark job definition.
az synapse spark-job-definition delete

# List spark job definitions.
az synapse spark-job-definition list

# Get a spark job definition.
az synapse spark-job-definition show

# Update a spark job definition.
az synapse spark-job-definition update

# Place the CLI in a waiting state until a condition of a spark job definition is met.
az synapse spark-job-definition wait

# Cancel a Spark job.
az synapse spark job cancel

# List all Spark jobs.
az synapse spark job list

# Get a Spark job.
az synapse spark job show

# Submit a Spark job.
az synapse spark job submit

# Create a Spark pool.
az synapse spark pool create

# Delete a Spark pool.
az synapse spark pool delete

# List all Spark pools.
az synapse spark pool list

# Get a Spark pool.
az synapse spark pool show

# Update the Spark pool.
az synapse spark pool update

# Place the CLI in a waiting state until a condition of a Spark pool is met.
az synapse spark pool wait

# Cancel a Spark session.
az synapse spark session cancel

# Create a Spark session.
az synapse spark session create

# List all Spark sessions.
az synapse spark session list

# Reset a Spark session timeout time.
az synapse spark session reset-timeout

# Get a Spark session.
az synapse spark session show

# Cancel a Spark statement.
az synapse spark statement cancel

# Invoke a Spark statement.
az synapse spark statement invoke

# List all Spark statements.
az synapse spark statement list

# Get a Spark statement.
az synapse spark statement show

# Create or update a SQL script.
az synapse sql-script create

# Delete a SQL script.
az synapse sql-script delete

# Export a SQL script.
az synapse sql-script export

# Import a SQL script.
az synapse sql-script import

# List SQL scripts in a synapse workspace.
az synapse sql-script list

# Get a SQL script.
az synapse sql-script show

# Place the CLI in a waiting state until a condition of a sql script is met.
az synapse sql-script wait

# Create the SQL Azure Active Directory administrator.
az synapse sql ad-admin create

# Delete the SQL Azure Active Directory administrator.
az synapse sql ad-admin delete

# Get the SQL Azure Active Directory administrator.
az synapse sql ad-admin show

# Update the SQL Azure Active Directory administrator.
az synapse sql ad-admin update

# Place the CLI in a waiting state until a condition is met.
az synapse sql ad-admin wait

# Get a SQL's auditing policy.
az synapse sql audit-policy show

# Update a SQL's auditing policy.
az synapse sql audit-policy update

# Place the CLI in a waiting state until a condition is met.
az synapse sql audit-policy wait

# Create a SQL pool.
az synapse sql pool create

# Delete a SQL pool.
az synapse sql pool delete

# List all SQL pools.
az synapse sql pool list

# List all deleted SQL pools.
az synapse sql pool list-deleted

# Pause a SQL pool.
az synapse sql pool pause

# Create a new SQL pool by restoring from a backup.
az synapse sql pool restore

# Resume a SQL pool.
az synapse sql pool resume

# Get a SQL pool.
az synapse sql pool show

# Generate a connection string to a SQL pool.
az synapse sql pool show-connection-string

# Update a SQL pool.
az synapse sql pool update

# Place the CLI in a waiting state until a condition of a SQL pool is met.
az synapse sql pool wait

# Get a SQL pool's auditing policy.
az synapse sql pool audit-policy show

# Update a SQL pool's auditing policy.
az synapse sql pool audit-policy update

# Create a column's sensitivity classification.
az synapse sql pool classification create

# Delete the sensitivity classification of a given column.
az synapse sql pool classification delete

# Get the sensitivity classifications of a given SQL pool.
az synapse sql pool classification list

# Get the sensitivity classification of a given column.
az synapse sql pool classification show

# Update a column's sensitivity classification.
az synapse sql pool classification update

# Disable sensitivity recommendations for a given column(recommendations are enabled by default on all columns).
az synapse sql pool classification recommendation disable

# Enable sensitivity recommendations for a given column(recommendations are enabled by default on all columns).
az synapse sql pool classification recommendation enable

# List the recommended sensitivity classifications of a given SQL pool.
az synapse sql pool classification recommendation list

# Set a SQL pool's transparent data encryption configuration.
az synapse sql pool tde set

# Get a SQL pool's transparent data encryption configuration.
az synapse sql pool tde show

# Get a SQL pool's threat detection policy.
az synapse sql pool threat-policy show

# Update a SQL pool's threat detection policy.
az synapse sql pool threat-policy update

# Cancel a single trigger instance by runId.
az synapse trigger-run cancel

# Query trigger runs in the workspace based on input filter conditions.
az synapse trigger-run query-by-workspace

# Rerun single trigger instance by runId.
az synapse trigger-run rerun

# Create a trigger.
az synapse trigger create

# Delete a trigger.
az synapse trigger delete

# Get a trigger's event subscription status.
az synapse trigger get-event-subscription-status

# List triggers.
az synapse trigger list

# Update an exist trigger.
az synapse trigger set

# Get a trigger.
az synapse trigger show

# Starts a trigger.
az synapse trigger start

# Stops a trigger.
az synapse trigger stop

# Subscribe event trigger to events.
az synapse trigger subscribe-to-event

# Unsubscribe event trigger from events.
az synapse trigger unsubscribe-from-event

# Update an exist trigger.
az synapse trigger update

# Place the CLI in a waiting state until a condition of a trigger is met.
az synapse trigger wait

# Delete a workspace package.
az synapse workspace-package delete

# List workspace packages.
az synapse workspace-package list

# Get a workspace package.
az synapse workspace-package show

# Upload a local workspace package file to an Azure Synapse workspace.
az synapse workspace-package upload

# Upload workspace package files from a local directory to an Azure Synapse workspace.
az synapse workspace-package upload-batch

# Activates a workspace and change it's state from pending to success state when the workspace is first being provisioned and double encryption is enabled.
az synapse workspace activate

# Check if a Synapse workspace name is available or not.
az synapse workspace check-name

# Create a Synapse workspace.
az synapse workspace create

# Delete a Synapse workspace.
az synapse workspace delete

# List all Synapse workspaces.
az synapse workspace list

# Get a Synapse workspace.
az synapse workspace show

# Update a Synapse workspace.
az synapse workspace update

# Place the CLI in a waiting state until a condition of the workspace is met.
az synapse workspace wait

# Create a firewall rule.
az synapse workspace firewall-rule create

# Delete a firewall rule.
az synapse workspace firewall-rule delete

# List all firewall rules.
az synapse workspace firewall-rule list

# Get a firewall rule.
az synapse workspace firewall-rule show

# Update a firewall rule.
az synapse workspace firewall-rule update

# Place the CLI in a waiting state until a condition of a firewall rule is met.
az synapse workspace firewall-rule wait

# Create a workspace's key.
az synapse workspace key create

# Delete a workspace's key. The key at active status can't be deleted.
az synapse workspace key delete

# List keys under specified workspace.
az synapse workspace key list

# Show a workspace's key by name.
az synapse workspace key show

# Place the CLI in a waiting state until a condition of a workspace key is met.
az synapse workspace key wait

# Grant workspace's sql-access to managed-identity.
az synapse workspace managed-identity grant-sql-access

# Revoke workspace's sql-access to managed-identity.
az synapse workspace managed-identity revoke-sql-access

# Show workspace's sql-access state to managed-identity.
az synapse workspace managed-identity show-sql-access

# Place the CLI in a waiting state until a condition of sql-access state to managed-identity is met.
az synapse workspace managed-identity wait
```
