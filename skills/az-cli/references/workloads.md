# az workloads

```bash
# Show the recommended SAP Availability Zone Pair Details for your region.
az workloads sap-availability-zone-detail

# Show the SAP Disk Configuration Layout prod/non-prod SAP System.
az workloads sap-disk-configuration

# Show SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier.
az workloads sap-sizing-recommendation

# Show a list of SAP supported SKUs for ASCS, Application and Database tier.
az workloads sap-supported-sku

# Create a SAP monitor for the specified subscription, resource group, and resource name.
az workloads monitor create

# Delete a SAP monitor with the specified subscription, resource group, and SAP monitor name.
az workloads monitor delete

# List a list of SAP monitors in the specified resource group.
az workloads monitor list

# Show properties of a SAP monitor for the specified subscription, resource group, and resource name.
az workloads monitor show

# Update a SAP monitor for the specified subscription, resource group, and resource name.
az workloads monitor update

# Place the CLI in a waiting state until a condition is met.
az workloads monitor wait

# Create a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
az workloads monitor provider-instance create

# Delete a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
az workloads monitor provider-instance delete

# List a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances.
az workloads monitor provider-instance list

# Show properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
az workloads monitor provider-instance show

# Place the CLI in a waiting state until a condition is met.
az workloads monitor provider-instance wait

# Create a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name.
az workloads monitor sap-landscape-monitor create

# Delete a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name.
az workloads monitor sap-landscape-monitor delete

# List configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
az workloads monitor sap-landscape-monitor list

# Show configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
az workloads monitor sap-landscape-monitor show

# Update a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name.
az workloads monitor sap-landscape-monitor update

# List the SAP Application Server Instance resources for a given Virtual Instance for SAP solutions resource.
az workloads sap-application-server-instance list

# Show the SAP Application Server Instance corresponding to the Virtual Instance for SAP solutions resource.
az workloads sap-application-server-instance show

# Starts the SAP Application Server Instance.
az workloads sap-application-server-instance start

# Stops the SAP Application Server Instance.
az workloads sap-application-server-instance stop

# Update the SAP Application Server Instance resource. This will be used by service only. PUT by end user will return a Bad Request error.
az workloads sap-application-server-instance update

# List the SAP Central Services Instance resource for the given Virtual Instance for SAP solutions resource.
az workloads sap-central-instance list

# Show the SAP Central Services Instance resource.
az workloads sap-central-instance show

# Starts the SAP Central Services Instance.
az workloads sap-central-instance start

# Stops the SAP Central Services Instance.
az workloads sap-central-instance stop

# Update the SAP Central Services Instance resource. This will be used by service only. PUT operation on this resource by end user will return a Bad Request error.
az workloads sap-central-instance update

# List the Database resources associated with a Virtual Instance for SAP solutions resource.
az workloads sap-database-instance list

# Show the SAP Database Instance resource.
az workloads sap-database-instance show

# Starts the database instance of the SAP system.
az workloads sap-database-instance start

# Stops the database instance of the SAP system.
az workloads sap-database-instance stop

# Update the Database resource corresponding to the Virtual Instance for SAP solutions resource.This will be used by service only. PUT by end user will return a Bad Request error.
az workloads sap-database-instance update

# Create a Virtual Instance for SAP solutions (VIS) resource.
az workloads sap-virtual-instance create

# Delete a Virtual Instance for SAP solutions resource and its child resources, that is the associated Central Services Instance, Application Server Instances and Database Instance.
az workloads sap-virtual-instance delete

# List all Virtual Instances for SAP solutions resources in a Resource Group.
az workloads sap-virtual-instance list

# Show a Virtual Instance for SAP solutions resource.
az workloads sap-virtual-instance show

# Starts the SAP application, that is the Central Services instance and Application server instances.
az workloads sap-virtual-instance start

# Stops the SAP Application, that is the Application server instances and Central Services instance.
az workloads sap-virtual-instance stop

# Update a Virtual Instance for SAP solutions (VIS) resource.
az workloads sap-virtual-instance update

# Place the CLI in a waiting state until a condition is met.
az workloads sap-virtual-instance wait
```
