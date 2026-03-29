# az network vpn-gateway

```bash
# Create a site-to-site VPN gateway.
az network vpn-gateway create

# Delete a site-to-site VPN gateway.
az network vpn-gateway delete

# List site-to-site VPN gateways.
az network vpn-gateway list

# Get the details of a site-to-site VPN gateway.
az network vpn-gateway show

# Update settings of a site-to-site VPN gateway.
az network vpn-gateway update

# Place the CLI in a waiting state until a condition is met.
az network vpn-gateway wait

# Create a site-to-site VPN gateway connection.
az network vpn-gateway connection create

# Delete a site-to-site VPN gateway connection.
az network vpn-gateway connection delete

# List site-to-site VPN gateway connections.
az network vpn-gateway connection list

# Get the details of a site-to-site VPN gateway connection.
az network vpn-gateway connection show

# Update settings of VPN gateway connection.
az network vpn-gateway connection update

# Place the CLI in a waiting state until a condition of the site-to-site VPN gateway connection is met.
az network vpn-gateway connection wait

# Add an IPSec policy to a site-to-site VPN gateway connection.
az network vpn-gateway connection ipsec-policy add

# List site-to-site VPN gateway connection IPSec policies.
az network vpn-gateway connection ipsec-policy list

# Remove an IPSec policy from a site-to-site VPN gateway connection.
az network vpn-gateway connection ipsec-policy remove

# Starts packet capture on Vpn connection in the specified resource group.
az network vpn-gateway connection packet-capture start

# Add a VPN site link connection to a site-to-site VPN gateway connection.
az network vpn-gateway connection vpn-site-link-conn add

# List site-to-site VPN gateway connection VPN site link connection.
az network vpn-gateway connection vpn-site-link-conn list

# Remove a VPN site link connection from a site-to-site VPN gateway connection.
az network vpn-gateway connection vpn-site-link-conn remove

# Add an IPSec policy to a site-to-site VPN gateway connection VPN site link.
az network vpn-gateway connection vpn-site-link-conn ipsec-policy add

# List site-to-site VPN gateway connection VPN site link IPSec policies.
az network vpn-gateway connection vpn-site-link-conn ipsec-policy list

# Remove an IPSec policy from a site-to-site VPN gateway connection VPN site link.
az network vpn-gateway connection vpn-site-link-conn ipsec-policy remove

# Create a nat rule to a scalable vpn gateway if it doesn't exist else updates the existing nat rules.
az network vpn-gateway nat-rule create

# Delete a nat rule.
az network vpn-gateway nat-rule delete

# List all nat rules for a particular virtual wan vpn gateway.
az network vpn-gateway nat-rule list

# Get the details of a nat ruleGet.
az network vpn-gateway nat-rule show

# Update a nat rule to a scalable vpn gateway if it doesn't exist else updates the existing nat rules.
az network vpn-gateway nat-rule update

# Place the CLI in a waiting state until a condition is met.
az network vpn-gateway nat-rule wait
```
