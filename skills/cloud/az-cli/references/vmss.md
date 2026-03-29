# az vmss

```bash
# Create an Azure Virtual Machine Scale Set.
az vmss create

# Deallocate VMs within a VMSS.
az vmss deallocate

# Delete a VM scale set.
az vmss delete

# Delete VMs within a VMSS.
az vmss delete-instances

# View an instance of a VMSS.
az vmss get-instance-view

# List the OS upgrades on a VM scale set instance.
az vmss get-os-upgrade-history

# View the resiliency status of a VMSS instance.
az vmss get-resiliency-view

# List all VM scale sets under a resource group.
az vmss list

# Get the IP address and port number used to connect to individual VM instances within a set.
az vmss list-instance-connection-info

# List public IP addresses of VM instances within a set.
az vmss list-instance-public-ips

# List all virtual machines in a VM scale sets.
az vmss list-instances

# List SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.
az vmss list-skus

# Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which are not eligible for perform maintenance will be failed. Please refer to best practices for more details: https://learn.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications.
az vmss perform-maintenance

# Reimage VMs within a VMSS.
az vmss reimage

# Restart VMs within a VMSS.
az vmss restart

# Change the number of VMs within a VMSS.
az vmss scale

# Change ServiceState property for a given service within a VMSS.
az vmss set-orchestration-service-state

# Get details on VMs within a VMSS.
az vmss show

# Simulate the eviction of a Spot virtual machine in a VM scale set.
az vmss simulate-eviction

# Start VMs within a VMSS.
az vmss start

# Power off (stop) VMs within a VMSS.
az vmss stop

# Update a VMSS. Run 'az vmss update-instances' command to roll out the changes to VMs if you have not configured upgrade policy.
az vmss update

# Manual platform update domain walk to update virtual machines in a service fabric virtual machine scale set.
az vmss update-domain-walk

# Upgrade VMs within a VMSS.
az vmss update-instances

# Place the CLI in a waiting state until a condition of a scale set is met.
az vmss wait

# List applications for VMSS.
az vmss application list

# Set applications for VMSS.
az vmss application set

# Show the default config file which defines data to be collected.
az vmss diagnostics get-default-config

# Enable diagnostics on a VMSS.
az vmss diagnostics set

# Attach managed data disks to a scale set or its instances.
az vmss disk attach

# Detach managed data disks from a scale set or its instances.
az vmss disk detach

# Disable the encryption on a VMSS with managed disks.
az vmss encryption disable

# Encrypt a VMSS with managed disks.
az vmss encryption enable

# Show encryption status.
az vmss encryption show

# Delete an extension from a VMSS.
az vmss extension delete

# List extensions associated with a VMSS.
az vmss extension list

# Add an extension to a VMSS or update an existing extension.
az vmss extension set

# Show details on a VMSS extension.
az vmss extension show

# Upgrade all extensions for all VMSS instances to the latest version.
az vmss extension upgrade

# List the information on available extensions.
az vmss extension image list

# List virtual machine extension image types.
az vmss extension image list-names

# List virtual machine extension image versions.
az vmss extension image list-versions

# Get a virtual machine extension image.
az vmss extension image show

# Enable managed service identity on a VMSS.
az vmss identity assign

# Remove user assigned identities from a VM scaleset.
az vmss identity remove

# Display VM scaleset's managed identity info.
az vmss identity show

# Get all network interfaces in a virtual machine scale set.
az vmss nic list

# Get information about all network interfaces in a virtual machine in a virtual machine scale set.
az vmss nic list-vm-nics

# Get the specified network interface in a virtual machine scale set.
az vmss nic show

# Cancel the current virtual machine scale set rolling upgrade.
az vmss rolling-upgrade cancel

# Get the status of the latest virtual machine scale set rolling upgrade.
az vmss rolling-upgrade get-latest

# Start a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.
az vmss rolling-upgrade start

# The operation to Create the VMSS VM run command.
az vmss run-command create

# Delete operation to delete the VMSS VM run command.
az vmss run-command delete

# Execute a specific run command on a Virtual Machine Scale Set instance.
az vmss run-command invoke

# List operation to get all run commands of an instance in Virtual Machine Scaleset.
az vmss run-command list

# The operation to get the VMSS run command.
az vmss run-command show

# The operation to update the VMSS run command.
az vmss run-command update

# Place the CLI in a waiting state until a condition is met.
az vmss run-command wait
```
