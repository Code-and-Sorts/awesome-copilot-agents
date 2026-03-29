# az storage

```bash
# Copy files or directories to or from Azure storage.
az storage copy

# Delete blobs or files from Azure Storage.
az storage remove

# Check that the storage account name is valid and is not already in use.
az storage account check-name

# Create a storage account.
az storage account create

# Delete a storage account.
az storage account delete

# Failover request can be triggered for a storage account in case of availability issues.
az storage account failover

# Get the usage of file service in storage account including account limits, file share limits and constants used in recommendations and bursting formula.
az storage account file-service-usage

# Generate a shared access signature for the storage account.
az storage account generate-sas

# List storage accounts.
az storage account list

# Revoke all user delegation keys for a storage account.
az storage account revoke-delegation-keys

# Show storage account properties.
az storage account show

# Get the connection string for a storage account.
az storage account show-connection-string

# Show the current count and limit of the storage accounts under the subscription.
az storage account show-usage

# Update the properties of a storage account.
az storage account update

# Create Blob Inventory Policy for storage account.
az storage account blob-inventory-policy create

# Delete Blob Inventory Policy associated with the specified storage account.
az storage account blob-inventory-policy delete

# Show Blob Inventory Policy properties associated with the specified storage account.
az storage account blob-inventory-policy show

# Update Blob Inventory Policy associated with the specified storage account.
az storage account blob-inventory-policy update

# Show the properties of a storage account's blob service.
az storage account blob-service-properties show

# Update the properties of a storage account's blob service.
az storage account blob-service-properties update

# Add a CORS rule for a storage account.
az storage account blob-service-properties cors-rule add

# Clear all CORS rules for a storage account.
az storage account blob-service-properties cors-rule clear

# List all CORS rules of a storage account's blob service properties.
az storage account blob-service-properties cors-rule list

# Create an encryption scope within storage account.
az storage account encryption-scope create

# List encryption scopes within storage account.
az storage account encryption-scope list

# Show properties for specified encryption scope within storage account.
az storage account encryption-scope show

# Update properties for specified encryption scope within storage account.
az storage account encryption-scope update

# Show the properties of file service in storage account.
az storage account file-service-properties show

# Update the properties of file service in storage account.
az storage account file-service-properties update

# Validate/Begin migrating a storage account to enable hierarchical namespace.
az storage account hns-migration start

# Stop the enabling hierarchical namespace migration of a storage account.
az storage account hns-migration stop

# List the access keys or Kerberos keys (if active directory enabled) for a storage account.
az storage account keys list

# Regenerate one of the access keys or Kerberos keys (if active directory enabled) for a storage account.
az storage account keys renew

# Create a local user for a given storage account.
az storage account local-user create

# Delete a local user.
az storage account local-user delete

# List local users for a storage account.
az storage account local-user list

# List sharedkeys and sshAuthorizedKeys for a local user.
az storage account local-user list-keys

# Regenerate sshPassword for a local user.
az storage account local-user regenerate-password

# Show info for a local user.
az storage account local-user show

# Update properties for a local user.
az storage account local-user update

# Create the data policy rules associated with the specified storage account.
az storage account management-policy create

# Delete the data policy rules associated with the specified storage account.
az storage account management-policy delete

# Get the data policy rules associated with the specified storage account.
az storage account management-policy show

# Update the data policy rules associated with the specified storage account.
az storage account management-policy update

# Get the status of the ongoing migration for the specified storage account.
az storage account migration show

# Account Migration request can be triggered for a storage account to change its redundancy level. The migration updates the non-zonal redundant storage account to a zonal redundant account or vice-versa in order to have better reliability and availability. Zone-redundant storage (ZRS) replicates your storage account synchronously across three Azure availability zones in the primary region.
az storage account migration start

# Add a network rule.
az storage account network-rule add

# List network rules.
az storage account network-rule list

# Remove a network rule.
az storage account network-rule remove

# List list of effective NetworkSecurityPerimeterConfiguration for storage account.
az storage account network-security-perimeter-configuration list

# Refreshes any information about the association.
az storage account network-security-perimeter-configuration reconcile

# Get effective NetworkSecurityPerimeterConfiguration for association.
az storage account network-security-perimeter-configuration show

# Create Object Replication Service Policy for storage account.
az storage account or-policy create

# Delete specified Object Replication Service Policy associated with the specified storage account.
az storage account or-policy delete

# List Object Replication Service Policies associated with the specified storage account.
az storage account or-policy list

# Show the properties of specified Object Replication Service Policy for storage account.
az storage account or-policy show

# Update Object Replication Service Policy properties for storage account.
az storage account or-policy update

# Add rule to the specified Object Replication Service Policy.
az storage account or-policy rule add

# List all the rules in the specified Object Replication Service Policy.
az storage account or-policy rule list

# Remove the specified rule from the specified Object Replication Service Policy.
az storage account or-policy rule remove

# Show the properties of specified rule in Object Replication Service Policy.
az storage account or-policy rule show

# Update rule properties to Object Replication Service Policy.
az storage account or-policy rule update

# Approve a private endpoint connection request for storage account.
az storage account private-endpoint-connection approve

# Delete a private endpoint connection request for storage account.
az storage account private-endpoint-connection delete

# Reject a private endpoint connection request for storage account.
az storage account private-endpoint-connection reject

# Show details of a private endpoint connection request for storage account.
az storage account private-endpoint-connection show

# Get the private link resources that need to be created for a storage account.
az storage account private-link-resource list

# Create a new storage task assignment sub-resource with the specified parameters. If a storage task assignment is already created and a subsequent create request is issued with different properties, the storage task assignment properties will be updated. If a storage task assignment is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
az storage account task-assignment create

# Delete the storage task assignment sub-resource.
az storage account task-assignment delete

# List all the storage task assignments in an account.
az storage account task-assignment list

# List the report summary of a single storage task assignment's instances.
az storage account task-assignment list-report

# Get the storage task assignment properties.
az storage account task-assignment show

# Update a new storage task assignment sub-resource with the specified parameters. If a storage task assignment is already created and a subsequent create request is issued with different properties, the storage task assignment properties will be updated. If a storage task assignment is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
az storage account task-assignment update

# Place the CLI in a waiting state until a condition is met.
az storage account task-assignment wait

# Run a command directly using the AzCopy CLI. Please use SAS tokens for authentication.
az storage azcopy run-command

# Delete blobs from a storage blob container using AzCopy.
az storage azcopy blob delete

# Download blobs from a storage blob container using AzCopy.
az storage azcopy blob download

# Sync blobs recursively to a storage blob container using AzCopy.
az storage azcopy blob sync

# Upload blobs to a storage blob container using AzCopy.
az storage azcopy blob upload

# Mark a blob or snapshot for deletion.
az storage blob delete

# Delete blobs from a blob container recursively.
az storage blob delete-batch

# Download a blob to a file path.
az storage blob download

# Download blobs from a blob container recursively.
az storage blob download-batch

# Check for the existence of a blob in a container.
az storage blob exists

# List blobs across all containers whose tags match a given search expression.
az storage blob filter

# Generate a shared access signature for the blob.
az storage blob generate-sas

# List blobs in a given container.
az storage blob list

# Enable users to select/project on blob or blob snapshot data by providing simple query expressions.
az storage blob query

# Restore blobs in the specified blob ranges.
az storage blob restore

# Create a new Block Blob where the content of the blob is read from a given URL.
az storage blob rewrite

# Set blob legal hold.
az storage blob set-legal-hold

# Set the block or page tiers on the blob.
az storage blob set-tier

# Get the details of a blob.
az storage blob show

# Creates a snapshot of the blob.
az storage blob snapshot

# Sync blobs recursively to a storage blob container.
az storage blob sync

# Restore soft deleted blob or snapshot.
az storage blob undelete

# Sets system properties on the blob.
az storage blob update

# Upload a file to a storage blob.
az storage blob upload

# Upload files from a local directory to a blob container.
az storage blob upload-batch

# Create the url to access a blob.
az storage blob url

# Abort an ongoing copy operation.
az storage blob copy cancel

# Copy a blob asynchronously. Use `az storage blob show` to check the status of the blobs.
az storage blob copy start

# Copy multiple blobs to a blob container. Use `az storage blob show` to check the status of the blobs.
az storage blob copy start-batch

# Delete blob's immutability policy.
az storage blob immutability-policy delete

# Set blob's immutability policy.
az storage blob immutability-policy set

# Aborts a pending copy_blob operation, and leaves a destination blob with zero length and full metadata.
az storage blob incremental-copy cancel

# Copies an incremental copy of a blob asynchronously.
az storage blob incremental-copy start

# Request a new lease.
az storage blob lease acquire

# Break the lease, if the container or blob has an active lease.
az storage blob lease break

# Change the lease ID of an active lease.
az storage blob lease change

# Release the lease.
az storage blob lease release

# Renew the lease.
az storage blob lease renew

# Return all user-defined metadata for the specified blob or snapshot.
az storage blob metadata show

# Sets user-defined metadata for the blob as one or more name-value pairs.
az storage blob metadata update

# Gets the properties of a storage account's Blob service, including Azure Storage Analytics.
az storage blob service-properties show

# Update storage blob service properties.
az storage blob service-properties update

# Show the storage blob delete-policy.
az storage blob service-properties delete-policy show

# Update the storage blob delete-policy.
az storage blob service-properties delete-policy update

# Get tags on a blob or specific blob version, or snapshot.
az storage blob tag list

# Set tags on a blob or specific blob version, but not snapshot.
az storage blob tag set

# Create a new container under the specified storage account.
az storage container-rm create

# Delete the specified container under its account.
az storage container-rm delete

# Check for the existence of a container.
az storage container-rm exists

# List all containers under the specified storage account.
az storage container-rm list

# Migrate a blob container from container level WORM to object level immutability enabled container.
az storage container-rm migrate-vlw

# Show the properties for a specified container.
az storage container-rm show

# Update the properties for a container.
az storage container-rm update

# Create a container in a storage account.
az storage container create

# Mark the specified container for deletion.
az storage container delete

# Check for the existence of a storage container.
az storage container exists

# Generate a SAS token for a storage container.
az storage container generate-sas

# List containers in a storage account.
az storage container list

# Restore soft-deleted container.
az storage container restore

# Set the permissions for the specified container.
az storage container set-permission

# Return all user-defined metadata and system properties for the specified container.
az storage container show

# Get the permissions for the specified container.
az storage container show-permission

# Create or update an unlocked immutability policy.
az storage container immutability-policy create

# Aborts an unlocked immutability policy.
az storage container immutability-policy delete

# Extend the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy.
az storage container immutability-policy extend

# Sets the ImmutabilityPolicy to Locked state.
az storage container immutability-policy lock

# Gets the existing immutability policy along with the corresponding ETag in response headers and body.
az storage container immutability-policy show

# Request a new lease.
az storage container lease acquire

# Break the lease, if the container has an active lease.
az storage container lease break

# Change the lease ID of an active lease.
az storage container lease change

# Release the lease.
az storage container lease release

# Renew the lease.
az storage container lease renew

# Clear legal hold tags.
az storage container legal-hold clear

# Set legal hold tags.
az storage container legal-hold set

# Get the legal hold properties of a container.
az storage container legal-hold show

# Return all user-defined metadata for the specified container.
az storage container metadata show

# Set one or more user-defined name-value pairs for the specified container.
az storage container metadata update

# Create a stored access policy on the containing object.
az storage container policy create

# Delete a stored access policy on a containing object.
az storage container policy delete

# List stored access policies on a containing object.
az storage container policy list

# Show a stored access policy on a containing object.
az storage container policy show

# Set a stored access policy on a containing object.
az storage container policy update

# Add a CORS rule to a storage account.
az storage cors add

# Remove all CORS rules from a storage account.
az storage cors clear

# List all CORS rules for a storage account.
az storage cors list

# Create a new directory under the specified share or parent directory.
az storage directory create

# Delete the specified empty directory.
az storage directory delete

# Check for the existence of a storage directory.
az storage directory exists

# List directories in a share.
az storage directory list

# Get all user-defined metadata and system properties for the specified directory.
az storage directory show

# Get all user-defined metadata for the specified directory.
az storage directory metadata show

# Set one or more user-defined name-value pairs for the specified directory.
az storage directory metadata update

# Delete an existing entity in a table.
az storage entity delete

# Insert an entity into a table.
az storage entity insert

# Update an existing entity by merging the entity's properties.
az storage entity merge

# List entities which satisfy a query.
az storage entity query

# Update an existing entity in a table.
az storage entity replace

# Get a single entity in a table.
az storage entity show

# Mark the specified file for deletion.
az storage file delete

# Delete files from an Azure Storage File Share.
az storage file delete-batch

# Download a file to a file path, with automatic chunking and progress notifications.
az storage file download

# Download files from an Azure Storage File Share to a local directory in a batch operation.
az storage file download-batch

# Check for the existence of a file.
az storage file exists

# Generate a shared access signature for the file.
az storage file generate-sas

# List files and directories in a share.
az storage file list

# Resize a file to the specified size.
az storage file resize

# Return all user-defined metadata, standard HTTP properties, and system properties for the file.
az storage file show

# Set system properties on the file.
az storage file update

# Upload a file to a share.
az storage file upload

# Upload files from a local directory to an Azure Storage File Share in a batch operation.
az storage file upload-batch

# Create the url to access a file.
az storage file url

# Abort an ongoing copy operation.
az storage file copy cancel

# Copy a file asynchronously.
az storage file copy start

# Copy multiple files or blobs to a file share.
az storage file copy start-batch

# NFS only. Create a hard link to the file specified by path.
az storage file hard-link create

# Return all user-defined metadata for the file.
az storage file metadata show

# Update file metadata.
az storage file metadata update

# NFS only. Creates a symbolic link to the specified file.
az storage file symbolic-link create

# NFS only. Gets the symbolic link for the file client.
az storage file symbolic-link show

# Create file system for Azure Data Lake Storage Gen2 account.
az storage fs create

# Delete a file system in ADLS Gen2 account.
az storage fs delete

# Check for the existence of a file system in ADLS Gen2 account.
az storage fs exists

# Generate a SAS token for file system in ADLS Gen2 account.
az storage fs generate-sas

# List file systems in ADLS Gen2 account.
az storage fs list

# List the deleted (file or directory) paths under the specified file system.
az storage fs list-deleted-path

# Show properties of file system in ADLS Gen2 account.
az storage fs show

# Restore soft-deleted path.
az storage fs undelete-path

# Remove the Access Control on a path and sub-paths in Azure Data Lake Storage Gen2 account.
az storage fs access remove-recursive

# Set the access control properties of a path(directory or file) in Azure Data Lake Storage Gen2 account.
az storage fs access set

# Set the Access Control on a path and sub-paths in Azure Data Lake Storage Gen2 account.
az storage fs access set-recursive

# Show the access control properties of a path (directory or file) in Azure Data Lake Storage Gen2 account.
az storage fs access show

# Modify the Access Control on a path and sub-paths in Azure Data Lake Storage Gen2 account.
az storage fs access update-recursive

# Create a directory in ADLS Gen2 file system.
az storage fs directory create

# Delete a directory in ADLS Gen2 file system.
az storage fs directory delete

# Download files from the directory in ADLS Gen2 file system to a local file path.
az storage fs directory download

# Check for the existence of a directory in ADLS Gen2 file system.
az storage fs directory exists

# Generate a SAS token for directory in ADLS Gen2 account.
az storage fs directory generate-sas

# List directories in ADLS Gen2 file system.
az storage fs directory list

# Move a directory in ADLS Gen2 file system.
az storage fs directory move

# Show properties of a directory in ADLS Gen2 file system.
az storage fs directory show

# Upload files or subdirectories to a directory in ADLS Gen2 file system.
az storage fs directory upload

# Return all user-defined metadata for the specified directory.
az storage fs directory metadata show

# Sets one or more user-defined name-value pairs for the specified file system.
az storage fs directory metadata update

# Append content to a file in ADLS Gen2 file system.
az storage fs file append

# Create a new file in ADLS Gen2 file system.
az storage fs file create

# Delete a file in ADLS Gen2 file system.
az storage fs file delete

# Download a file from the specified path in ADLS Gen2 file system.
az storage fs file download

# Check for the existence of a file in ADLS Gen2 file system.
az storage fs file exists

# Generate a SAS token for file in ADLS Gen2 account.
az storage fs file generate-sas

# List files and directories in ADLS Gen2 file system.
az storage fs file list

# Move a file in ADLS Gen2 Account.
az storage fs file move

# Sets the time a file will expire and be deleted.
az storage fs file set-expiry

# Show properties of file in ADLS Gen2 file system.
az storage fs file show

# Upload a file to a file path in ADLS Gen2 file system.
az storage fs file upload

# Return all user-defined metadata for the specified file.
az storage fs file metadata show

# Sets one or more user-defined name-value pairs for the specified file system.
az storage fs file metadata update

# Return all user-defined metadata for the specified file system.
az storage fs metadata show

# Sets one or more user-defined name-value pairs for the specified file system.
az storage fs metadata update

# Show the properties of a storage account's datalake service, including Azure Storage Analytics.
az storage fs service-properties show

# Update the properties of a storage account's datalake service, including Azure Storage Analytics.
az storage fs service-properties update

# Turn off logging for a storage account.
az storage logging off

# Show logging settings for a storage account.
az storage logging show

# Update logging settings for a storage account.
az storage logging update

# Delete all messages from the specified queue.
az storage message clear

# Delete the specified message.
az storage message delete

# Retrieve one or more messages from the front of the queue.
az storage message get

# Retrieve one or more messages from the front of the queue, but do not alter the visibility of the message.
az storage message peek

# Add a new message to the back of the message queue.
az storage message put

# Update the visibility timeout of a message.
az storage message update

# Show metrics settings for a storage account.
az storage metrics show

# Update metrics settings for a storage account.
az storage metrics update

# Create a queue under the given account.
az storage queue create

# Delete the specified queue and any messages it contains.
az storage queue delete

# Return a boolean indicating whether the queue exists.
az storage queue exists

# Generate a shared access signature for the queue.Use the returned signature with the sas_token parameter of QueueService.
az storage queue generate-sas

# List queues in a storage account.
az storage queue list

# Retrieve statistics related to replication for the Queue service. It is only available when read-access geo-redundant replication is enabled for the storage account.
az storage queue stats

# Return all user-defined metadata for the specified queue.
az storage queue metadata show

# Set user-defined metadata on the specified queue.
az storage queue metadata update

# Create a stored access policy on the containing object.
az storage queue policy create

# Delete a stored access policy on a containing object.
az storage queue policy delete

# List stored access policies on a containing object.
az storage queue policy list

# Show a stored access policy on a containing object.
az storage queue policy show

# Set a stored access policy on a containing object.
az storage queue policy update

# Create a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
az storage share-rm create

# Delete the specified Azure file share or share snapshot.
az storage share-rm delete

# Check for the existence of an Azure file share.
az storage share-rm exists

# List all shares.
az storage share-rm list

# Restore a file share within a valid retention days if share soft delete is enabled.
az storage share-rm restore

# Show the properties for a specified Azure file share or share snapshot.
az storage share-rm show

# Create a snapshot of an existing share under the specified account.
az storage share-rm snapshot

# Get the usage bytes of the data stored on the share.
az storage share-rm stats

# Update a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
az storage share-rm update

# Close file handles of a file share.
az storage share close-handle

# Creates a new share under the specified account.
az storage share create

# Mark the specified share for deletion.
az storage share delete

# Check for the existence of a file share.
az storage share exists

# Generate a shared access signature for the share.
az storage share generate-sas

# List the file shares in a storage account.
az storage share list

# List file handles of a file share.
az storage share list-handle

# Return all user-defined metadata and system properties for the specified share.
az storage share show

# Create a snapshot of an existing share under the specified account.
az storage share snapshot

# Get the approximate size of the data stored on the share, rounded up to the nearest gigabyte.
az storage share stats

# Set service-defined properties for the specified share.
az storage share update

# Create a URI to access a file share.
az storage share url

# Return all user-defined metadata for the specified share.
az storage share metadata show

# Set one or more user-defined name-value pairs for the specified share.
az storage share metadata update

# Create a stored access policy on the containing object.
az storage share policy create

# Delete a stored access policy on a containing object.
az storage share policy delete

# List stored access policies on a containing object.
az storage share policy list

# Show a stored access policy on a containing object.
az storage share policy show

# Set a stored access policy on a containing object.
az storage share policy update

# List the available SKUs supported by Microsoft.Storage for given subscription.
az storage sku list

# Create a new table in the storage account.
az storage table create

# Delete the specified table and any data it contains.
az storage table delete

# Return a boolean indicating whether the table exists.
az storage table exists

# Generate a shared access signature for the table.
az storage table generate-sas

# List tables in a storage account.
az storage table list

# Retrieves statistics related to replication for the Table service.
az storage table stats

# Create a stored access policy on the containing object.
az storage table policy create

# Delete a stored access policy on a containing object.
az storage table policy delete

# List stored access policies on a containing object.
az storage table policy list

# Show a stored access policy on a containing object.
az storage table policy show

# Set a stored access policy on a containing object.
az storage table policy update
```
