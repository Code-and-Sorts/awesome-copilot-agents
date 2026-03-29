# az cosmosdb

```bash
# Checks if an Azure Cosmos DB account name exists.
az cosmosdb check-name-exists

# Creates a new Azure Cosmos DB database account.
az cosmosdb create

# Deletes an Azure Cosmos DB database account.
az cosmosdb delete

# Changes the failover priority for the Azure Cosmos DB database account.
az cosmosdb failover-priority-change

# List Azure Cosmos DB database accounts.
az cosmosdb list

# Offline the specified region for the specified Azure Cosmos DB database account.
az cosmosdb offline-region

# Create a new Azure Cosmos DB database account by restoring from an existing database account.
az cosmosdb restore

# Get the details of an Azure Cosmos DB database account.
az cosmosdb show

# Update an Azure Cosmos DB database account.
az cosmosdb update

# Create an Cassandra keyspace under an Azure Cosmos DB account.
az cosmosdb cassandra keyspace create

# Delete the Cassandra keyspace under an Azure Cosmos DB account.
az cosmosdb cassandra keyspace delete

# Checks if an Azure Cosmos DB Cassandra keyspace exists.
az cosmosdb cassandra keyspace exists

# List the Cassandra keyspaces under an Azure Cosmos DB account.
az cosmosdb cassandra keyspace list

# Show the details of a Cassandra keyspace under an Azure Cosmos DB account.
az cosmosdb cassandra keyspace show

# Migrate the throughput of the Cassandra keyspace between autoscale and manually provisioned.
az cosmosdb cassandra keyspace throughput migrate

# Get the throughput of the Cassandra keyspace under an Azure Cosmos DB account.
az cosmosdb cassandra keyspace throughput show

# Update the throughput of the Cassandra keyspace under an Azure Cosmos DB account.
az cosmosdb cassandra keyspace throughput update

# Create a Cassandra role assignment under an Azure Cosmos DB account.
az cosmosdb cassandra role assignment create

# Delete a Cassandra role assignment under an Azure Cosmos DB account.
az cosmosdb cassandra role assignment delete

# Check if an Azure Cosmos DB role assignment exists.
az cosmosdb cassandra role assignment exists

# List all Cassandra role assignments under an Azure Cosmos DB account.
az cosmosdb cassandra role assignment list

# Show the properties of a Cassandra role assignment under an Azure Cosmos DB account.
az cosmosdb cassandra role assignment show

# Update a Cassandra role assignment under an Azure Cosmos DB account.
az cosmosdb cassandra role assignment update

# Create a Cassandra role definition under an Azure Cosmos DB account.
az cosmosdb cassandra role definition create

# Delete a Cassandra role definition under an Azure Cosmos DB account.
az cosmosdb cassandra role definition delete

# Check if an Azure Cosmos DB role definition exists.
az cosmosdb cassandra role definition exists

# List all Cassandra role definitions under an Azure Cosmos DB account.
az cosmosdb cassandra role definition list

# Show the properties of a Cassandra role definition under an Azure Cosmos DB account.
az cosmosdb cassandra role definition show

# Update a Cassandra role definition under an Azure Cosmos DB account.
az cosmosdb cassandra role definition update

# Create an Cassandra table under an Azure Cosmos DB Cassandra keyspace.
az cosmosdb cassandra table create

# Delete the Cassandra table under an Azure Cosmos DB Cassandra keyspace.
az cosmosdb cassandra table delete

# Checks if an Azure Cosmos DB Cassandra table exists.
az cosmosdb cassandra table exists

# List the Cassandra tables under an Azure Cosmos DB Cassandra keyspace.
az cosmosdb cassandra table list

# Show the details of a Cassandra table under an Azure Cosmos DB Cassandra keyspace.
az cosmosdb cassandra table show

# Update an Cassandra table under an Azure Cosmos DB Cassandra keyspace.
az cosmosdb cassandra table update

# Migrate the throughput of the Cassandra table between autoscale and manually provisioned.
az cosmosdb cassandra table throughput migrate

# Get the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace.
az cosmosdb cassandra table throughput show

# Update the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace.
az cosmosdb cassandra table throughput update

# Cancel a container copy job.
az cosmosdb copy cancel

# Completes an online container copy job.
az cosmosdb copy complete

# Creates a container copy job.
az cosmosdb copy create

# Get a container copy job.
az cosmosdb copy list

# Pause a container copy job.
az cosmosdb copy pause

# Resume a container copy job.
az cosmosdb copy resume

# Get a container copy job.
az cosmosdb copy show

# Create a new Cosmos DB Fleet.
az cosmosdb fleet create

# Delete a specific Cosmos DB Fleet.
az cosmosdb fleet delete

# List Cosmos DB Fleets in a subscription or resource group.
az cosmosdb fleet list

# Show details of a specific Cosmos DB Fleet.
az cosmosdb fleet show

# Create a new Fleet Analytics resource under a Cosmos DB Fleet.
az cosmosdb fleet analytics create

# Delete a Fleet Analytics resource from a Fleet.
az cosmosdb fleet analytics delete

# List all Fleet Analytics resources under a Fleet.
az cosmosdb fleet analytics list

# Show details of a specific Fleet Analytics resource.
az cosmosdb fleet analytics show

# Create a new Fleetspace under a Cosmos DB Fleet.
az cosmosdb fleetspace create

# Delete a Fleetspace from a Fleet.
az cosmosdb fleetspace delete

# List all Fleetspaces under a Fleet.
az cosmosdb fleetspace list

# Show details of a specific Fleetspace.
az cosmosdb fleetspace show

# Update an existing Cosmos DB Fleetspace.
az cosmosdb fleetspace update

# Register an existing Cosmos DB database account to a Fleetspace.
az cosmosdb fleetspace account create

# Unregister a database account from a Fleetspace.
az cosmosdb fleetspace account delete

# List all database accounts associated with a Fleetspace.
az cosmosdb fleetspace account list

# Show details of a registered database account in a Fleetspace.
az cosmosdb fleetspace account show

# Retrieves latest restorable timestamp for the given gremlin graph in given region.
az cosmosdb gremlin retrieve-latest-backup-time

# Create an Gremlin database under an Azure Cosmos DB account.
az cosmosdb gremlin database create

# Delete the Gremlin database under an Azure Cosmos DB account.
az cosmosdb gremlin database delete

# Checks if an Azure Cosmos DB Gremlin database exists.
az cosmosdb gremlin database exists

# List the Gremlin databases under an Azure Cosmos DB account.
az cosmosdb gremlin database list

# Restore a deleted gremlin database within the same account.
az cosmosdb gremlin database restore

# Show the details of a Gremlin database under an Azure Cosmos DB account.
az cosmosdb gremlin database show

# Migrate the throughput of the Gremlin database between autoscale and manually provisioned.
az cosmosdb gremlin database throughput migrate

# Get the throughput of the Gremlin database under an Azure Cosmos DB account.
az cosmosdb gremlin database throughput show

# Update the throughput of the Gremlin database under an Azure Cosmos DB account.
az cosmosdb gremlin database throughput update

# Create an Gremlin graph under an Azure Cosmos DB Gremlin database.
az cosmosdb gremlin graph create

# Delete the Gremlin graph under an Azure Cosmos DB Gremlin database.
az cosmosdb gremlin graph delete

# Checks if an Azure Cosmos DB Gremlin graph exists.
az cosmosdb gremlin graph exists

# List the Gremlin graphs under an Azure Cosmos DB Gremlin database.
az cosmosdb gremlin graph list

# Restore a deleted gremlin graph within the same account.
az cosmosdb gremlin graph restore

# Show the details of a Gremlin graph under an Azure Cosmos DB Gremlin database.
az cosmosdb gremlin graph show

# Update an Gremlin graph under an Azure Cosmos DB Gremlin database.
az cosmosdb gremlin graph update

# Migrate the throughput of the Gremlin Graph between autoscale and manually provisioned.
az cosmosdb gremlin graph throughput migrate

# Get the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database.
az cosmosdb gremlin graph throughput show

# Update the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database.
az cosmosdb gremlin graph throughput update

# List all the versions of all the gremlin databases that were created / modified / deleted in the given restorable account.
az cosmosdb gremlin restorable-database list

# List all the versions of all the gremlin graphs that were created / modified / deleted in the given database and restorable account.
az cosmosdb gremlin restorable-graph list

# List all the databases and its graphs that can be restored in the given account at the given timestamp and region.
az cosmosdb gremlin restorable-resource list

# Create a Gremlin role assignment under an Azure Cosmos DB account.
az cosmosdb gremlin role assignment create

# Delete a Gremlin role assignment under an Azure Cosmos DB account.
az cosmosdb gremlin role assignment delete

# Check if an Azure Cosmos DB role assignment exists.
az cosmosdb gremlin role assignment exists

# List all Gremlin role assignments under an Azure Cosmos DB account.
az cosmosdb gremlin role assignment list

# Show the properties of a Gremlin role assignment under an Azure Cosmos DB account.
az cosmosdb gremlin role assignment show

# Update a Gremlin role assignment under an Azure Cosmos DB account.
az cosmosdb gremlin role assignment update

# Create a Gremlin role definition under an Azure Cosmos DB account.
az cosmosdb gremlin role definition create

# Delete a Gremlin role definition under an Azure Cosmos DB account.
az cosmosdb gremlin role definition delete

# Check if an Azure Cosmos DB role definition exists.
az cosmosdb gremlin role definition exists

# List all Gremlin role definitions under an Azure Cosmos DB account.
az cosmosdb gremlin role definition list

# Show the properties of a Gremlin role definition under an Azure Cosmos DB account.
az cosmosdb gremlin role definition show

# Update a Gremlin role definition under an Azure Cosmos DB account.
az cosmosdb gremlin role definition update

# Assign SystemAssigned identity for a Azure Cosmos DB database account.
az cosmosdb identity assign

# Remove SystemAssigned identity for a Azure Cosmos DB database account.
az cosmosdb identity remove

# Show the identities for a Azure Cosmos DB database account.
az cosmosdb identity show

# List the access keys or connection strings for a Azure Cosmos DB database account.
az cosmosdb keys list

# Regenerate an access key for a Azure Cosmos DB database account.
az cosmosdb keys regenerate

# Retrieves the list of cosmosdb locations and their properties.
az cosmosdb locations list

# Show the Azure Cosmos DB location properties in the given location.
az cosmosdb locations show

# Create a Mongo cluster.
az cosmosdb mongocluster create

# Delete a Mongo Cluster Resource.
az cosmosdb mongocluster delete

# List a Mongo Cluster Resource.
az cosmosdb mongocluster list

# Get a Mongo Cluster Resource.
az cosmosdb mongocluster show

# Update a Mongo cluster.
az cosmosdb mongocluster update

# Create a Mongo cluster firewall rule.
az cosmosdb mongocluster firewall rule create

# Delete a Mongo cluster firewall rule.
az cosmosdb mongocluster firewall rule delete

# Lists firewall rule on a Mongo cluster.
az cosmosdb mongocluster firewall rule list

# Get a Mongo cluster firewall rule.
az cosmosdb mongocluster firewall rule show

# Create a Mongo cluster firewall rule.
az cosmosdb mongocluster firewall rule update

# Retrieves latest restorable timestamp for the given mongodb collection in given region.
az cosmosdb mongodb retrieve-latest-backup-time

# Create an MongoDB collection under an Azure Cosmos DB MongoDB database.
az cosmosdb mongodb collection create

# Delete the MongoDB collection under an Azure Cosmos DB MongoDB database.
az cosmosdb mongodb collection delete

# Checks if an Azure Cosmos DB MongoDB collection exists.
az cosmosdb mongodb collection exists

# List the MongoDB collections under an Azure Cosmos DB MongoDB database.
az cosmosdb mongodb collection list

# Merges the partitions of a mongodb collection.
az cosmosdb mongodb collection merge

# Redistributes the partition throughput of a mongodb collection.
az cosmosdb mongodb collection redistribute-partition-throughput

# Restore a deleted mongodb collection within the same account.
az cosmosdb mongodb collection restore

# Retrieve the partition throughput of a mongodb collection.
az cosmosdb mongodb collection retrieve-partition-throughput

# Show the details of a MongoDB collection under an Azure Cosmos DB MongoDB database.
az cosmosdb mongodb collection show

# Update an MongoDB collection under an Azure Cosmos DB MongoDB database.
az cosmosdb mongodb collection update

# Migrate the throughput of the MongoDB collection between autoscale and manually provisioned.
az cosmosdb mongodb collection throughput migrate

# Get the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database.
az cosmosdb mongodb collection throughput show

# Update the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database.
az cosmosdb mongodb collection throughput update

# Create an MongoDB database under an Azure Cosmos DB account.
az cosmosdb mongodb database create

# Delete the MongoDB database under an Azure Cosmos DB account.
az cosmosdb mongodb database delete

# Checks if an Azure Cosmos DB MongoDB database exists.
az cosmosdb mongodb database exists

# List the MongoDB databases under an Azure Cosmos DB account.
az cosmosdb mongodb database list

# Merges the partitions of a mongodb database.
az cosmosdb mongodb database merge

# Restore a deleted mongodb database within the same account.
az cosmosdb mongodb database restore

# Show the details of a MongoDB database under an Azure Cosmos DB account.
az cosmosdb mongodb database show

# Migrate the throughput of the MongoDB database between autoscale and manually provisioned.
az cosmosdb mongodb database throughput migrate

# Get the throughput of the MongoDB database under an Azure Cosmos DB account.
az cosmosdb mongodb database throughput show

# Update the throughput of the MongoDB database under an Azure Cosmos DB account.
az cosmosdb mongodb database throughput update

# List all the versions of all the mongodb collections that were created / modified / deleted in the given database and restorable account.
az cosmosdb mongodb restorable-collection list

# List all the versions of all the mongodb databases that were created / modified / deleted in the given restorable account.
az cosmosdb mongodb restorable-database list

# List all the databases and its collections that can be restored in the given account at the given timesamp and region.
az cosmosdb mongodb restorable-resource list

# Create a Mongo DB role definition under an Azure Cosmos DB account.
az cosmosdb mongodb role definition create

# Delete a CosmosDb MongoDb role definition under an Azure Cosmos DB account.
az cosmosdb mongodb role definition delete

# Check if an Azure Cosmos DB MongoDb role definition exists.
az cosmosdb mongodb role definition exists

# List all MongoDb role definitions under an Azure Cosmos DB account.
az cosmosdb mongodb role definition list

# Show the properties of a MongoDb role definition under an Azure Cosmos DB account.
az cosmosdb mongodb role definition show

# Update a MongoDb role definition under an Azure Cosmos DB account.
az cosmosdb mongodb role definition update

# Create a Mongo DB user definition under an Azure Cosmos DB account.
az cosmosdb mongodb user definition create

# Delete a CosmosDb MongoDb user definition under an Azure Cosmos DB account.
az cosmosdb mongodb user definition delete

# Check if an Azure Cosmos DB MongoDb user definition exists.
az cosmosdb mongodb user definition exists

# List all MongoDb user definitions under an Azure Cosmos DB account.
az cosmosdb mongodb user definition list

# Show the properties of a MongoDb user definition under an Azure Cosmos DB account.
az cosmosdb mongodb user definition show

# Update a MongoDb user definition under an Azure Cosmos DB account.
az cosmosdb mongodb user definition update

# Create a MongoMI role assignment under an Azure Cosmos DB account.
az cosmosdb mongomi role assignment create

# Delete a MongoMI role assignment under an Azure Cosmos DB account.
az cosmosdb mongomi role assignment delete

# Check if an Azure Cosmos DB role assignment exists.
az cosmosdb mongomi role assignment exists

# List all MongoMI role assignments under an Azure Cosmos DB account.
az cosmosdb mongomi role assignment list

# Show the properties of a MongoMI role assignment under an Azure Cosmos DB account.
az cosmosdb mongomi role assignment show

# Update a MongoMI role assignment under an Azure Cosmos DB account.
az cosmosdb mongomi role assignment update

# Create a MongoMI role definition under an Azure Cosmos DB account.
az cosmosdb mongomi role definition create

# Delete a MongoMI role definition under an Azure Cosmos DB account.
az cosmosdb mongomi role definition delete

# Check if an Azure Cosmos DB role definition exists.
az cosmosdb mongomi role definition exists

# List all MongoMI role definitions under an Azure Cosmos DB account.
az cosmosdb mongomi role definition list

# Show the properties of a MongoMI role definition under an Azure Cosmos DB account.
az cosmosdb mongomi role definition show

# Update a MongoMI role definition under an Azure Cosmos DB account.
az cosmosdb mongomi role definition update

# Adds a virtual network rule to an existing Cosmos DB database account.
az cosmosdb network-rule add

# Lists the virtual network accounts associated with a Cosmos DB account.
az cosmosdb network-rule list

# Remove a virtual network rule from an existing Cosmos DB database account.
az cosmosdb network-rule remove

# Checks availability of a cluster name. Cluster names should be globally unique; at least 3 characters and at most 40 characters long; they must only contain lowercase letters, numbers, and hyphens; and must not start or end with a hyphen.
az cosmosdb postgres check-name-availability

# Create a new cluster with nodes.
az cosmosdb postgres cluster create

# Delete a cluster together with nodes in it.
az cosmosdb postgres cluster delete

# List all clusters in a subscription or a resource group.
az cosmosdb postgres cluster list

# Promotes read replica cluster to an independent read-write cluster.
az cosmosdb postgres cluster promote

# Restarts all nodes in the cluster.
az cosmosdb postgres cluster restart

# Get information about a cluster such as compute and storage configuration and cluster lifecycle metadata such as cluster creation date and time.
az cosmosdb postgres cluster show

# Starts stopped compute on all cluster nodes.
az cosmosdb postgres cluster start

# Stops compute on all cluster nodes.
az cosmosdb postgres cluster stop

# Update an existing cluster. The request body can contain one or several properties from the cluster definition.
az cosmosdb postgres cluster update

# Place the CLI in a waiting state until a condition is met.
az cosmosdb postgres cluster wait

# List nodes of a cluster.
az cosmosdb postgres cluster server list

# Get information about a node in cluster.
az cosmosdb postgres cluster server show

# List all the configurations of a cluster.
az cosmosdb postgres configuration list

# Get information of a configuration for coordinator and nodes.
az cosmosdb postgres configuration show

# Get information of a configuration for coordinator.
az cosmosdb postgres configuration coordinator show

# Updates configuration of coordinator in a cluster.
az cosmosdb postgres configuration coordinator update

# Place the CLI in a waiting state until a condition is met.
az cosmosdb postgres configuration coordinator wait

# Get information of a configuration for worker nodes.
az cosmosdb postgres configuration node show

# Updates configuration of worker nodes in a cluster.
az cosmosdb postgres configuration node update

# Place the CLI in a waiting state until a condition is met.
az cosmosdb postgres configuration node wait

# List all the configurations of a server in cluster.
az cosmosdb postgres configuration server list

# Create a new cluster firewall rule or updates an existing cluster firewall rule.
az cosmosdb postgres firewall-rule create

# Delete a cluster firewall rule.
az cosmosdb postgres firewall-rule delete

# List all the firewall rules on cluster.
az cosmosdb postgres firewall-rule list

# Get information about a cluster firewall rule.
az cosmosdb postgres firewall-rule show

# Update an existing cluster firewall rule.
az cosmosdb postgres firewall-rule update

# Place the CLI in a waiting state until a condition is met.
az cosmosdb postgres firewall-rule wait

# Create a new role or updates an existing role.
az cosmosdb postgres role create

# Delete a cluster role.
az cosmosdb postgres role delete

# List all the roles in a given cluster.
az cosmosdb postgres role list

# Get information about a cluster role.
az cosmosdb postgres role show

# Update an existing role.
az cosmosdb postgres role update

# Place the CLI in a waiting state until a condition is met.
az cosmosdb postgres role wait

# Approve the specified private endpoint connection associated with Azure Cosmos DB.
az cosmosdb private-endpoint-connection approve

# Delete the specified private endpoint connection associated with Azure Cosmos DB.
az cosmosdb private-endpoint-connection delete

# Reject the specified private endpoint connection associated with Azure Cosmos DB.
az cosmosdb private-endpoint-connection reject

# Show details of a private endpoint connection associated with Azure Cosmos DB.
az cosmosdb private-endpoint-connection show

# List the private link resources supported for Azure Cosmos DB.
az cosmosdb private-link-resource list

# List all the database accounts that can be restored.
az cosmosdb restorable-database-account list

# Show the details of a database account that can be restored.
az cosmosdb restorable-database-account show

# Create a cosmosdb service resource.
az cosmosdb service create

# Delete the given cosmosdb service resource.
az cosmosdb service delete

# List all cosmosdb service resource under an account.
az cosmosdb service list

# Get cosmosdb service resource under an account.
az cosmosdb service show

# Update a cosmosdb service resource.
az cosmosdb service update

# Retrieves latest restorable timestamp for the given sql container in given region.
az cosmosdb sql retrieve-latest-backup-time

# Create an SQL container under an Azure Cosmos DB SQL database.
az cosmosdb sql container create

# Delete the SQL container under an Azure Cosmos DB SQL database.
az cosmosdb sql container delete

# Checks if an Azure Cosmos DB SQL container exists.
az cosmosdb sql container exists

# List the SQL containers under an Azure Cosmos DB SQL database.
az cosmosdb sql container list

# Merges the partitions of a sql container.
az cosmosdb sql container merge

# Redistributes the partition throughput of a sql container.
az cosmosdb sql container redistribute-partition-throughput

# Restore a deleted sql container within the same account.
az cosmosdb sql container restore

# Retrieve  the partition throughput of a sql container.
az cosmosdb sql container retrieve-partition-throughput

# Show the details of a SQL container under an Azure Cosmos DB SQL database.
az cosmosdb sql container show

# Update an SQL container under an Azure Cosmos DB SQL database.
az cosmosdb sql container update

# Migrate the throughput of the SQL container between autoscale and manually provisioned.
az cosmosdb sql container throughput migrate

# Get the throughput of the SQL container under an Azure Cosmos DB SQL database.
az cosmosdb sql container throughput show

# Update the throughput of the SQL container under an Azure Cosmos DB SQL database.
az cosmosdb sql container throughput update

# Create an SQL database under an Azure Cosmos DB account.
az cosmosdb sql database create

# Delete the SQL database under an Azure Cosmos DB account.
az cosmosdb sql database delete

# Checks if an Azure Cosmos DB SQL database exists.
az cosmosdb sql database exists

# List the SQL databases under an Azure Cosmos DB account.
az cosmosdb sql database list

# Merge the partitions of a sql database.
az cosmosdb sql database merge

# Restore a deleted sql database within the same account.
az cosmosdb sql database restore

# Show the details of a SQL database under an Azure Cosmos DB account.
az cosmosdb sql database show

# Migrate the throughput of the SQL database between autoscale and manually provisioned.
az cosmosdb sql database throughput migrate

# Get the throughput of the SQL database under an Azure Cosmos DB account.
az cosmosdb sql database throughput show

# Update the throughput of the SQL database under an Azure Cosmos DB account.
az cosmosdb sql database throughput update

# List all the versions of all the sql containers that were created / modified / deleted in the given database and restorable account.
az cosmosdb sql restorable-container list

# List all the versions of all the sql databases that were created / modified / deleted in the given restorable account.
az cosmosdb sql restorable-database list

# List all the databases and its containers that can be restored in the given account at the given timesamp and region.
az cosmosdb sql restorable-resource list

# Create a SQL role assignment under an Azure Cosmos DB account.
az cosmosdb sql role assignment create

# Delete a SQL role assignment under an Azure Cosmos DB account.
az cosmosdb sql role assignment delete

# Check if an Azure Cosmos DB role assignment exists.
az cosmosdb sql role assignment exists

# List all SQL role assignments under an Azure Cosmos DB account.
az cosmosdb sql role assignment list

# Show the properties of a SQL role assignment under an Azure Cosmos DB account.
az cosmosdb sql role assignment show

# Update a SQL role assignment under an Azure Cosmos DB account.
az cosmosdb sql role assignment update

# Poll on a SQL role assignment until a specific condition is met.
az cosmosdb sql role assignment wait

# Create a SQL role definition under an Azure Cosmos DB account.
az cosmosdb sql role definition create

# Delete a SQL role definition under an Azure Cosmos DB account.
az cosmosdb sql role definition delete

# Check if an Azure Cosmos DB role definition exists.
az cosmosdb sql role definition exists

# List all SQL role definitions under an Azure Cosmos DB account.
az cosmosdb sql role definition list

# Show the properties of a SQL role definition under an Azure Cosmos DB account.
az cosmosdb sql role definition show

# Update a SQL role definition under an Azure Cosmos DB account.
az cosmosdb sql role definition update

# Poll on a SQL role definition until a specific condition is met.
az cosmosdb sql role definition wait

# Create an SQL stored procedure under an Azure Cosmos DB SQL container.
az cosmosdb sql stored-procedure create

# Delete the SQL stored procedure under an Azure Cosmos DB SQL container.
az cosmosdb sql stored-procedure delete

# List the SQL stored procedures under an Azure Cosmos DB SQL container.
az cosmosdb sql stored-procedure list

# Show the details of a SQL stored procedure under an Azure Cosmos DB SQL container.
az cosmosdb sql stored-procedure show

# Creates or Updates an Azure Cosmos DB SQL stored procedure.
az cosmosdb sql stored-procedure update

# Create an SQL trigger under an Azure Cosmos DB SQL container.
az cosmosdb sql trigger create

# Delete the SQL trigger under an Azure Cosmos DB SQL container.
az cosmosdb sql trigger delete

# List the SQL triggers under an Azure Cosmos DB SQL container.
az cosmosdb sql trigger list

# Show the details of a SQL trigger under an Azure Cosmos DB SQL container.
az cosmosdb sql trigger show

# Updates an Azure Cosmos DB SQL trigger.
az cosmosdb sql trigger update

# Create an SQL user defined function under an Azure Cosmos DB SQL container.
az cosmosdb sql user-defined-function create

# Delete the SQL user defined function under an Azure Cosmos DB SQL container.
az cosmosdb sql user-defined-function delete

# List the SQL user defined functions under an Azure Cosmos DB SQL container.
az cosmosdb sql user-defined-function list

# Show the details of a SQL user defined function under an Azure Cosmos DB SQL container.
az cosmosdb sql user-defined-function show

# Creates or Updates an Azure Cosmos DB SQL user defined function.
az cosmosdb sql user-defined-function update

# Create an Table under an Azure Cosmos DB account.
az cosmosdb table create

# Delete the Table under an Azure Cosmos DB account.
az cosmosdb table delete

# Checks if an Azure Cosmos DB table exists.
az cosmosdb table exists

# List the Tables under an Azure Cosmos DB account.
az cosmosdb table list

# Restore a deleted table within the same account.
az cosmosdb table restore

# Retrieves latest restorable timestamp for the given table in given region.
az cosmosdb table retrieve-latest-backup-time

# Show the details of a Table under an Azure Cosmos DB account.
az cosmosdb table show

# List all the tables that can be restored in the given account at the given timestamp and region.
az cosmosdb table restorable-resource list

# List all the versions of all the tables that were created / modified / deleted in the given restorable account.
az cosmosdb table restorable-table list

# Create a Table role assignment under an Azure Cosmos DB account.
az cosmosdb table role assignment create

# Delete a Table role assignment under an Azure Cosmos DB account.
az cosmosdb table role assignment delete

# Check if an Azure Cosmos DB role assignment exists.
az cosmosdb table role assignment exists

# List all Table role assignments under an Azure Cosmos DB account.
az cosmosdb table role assignment list

# Show the properties of a Table role assignment under an Azure Cosmos DB account.
az cosmosdb table role assignment show

# Update a Table role assignment under an Azure Cosmos DB account.
az cosmosdb table role assignment update

# Create a Table role definition under an Azure Cosmos DB account.
az cosmosdb table role definition create

# Delete a Table role definition under an Azure Cosmos DB account.
az cosmosdb table role definition delete

# Check if an Azure Cosmos DB role definition exists.
az cosmosdb table role definition exists

# List all Table role definitions under an Azure Cosmos DB account.
az cosmosdb table role definition list

# Show the properties of a Table role definition under an Azure Cosmos DB account.
az cosmosdb table role definition show

# Update a Table role definition under an Azure Cosmos DB account.
az cosmosdb table role definition update

# Migrate the throughput of the Table between autoscale and manually provisioned.
az cosmosdb table throughput migrate

# Get the throughput of the Table under an Azure Cosmos DB account.
az cosmosdb table throughput show

# Update the throughput of the Table under an Azure Cosmos DB account.
az cosmosdb table throughput update
```
