# az automation

```bash
# Create automation account.
az automation account create

# Delete an automation account.
az automation account delete

# Retrieve a list of accounts within a given resource group. And Retrieve a list of accounts within a given subscription.
az automation account list

# Retrieve the automation keys for an account.
az automation account list-keys

# Get information about an Automation Account.
az automation account show

# Get the linked workspace for the account id.
az automation account show-linked-workspace

# Update an automation account.
az automation account update

# Create the configuration identified by configuration name.
az automation configuration create

# Delete the dsc configuration identified by configuration name.
az automation configuration delete

# List a list of configurations.
az automation configuration list

# Get the configuration identified by configuration name.
az automation configuration show

# Get the configuration script identified by configuration name.
az automation configuration show-content

# Update the configuration identified by configuration name.
az automation configuration update

# Create a hybrid runbook worker group.
az automation hrwg create

# Delete a hybrid runbook worker group.
az automation hrwg delete

# List all hybrid runbook worker groups.
az automation hrwg list

# Get hybrid worker group.
az automation hrwg show

# Update a hybrid runbook worker group.
az automation hrwg update

# Create a hybrid runbook worker.
az automation hrwg hrw create

# Delete a hybrid runbook worker.
az automation hrwg hrw delete

# List a list of hybrid runbook workers.
az automation hrwg hrw list

# Move a hybrid worker to a different group.
az automation hrwg hrw move

# Get a hybrid runbook worker.
az automation hrwg hrw show

# Retrieve a list of jobs.
az automation job list

# Resume the job identified by jobName.
az automation job resume

# Retrieve the job identified by job name.
az automation job show

# Stop the job identified by jobName.
az automation job stop

# Suspend the job identified by job name.
az automation job suspend

# Create or Update the python 3 package identified by package name.
az automation python3-package create

# Delete the python 3 package by name.
az automation python3-package delete

# Retrieve a list of python 3 packages.
az automation python3-package list

# Retrieve the python 3 package identified by package name.
az automation python3-package show

# Create or Update the python 3 package identified by package name.
az automation python3-package update

# Create the runbook identified by runbook name.
az automation runbook create

# Delete the runbook by name.
az automation runbook delete

# Retrieve a list of runbooks.
az automation runbook list

# Publish runbook draft.
az automation runbook publish

# Replace content of the runbook.
az automation runbook replace-content

# Revert the runbook content to last known published state.
az automation runbook revert-to-published

# Retrieve the runbook identified by runbook name.
az automation runbook show

# Start the runbook.
az automation runbook start

# Update the runbook identified by runbook name.
az automation runbook update

# Place the CLI in a waiting state until a condition of the automation runbook is met.
az automation runbook wait

# Create Runtime Environment.
az automation runtime-environment create

# Delete the Runtime Environment.
az automation runtime-environment delete

# List a list of RuntimeEnvironments.
az automation runtime-environment list

# Get information about the Runtime Environment.
az automation runtime-environment show

# Update Runtime Environment.
az automation runtime-environment update

# Create the package identified by package name.
az automation runtime-environment package create

# Delete the package by name.
az automation runtime-environment package delete

# List the a list of Packages.
az automation runtime-environment package list

# Get the Package identified by Package name.
az automation runtime-environment package show

# Update the package identified by package name.
az automation runtime-environment package update

# Create automation schedule.
az automation schedule create

# Delete an automation schedule.
az automation schedule delete

# Retrieve a list of schedules.
az automation schedule list

# Retrieve the schedule identified by schedule name.
az automation schedule show

# Update an automation schedule.
az automation schedule update

# Create automation software-update-configuration.
az automation software-update-configuration create

# Delete an automation software-update-configuration.
az automation software-update-configuration delete

# List all software-update-configurations for the account.
az automation software-update-configuration list

# Get a single software-update-configuration by name.
az automation software-update-configuration show

# List software update configuration machine-runs.
az automation software-update-configuration machine-runs list

# Get a single software update configuration machine runs by Id.
az automation software-update-configuration machine-runs show

# Return list of software update configuration runs.
az automation software-update-configuration runs list

# Get a single software update configuration runs by Id.
az automation software-update-configuration runs show

# Create a source control.
az automation source-control create

# Delete the source control.
az automation source-control delete

# List a list of source controls.
az automation source-control list

# Get the source control identified by source control name.
az automation source-control show

# Update a source control.
az automation source-control update

# Create the sync job for a source control.
az automation source-control sync-job create

# List a list of source control sync jobs.
az automation source-control sync-job list

# Get the source control sync job identified by job id.
az automation source-control sync-job show

# Update the sync job for a source control.
az automation source-control sync-job update

# List a list of sync job streams identified by sync job id.
az automation source-control sync-job stream list

# Get a sync job stream identified by stream id.
az automation source-control sync-job stream show
```
