# az site-recovery

```bash
# Create an email notification(alert) configuration.
az site-recovery alert-setting create

# List the list of email notification(alert) configurations for the vault.
az site-recovery alert-setting list

# Get the details of the specified email notification(alert) configuration.
az site-recovery alert-setting show

# Update an email notification(alert) configuration.
az site-recovery alert-setting update

# List the list of Azure Site Recovery events for the vault.
az site-recovery event list

# Get operation to get the details of an Azure Site recovery event.
az site-recovery event show

# Create operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site).
az site-recovery fabric create

# Delete operation to purge(force delete) an Azure Site Recovery fabric.
az site-recovery fabric delete

# List a list of the Azure Site Recovery fabrics in the vault.
az site-recovery fabric list

# The operation to delete or remove an Azure Site Recovery fabric.
az site-recovery fabric remove

# Get the details of an Azure Site Recovery fabric.
az site-recovery fabric show

# Update operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site).
az site-recovery fabric update

# The operation to cancel an Azure Site Recovery job.
az site-recovery job cancel

# The operation to export the details of the Azure Site Recovery jobs of the vault.
az site-recovery job export

# List the list of Azure Site Recovery Jobs for the vault.
az site-recovery job list

# The operation to restart an Azure Site Recovery job.
az site-recovery job restart

# The operation to resume an Azure Site Recovery job.
az site-recovery job resume

# Get the details of an Azure Site Recovery job.
az site-recovery job show

# List all the logical networks of the Azure Site Recovery fabric.
az site-recovery logical-network list

# Get the details of a logical network.
az site-recovery logical-network show

# List the networks available for a fabric.
az site-recovery network list

# Get the details of a network.
az site-recovery network show

# Create operation to create an ASR network mapping.
az site-recovery network mapping create

# Delete operation to delete a network mapping.
az site-recovery network mapping delete

# List all ASR network mappings for the specified network.
az site-recovery network mapping list

# Get the details of an ASR network mapping.
az site-recovery network mapping show

# Update operation to create an ASR network mapping.
az site-recovery network mapping update

# Create operation to create a replication policy.
az site-recovery policy create

# Delete operation to delete a replication policy.
az site-recovery policy delete

# List the replication policies for a vault.
az site-recovery policy list

# Get the details of a replication policy.
az site-recovery policy show

# Update operation to update a replication policy.
az site-recovery policy update

# List the protectable items in a protection container.
az site-recovery protectable-item list

# Get operation to get the details of a protectable item.
az site-recovery protectable-item show

# Create operation to create an ASR replication protected item (Enable replication).
az site-recovery protected-item create

# Delete operation to delete or purge a replication protected item. This operation will force delete the replication protected item. Use the remove operation on replication protected item to perform a clean disable replication for the item.
az site-recovery protected-item delete

# Operation to commit the failover of the replication protected item.
az site-recovery protected-item failover-commit

# List the list of ASR replication protected items in the protection container.
az site-recovery protected-item list

# Operation to initiate a planned failover of the replication protected item.
az site-recovery protected-item planned-failover

# The operation to disable replication on a replication protected item. This will also remove the item.
az site-recovery protected-item remove

# Operation to reprotect or reverse replicate a failed over replication protected item.
az site-recovery protected-item reprotect

# Get the details of an ASR replication protected item.
az site-recovery protected-item show

# Operation to initiate a failover of the replication protected item.
az site-recovery protected-item unplanned-failover

# Update operation to create an ASR replication protected item (Enable replication).
az site-recovery protected-item update

# Create to create a protection container.
az site-recovery protection-container create

# List the protection containers in the specified fabric.
az site-recovery protection-container list

# Operation to remove a protection container.
az site-recovery protection-container remove

# Get the details of a protection container.
az site-recovery protection-container show

# Operation to switch protection from one container to another or one replication provider to another.
az site-recovery protection-container switch-protection

# Update to create a protection container.
az site-recovery protection-container update

# Create operation to create a protection container mapping.
az site-recovery protection-container mapping create

# Delete operation to purge(force delete) a protection container mapping.
az site-recovery protection-container mapping delete

# List the protection container mappings for a protection container.
az site-recovery protection-container mapping list

# The operation to delete or remove a protection container mapping.
az site-recovery protection-container mapping remove

# Get the details of a protection container mapping.
az site-recovery protection-container mapping show

# Update operation to create a protection container mapping.
az site-recovery protection-container mapping update

# Create operation to create a recovery plan.
az site-recovery recovery-plan create

# Delete a recovery plan.
az site-recovery recovery-plan delete

# List the recovery plans in the vault.
az site-recovery recovery-plan list

# Get the details of the recovery plan.
az site-recovery recovery-plan show

# Update operation to create a recovery plan.
az site-recovery recovery-plan update

# List the registered recovery services providers for the specified fabric.
az site-recovery recovery-services-provider list

# List whether a given VM can be protected or not in which case returns list of errors.
az site-recovery replication-eligibility list

# Get whether a given VM can be protected or not in which case returns list of errors.
az site-recovery replication-eligibility show-default

# List the list of Azure Site Recovery appliances for the vault.
az site-recovery vault list-appliance

# Get the list of ASR replication migration items in the vault.
az site-recovery vault list-migration-item

# List the networks available in a vault.
az site-recovery vault list-network

# List all ASR network mappings in the vault.
az site-recovery vault list-network-mapping

# List the list of ASR replication protected items in the vault.
az site-recovery vault list-protected-item

# List the protection containers in a vault.
az site-recovery vault list-protection-container

# List the protection container mappings in the vault.
az site-recovery vault list-protection-container-mapping

# List the registered recovery services providers in the vault.
az site-recovery vault list-recovery-services-provider

# List the storage classifications in the vault.
az site-recovery vault list-storage-classification

# List the storage classification mappings in the vault.
az site-recovery vault list-storage-classification-mapping

# List the vCenter servers registered in the vault.
az site-recovery vault list-v-center

# Show the supported operating system for the vault.
az site-recovery vault show-supported-operating-system

# Refresh default for the health of the vault.
az site-recovery vault health refresh-default

# Get the health details of the vault.
az site-recovery vault health show

# List to get machine.
az site-recovery vmware-site machine list

# List to get run as accounts.
az site-recovery vmware-site run-as-account list
```
