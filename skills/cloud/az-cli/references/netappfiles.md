# az netappfiles

```bash
# Check if a file path is available.
az netappfiles check-file-path-availability

# Check if a resource name is available.
az netappfiles check-name-availability

# Check if a quota is available.
az netappfiles check-quota-availability

# Describe a network sibling set.
az netappfiles query-network-sibling-set

# Update the network features of a network sibling set.
az netappfiles update-network-sibling-set

# Change KeyVault/Managed HSM that is used for encryption of volumes under NetApp account.
az netappfiles account change-key-vault

# Create the specified NetApp account within the resource group.
az netappfiles account create

# Delete the specified NetApp account.
az netappfiles account delete

# Contains data from encryption.keyVaultProperties as well as information about which private endpoint is used by each encryption sibling set. Response from this endpoint can be used for transitiontocmk.
az netappfiles account get-key-vault-status

# List and describe all NetApp accounts in the subscription.
az netappfiles account list

# Migrate the backups under a NetApp account to backup vault.
az netappfiles account migrate-backup

# Renew identity credentials that are used to authenticate to key vault, for customer-managed key encryption. If encryption.identity.principalId does not match identity.principalId, running this operation will fix it.
az netappfiles account renew-credentials

# Get the NetApp account.
az netappfiles account show

# Transitions all volumes in a VNet to a different encryption key source (Microsoft-managed key or Azure Key Vault). Operation fails if targeted volumes share encryption sibling set with volumes from another account.
az netappfiles account transitiontocmk

# Update the specified NetApp account within the resource group.
az netappfiles account update

# Place the CLI in a waiting state until a condition is met.
az netappfiles account wait

# Add an active directory to the account.
az netappfiles account ad add

# List the active directories of an account.
az netappfiles account ad list

# Remove an active directory from the account.
az netappfiles account ad remove

# Get the specified ANF active directory.
az netappfiles account ad show

# Updates an active directory to the account.
az netappfiles account ad update

# Place the CLI in a waiting state until a condition is met.
az netappfiles account ad wait

# Create a backup policy for Netapp Account.
az netappfiles account backup-policy create

# Delete backup policy.
az netappfiles account backup-policy delete

# List backup policies for Netapp Account.
az netappfiles account backup-policy list

# Get a particular backup Policy.
az netappfiles account backup-policy show

# Update a backup policy for Netapp Account.
az netappfiles account backup-policy update

# Place the CLI in a waiting state until a condition is met.
az netappfiles account backup-policy wait

# Create the specified Backup Vault in the NetApp account.
az netappfiles account backup-vault create

# Delete the specified Backup Vault.
az netappfiles account backup-vault delete

# List and describe all Backup Vaults in the NetApp account.
az netappfiles account backup-vault list

# Get the Backup Vault.
az netappfiles account backup-vault show

# Update the specified Backup Vault in the NetApp account.
az netappfiles account backup-vault update

# Place the CLI in a waiting state until a condition is met.
az netappfiles account backup-vault wait

# Create a backup under the Backup Vault.
az netappfiles account backup-vault backup create

# Delete a Backup under the Backup Vault.
az netappfiles account backup-vault backup delete

# List all backups Under a Backup Vault.
az netappfiles account backup-vault backup list

# Restore the specified files from the specified backup to the active filesystem.
az netappfiles account backup-vault backup restore-file

# Get the specified Backup under Backup Vault.
az netappfiles account backup-vault backup show

# Update a backup under the Backup Vault.
az netappfiles account backup-vault backup update

# Place the CLI in a waiting state until a condition is met.
az netappfiles account backup-vault backup wait

# Create a capacity pool.
az netappfiles pool create

# Delete the specified capacity pool.
az netappfiles pool delete

# List all capacity pools in the NetApp Account.
az netappfiles pool list

# Get details of the specified capacity pool.
az netappfiles pool show

# Update a capacity pool.
az netappfiles pool update

# Place the CLI in a waiting state until a condition is met.
az netappfiles pool wait

# List the default and current limits for quotas.
az netappfiles quota-limit list

# Get the default and current subscription quota limit.
az netappfiles quota-limit show

# Provides storage to network proximity and logical zone mapping information.
az netappfiles resource query-region-info

# List region specific information.
az netappfiles resource region-info list

# Get storage to network proximity and logical zone mapping information.
az netappfiles resource region-info default show

# Create the specified snapshot within the given volume.
az netappfiles snapshot create

# Delete snapshot.
az netappfiles snapshot delete

# List all snapshots associated with the volume.
az netappfiles snapshot list

# Restore the specified files from the specified snapshot to the active filesystem.
az netappfiles snapshot restore-files

# Get details of the specified snapshot.
az netappfiles snapshot show

# Update the specified snapshot within the given volume.
az netappfiles snapshot update

# Place the CLI in a waiting state until a condition is met.
az netappfiles snapshot wait

# Create a snapshot policy.
az netappfiles snapshot policy create

# Delete snapshot policy.
az netappfiles snapshot policy delete

# List snapshot policy.
az netappfiles snapshot policy list

# Get a snapshot Policy.
az netappfiles snapshot policy show

# Update a snapshot policy.
az netappfiles snapshot policy update

# List volumes associated with snapshot policy.
az netappfiles snapshot policy volumes

# Place the CLI in a waiting state until a condition is met.
az netappfiles snapshot policy wait

# Create a subvolume in the path or clones the subvolume mentioned in the parentPath.
az netappfiles subvolume create

# Delete subvolume.
az netappfiles subvolume delete

# List a list of the subvolumes in the volume.
az netappfiles subvolume list

# Get the path associated with the subvolumeName provided.
az netappfiles subvolume show

# Update a subvolume in the path or clones the subvolume mentioned in the parentPath.
az netappfiles subvolume update

# Place the CLI in a waiting state until a condition is met.
az netappfiles subvolume wait

# Get details of the specified subvolume.
az netappfiles subvolume metadata show

# List current subscription usages.
az netappfiles usage list

# Get current subscription usage of the specific type.
az netappfiles usage show

# Create a volume group along with specified volumes.
az netappfiles volume-group create

# Delete the specified volume group only if there are no volumes under volume group.
az netappfiles volume-group delete

# List all volume groups for given account.
az netappfiles volume-group list

# Get details of the specified volume group.
az netappfiles volume-group show

# Update a volume group along with specified volumes.
az netappfiles volume-group update

# Place the CLI in a waiting state until a condition is met.
az netappfiles volume-group wait

# Break all the file locks on a volume.
az netappfiles volume break-file-locks

# Create or Update a volume.
az netappfiles volume create

# Delete the specified volume.
az netappfiles volume delete

# Finalizes the relocation of the volume and cleans up the old volume.
az netappfiles volume finalize-relocation

# Returns the list of group Ids for a specific LDAP User.
az netappfiles volume get-groupid-list-for-ldapuser

# List all volumes within the capacity pool.
az netappfiles volume list

# Returns report of quotas for the volume.
az netappfiles volume list-quota-report

# Migrate the backups under volume to backup vault.
az netappfiles volume migrate-backup

# Moves volume to another pool.
az netappfiles volume pool-change

# This operation will populate availability zone information for a volume.
az netappfiles volume populate-availability-zone

# Relocates volume to a new stamp.
az netappfiles volume relocate

# Reset cifs password from volume.
az netappfiles volume reset-cifs-pw

# Revert a volume to the snapshot specified in the body.
az netappfiles volume revert

# Reverts the volume relocation process, cleans up the new volume and starts using the former-existing volume.
az netappfiles volume revert-relocation

# Get the details of the specified volume.
az netappfiles volume show

# Split operation to convert clone volume to an independent volume.
az netappfiles volume splitclonefromparent

# Update the specified volume within the capacity pool.
az netappfiles volume update

# Place the CLI in a waiting state until a condition is met.
az netappfiles volume wait

# Add a new rule to the export policy for a volume.
az netappfiles volume export-policy add

# List the export policy rules for a volume.
az netappfiles volume export-policy list

# Remove a rule from the export policy for a volume by rule index. The current rules can be obtained by performing the subgroup list command.
az netappfiles volume export-policy remove

# Show the export policy rule for a volume.
az netappfiles volume export-policy show

# Update the export policy rule for a volume.
az netappfiles volume export-policy update

# Place the CLI in a waiting state until a condition is met.
az netappfiles volume export-policy wait

# Get the latest status of the backup for a volume.
az netappfiles volume latest-backup-status current show

# Get the latest status of the restore for a volume.
az netappfiles volume latest-restore-status current show

# Create the specified quota rule within the given volume.
az netappfiles volume quota-rule create

# Delete quota rule.
az netappfiles volume quota-rule delete

# List all quota rules associated with the volume.
az netappfiles volume quota-rule list

# Get details of the specified quota rule.
az netappfiles volume quota-rule show

# Update the specified quota rule within the given volume.
az netappfiles volume quota-rule update

# Place the CLI in a waiting state until a condition is met.
az netappfiles volume quota-rule wait

# Authorize source volume replication.
az netappfiles volume replication approve

# Starts SVM peering and returns a command to be run on the external ONTAP to accept it.  Once the SVM have been peered a SnapMirror will be created.
az netappfiles volume replication authorize-external-replication

# Finalizes the migration of an external volume by releasing the replication and breaking the external cluster peering if no other migration is active.
az netappfiles volume replication finalize-external-replication

# List all replications for a specified volume.
az netappfiles volume replication list

# Starts peering the external cluster for this migration volume.
az netappfiles volume replication peer-external-cluster

# Performs an adhoc replication transfer on a volume with volumeType Migration.
az netappfiles volume replication perform-replication-transfer

# This operation will populate availability zone information for a volume.
az netappfiles volume replication populate-availability-zone

# Re-Initializes the replication connection on the destination volume.
az netappfiles volume replication re-initialize

# Re-establish a previously deleted replication between 2 volumes that have a common ad-hoc or policy-based snapshots.
az netappfiles volume replication reestablish

# Delete the replication connection on the destination volume, and send release to the source replication.
az netappfiles volume replication remove

# Resync the connection on the destination volume. If the operation is ran on the source volume it will reverse-resync the connection and sync from destination to source.
az netappfiles volume replication resume

# Get the status of the replication.
az netappfiles volume replication status

# Suspend/Break the replication connection on the destination volume.
az netappfiles volume replication suspend
```
