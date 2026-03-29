# az vmware

```bash
# List addons in a private cloud.
az vmware addon list

# Create an Arc addon for a private cloud.
az vmware addon arc create

# Delete an Arc addon for a private cloud.
az vmware addon arc delete

# Show details of an Arc addon for a private cloud.
az vmware addon arc show

# Update an Arc addon for a private cloud.
az vmware addon arc update

# Create a HCX addon for a private cloud.
az vmware addon hcx create

# Delete a HCX addon for a private cloud.
az vmware addon hcx delete

# Show details of a HCX addon for a private cloud.
az vmware addon hcx show

# Update a HCX addon for a private cloud.
az vmware addon hcx update

# Create a Site Recovery Manager (SRM) addon for a private cloud.
az vmware addon srm create

# Delete a Site Recovery Manager (SRM) addon for a private cloud.
az vmware addon srm delete

# Show details of a Site Recovery Manager (SRM) addon.
az vmware addon srm show

# Update a Site Recovery Manager (SRM) addon for a private cloud.
az vmware addon srm update

# Create a vSphere Replication (VR) addon for a private cloud.
az vmware addon vr create

# Delete a vSphere Replication (VR) addon for a private cloud.
az vmware addon vr delete

# Show details of a vSphere Replication (VR) addon for a private cloud.
az vmware addon vr show

# Update a vSphere Replication (VR) addon for a private cloud.
az vmware addon vr update

# Create an ExpressRoute Circuit Authorization in a private cloud.
az vmware authorization create

# Delete an ExpressRoute Circuit Authorization in a private cloud.
az vmware authorization delete

# List ExpressRoute Circuit Authorizations in a private cloud.
az vmware authorization list

# Get an ExpressRoute Circuit Authorization by name in a private cloud.
az vmware authorization show

# Place the CLI in a waiting state until a condition is met.
az vmware authorization wait

# Create a cloud link in a private cloud.
az vmware cloud-link create

# Delete a cloud link in a private cloud.
az vmware cloud-link delete

# List cloud link in a private cloud.
az vmware cloud-link list

# Show details of a cloud link in a private cloud.
az vmware cloud-link show

# Update a cloud link in a private cloud.
az vmware cloud-link update

# Place the CLI in a waiting state until a condition is met.
az vmware cloud-link wait

# Create a cluster in a private cloud.
az vmware cluster create

# Delete a cluster in a private cloud, excluding the first cluster which is the default management cluster.
az vmware cluster delete

# List clusters in a private cloud, excluding the first cluster which is the default management cluster.
az vmware cluster list

# List hosts by zone in a cluster in a private cloud, including the first cluster which is the default management cluster.
az vmware cluster list-zones

# Get a cluster by name in a private cloud, excluding the first cluster which is the default management cluster.
az vmware cluster show

# Update a cluster in a private cloud, excluding the first cluster which is the default management cluster.
az vmware cluster update

# Place the CLI in a waiting state until a condition is met.
az vmware cluster wait

# List hosts in a cluster.
az vmware cluster host list

# Get a host by name in a cluster.
az vmware cluster host show

# Delete a datastore in a private cloud cluster.
az vmware datastore delete

# List datastores in a private cloud cluster.
az vmware datastore list

# Show details of a datastore in a private cloud cluster.
az vmware datastore show

# Place the CLI in a waiting state until a condition is met.
az vmware datastore wait

# Create a VMFS datastore in a private cloud cluster using Microsoft.StoragePool provided iSCSI target.
az vmware datastore disk-pool-volume create

# Create an Elastic SAN volume in a private cloud cluster using Microsoft.ElasticSan provider.
az vmware datastore elastic-san-volume create

# Create a new Microsoft.NetApp provided NetApp volume in a private cloud cluster.
az vmware datastore netapp-volume create

# Create a Pure Storage volume in a private cloud cluster using PureStorage.Block provider.
az vmware datastore pure-storage-volume create

# Create a global reach connection in a private cloud.
az vmware global-reach-connection create

# Delete a global reach connection in a private cloud.
az vmware global-reach-connection delete

# List global reach connections in a private cloud.
az vmware global-reach-connection list

# Get a global reach connection by name in a private cloud.
az vmware global-reach-connection show

# Place the CLI in a waiting state until a condition is met.
az vmware global-reach-connection wait

# Create an HCX Enterprise Site in a private cloud.
az vmware hcx-enterprise-site create

# Delete an HCX Enterprise Site in a private cloud.
az vmware hcx-enterprise-site delete

# List HCX Enterprise Sites in a private cloud.
az vmware hcx-enterprise-site list

# Get an HCX Enterprise Site by name in a private cloud.
az vmware hcx-enterprise-site show

# Create an IscsiPath in a private cloud.
az vmware iscsi-path create

# Delete an IscsiPath in a private cloud.
az vmware iscsi-path delete

# List IscsiPath resources in a private cloud.
az vmware iscsi-path list

# Get an IscsiPath in a private cloud.
az vmware iscsi-path show

# Place the CLI in a waiting state until a condition is met.
az vmware iscsi-path wait

# Create a License.
az vmware license create

# Delete a License.
az vmware license delete

# Just like ArmResourceActionSync, but with no request body.
az vmware license get-property

# List License resources by PrivateCloud.
az vmware license list

# Get a License.
az vmware license show

# Update a License.
az vmware license update

# Place the CLI in a waiting state until a condition is met.
az vmware license wait

# Return quota for subscription by region.
az vmware location check-quota-availability

# Return trial status for subscription by region.
az vmware location check-trial-availability

# List placement policies in a private cloud cluster.
az vmware placement-policy list

# Get a placement policy by name in a private cloud cluster.
az vmware placement-policy show

# Create a VM Host placement policy in a private cloud cluster.
az vmware placement-policy vm-host create

# Delete a VM Host placement policy in a private cloud cluster.
az vmware placement-policy vm-host delete

# Update a VM Host placement policy in a private cloud cluster.
az vmware placement-policy vm-host update

# Create a VM placement policy in a private cloud cluster.
az vmware placement-policy vm create

# Delete a VM placement policy in a private cloud cluster.
az vmware placement-policy vm delete

# Update a VM placement policy in a private cloud cluster.
az vmware placement-policy vm update

# Create a private cloud.
az vmware private-cloud create

# Delete a private cloud.
az vmware private-cloud delete

# Delete the VCF license from a private cloud.
az vmware private-cloud delete-vcf-license

# Disable a Customer Managed Keys Encryption from a private cloud.
az vmware private-cloud disable-cmk-encryption

# Enable a Customer Managed Keys Encryption to a private cloud.
az vmware private-cloud enable-cmk-encryption

# Get the license for the private cloud.
az vmware private-cloud get-vcf-license

# List the private clouds.
az vmware private-cloud list

# List the admin credentials for the private cloud.
az vmware private-cloud list-admin-credentials

# Rotate the NSX-T Manager password.
az vmware private-cloud rotate-nsxt-password

# Rotate the vCenter password.
az vmware private-cloud rotate-vcenter-password

# Get a private cloud.
az vmware private-cloud show

# Update a private cloud.
az vmware private-cloud update

# Place the CLI in a waiting state until a condition is met.
az vmware private-cloud wait

# Create a vCenter Single Sign On Identity Source to a private cloud.
az vmware private-cloud identity-source create

# Delete a vCenter Single Sign On Identity Source of a private cloud.
az vmware private-cloud identity-source delete

# List vCenter Single Sign On Identity Sources of a private cloud.
az vmware private-cloud identity-source list

# Show a vCenter Single Sign On Identity Source of a private cloud.
az vmware private-cloud identity-source show

# Update a vCenter Single Sign On Identity Source of a private cloud.
az vmware private-cloud identity-source update

# Place the CLI in a waiting state until a condition is met.
az vmware private-cloud identity-source wait

# Assign a Managed Identity in a private cloud.
az vmware private-cloud identity assign

# Remove a Managed Identity in a private cloud.
az vmware private-cloud identity remove

# Show Managed Identities in a private cloud.
az vmware private-cloud identity show

# Initiate maintenance readiness checks.
az vmware private-cloud maintenance initiate-check

# List Maintenance resources by subscription ID.
az vmware private-cloud maintenance list

# Reschedule a maintenance.
az vmware private-cloud maintenance reschedule

# Schedule a maintenance.
az vmware private-cloud maintenance schedule

# Get a Maintenance.
az vmware private-cloud maintenance show

# List ProvisionedNetwork resources by PrivateCloud.
az vmware provisioned-network list

# Get a provisioned network by name in a private cloud.
az vmware provisioned-network show

# Create a Pure Storage policy for a private cloud.
az vmware pure-storage-policy create

# Delete a Pure Storage policy for a private cloud.
az vmware pure-storage-policy delete

# List Pure Storage policy resources by PrivateCloud.
az vmware pure-storage-policy list

# Show details of a Pure Storage policy for a private cloud.
az vmware pure-storage-policy show

# List script cmdlet resources available for a private cloud to create a script execution resource on a private cloud.
az vmware script-cmdlet list

# Get information about a script cmdlet resource in a specific package on a private cloud.
az vmware script-cmdlet show

# Create or update a script execution in a private cloud.
az vmware script-execution create

# Delete a ScriptExecution in a private cloud.
az vmware script-execution delete

# Return the logs for a script execution resource in a private cloud.
az vmware script-execution get-execution-log

# List script executions in a private cloud.
az vmware script-execution list

# Get an script execution by name in a private cloud.
az vmware script-execution show

# Place the CLI in a waiting state until a condition is met.
az vmware script-execution wait

# List script packages available to run on the private cloud.
az vmware script-package list

# Get a script package available to run on a private cloud.
az vmware script-package show

# List available SKUs in a subscription.
az vmware skus list

# List of virtual machines in a private cloud cluster.
az vmware vm list

# Enable or disable DRS-driven VM movement restriction.
az vmware vm restrict-movement

# Get a virtual machine by id in a private cloud cluster.
az vmware vm show

# List dhcp in a private cloud workload network.
az vmware workload-network dhcp list

# Get dhcp by id in a private cloud workload network.
az vmware workload-network dhcp show

# Create DHCP by ID in a private cloud workload network.
az vmware workload-network dhcp relay create

# Delete DHCP by ID in a private cloud workload network.
az vmware workload-network dhcp relay delete

# Create DHCP by ID in a private cloud workload network.
az vmware workload-network dhcp relay update

# Create DHCP by ID in a private cloud workload network.
az vmware workload-network dhcp server create

# Delete DHCP by ID in a private cloud workload network.
az vmware workload-network dhcp server delete

# Update DHCP by ID in a private cloud workload network.
az vmware workload-network dhcp server update

# Create a DNS service by id in a private cloud workload network.
az vmware workload-network dns-service create

# Delete a DNS service by id in a private cloud workload network.
az vmware workload-network dns-service delete

# List of DNS services in a private cloud workload network.
az vmware workload-network dns-service list

# Get a DNS service by id in a private cloud workload network.
az vmware workload-network dns-service show

# Update a DNS service by id in a private cloud workload network.
az vmware workload-network dns-service update

# Place the CLI in a waiting state until a condition is met.
az vmware workload-network dns-service wait

# Create a DNS zone by id in a private cloud workload network.
az vmware workload-network dns-zone create

# Delete a DNS zone by id in a private cloud workload network.
az vmware workload-network dns-zone delete

# List of DNS zones in a private cloud workload network.
az vmware workload-network dns-zone list

# Get a DNS zone by id in a private cloud workload network.
az vmware workload-network dns-zone show

# Update a DNS zone by id in a private cloud workload network.
az vmware workload-network dns-zone update

# Place the CLI in a waiting state until a condition is met.
az vmware workload-network dns-zone wait

# List of gateways in a private cloud workload network.
az vmware workload-network gateway list

# Get a gateway by id in a private cloud workload network.
az vmware workload-network gateway show

# Create a port mirroring profile by id in a private cloud workload network.
az vmware workload-network port-mirroring create

# Delete a port mirroring profile by id in a private cloud workload network.
az vmware workload-network port-mirroring delete

# List of port mirroring profiles in a private cloud workload network.
az vmware workload-network port-mirroring list

# Get a port mirroring profile by id in a private cloud workload network.
az vmware workload-network port-mirroring show

# Update a port mirroring profile by id in a private cloud workload network.
az vmware workload-network port-mirroring update

# Place the CLI in a waiting state until a condition is met.
az vmware workload-network port-mirroring wait

# Create a Public IP Block by id in a private cloud workload network.
az vmware workload-network public-ip create

# Delete a Public IP Block by id in a private cloud workload network.
az vmware workload-network public-ip delete

# List of Public IP Blocks in a private cloud workload network.
az vmware workload-network public-ip list

# Get a Public IP Block by id in a private cloud workload network.
az vmware workload-network public-ip show

# Place the CLI in a waiting state until a condition is met.
az vmware workload-network public-ip wait

# Create a segment by id in a private cloud workload network.
az vmware workload-network segment create

# Delete a segment by id in a private cloud workload network.
az vmware workload-network segment delete

# List of segments in a private cloud workload network.
az vmware workload-network segment list

# Get a segment by id in a private cloud workload network.
az vmware workload-network segment show

# Update a segment by id in a private cloud workload network.
az vmware workload-network segment update

# Place the CLI in a waiting state until a condition is met.
az vmware workload-network segment wait

# Create a vm group by id in a private cloud workload network.
az vmware workload-network vm-group create

# Delete a vm group by id in a private cloud workload network.
az vmware workload-network vm-group delete

# List of vm groups in a private cloud workload network.
az vmware workload-network vm-group list

# Get a vm group by id in a private cloud workload network.
az vmware workload-network vm-group show

# Update a vm group by id in a private cloud workload network.
az vmware workload-network vm-group update

# Place the CLI in a waiting state until a condition is met.
az vmware workload-network vm-group wait

# List of virtual machines in a private cloud workload network.
az vmware workload-network vm list

# Get a virtual machine by id in a private cloud workload network.
az vmware workload-network vm show
```
