# az batch

```bash
# Create a Batch account with the specified parameters.
az batch account create

# Deletes the specified Batch account.
az batch account delete

# List the Batch accounts associated with a subscription or resource group.
az batch account list

# Log in to a Batch account through Azure Active Directory or Shared Key authentication.
az batch account login

# List an account's outbound network dependencies.
az batch account outbound-endpoints

# Update properties for a Batch account.
az batch account set

# Get a specified Batch account or the currently set account.
az batch account show

# Synchronizes access keys for the auto-storage account configured for the specified Batch account, only if storage key authentication is being used.
az batch account autostorage-keys sync

# Add managed identities to an existing batch account.
az batch account identity assign

# Remove managed identities from an existing batch account.
az batch account identity remove

# Display managed identities of a batch account.
az batch account identity show

# Gets the account keys for the specified Batch account. This operation applies only to Batch accounts with allowedAuthenticationModes containing 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode, clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes instead. In this case, getting the keys will fail.
az batch account keys list

# Renew keys for a Batch account.
az batch account keys renew

# Set the Network profile for Batch account.
az batch account network-profile set

# Get information about the Network profile for Batch account.
az batch account network-profile show

# Add a Network rule from a Network Profile.
az batch account network-profile network-rule add

# Delete a Network rule from a Network Profile.
az batch account network-profile network-rule delete

# List the Network rules from a Network Profile.
az batch account network-profile network-rule list

# Adds an application to the specified Batch account.
az batch application create

# Deletes an application.
az batch application delete

# Lists all of the applications in the specified account.
az batch application list

# Update properties for a Batch application.
az batch application set

# Gets information about the specified application.
az batch application show

# Activates a Batch application package.
az batch application package activate

# Create a Batch application package record and activate it.
az batch application package create

# Deletes an application package record and its associated binary file.
az batch application package delete

# Lists all of the application packages in the specified application.
az batch application package list

# Gets information about the specified application package.
az batch application package show

# Lists all of the applications available in the specified account.
az batch application summary list

# Gets information about the specified application.
az batch application summary show

# Add a Batch job schedule to an account.
az batch job-schedule create

# Deletes a Job Schedule from the specified Account.
az batch job-schedule delete

# Disables a Job Schedule.
az batch job-schedule disable

# Enables a Job Schedule.
az batch job-schedule enable

# Lists all of the Job Schedules in the specified Account.
az batch job-schedule list

# Reset the properties of a job schedule.  An updated job specification only applies to new jobs.
az batch job-schedule reset

# Update the properties of a job schedule.
az batch job-schedule set

# Gets information about the specified Job Schedule.
az batch job-schedule show

# Terminates a Job Schedule.
az batch job-schedule stop

# Add a job to a Batch account.
az batch job create

# Deletes a job from a Batch account.
az batch job delete

# Disable a Batch job.
az batch job disable

# Enable a Batch job.
az batch job enable

# List all of the jobs or job schedule in a Batch account.
az batch job list

# Update the properties of a Batch job. Unspecified properties which can be updated are reset to their defaults.
az batch job reset

# Update the properties of a Batch job. Updating a property in a subgroup will reset the unspecified properties of that group.
az batch job set

# Gets information about the specified Batch job.
az batch job show

# Stop a running Batch job.
az batch job stop

# Lists the execution status of the Job Preparation and Job Release Task for the specified Job across the Compute Nodes where the Job has run.
az batch job prep-release-status list

# Gets the Task counts for the specified Job.
az batch job task-counts show

# List virtual machine SKUs available in a location.
az batch location list-skus

# Gets the Batch service quotas for the specified subscription at the given location.
az batch location quotas show

# Removes Compute Nodes from the specified Pool.
az batch node delete

# Lists the Compute Nodes in the specified Pool.
az batch node list

# Reboot a Batch compute node.
az batch node reboot

# Gets information about the specified Compute Node.
az batch node show

# Deletes the specified file from the Compute Node.
az batch node file delete

# Download the content of the a node file.
az batch node file download

# Lists all of the files in Task directories on the specified Compute Node.
az batch node file list

# Gets the properties of the specified Compute Node file.
az batch node file show

# Gets the settings required for remote login to a Compute Node.
az batch node remote-login-settings show

# Disable scheduling on a Batch compute node.
az batch node scheduling disable

# Enable scheduling on a Batch compute node.
az batch node scheduling enable

# Upload service logs from a specified Batch compute node.
az batch node service-logs upload

# Add a user account to a Batch compute node.
az batch node user create

# Deletes a user Account from the specified Compute Node.
az batch node user delete

# Update the properties of a user account on a Batch compute node. Unspecified properties which can be updated are reset to their defaults.
az batch node user reset

# Create a Batch pool in an account. When creating a pool, choose arguments from either Cloud Services Configuration or Virtual Machine Configuration.
az batch pool create

# Deletes a Pool from the specified Account.
az batch pool delete

# Lists all of the Pools in the specified Account.
az batch pool list

# Update the properties of a Batch pool. Unspecified properties which can be updated are reset to their defaults.
az batch pool reset

# Resize or stop resizing a Batch pool.
az batch pool resize

# Update the properties of a Batch pool. Updating a property in a subgroup will reset the unspecified properties of that group.
az batch pool set

# Gets information about the specified Pool.
az batch pool show

# Disables automatic scaling for a Pool.
az batch pool autoscale disable

# Enables automatic scaling for a Pool.
az batch pool autoscale enable

# Gets the result of evaluating an automatic scaling formula on the Pool.
az batch pool autoscale evaluate

# Gets the number of Compute Nodes in each state, grouped by Pool.
az batch pool node-counts list

# Lists all Virtual Machine Images supported by the Azure Batch service.
az batch pool supported-images list

# Lists the usage metrics, aggregated by Pool across individual time intervals, for the specified Account.
az batch pool usage-metrics list

# List all of the private endpoint connections in the specified account.
az batch private-endpoint-connection list

# Get information about the specified private endpoint connection.
az batch private-endpoint-connection show

# List all of the private link resources in the specified account.
az batch private-link-resource list

# Get information about the specified private link resource.
az batch private-link-resource show

# Create Batch tasks.
az batch task create

# Deletes a Task from the specified Job.
az batch task delete

# Lists all of the Tasks that are associated with the specified Job.
az batch task list

# Reactivates a Task, allowing it to run again even if its retry count has been exhausted.
az batch task reactivate

# Reset the properties of a Batch task.
az batch task reset

# Gets information about the specified Task.
az batch task show

# Terminates the specified Task.
az batch task stop

# Deletes the specified Task file from the Compute Node where the Task ran.
az batch task file delete

# Download the content of a Batch task file.
az batch task file download

# Lists the files in a Task's directory on its Compute Node.
az batch task file list

# Gets the properties of the specified Task file.
az batch task file show

# Lists all of the subtasks that are associated with the specified multi-instance Task.
az batch task subtask list
```
