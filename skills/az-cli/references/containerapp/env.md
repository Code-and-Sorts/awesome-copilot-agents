# az containerapp env

```bash
# Create a Container Apps environment.
az containerapp env create

# Delete a Container Apps environment.
az containerapp env delete

# List Container Apps environments by subscription or resource group.
az containerapp env list

# List usages of quotas for specific managed environment.
az containerapp env list-usages

# Show details of a Container Apps environment.
az containerapp env show

# Update a Container Apps environment.
az containerapp env update

# Create a managed certificate.
az containerapp env certificate create

# Delete a certificate from the Container Apps environment.
az containerapp env certificate delete

# List certificates for an environment.
az containerapp env certificate list

# Add or update a certificate.
az containerapp env certificate upload

# Initializes Dapr components and dev services for an environment.
az containerapp env dapr-component init

# List Dapr components for an environment.
az containerapp env dapr-component list

# Remove a Dapr component from an environment.
az containerapp env dapr-component remove

# Create or update a Dapr component.
az containerapp env dapr-component set

# Show the details of a Dapr component.
az containerapp env dapr-component show

# Create resiliency policies for a dapr component.
az containerapp env dapr-component resiliency create

# Delete resiliency policies for a dapr component.
az containerapp env dapr-component resiliency delete

# List resiliency policies for a dapr component.
az containerapp env dapr-component resiliency list

# Show resiliency policies for a dapr component.
az containerapp env dapr-component resiliency show

# Update resiliency policies for a dapr component.
az containerapp env dapr-component resiliency update

# Command to create DotNet component to enable Aspire Dashboard. Supported DotNet component type is Aspire Dashboard.
az containerapp env dotnet-component create

# Command to delete DotNet component to disable Aspire Dashboard.
az containerapp env dotnet-component delete

# Command to list DotNet components within the environment.
az containerapp env dotnet-component list

# Command to show DotNet component in environment.
az containerapp env dotnet-component show

# Create a new http route config.
az containerapp env http-route-config create

# Delete a http route config.
az containerapp env http-route-config delete

# List the http route configs in the environment.
az containerapp env http-route-config list

# Show a http route config.
az containerapp env http-route-config show

# Update a http route config.
az containerapp env http-route-config update

# Assign managed identity to a managed environment.
az containerapp env identity assign

# Remove a managed identity from a managed environment.
az containerapp env identity remove

# Show managed identities of a managed environment.
az containerapp env identity show

# List all Java components within the environment.
az containerapp env java-component list

# Command to create the Admin for Spring.
az containerapp env java-component admin-for-spring create

# Command to delete the Admin for Spring.
az containerapp env java-component admin-for-spring delete

# Command to show the Admin for Spring.
az containerapp env java-component admin-for-spring show

# Command to update the Admin for Spring.
az containerapp env java-component admin-for-spring update

# Command to create the Config Server for Spring.
az containerapp env java-component config-server-for-spring create

# Command to delete the Config Server for Spring.
az containerapp env java-component config-server-for-spring delete

# Command to show the Config Server for Spring.
az containerapp env java-component config-server-for-spring show

# Command to update the Config Server for Spring.
az containerapp env java-component config-server-for-spring update

# Command to create the Eureka Server for Spring.
az containerapp env java-component eureka-server-for-spring create

# Command to delete the Eureka Server for Spring.
az containerapp env java-component eureka-server-for-spring delete

# Command to show the Eureka Server for Spring.
az containerapp env java-component eureka-server-for-spring show

# Command to update the Eureka Server for Spring.
az containerapp env java-component eureka-server-for-spring update

# Command to create the Gateway for Spring.
az containerapp env java-component gateway-for-spring create

# Command to delete the Gateway for Spring.
az containerapp env java-component gateway-for-spring delete

# Command to show the Gateway for Spring.
az containerapp env java-component gateway-for-spring show

# Command to update the Gateway for Spring.
az containerapp env java-component gateway-for-spring update

# Command to create the Nacos.
az containerapp env java-component nacos create

# Command to delete the Nacos.
az containerapp env java-component nacos delete

# Command to show the Nacos.
az containerapp env java-component nacos show

# Command to update the Nacos.
az containerapp env java-component nacos update

# Show past environment logs and/or print logs in real time (with the --follow parameter).
az containerapp env logs show

# Add Planned Maintenance to a Container App Environment.
az containerapp env maintenance-config add

# List Planned Maintenance in a Container App Environment.
az containerapp env maintenance-config list

# Remove Planned Maintenance in a Container App Environment.
az containerapp env maintenance-config remove

# Update Planned Maintenance in a Container App Environment.
az containerapp env maintenance-config update

# Enable the premium ingress settings for the environment.
az containerapp env premium-ingress add

# Remove the ingress settings and restores the system to default values.
az containerapp env premium-ingress remove

# Show the premium ingress settings for the environment.
az containerapp env premium-ingress show

# Update the premium ingress settings for the environment.
az containerapp env premium-ingress update

# List the storages for an environment.
az containerapp env storage list

# Remove a storage from an environment.
az containerapp env storage remove

# Create or update a storage.
az containerapp env storage set

# Show the details of a storage.
az containerapp env storage show

# Delete container apps environment telemetry app insights settings.
az containerapp env telemetry app-insights delete

# Create or update container apps environment telemetry app insights settings.
az containerapp env telemetry app-insights set

# Show container apps environment telemetry app insights settings.
az containerapp env telemetry app-insights show

# Delete container apps environment telemetry data dog settings.
az containerapp env telemetry data-dog delete

# Create or update container apps environment telemetry data dog settings.
az containerapp env telemetry data-dog set

# Show container apps environment telemetry data dog settings.
az containerapp env telemetry data-dog show

# Add container apps environment telemetry otlp settings.
az containerapp env telemetry otlp add

# List container apps environment telemetry otlp settings.
az containerapp env telemetry otlp list

# Remove container apps environment telemetry otlp settings.
az containerapp env telemetry otlp remove

# Show container apps environment telemetry otlp settings.
az containerapp env telemetry otlp show

# Update container apps environment telemetry otlp settings.
az containerapp env telemetry otlp update

# Create a workload profile in a Container Apps environment.
az containerapp env workload-profile add

# Delete a workload profile from a Container Apps environment.
az containerapp env workload-profile delete

# List the workload profiles from a Container Apps environment.
az containerapp env workload-profile list

# List the supported workload profiles in a region.
az containerapp env workload-profile list-supported

# Show a workload profile from a Container Apps environment.
az containerapp env workload-profile show

# Update an existing workload profile in a Container Apps environment.
az containerapp env workload-profile update
```
