# az storage-mover

```bash
# Creates a top-level Storage Mover resource.
az storage-mover create

# Deletes a Storage Mover resource.
az storage-mover delete

# Lists all Storage Movers in a subscription.
az storage-mover list

# Gets a Storage Mover resource.
az storage-mover show

# Update a top-level Storage Mover resource.
az storage-mover update

# Place the CLI in a waiting state until a condition is met.
az storage-mover wait

# Lists all Agents in a Storage Mover.
az storage-mover agent list

# Gets an Agent resource.
az storage-mover agent show

# Unregisters an Agent resource.
az storage-mover agent unregister

# Update an Agent resource, which references a hybrid compute machine that can run jobs.
az storage-mover agent update

# Place the CLI in a waiting state until a condition is met.
az storage-mover agent wait

# Creates an Endpoint resource for multi cloud connector.
az storage-mover endpoint create-for-multi-cloud-connector

# Creates an Endpoint resource for nfs.
az storage-mover endpoint create-for-nfs

# Creates an Endpoint resource for smb mount.
az storage-mover endpoint create-for-smb

# Creates an Endpoint resource for storage blob container.
az storage-mover endpoint create-for-storage-container

# Creates an Endpoint resource for storage nfs file share.
az storage-mover endpoint create-for-storage-nfs-file-share

# Creates an Endpoint resource for storage smb file share.
az storage-mover endpoint create-for-storage-smb-file-share

# Deletes an Endpoint resource.
az storage-mover endpoint delete

# Lists all Endpoints in a Storage Mover.
az storage-mover endpoint list

# Gets an Endpoint resource.
az storage-mover endpoint show

# Updates an Endpoint resource for multi cloud connector.
az storage-mover endpoint update-for-multi-cloud-connector

# Updates an Endpoint resource for nfs.
az storage-mover endpoint update-for-nfs

# Updates an Endpoint resource for smb mount.
az storage-mover endpoint update-for-smb

# Updates an Endpoint resource for storage blob container.
az storage-mover endpoint update-for-storage-container

# Updates an Endpoint resource for storage nfs file share.
az storage-mover endpoint update-for-storage-nfs-file-share

# Updates an Endpoint resource for storage smb file share.
az storage-mover endpoint update-for-storage-smb-file-share

# Place the CLI in a waiting state until a condition is met.
az storage-mover endpoint wait

# Assign the user or system managed identities.
az storage-mover endpoint identity assign

# Remove the user or system managed identities.
az storage-mover endpoint identity remove

# Show the details of managed identities.
az storage-mover endpoint identity show

# Creates a Job Definition resource, which contains configuration for a single unit of managed data transfer.
az storage-mover job-definition create

# Deletes a Job Definition resource.
az storage-mover job-definition delete

# Lists all Job Definitions in a Project.
az storage-mover job-definition list

# Gets a Job Definition resource.
az storage-mover job-definition show

# Requests an Agent to start a new instance of this Job Definition, generating a new Job Run resource.
az storage-mover job-definition start-job

# Requests the Agent of any active instance of this Job Definition to stop.
az storage-mover job-definition stop-job

# Update a Job Definition resource, which contains configuration for a single unit of managed data transfer.
az storage-mover job-definition update

# Place the CLI in a waiting state until a condition is met.
az storage-mover job-definition wait

# Lists all Job Runs in a Job Definition.
az storage-mover job-run list

# Gets a Job Run resource.
az storage-mover job-run show

# Creates a Project resource, which is a logical grouping of related jobs.
az storage-mover project create

# Deletes a Project resource.
az storage-mover project delete

# Lists all Projects in a Storage Mover.
az storage-mover project list

# Gets a Project resource.
az storage-mover project show

# Update a Project resource, which is a logical grouping of related jobs.
az storage-mover project update

# Place the CLI in a waiting state until a condition is met.
az storage-mover project wait
```
