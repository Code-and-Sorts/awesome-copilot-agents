# az quota

```bash
# Create the quota limit for the specified resource.
az quota create

# List current quota limits of all resources for the specified scope.
az quota list

# Show the quota limit of a resource.
az quota show

# Update the quota limit for a specific resource.
az quota update

# List all the operations supported by the Microsoft.Quota resource provider.
az quota operation list

# List the specified scope, get the current quota requests for a one year period ending at the time is made. Use the **oData** filter to select quota requests.
az quota request list

# Show the quota request details and status by quota request ID for the resources of the resource provider at a specific location.
az quota request show

# For the specified scope, get the current quota requests for a one year period ending at the time is made. Use the **oData** filter to select quota requests.
az quota request status list

# Get the quota request details and status by quota request ID for the resources of the resource provider at a specific location. The quota request ID **id** is returned in the response of the PUT operation.
az quota request status show

# List current usage for all resources for the scope specified.
az quota usage list

# Show the current usage of a resource.
az quota usage show
```
