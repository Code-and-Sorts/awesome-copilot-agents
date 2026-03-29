# az backup

```bash
# List containers registered to a Recovery services vault.
az backup container list

# Reset the registration details for a given container.
az backup container re-register

# Register a Resource to the given Recovery Services Vault.
az backup container register

# Show details of a container registered to a Recovery services vault.
az backup container show

# Unregister a Backup Container to make the underlying 'resource' be protected by another vault.
az backup container unregister

# Get details of a soft-deleted Recovery Services vault.
az backup deleted-vault get

# List soft-deleted Recovery Services vaults.
az backup deleted-vault list

# List backup containers in a soft-deleted vault.
az backup deleted-vault list-containers

# Restore a soft-deleted Recovery Services vault.
az backup deleted-vault undelete

# List all backed up items within a container.
az backup item list

# Update the policy associated with this item. Use this to change policies of the backup item.
az backup item set-policy

# Show details of a particular backed up item.
az backup item show

# List all backup jobs of a Recovery Services vault.
az backup job list

# Show details of a particular job.
az backup job show

# Suspend or terminate a currently running job.
az backup job stop

# Wait until either the job completes or the specified timeout value is reached.
az backup job wait

# Create a new policy for the given BackupManagementType and workloadType.
az backup policy create

# Delete a backup policy which doesn't have any associated backup items.
az backup policy delete

# Get the default policy with default values to backup a VM.
az backup policy get-default-for-vm

# List all policies for a Recovery services vault.
az backup policy list

# List all items protected by a backup policy.
az backup policy list-associated-items

# Update the existing policy with the provided details.
az backup policy set

# Show details of a particular policy.
az backup policy show

# Trigger the discovery of any unprotected items of the given workload type in the given container.
az backup protectable-item initialize

# Retrieve all protectable items within a certain container or across all registered containers.
az backup protectable-item list

# Retrieve the specified protectable item within the given container.
az backup protectable-item show

# Disable auto-protection for the specified protectable item.
az backup protection auto-disable-for-azurewl

# Automatically protect all existing unprotected DBs and any DB which will be added later with the given policy.
az backup protection auto-enable-for-azurewl

# Perform an on-demand backup of a backed up item.
az backup protection backup-now

# The command returns null/empty if the specified resource is not protected under any Recovery Services vault in the subscription. When configuring backup fails, it may return vault details. If Azure Backup is failing, then look for the corresponding error code in the Common issues section - https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-troubleshoot#common-issues. If it is protected, the relevant vault details will be returned.
az backup protection check-vm

# Stop protecting a backed up item. Can retain the backed up data forever or choose to delete it.
az backup protection disable

# Start protecting a previously unprotected Azure File share within an Azure Storage account as per the specified policy to a Recovery services vault.
az backup protection enable-for-azurefileshare

# Start protecting a previously unprotected workload within an Azure VM as per the specified policy to a Recovery services vault. Provide the workload details as a protectable item.
az backup protection enable-for-azurewl

# Start protecting a previously unprotected Azure VM as per the specified policy to a Recovery services vault.
az backup protection enable-for-vm

# Reconfigures backup protection from an old vault to a new vault.
az backup protection reconfigure

# Resume backup for the associated backup item. Use this to change the policy associated with the backup item.
az backup protection resume

# Rehydrate an item from softdeleted state to stop protection with retained data state.
az backup protection undelete

# Update disk exclusion settings associated with a backed up VM item.
az backup protection update-for-vm

# Construct the recovery configuration of an Azure workload backed up item.
az backup recoveryconfig show

# List all recovery points of a backed up item.
az backup recoverypoint list

# Move a particular recovery point of a backed up item from one tier to another tier.
az backup recoverypoint move

# Shows details of a particular recovery point.
az backup recoverypoint show

# List the start and end points of the unbroken log chain(s) of the given backup item.
az backup recoverypoint show-log-chain

# Restore backed up Azure files within a file-share to the same file-share or another file-share in registered storage accounts.
az backup restore restore-azurefiles

# Restore backed up Azure file shares to the same file-share or another file-share in registered storage accounts.
az backup restore restore-azurefileshare

# Restore backed up Azure Workloads in a Recovery services vault to another registered container or to the same container.
az backup restore restore-azurewl

# Restore disks of the backed VM from the specified recovery point.
az backup restore restore-disks

# Download a script which mounts files of a recovery point.
az backup restore files mount-rp

# Close access to the recovery point.
az backup restore files unmount-rp

# Create a new Recovery Services vault or update an existing one.
az backup vault create

# Delete an existing Recovery services vault.
az backup vault delete

# List Recovery service vaults within a subscription.
az backup vault list

# List soft-deleted containers within a particular Recovery Services vault.
az backup vault list-soft-deleted-containers

# Show details of a particular Recovery service vault.
az backup vault show

# Update an existing Recovery Services vault.
az backup vault update

# Sets backup related properties of the Recovery Services vault.
az backup vault backup-properties set

# Gets backup related properties of the Recovery Services vault.
az backup vault backup-properties show

# Show details of encryption properties of a Recovery Services Vault.
az backup vault encryption show

# Update encryption properties of a Recovery Services Vault.
az backup vault encryption update

# Assign Identities to Recovery Services vault.
az backup vault identity assign

# Remove Identities of Recovery Services vault.
az backup vault identity remove

# Show Identities of Recovery Services vault.
az backup vault identity show

# Delete resource guard mapping of the Recovery Services vault.
az backup vault resource-guard-mapping delete

# Get resource guard mapping of the Recovery Services vault.
az backup vault resource-guard-mapping show

# Create/Update resource guard mapping of the Recovery Services vault.
az backup vault resource-guard-mapping update
```
