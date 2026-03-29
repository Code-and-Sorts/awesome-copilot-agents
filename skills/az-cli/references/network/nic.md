# az network nic

```bash
# Create a network interface.
az network nic create

# Delete a network interface.
az network nic delete

# List network interfaces.
az network nic list

# List all effective network security groups applied to a network interface.
az network nic list-effective-nsg

# Get the details of a network interface.
az network nic show

# Show the effective route table applied to a network interface.
az network nic show-effective-route-table

# Update a network interface.
az network nic update

# Place the CLI in a waiting state until a condition is met.
az network nic wait

# Create an IP configuration.
az network nic ip-config create

# Delete an IP configuration.
az network nic ip-config delete

# List the IP configurations of an NIC.
az network nic ip-config list

# Show the details of an IP configuration.
az network nic ip-config show

# Update an IP configuration.
az network nic ip-config update

# Place the CLI in a waiting state until a condition is met.
az network nic ip-config wait

# Add an address pool to an IP configuration.
az network nic ip-config address-pool add

# Remove an address pool of an IP configuration.
az network nic ip-config address-pool remove

# Add an inbound NAT rule to an IP configuration.
az network nic ip-config inbound-nat-rule add

# Remove an inbound NAT rule of an IP configuration.
az network nic ip-config inbound-nat-rule remove

# Place the CLI in a waiting state until a condition is met.
az network nic ip-config inbound-nat-rule wait

# Create a virtual network tap configuration.
az network nic vtap-config create

# Delete a virtual network tap configuration.
az network nic vtap-config delete

# List virtual network tap configurations.
az network nic vtap-config list

# Get details of a virtual network tap configuration.
az network nic vtap-config show

# Place the CLI in a waiting state until a condition is met.
az network nic vtap-config wait
```
