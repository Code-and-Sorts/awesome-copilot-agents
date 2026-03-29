# az hpc-cache

```bash
# Create or update a Cache.
az hpc-cache create

# Schedule a Cache for deletion.
az hpc-cache delete

# Tell a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see errors returned until the flush is complete.
az hpc-cache flush

# Return all Caches the user has access to under a resource group.
az hpc-cache list

# Return a Cache.
az hpc-cache show

# Tell a Stopped state Cache to transition to Active state.
az hpc-cache start

# Tell an Active Cache to transition to Stopped state.
az hpc-cache stop

# Update a Cache.
az hpc-cache update

# Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect.
az hpc-cache upgrade-firmware

# Wait a hpc Cache to specified state.
az hpc-cache wait

# Create or update a blob Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again.
az hpc-cache blob-storage-target add

# Create or update a blob Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again.
az hpc-cache blob-storage-target update

# Create or update a nfs Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again.
az hpc-cache nfs-storage-target add

# Create or update a nfs Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again.
az hpc-cache nfs-storage-target update

# Get the list of StorageCache.Cache SKUs available to this subscription.
az hpc-cache skus list

# Return a list of Storage Targets for the specified Cache.
az hpc-cache storage-target list

# Remove a Storage Target from a Cache. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual removal of the Storage Target may be delayed until the Cache is healthy again. Note that if the Cache has data to flush to the Storage Target, the data will be flushed before the Storage Target will be deleted.
az hpc-cache storage-target remove

# Return a Storage Target from a Cache.
az hpc-cache storage-target show

# Get the list of Cache Usage Models available to this subscription.
az hpc-cache usage-model list
```
