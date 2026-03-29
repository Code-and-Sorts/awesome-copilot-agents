# az network vnet-gateway

```bash
# Create a virtual network gateway.
az network vnet-gateway create

# Delete a virtual network gateway.
az network vnet-gateway delete

# Disconnect vpn connections of virtual network gateway.
az network vnet-gateway disconnect-vpn-connections

# This operation retrieves the details of all the failover tests performed on the gateway for different peering locations.
az network vnet-gateway get-failover-all-tests-detail

# This operation retrieves the details of a particular failover test performed on the gateway based on the test Guid.
az network vnet-gateway get-failover-single-test-detail

# This operation retrieves the resiliency information for an Express Route Gateway, including the gateway's current resiliency score and recommendations to further improve the score.
az network vnet-gateway get-resiliency-information

# This operation retrieves the route set information for an Express Route Gateway based on their resiliency.
az network vnet-gateway get-routes-information

# List virtual network gateways.
az network vnet-gateway list

# List the routes of a virtual network gateway advertised to the specified peer.
az network vnet-gateway list-advertised-routes

# Retrieve the status of BGP peers.
az network vnet-gateway list-bgp-peer-status

# This operation retrieves a list of routes the virtual network gateway has learned, including routes learned from BGP peers.
az network vnet-gateway list-learned-routes

# Reset a virtual network gateway.
az network vnet-gateway reset

# Get the details of a virtual network gateway.
az network vnet-gateway show

# Get a xml format representation for supported vpn devices.
az network vnet-gateway show-supported-devices

# This operation starts failover simulation on the gateway for the specified peering location.
az network vnet-gateway start-site-failover-test

# This operation stops failover simulation on the gateway for the specified peering location.
az network vnet-gateway stop-site-failover-test

# Update a virtual network gateway.
az network vnet-gateway update

# Place the CLI in a waiting state until a condition is met.
az network vnet-gateway wait

# Assign/Update AAD(Azure Active Directory) authentication to a virtual network gateway.
az network vnet-gateway aad assign

# Remove AAD(Azure Active Directory) authentication from a virtual network gateway.
az network vnet-gateway aad remove

# Show AAD(Azure Active Directory) authentication of a virtual network gateway.
az network vnet-gateway aad show

# Place the CLI in a waiting state until a condition is met.
az network vnet-gateway aad wait

# Assign the user or system managed identities.
az network vnet-gateway identity assign

# Remove the user or system managed identities.
az network vnet-gateway identity remove

# Show the details of managed identities.
az network vnet-gateway identity show

# Place the CLI in a waiting state until a condition is met.
az network vnet-gateway identity wait

# Add a virtual network gateway IPSec policy.
az network vnet-gateway ipsec-policy add

# Delete all IPsec policies on a virtual network gateway.
az network vnet-gateway ipsec-policy clear

# List IPSec policies associated with a virtual network gateway.
az network vnet-gateway ipsec-policy list

# Place the CLI in a waiting state until a condition is met.
az network vnet-gateway ipsec-policy wait

# Trigger abort migration for the virtual network gateway.
az network vnet-gateway migration abort

# Trigger commit migration for the virtual network gateway.
az network vnet-gateway migration commit

# Trigger execute migration for the virtual network gateway.
az network vnet-gateway migration execute

# Trigger prepare migration for the virtual network gateway.
az network vnet-gateway migration prepare

# Add nat rule in a virtual network gateway.
az network vnet-gateway nat-rule add

# List nat rule for a virtual network gateway.
az network vnet-gateway nat-rule list

# Remove nat rule from a virtual network gateway.
az network vnet-gateway nat-rule remove

# Place the CLI in a waiting state until a condition is met.
az network vnet-gateway nat-rule wait

# Start packet capture on a virtual network gateway.
az network vnet-gateway packet-capture start

# Stop packet capture on a virtual network gateway.
az network vnet-gateway packet-capture stop

# Place the CLI in a waiting state until a condition is met.
az network vnet-gateway packet-capture wait

# Revoke a certificate.
az network vnet-gateway revoked-cert create

# Delete a revoked certificate.
az network vnet-gateway revoked-cert delete

# Place the CLI in a waiting state until a condition is met.
az network vnet-gateway revoked-cert wait

# Upload a root certificate.
az network vnet-gateway root-cert create

# Delete a root certificate.
az network vnet-gateway root-cert delete

# Place the CLI in a waiting state until a condition is met.
az network vnet-gateway root-cert wait

# Generate VPN client configuration.
az network vnet-gateway vpn-client generate

# Get the VPN client connection health detail per P2S client connection of the virtual network gateway.
az network vnet-gateway vpn-client show-health

# Retrieve a pre-generated VPN client configuration.
az network vnet-gateway vpn-client show-url

# Set the VPN client connection ipsec policy per P2S client connection of the virtual network gateway.
az network vnet-gateway vpn-client ipsec-policy set

# Get the VPN client connection ipsec policy per P2S client connection of the virtual network gateway.
az network vnet-gateway vpn-client ipsec-policy show

# Place the CLI in a waiting state until a condition is met.
az network vnet-gateway vpn-client ipsec-policy wait
```
