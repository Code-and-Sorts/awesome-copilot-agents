# az disk-pool

```bash
# Create Disk pool. This Create operation can take 15 minutes to complete. This is expected service behavior.
az disk-pool create

# Delete a Disk pool; attached disks are not affected. This delete operation can take 10 minutes to complete. This is expected service behavior.
az disk-pool delete

# Gets a list of DiskPools in a resource group. And Gets a list of Disk Pools in a subscription.
az disk-pool list

# Gets the network endpoints of all outbound dependencies of a Disk Pool.
az disk-pool list-outbound-network-dependency-endpoint

# Lists available StoragePool resources and skus in an Azure location.
az disk-pool list-skus

# Lists available Disk Pool Skus in an Azure location.
az disk-pool list-zones

# Redeploy replaces the underlying virtual machine hosts one at a time. This operation can take 10-15 minutes to complete. This is expected service behavior.
az disk-pool redeploy

# Get a Disk pool.
az disk-pool show

# The operation to start a Disk Pool. This start operation can take 10 minutes to complete. This is expected service behavior.
az disk-pool start

# Shuts down the Disk Pool and releases the compute resources. You are not billed for the compute resources that this Disk Pool uses. This operation can take 10 minutes to complete. This is expected service behavior.
az disk-pool stop

# Update a Disk pool.
az disk-pool update

# Place the CLI in a waiting state until a condition of the disk-pool is met.
az disk-pool wait

# Create an iSCSI Target.
az disk-pool iscsi-target create

# Delete an iSCSI Target.
az disk-pool iscsi-target delete

# Get iSCSI Targets in a Disk pool.
az disk-pool iscsi-target list

# Get an iSCSI Target.
az disk-pool iscsi-target show

# Update an iSCSI Target.
az disk-pool iscsi-target update

# Place the CLI in a waiting state until a condition of the disk-pool iscsi-target is met.
az disk-pool iscsi-target wait
```
