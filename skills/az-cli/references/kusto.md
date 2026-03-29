# az kusto

```bash
# Create an attached database configuration.
az kusto attached-database-configuration create

# Deletes the attached database configuration with the given name.
az kusto attached-database-configuration delete

# Returns the list of attached database configurations of the given Kusto cluster.
az kusto attached-database-configuration list

# Returns an attached database configuration.
az kusto attached-database-configuration show

# Update an attached database configuration.
az kusto attached-database-configuration update

# Place the CLI in a waiting state until a condition of the kusto attached-database-configuration is met.
az kusto attached-database-configuration wait

# Create a Kusto cluster principalAssignment.
az kusto cluster-principal-assignment create

# Deletes a Kusto cluster principalAssignment.
az kusto cluster-principal-assignment delete

# Lists all Kusto cluster principalAssignments.
az kusto cluster-principal-assignment list

# Gets a Kusto cluster principalAssignment.
az kusto cluster-principal-assignment show

# Update a Kusto cluster principalAssignment.
az kusto cluster-principal-assignment update

# Place the CLI in a waiting state until a condition of the kusto cluster-principal-assignment is met.
az kusto cluster-principal-assignment wait

# Add a list of language extensions that can run within KQL queries.
az kusto cluster add-language-extension

# Create a Kusto cluster.
az kusto cluster create

# Deletes a Kusto cluster.
az kusto cluster delete

# Detaches all followers of a database owned by this cluster.
az kusto cluster detach-follower-database

# Diagnoses network connectivity status for external resources on which the service is dependent on.
az kusto cluster diagnose-virtual-network

# Lists all Kusto clusters within a resource group. And Lists all Kusto clusters within a subscription.
az kusto cluster list

# Returns a list of databases that are owned by this cluster and were followed by another cluster.
az kusto cluster list-follower-database

# Returns a list of language extensions that can run within KQL queries.
az kusto cluster list-language-extension

# Gets the network endpoints of all outbound dependencies of a Kusto cluster.
az kusto cluster list-outbound-network-dependency-endpoint

# Returns the SKUs available for the provided resource. And Lists eligible SKUs for Kusto resource provider.
az kusto cluster list-sku

# Remove a list of language extensions that can run within KQL queries.
az kusto cluster remove-language-extension

# Gets a Kusto cluster.
az kusto cluster show

# Starts a Kusto cluster.
az kusto cluster start

# Stops a Kusto cluster.
az kusto cluster stop

# Update a Kusto cluster.
az kusto cluster update

# Place the CLI in a waiting state until a condition of the kusto cluster is met.
az kusto cluster wait

# Deletes the data connection with the given name.
az kusto data-connection delete

# Returns the list of data connections of the given Kusto database.
az kusto data-connection list

# Returns a data connection.
az kusto data-connection show

# Place the CLI in a waiting state until a condition of the kusto data-connection is met.
az kusto data-connection wait

# Create a data connection.
az kusto data-connection event-grid create

# Checks that the data connection parameters are valid.
az kusto data-connection event-grid data-connection-validation

# Updates a data connection.
az kusto data-connection event-grid update

# Create a data connection.
az kusto data-connection event-hub create

# Checks that the data connection parameters are valid.
az kusto data-connection event-hub data-connection-validation

# Updates a data connection.
az kusto data-connection event-hub update

# Create a data connection.
az kusto data-connection iot-hub create

# Checks that the data connection parameters are valid.
az kusto data-connection iot-hub data-connection-validation

# Updates a data connection.
az kusto data-connection iot-hub update

# Creates a Kusto cluster database principalAssignment.
az kusto database-principal-assignment create

# Deletes a Kusto principalAssignment.
az kusto database-principal-assignment delete

# Lists all Kusto cluster database principalAssignments.
az kusto database-principal-assignment list

# Gets a Kusto cluster database principalAssignment.
az kusto database-principal-assignment show

# Update a Kusto cluster database principalAssignment.
az kusto database-principal-assignment update

# Place the CLI in a waiting state until a condition of the kusto database-principal-assignment is met.
az kusto database-principal-assignment wait

# Add Database principals permissions.
az kusto database add-principal

# Create a database.
az kusto database create

# Deletes the database with the given name.
az kusto database delete

# Returns the list of databases of the given Kusto cluster.
az kusto database list

# Returns a list of database principals of the given Kusto cluster and database.
az kusto database list-principal

# Remove Database principals permissions.
az kusto database remove-principal

# Returns a database.
az kusto database show

# Updates a database.
az kusto database update

# Place the CLI in a waiting state until a condition of the kusto database is met.
az kusto database wait

# Creates a managed private endpoint.
az kusto managed-private-endpoint create

# Deletes a managed private endpoint.
az kusto managed-private-endpoint delete

# Returns the list of managed private endpoints.
az kusto managed-private-endpoint list

# Gets a managed private endpoint.
az kusto managed-private-endpoint show

# Updates a managed private endpoint.
az kusto managed-private-endpoint update

# Place the CLI in a waiting state until a condition of the kusto managed-private-endpoint is met.
az kusto managed-private-endpoint wait

# Returns operation results.
az kusto operation-result-location show

# Returns operation results.
az kusto operation-result show

# Approve or reject a private endpoint connection with a given name.
az kusto private-endpoint-connection create

# Deletes a private endpoint connection with a given name.
az kusto private-endpoint-connection delete

# Returns the list of private endpoint connections.
az kusto private-endpoint-connection list

# Gets a private endpoint connection.
az kusto private-endpoint-connection show

# Approve or reject a private endpoint connection with a given name.
az kusto private-endpoint-connection update

# Place the CLI in a waiting state until a condition of the kusto private-endpoint-connection is met.
az kusto private-endpoint-connection wait

# Returns the list of private link resources.
az kusto private-link-resource list

# Gets a private link resource.
az kusto private-link-resource show

# Creates a Kusto database script.
az kusto script create

# Deletes a Kusto principalAssignment.
az kusto script delete

# Returns the list of database scripts for given database.
az kusto script list

# Gets a Kusto cluster database script.
az kusto script show

# Updates a database script.
az kusto script update

# Place the CLI in a waiting state until a condition of the kusto script is met.
az kusto script wait
```
