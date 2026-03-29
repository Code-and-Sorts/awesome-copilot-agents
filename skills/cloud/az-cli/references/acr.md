# az acr

```bash
# Queues a quick build, providing streaming logs for an Azure Container Registry.
az acr build

# Gets health information on the environment and optionally a target registry.
az acr check-health

# Checks if an Azure Container Registry name is valid and available for use.
az acr check-name

# Create an Azure Container Registry.
az acr create

# Deletes an Azure Container Registry.
az acr delete

# Imports an image to an Azure Container Registry from another Container Registry. Import removes the need to docker pull, docker tag, docker push. For larger images consider using `--no-wait`.
az acr import

# Lists all the container registries under the current subscription.
az acr list

# Log in to an Azure Container Registry through the Docker CLI.
az acr login

# Query the content in an ACR using Kusto Query Language.
az acr query

# Queues a quick run providing streamed logs for an Azure Container Registry.
az acr run

# Get the details of an Azure Container Registry.
az acr show

# Display registry endpoints.
az acr show-endpoints

# Get the storage usage for an Azure Container Registry.
az acr show-usage

# Update an Azure Container Registry.
az acr update

# Create an agent pool for an Azure Container Registry.
az acr agentpool create

# Delete an agent pool.
az acr agentpool delete

# List the agent pools for an Azure Container Registry.
az acr agentpool list

# Get the properties of a specified agent pool for an Azure Container Registry.
az acr agentpool show

# Update an agent pool for an Azure Container Registry.
az acr agentpool update

# Create a referrers streaming artifact for a specific image in an ACR.
az acr artifact-streaming create

# Show if artifact streaming is enabled in a repository for an Azure Container Registry.
az acr artifact-streaming show

# Enable or disable auto-creation of streaming artifacts for newly pushed images under a given registry.
az acr artifact-streaming update

# Cancel the given streaming artifact operation for ACR.
az acr artifact-streaming operation cancel

# Check the operation status for artifact streaming in an ACR.
az acr artifact-streaming operation show

# Create a cache rule.
az acr cache create

# Delete a cache rule.
az acr cache delete

# List the cache rules in an Azure Container Registry.
az acr cache list

# Show a cache rule.
az acr cache show

# Update the credential set on a cache rule.
az acr cache update

# Show the configured 'Azure AD authenticate as ARM' policy for an Azure Container Registry.
az acr config authentication-as-arm show

# Update 'Azure AD authenticate as ARM' policy for an Azure Container Registry.
az acr config authentication-as-arm update

# Show the configured content-trust policy for an Azure Container Registry.
az acr config content-trust show

# Update content-trust policy for an Azure Container Registry.
az acr config content-trust update

# Show the configured retention policy for an Azure Container Registry.
az acr config retention show

# Update retention policy for an Azure Container Registry.
az acr config retention update

# Show the configured soft-delete policy for an Azure Container Registry.
az acr config soft-delete show

# Update soft-delete policy for an Azure Container Registry.
az acr config soft-delete update

# Create a connected registry for an Azure Container Registry.
az acr connected-registry create

# Deactivate a connected registry from Azure Container Registry.
az acr connected-registry deactivate

# Delete a connected registry from Azure Container Registry.
az acr connected-registry delete

# Retrieve information required to activate a connected registry, and creates or rotates the sync token credentials.
az acr connected-registry get-settings

# List all the connected registries under the current parent registry.
az acr connected-registry list

# List all the client tokens associated to a specific connected registries.
az acr connected-registry list-client-tokens

# Show connected registry details.
az acr connected-registry show

# Update a connected registry for an Azure Container Registry.
az acr connected-registry update

# Show the connected registry sync scope map information.
az acr connected-registry permissions show

# Add and remove repository permissions accross all the necessary connected registry sync scope maps.
az acr connected-registry permissions update

# Create a credential set.
az acr credential-set create

# Delete a credential set.
az acr credential-set delete

# List the credential sets in an Azure Container Registry.
az acr credential-set list

# Show a credential set.
az acr credential-set show

# Update the username or password Azure Key Vault secret ID on a credential set.
az acr credential-set update

# Regenerate login credentials for an Azure Container Registry.
az acr credential renew

# Get the login credentials for an Azure Container Registry.
az acr credential show

# Rotate (update) the container registry's encryption key.
az acr encryption rotate-key

# Show the container registry's encryption details.
az acr encryption show

# Create an export pipeline.
az acr export-pipeline create

# Delete an export pipeline.
az acr export-pipeline delete

# List export pipelines on a Container Registry.
az acr export-pipeline list

# Show an export pipeline in detail.
az acr export-pipeline show

# Delete a helm chart version in an Azure Container Registry.
az acr helm delete

# Download and install Helm command-line tool.
az acr helm install-cli

# List all helm charts in an Azure Container Registry.
az acr helm list

# Push a helm chart package to an Azure Container Registry.
az acr helm push

# Describe a helm chart in an Azure Container Registry.
az acr helm show

# Add a helm chart repository from an Azure Container Registry through the Helm CLI.
az acr helm repo add

# Assign a managed identity to a container registry.
az acr identity assign

# Remove a managed identity from a container registry.
az acr identity remove

# Show the container registry's identity details.
az acr identity show

# Create an import pipeline.
az acr import-pipeline create

# Delete an import pipeline.
az acr import-pipeline delete

# List import pipelines on a Container Registry.
az acr import-pipeline list

# Show an import pipeline in detail.
az acr import-pipeline show

# Delete a manifest in an Azure Container Registry.
az acr manifest delete

# List the manifests in a repository in an Azure Container Registry.
az acr manifest list

# List the soft-deleted manifests in a repository in an Azure Container Registry.
az acr manifest list-deleted

# List the soft-deleted tags in a repository in an Azure Container Registry.
az acr manifest list-deleted-tags

# List the metadata of the manifests in a repository in an Azure Container Registry.
az acr manifest list-metadata

# List the referrers to a manifest in an Azure Container Registry.
az acr manifest list-referrers

# Restore a soft-deleted artifact and tag in an Azure Container Registry.
az acr manifest restore

# Get a manifest in an Azure Container Registry.
az acr manifest show

# Get the metadata of an artifact in an Azure Container Registry.
az acr manifest show-metadata

# Update the manifest metadata of an artifact in an Azure Container Registry.
az acr manifest update-metadata

# Add a network rule.
az acr network-rule add

# List network rules.
az acr network-rule list

# Remove a network rule.
az acr network-rule remove

# Queues a quick build task that builds an app and pushes it into an Azure Container Registry.
az acr pack build

# Delete all failed pipeline-runs on the registry.
az acr pipeline-run clean

# Create a pipeline-run.
az acr pipeline-run create

# Delete a pipeline-run.
az acr pipeline-run delete

# List pipeline-runs of all pipelines on a container registry.
az acr pipeline-run list

# Show a pipeline-run in detail.
az acr pipeline-run show

# Approve a private endpoint connection request for a container registry.
az acr private-endpoint-connection approve

# Delete a private endpoint connection request for a container registry.
az acr private-endpoint-connection delete

# List all private endpoint connections to a container registry.
az acr private-endpoint-connection list

# Reject a private endpoint connection request for a container registry.
az acr private-endpoint-connection reject

# Show details of a container registry's private endpoint connection.
az acr private-endpoint-connection show

# List the private link resources supported for a registry.
az acr private-link-resource list

# Create a replicated region for an Azure Container Registry.
az acr replication create

# Delete a replicated region from an Azure Container Registry.
az acr replication delete

# List all of the regions for a geo-replicated Azure Container Registry.
az acr replication list

# Get the details of a replicated region.
az acr replication show

# Updates a replication.
az acr replication update

# Delete a repository or image in an Azure Container Registry.
az acr repository delete

# List repositories in an Azure Container Registry.
az acr repository list

# List soft-deleted repositories in an Azure Container Registry.
az acr repository list-deleted

# Get the attributes of a repository or image in an Azure Container Registry.
az acr repository show

# Show tags for a repository in an Azure Container Registry.
az acr repository show-tags

# Untag an image in an Azure Container Registry.
az acr repository untag

# Update the attributes of a repository or image in an Azure Container Registry.
az acr repository update

# Create a scope map for an Azure Container Registry.
az acr scope-map create

# Delete a scope map for an Azure Container Registry.
az acr scope-map delete

# List all scope maps for an Azure Container Registry.
az acr scope-map list

# Show details and attributes of a scope map for an Azure Container Registry.
az acr scope-map show

# Update a scope map for an Azure Container Registry.
az acr scope-map update

# Cancel currently running supply chain workflow.
az acr supply-chain workflow cancel-run

# Create acr supply chain workflow.
az acr supply-chain workflow create

# Delete acr supply chain workflow.
az acr supply-chain workflow delete

# List status of acr supply chain workflow images.
az acr supply-chain workflow list

# Show acr supply chain workflow tasks.
az acr supply-chain workflow show

# Update acr supply chain workflow.
az acr supply-chain workflow update

# Cancel a specified run of an Azure Container Registry.
az acr task cancel-run

# Create a series of steps for building, testing and OS & Framework patching containers. Tasks support triggers from git commits and base image updates.
az acr task create

# Delete a task from an Azure Container Registry.
az acr task delete

# List the tasks for an Azure Container Registry.
az acr task list

# List all of the executed runs for an Azure Container Registry, with the ability to filter by a specific Task.
az acr task list-runs

# Show logs for a particular run. If no run-id is supplied, show logs for the last created run.
az acr task logs

# Manually trigger a task that might otherwise be waiting for git commits or base image update triggers.
az acr task run

# Get the properties of a named task for an Azure Container Registry.
az acr task show

# Get the properties of a specified run of an Azure Container Registry Task.
az acr task show-run

# Update a task for an Azure Container Registry.
az acr task update

# Patch the run properties of an Azure Container Registry Task.
az acr task update-run

# Add a custom registry login credential to the task.
az acr task credential add

# List all the custom registry credentials for task.
az acr task credential list

# Remove credential for a task.
az acr task credential remove

# Update the registry login credential for a task.
az acr task credential update

# Update the managed identity for a task.
az acr task identity assign

# Remove managed identities for a task.
az acr task identity remove

# Display the managed identities for task.
az acr task identity show

# Add a timer trigger to a task.
az acr task timer add

# List all timer triggers for a task.
az acr task timer list

# Remove a timer trigger from a task.
az acr task timer remove

# Update the timer trigger for a task.
az acr task timer update

# Delete a taskrun from an Azure Container Registry.
az acr taskrun delete

# List the taskruns for an Azure Container Registry.
az acr taskrun list

# Show run logs for a particular taskrun.
az acr taskrun logs

# Get the properties of a named taskrun for an Azure Container Registry.
az acr taskrun show

# Create a token associated with a scope map for an Azure Container Registry.
az acr token create

# Delete a token for an Azure Container Registry.
az acr token delete

# List all tokens for an Azure Container Registry.
az acr token list

# Show details and attributes of a token for an Azure Container Registry.
az acr token show

# Update a token (replace associated scope map) for an Azure Container Registry.
az acr token update

# Delete a token credential.
az acr token credential delete

# Generate or replace one or both passwords of a token for an Azure Container Registry. For using token and password to access a container registry, see https://aka.ms/acr/repo-permissions.
az acr token credential generate

# Create a webhook for an Azure Container Registry.
az acr webhook create

# Delete a webhook from an Azure Container Registry.
az acr webhook delete

# Get the service URI and custom headers for the webhook.
az acr webhook get-config

# List all of the webhooks for an Azure Container Registry.
az acr webhook list

# List recent events for a webhook.
az acr webhook list-events

# Trigger a ping event for a webhook.
az acr webhook ping

# Get the details of a webhook.
az acr webhook show

# Update a webhook.
az acr webhook update
```
