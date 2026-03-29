# az networkfabric

```bash
# Create a Access Control List resource.
az networkfabric acl create

# Delete the Access Control List resource.
az networkfabric acl delete

# List all Access Control Lists in the provided resource group or subscription.
az networkfabric acl list

# Show details of the provided Access Control List resource.
az networkfabric acl show

# Update the Access Control List resource.
az networkfabric acl update

# Place the CLI in a waiting state until a condition is met.
az networkfabric acl wait

# Create a Network Fabric Controller resource.
az networkfabric controller create

# Delete the Network Fabric Controller resource.
az networkfabric controller delete

# List all Network Fabric Controllers in the provided resource group or subscription.
az networkfabric controller list

# Show details of the provided Network Fabric Controller resource.
az networkfabric controller show

# Update the Network Fabric Controller resource.
az networkfabric controller update

# Place the CLI in a waiting state until a condition is met.
az networkfabric controller wait

# List all Network Devices in the provided resource group or subscription.
az networkfabric device list

# Reboot the Network Device.
az networkfabric device reboot

# Refreshes the configuration the Network Device.
az networkfabric device refresh-configuration

# Updates the Network Device to use the latest passwords. Does not generate new passwords. Allows network devices missed during a previous password rotation to be brought back into sync.
az networkfabric device resync-password

# Run the RO Command on the Network Device.
az networkfabric device run-ro

# Run the RW Command on the Network Device.
az networkfabric device run-rw

# Show details of the provided Network Device resource.
az networkfabric device show

# Update the Network Device resource.
az networkfabric device update

# Updates the Administrative state of the Network Device.
az networkfabric device update-admin-state

# Upgrades the version of the Network Device.
az networkfabric device upgrade

# Place the CLI in a waiting state until a condition is met.
az networkfabric device wait

# Create a External Network resource.
az networkfabric externalnetwork create

# Delete the External Network resource.
az networkfabric externalnetwork delete

# List all External Networks in the provided resource group.
az networkfabric externalnetwork list

# Show details of the provided External Network resource.
az networkfabric externalnetwork show

# Update the External Networks resource.
az networkfabric externalnetwork update

# Update the admin state of the provided External Network resource.
az networkfabric externalnetwork update-admin-state

# Place the CLI in a waiting state until a condition is met.
az networkfabric externalnetwork wait

# Post action: Returns a status of commit batch operation.
az networkfabric fabric commit-batch-status

# Atomic update of the given Network Fabric instance. Sync update of NFA resources at Fabric level.
az networkfabric fabric commit-configuration

# Create a Network Fabric resource.
az networkfabric fabric create

# Delete the Network Fabric resource.
az networkfabric fabric delete

# Deprovisions the underlying resources in the given Network Fabric instance.
az networkfabric fabric deprovision

# Post action: Discards a Batch operation in progress.
az networkfabric fabric discard-commit-batch

# List all Network Fabrics in the provided resource group or subscription.
az networkfabric fabric list

# Post action: Triggers network fabric lock operation.
az networkfabric fabric lock-fabric

# Provisions the underlying resources in the given Network Fabric instance.
az networkfabric fabric provision

# Updates the Terminal Server and all Network Devices to use the latest passwords. Does not generate new passwords.  Allows devices to be brought back in sync after a partially successful password rotation.
az networkfabric fabric resync-password

# Creates new passwords, then updates the Terminal Server and Network Devices to use the new passwords.  Note that disabled devices cannot be updated and must be resynchronized with the new passwords once they are enabled.  Fails if any of the devices could not be updated with the new password. Failed devices should be resynchronized with the new passwords once possible.
az networkfabric fabric rotate-password

# Show details of the provided Network Fabric resource.
az networkfabric fabric show

# Update the Network Fabric resource.
az networkfabric fabric update

# Upgrades the version of the underlying resources in the given Network Fabric instance.
az networkfabric fabric upgrade

# Validates the configuration of the underlying resources in the given Network Fabric instance.
az networkfabric fabric validate-configuration

# Post action: Triggers view of network fabric configuration.
az networkfabric fabric view-device-configuration

# Place the CLI in a waiting state until a condition is met.
az networkfabric fabric wait

# List all Network Interfaces in the provided resource group.
az networkfabric interface list

# Show details of the provided Network Interface resource.
az networkfabric interface show

# Update certain properties of the Network Interface resource.
az networkfabric interface update

# Update the admin state of the Network Interface.
az networkfabric interface update-admin-state

# Place the CLI in a waiting state until a condition is met.
az networkfabric interface wait

# Create a Internal Network resource.
az networkfabric internalnetwork create

# Delete the Internal Network resource.
az networkfabric internalnetwork delete

# List all Internal Networks in the provided resource group.
az networkfabric internalnetwork list

# Show details of the provided Internal Network resource.
az networkfabric internalnetwork show

# Update the Internal Network resource.
az networkfabric internalnetwork update

# Update the admin state of the provided Internal Network resource.
az networkfabric internalnetwork update-admin-state

# Place the CLI in a waiting state until a condition is met.
az networkfabric internalnetwork wait

# List all Internet Gateways in the provided resource group or subscription.
az networkfabric internetgateway list

# Show details of the provided Internet Gateway resource.
az networkfabric internetgateway show

# Update the Internet Gateway resource.
az networkfabric internetgateway update

# Place the CLI in a waiting state until a condition is met.
az networkfabric internetgateway wait

# Create an Internet Gateway Rule resource.
az networkfabric internetgatewayrule create

# Delete the Internet Gateway Rule resource.
az networkfabric internetgatewayrule delete

# List all Internet Gateway Rules in the provided resource group or subscription.
az networkfabric internetgatewayrule list

# Show details of the provided Internet Gateway Rule resource.
az networkfabric internetgatewayrule show

# Update the Internet Gateway Rule resource.
az networkfabric internetgatewayrule update

# Place the CLI in a waiting state until a condition is met.
az networkfabric internetgatewayrule wait

# Create a Ip Community resource.
az networkfabric ipcommunity create

# Delete the Ip Community resource.
az networkfabric ipcommunity delete

# List all Ip Communities in the provided resource group or subscription.
az networkfabric ipcommunity list

# Show details of the provided Ip Community resource.
az networkfabric ipcommunity show

# Update to update certain properties of the IP Community resource.
az networkfabric ipcommunity update

# Place the CLI in a waiting state until a condition is met.
az networkfabric ipcommunity wait

# Create a Ip Extended Community resource.
az networkfabric ipextendedcommunity create

# Delete the Ip Extended Community resource.
az networkfabric ipextendedcommunity delete

# List all Ip Extended Communities in the provided resource group or subscription.
az networkfabric ipextendedcommunity list

# Show details of the provided Ip Extended Community resource.
az networkfabric ipextendedcommunity show

# Update to update certain properties of the IP Extended Community resource.
az networkfabric ipextendedcommunity update

# Place the CLI in a waiting state until a condition is met.
az networkfabric ipextendedcommunity wait

# Create a Ip Prefix resource.
az networkfabric ipprefix create

# Delete the Ip Prefix resource.
az networkfabric ipprefix delete

# List all Ip Prefixes in the provided resource group or subscription.
az networkfabric ipprefix list

# Show details of the provided Ip Prefix resource.
az networkfabric ipprefix show

# Update to update certain properties of the IP Prefix resource.
az networkfabric ipprefix update

# Place the CLI in a waiting state until a condition is met.
az networkfabric ipprefix wait

# Create a L2 Isolation Domain resource.
az networkfabric l2domain create

# Delete the L2 Isolation Domain resource.
az networkfabric l2domain delete

# List all L2 Isolation Domains in the provided resource group or subscription.
az networkfabric l2domain list

# Show details of the provided L2 Isolation Domain resource.
az networkfabric l2domain show

# Update the L2 Isolation Domain resource.
az networkfabric l2domain update

# Enables isolation domain across the fabric or on specified racks.
az networkfabric l2domain update-admin-state

# Place the CLI in a waiting state until a condition is met.
az networkfabric l2domain wait

# Create a L3 Isolation Domain resource.
az networkfabric l3domain create

# Delete the L3 Isolation Domain resource.
az networkfabric l3domain delete

# List all L3 Isolation Domains in the provided resource group or subscription.
az networkfabric l3domain list

# Show details of the provided L3 Isolation Domain resource.
az networkfabric l3domain show

# Update to update certain properties of the L3 Isolation Domain resource.
az networkfabric l3domain update

# Enables racks for this Isolation Domain.
az networkfabric l3domain update-admin-state

# Place the CLI in a waiting state until a condition is met.
az networkfabric l3domain wait

# Create a Neighbor Group resource.
az networkfabric neighborgroup create

# Delete the Neighbor Group resource.
az networkfabric neighborgroup delete

# List all Neighbor Groups in the provided resource group or subscription.
az networkfabric neighborgroup list

# Show details of the provided Neighbor Group resource.
az networkfabric neighborgroup show

# Update the Neighbor Group resource.
az networkfabric neighborgroup update

# Place the CLI in a waiting state until a condition is met.
az networkfabric neighborgroup wait

# Create NetworkMonitor resource.
az networkfabric networkmonitor create

# Delete layer 2 connectivity between compute nodes by managed by named NetworkMonitor name.
az networkfabric networkmonitor delete

# List NetworkMonitors list by subscription GET method.
az networkfabric networkmonitor list

# Get NetworkMonitor GET method.
az networkfabric networkmonitor show

# Update to update certain properties of the NetworkMonitor resource.
az networkfabric networkmonitor update

# Place the CLI in a waiting state until a condition is met.
az networkfabric networkmonitor wait

# Create a Network To Network Interconnect resource.
az networkfabric nni create

# Delete the Network To Network Interconnect resource.
az networkfabric nni delete

# List all Network To Network Interconnects in the provided resource group.
az networkfabric nni list

# Show details of the provided Network To Network Interconnect resource.
az networkfabric nni show

# Update the Network to Network interconnect resource.
az networkfabric nni update

# Place the CLI in a waiting state until a condition is met.
az networkfabric nni wait

# List all Network Packet Brokers in the provided resource group or subscription.
az networkfabric npb list

# Show details of the provided Network Packet Broker resource.
az networkfabric npb show

# List all Network Racks in the provided resource group or subscription.
az networkfabric rack list

# Show details of the provided Network Rack resource.
az networkfabric rack show

# Create a Route Policy resource.
az networkfabric routepolicy create

# Delete the Route Policy resource.
az networkfabric routepolicy delete

# List all Route Policies in the provided resource group or subscription.
az networkfabric routepolicy list

# Show details of the provided Route Policy resource.
az networkfabric routepolicy show

# Update the Route Policy resource.
az networkfabric routepolicy update

# Place the CLI in a waiting state until a condition is met.
az networkfabric routepolicy wait

# Create a Network Tap resource.
az networkfabric tap create

# Delete the Network Tap resource.
az networkfabric tap delete

# List all Network Taps in the provided resource group or subscription.
az networkfabric tap list

# Implements the operation to the underlying resources.
az networkfabric tap resync

# Show details of the provided Network Tap resource.
az networkfabric tap show

# Update the Network Tap resource.
az networkfabric tap update

# Enable/Disable a network tap.
az networkfabric tap update-admin-state

# Place the CLI in a waiting state until a condition is met.
az networkfabric tap wait

# Create a Network Tap Rule resource.
az networkfabric taprule create

# Delete the Network Tap Rule resource.
az networkfabric taprule delete

# List all Network Tap Rules in the provided resource group or subscription.
az networkfabric taprule list

# Resync taprule with latest configuration.
az networkfabric taprule resync

# Show details of the provided Network Tap Rule resource.
az networkfabric taprule show

# Update the Network Tap Rule resource.
az networkfabric taprule update

# Place the CLI in a waiting state until a condition is met.
az networkfabric taprule wait
```
