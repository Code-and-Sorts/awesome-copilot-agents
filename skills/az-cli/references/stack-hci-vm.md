# az stack-hci-vm

```bash
# Create a VM.
az stack-hci-vm create

# Delete a VM.
az stack-hci-vm delete

# List all the VMs.
az stack-hci-vm list

# Pause a VM.
az stack-hci-vm pause

# Reconnect a VM hosted on Azure Local to Azure control plane.
az stack-hci-vm reconnect-to-azure

# Restart a VM.
az stack-hci-vm restart

# Save a VM.
az stack-hci-vm save

# Get the details of a VM.
az stack-hci-vm show

# Start a stopped VM.
az stack-hci-vm start

# Power off (stop) a running VM.
az stack-hci-vm stop

# Update a VM.
az stack-hci-vm update

# Attach disk to a VM.
az stack-hci-vm disk attach

# Create a virtual hard disk.
az stack-hci-vm disk create

# Enable a data disk on Azure Local in Azure control plane.
az stack-hci-vm disk create-from-local

# Delete a virtual hard disk.
az stack-hci-vm disk delete

# Detach disk from a VM.
az stack-hci-vm disk detach

# List all virtual hard disks.
az stack-hci-vm disk list

# Get the details of a virtual hard disk.
az stack-hci-vm disk show

# Update a virtual hard disk.
az stack-hci-vm disk update

# Upload a virtual hard disk using azure managed disk SAS url.
az stack-hci-vm disk upload

# Attach gpu to a VM (preview feature).
az stack-hci-vm gpu attach

# Detach gpu from a VM (preview feature).
az stack-hci-vm gpu detach

# Create a gallery image.
az stack-hci-vm image create

# Delete an image.
az stack-hci-vm image delete

# List all gallery images.
az stack-hci-vm image list

# Get the details of an image.
az stack-hci-vm image show

# Update an image.
az stack-hci-vm image update

# Create a load balancer.
az stack-hci-vm network lb create

# Delete a load balancer.
az stack-hci-vm network lb delete

# List all load balancers.
az stack-hci-vm network lb list

# Get the details of a load balancer.
az stack-hci-vm network lb show

# Update a load balancer.
az stack-hci-vm network lb update

# Add a backend address pool and its NIC targets.
az stack-hci-vm network lb backend-pool add

# Delete a backend address pool.
az stack-hci-vm network lb backend-pool delete

# List backend pools defined on a load balancer.
az stack-hci-vm network lb backend-pool list

# Show backend pool properties, including member NICs.
az stack-hci-vm network lb backend-pool show

# Update a backend pool's network scope or replace all addresses.
az stack-hci-vm network lb backend-pool update

# Add a frontend IP configuration to an existing load balancer.
az stack-hci-vm network lb frontend-ip add

# Remove a frontend IP configuration from a load balancer.
az stack-hci-vm network lb frontend-ip delete

# List frontend IP configurations on a load balancer.
az stack-hci-vm network lb frontend-ip list

# Show the details of a frontend IP configuration.
az stack-hci-vm network lb frontend-ip show

# Create a load-balancing rule that binds a frontend, backend pool, and optional probe.
az stack-hci-vm network lb lb-rule add

# Delete a load-balancing rule.
az stack-hci-vm network lb lb-rule delete

# List load-balancing rules.
az stack-hci-vm network lb lb-rule list

# Show a load-balancing rule definition.
az stack-hci-vm network lb lb-rule show

# Update ports, protocols, or probe bindings on an existing rule.
az stack-hci-vm network lb lb-rule update

# Add a TCP or HTTP health probe.
az stack-hci-vm network lb probe add

# Delete a probe.
az stack-hci-vm network lb probe delete

# List probes configured on a load balancer.
az stack-hci-vm network lb probe list

# Show details for a probe configuration.
az stack-hci-vm network lb probe show

# Update probe settings such as interval or threshold.
az stack-hci-vm network lb probe update

# Create a logical network.
az stack-hci-vm network lnet create

# Delete a logical network.
az stack-hci-vm network lnet delete

# List all the logical networks.
az stack-hci-vm network lnet list

# Get the details of a logical network.
az stack-hci-vm network lnet show

# Update a logical network.
az stack-hci-vm network lnet update

# Create a NAT gateway.
az stack-hci-vm network nat create

# Delete a NAT gateway.
az stack-hci-vm network nat delete

# List all NAT gateways.
az stack-hci-vm network nat list

# Get the details of a NAT gateway.
az stack-hci-vm network nat show

# Update a NAT gateway.
az stack-hci-vm network nat update

# Create a network interface.
az stack-hci-vm network nic create

# Delete a network interface.
az stack-hci-vm network nic delete

# List all network interfaces.
az stack-hci-vm network nic list

# Get the details of a network interface.
az stack-hci-vm network nic show

# Update a network interface.
az stack-hci-vm network nic update

# Create a network security group.
az stack-hci-vm network nsg create

# Delete a network security group.
az stack-hci-vm network nsg delete

# List network security groups.
az stack-hci-vm network nsg list

# Get information about a network security group.
az stack-hci-vm network nsg show

# Update a network security group.
az stack-hci-vm network nsg update

# Create a network security group rule.
az stack-hci-vm network nsg rule create

# Delete a network security group rule.
az stack-hci-vm network nsg rule delete

# List all rules in a network security group.
az stack-hci-vm network nsg rule list

# Get the details of a network security group rule.
az stack-hci-vm network nsg rule show

# Update a network security group rule.
az stack-hci-vm network nsg rule update

# Create a public IP address.
az stack-hci-vm network public-ip create

# Delete a public IP address.
az stack-hci-vm network public-ip delete

# List all public IP addresses.
az stack-hci-vm network public-ip list

# Get the details of a public IP address.
az stack-hci-vm network public-ip show

# Update a public IP address.
az stack-hci-vm network public-ip update

# Create a virtual network.
az stack-hci-vm network vnet create

# Delete a virtual network.
az stack-hci-vm network vnet delete

# List all virtual networks.
az stack-hci-vm network vnet list

# Get the details of a virtual network.
az stack-hci-vm network vnet show

# Update a virtual network.
az stack-hci-vm network vnet update

# Create a subnet.
az stack-hci-vm network vnet subnet create

# Delete a subnet.
az stack-hci-vm network vnet subnet delete

# List all subnets in a virtual network.
az stack-hci-vm network vnet subnet list

# Get the details of a subnet.
az stack-hci-vm network vnet subnet show

# Update a subnet.
az stack-hci-vm network vnet subnet update

# Add existing vNICs to a VM.
az stack-hci-vm nic add

# Remove vNICs from a VM.
az stack-hci-vm nic remove

# Connect to the serial console of an Azure Local virtual machine (applies to multi-rack deployments only).
az stack-hci-vm serial-console connect

# Create a snapshot from a source disk (applies to multi-rack deployments only).
az stack-hci-vm snapshot create

# Delete a snapshot (applies to multi-rack deployments only).
az stack-hci-vm snapshot delete

# List all snapshots (applies to multi-rack deployments only).
az stack-hci-vm snapshot list

# Get the details of a snapshot (applies to multi-rack deployments only).
az stack-hci-vm snapshot show

# Update a snapshot (applies to multi-rack deployments only).
az stack-hci-vm snapshot update

# Create a storage path.
az stack-hci-vm storagepath create

# Delete a storage path.
az stack-hci-vm storagepath delete

# List all the storage paths.
az stack-hci-vm storagepath list

# Get the details of a storage path.
az stack-hci-vm storagepath show

# Update a storage path.
az stack-hci-vm storagepath update

# Disable VM Connect for a virtual machine.
az stack-hci-vm vmconnect disable

# Enable VM Connect and generate RDP file to connect to the VM.
az stack-hci-vm vmconnect enable
```
