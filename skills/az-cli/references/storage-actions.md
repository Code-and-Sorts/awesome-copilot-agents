# az storage-actions

```bash
# Create a new storage task resource with the specified parameters. If a storage task is already created and a subsequent create request is issued with different properties, the storage task properties will be updated. If a storage task is already created and a subsequent create request is issued with the exact same set of properties, the request will succeed.
az storage-actions task create

# Delete the storage task resource.
az storage-actions task delete

# List all the storage tasks available under the subscription.
az storage-actions task list

# List all the storage task assignments available under the given resource group.
az storage-actions task list-assignment

# List the storage tasks run report summary for each assignment.
az storage-actions task list-report

# Runs the input conditions against input object metadata properties and designates matched objects in response.
az storage-actions task preview-action

# Get the storage task properties.
az storage-actions task show

# Update a storage task resource with the specified parameters. If a storage task is already created and a subsequent update request is issued with different properties, the storage task properties will be updated. If a storage task is already created and a subsequent update request is issued with the exact same set of properties, the request will succeed.
az storage-actions task update

# Place the CLI in a waiting state until a condition is met.
az storage-actions task wait
```
