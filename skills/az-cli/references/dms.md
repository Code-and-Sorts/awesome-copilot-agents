# az dms

```bash
# Check if a given DMS instance name is available in a given region as well as the name's validity.
az dms check-name

# Perform a health check and return the status of the service and virtual machine size.
az dms check-status

# Create an instance of the Azure Database Migration Service (classic).
az dms create

# Delete an instance of the Azure Database Migration Service (classic).
az dms delete

# List the DMS instances within your currently configured subscription (to set this use "az account set"). If provided, only show the instances within a given resource group.
az dms list

# List the SKUs that are supported by the Azure Database Migration Service (classic).
az dms list-skus

# Show the details for an instance of the Azure Database Migration Service (classic).
az dms show

# Start an instance of the Azure Database Migration Service (classic). It can then be used to run data migrations.
az dms start

# Stop an instance of the Azure Database Migration Service (classic). While stopped, it can't be used to run data migrations and the owner won't be billed.
az dms stop

# Place the CLI in a waiting state until a condition of the DMS instance is met.
az dms wait

# Check if a given project name is available within a given instance of DMS as well as the name's validity.
az dms project check-name

# Create a migration project which can contain multiple tasks.
az dms project create

# Delete a project.
az dms project delete

# List the projects within an instance of DMS.
az dms project list

# Show the details of a migration project.
az dms project show

# Cancel a task if it's currently queued or running.
az dms project task cancel

# Check if a given task name is available within a given instance of DMS as well as the name's validity.
az dms project task check-name

# Create and start a migration task.
az dms project task create

# For an online migration task, complete the migration by performing a cutover.
az dms project task cutover

# Delete a migration task.
az dms project task delete

# List the tasks within a project. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.
az dms project task list

# Restart either the entire migration or just a specified object. Currently only supported by MongoDB migrations.
az dms project task restart

# Show the details of a migration task. Use the "--expand" to get more details.
az dms project task show

# Stops the task, or stops migration on the specified object (MongoDB migrations only).
az dms project task stop
```
