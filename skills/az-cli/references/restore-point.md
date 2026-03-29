# az restore-point

```bash
# Create the restore point. Updating properties of an existing restore point is not allowed.
az restore-point create

# Delete the restore point.
az restore-point delete

# Get the restore point.
az restore-point show

# Place the CLI in a waiting state until a condition of the restore-point is met.
az restore-point wait

# Create operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified.
az restore-point collection create

# Delete the restore point collection. This operation will also delete all the contained restore points.
az restore-point collection delete

# Get the list of restore point collections in a resource group.
az restore-point collection list

# Get the list of restore point collections in the subscription. Use nextLink property in the response to get the next page of restore point collections. Do this till nextLink is not null to fetch all the restore point collections.
az restore-point collection list-all

# Get the restore point collection.
az restore-point collection show

# Update the restore point collection.
az restore-point collection update

# Place the CLI in a waiting state until a condition is met.
az restore-point collection wait
```
