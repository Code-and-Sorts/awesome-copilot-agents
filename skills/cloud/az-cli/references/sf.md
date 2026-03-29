# az sf

```bash
# Create a new application type on an Azure Service Fabric cluster.
az sf application-type create

# Delete an application type.
az sf application-type delete

# List application types of a given cluster.
az sf application-type list

# Show the properties of an application type on an Azure Service Fabric cluster.
az sf application-type show

# Create a new application type on an Azure Service Fabric cluster.
az sf application-type version create

# Delete an application type version.
az sf application-type version delete

# List version of a given application type.
az sf application-type version list

# Show the properties of an application type version on an Azure Service Fabric cluster.
az sf application-type version show

# Create a new application on an Azure Service Fabric cluster.
az sf application create

# Delete an application.
az sf application delete

# List applications of a given cluster.
az sf application list

# Show the properties of an application on an Azure Service Fabric cluster.
az sf application show

# Update an Azure Service Fabric application. This allows updating the application parameters and/or upgrade the application type version which will trigger an application upgrade.
az sf application update

# Add a new certificate to the Virtual Machine Scale Sets that make up the cluster to be used by hosted applications.
az sf application certificate add

# Create a new Azure Service Fabric cluster.
az sf cluster create

# List cluster resources.
az sf cluster list

# Gets a Service Fabric cluster resource.
az sf cluster show

# Add a common name or certificate thumbprint to the cluster for client authentication.
az sf cluster client-certificate add

# Remove client certificates or subject names used for authentication.
az sf cluster client-certificate remove

# Update the durability tier or VM SKU of a node type in the cluster.
az sf cluster durability update

# Add a new node type to a cluster.
az sf cluster node-type add

# Add nodes to a node type in a cluster.
az sf cluster node add

# Remove nodes from a node type in a cluster.
az sf cluster node remove

# Update the reliability tier for the primary node in a cluster.
az sf cluster reliability update

# Remove settings from a cluster.
az sf cluster setting remove

# Update the settings of a cluster.
az sf cluster setting set

# Change the upgrade type for a cluster.
az sf cluster upgrade-type set

# Create a new managed application type on an Azure Service Fabric managed cluster.
az sf managed-application-type create

# Delete a managed application type.
az sf managed-application-type delete

# List managed application types of a given managed cluster.
az sf managed-application-type list

# Show the properties of a managed application type on an Azure Service Fabric managed cluster.
az sf managed-application-type show

# Update a managed application type.
az sf managed-application-type update

# Create a new managed application type on an Azure Service Fabric managed cluster.
az sf managed-application-type version create

# Delete a managed application type version.
az sf managed-application-type version delete

# List versions of a given managed application type.
az sf managed-application-type version list

# Show the properties of a managed application type version on an Azure Service Fabric managed cluster.
az sf managed-application-type version show

# Update a managed application type version.
az sf managed-application-type version update

# Create a new managed application on an Azure Service Fabric managed cluster.
az sf managed-application create

# Delete a managed application.
az sf managed-application delete

# List managed applications of a given managed cluster.
az sf managed-application list

# Show the properties of a managed application on an Azure Service Fabric managed cluster.
az sf managed-application show

# Update an Azure Service Fabric managed application.
az sf managed-application update

# Create a managed cluster.
az sf managed-cluster create

# Delete a managed cluster.
az sf managed-cluster delete

# List managed clusters.
az sf managed-cluster list

# Show the properties of an Azure Service Fabric managed cluster.
az sf managed-cluster show

# Update a managed cluster.
az sf managed-cluster update

# Add a new client certificate to the managed cluster.
az sf managed-cluster client-certificate add

# Delete a client certificate from the managed cluster.
az sf managed-cluster client-certificate delete

# Add a network security rule to a managed cluster.
az sf managed-cluster network-security-rule add

# Delete a network security rule from a managed cluster.
az sf managed-cluster network-security-rule delete

# Get a network security rule to a managed cluster.
az sf managed-cluster network-security-rule get

# List network security rules in a cluster.
az sf managed-cluster network-security-rule list

# Update a network security rule to a managed cluster.
az sf managed-cluster network-security-rule update

# Create node type on a managed cluster.
az sf managed-node-type create

# Delete node type from a cluster.
az sf managed-node-type delete

# List node types of a managed cluster.
az sf managed-node-type list

# Show the properties of a node type.
az sf managed-node-type show

# Update node type on a managed cluster.
az sf managed-node-type update

# Delete nodes of a node type.
az sf managed-node-type node delete

# Reimage nodes of a node type.
az sf managed-node-type node reimage

# Restart nodes of a node type.
az sf managed-node-type node restart

# Add an extension to the node type.
az sf managed-node-type vm-extension add

# Delete an extension from the node type.
az sf managed-node-type vm-extension delete

# Add a secret to the node type.
az sf managed-node-type vm-secret add

# Create a new managed service on an Azure Service Fabric managed cluster.
az sf managed-service create

# Delete a managed service.
az sf managed-service delete

# List managed services of a given managed application.
az sf managed-service list

# Get a service.
az sf managed-service show

# Update a managed service.
az sf managed-service update

# Create a new managed service correlation scheme on an Azure Service Fabric managed cluster.
az sf managed-service correlation-scheme create

# Delete a managed service correlation scheme.
az sf managed-service correlation-scheme delete

# Update a managed service correlation scheme.
az sf managed-service correlation-scheme update

# Create a new managed service load metric on an Azure Service Fabric managed cluster.
az sf managed-service load-metrics create

# Delete a managed service.
az sf managed-service load-metrics delete

# Update a managed service.
az sf managed-service load-metrics update

# Create a new service on an Azure Service Fabric cluster.
az sf service create

# Delete a service.
az sf service delete

# List services of a given application.
az sf service list

# Get a service.
az sf service show
```
