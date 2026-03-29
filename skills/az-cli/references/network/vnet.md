# az network vnet

```bash
# Check if a private IP address is available for use within a virtual network.
az network vnet check-ip-address

# Create a virtual network.
az network vnet create

# Delete a virtual network.
az network vnet delete

# List virtual networks.
az network vnet list

# List some available ips in the vnet.
az network vnet list-available-ips

# List which services support VNet service tunneling in a given region.
az network vnet list-endpoint-services

# Get the details of a virtual network.
az network vnet show

# Update a virtual network.
az network vnet update

# Place the CLI in a waiting state until a condition is met.
az network vnet wait

# Create a virtual network peering connection.
az network vnet peering create

# Delete a peering.
az network vnet peering delete

# List peerings.
az network vnet peering list

# Show details of a peering.
az network vnet peering show

# Sync a virtual network peering connection.
az network vnet peering sync

# Update a peering in the specified virtual network.
az network vnet peering update

# Place the CLI in a waiting state until a condition is met.
az network vnet peering wait

# Create a subnet and associate an existing NSG and route table.
az network vnet subnet create

# Delete a subnet.
az network vnet subnet delete

# List the subnets in a virtual network.
az network vnet subnet list

# List the services available for subnet delegation.
az network vnet subnet list-available-delegations

# List some available ips in the subnet.
az network vnet subnet list-available-ips

# Show details of a subnet.
az network vnet subnet show

# Update a subnet.
az network vnet subnet update

# Place the CLI in a waiting state until a condition is met.
az network vnet subnet wait

# Create a virtual network tap.
az network vnet tap create

# Delete a virtual network tap.
az network vnet tap delete

# List virtual network taps.
az network vnet tap list

# Get the details of a virtual network tap.
az network vnet tap show

# Update settings of a virtual network tap.
az network vnet tap update

# Place the CLI in a waiting state until a condition is met.
az network vnet tap wait
```
