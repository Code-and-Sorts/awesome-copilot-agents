# az redisenterprise

```bash
# Create an existing (overwrite/recreate, with potential downtime) cache cluster.
az redisenterprise create

# Delete a RedisEnterprise cache cluster.
az redisenterprise delete

# List all RedisEnterprise clusters in the specified subscription.
az redisenterprise list

# Lists the available SKUs for scaling the Redis Enterprise cluster.
az redisenterprise list-skus-for-scaling

# Get information about a RedisEnterprise cluster.
az redisenterprise show

# Test connection to a Redis Enterprise cluster.
az redisenterprise test-connection

# Update an existing (overwrite/recreate, with potential downtime) cache cluster.
az redisenterprise update

# Place the CLI in a waiting state until a condition is met.
az redisenterprise wait

# Create a database.
az redisenterprise database create

# Delete a single database.
az redisenterprise database delete

# Exports a database file from target database.
az redisenterprise database export

# Flushes all the keys in this database and also from its linked databases.
az redisenterprise database flush

# Forcibly recreates an existing database on the specified cluster, and rejoins it to an existing replication group. **IMPORTANT NOTE:** All data in this database will be discarded, and the database will temporarily be unavailable while rejoining the replication group.
az redisenterprise database force-link-to-replication-group

# Forcibly removes the link to the specified database resource.
az redisenterprise database force-unlink

# Imports database files to target database.
az redisenterprise database import

# List all databases in the specified RedisEnterprise cluster.
az redisenterprise database list

# Retrieves the access keys for the RedisEnterprise database.
az redisenterprise database list-keys

# Regenerates the RedisEnterprise database's access keys.
az redisenterprise database regenerate-key

# Get information about a database in a RedisEnterprise cluster.
az redisenterprise database show

# Update a database.
az redisenterprise database update

# Upgrades the database Redis version to the latest available.
az redisenterprise database upgrade-db-redis-version

# Place the CLI in a waiting state until a condition is met.
az redisenterprise database wait

# Create access policy assignment for database.
az redisenterprise database access-policy-assignment create

# Delete a single access policy assignment.
az redisenterprise database access-policy-assignment delete

# List all databases in the specified Redis Enterprise cluster.
az redisenterprise database access-policy-assignment list

# Get information about access policy assignment for database.
az redisenterprise database access-policy-assignment show

# Update access policy assignment for database.
az redisenterprise database access-policy-assignment update

# Place the CLI in a waiting state until a condition is met.
az redisenterprise database access-policy-assignment wait

# Get the status of operation.
az redisenterprise operation-status show
```
