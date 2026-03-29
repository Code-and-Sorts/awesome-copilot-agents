# az dataprotection

```bash
# Trigger adhoc backup.
az dataprotection backup-instance adhoc-backup

# Configure backup for a resource in a backup vault.
az dataprotection backup-instance create

# Delete a backup instance in a backup vault.
az dataprotection backup-instance delete

# Initialize JSON request body for configuring backup of a resource.
az dataprotection backup-instance initialize

# Initialize JSON request body for initializing and configuring backup for AzureKubernetesService or AzureBlobs (for vaulted backups) resources. The generated JSON is meant for use with other CLI commands, and may not work as an input for non-CLI scenarios without modification.
az dataprotection backup-instance initialize-backupconfig

# Initialize JSON request body for initializing and configuring restore of an AzureKubernetesService resource. The generated JSON is meant for use with other CLI commands, and may not work as an input for non-CLI scenarios without modification.
az dataprotection backup-instance initialize-restoreconfig

# Gets backup instances belonging to a backup vault.
az dataprotection backup-instance list

# List backup instances across subscriptions, resource groups and vaults.
az dataprotection backup-instance list-from-resourcegraph

# This operation will resume protection for a stopped backup instance.
az dataprotection backup-instance resume-protection

# Get a backup instance with name in a backup vault.
az dataprotection backup-instance show

# This operation will stop protection of a backup instance and data will be held forever.
az dataprotection backup-instance stop-protection

# This operation will stop backup for a backup instance and retains the backup data as per the policy (except latest Recovery point, which will be retained forever).
az dataprotection backup-instance suspend-backup

# Update properties associated with a backup instance.
az dataprotection backup-instance update

# Assign the required permissions needed to successfully enable backup for the datasource.
az dataprotection backup-instance update-msi-permissions

# Update backup policy associated with backup instance.
az dataprotection backup-instance update-policy

# Validate whether configure backup will be successful or not.
az dataprotection backup-instance validate-for-backup

# Validates if Restore can be triggered for a DataSource.
az dataprotection backup-instance validate-for-restore

# Validate whether update for backup instance will be successful or not.
az dataprotection backup-instance validate-for-update

# Place the CLI in a waiting state until a condition is met.
az dataprotection backup-instance wait

# List deleted backup instances belonging to a backup vault.
az dataprotection backup-instance deleted-backup-instance list

# Get a deleted backup instance with name in a backup vault.
az dataprotection backup-instance deleted-backup-instance show

# Undelete soft-deleted backup instances.
az dataprotection backup-instance deleted-backup-instance undelete

# Initialize restore request object to recover all backed up data in a backup vault.
az dataprotection backup-instance restore initialize-for-data-recovery

# Initialize restore request object to recover all backed up data as files in a backup vault.
az dataprotection backup-instance restore initialize-for-data-recovery-as-files

# Initialize restore request object to recover specified items of backed up data in a backup vault.
az dataprotection backup-instance restore initialize-for-item-recovery

# Triggers restore for a BackupInstance.
az dataprotection backup-instance restore trigger

# Create a backup policy belonging to a backup vault.
az dataprotection backup-policy create

# Deletes a backup policy belonging to a backup vault.
az dataprotection backup-policy delete

# Get default policy template for a given datasource type.
az dataprotection backup-policy get-default-policy-template

# List list of backup policies belonging to a backup vault.
az dataprotection backup-policy list

# Get a backup policy belonging to a backup vault.
az dataprotection backup-policy show

# Update a backup policy belonging to a backup vault.
az dataprotection backup-policy update

# Create lifecycle for Azure Retention rule.
az dataprotection backup-policy retention-rule create-lifecycle

# Remove existing retention rule in a backup policy.
az dataprotection backup-policy retention-rule remove

# Add new retention rule or update existing retention rule.
az dataprotection backup-policy retention-rule set

# Create absolute criteria.
az dataprotection backup-policy tag create-absolute-criteria

# Create generic criteria.
az dataprotection backup-policy tag create-generic-criteria

# Remove existing tag from a backup policy.
az dataprotection backup-policy tag remove

# Add new tag or update existing tag of a backup policy.
az dataprotection backup-policy tag set

# Create backup schedule of a policy.
az dataprotection backup-policy trigger create-schedule

# Associate backup schedule to a backup policy.
az dataprotection backup-policy trigger set

# Create a BackupVault resource belonging to a resource group.
az dataprotection backup-vault create

# Delete a BackupVault resource from the resource group.
az dataprotection backup-vault delete

# Gets list of backup vault in a subscription or in a resource group.
az dataprotection backup-vault list

# List backup vaults across subscriptions, resource groups and vaults.
az dataprotection backup-vault list-from-resourcegraph

# Get a resource belonging to a resource group.
az dataprotection backup-vault show

# Updates a BackupVault resource belonging to a resource group. For example, updating tags for a resource.
az dataprotection backup-vault update

# Place the CLI in a waiting state until a condition is met.
az dataprotection backup-vault wait

# Assign the user or system managed identities.
az dataprotection backup-vault identity assign

# Remove the user or system managed identities.
az dataprotection backup-vault identity remove

# Show the details of managed identities.
az dataprotection backup-vault identity show

# Place the CLI in a waiting state until a condition is met.
az dataprotection backup-vault identity wait

# Create a ResourceGuard mapping.
az dataprotection backup-vault resource-guard-mapping create

# Delete the ResourceGuard mapping.
az dataprotection backup-vault resource-guard-mapping delete

# Get the ResourceGuard mapping object associated with the vault, and that matches the name in the request.
az dataprotection backup-vault resource-guard-mapping show

# Returns list of jobs belonging to a backup vault.
az dataprotection job list

# List backup jobs across subscriptions, resource groups and vaults.
az dataprotection job list-from-resourcegraph

# Get a job with id in a backup vault.
az dataprotection job show

# Returns a list of Recovery Points for a DataSource in a vault.
az dataprotection recovery-point list

# Get a Recovery Point using recoveryPointId for a Datasource.
az dataprotection recovery-point show

# Creates or updates a ResourceGuard resource belonging to a resource group.
az dataprotection resource-guard create

# Deletes a ResourceGuard resource from the resource group.
az dataprotection resource-guard delete

# Gets list of ResourceGuards in a subscription or in a resource group.
az dataprotection resource-guard list

# Lists protected operations associated with a ResourceGuard.
az dataprotection resource-guard list-protected-operations

# Returns a ResourceGuard belonging to a resource group.
az dataprotection resource-guard show

# Unlocks the critical operation which is protected by the resource guard.
az dataprotection resource-guard unlock

# Updates protected operations associated with a ResourceGuard.
az dataprotection resource-guard update

# Finds the valid recovery point in time ranges for the restore.
az dataprotection restorable-time-range find
```
