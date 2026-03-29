# az ml

```bash
# List Azure OpenAI deployments.
az ml azure-openai-deployment list

# Create a deployment. If the deployment already exists, it will be over-written with the new settings.
az ml batch-deployment create

# Delete a deployment.
az ml batch-deployment delete

# List deployments.
az ml batch-deployment list

# List the batch scoring jobs for a batch deployment.
az ml batch-deployment list-jobs

# Show a deployment.
az ml batch-deployment show

# Update a deployment.
az ml batch-deployment update

# Create an endpoint.
az ml batch-endpoint create

# Delete an endpoint.
az ml batch-endpoint delete

# Invoke an endpoint.
az ml batch-endpoint invoke

# List endpoints in a workspace.
az ml batch-endpoint list

# List the batch scoring jobs for a batch endpoint.
az ml batch-endpoint list-jobs

# Show details for an endpoint.
az ml batch-endpoint show

# Update an endpoint.
az ml batch-endpoint update

# Create a capability host.
az ml capability-host create

# Delete a capability host.
az ml capability-host delete

# Show details of a capability host.
az ml capability-host show

# Archive a component.
az ml component archive

# Create a component.
az ml component create

# List components in a workspace.
az ml component list

# Prepare a component for signing.
az ml component prepare-for-sign

# Restore an archived component.
az ml component restore

# Show details for a component.
az ml component show

# Update a component. Currently only a few fields(description, display_name) support update.
az ml component update

# Attach an existing compute resource to a workspace.
az ml compute attach

# Set up SSH connection to Compute Instance.
az ml compute connect-ssh

# Create a compute target.
az ml compute create

# Delete a compute target.
az ml compute delete

# Detach a previously attached compute resource from a workspace.
az ml compute detach

# Enable/Disable Single sign-on on Compute Instance.
az ml compute enable-sso

# List the compute targets in a workspace.
az ml compute list

# List node details for a compute target. The only supported compute type for this command is AML compute.
az ml compute list-nodes

# List the VM sizes available by location.
az ml compute list-sizes

# List the available usage resources for VMs.
az ml compute list-usage

# Restart a ComputeInstance target.
az ml compute restart

# Show details for a compute target.
az ml compute show

# Start a ComputeInstance target.
az ml compute start

# Stop a ComputeInstance target.
az ml compute stop

# Update a compute target.
az ml compute update

# Create a connection.
az ml connection create

# Delete a connection.
az ml connection delete

# List all connections.
az ml connection list

# Show details of a connection.
az ml connection show

# Update a connection.
az ml connection update

# Archive a data asset.
az ml data archive

# Create a data asset in a workspace/registry. If you are using a registry, replace `--workspace-name my-workspace` with the `--registry-name <registry-name>` option.
az ml data create

# Import data and create a data asset.
az ml data import

# List data assets in a workspace/registry. If you are using a registry, replace `--workspace-name my-workspace` with the `--registry-name <registry-name>` option.
az ml data list

# Show status of list of data import materialization jobs that create versions of a data asset.
az ml data list-materialization-status

# Mount a specific data asset to a local path. For now only Linux is supported.
az ml data mount

# Restore an archived data asset.
az ml data restore

# Share a specific data asset from workspace to registry.
az ml data share

# Shows details for a data asset in a workspace/registry. If you are using a registry, replace `--workspace-name my-workspace` with the `--registry-name <registry-name>` option.
az ml data show

# Update a data asset.
az ml data update

# Create a datastore.
az ml datastore create

# Delete a datastore.
az ml datastore delete

# List datastores in a workspace.
az ml datastore list

# Mount a specific datastore to a local path. For now only Linux is supported.
az ml datastore mount

# Show details for a datastore.
az ml datastore show

# Update a datastore.
az ml datastore update

# Archive a deployment template.
az ml deployment-template archive

# Create a new deployment template from a YAML file.
az ml deployment-template create

# List deployment templates in a registry.
az ml deployment-template list

# Restore an archived deployment template.
az ml deployment-template restore

# Get a specific deployment template by name and version.
az ml deployment-template show

# Update specific fields of an existing deployment template.
az ml deployment-template update

# Archive an environment.
az ml environment archive

# Create an environment.
az ml environment create

# List environments in a workspace.
az ml environment list

# Restore an archived environment.
az ml environment restore

# Share a specific environment from workspace to registry.
az ml environment share

# Show details for an environment.
az ml environment show

# Update an environment.
az ml environment update

# Archive a feature set.
az ml feature-set archive

# Begin backfill job.
az ml feature-set backfill

# Create a feature set.
az ml feature-set create

# Gets a feature for a feature set.
az ml feature-set get-feature

# List feature set in a feature store.
az ml feature-set list

# List Features for a feature set.
az ml feature-set list-features

# List Materialization operation.
az ml feature-set list-materialization-operation

# Restore an archived feature set.
az ml feature-set restore

# Shows details for a feature set.
az ml feature-set show

# Shows a feature for a feature set.
az ml feature-set show-feature

# Update a feature set.
az ml feature-set update

# Archive a feature store entity.
az ml feature-store-entity archive

# Create a feature store entity.
az ml feature-store-entity create

# List feature store entity in a feature store.
az ml feature-store-entity list

# Restore an archived feature store entity.
az ml feature-store-entity restore

# Shows details for a feature store entity.
az ml feature-store-entity show

# Update a feature store entity.
az ml feature-store-entity update

# Create a feature store.
az ml feature-store create

# Delete a feature store.
az ml feature-store delete

# List all the feature stores in a subscription.
az ml feature-store list

# Provision managed network.
az ml feature-store provision-network

# Show details for a feature store.
az ml feature-store show

# Update a feature store.
az ml feature-store update

# Create an index.
az ml index create

# List indexes in a workspace.
az ml index list

# Show details for an index in a workspace.
az ml index show

# Archive a job.
az ml job archive

# Cancel a job.
az ml job cancel

# Set up ssh connection and sends the request to the SSH service running inside user's container through Tundra.
az ml job connect-ssh

# Create a job.
az ml job create

# Download all job-related files.
az ml job download

# List jobs in a workspace.
az ml job list

# Restore an archived job.
az ml job restore

# Show details for a job.
az ml job show

# Show services of a job per node.
az ml job show-services

# Stream job logs to the console.
az ml job stream

# Update a job.
az ml job update

# Validate a job. This command works for pipeline jobs only for now.
az ml job validate

# Create a marketplace subscription.
az ml marketplace-subscription create

# Delete a marketplace subscription.
az ml marketplace-subscription delete

# List marketplace subscriptions in a workspace.
az ml marketplace-subscription list

# Shows details for a marketplace subscription.
az ml marketplace-subscription show

# Archive a model.
az ml model archive

# Create a model.
az ml model create

# Download all model-related files.
az ml model download

# List models in a workspace/registry. If you are using a registry, replace `--workspace-name my-workspace` with the `--registry-name <registry-name>` option.
az ml model list

# Package a model into an environment.
az ml model package

# Restore an archived model.
az ml model restore

# Share a specific model from workspace to registry.
az ml model share

# Show details for a model in a workspace/registry. If you are using a registry, replace `--workspace-name my-workspace` with the `--registry-name <registry-name>` option.
az ml model show

# Update a model in a workspace/registry.
az ml model update

# Create a deployment. If the deployment already exists, it will fail. If you want to update existing deployment, use az ml online-deployment update.
az ml online-deployment create

# Delete a deployment.
az ml online-deployment delete

# Get the container logs for an online deployment.
az ml online-deployment get-logs

# List deployments.
az ml online-deployment list

# Show a deployment.
az ml online-deployment show

# Update a deployment.
az ml online-deployment update

# Create an endpoint.
az ml online-endpoint create

# Delete an endpoint.
az ml online-endpoint delete

# List the token/keys for an online endpoint.
az ml online-endpoint get-credentials

# Invoke an endpoint.
az ml online-endpoint invoke

# List endpoints in a workspace.
az ml online-endpoint list

# Regenerate the keys for an online endpoint.
az ml online-endpoint regenerate-keys

# Show details for an endpoint.
az ml online-endpoint show

# Update an endpoint.
az ml online-endpoint update

# Create a registry.
az ml registry create

# Delete a given registry.
az ml registry delete

# List all the registries in a subscription or resource group.
az ml registry list

# Show details for a registry.
az ml registry show

# Update a registry.
az ml registry update

# Create a schedule.
az ml schedule create

# Delete a schedule. The previous triggered jobs will NOT be deleted.
az ml schedule delete

# Disable a schedule so that it will stop triggering jobs.
az ml schedule disable

# Enable a schedule so that it will continue triggering jobs.
az ml schedule enable

# List the schedules in a workspace.
az ml schedule list

# Show details of a schedule.
az ml schedule show

# Trigger a schedule once.
az ml schedule trigger

# Update a schedule.
az ml schedule update

# Create a serverless endpoint.
az ml serverless-endpoint create

# Delete a serverless endpoint.
az ml serverless-endpoint delete

# List the keys for a serverless endpoint.
az ml serverless-endpoint get-credentials

# List serverless endpoints in a workspace.
az ml serverless-endpoint list

# Regenerate the keys for a serverless endpoint.
az ml serverless-endpoint regenerate-keys

# Shows details for a serverless endpoint.
az ml serverless-endpoint show

# Update a serverlesss endpoint.
az ml serverless-endpoint update

# Create a workspace.
az ml workspace create

# Delete a workspace.
az ml workspace delete

# Diagnose workspace setup problems.
az ml workspace diagnose

# List all the workspaces in a subscription.
az ml workspace list

# List workspace keys for dependent resources such as Azure Storage, Azure Container Registry, and Azure Application Insights.
az ml workspace list-keys

# Provision workspace managed network.
az ml workspace provision-network

# Show details for a workspace.
az ml workspace show

# Sync workspace keys for dependent resources such as Azure Storage, Azure Container Registry, and Azure Application Insights.
az ml workspace sync-keys

# Update a workspace.
az ml workspace update

# List all the managed network outbound rules for a workspace.
az ml workspace outbound-rule list

# Remove an outbound rule from the managed network for a workspace.
az ml workspace outbound-rule remove

# Add or update an outbound rule in the managed network for a workspace.
az ml workspace outbound-rule set

# Show details for a managed network outbound rule for a workspace.
az ml workspace outbound-rule show
```
