# az import-export

```bash
# Creates a new job or updates an existing job in the specified subscription.
az import-export create

# Deletes an existing job. Only jobs in the Creating or Completed states can be deleted.
az import-export delete

# Returns all active and completed jobs in a subscription.
az import-export list

# Gets information about an existing job.
az import-export show

# Updates specific properties of a job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job.
az import-export update

# Returns the BitLocker Keys for all drives in the specified job.
az import-export bit-locker-key list

# Returns a list of locations to which you can ship the disks associated with an import or export job. A location is a Microsoft data center region.
az import-export location list

# Returns the details about a location to which you can ship the disks associated with an import or export job. A location is an Azure region.
az import-export location show
```
