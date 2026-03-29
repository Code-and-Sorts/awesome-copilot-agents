# az datafactory

```bash
# Updates a factory's repo information.
az datafactory configure-factory-repo

# Create a factory.
az datafactory create

# Deletes a factory.
az datafactory delete

# Get Data Plane access.
az datafactory get-data-plane-access

# Get GitHub Access Token.
az datafactory get-git-hub-access-token

# Lists factories. And Lists factories under the specified subscription.
az datafactory list

# Gets a factory.
az datafactory show

# Updates a factory.
az datafactory update

# Query activity runs based on input filter conditions.
az datafactory activity-run query-by-pipeline-run

# Creates a data flow within a factory.
az datafactory data-flow create

# Delete a specific data flow in a given factory.
az datafactory data-flow delete

# List data flows within a provided factory.
az datafactory data-flow list

# Show information about the specified data flow.
az datafactory data-flow show

# Updates a specified data flow within a factory.
az datafactory data-flow update

# Create a dataset.
az datafactory dataset create

# Deletes a dataset.
az datafactory dataset delete

# Lists datasets.
az datafactory dataset list

# Gets a dataset.
az datafactory dataset show

# Update a dataset.
az datafactory dataset update

# Deletes a self-hosted integration runtime node.
az datafactory integration-runtime-node delete

# Get the IP address of self-hosted integration runtime node.
az datafactory integration-runtime-node get-ip-address

# Gets a self-hosted integration runtime node.
az datafactory integration-runtime-node show

# Updates a self-hosted integration runtime node.
az datafactory integration-runtime-node update

# Deletes an integration runtime.
az datafactory integration-runtime delete

# Gets the on-premises integration runtime connection information for encrypting the on-premises data source credentials.
az datafactory integration-runtime get-connection-info

# Get the integration runtime monitoring data, which includes the monitor data for all the nodes under this integration runtime.
az datafactory integration-runtime get-monitoring-data

# Gets detailed status information for an integration runtime.
az datafactory integration-runtime get-status

# Lists integration runtimes.
az datafactory integration-runtime list

# Retrieves the authentication keys for an integration runtime.
az datafactory integration-runtime list-auth-key

# Regenerates the authentication key for an integration runtime.
az datafactory integration-runtime regenerate-auth-key

# Remove all linked integration runtimes under specific data factory in a self-hosted integration runtime.
az datafactory integration-runtime remove-link

# Gets an integration runtime.
az datafactory integration-runtime show

# Starts a ManagedReserved type integration runtime.
az datafactory integration-runtime start

# Stops a ManagedReserved type integration runtime.
az datafactory integration-runtime stop

# Force the integration runtime to synchronize credentials across integration runtime nodes, and this will override the credentials across all worker nodes with those available on the dispatcher node. If you already have the latest credential backup file, you should manually import it (preferred) on any self-hosted integration runtime node than using this API directly.
az datafactory integration-runtime sync-credentials

# Updates an integration runtime.
az datafactory integration-runtime update

# Upgrade self-hosted integration runtime to latest version if availability.
az datafactory integration-runtime upgrade

# Place the CLI in a waiting state until a condition of the datafactory integration-runtime is met.
az datafactory integration-runtime wait

# Create a linked integration runtime entry in a shared integration runtime.
az datafactory integration-runtime linked-integration-runtime create

# Create an integration runtime.
az datafactory integration-runtime managed create

# Create an integration runtime.
az datafactory integration-runtime self-hosted create

# Create a linked service.
az datafactory linked-service create

# Deletes a linked service.
az datafactory linked-service delete

# Lists linked services.
az datafactory linked-service list

# Gets a linked service.
az datafactory linked-service show

# Update a linked service.
az datafactory linked-service update

# Create a managed private endpoint.
az datafactory managed-private-endpoint create

# Deletes a managed private endpoint.
az datafactory managed-private-endpoint delete

# Lists managed private endpoints.
az datafactory managed-private-endpoint list

# Gets a managed private endpoint.
az datafactory managed-private-endpoint show

# Update a managed private endpoint.
az datafactory managed-private-endpoint update

# Create a managed Virtual Network.
az datafactory managed-virtual-network create

# Lists managed Virtual Networks.
az datafactory managed-virtual-network list

# Gets a managed Virtual Network.
az datafactory managed-virtual-network show

# Update a managed Virtual Network.
az datafactory managed-virtual-network update

# Cancel a pipeline run by its run ID.
az datafactory pipeline-run cancel

# Query pipeline runs in the factory based on input filter conditions.
az datafactory pipeline-run query-by-factory

# Get a pipeline run by its run ID.
az datafactory pipeline-run show

# Create a pipeline.
az datafactory pipeline create

# Creates a run of a pipeline.
az datafactory pipeline create-run

# Deletes a pipeline.
az datafactory pipeline delete

# Lists pipelines.
az datafactory pipeline list

# Gets a pipeline.
az datafactory pipeline show

# Update a pipeline.
az datafactory pipeline update

# Cancel a single trigger instance by runId.
az datafactory trigger-run cancel

# Query trigger runs.
az datafactory trigger-run query-by-factory

# Rerun single trigger instance by runId.
az datafactory trigger-run rerun

# Create a trigger.
az datafactory trigger create

# Deletes a trigger.
az datafactory trigger delete

# Get a trigger's event subscription status.
az datafactory trigger get-event-subscription-status

# Lists triggers.
az datafactory trigger list

# Query triggers.
az datafactory trigger query-by-factory

# Gets a trigger.
az datafactory trigger show

# Starts a trigger.
az datafactory trigger start

# Stops a trigger.
az datafactory trigger stop

# Subscribe event trigger to events.
az datafactory trigger subscribe-to-event

# Unsubscribe event trigger from events.
az datafactory trigger unsubscribe-from-event

# Update a trigger.
az datafactory trigger update

# Place the CLI in a waiting state until a condition of the datafactory trigger is met.
az datafactory trigger wait
```
