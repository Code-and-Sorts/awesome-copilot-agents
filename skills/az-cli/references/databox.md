# az databox

```bash
# This method provides the list of available skus for the given subscription, resource group and location.
az databox available-skus

# CancelJob.
az databox job cancel

# Create a new job with the specified parameters.
az databox job create

# Delete a job.
az databox job delete

# List all the jobs available under the subscription.
az databox job list

# This method gets the unencrypted secrets related to the job.
az databox job list-credential

# Request to mark devices for a given job as shipped.
az databox job mark-devices-shipped

# Request to mitigate for a given job.
az databox job mitigate

# Get information about the specified job.
az databox job show

# Update the properties of an existing job.
az databox job update
```
