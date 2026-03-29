# az vm

```bash
# Assess patches on a VM.
az vm assess-patches

# Manage auto-shutdown for VM.
az vm auto-shutdown

# Capture information for a stopped VM.
az vm capture

# Convert a VM with unmanaged disks to use managed disks.
az vm convert

# Create an Azure Virtual Machine.
az vm create

# Deallocate a VM so that computing resources are no longer allocated (charges no longer apply). The status will change from 'Stopped' to 'Stopped (Deallocated)'.
az vm deallocate

# Delete operation to delete a virtual machine.
az vm delete

# Mark a VM as generalized, allowing it to be imaged for multiple deployments.
az vm generalize

# Get instance information about a VM.
az vm get-instance-view

# Install patches on a VM.
az vm install-patches

# List details of Virtual Machines.
az vm list

# List IP addresses associated with a VM.
az vm list-ip-addresses

# List available sizes for VMs.
az vm list-sizes

# Get details for compute-related resource SKUs.
az vm list-skus

# List available usage resources for VMs.
az vm list-usage

# List available resizing options for VMs.
az vm list-vm-resize-options

# Migrate a virtual machine from availability set to Flexible Virtual Machine Scale Set.
az vm migrate-to-vmss

# Opens a VM to inbound traffic on specified ports.
az vm open-port

# The operation to perform maintenance on a virtual machine.
az vm perform-maintenance

# Reapply VMs.
az vm reapply

# Redeploy an existing VM.
az vm redeploy

# Reimage (upgrade the operating system) a virtual machine.
az vm reimage

# Update a VM's size.
az vm resize

# Restart VMs.
az vm restart

# Get the details of a VM.
az vm show

# Simulate the eviction of a Spot VM.
az vm simulate-eviction

# Start a stopped VM.
az vm start

# Power off (stop) a running VM.
az vm stop

# Update the properties of a VM.
az vm update

# Place the CLI in a waiting state until a condition of the VM is met.
az vm wait

# Remove Azure Enhanced Monitoring Extension.
az vm aem delete

# Configure Azure Enhanced Monitoring Extension.
az vm aem set

# Verify Azure Enhanced Monitoring Extensions configured correctly.
az vm aem verify

# List applications for VM.
az vm application list

# Set applications for VM.
az vm application set

# Cancel the migration operation on an Availability Set.
az vm availability-set cancel-migration-to-vmss

# Convert an Azure Availability Set to contain VMs with managed disks.
az vm availability-set convert

# Create a new Flexible Virtual Machine Scale Set and migrate all the Virtual Machines in the Availability Set. This does not trigger a downtime on the Virtual Machines.
az vm availability-set convert-to-vmss

# Create an Azure Availability Set.
az vm availability-set create

# Delete an availability set.
az vm availability-set delete

# List all availability sets in a subscription.
az vm availability-set list

# List all available virtual machine sizes that can be used to create a new virtual machine in an existing availability set.
az vm availability-set list-sizes

# Get information about an availability set.
az vm availability-set show

# Start migration operation on an Availability Set to move its Virtual Machines to a Virtual Machine Scale Set. This should be followed by a migrate operation on each Virtual Machine that triggers a downtime on the Virtual Machine.
az vm availability-set start-migration-to-vmss

# Update an Azure Availability Set.
az vm availability-set update

# Validate that the Virtual Machines in the Availability Set can be migrated to the provided Virtual Machine Scale Set.
az vm availability-set validate-migration-to-vmss

# Disable the boot diagnostics on a VM.
az vm boot-diagnostics disable

# Enable the boot diagnostics on a VM.
az vm boot-diagnostics enable

# Get the boot diagnostics log from a VM.
az vm boot-diagnostics get-boot-log

# Get SAS URIs for a virtual machine's boot diagnostic.
az vm boot-diagnostics get-boot-log-uris

# Get the default configuration settings for a VM.
az vm diagnostics get-default-config

# Configure the Azure VM diagnostics extension.
az vm diagnostics set

# Attach a managed persistent disk to a VM.
az vm disk attach

# Detach a managed disk from a VM.
az vm disk detach

# Disable disk encryption on the OS disk and/or data disks. Decrypt mounted disks.
az vm encryption disable

# Enable disk encryption on the OS disk and/or data disks. Encrypt mounted disks.
az vm encryption enable

# Show encryption status.
az vm encryption show

# Delete operation to delete the extension.
az vm extension delete

# List the extensions attached to a VM.
az vm extension list

# Set extensions for a VM.
az vm extension set

# Display information about extensions attached to a VM.
az vm extension show

# Place the CLI in a waiting state until a condition is met.
az vm extension wait

# List the information on available extensions.
az vm extension image list

# List the names of available extensions.
az vm extension image list-names

# List the versions for available extensions.
az vm extension image list-versions

# Display information for an extension.
az vm extension image show

# Create a dedicated host.
az vm host create

# Delete a dedicated host.
az vm host delete

# Get instance information about a dedicated host.
az vm host get-instance-view

# List dedicated hosts.
az vm host list

# List all available dedicated host sizes to which the specified dedicated host can be resized. NOTE: The dedicated host sizes provided can be used to only scale up the existing dedicated host.
az vm host list-resize-options

# Redeploy the dedicated host.
az vm host redeploy

# Resize a dedicated host.
az vm host resize

# Restart the dedicated host.
az vm host restart

# Get the details of a dedicated host.
az vm host show

# Update a dedicated host.
az vm host update

# Place the CLI in a waiting state until a condition is met.
az vm host wait

# Create a dedicated host group.
az vm host group create

# Delete a dedicated host group.
az vm host group delete

# Get instance view of a dedicated host group.
az vm host group get-instance-view

# List dedicated host groups.
az vm host group list

# Get the details of a dedicated host group.
az vm host group show

# Update a dedicated host group.
az vm host group update

# Enable managed service identity on a VM.
az vm identity assign

# Remove managed service identities from a VM.
az vm identity remove

# Display VM's managed identity info.
az vm identity show

# Accept Azure Marketplace term so that the image can be used to create VMs.
az vm image accept-terms

# List the VM/VMSS images available in the Azure Marketplace.
az vm image list

# List the VM image offers available in the Azure Marketplace.
az vm image list-offers

# List the VM image publishers available in the Azure Marketplace.
az vm image list-publishers

# List the VM image SKUs available in the Azure Marketplace.
az vm image list-skus

# Get the details for a VM image available in the Azure Marketplace.
az vm image show

# Accept Azure Marketplace image terms so that the image can be used to create VMs.
az vm image terms accept

# Cancel Azure Marketplace image terms.
az vm image terms cancel

# Get the details of Azure Marketplace image terms.
az vm image terms show

# Execute a query against the Log Analytics workspace linked with a VM.
az vm monitor log show

# List the metric definitions for a VM.
az vm monitor metrics list-definitions

# List the metric values for a VM.
az vm monitor metrics tail

# Add existing NICs to a VM.
az vm nic add

# List the NICs available on a VM.
az vm nic list

# Remove NICs from a VM.
az vm nic remove

# Configure settings of a NIC attached to a VM.
az vm nic set

# Display information for a NIC attached to a VM.
az vm nic show

# Create a new repair VM and attach the source VM's copied OS disk as a data disk.
az vm repair create

# List available scripts. Located https://github.com/Azure/repair-script-library.
az vm repair list-scripts

# Repair and restore the VM.
az vm repair repair-and-restore

# Repair button script.
az vm repair repair-button

# Reset the network interface stack on the VM guest OS. https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/reset-network-interface.
az vm repair reset-nic

# Replace source VM's OS disk with data disk from repair VM.
az vm repair restore

# Run verified scripts from GitHub on a VM. 'az vm repair list-scripts' to view available scripts.
az vm repair run

# The operation to create the run command.
az vm run-command create

# The operation to delete the run command.
az vm run-command delete

# Execute a specific run command on a vm.
az vm run-command invoke

# List run commands from a VM or a location.
az vm run-command list

# Get specific run command.
az vm run-command show

# The operation to update the run command.
az vm run-command update

# Place the CLI in a waiting state until a condition of the res virtual-machine-run-command is met.
az vm run-command wait

# Add a secret to a VM.
az vm secret add

# Transform secrets into a form that can be used by VMs and VMSSes.
az vm secret format

# List secrets on a VM.
az vm secret list

# Remove a secret from a VM.
az vm secret remove

# Attach an unmanaged persistent disk to a VM.
az vm unmanaged-disk attach

# Detach an unmanaged disk from a VM.
az vm unmanaged-disk detach

# List unmanaged disks of a VM.
az vm unmanaged-disk list

# Delete a user account from a VM.
az vm user delete

# Reset the SSH configuration on a VM.
az vm user reset-ssh

# Update a user account for VM. You can use it to update password or ssh key value for VM user.
az vm user update
```
