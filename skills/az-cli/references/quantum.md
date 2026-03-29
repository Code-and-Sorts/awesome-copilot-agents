# az quantum

```bash
# Submit a job to run on Azure Quantum, and wait for the result. Equivalent to `az quantum run`.
az quantum execute

# Submit a job to run on Azure Quantum, and wait for the result. Equivalent to `az quantum execute`.
az quantum run

# Request to cancel a job on Azure Quantum if it hasn't completed.
az quantum job cancel

# Get the list of jobs in a Quantum Workspace.
az quantum job list

# Get the results of running a job.
az quantum job output

# Get the job's status and details.
az quantum job show

# Submit a program or circuit to run on Azure Quantum.
az quantum job submit

# Place the CLI in a waiting state until the job finishes running.
az quantum job wait

# Accept the terms of a provider and SKU combination to enable it for workspace creation.
az quantum offerings accept-terms

# Get the list of all provider offerings available on the given location.
az quantum offerings list

# Show the terms of a provider and SKU combination including license URL and acceptance status.
az quantum offerings show-terms

# Clear the default target-id.
az quantum target clear

# Get the list of providers and their targets in an Azure Quantum workspace.
az quantum target list

# Select the default target to use when submitting jobs to Azure Quantum.
az quantum target set

# Get the Target ID of the current default target to use when submitting jobs to Azure Quantum.
az quantum target show

# Clear the default Azure Quantum workspace.
az quantum workspace clear

# Create a new Azure Quantum workspace.
az quantum workspace create

# Delete the given (or current) Azure Quantum workspace.
az quantum workspace delete

# Get the list of Azure Quantum workspaces available.
az quantum workspace list

# List the quotas for the given (or current) Azure Quantum workspace.
az quantum workspace quotas

# Select a default Azure Quantum workspace for future commands.
az quantum workspace set

# Get the details of the given (or current) Azure Quantum workspace.
az quantum workspace show

# Update the given (or current) Azure Quantum workspace.
az quantum workspace update

# List api keys for the given (or current) Azure Quantum workspace.
az quantum workspace keys list

# Regenerate api key for the given (or current) Azure Quantum workspace.
az quantum workspace keys regenerate
```
